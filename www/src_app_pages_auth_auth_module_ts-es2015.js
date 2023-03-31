(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_auth_auth_module_ts"],{

/***/ 20794:
/*!***************************************************!*\
  !*** ./src/app/pages/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": function() { return /* binding */ AuthPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 66739);




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 97002)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'reset-password/:link/:linktime/:linktype',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 92200)).then(m => m.ResetPasswordPageModule)
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 6621:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": function() { return /* binding */ AuthPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 20794);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 66739);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthPageRoutingModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage]
    })
], AuthPageModule);



/***/ }),

/***/ 66739:
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": function() { return /* binding */ AuthPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auth.page.html */ 91286);
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ 54010);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.page */ 58167);



// import { DatePipe } from '@angular/common';











let AuthPage = class AuthPage {
    constructor(menuCtrl, authService, router, loadingController, http, alertCtrl, commonUtils, modalController, appComponent) {
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingController = loadingController;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.commonUtils = commonUtils;
        this.modalController = modalController;
        this.appComponent = appComponent;
        this.main_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl;
        this.file_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.fileUrl;
        this.hide = true;
        this.hide2 = true;
        this.hide3 = true;
        this.model = {};
        this.login = {};
        this.maritalstatuslist = [
            {
                id: 1, name: "Unmarried"
            }, {
                id: 2, name: "Married"
            }
        ];
        this.owlcarousel = [
            {
                title: "Welcome to Divatt",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
            },
            {
                title: "Welcome to Divatt",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
            },
            {
                title: "Welcome to Divatt",
                desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
            }
        ];
        this.isLoading = false;
        this.isLogin = true;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.type = 'ADMIN';
    }
    ngOnInit() {
        // menu hide
        this.commonFunction();
        this.menuCtrl.enable(false);
        this.formSubmitSubscribe = this.authService.globalparamsData.subscribe(res => {
            // console.log('authService',res);
            if (res && res != null && res != undefined && res != '') {
                if (res.token != undefined) {
                    this.router.navigateByUrl('/dashboard');
                }
            }
        });
        // get Site Info
        this.formSubmitSubscribe = this.commonUtils.getSiteInfoObservable.subscribe(res => {
            this.siteInfo = res;
        });
    }
    commonFunction() {
        const currentYear = new Date().getFullYear();
        // this.minDate = new Date(currentYear - 1, 0, 1);
        this.maxDate = new Date(currentYear - 18, 11, 31);
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
        // get Site Info
        this.formSubmitSubscribe = this.commonUtils.getSiteInfoObservable.subscribe(res => {
            this.siteInfo = res;
        });
        /* this.site_path = window.location.pathname;
        this.site_href = window.location.href;
        this.site_href_split = window.location.href.split('/')[1];
        this.site_path_split = window.location.pathname.split('/')[1]; */
        // this.appComponent.userInfoData();
        // menu hide
        this.menuCtrl.enable(false);
        this.formSubmitSubscribe = this.authService.globalparamsData.subscribe(res => {
            if (res && res != null && res != undefined && res != '') {
                if (res.token != undefined) {
                    this.router.navigateByUrl('/dashboard');
                }
            }
        });
    }
    onSwitchAuthMode() {
        this.isLogin = !this.isLogin;
    }
    //---------------- login form submit start-----------------
    onSubmitForm(form) {
        this.isLoading = true;
        // console.log('form >>', form.value);
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        if (this.isLogin) {
            // login server data send
        }
        else {
            // signup server data send
        }
        this.authenticate(form, form.value);
        // form.reset();
    }
    radioChange(e) {
        // console.log(e.value);
        this.gender = e.value;
    }
    // register form start
    onSubmitRegForm(form) {
        this.btnloader2 = true;
        // console.log("REG-->",form.value);
        this.designerProfile = {
            firstName1: form.value.firstName1,
            lastName1: form.value.lastName1,
            firstName2: form.value.firstName2,
            lastName2: form.value.lastName2,
            designerName: form.value.firstName1 + ' ' + form.value.lastName1,
            email: form.value.email,
            gender: form.value.gender,
            maritalStatus: form.value.maritalStatus,
            mobileNo: form.value.mobile,
            password: form.value.password,
            dob: form.value.dob,
            altMobileNo: form.value.altmobile,
            displayName: form.value.displayName,
            qualification: form.value.qualification,
        };
        this.boutiqueProfile = {
            boutiqueName: form.value.boutiqueName,
        };
        this.data = {
            designerName: form.value.firstName1 + ' ' + form.value.lastName1,
            boutiqueProfile: this.boutiqueProfile,
            designerProfile: this.designerProfile,
        };
        this.http.post("designer/add", this.data).subscribe((res) => {
            // console.log("res",res);
            this.btnloader2 = false;
            this.commonUtils.presentToast("success", res.message);
            // setTimeout(() => {
            this.tabGroup.selectedIndex = 0;
            // }, 1000);
            setTimeout(() => {
                form.reset();
            }, 1500);
        }, (error) => {
            this.btnloader2 = false;
            // console.log("error",error);
            this.message2 = error.error.message;
        });
    }
    // reginter form end
    // authenticate function
    authenticate(_form, form_data) {
        this.btnloader = true;
        this.loadingController
            .create({ keyboardClose: true, message: 'Logging in...' })
            .then(loadingEl => {
            loadingEl.present();
            let authObs;
            if (this.isLogin) {
                authObs = this.authService.login('auth/login', form_data, '');
                // console.log('###########>>>', authObs);
                // console.log('######form_data#####>>>', form_data);
            }
            else {
                // authObs = this.authService.signup(email, password);
            }
            // console.log('authenticate@@', authObs);
            // console.log('authenticate...........');
            this.formSubmitSubscribe = authObs.subscribe(resData => {
                // console.log('resData =============))))))))))))))>', resData);
                this.btnloader = false;
                this.router.navigateByUrl('/dashboard');
                // .then(() => {
                //   window.location.reload();
                // });
                setTimeout(() => {
                    // this.commonUtils.presentToast('success', resData.message);
                }, 500);
                setTimeout(() => {
                    _form.reset();
                    loadingEl.dismiss();
                }, 2000);
                loadingEl.dismiss();
                // this.commonUtils.presentToast('error', resData.message);
                // // console.log("data login after resData ++++++>", resData);
                this.btnloader = false;
                // loadingEl.dismiss();
                // this.router.navigateByUrl('/places/tabs/discover');
            }, errRes => {
                // console.log("errRes",errRes);
                this.btnloader = false;
                loadingEl.dismiss();
                // this.commonUtils.presentToast('error', errRes.error.message);
                this.message = errRes.error.message;
                // setTimeout(() => {
                //   this.message = null;
                // }, 3000);
            });
        });
    }
    // login form submit end
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Authentication failed',
            message: message,
            buttons: ['Okay']
        })
            .then(alertEl => alertEl.present());
    }
    // ..... resetPasswordOpenModal start ......
    resetPasswordOpenModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // // console.log('_identifier >>', _identifier);
            let profileDetails_modal;
            profileDetails_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__.ModalPage,
                cssClass: 'mymodalClass password',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            profileDetails_modal.onDidDismiss()
                .then((getdata) => {
                // console.log('getdata >>>>>>>>>>>', getdata);
                if (getdata.data == 'submitClose') {
                }
            });
            return yield profileDetails_modal.present();
        });
    }
    // resetPasswordOpenModal end 
    tabClick(tab) {
        // // console.log(tab);
    }
    termsConditions(e) {
        // // console.log("Event",e);
    }
    // Date format change start
    dateFormatChange(_identifier, event) {
        // console.log('_identifier', _identifier);
        // console.log('_data', event);
        this.model.dob = moment__WEBPACK_IMPORTED_MODULE_2__(event.value).format('YYYY/MM/DD');
        // console.log('this.model.dob ', this.model.dob );
    }
    passwordvalid(new_password, conform_password) {
        // console.log(new_password,conform_password);
        if (conform_password == undefined) {
            this.errormsg = '';
        }
        else if (new_password != conform_password) {
            this.errormsg = "Password and conform password  not match.";
            setTimeout(() => {
                // this.errormsg = "";
            }, 3000);
        }
        else if (new_password == conform_password) {
            this.errormsg = "";
        }
        else {
            this.errormsg = "";
        }
    }
    ngsel(e) {
    }
    // ----------- destroy subscription start ---------
    ngOnDestroy() {
        if (this.formSubmitSubscribe !== undefined) {
            this.formSubmitSubscribe.unsubscribe();
        }
    }
};
AuthPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_5__.CommonUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent }
];
AuthPage.propDecorators = {
    tabGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup,] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['slider', { static: true },] }]
};
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthPage);



/***/ }),

/***/ 54010:
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".radio_container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #cecece;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 9999px;\n  box-shadow: inset 0.5px 0.5px 2px 0 rgba(0, 0, 0, 0.15);\n}\n.radio_container input[type=radio] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: none;\n}\n.radio_container label {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: inherit;\n  width: 80px;\n  height: 30px;\n  text-align: center;\n  border-radius: 9999px;\n  overflow: hidden;\n  transition: linear 0.3s;\n  cursor: pointer;\n  color: #6e6e6edd;\n}\n.radio_container input[type=radio]:checked + label {\n  background-color: #1abc9c;\n  color: #f1f3f5;\n  font-weight: 200;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUVBLHFCQUFBO0VBQ0EsdURBQUE7QUFBSjtBQUNJO0VBQ0ksd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBQ0EsYUFBQTtBQUNSO0FBRUk7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFSO0FBR0k7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRFIiLCJmaWxlIjoiYXV0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMC41cHggMC41cHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbGluZWFyIDAuM3M7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNmU2ZTZlZGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XHJcbiAgICAgICAgY29sb3I6ICNmMWYzZjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 91286:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"page-wrapper\">\r\n    <div class=\"authentication-box\">\r\n      <div class=\"form-layout\">\r\n        <div class=\"form-wrapper\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 p-0 card-left\">\r\n                <div class=\"card bg-primary\">\r\n                  <div class=\"svg-icon\">\r\n                    <img src=\"assets/images/t.png\" width=\"100%\" />\r\n                  </div>\r\n                  <div class=\"single-item\">\r\n                    <ion-slides #slider pager=\"true\" [options]=\"slideOpts\">\r\n                      <ion-slide *ngFor=\"let data of owlcarousel\">\r\n                        <div class=\"slide\">\r\n                          <h3>{{data.title}}</h3>\r\n                          <p>{{data.desc}}</p>\r\n                        </div>\r\n                      </ion-slide>\r\n                    </ion-slides>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-7 p-0 card-right\">\r\n                <div class=\"card tab2-card\">\r\n                  <div class=\"card-body\">\r\n                    <mat-tab-group class=\"no-pad\" (selectedTabChange)=\"tabClick($event)\">\r\n                      <mat-tab>\r\n                        <ng-template mat-tab-label>\r\n                          <mat-icon>login</mat-icon>\r\n                          <span>Login</span>\r\n                        </ng-template>\r\n                        <div class=\"tab-pane fade active show\">\r\n                          <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(loginForm)\"\r\n                            (keyup.enter)=\"onSubmitForm(loginForm)\" class=\"form-horizontal auth-form\">\r\n                            <div class=\"form-group\">\r\n                            <!-- <div class=\"d-flex align-items-center justify-content-center\">\r\n                            <div class=\"radio_container\">\r\n                              \r\n                              <input type=\"radio\" name=\"radio\" id=\"Designer\" checked (change)=\"selectLoginType('DESIGNER')\">\r\n                              <label for=\"Designer\">Designer</label>\r\n                              <input type=\"radio\" name=\"radio\" id=\"Admin\" (change)=\"selectLoginType('ADMIN')\">\r\n                              <label for=\"Admin\">Admin</label>\r\n                            </div>\r\n                          </div>  -->\r\n                            </div>\r\n                            <input type=\"hidden\" [(ngModel)]=\"type\" name=\"type\">\r\n                            <div class=\"form-group\">\r\n                              <!-- <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                                                      <div *ngIf=\"f.username.errors.required\">Email is required</div>\r\n                                                  </div> -->\r\n                              <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                <mat-label>Username</mat-label>\r\n                                <input matInput [(ngModel)]=\"login.email\" name=\"email\"\r\n                                  [ngClass]=\"{'disabled' : btnloader}\" />\r\n                              </mat-form-field>\r\n                            </div>\r\n                            <div class=\"form-group position-relative mb-2\">\r\n                              <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Password</mat-label>\r\n                                <input matInput [type]=\"hide ? 'password' : 'text'\" name=\"password\"\r\n                                  [(ngModel)]=\"login.password\" />\r\n                                <a mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                  [ngClass]=\"{'disabled' : btnloader}\" [attr.aria-label]=\"'Hide password'\"\r\n                                  [attr.aria-pressed]=\"hide\">\r\n                                  <mat-icon class=\"text-black\">{{hide ? 'visibility_off' :\r\n                                    'visibility'}}</mat-icon>\r\n                                </a>\r\n                              </mat-form-field>\r\n                            </div>\r\n                            <div>\r\n                              <p class=\"error\">{{message}}</p>\r\n                            </div>\r\n                            <div class=\"form-button d-flex justify-content-between align-items-center mt-2\">\r\n                              <!-- <button class=\"btn btn-primary text-uppercase\" [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"  [disabled]=\"!loginForm.valid\">\r\n                                <ion-spinner class=\"btnloader\" name=\"crescent\" *ngIf=\"btnloader\"></ion-spinner>\r\n                                Login\r\n                              </button> -->\r\n                              <ion-button  class=\"bg-primary-color\"  [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"  [disabled]=\"!loginForm.valid\">\r\n                                <ion-spinner class=\"btnloader\" name=\"crescent\" *ngIf=\"btnloader\"></ion-spinner>\r\n                                Login\r\n                              </ion-button>\r\n                              <a [routerLink]=\"'./forgot-password'\" class=\"btn btn-default forgot-pass\">\r\n                                Lost your password?</a>\r\n                            </div>\r\n                          </form>\r\n                        </div>\r\n                      </mat-tab>\r\n                    </mat-tab-group>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_auth_module_ts-es2015.js.map