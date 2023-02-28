(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_auth_forgot-password_forgot-password_module_ts"], {
    /***/
    60757:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageRoutingModule": function ForgotPasswordPageRoutingModule() {
          return (
            /* binding */
            _ForgotPasswordPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password.page */
      2442);

      var routes = [{
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
      }];

      var _ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
        _classCallCheck(this, ForgotPasswordPageRoutingModule);
      };

      _ForgotPasswordPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ForgotPasswordPageRoutingModule);
      /***/
    },

    /***/
    97002:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPageModule": function ForgotPasswordPageModule() {
          return (
            /* binding */
            _ForgotPasswordPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forgot-password-routing.module */
      60757);
      /* harmony import */


      var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page */
      2442);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _ForgotPasswordPageModule = function ForgotPasswordPageModule() {
        _classCallCheck(this, ForgotPasswordPageModule);
      };

      _ForgotPasswordPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
      })], _ForgotPasswordPageModule);
      /***/
    },

    /***/
    2442:
    /*!********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgotPasswordPage": function ForgotPasswordPage() {
          return (
            /* binding */
            _ForgotPasswordPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./forgot-password.page.html */
      29919);
      /* harmony import */


      var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forgot-password.page.scss */
      66299);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _ForgotPasswordPage = /*#__PURE__*/function () {
        function ForgotPasswordPage(menuCtrl, http, route, commonUtils) {
          _classCallCheck(this, ForgotPasswordPage);

          this.menuCtrl = menuCtrl;
          this.http = http;
          this.route = route;
          this.commonUtils = commonUtils;
          this.hide = true;
          this.owlcarousel = [{
            title: "Welcome to Divatt",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
          }, {
            title: "Welcome to Divatt",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
          }, {
            title: "Welcome to Divatt",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
          }];
          this.model = {};
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
        }

        _createClass(ForgotPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onsubmitForgetform",
          value: function onsubmitForgetform(form) {
            var _this = this;

            this.btnloader = true;
            var mail = form.value.username;
            this.http.get("auth/mailForgotPasswordLink/Admin/" + mail).subscribe(function (res) {
              _this.btnloader = false; // this.commonUtils.presentToast('success', res.message);

              _this.message2 = res.message;
              setTimeout(function () {
                // this.message2 = '';
                form.reset();

                _this.route.navigateByUrl('/auth');
              }, 2000);
            }, function (error) {
              // this.commonUtils.presentToast('error', error.message);
              _this.message = error.error.message;
              _this.btnloader = false;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }]);

        return ForgotPasswordPage;
      }();

      _ForgotPasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils
        }];
      };

      _ForgotPasswordPage.propDecorators = {
        slider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
          args: ['slider', {
            "static": true
          }]
        }]
      };
      _ForgotPasswordPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ForgotPasswordPage);
      /***/
    },

    /***/
    66299:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/forgot-password/forgot-password.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    29919:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forgot-password/forgot-password.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"page-wrapper\">\r\n    <div class=\"authentication-box\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 p-0 card-left\">\r\n                <div class=\"card bg-primary\">\r\n                    <div class=\"svg-icon\">\r\n                        <img src=\"assets/images/t.png\" width=\"100%\">\r\n                    </div>\r\n                    <div class=\"single-item\">\r\n                       <ion-slides #slider pager=\"true\" [options]=\"slideOpts\">\r\n                          <ion-slide *ngFor=\"let data of owlcarousel\">\r\n                            <div class=\"slide\">\r\n                              <h3>{{data.title}}</h3>\r\n                              <p>\r\n                                {{data.desc}}\r\n                              </p>\r\n                            </div>\r\n                          </ion-slide>\r\n                        </ion-slides>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <div class=\"col-md-7 p-0 card-right\">\r\n                    <div class=\"card tab2-card\">\r\n                        <div class=\"card-body\">\r\n                          <mat-tab-group>\r\n                            <mat-tab> \r\n                              <ng-template mat-tab-label>\r\n                                <mat-icon>person_outline</mat-icon>\r\n                                <span>Forget Password</span>\r\n                              </ng-template>\r\n                              <form #forgetpsw=\"ngForm\" (ngSubmit)=\"onsubmitForgetform(forgetpsw)\">\r\n                                \r\n                                <div class=\"form-group mb-2\">\r\n                                    <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                    <mat-label>Email</mat-label>\r\n                                    <input matInput [(ngModel)]=\"model.username\" pattern=\"^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$\" name=\"username\" [ngClass]=\"{'disabled' : btnloader}\" required>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                                <p class=\"error\">{{message}}</p>\r\n                                <p class=\"success\">{{message2}}</p>\r\n                                <div class=\"form-button d-flex justify-content-between align-items-center mt-2\">\r\n                                  <!-- <button class=\"btn btn-primary text-uppercase\" [disabled]=\"!forgetpsw.valid\" type=\"submit\" [ngClass]=\"{'disabled' : btnloader}\"><i class=\"fa fa-spinner fa-spin\" *ngIf=\"btnloader\"></i> Send Mail</button> -->\r\n                                  <!-- <button class=\"btn btn-primary text-uppercase\" [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"  [disabled]=\"!forgetpsw.valid\">\r\n                                    <ion-spinner class=\"btnloader\" name=\"crescent\" *ngIf=\"btnloader\"></ion-spinner>\r\n                                    Send Mail\r\n                                  </button> -->\r\n                                  <ion-button  class=\"bg-primary-color\"   [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"  [disabled]=\"!forgetpsw.valid\">\r\n                                    <ion-spinner class=\"btnloader\" name=\"crescent\" *ngIf=\"btnloader\"></ion-spinner>\r\n                                    Send Mail\r\n                                  </ion-button>\r\n                                  <a [routerLink]=\"'../'\" class=\"btn btn-default forgot-pass \"> Login Now</a>\r\n                              </div>\r\n                              </form>\r\n                            </mat-tab>\r\n                          </mat-tab-group>\r\n                           </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_auth_forgot-password_forgot-password_module_ts-es5.js.map