(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_auth_reset-password_reset-password_module_ts"],{

/***/ 79788:
/*!****************************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": function() { return /* binding */ ResetPasswordPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 47957);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 92200:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": function() { return /* binding */ ResetPasswordPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 79788);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 47957);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 47957:
/*!******************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": function() { return /* binding */ ResetPasswordPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset-password.page.html */ 57729);
/* harmony import */ var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss */ 33887);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);








let ResetPasswordPage = class ResetPasswordPage {
    constructor(menuCtrl, http, activatedRoute, route, commonUtils) {
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.commonUtils = commonUtils;
        this.hide = true;
        this.hide2 = true;
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
        this.model = {};
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    ngOnInit() {
        this.link = this.activatedRoute.snapshot.params.link;
        this.time = this.activatedRoute.snapshot.params.linktime;
        this.type = this.activatedRoute.snapshot.params.linktype;
    }
    onsubmitResetform(form) {
        // console.log(form.value.newPass);
        this.data = { newPass: form.value.newPass };
        this.btnloader = true;
        this.http.post("auth/resetPassword/" + this.link + "/" + this.time + "/" + this.type + "=", this.data).subscribe((res) => {
            // console.log("p",res);
            if (res.status == 200) {
                this.commonUtils.presentToast('success', res.message);
                this.route.navigateByUrl('/auth');
            }
            else {
                this.commonUtils.presentToast('error', res.message);
            }
            this.btnloader = false;
        }, (error) => {
            // console.log(error);
            this.btnloader = false;
            this.commonUtils.presentToast('error', error.error.message);
        });
    }
    passwordvalid(new_password, conform_password) {
        // console.log(new_password,conform_password);
        if (conform_password == undefined) {
            this.errormsg = '';
        }
        else if (new_password != conform_password) {
            this.errormsg = "New password and conform password  not match.";
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
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils }
];
ResetPasswordPage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['slider', { static: true },] }]
};
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPasswordPage);



/***/ }),

/***/ 33887:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/reset-password/reset-password.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 57729:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/reset-password/reset-password.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"page-wrapper\">\r\n    <div class=\"authentication-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 p-0 card-left\">\r\n                <div class=\"card bg-primary\">\r\n                    <div class=\"svg-icon\">\r\n                        <img src=\"assets/images/t.png\" width=\"100%\">\r\n                    </div>\r\n                    <div class=\"single-item\">\r\n                       <ion-slides #slider pager=\"true\" [options]=\"slideOpts\">\r\n                          <ion-slide *ngFor=\"let data of owlcarousel\">\r\n                            <div class=\"slide\">\r\n                              <h3>{{data.title}}</h3>\r\n                              <p>\r\n                                {{data.desc}}\r\n                              </p>\r\n                            </div>\r\n                          </ion-slide>\r\n                        </ion-slides>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <div class=\"col-md-7 p-0 card-right\">\r\n                    <div class=\"card tab2-card\">\r\n                        <div class=\"card-body\">\r\n                          <mat-tab-group>\r\n                            <mat-tab> \r\n                              <ng-template mat-tab-label>\r\n                                <mat-icon>person_outline</mat-icon>\r\n                                <span>Reset Password</span>\r\n                              </ng-template>\r\n                              <form #resetpsw=\"ngForm\" (ngSubmit)=\"onsubmitResetform(resetpsw)\">\r\n                                <!-- <div class=\"form-group\">\r\n                                  <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Enter Code</mat-label>\r\n                                    <input matInput type=\"text\" name=\"code\"\r\n                                      [(ngModel)]=\"code\" />\r\n                                  </mat-form-field>\r\n                                </div> -->\r\n                                <div class=\"form-group\">\r\n                                  <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>New Password</mat-label>\r\n                                    <input matInput [type]=\"hide ? 'password' : 'text'\" name=\"newPass\"\r\n                                      [(ngModel)]=\"model.newPass\" required   (keyup)=\"passwordvalid(model.newPass,model.conformpassword)\"/>\r\n                                    <a mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                                      [ngClass]=\"{'disabled' : btnloader}\" [attr.aria-label]=\"'Hide password'\"\r\n                                      [attr.aria-pressed]=\"hide\">\r\n                                      <mat-icon class=\"text-black\">{{hide ? 'visibility_off' :\r\n                                        'visibility'}}</mat-icon>\r\n                                    </a>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <div class=\"form-group p-0\">\r\n                                  <mat-form-field appearance=\"outline\">\r\n                                    <mat-label>Conform Password</mat-label>\r\n                                    <input matInput [type]=\"hide2 ? 'password' : 'text'\" name=\"conformpassword\"\r\n                                      [(ngModel)]=\"model.conformpassword\" required   (keyup)=\"passwordvalid(model.newPass,model.conformpassword)\"/>\r\n                                    <a mat-icon-button matSuffix (click)=\"hide2 = !hide2\"\r\n                                      [ngClass]=\"{'disabled' : btnloader}\" [attr.aria-label]=\"'Hide password'\"\r\n                                      [attr.aria-pressed]=\"hide\">\r\n                                      <mat-icon class=\"text-black\">{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                    </a>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <p class=\"text-danger text-center\">{{errormsg}}</p>\r\n                                <div class=\"form-button d-flex justify-content-between align-items-center mt-2\">\r\n                                  <!-- <button class=\"btn btn-primary text-uppercase\" [disabled]=\"!resetpsw.valid\" type=\"submit\" [ngClass]=\"{'disabled' : btnloader}\"><i class=\"fa fa-spinner fa-spin\" *ngIf=\"btnloader\"></i> Reset Password</button> -->\r\n                                  <!-- <button class=\"btn btn-primary text-uppercase\" [ngClass]=\"{'disabled' : errormsg}\" type=\"submit\"  [disabled]=\"!resetpsw.valid\">\r\n                                    <ion-spinner class=\"btnloader\" name=\"crescent\" *ngIf=\"btnloader\"></ion-spinner>\r\n                                    \r\n                                  </button> -->\r\n                                  <ion-button  class=\"bg-primary-color\"   [ngClass]=\"{'disabled' : errormsg}\" type=\"submit\"  [disabled]=\"!resetpsw.valid\">\r\n                                    <ion-spinner class=\"btnloader\" name=\"crescent\" *ngIf=\"btnloader\"></ion-spinner>\r\n                                      Reset Password\r\n                                  </ion-button>\r\n                                  <a [routerLink]=\"'/auth'\" class=\"btn btn-default forgot-pass \"> Login Now</a>\r\n                              </div>\r\n                              </form>\r\n                            </mat-tab>\r\n                          </mat-tab-group>\r\n                           </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_reset-password_reset-password_module_ts-es2015.js.map