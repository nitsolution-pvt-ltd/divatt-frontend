import { Component, OnInit, Input, Inject } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Observable, of, Subscription } from 'rxjs';
import { WINDOW } from 'src/app/services/windows.service';
import { LoginNavService } from 'src/app/services/login-nav.service';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Product } from 'src/app/classes/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { environment } from 'src/environments/environment';
declare var $: any;
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-header-widgets',
  templateUrl: './header-widgets.component.html',
  styleUrls: ['./header-widgets.component.css']
})
export class HeaderWidgetsComponent implements OnInit {

  @Input() shoppingCartItems: CartItem[] = [];
  userType = 'user'
  public show: boolean = false;
  hide = true;
  hide2 = true;
  hide3 = true;
  hideset = true;
  api_url;
  model: any = {};
  isLoading = false;
  errorMsg;
  get_user_dtls;
  private formSubmitSubscribe: Subscription;
  private logoutDataSubscribe: Subscription;
  private cartDataSubscribe: Subscription;
  private getCartlistSubscribe: Subscription;
  isLogin: boolean = false;
  userId: any;
  pageNo: number = 0;
  limit = 0;
  removefromWishlist: { productId: number; userId: any; };
  wishlistapi: string;
  getWishlistSubscribe: Subscription;
  errormsg: any;
  data: any = [];
  Data: any = [];
  dateRange;

  constructor(private cartService: CartService,
    private authService: LoginService,
    private commonUtils: CommonUtils,
    private http: HttpClient,
    private toastrService: ToastrService,
    @Inject(WINDOW) private window, private loginNav: LoginNavService,
    private wishlistService: WishlistService,
    public productsService: ProductsService, public socialLogin: AuthService) { }



  ngOnInit() {
    console.log('shoppingCartItems', this.shoppingCartItems);

    this.api_url = 'auth/login';
    this.model = {
      registerType: 'manual',
      userType: 'USER'
    }
    this.model.socialType = "normal";
    // this.commonFunction();
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>1', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.userId = this.get_user_dtls.uid;
        this.isLogin = true;
        this.commonUtils.onClicksigninCheck(res);
        // referesh cart list
        this.Data = this.cartService.getCartListData();
        console.log("Hearde Cart Count data....", this.Data);

      } else {
        this.data = JSON.parse(localStorage.getItem("cartItem")) || [];
        for (let i = 0; i < this.data.length; i++) {

        }
        var totalProduct = JSON.parse(localStorage.getItem("cartItem")) || [];
        this.commonUtils.getCartDataService(totalProduct);
        console.log('totalProduct', totalProduct);
        console.log("Catr Data Length", this.data.length);
        this.isLogin = false;
      }
    });
    console.log("data?.length", this.data.length);
    this.dateRange = moment(new Date()).format('YYYY-MM-DD');

    // cart list check start
    this.cartDataSubscribe = this.commonUtils.onChangeCartList.subscribe((response: any) => {
      console.log('=========== Cart data 12345  >>>>>>>>>>>', response);
      if (this.get_user_dtls) {
        // this.shoppingCartItems   = response;
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
            console.log("Data Length...", this.data.length);

          }
        }
      }
      else {
        this.data = response;
      }

    });
    // cart list check end

  }
  user; authorized;
  public signInWithGoogle(socialPlatform): void {
    // this.socialLogin.signIn(GoogleLoginProvider.PROVIDER_ID);
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialLogin.signIn(socialPlatformProvider).then(
      (userData: any) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData        
        if (userData != null) {
          this.authorized = true;
          this.user = userData;
          userData.type = "USER";
        }
        var data = {
          socialId: this.user.id,
          name: this.user.name,
          email: this.user.email,
          profilePic: this.user.image,
          socialType: this.user.provider,
          type: "USER",
          password: '1234'
        }
        // if(socialPlatform == 'facebook')
        // {
        //   console.log(this.user.email);
        // }
        this.authenticate('', data);
      }, (error) => {
        console.log(error);

      }
    );
  }
  public signOut() {
    this.socialLogin.signOut();
    this.authorized = false;
  }
  redirectFromForgotPsw = false;
  getMethodFor;
  showScreen: any = 'login';
  openLoginNav(_identifier) {
    console.log('openLoginNav');
    this.isLoading = false;
    this.errorMsg = '';
    this.getMethodFor = _identifier;
    if (_identifier == 'login') {
      this.showScreen = 'login';
      this.model.socialType = "normal";
      this.loginNav.addNavLogin();
      this.api_url = 'auth/login';

    } else if (_identifier == 'register') {
      this.showScreen = 'register';
      this.loginNav.addNavLogin();
      this.loginNav.addNavRegister();
      this.api_url = 'user/add';
    }
    else if (_identifier == 'changepassword') {
      // this.loginNav.addNavLogin();
      // this.loginNav.addNavRegister();
      this.showScreen = 'changepassword';
      this.api_url = 'auth/changePassword';
      this.model.userType = 'user';
      this.loginNav.addNavchangepassword();
    }
    else if (_identifier == 'forgotpassword') {
      this.showScreen = 'forgotpassword';
      // this.loginNav.addNavLogin();
      // this.loginNav.addNavRegister();
      this.api_url = 'auth/mailForgotPasswordLink/User/'
      this.loginNav.addNavforgotpassword();
      this.redirectFromForgotPsw = true;
    }
  }

  closeLoginNav() {
    this.loginNav.removeNavLogin();
    this.showScreen = '';
    this.errorMsg = '';
  }

  public updateCurrency(curr) {
    this.productsService.currency = curr;
  }

  // public changeLanguage(lang){
  //   this.translate.use(lang)
  // }

  public openSearch() {
    this.show = true;
  }

  public closeSearch() {
    this.show = false;
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  // Logout user start
  logOutUser() {
    this.authService.logout();
  }

  // Date format change start
  dateFormatChange(_identifier, event: MatDatepickerInputEvent<Date>) {
    console.log('_identifier', _identifier);
    console.log('_data', event);

    this.model.dob = moment(event.value).format('YYYY/MM/DD');
    console.log('this.model.dob ', this.model.dob);
    this.checkValidtion('dateofbirth');
  }

  //---------------- login form submit start-----------------
  onSubmitSingInForm(form: NgForm) {
    console.log('form >>', form.value);
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    this.authenticate(form, form.value);
    // form.reset();

  }

  // authenticate function
  authenticate(_form, form_data) {
    this.isLoading = true;
    let authObs: Observable<any>;
    authObs = this.authService.login(this.api_url, form_data, '')
    this.errorMsg = '';
    this.formSubmitSubscribe = authObs.subscribe(
      resData => {
        console.log('resData ============= (sign in) ))))))))))))))>', resData);
        if (resData.status === 200) {
          this.closeLoginNav();
          // Call wishlist
          let products = JSON.parse(localStorage.getItem("wishlistItem")) || [];
          let cartproducts = JSON.parse(localStorage.getItem("cartItem")) || [];
          console.log("products,cartproducts", products, cartproducts);

          if (products.length != 0) {
            this.addToWishlist(products);
          }
          if (cartproducts.length != 0) {
            this.addToCart(cartproducts);
          }

          console.log('Wishlist calling....', products);


          this.commonUtils.onClicksigninCheck(resData);

          // user details set
          this.commonUtils.onSigninUserInfo(resData);

          this.toastrService.success(resData.message);
          this.isLoading = false;
          _form.reset();
        } else {
          this.toastrService.error(resData.message);
          this.isLoading = false;
        }

      },
      errRes => {
        this.isLoading = false;
        console.log("error handeller >>@@", errRes);
        if (errRes.error.message) {
          this.errorMsg = errRes.error.message;
        } else if (errRes.error.messagee) {
          this.errorMsg = errRes.error.messagee;
        } else {
          this.toastrService.error(errRes.message);
        }
      }
    );
  }
  // login form submit end

  // Add to wishlist
  public addToWishlist(product: Product) {
    console.log('product>>>>', product);

    this.wishlistService.addToWishlist(product);
  }
  // get wishlist
  // public getWishlist(product: Product) {

  //    this.wishlistService.getWishlist();
  // }
  // Add to cart
  public addToCart(product: Product, quantity: number = 1) {
    console.log("cart calling..", product, this.userId);

    if (quantity > 0)
      this.cartService.addToCart(product, quantity);
    this.wishlistService.removeFromWishlist(product);

  }
  // =============== Forgot Password form submit start ==========
  emaillinksent = false;
  onSubmitForgotPassword(form: NgForm) {
    this.emaillinksent = false;
    this.isLoading = true;
    this.errorMsg = '';
    console.log('form >>', form.value);
    // get form value
    let fd = new FormData();

    for (let val in form.value) {
      if (form.value[val] == undefined) {
        form.value[val] = '';
      }
      fd.append(val, form.value[val]);

    };

    if (!form.valid) {
      return;
    }

    this.formSubmitSubscribe = this.http.get(API_URL + this.api_url + '/' + form.value.email).subscribe(
      (response: any) => {
        if (response.status === 200) {
          this.toastrService.success(response.message);
          form.reset();
          this.isLoading = false;
          this.emaillinksent = true;
        } else {
          this.toastrService.error(response.message);
          this.isLoading = false;
        }
      },
      errRes => {
        this.isLoading = false;
        console.log("error handeller >>@@", errRes);
        if (errRes.error.message) {
          this.errorMsg = errRes.error.message;
        } else if (errRes.error.messagee) {
          this.errorMsg = errRes.error.messagee;
        } else {
          this.toastrService.error(errRes.message);
        }
      }
    );
  }
  // Forgot Password  form submit end

  // =============== Change Password form submit start ==========
  onSubmitChangePassword(form: NgForm) {
    this.isLoading = true;
    this.errorMsg = '';
    console.log('form >>', form.value);
    // get form value
    let fd = new FormData();

    for (let val in form.value) {
      if (form.value[val] == undefined) {
        form.value[val] = '';
      }
      fd.append(val, form.value[val]);

    };

    if (!form.valid) {
      return;
    }

    this.formSubmitSubscribe = this.http.post(API_URL + 'auth/changePassword', form.value).subscribe(
      (response: any) => {
        if (response.status === 200) {
          this.toastrService.success(response.message);
          form.reset();
          this.closeLoginNav();
          this.isLoading = false;
        } else {
          this.toastrService.error(response.message);
          this.isLoading = false;
        }
      },
      errRes => {
        this.isLoading = false;
        console.log("error handeller >>@@", errRes);
        if (errRes.error.message) {
          this.errorMsg = errRes.error.message;
        } else if (errRes.error.messagee) {
          this.errorMsg = errRes.error.messagee;
        } else {
          this.toastrService.error(errRes.message);
        }
      }
    );
  }
  // Change Password  form submit end

  /* Validation check start */
  errorList: any = {};
  checkValidtion(fieldNAme: any) {
    console.log('fieldNAme');
    const onlyAB = /^[A-Z]+$/i;
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const numberRegex = '^[0-9]*$';
    const noSpacalchar = "^[a-zA-Z0-9 ]+$";
    const onlyAlpha = /\d+/g;
    const emptySpace = /^ *$/;

    if (fieldNAme == 'firstName') {
      // firstName
      if (this.model.firstName) {
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if (this.model.firstName.match(onlyAB) == null) {
          this.errorList.firstName = 'Please enter only alphabet';
        } else if (this.model.firstName.match(emptySpace) !== null) {
          this.errorList.firstName = 'Empty Space not allowed';
        } else {
          this.errorList.firstName = '';
        }
      } else {
        this.errorList.firstName = 'Enter first name';
      }
    }
    if (fieldNAme == 'lastName') {
      // lastName
      if (this.model.lastName) {
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if (this.model.lastName.match(onlyAB) == null) {
          this.errorList.lastName = 'Please enter only alphabet';
        } else if (this.model.lastName.match(emptySpace) !== null) {
          this.errorList.lastName = 'Empty Space not allowed';
        } else {
          this.errorList.lastName = '';
        }
      } else {
        this.errorList.lastName = 'Enter last name';
      }
    }
    if (fieldNAme == 'mobileNo') {
      // mobileNo
      if (this.model.mobileNo && this.model.mobileNo.toString().length == 10) {
        console.log(this.model.mobileNo.length);

        this.errorList.mobileNo = '';
      } else {
        this.errorList.mobileNo = 'Enter 10 digit mobile no';

      }
    }
    if (fieldNAme == 'email') {
      // email
      if (this.model.email) {
        if (this.model.email.match(emailRegex) == null) {
          this.errorList.email = 'Please enter valid email';
        } else if (this.model.email.match(emptySpace) !== null) {
          this.errorList.email = 'Empty Space not allowed';
        } else {
          this.errorList.email = '';
        }
      } else {
        this.errorList.email = 'Enter email';


      }
    }
    if (fieldNAme == 'password') {
      console.log('model.password', this.model.password);

      if (this.model.password) {

        if (this.model.password.match(emptySpace) !== null) {
          this.errorList.password = 'Empty Space not allowed';
        } else {
          this.errorList.password = '';
        }
      } else {
        this.errorList.password = 'Enter a password';
      }
      console.log('errorList.password', this.errorList.password);

    }
    if (fieldNAme == 'dateofbirth') {
      console.log('this.model.dateofbirth', this.model.dateofbirth);

      // dateOfbirth
      if (this.model.dateofbirth) {
        this.errorList.dateofbirth = '';
      } else {
        this.errorList.dateofbirth = 'Enter DOB';
      }
      console.log('errorList.dateofbirth', this.errorList.dateofbirth);
    }
    if (fieldNAme == 'loginEmail') {
      // email
      if (this.model.email) {
        if (this.model.email.match(emailRegex) == null) {
          this.errorList.loginEmail = 'Please enter valid email';
        } else if (this.model.email.match(emptySpace) !== null) {
          this.errorList.loginEmail = 'Empty Space not allowed';
        } else {
          this.errorList.loginEmail = '';
        }
      } else {
        this.errorList.loginEmail = 'Enter email';


      }
    }
    if (fieldNAme == 'loginPassword') {
      if (this.model.password) {

        if (this.model.password.match(emptySpace) !== null) {
          this.errorList.loginPassword = 'Empty Space not allowed';
        } else {
          this.errorList.loginPassword = '';
        }
      } else {
        this.errorList.loginPassword = 'Enter a password';
      }

    }
    if (fieldNAme == 'forgotEmail') {
      // email
      if (this.model.email) {
        if (this.model.email.match(emailRegex) == null) {
          this.errorList.forgotEmail = 'Please enter valid email';
        } else if (this.model.email.match(emptySpace) !== null) {
          this.errorList.forgotEmail = 'Empty Space not allowed';
        } else {
          this.errorList.forgotEmail = '';
        }
      } else {
        this.errorList.forgotEmail = 'Enter email';


      }
    }
  }
  /* Validation check end */

  // ======================== CreateAccount form submit start ===================
  onSubmitCreateAccount(form: NgForm) {
    this.isLoading = true;
    this.errorMsg = '';
    console.log('form >>', form.value);
    // get form value
    let fd = new FormData();

    for (let val in form.value) {
      if (form.value[val] == undefined) {
        form.value[val] = '';
      }
      fd.append(val, form.value[val]);
    };

    if (!form.valid) {
      return;
    }
    this.formSubmitSubscribe = this.http.post(API_URL + this.api_url, form.value).subscribe(
      (response: any) => {
        console.log('response', response);

        if (response.status === 200) {
          this.showScreen = false;
          this.isLoading = false;
          form.reset();
          this.closeLoginNav();
          this.toastrService.success('Registration successfully! Please check your mail for active your account');
          // Please check your mail for active your account

          this.openLoginNav('login');

        } else {
          this.toastrService.error(response.message);
          this.isLoading = false;
        }
      },
      errRes => {
        this.isLoading = false;
        console.log("error handeller >>@@", errRes);
        if (errRes.error.message) {
          this.errorMsg = errRes.error.message;
        } else if (errRes.error.messagee) {
          this.errorMsg = errRes.error.messagee;
        } else {
          this.toastrService.error(errRes.message);
        }

      }
    );

  }
  // CreateAccount form submit end
  passwordvalid(new_password: any, conform_password: any) {
    console.log(new_password, conform_password);
    if (conform_password == undefined) {
      this.errorMsg = false;

    } else if (new_password != conform_password) {
      this.errorMsg = "Password and confirm password  not match.";
      setTimeout(() => {                           // <<<---using ()=> syntax
        // this.errormsg = "";
      }, 3000);
    } else if (new_password == conform_password) {
      this.errorMsg = false;
    }
    else {
      this.errorMsg = false;
    }

  }
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if (this.formSubmitSubscribe !== undefined) {
      this.formSubmitSubscribe.unsubscribe();
    } if (this.logoutDataSubscribe !== undefined) {
      this.logoutDataSubscribe.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------  
}
