import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormGroupDirective } from '@angular/forms';
// import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
// import {  IPayPalConfig,  ICreateOrderRequest } from 'ngx-paypal';
import { CartItem } from '../../classes/cart-item';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Observable, of, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {
  @ViewChild('addressForm', { static: false }) addressForm: FormGroupDirective;
  Citys = []
  Countrys = [
    {
      value: 1, viewValue: "India"
    },
  ]
  otherAddress = false;
  states = [];
  // form group
  public checkoutForm: FormGroup;
  public cartItems: Observable<CartItem[]> = of([]);
  public checkOutItems: CartItem[] = [];
  public orderDetails: any[] = [];
  public amount: number;
  buttonsshow: boolean = false;
  private getAddressSubscribe: Subscription;
  api_url: string;
  addresslist: any = [];
  unsaveAddress: any = [{}];
  model: any = {};
  private logoutDataSubscribe: Subscription;
  get_user_dtls: any = {};
  add_api: string;
  update_api: string;
  private addressFormSubmitSubscribe: Subscription;
  private UpdateFormSubmitSubscribe: Subscription;
  action = '';
  alldata: any = {};
  total_price: number;
  getCartlistSubscribe: Subscription;
  userId: any;
  cartlistapi: string;
  deleteAddressSubscribe: Subscription;
  addressdelApi: string;
  addressId: any;
  nounsaveAddress: any = false;
  noadressFound: boolean;
  loader: boolean;
  identifire: string;
  addressViewType: any;
  data = [];
  errorList: any = {};

  // public payPalConfig ? : PayPalConfig;


  // Form Validator
  constructor(private fb: FormBuilder, private cartService: CartService,
    public productsService: ProductsService, private orderService: OrderService,
    private http: HttpClient, private router: Router,
    private toastrService: ToastrService, private authService: LoginService, private activatedRoute: ActivatedRoute,) {
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
    this.addressViewType = this.activatedRoute.snapshot.params.type;
    if (this.addressViewType == 'all') {
      this.model.ask = true;
    }
    if (this.addressViewType == 'all' || this.addressViewType == 'shop') {

    } else {
      this.router.navigate(['profile'])
    }
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(products => this.checkOutItems = products);
    console.log("this.checkOutItems", this.checkOutItems);
    this.getTotal().subscribe(amount => this.amount = amount);
    // this.initConfig();
    var getsession = JSON.parse(localStorage.getItem("address"));
    if (getsession) {
      console.log("getsession", getsession, this.unsaveAddress);
      this.unsaveAddress[0] = getsession;
      this.nounsaveAddress = true;
      this.noadressFound = false;
    } else {
      this.nounsaveAddress = false;
      this.noadressFound = true;
    }
    console.log("getsession", getsession, this.unsaveAddress);
    this.commonFunction();
  }

  commonFunction() {
    this.api_url = "user/address";
    this.add_api = 'user/address';

    // this.action = 'add';
    this.model.addressType = 'Home';
    this.getAddressList()
    this.getStates();
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        this.userId = this.get_user_dtls.uid
        this.cartlistapi = "user/cart/getUserCart?userId=" + this.userId;
        this.getCartListData()
        // user details set
      }
    });
    this.model.userId = this.get_user_dtls.uid
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
  selectAddress: any = false;
  addressSelected(data) {
    this.action = '';
    console.log('addressSelected', data);
    this.model = {};
    this.selectAddress = data.id;
  }
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

  // getDesignerList start
  getAddressList() {
    this.loader = true;
    this.model.addressType = 'Home';
    this.model.userId = this.get_user_dtls.uid;
    // this.action = 'add';
    this.getAddressSubscribe = this.http.get(API_URL + this.api_url).subscribe(
      (response: any) => {
        this.addresslist = response;
        console.log("addresslist", this.addresslist);
        this.noadressFound = false;
        //  console.log("Designer",this.designer.UserDesigner.length);
        //  this.toastrService.success(response.message);
        this.loader = false;
        for (let index = 0; index < this.addresslist.length; index++) {
          if (this.addresslist[index].primary == false) {
            this.otherAddress = true;
          }
        }
      },
      errRes => {
        this.loader = false;
        console.log("error handeller >>@@", errRes);
        this.noadressFound = true;
        this.toastrService.success(errRes.error.message);
        console.log("addresslist", this.addresslist);
      }
    );

  }
  // getDesignerList end
  getStates() {
    this.addressFormSubmitSubscribe = this.http.get(API_URL + "user/getStateData").subscribe(
      (response: any) => {
        this.states = response;
      },
      errRes => {
        this.toastrService.error(errRes.error.message);
      }
    );
  }
  //  editAddress start
  editAddress(data, type) {
    var ask: boolean;
    if (type == 'unsaveData') {
      this.action = 'add'
      this.identifire = 'unsaveData';
      ask = false;
    } else {
      ask = true;
      this.action = 'edit';

    }
    this.model =
    {
      fullName: data.fullName,
      address1: data.address1,
      address2: data.address2,
      addressType: data.addressType,
      mobile: data.mobile,
      state: data.state,
      country: data.country,
      city: data.city,
      landmark: data.landmark,
      primary: data.primary,
      postalCode: data.postalCode,
      email: data.email,
      id: data.id,
      ask: ask,
    }

    console.log(" this.model", this.model);

    this.update_api = 'user/address/' + data.id;
    this.formOpen = true;
  }
  // editAddress end
  addressType(addressType) {
    this.model.addressType = addressType;
  }
  // onSubmitAddressForm start
  onSubmitAddressForm(form: NgForm) {
    console.log("form.value", form.value);
    console.log('this.action', this.action);

    // this.selectAddress = true;
    if (!form.value.ask) {
      form.value.ask = false;
    }
    console.log("form.value", form.value);
    // var boutiqueNamepattern = new RegExp('/^[A-Z]+$/i');
    const onlyAB = /^[A-Z]+$/i;
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const numberRegex = '^[0-9]*$'
    if (this.model.fullName) {
      // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
      if (this.model.fullName.match(onlyAB) != null) {
        this.errorList.fullName = '';

      } else {
        this.errorList.fullName = 'Please enter only alphabet';

      }
    } else {
      this.errorList.fullName = 'Enter first name';

    }
    if (this.model.address1) {
      this.errorList.address1 = '';

    } else {
      this.errorList.address1 = 'Enter DOB';

    }
    // mobileNo
    if (this.model.mobile && this.model.mobile.length == 10 && this.model.mobile.match(numberRegex) != null) {
      console.log(this.model.mobile.length);

      this.errorList.mobile = '';
    } else {
      this.errorList.mobile = 'Enter 10 digit mobile no';

    }
    // email
    if (this.model.email) {
      if (this.model.email.match(emailRegex) != null) {
        this.errorList.email = '';

      } else {
        this.errorList.email = 'Please enter valid email';

      }
    } else {
      this.errorList.email = 'Enter email';


    }
    // country
    if (this.model.country) {
      this.errorList.country = '';

    } else {
      this.errorList.country = 'Select country.';

    }
    // state
    if (this.model.state) {
      this.errorList.state = '';

    } else {
      this.errorList.state = 'Select state.';

    }
    // city
    if (this.model.city) {
      this.errorList.city = '';

    } else {
      this.errorList.city = 'Enter city.';

    }
    // pinCode
    if (this.model.postalCode && this.model.postalCode.length == 6 && this.model.postalCode.match(numberRegex) != null) {
      this.errorList.postalCode = '';

    } else {
      this.errorList.postalCode = 'Enter 6 digit Pincode';

    }
    if (this.model.landmark) {
      this.errorList.landmark = '';

    } else {
      this.errorList.landmark = 'Landmark is required';

    }
    if (form.value.address1 == undefined || form.value.fullName == undefined || form.value.mobile == undefined
      || form.value.email == undefined || form.value.addressType == undefined || form.value.country == undefined
      || form.value.state == undefined || form.value.city == undefined || form.value.landmark == undefined
      || form.value.postalCode == undefined) {
      if (!this.selectAddress) {
        // this.toastrService.error('Fill all the details.');
      } else {
        this.action = '';
      }

      // this.action = 'add';
      return false;
    }

    this.alldata = {
      fullName: form.value.fullName,
      address1: form.value.address1,
      address2: form.value.address2,
      mobile: form.value.mobile,
      state: form.value.state,
      country: form.value.country,
      email: form.value.email,
      city: form.value.city,
      landmark: form.value.landmark,
      primary: form.value.primary,
      addressType: form.value.addressType,
      postalCode: form.value.postalCode,
      userId: this.get_user_dtls.uid,
    }
    console.log("alldata", this.alldata);

    if (form.value.primary == undefined || form.value.primary == null) {
      this.alldata.primary = false;
    }
    // save or not start
    if (form.value.ask == true) {
      if (this.action == 'edit') {

        this.UpdateFormSubmitSubscribe = this.http.put(API_URL + this.update_api, this.alldata).subscribe(
          (response: any) => {
            console.log("response", response);
            this.toastrService.success(response.message);
            this.getAddressList();

            form.reset();
            this.formOpen = false;
          },
          errRes => {
            console.log("error handeller >>@@", errRes);
            this.toastrService.error(errRes.error.message);
          }
        );

      } else if (this.action == 'add') {

        this.addressFormSubmitSubscribe = this.http.post(API_URL + this.add_api, this.alldata).subscribe(
          (response: any) => {
            if (this.model.id == "guest") {
              localStorage.removeItem('address');
              var getsession = JSON.parse(localStorage.getItem("address"));
              console.log("getsession", getsession, this.unsaveAddress);
              this.unsaveAddress[0] = getsession;
            }
            this.toastrService.success(response.message);
            this.getAddressList();
            form.reset();
            this.formOpen = false;

          },
          errRes => {
            console.log("error handeller >>@@", errRes);
            this.toastrService.error(errRes.error.message);
          }
        );
      }
    }
    else {
      this.alldata = {
        fullName: form.value.fullName,
        address1: form.value.address1,
        address2: form.value.address2,
        mobile: form.value.mobile,
        state: form.value.state,
        country: form.value.country,
        email: form.value.email,
        city: form.value.city,
        landmark: form.value.landmark,
        primary: form.value.primary,
        addressType: form.value.addressType,
        postalCode: form.value.postalCode,
        id: 'guest',
      }
      localStorage.setItem("address", JSON.stringify(this.alldata));
      var getsession = JSON.parse(localStorage.getItem("address"));

      console.log("getsession", getsession, this.unsaveAddress);
      this.nounsaveAddress = true;
      this.noadressFound = false;
      this.formOpen = false;
      this.unsaveAddress[0] = getsession;
      // this.router.navigateByUrl(`/checkout/guest`);
      // sessionStorage.clear();
      console.log("getsession", getsession, this.unsaveAddress);
    }
    // save or not end
    this.model.addressType = 'Home';
  }
  // onSubmitAddressForm end
  ngsel(e) {

  }
  // addressSelected end
  //  get wish list after login start
  getCartListData() {
    this.getCartlistSubscribe = this.http.get(API_URL + this.cartlistapi).subscribe(
      (response: any) => {
        console.log('Cart list', response);
        this.data = [];
        for (let index = 0; index < response.length; index++) {
          let Data = response[index].cartData;
          for (let j = 0; j < Data.length; j++) {
            this.data.push(
              {
                displayName: response[index].designerProfile.displayName,
                productName: response[index].productDetails.productName,
                images: response[index].images[0].large,
                productId: response[index].productId,
                slug: response[index].slug,
                selectedSize: response[index].cartData[j].selectedSize,
                purchaseMinQuantity: response[index].purchaseMinQuantity,
                quantity: response[index].cartData[j].qty,
                purchaseMaxQuantity: response[index].purchaseMaxQuantity,
                salePrice: response[index].deal.salePrice,
                mrp: response[index].mrp,
                customization: response[index].cartData[j].customization,
                id: response[index].cartData[j].id
              }
            )

          }
        }
        // this.shoppingCartItems = response;
        this.total_price = 0
        var getitemTotal = 0
        for (let index = 0; index < this.data.length; index++) {
          if (!this.data[index].slug) {
            let name = this.data[index].productName.toLowerCase();
            this.data[index].slug = name.replace(/ /g, "-");
          }

        }
        for (let i = 0; i < this.data.length; i++) {

          if (this.data[i].salePrice || this.data[i].salePrice == 0) {
            getitemTotal = this.data[i].quantity * this.data[i].salePrice
          } else {
            getitemTotal = this.data[i].quantity * this.data[i].mrp
          }
          this.total_price = this.total_price + getitemTotal;
        }

      },
      errRes => {
        this.toastrService.error(errRes.error.message);

      }
    );
  }
  //  get wish list after login end
  // deleteAddress start
  async toDeleteAddress(address, type) {

    this.addressId = address.id
    this.addressdelApi = "user/address/" + address.id;
    console.log("address", address, this.addressId);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-default'
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons.fire(
      {
        showCloseButton: true,
        title: 'Delete',
        text: 'Are you went to Delete this address ?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        reverseButtons: false
      }
    ).then((result) => {
      if (result.value) {
        console.log('Delete');
        if (type == 'savedata') {
          this.deleteAddress();
        } else
          if (type == 'unsavedata') {
            // var getsession = JSON.parse(localStorage.getItem("address"));
            localStorage.removeItem('address');

            // localStorage.setItem("address",JSON.stringify(this.alldata));

            this.unsaveAddress[0] = '';
            this.nounsaveAddress = false;
            this.selectAddress = '';
            console.log("getsession", this.unsaveAddress);
            this.model = undefined;
            this.model =
            {
              fullName: undefined,
              address1: undefined,
              address2: undefined,
              addressType: undefined,
              mobile: undefined,
              state: undefined,
              country: undefined,
              city: undefined,
              landmark: undefined,
              primary: undefined,
              postalCode: undefined,
              email: undefined,
              id: undefined,
            }
            // this.unsaveAddress[0] = getsession;
            var getsession = JSON.parse(window.sessionStorage.getItem("address"));
            if (getsession) {
              this.noadressFound = false;
            } else {
              this.noadressFound = true;
            }
            // console.log("getsession",getsession,this.unsaveAddress);
          }

        return;
      }
      console.log('cancel');
    });
  }
  deleteAddress() {
    this.deleteAddressSubscribe = this.http.delete(API_URL + this.addressdelApi).subscribe(
      (response: any) => {
        console.log('deleteAddressSubscribe', response);
        // this.shoppingCartItems = response;     
        this.nounsaveAddress = false;
        this.selectAddress = '';
        console.log("getsession", this.unsaveAddress);
        this.model = undefined;
        this.model =
        {
          fullName: undefined,
          address1: undefined,
          address2: undefined,
          addressType: undefined,
          mobile: undefined,
          state: undefined,
          country: undefined,
          city: undefined,
          landmark: undefined,
          primary: undefined,
          postalCode: undefined,
          email: undefined,
          id: undefined,
        }
        // this.unsaveAddress[0
        this.getAddressList();
        this.toastrService.success(response.message);
      },
      errRes => {
        this.toastrService.warning(errRes.error.message);
        this.getAddressList();
      }
    );
  }
  // deleteAddress end
  formOpen = false;
  OpenForm() {
    this.action = 'add';
    this.formOpen = !this.formOpen;
  }
  proceedClick() {
    console.log('proceedClick');
    if (this.selectAddress) {
      this.action = '';
    }
    if (!this.selectAddress || this.selectAddress == '' || this.selectAddress == null || this.selectAddress == undefined) {
      console.log('if');
      console.log('this.selectAddress', this.selectAddress);

    } else {
      console.log('else');
      this.router.navigateByUrl('/checkout/' + this.selectAddress)
    }
  }
  checkValidtion(fieldNAme: any) {
    console.log('fieldNAme');
    const onlyAB = /^[A-Z]+$/i;
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const numberRegex = '^[0-9]*$';
    const noSpacalchar = "^[a-zA-Z0-9 ]+$";
    const onlyAlpha = /\d+/g;
    const emptySpace = /^ *$/;

    if (fieldNAme == 'fullName') {
      // firstName1
      if (this.model.fullName) {
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if (this.model.fullName.match(onlyAB) == null) {
          this.errorList.fullName = 'Please enter only alphabet';
        } else if(this.model.fullName.match(emptySpace) !== null){
          this.errorList.fullName = 'Empty Space not allowed';
        } else {
          this.errorList.fullName = '';
        }
      } else {
        this.errorList.fullName = 'Enter first name';

      }
    }
    if (fieldNAme == 'address1') {
      // address
      if (this.model.address1) {
        console.log('this.model.address1.match(emptySpace)', this.model.address1.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.address1.match(emptySpace) !== null){
          this.errorList.address1 = 'Empty Space not allowed';
        } else {
          this.errorList.address1 = '';
        }
      } else {
        this.errorList.address1 = 'Enter address1';

      }
    }
    if (fieldNAme == 'address2') {
      // address
      if (this.model.address2) {
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.address2.match(emptySpace) !== null){
          this.errorList.address2 = 'Empty Space not allowed';
        } else {
          this.errorList.address2 = '';
        }
      } else {
        // this.errorList.address2 = 'Enter address2';

      }
    }
    if (fieldNAme == 'mobile') {
      // mobileNo
      if (this.model.mobile && this.model.mobile.toString().length == 10) {
        console.log(this.model.mobile.length);
    
        this.errorList.mobile = '';
      } else {
        this.errorList.mobile = 'Enter 10 digit mobile no';
    
      }
    }
    if (fieldNAme == 'email') {
      // email
      if (this.model.email) {
        if (this.model.email.match(emailRegex) == null) {
          this.errorList.email = 'Please enter valid email';
        } else if(this.model.email.match(emptySpace) !== null){
          this.errorList.email = 'Empty Space not allowed';
        } else {
          this.errorList.email = '';
        }
      } else {
        this.errorList.email = 'Enter email';


      }
    }
    if (fieldNAme == 'country') {
      // country
      if (this.model.country) {
        this.errorList.country = '';

      } else {
        this.errorList.country = 'Select country.';

      }
    }
    if (fieldNAme == 'state') {
      // state
      if (this.model.state) {
        this.errorList.state = '';

      } else {
        this.errorList.state = 'Select state.';

      }
    }
    if (fieldNAme == 'city') {
      // city
      if (this.model.city) {
        console.log('this.model.city.match(noSpacalchar)', this.model.city.match(noSpacalchar));
        console.log('this.model.city.match(onlyAlpha)', this.model.city.match(onlyAlpha));
        console.log('this.model.city.match(emptySpace)', this.model.city.match(emptySpace));
        
        if (this.model.city.match(noSpacalchar) == null) {
          this.errorList.city = 'No special character are allowed';

        } else if(this.model.city.match(onlyAlpha) !== null) {
          this.errorList.city = 'Please enter only alphabet';
        } else if(this.model.city.match(emptySpace) !== null){
          this.errorList.city = 'Empty Space not allowed';
        } else {
          this.errorList.city = '';
        }
      } else {
        this.errorList.city = 'Enter a city name';

      }
    }
    if (fieldNAme == 'postalCode') {
      // pinCode
      if (this.model.postalCode && this.model.postalCode.toString().length == 6) {
        this.errorList.postalCode = '';
    
      } else {
        this.errorList.postalCode = 'Enter 6 digit Pincode';
    
      }
    }
    if (fieldNAme == 'landmark') {
      // address
      if (this.model.landmark) {
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if (this.model.landmark.match(noSpacalchar) == null) {
          this.errorList.landmark = 'Special characters not allow';
        } else if(this.model.landmark.match(emptySpace) !== null){
          this.errorList.landmark = 'Empty Space not allowed';
        } else {
          this.errorList.landmark = '';
        }
      } else {
        this.errorList.landmark = 'Enter Landmark';

      }
    }
  }
  ngOnDestroy() {
    if (this.getAddressSubscribe !== undefined) {
      this.getAddressSubscribe.unsubscribe();
    }
    if (this.logoutDataSubscribe !== undefined) {
      this.logoutDataSubscribe.unsubscribe();
    }
    if (this.addressFormSubmitSubscribe !== undefined) {
      this.addressFormSubmitSubscribe.unsubscribe();
    }
    if (this.deleteAddressSubscribe !== undefined) {
      this.deleteAddressSubscribe.unsubscribe();
    }
  }

}
