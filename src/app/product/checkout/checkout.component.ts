import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
// import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
// import {  IPayPalConfig,  ICreateOrderRequest } from 'ngx-paypal';
import { CartItem } from '../../classes/cart-item';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Observable, of, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
declare var Razorpay: any;
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paid: boolean = false;
  main_url = environment.apiUrl;
  file_url = environment.fileUrl;

  paymentoptions;
  // form group
  public checkoutForm: FormGroup;
  public cartItems: Observable<CartItem[]> = of([]);
  public checkOutItems: CartItem[] = [];
  public orderDetails: any[] = [];
  public amount: number;
  // public payPalConfig  : PayPalConfig;
  private getCartlistSubscribe: Subscription;
  private razorpayOrderIdSubscribe: Subscription;
  private getAddressSubscribe: Subscription;
  private getUserDetailss: Subscription;
  private orderApiSubscribe: Subscription;
  cartlistapi;
  cartListData = [];
  get_user_dtls;
  model: any = {};
  mrpAmount = 0;
  discountAmount = 0;
  netAmount = 0;
  taxAmount = 0;
  totalAmount: any;
  shippingAddress;
  billingAddress;
  addresslist: any;
  showAddress: any = {};

  paymentOrderId;
  orderProducts = [];
  parms_action_id;
  getUserDetailsList_api;
  userDetails;
  razorpay_payment_id;
  razorpay_order_id;
  razorpay_signature;
  paymentType = 'ONLINE';
  removefromCartSubscribe: Subscription;
  loader: boolean;
  orderId: any;
  saleAmount: number;
  dealPrice: number;
  gsttax: number = 0;
  chacked = false;
  selectedProduct: any;
  selectedIdentifire: any;
  index: any;
  modal: any = {};
  total: number = 0;
  giftWrapAmount: number = 0;
  totalUnits: number = 0;
  btnLoader: boolean;
  curentDate;
  data: any = [];
  // Form Validator
  constructor(private fb: FormBuilder, private cartService: CartService, private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: LoginService, private toastrService: ToastrService,
    public productsService: ProductsService, private orderService: OrderService,
    private modalService: NgbModal) {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(products => this.checkOutItems = products);
    console.log("this.checkOutItems", this.checkOutItems);
    this.getTotal().subscribe(amount => this.amount = amount);
    // this.initConfig();
    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('this.parms_action_id', this.parms_action_id);


    this.commonFunction();
    this.curentDate = new Date();
    console.log('this.curentDate', this.curentDate);
    
  }

  //  commonFunction start
  commonFunction() {
    this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);

        // user details set
        this.cartlistapi = "user/cart/getUserCart?userId=" + res.logininfo.uid;
        // user details get
        this.getUserDetailsList_api = 'auth/info/' + this.get_user_dtls.authority + '/' + this.get_user_dtls.email;
        this.getUserDetailsList();
        // Call wish list data 
        this.getCartListData();
      }
    });
    this.getAddressList();

    this.model = {
      payment_type: 'ONLINE',
    }

  }
  // commonFunction end
  // getDesignerList start
  getsession: any = {};
  getAddressList() {
    this.getAddressSubscribe = this.http.get(API_URL + 'user/address').subscribe(
      (response: any) => {
        this.addresslist = response;
        if (this.parms_action_id == 'guest') {

          this.getsession = JSON.parse(localStorage.getItem("address"));
          console.log("getsession", this.getsession);
          if (this.getsession == null) {
            this.router.navigateByUrl(`/address/all`);
          }
          this.shippingAddress = {
            address1: this.getsession.address1,
            address2: this.getsession.address2,
            country: this.getsession.country,
            state: this.getsession.state,
            city: this.getsession.city,
            postalCode: this.getsession.postalCode,
            landmark: this.getsession.landmark,
            fullName: this.getsession.fullName,
            email: this.getsession.email,
            mobile: this.getsession.mobile
          }
          this.showAddress = {
            address1: this.getsession.address1,
            address2: this.getsession.address2,
            country: this.getsession.country,
            state: this.getsession.state,
            city: this.getsession.city,
            postalCode: this.getsession.postalCode,
            landmark: this.getsession.landmark,
            fullName: this.getsession.fullName,
            email: this.getsession.email,
            mobile: this.getsession.mobile
          }
          this.billingAddress = {
            address1: this.getsession.address1,
            address2: this.getsession.address2,
            country: this.getsession.country,
            state: this.getsession.state,
            city: this.getsession.city,
            postalCode: this.getsession.postalCode,
            landmark: this.getsession.landmark,
            fullName: this.getsession.fullName,
            email: this.getsession.email,
            mobile: this.getsession.mobile
          }
        }
        else {
          for (let index = 0; index < response.length; index++) {
            if (response[index].id == this.parms_action_id) {
              this.showAddress = response[index];
              // this.shippingAddress = response[index].address1 + ',' + response[index].address2 + ',' + response[index].country + ',' + response[index].state + ',' + response[index].city + ',' + response[index].postalCode + ',' + response[index].landmark + ',' + response[index].fullName + ',' + response[index].email + ',' + response[index].mobile;
              this.shippingAddress = {
                address1: response[index].address1,
                address2: response[index].address2,
                country: response[index].country,
                state: response[index].state,
                city: response[index].city,
                postalCode: response[index].postalCode,
                landmark: response[index].landmark,
                fullName: response[index].fullName,
                email: response[index].email,
                mobile: response[index].mobile
              }
              this.billingAddress = {
                address1: response[index].address1,
                address2: response[index].address2,
                country: response[index].country,
                state: response[index].state,
                city: response[index].city,
                postalCode: response[index].postalCode,
                landmark: response[index].landmark,
                fullName: response[index].fullName,
                email: response[index].email,
                mobile: response[index].mobile
              }
              // this.billingAddress = response[index].address1 + ',' + response[index].address2 + ',' + response[index].country + ',' + response[index].state + ',' + response[index].city + ',' + response[index].postalCode + ',' + response[index].landmark + ',' + response[index].fullName + ',' + response[index].email + ',' + response[index].mobile;
            }

          }
        }

        console.log('this.addresslist', this.addresslist, this.billingAddress, this.shippingAddress);
        console.log('this.showAddress', this.showAddress);
      }
    );
  }
  // getDesignerList end
  getCartListData() {
    var _taxamount = 0, _netAmount = 0;
    this.getCartlistSubscribe = this.http.get(API_URL + this.cartlistapi).subscribe(
      (response: any) => {
        console.log('Cart list', response);
        this.cartListData = response;
        this.data = [];
        for (let index = 0; index < this.cartListData.length; index++) {
          let Data = response[index].cartData;
          for (let j = 0; j < Data.length; j++) {
            this.data.push(
              {
              displayName:response[index].designerProfile.displayName,
              productName:response[index].productDetails.productName,
              images:response[index].images[0].large,
              productId:response[index].productId,
              slug:response[index].slug,
              selectedSize:response[index].cartData[j].selectedSize,
              purchaseMinQuantity:response[index].purchaseMinQuantity,
              quantity:response[index].cartData[j].qty,
              purchaseMaxQuantity:response[index].purchaseMaxQuantity,
              salePrice:response[index].deal.salePrice,
              mrp:response[index].mrp,
              customization:response[index].cartData[j].customization,
              id:response[index].cartData[j].id,
              taxValue:response[index].deal.taxAmount.taxValue,
              dealType:response[index].deal.dealType,
              state:response[index].designerProfile.state,
              cgst:response[index].deal.taxAmount.cgst,
              sgst:response[index].deal.taxAmount.sgst,
              igst:response[index].deal.taxAmount.igst,
              giftWrapAmount:response[index].giftWrapAmount,
              cancelAcceptable:response[index].cancelAcceptable,
              returnAcceptable:response[index].returnAcceptable,
              colour:response[index].colour,
              productSku:response[index].sku,
              measurementObject:response[index].cartData[j].measurementObject,
              cod:response[index].cod,
              priceType:response[index].priceType,
              designerId:response[index].designerId,
              firstName1:response[index].designerProfile.firstName1,
              lastName1:response[index].designerProfile.lastName1,
              withDesignCustomization:response[index].withDesignCustomization,
              withGiftWrap:response[index].withGiftWrap,
            }
            )
          }
        }
        var productTotal = 0, _mrp = 0, discountAmount = 0, amount = 0, _salePrice = 0, _basicAmount = 0, _afterDiscount = 0, producttax = 0, _discount = 0, _taxamount = 0, hsnData: any = {};

        for (let index = 0; index < this.data.length; index++) {

          _basicAmount = parseInt(((100 * this.data[index].mrp) / (100 + this.data[index].taxValue)).toFixed(0))
          amount = parseInt(((100 * this.data[index].mrp) / (100 + this.data[index].taxValue)).toFixed(0))

          if (this.data[index].dealType != 'None') {
            discountAmount = parseInt(((100 * this.data[index].salePrice) / (100 + this.data[index].taxValue)).toFixed(0))
            // _discount = parseInt((( 100 *this.cartListData[index].deal.salePrice) / ( 100 +this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0))  * this.cartListData[index].cartData.qty

            if (this.data[index].salePrice < discountAmount) {
              _taxamount = parseInt((discountAmount - this.data[index].salePrice).toFixed(0)) * this.data[index].quantity;
            }
            else {
              _taxamount = parseInt((this.data[index].salePrice - discountAmount).toFixed(0)) * this.data[index].quantity;
            }
          }
          else {
            _taxamount = (this.data[index].mrp - amount) * this.data[index].quantity;
            // _discount= 0;
          }
          if (this.data[index].salePrice != null && this.data[index].salePrice != 0) {
            _salePrice = parseInt((this.data[index].salePrice * this.data[index].quantity).toFixed(2));
            _mrp = parseInt((this.data[index].mrp * this.data[index].quantity).toFixed(2));
            productTotal = parseInt((this.data[index].salePrice * this.data[index].quantity).toFixed(2));
            // _discount = parseInt(((this.cartListData[index].mrp - this.cartListData[index].deal.salePrice) * this.cartListData[index].cartData.qty).toFixed(2));
            _afterDiscount = parseInt(((100 * this.data[index].salePrice) / (100 + this.data[index].taxValue)).toFixed(0))
          }
          else {
            _salePrice = 0;
            _mrp = parseInt((this.data[index].mrp * this.data[index].quantity).toFixed(2));
            productTotal = parseInt((this.data[index].mrp * this.data[index].quantity).toFixed(2));
          }

          if (this.data[index].dealType != 'None') {
            // _discount = parseInt((( 100 * this.cartListData[index].deal.salePrice) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0))
            _discount = (_basicAmount - _afterDiscount) * this.data[index].quantity;
          } else {
            _discount = 0;
          }

          // if(this.cartListData[index].deal.taxAmount)
          // {
          //   _taxamount = parseInt(((this.cartListData[index].mrp -  (( 100 * this.cartListData[index].mrp) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue))) * this.cartListData[index].cartData.qty).toFixed(2));
          // }
          _netAmount = parseInt((((100 * this.data[index].mrp) / (100 + this.data[index].taxValue)) * this.data[index].quantity).toFixed(2));
          this.totalUnits = this.totalUnits + this.data[index].quantity;
          console.log("_netAmount", _netAmount);
          this.netAmount = this.netAmount + _netAmount;
          this.discountAmount = this.discountAmount + _discount;
          this.total = this.total + productTotal;
          this.mrpAmount = this.mrpAmount + _mrp;
          this.saleAmount = this.saleAmount + _salePrice;
          this.taxAmount = this.taxAmount + _taxamount;
          console.log("this.taxAmount", this.taxAmount, _taxamount, this.data[index].mrp);

          // products
          if (this.data[index].state == this.showAddress.state) {
            hsnData = {
              cgst: this.data[index].cgst,
              sgst: this.data[index].sgst
            }
          }
          else {
            hsnData = { igst: this.data[index].igst }
          }
          const products = {
            hsnData: hsnData,
            productId: this.data[index].productId,
            giftWrapAmount: this.data[index].giftWrapAmount,
            discount: _discount,
            size: this.data[index].selectedSize,
            productName: this.data[index].productName,
            orderItemStatus: "Active",
            reachedCentralHub: "",
            cancelAcceptable: this.data[index].cancelAcceptable,
            returnAcceptable: this.data[index].returnAcceptable,
            images: this.data[index].images,
            colour: this.data[index].colour,
            sku: this.data[index].sku,
            units: this.data[index].quantity,
            cod: this.data[index].cod,
            customization: this.data[index].customization,
            measurementObject: this.data[index].measurementObject,
            customizationStatus: false,
            giftwrapStatus: false,
            customObject: {},
            giftWrapObject: {},
            mrp: parseInt((this.data[index].mrp * this.data[index].quantity).toFixed(2)),
            salesPrice: parseInt((this.data[index].salePrice * this.data[index].quantity).toFixed(2)),
            taxRate: 0,
            taxAmount: _taxamount,
            taxType: this.data[index].priceType,
            designerId: this.data[index].designerId,
            displayName: this.data[index].displayName,
            designerName: this.data[index].firstName1 + ' ' + this.data[index].lastName1,
            userId: this.get_user_dtls.uid,
            user_id: this.get_user_dtls.uid
          }
          if (this.data[index].taxValue) {
            products.taxRate = this.data[index].taxValue;
          }
          console.log('getCartListData', '_taxamount', _taxamount, '_discount', _discount, 'discountAmount', this.discountAmount, 'total', this.total, 'mrpAmount', this.mrpAmount, '_mrp', _mrp, 'productTotal', productTotal, '_salePrice', _salePrice);
          this.orderProducts.push(products);

        }
        console.log('NEWtotal', this.total, this.discountAmount);

        // this.totalAmount = this.totalAmount.toFixed(2);
        var totalNumberCnvt: number = + this.totalAmount;
        this.totalAmount = totalNumberCnvt;
      },
      errRes => {
        this.toastrService.error(errRes.error.message);

      }
    );
  }
  // cart list end
  toggleChange(event: any, content: any, item: any, identifire, index: any) {
    console.log("Event Value....", event, item, index);
    console.log('identifire', identifire);
    
    this.index = index;
    if (event == 'true') {
      this.selectedProduct = item;
      this.selectedIdentifire = identifire;
      this.modal.index = false;
      this.modalService.open(content, { size: 'sm' });
    } else {
      console.log('else');
      
      if (identifire == 'customization') {
        console.log('customization');
        
        // for (let index = 0; index < this.orderProducts.length; index++) {
        //   if(this.selectedProduct.productId == this.orderProducts[index].productId)
        //   {
        this.orderProducts[index].customizationStatus = false;
        this.orderProducts[index].customObject = {}
        
        //   } 
        // }
      } else if (identifire == 'giftwrap') {
        console.log('giftwrap');
        
        var giftWrapAmount = 0;
        for (let index = 0; index < this.orderProducts.length; index++) {
          if (this.selectedProduct.productId == this.orderProducts[index].productId) {
            this.orderProducts[index].giftwrapStatus = false;
            this.orderProducts[index].giftWrapObject = {};
            console.log("this.orderProducts[index].giftWrapObject...",this.orderProducts[index].giftWrapObject);
            
          }
          console.log("orderProducts", this.orderProducts, this.total, this.orderProducts[index].giftWrapAmount);

          if (this.orderProducts[index].salesPrice == null || this.orderProducts[index].salesPrice == 0) {
            this.orderProducts[index].mrp = this.orderProducts[index].mrp - this.orderProducts[index].giftWrapAmount;
            this.total = this.total - this.orderProducts[index].giftWrapAmount;
            this.giftWrapAmount = this.giftWrapAmount - this.orderProducts[index].giftWrapAmount;
          } else {
            this.orderProducts[index].mrp = this.orderProducts[index].mrp - this.orderProducts[index].giftWrapAmount;
            this.orderProducts[index].salesPrice = this.orderProducts[index].salesPrice - this.orderProducts[index].giftWrapAmount;
            this.total = this.total - this.orderProducts[index].giftWrapAmount;
            this.giftWrapAmount = this.giftWrapAmount - this.orderProducts[index].giftWrapAmount;


          }
          // this.giftWrapAmount = this.giftWrapAmount - giftWrapAmount;
        }
      }
    }
    console.log("orderProducts", this.orderProducts, this.total, this.orderProducts[index].giftWrapAmount);

  }
  // Edit Design Customization Start
  editDesignGift(content: any, item: any, identifire,index: any){
    this.selectedProduct = item;
      this.selectedIdentifire = identifire;
      this.modal.index = false;
    this.modalService.open(content, { size: 'sm' });
    if(this.selectedIdentifire == 'customization'){
      this.model={
        customizationDetails: this.orderProducts[index].customObject.customizationDetails
      }
    }else if(this.selectedIdentifire == 'giftwrap')
    
    this.model={
      from:this.orderProducts[index].giftWrapObject.from,
      to:this.orderProducts[index].giftWrapObject.to,
      message:this.orderProducts[index].giftWrapObject.message
    }
  }
  // Edit Design Customization End
  ordersCustomizationSubmit(form: NgForm) {
    if (form.value.customizationDetails == '') {
      this.index = false;
    }
    for (let index = 0; index < this.orderProducts.length; index++) {
      if (this.selectedProduct.productId == this.orderProducts[index].productId) {
        this.orderProducts[index].customizationStatus = true;
        this.orderProducts[index].customObject = {
          customizationDetails: form.value.customizationDetails
        }
      }
    }
    form.reset();
    this.modalService.dismissAll();
    this.model = {
      payment_type: 'ONLINE',
    }
    console.log("orderProducts", this.orderProducts);
  }
  ordersGiftSubmit(form: NgForm) {
    var giftWrapAmount = 0;
    for (let index = 0; index < this.orderProducts.length; index++) {
      if (this.selectedProduct.productId == this.orderProducts[index].productId) {
        this.orderProducts[index].giftwrapStatus = true;
        this.orderProducts[index].giftWrapObject = {
          from: form.value.from,
          to: form.value.to,
          message: form.value.message,
        }
        if (this.orderProducts[index].salesPrice == null || this.orderProducts[index].salesPrice == 0) {
          this.orderProducts[index].mrp = this.orderProducts[index].mrp + this.orderProducts[index].giftWrapAmount;
          this.total = this.total + this.orderProducts[index].giftWrapAmount;
          this.giftWrapAmount = this.giftWrapAmount + this.orderProducts[index].giftWrapAmount;


        } else {
          this.orderProducts[index].salesPrice = this.orderProducts[index].salesPrice + this.orderProducts[index].giftWrapAmount;
          this.total = this.total + this.orderProducts[index].giftWrapAmount;
          this.giftWrapAmount = this.giftWrapAmount + this.orderProducts[index].giftWrapAmount;

        }

      }
      // this.giftWrapAmount = giftWrapAmount; 
    }
    console.log("orderProducts", this.orderProducts);
    form.reset();
    this.modalService.dismissAll();
  }


  closeModal(identifire) {

    this.modalService.dismissAll();
  }
  // Get sub Total
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  // stripe payment gateway
  stripeCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'PUBLISHBLE_KEY', // publishble key
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.orderService.createOrder(this.checkOutItems, this.checkoutForm.value, token.id, this.amount);
      }
    });
    handler.open({
      name: 'Multikart',
      description: 'Online Fashion Store',
      amount: this.amount * 100
    })


  }

  /* -------------Get modules start------------- */
  getUserDetailsList() {
    this.getUserDetailss = this.http.get(API_URL + this.getUserDetailsList_api).subscribe(
      (res: any) => {

        this.userDetails = res;
        console.log('this.userDetails', this.userDetails);

      },
      errRes => {
        console.log("Get moduleList >", errRes);
      }
    );
  }
  /* -------------Get modules end------------- */

  // Paypal payment gateway
  // private initConfig(): void {
  //     this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
  //       commit: true,
  //       client: {
  //         sandbox: 'CLIENT_ID', // client Id
  //       },
  //       button: {
  //         label: 'paypal',
  //         size:  'small',    // small | medium | large | responsive
  //         shape: 'rect',     // pill | rect
  //         //color: 'blue',   // gold | blue | silver | black
  //         //tagline: false  
  //       },
  //       onPaymentComplete: (data, actions) => {
  //         this.orderService.createOrder(this.checkOutItems, this.checkoutForm.value, data.orderID, this.amount);
  //       },
  //       onCancel: (data, actions) => {
  //         console.log('OnCancel');
  //       },
  //       onError: (err) => {
  //         console.log('OnError');
  //       },
  //       transactions: [{
  //         amount: {
  //           currency: this.productsService.currency,
  //           total: this.amount
  //         }
  //       }]
  //     });
  // }

  // Payment mood change start
  onChangePaymentMode(_select) {
    this.btnLoader = true;
    console.log('paymeny mood>>', _select);
    this.paymentType = _select;
    // this.paid = true;
    if (_select == 'ONLINE') {
      let totalProducts = {
        products: this.orderProducts,
        giftWrapAmount: this.giftWrapAmount,
        mrp: this.mrpAmount,
        discount: this.discountAmount,
        netPrice: this.netAmount,
        taxAmount: this.taxAmount,
        totalAmount: this.total * 100,
        shippingAddress: this.shippingAddress,
        billingAddress: this.billingAddress,
        userId: this.get_user_dtls.uid
      }
      console.log("totalProducts", totalProducts);

      this.razorpayOrderIdSubscribe = this.http.post(API_URL + 'userOrder/razorpay/create', totalProducts).subscribe(
        (response: any) => {
          this.btnLoader = false;
          console.log('paymentOrderId', response);
          this.paymentOrderId = response.id
          if (response.status == "created" && response.id) {
            this.checkout();
          }
          
        },
        errRes => {
          this.paid = false;
          this.btnLoader = false;
        }
      );
    } else {

    }
  }
  // Payment mood change start

  /*-----------Payment checkout start-----------*/
  paymentResponse;
  checkout() {
    // this.btnLoader = true;
    this.orderAdd();
    console.log(' this.totalAmount>>>', this.total, this.taxAmount);

    let totalAmountPrice = Math.round(this.total)
    console.log('totalAmountPrice', totalAmountPrice);

    // -----------------razorpay payment getwat call start-------------------
    
    var paymentSucessVariable = 0;
    var razorpay_payment_id;
    var razorpay_order_id;
    var razorpay_signature;
    this.paymentoptions = {
      "key": 'rzp_test_q5ch2uQXmBRynp', //(rzp_test_oBBldknGgfDRpv) Enter the Key ID generated from the Dashboard
      "amount": this.total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
      "currency": "INR",
      "name": 'Divatt Product',
      "description": 'This product is related only for garments',
      "image": 'https://5.imimg.com/data5/MX/KB/MY-2138131/shopping-bags-500x500.png',
      "order_id": this.paymentOrderId,
      "handler": function (response) {
        //alert(response.razorpay_payment_id); //error alert

        console.log('===================== my api call ================');

        //------ api call only javascript work start---------
        var opts = {
          method: 'POST',
          headers: {

          }
        };
        razorpay_payment_id = response.razorpay_payment_id;
        razorpay_order_id = response.razorpay_order_id;
        razorpay_signature = response.razorpay_signature;
        this.paymentResponse = response;
        console.log('payment response', response);



        // var order_api = 'http://192.168.1.87:8085/dev/userOrder/add';
        var order_api = 'https://dev.divatt.com/dev' + '/userOrder/add';
        fetch(order_api, opts).then(function (responsee) {
          // return response.json();
          console.log('fetch(order_api, opts', responsee);

        }, (error) => {
          console.log("fetch(order_api, optserror", error);

        })
        .then(function (body) {
          //doSomething with body;
          console.log('body >>>>>>>>>>>>>>>>>>>>', body);
          paymentSucessVariable = 1;
          // this.router.navigateByUrl(`dashboard`);
        });
        //-api call only javascript work end-

        // this.router.navigateByUrl(`dashboard`);

      },
      "prefill": {
        "name": this.userDetails.firstName + this.userDetails.lastName,
        "email": this.userDetails.email,
        "contact": this.userDetails.mobileNo
      },
      "notes": {
        "address": this.billingAddress
      },
      "theme": {
        "color": "#1A9AC0"
      },
      "modal": {
        "ondismiss": function(){
          // window.location.replace(`order-successfully/12`);
          // location.reload();
        }
      }

    };
    
    // initPay() {
    var rzp1 = new Razorpay(this.paymentoptions);
    rzp1.open();
    console.log("payment works");
    let paymentFailedData;
    rzp1.on('payment.failed', function (response) {
      paymentFailedData = response;
      console.log('paymentFailedData', paymentFailedData, response);
      
    });
    
    //------ razorpay payment getwat call end -----
    let prevNowPlaying = setInterval(() => {
      if (paymentSucessVariable == 1) {
        console.log("IF", paymentSucessVariable);
        clearInterval(prevNowPlaying);
        this.razorpay_payment_id = razorpay_payment_id;
        this.razorpay_order_id = razorpay_order_id;
        this.razorpay_signature = razorpay_signature;
        this.onPaymentSubmitData();
        // this.orderApiCall();
      }
      else {
        // console.log("else", paymentSucessVariable, prevNowPlaying);
      }

    }, 1000);
    console.log("Fall", paymentSucessVariable, prevNowPlaying);
    // console.log('checkoutLoader', checkoutLoader);
    
  }

  // success order api call start
  orderApiCall() {
    this.loader = true;
    console.log('order api call');
    let paymentStatus;
    if (this.razorpay_payment_id != null) {
      paymentStatus = 'COMPLETED'
    } else { paymentStatus = 'INCOMPLETED' }
    var currentdate = new Date();
    console.log("orderdate", currentdate);
    var orderdate = moment(currentdate).format('DD/MM/YYYY');
    console.log("orderdate", currentdate, orderdate);
    let data = {
      orderDetailsEntity: {
        billingAddress: this.billingAddress,
        discount: this.discountAmount,
        mrp: this.mrpAmount,
        netPrice: this.netAmount,
        shippingAddress: this.shippingAddress,
        taxAmount: this.taxAmount,
        totalAmount: this.total,
        giftWrapAmount: this.giftWrapAmount,
        units: this.totalUnits,
        userId: this.get_user_dtls.uid,
        deliveryCheckUrl: "",
        deliveryDate: "",
        deliveryMode: "warehouse",
        deliveryStatus: "dispatch",
        // orderDate: orderdate,
        orderStatus: 'Active',
        shippingCharges: 0,
        razorpayOrderId: this.paymentOrderId
      },
      orderPaymentEntity: {
        userId: this.get_user_dtls.uid,
        paymentDetails: {
          razorpay_payment_id: this.razorpay_payment_id,
          razorpay_order_id: this.razorpay_order_id,
          razorpay_signature: this.razorpay_signature
        },
        paymentMode: this.paymentType,
        paymentResponse: {
          razorpay_payment_id: this.razorpay_payment_id,
          razorpay_order_id: this.razorpay_order_id,
          razorpay_signature: this.razorpay_signature
        },
        paymentStatus: paymentStatus,

      },
      orderSKUDetailsEntity: this.orderProducts
    }
    console.log("totalProducts", data);

    this.orderApiSubscribe = this.http.post(API_URL + 'userOrder/add', data).subscribe(
      (res: any) => {
        // if(res.status === 200){
        console.log("res.orderId", res.orderId);

        this.router.navigateByUrl(`order-successfully`);
        this.removeAllcart();
        this.loader = false;
        // }


      },
      errRes => {
        this.loader = false;
        console.log("errRes >", errRes);
        //  this.removeAllcart();
        this.toastrService.error(errRes.error.message);
      }
    );

  }
  // success order api call end
  onPaymentSubmitData() {
    this.btnLoader = true;
    console.log('order paymentdata', this.paymentResponse);
    let paymentStatus;
    if (this.razorpay_payment_id != null) {
      paymentStatus = 'COMPLETED'
    } else { paymentStatus = 'INCOMPLETED' }
    var currentdate = new Date();
    console.log("orderdate", currentdate);
    var orderdate = moment(currentdate).format('DD/MM/YYYY');
    console.log("orderdate", currentdate, orderdate);
    let data: any = {};
    data = {
      userId: this.get_user_dtls.uid,
      orderId: this.orderId,
      paymentDetails: {
        razorpay_payment_id: this.razorpay_payment_id,
        razorpay_order_id: this.razorpay_order_id,
        razorpay_signature: this.razorpay_signature
      },
      paymentMode: this.paymentType,
      paymentResponse: {
        razorpay_payment_id: this.razorpay_payment_id,
        razorpay_order_id: this.razorpay_order_id,
        razorpay_signature: this.razorpay_signature
      },
      paymentStatus: paymentStatus,
      dateTime: moment(this.curentDate).format('DD/MM/YYYY')+' '+moment(this.curentDate).format('H:mm:ss')
    }
    console.log("totalProducts", data);

    this.orderApiSubscribe = this.http.post(API_URL + 'userOrder/payment/add', data).subscribe(
      (res: any) => {
        this.btnLoader = false;
        if (res.status === 200) {
          console.log("res.orderId", res, this.orderId);

        }
        localStorage.removeItem('address');
        this.router.navigateByUrl(`order-successfully/` + this.orderId);
        this.removeAllcart();

      },
      errRes => {
        this.btnLoader = false;
        console.log("errRes >", errRes);
        //  this.removeAllcart();
        this.toastrService.error(errRes.error.message);
      }
    );
  }
  // success order api call start
  orderAdd() {
    console.log('order api call', this.taxAmount);
    let paymentStatus;
    if (this.razorpay_payment_id != null) {
      paymentStatus = 'COMPLETED'
    } else { paymentStatus = 'INCOMPLETED' }
    var currentdate = new Date();
    console.log("orderdate", currentdate);
    var orderdate = moment(currentdate).format('DD/MM/YYYY');
    console.log("orderdate", currentdate, orderdate);
    let data = {
      orderDetailsEntity: {
        billingAddress: this.billingAddress,
        discount: this.discountAmount,
        mrp: this.mrpAmount,
        netPrice: this.netAmount,
        giftWrapAmount: this.giftWrapAmount,
        shippingAddress: this.shippingAddress,
        taxAmount: this.taxAmount,
        totalAmount: this.total,
        userId: this.get_user_dtls.uid,
        deliveryCheckUrl: "",
        deliveryDate: "",
        deliveryMode: "warehouse",
        deliveryStatus: "dispatch",
        // orderDate: orderdate,
        orderStatus: 'Active',
        shippingCharges: 0,
        razorpayOrderId: this.paymentOrderId
      },
      orderPaymentEntity: {
        userId: this.get_user_dtls.uid,
        paymentDetails: {
          razorpay_payment_id: this.razorpay_payment_id,
          razorpay_order_id: this.razorpay_order_id,
          razorpay_signature: this.razorpay_signature
        },
        paymentMode: this.paymentType,
        paymentResponse: {
          razorpay_payment_id: this.razorpay_payment_id,
          razorpay_order_id: this.razorpay_order_id,
          razorpay_signature: this.razorpay_signature
        },
        paymentStatus: paymentStatus,

      },
      orderSKUDetailsEntity: this.orderProducts
    }
    console.log("totalProducts", data);

    this.orderApiSubscribe = this.http.post(API_URL + 'userOrder/add', data).subscribe(
      (res: any) => {
        if (res.status === 200) {
          console.log("res.orderId", res.orderId);
          this.orderId = res.orderId;
          this.orderService.setOrderId(res.orderId, res.TransactionId);
          // this.router.navigateByUrl(`order-successfully`);
          // this.removeAllcart();
          // this.loader = false;
        }


      },
      errRes => {
        console.log("errRes >", errRes);
        //  this.removeAllcart();
        this.toastrService.error(errRes.error.message);
      }
    );

  }
  // success order api call end
  public removeAllcart() {

    console.log("cartListData", this.cartListData);
    var cart: any = {};
    cart = this.cartListData
    var senddata = [];

    if (this.cartListData.length > 0) {
      for (let index = 0; index < this.cartListData.length; index++) {
        console.log("products-if-cartListData", this.cartListData[index].cartData.id);

        senddata.push({
          id: this.cartListData[index].cartData.id,
          // userId: this.get_user_dtls.uid,
        });
        console.log("data", senddata);

      }
      const data = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: senddata

      }
      console.log("datadata", data);

      this.removefromCartSubscribe = this.http.delete(API_URL + 'user/cart/multipleDelete/' + this.get_user_dtls.uid, data).subscribe(
        (response: any) => {
          console.log('response', response);
          if (response.status == 200) {
            // this.toastrService.success(response.message); 
            this.cartService.getCartListData();
          }
        },
        errRes => {

        });
    }

  }
}
