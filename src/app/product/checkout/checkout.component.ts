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

declare var $ :any;
declare var Razorpay: any;
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paid:boolean = false;
  main_url = environment.apiUrl;
  file_url = environment.fileUrl;
  
  paymentoptions;
  // form group
  public checkoutForm   :  FormGroup;
  public cartItems      :  Observable<CartItem[]> = of([]);
  public checkOutItems  :  CartItem[] = [];
  public orderDetails   :  any[] = [];
  public amount         :  number;
  // public payPalConfig  : PayPalConfig;
  private getCartlistSubscribe: Subscription;
  private razorpayOrderIdSubscribe: Subscription;
  private getAddressSubscribe: Subscription;
  private getUserDetailss:Subscription;
  private orderApiSubscribe: Subscription;
  cartlistapi;
  cartListData = [];
  get_user_dtls;
  model: any = {};
  mrpAmount = 0;
  discountAmount = 0;
  netAmount = 0;
  taxAmount = 0;
  totalAmount:any;
  shippingAddress;
  billingAddress;
  addresslist: any;
  showAddress:any = {};

  paymentOrderId;
  orderProducts = [];
  parms_action_id;
  getUserDetailsList_api;
  userDetails;
  razorpay_payment_id;
  razorpay_order_id;
  razorpay_signature;
  paymentType: any;
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
  modal:any = {};
  total: number = 0;
  giftWrapAmount: number = 0;
  totalUnits: number = 0;
  btnLoader: boolean;
  // Form Validator
  constructor(private fb: FormBuilder, private cartService: CartService, private http:HttpClient,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private authService: LoginService,private toastrService:ToastrService,
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
    console.log("this.checkOutItems",this.checkOutItems);
    this.getTotal().subscribe(amount => this.amount = amount);
    // this.initConfig();
    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('this.parms_action_id', this.parms_action_id);
    

    this.commonFunction();
  }

  //  commonFunction start
  commonFunction()
  {
    this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);

        // user details set
        this.cartlistapi = "user/cart/getUserCart?userId="+ res.logininfo.uid;
        // user details get
        this.getUserDetailsList_api = 'auth/info/'+ this.get_user_dtls.authority+'/'+this.get_user_dtls.email;
        this.getUserDetailsList();
        // Call wish list data 
        this.getCartListData();
      }
    });
    this.getAddressList();

    this.model = {
      payment_type: 'CASH',
    }
    
  }
  // commonFunction end
   // getDesignerList start
   getsession:any ={};
   getAddressList()
   {
     this.getAddressSubscribe = this.http.get(API_URL+'user/address').subscribe(
       (response:any) => {
         this.addresslist = response;
         if(this.parms_action_id == 'guest')
         {
           
           this.getsession = JSON.parse(localStorage.getItem("address"));
           console.log("getsession",this.getsession);
          if(this.getsession == null)
          {
            this.router.navigateByUrl(`/address/all`);
          }
           this.shippingAddress = {
             address1:this.getsession.address1,
             address2:this.getsession.address2,
             country:this.getsession.country,
             state:this.getsession.state,
             city:this.getsession.city,
             postalCode:this.getsession.postalCode,
             landmark:this.getsession.landmark,
             fullName:this.getsession.fullName,
             email:this.getsession.email,
             mobile:this.getsession.mobile
           }
           this.showAddress = {
             address1:this.getsession.address1,
             address2:this.getsession.address2,
             country:this.getsession.country,
             state:this.getsession.state,
             city:this.getsession.city,
             postalCode:this.getsession.postalCode,
             landmark:this.getsession.landmark,
             fullName:this.getsession.fullName,
             email:this.getsession.email,
             mobile:this.getsession.mobile
           }
           this.billingAddress = {
             address1:this.getsession.address1,
             address2:this.getsession.address2,
             country:this.getsession.country,
             state:this.getsession.state,
             city:this.getsession.city,
             postalCode:this.getsession.postalCode,
             landmark:this.getsession.landmark,
             fullName:this.getsession.fullName,
             email:this.getsession.email,
             mobile:this.getsession.mobile
           }
         }
         else
         {
           for (let index = 0; index < response.length; index++) {
             if (response[index].id == this.parms_action_id) {
               this.showAddress = response[index];
               // this.shippingAddress = response[index].address1 + ',' + response[index].address2 + ',' + response[index].country + ',' + response[index].state + ',' + response[index].city + ',' + response[index].postalCode + ',' + response[index].landmark + ',' + response[index].fullName + ',' + response[index].email + ',' + response[index].mobile;
               this.shippingAddress = {
                 address1:response[index].address1,
                 address2:response[index].address2,
                 country:response[index].country,
                 state:response[index].state,
                 city:response[index].city,
                 postalCode:response[index].postalCode,
                 landmark:response[index].landmark,
                 fullName:response[index].fullName,
                 email:response[index].email,
                 mobile:response[index].mobile
               }
               this.billingAddress = {
                 address1:response[index].address1,
                 address2:response[index].address2,
                 country:response[index].country,
                 state:response[index].state,
                 city:response[index].city,
                 postalCode:response[index].postalCode,
                 landmark:response[index].landmark,
                 fullName:response[index].fullName,
                 email:response[index].email,
                 mobile:response[index].mobile
               }
               // this.billingAddress = response[index].address1 + ',' + response[index].address2 + ',' + response[index].country + ',' + response[index].state + ',' + response[index].city + ',' + response[index].postalCode + ',' + response[index].landmark + ',' + response[index].fullName + ',' + response[index].email + ',' + response[index].mobile;
             }
             
           }
         }
         
         console.log('this.addresslist', this.addresslist,this.billingAddress,this.shippingAddress);
         console.log('this.showAddress', this.showAddress);
       }
     );
   }
   // getDesignerList end
    getCartListData() {
      var _taxamount = 0 ,_netAmount = 0;
      this.getCartlistSubscribe = this.http.get(API_URL+this.cartlistapi).subscribe(
        (response: any) => {
          console.log('Cart list', response);
          this.cartListData = response;
         var productTotal = 0,_mrp = 0,discountAmount = 0,amount = 0,_salePrice = 0 ,_basicAmount = 0,_afterDiscount = 0,producttax = 0,_discount = 0,_taxamount = 0,hsnData:any={};
          
         for (let index = 0; index < this.cartListData.length; index++) {
            
            _basicAmount = parseInt((( 100 * this.cartListData[index].mrp) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0))
            amount = parseInt((( 100 * this.cartListData[index].mrp) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0))
            
            if(this.cartListData[index].deal.dealType != 'None')
            {
                discountAmount = parseInt((( 100 *this.cartListData[index].deal.salePrice) / ( 100 +this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0)) 
                // _discount = parseInt((( 100 *this.cartListData[index].deal.salePrice) / ( 100 +this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0))  * this.cartListData[index].cartData.qty

              if(this.cartListData[index].deal.salePrice < discountAmount)
              {
               _taxamount = parseInt((discountAmount - this.cartListData[index].deal.salePrice).toFixed(0))  * this.cartListData[index].cartData.qty;
              }
              else
              {
               _taxamount = parseInt((this.cartListData[index].deal.salePrice - discountAmount).toFixed(0))  * this.cartListData[index].cartData.qty;
              }
            }
            else{
              _taxamount = (this.cartListData[index].mrp - amount) * this.cartListData[index].cartData.qty;
              // _discount= 0;
            }
            if(this.cartListData[index].deal.salePrice!=null  &&this.cartListData[index].deal.salePrice != 0)
            {
              _salePrice =  parseInt((this.cartListData[index].deal.salePrice * this.cartListData[index].cartData.qty).toFixed(2));
              _mrp =  parseInt((this.cartListData[index].mrp * this.cartListData[index].cartData.qty).toFixed(2));
              productTotal = parseInt((this.cartListData[index].deal.salePrice * this.cartListData[index].cartData.qty).toFixed(2));  
              // _discount = parseInt(((this.cartListData[index].mrp - this.cartListData[index].deal.salePrice) * this.cartListData[index].cartData.qty).toFixed(2));
              _afterDiscount = parseInt((( 100 * this.cartListData[index].deal.salePrice) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0))
            }
            else{
              _salePrice = 0; 
              _mrp =  parseInt((this.cartListData[index].mrp * this.cartListData[index].cartData.qty).toFixed(2));
              productTotal = parseInt((this.cartListData[index].mrp * this.cartListData[index].cartData.qty).toFixed(2));
            }
            
            if(this.cartListData[index].deal.dealType !='None')
            {
            // _discount = parseInt((( 100 * this.cartListData[index].deal.salePrice) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue)).toFixed(0))
            _discount = (_basicAmount - _afterDiscount) * this.cartListData[index].cartData.qty;
            }else{
              _discount = 0;
            }

            // if(this.cartListData[index].deal.taxAmount)
            // {
            //   _taxamount = parseInt(((this.cartListData[index].mrp -  (( 100 * this.cartListData[index].mrp) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue))) * this.cartListData[index].cartData.qty).toFixed(2));
            // }
            _netAmount = parseInt(((( 100 * this.cartListData[index].mrp) / ( 100 + this.cartListData[index].deal.taxAmount.taxValue))  * this.cartListData[index].cartData.qty).toFixed(2));
            this.totalUnits = this.totalUnits + this.cartListData[index].cartData.qty;
            console.log("_netAmount",_netAmount);
            this.netAmount = this.netAmount + _netAmount;
            this.discountAmount = this.discountAmount + _discount;
            this.total = this.total + productTotal;
            this.mrpAmount = this.mrpAmount + _mrp;
            this.saleAmount = this.saleAmount + _salePrice;
            this.taxAmount = this.taxAmount + _taxamount;
            console.log("this.taxAmount",this.taxAmount,_taxamount,this.cartListData[index].mrp);

            // products
            if(this.cartListData[index].designerProfile.state == this.showAddress.state)
            {
              hsnData = {
                cgst:this.cartListData[index].deal.taxAmount.cgst,
                sgst:this.cartListData[index].deal.taxAmount.sgst
              }
            }
            else{
              hsnData = {igst:this.cartListData[index].deal.taxAmount.igst}
            }
            const products = { 
              hsnData:hsnData,
              productId: this.cartListData[index].productId,
              giftWrapAmount: this.cartListData[index].giftWrapAmount,
              discount: _discount,
              size: this.cartListData[index].selectedSize, 
              productName: this.cartListData[index].productDetails.productName, 
              orderItemStatus:"Active",
              reachedCentralHub:"",
              cancelAcceptable: this.cartListData[index].cancelAcceptable,
              returnAcceptable: this.cartListData[index].returnAcceptable,
              images:this.cartListData[index].images[0].large, 
              colour:this.cartListData[index].colour, 
              productSku: this.cartListData[index].productSku,
              units: this.cartListData[index].cartData.qty, 
              cod: this.cartListData[index].cod, 
              customization: this.cartListData[index].cartData.customization,
              measurementObject:this.cartListData[index].cartData.measurementObject, 
              customizationStatus:false,
              giftwrapStatus:false,
              customObject:{},
              giftWrapObject:{},
              mrp:parseInt((this.cartListData[index].mrp * this.cartListData[index].cartData.qty).toFixed(2)),
              salesPrice:parseInt((this.cartListData[index].deal.salePrice * this.cartListData[index].cartData.qty).toFixed(2)),
              taxRate: 0,
              taxAmount: _taxamount, 
              taxType: this.cartListData[index].priceType,
              designerId : this.cartListData[index].designerId,
              displayName:this.cartListData[index].designerProfile.displayName,
              designerName : this.cartListData[index].designerProfile.firstName1+ ' ' + this.cartListData[index].designerProfile.lastName1,
              userId : this.get_user_dtls.uid,
              user_id : this.get_user_dtls.uid
            }
            if(this.cartListData[index].deal.taxAmount.taxValue)
            {
              products.taxRate = this.cartListData[index].deal.taxAmount.taxValue;
            }
            console.log('getCartListData','_taxamount',_taxamount,'_discount',_discount,'discountAmount',this.discountAmount,'total',this.total,'mrpAmount',this.mrpAmount,'_mrp',_mrp,'productTotal',productTotal,'_salePrice',_salePrice);
            this.orderProducts.push(products);
            
          }
          console.log('NEWtotal',this.total,this.discountAmount);
        
          // this.totalAmount = this.totalAmount.toFixed(2);
          var totalNumberCnvt:number = + this.totalAmount;
          this.totalAmount = totalNumberCnvt;
        },
        errRes => {
          this.toastrService.error(errRes.error.message); 
          
        }
      );
    }
    // cart list end
  toggleChange(event:any, content: any,item:any,identifire:any,index:any){
    console.log("Event Value....",event,item,index);
    this.index = index;
    if(event == 'true')
    {
      this.selectedProduct = item;
      this.selectedIdentifire = identifire;
      this.modal.index = false;
      this.modalService.open(content, { size: 'sm' });
    }else{
      if(identifire == 'customization')
      {
        // for (let index = 0; index < this.orderProducts.length; index++) {
        //   if(this.selectedProduct.productId == this.orderProducts[index].productId)
        //   {
            this.orderProducts[index].customizationStatus = false;
            this.orderProducts[index].customObject = {}
        //   } 
        // }
      }else if(identifire == 'giftwrap')
      {
        var giftWrapAmount = 0;
        for (let index = 0; index < this.orderProducts.length; index++) {
          if(this.selectedProduct.productId == this.orderProducts[index].productId)
          {
            this.orderProducts[index].giftwrapStatus = false;
            this.orderProducts[index].giftWrapObject = {}
          } 
        console.log("orderProducts",this.orderProducts,this.total,this.orderProducts[index].giftWrapAmount);

          if(this.orderProducts[index].salesPrice == null || this.orderProducts[index].salesPrice == 0)
          {
            this.orderProducts[index].mrp = this.orderProducts[index].mrp - this.orderProducts[index].giftWrapAmount;
            this.total = this.total - this.orderProducts[index].giftWrapAmount;
            this.giftWrapAmount =   this.giftWrapAmount - this.orderProducts[index].giftWrapAmount;                               
          }else 
          {
            this.orderProducts[index].mrp = this.orderProducts[index].mrp - this.orderProducts[index].giftWrapAmount;
            this.orderProducts[index].salesPrice = this.orderProducts[index].salesPrice - this.orderProducts[index].giftWrapAmount;
            this.total = this.total - this.orderProducts[index].giftWrapAmount;
            this.giftWrapAmount =   this.giftWrapAmount - this.orderProducts[index].giftWrapAmount;                               
                        

          }
          // this.giftWrapAmount = this.giftWrapAmount - giftWrapAmount;
        }
      }
    }
    console.log("orderProducts",this.orderProducts,this.total,this.orderProducts[index].giftWrapAmount);
    
  }
  ordersCustomizationSubmit(form: NgForm){
    if(form.value.customizationDetails == '')
    {
      this.index = false;
    }
    for (let index = 0; index < this.orderProducts.length; index++) {
      if(this.selectedProduct.productId == this.orderProducts[index].productId)
      {
        this.orderProducts[index].customizationStatus = true;
        this.orderProducts[index].customObject = {
          customizationDetails:form.value.customizationDetails
        }
      } 
    }
    form.reset();
    this.modalService.dismissAll();

    console.log("orderProducts",this.orderProducts);
  }
  ordersGiftSubmit(form: NgForm){
    var giftWrapAmount = 0;
    for (let index = 0; index < this.orderProducts.length; index++) {
      if(this.selectedProduct.productId == this.orderProducts[index].productId)
      {
        this.orderProducts[index].giftwrapStatus = true;
        this.orderProducts[index].giftWrapObject = {
          from:form.value.from,
          to:form.value.to,
          message:form.value.message,
        }
        if(this.orderProducts[index].salesPrice == null || this.orderProducts[index].salesPrice == 0)
        {
          this.orderProducts[index].mrp = this.orderProducts[index].mrp + this.orderProducts[index].giftWrapAmount;
          this.total = this.total + this.orderProducts[index].giftWrapAmount;
          this.giftWrapAmount =   this.giftWrapAmount + this.orderProducts[index].giftWrapAmount;                              
                            

        }else 
        {
          this.orderProducts[index].salesPrice = this.orderProducts[index].salesPrice + this.orderProducts[index].giftWrapAmount;
          this.total = this.total + this.orderProducts[index].giftWrapAmount;
          this.giftWrapAmount =   this.giftWrapAmount + this.orderProducts[index].giftWrapAmount;                              

        }

      } 
      // this.giftWrapAmount = giftWrapAmount; 
    }
    console.log("orderProducts",this.orderProducts);
    form.reset();
    this.modalService.dismissAll();
  }
 
  
  closeModal(identifire)
  {
    
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
  getUserDetailsList(){
    this.getUserDetailss = this.http.get(API_URL+this.getUserDetailsList_api).subscribe(
      (res:any) => {
        
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
  onChangePaymentMode(_select){
    console.log('paymeny mood>>', _select);
    this.paymentType = _select;
    this.paid = true;
    if(_select == 'ONLINE') {
      let totalProducts = {
        products : this.orderProducts,
        giftWrapAmount : this.giftWrapAmount,
        mrp : this.mrpAmount,
        discount : this.discountAmount,
        netPrice : this.netAmount,
        taxAmount : this.taxAmount,
        totalAmount : this.total * 100,
        shippingAddress : this.shippingAddress,
        billingAddress : this.billingAddress,
        userId : this.get_user_dtls.uid
      }
      console.log("totalProducts",totalProducts);
      
      this.razorpayOrderIdSubscribe = this.http.post(API_URL+'userOrder/razorpay/create',totalProducts).subscribe(
        (response:any) => {
          console.log('paymentOrderId', response);
          this.paymentOrderId = response.id
        },
        errRes => {
          this.paid = false;
        }
      ); 
    }else {

    }
  }
  // Payment mood change start

  /*-----------Payment checkout start-----------*/
  paymentResponse;
  checkout(){
    
    this.orderAdd();
    console.log(' this.totalAmount>>>',  this.total,this.taxAmount);
    
    let totalAmountPrice = Math.round( this.total )
    console.log('totalAmountPrice',totalAmountPrice);
    
    // -----------------razorpay payment getwat call start-------------------

    var paymentSucessVariable = 0;
    var razorpay_payment_id;
    var razorpay_order_id ;
    var razorpay_signature ;
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
        var order_api = 'https://dev.divatt.com/dev'+'/userOrder/add';
        fetch(order_api, opts).then(function (responsee) {
          // return response.json();
          console.log('fetch(order_api, opts', responsee);
          
        },(error)=>{
          console.log("fetch(order_api, optserror",error);
          
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
      }
      
    };
    // initPay() {
      var rzp1 = new Razorpay(this.paymentoptions);
      rzp1.open();
      console.log("payment works");
      let paymentFailedData;
      rzp1.on('payment.failed', function (response){
        paymentFailedData = response;
        console.log('paymentFailedData', paymentFailedData,response);
       
      });
    //------ razorpay payment getwat call end -----
    let prevNowPlaying = setInterval(() => {
      if(paymentSucessVariable == 1){
        console.log("IF",paymentSucessVariable);
        clearInterval(prevNowPlaying);
        this.razorpay_payment_id = razorpay_payment_id;
        this.razorpay_order_id = razorpay_order_id;
        this.razorpay_signature = razorpay_signature;
        this.onPaymentSubmitData();
        // this.orderApiCall();
      }
      else{
        console.log("else",paymentSucessVariable,prevNowPlaying);
        
      }

    }, 1000);
    console.log("Fall",paymentSucessVariable,prevNowPlaying);
    
    
  }
  
  // success order api call start
  orderApiCall(){
    this.loader = true;
    console.log('order api call');
    let paymentStatus;
    if(this.razorpay_payment_id != null)
    {
      paymentStatus = 'COMPLETED'
    }else{ paymentStatus = 'INCOMPLETED'}
    var currentdate = new Date();
    console.log("orderdate",currentdate);
    var orderdate = moment(currentdate).format('DD/MM/YYYY');
    console.log("orderdate",currentdate,orderdate);
    let data = {
      orderDetailsEntity: {
        billingAddress : this.billingAddress,
        discount : this.discountAmount,
        mrp : this.mrpAmount,
        netPrice : this.netAmount,
        shippingAddress : this.shippingAddress,
        taxAmount : this.taxAmount,
        totalAmount : this.total,
        giftWrapAmount : this.giftWrapAmount,
        units:this.totalUnits,
        userId : this.get_user_dtls.uid,
        deliveryCheckUrl: "",
        deliveryDate: "",
        deliveryMode: "warehouse",
        deliveryStatus: "dispatch",
        // orderDate: orderdate,
        orderStatus: 'Active',
        shippingCharges:0,
        razorpayOrderId:this.paymentOrderId
      },
      orderPaymentEntity: {
        userId : this.get_user_dtls.uid,
        paymentDetails: {
          razorpay_payment_id : this.razorpay_payment_id,
          razorpay_order_id : this.razorpay_order_id,
          razorpay_signature : this.razorpay_signature
        },
        paymentMode: this.paymentType,
        paymentResponse: {
          razorpay_payment_id : this.razorpay_payment_id,
          razorpay_order_id : this.razorpay_order_id,
          razorpay_signature : this.razorpay_signature
        },
        paymentStatus: paymentStatus,

      },
      orderSKUDetailsEntity : this.orderProducts
    }
    console.log("totalProducts",data);
    
    this.orderApiSubscribe = this.http.post(API_URL+'userOrder/add', data).subscribe(
      (res:any) => {
        // if(res.status === 200){
          console.log("res.orderId",res.orderId);
          
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
  onPaymentSubmitData()
  {
    this.btnLoader = true;
    console.log('order paymentdata',this.paymentResponse);
    let paymentStatus;
    if(this.razorpay_payment_id != null)
    {
      paymentStatus = 'COMPLETED'
    }else{ paymentStatus = 'INCOMPLETED'}
    var currentdate = new Date();
    console.log("orderdate",currentdate);
    var orderdate = moment(currentdate).format('DD/MM/YYYY');
    console.log("orderdate",currentdate,orderdate);
    let data:any = {};
     data = {
        userId : this.get_user_dtls.uid,
        orderId : this.orderId,
        paymentDetails: {
          razorpay_payment_id : this.razorpay_payment_id,
          razorpay_order_id : this.razorpay_order_id,
          razorpay_signature : this.razorpay_signature
        },
        paymentMode: this.paymentType,
        paymentResponse: {
          razorpay_payment_id : this.razorpay_payment_id,
          razorpay_order_id : this.razorpay_order_id,
          razorpay_signature : this.razorpay_signature
        },
        paymentStatus: paymentStatus,
    }
    console.log("totalProducts",data);
    
    this.orderApiSubscribe = this.http.post(API_URL+'userOrder/payment/add', data).subscribe(
      (res:any) => {
          this.btnLoader = false;
        if(res.status === 200){
          console.log("res.orderId",res,this.orderId);

        }
        localStorage.removeItem('address');
        this.router.navigateByUrl(`order-successfully/`+this.orderId);
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
orderAdd(){
  console.log('order api call' , this.taxAmount);
  let paymentStatus;
  if(this.razorpay_payment_id != null)
  {
    paymentStatus = 'COMPLETED'
  }else{ paymentStatus = 'INCOMPLETED'}
  var currentdate = new Date();
  console.log("orderdate",currentdate);
  var orderdate = moment(currentdate).format('DD/MM/YYYY');
  console.log("orderdate",currentdate,orderdate);
  let data = {
    orderDetailsEntity: {
      billingAddress : this.billingAddress,
      discount : this.discountAmount,
      mrp : this.mrpAmount,
      netPrice : this.netAmount,
      giftWrapAmount:this.giftWrapAmount,
      shippingAddress : this.shippingAddress,
      taxAmount : this.taxAmount,
      totalAmount : this.total,
      userId : this.get_user_dtls.uid,
      deliveryCheckUrl: "",
      deliveryDate: "",
      deliveryMode: "warehouse",
      deliveryStatus: "dispatch",
      // orderDate: orderdate,
      orderStatus: 'Active',
      shippingCharges:0,
      razorpayOrderId:this.paymentOrderId
    },
    orderPaymentEntity: {
      userId : this.get_user_dtls.uid,
      paymentDetails: {
        razorpay_payment_id : this.razorpay_payment_id,
        razorpay_order_id : this.razorpay_order_id,
        razorpay_signature : this.razorpay_signature
      },
      paymentMode: this.paymentType,
      paymentResponse: {
        razorpay_payment_id : this.razorpay_payment_id,
        razorpay_order_id : this.razorpay_order_id,
        razorpay_signature : this.razorpay_signature
      },
      paymentStatus: paymentStatus,

    },
    orderSKUDetailsEntity : this.orderProducts
  }
  console.log("totalProducts",data);
  
  this.orderApiSubscribe = this.http.post(API_URL+'userOrder/add', data).subscribe(
    (res:any) => {
      if(res.status === 200){
        console.log("res.orderId",res.orderId);
        this.orderId = res.orderId;
        this.orderService.setOrderId(res.orderId,res.TransactionId);
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
    
    console.log("cartListData",this.cartListData);
    var cart:any={};
    cart = this.cartListData
    var senddata = [];

      if(this.cartListData.length > 0){
        for (let index = 0; index < this.cartListData.length; index++) {
          console.log("products-if-cartListData",this.cartListData[index].cartData.id);
          
          senddata.push({
            id: this.cartListData[index].cartData.id,
            // userId: this.get_user_dtls.uid,
          });
          console.log("data",senddata);
          
        }
      const data = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: senddata
        
      }
      console.log("datadata",data);
      
      this.removefromCartSubscribe = this.http.delete(API_URL+'user/cart/multipleDelete/'+this.get_user_dtls.uid,data).subscribe(
        (response:any) => {
          console.log('response', response);
          if(response.status == 200){
            // this.toastrService.success(response.message); 
            this.cartService.getCartListData();
          }
        },
        errRes => {
          
        });
      }
   
  }  
}
