(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_add-color_add-color_module_ts"], {
    /***/
    77293:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/product/add-color/add-color-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddColorPageRoutingModule": function AddColorPageRoutingModule() {
          return (
            /* binding */
            _AddColorPageRoutingModule
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


      var _add_color_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-color.page */
      70525);

      var routes = [{
        path: '',
        component: _add_color_page__WEBPACK_IMPORTED_MODULE_0__.AddColorPage
      }];

      var _AddColorPageRoutingModule = function AddColorPageRoutingModule() {
        _classCallCheck(this, AddColorPageRoutingModule);
      };

      _AddColorPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddColorPageRoutingModule);
      /***/
    },

    /***/
    94550:
    /*!*************************************************************!*\
      !*** ./src/app/pages/product/add-color/add-color.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddColorPageModule": function AddColorPageModule() {
          return (
            /* binding */
            _AddColorPageModule
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


      var _add_color_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-color-routing.module */
      77293);
      /* harmony import */


      var _add_color_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-color.page */
      70525);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddColorPageModule = function AddColorPageModule() {
        _classCallCheck(this, AddColorPageModule);
      };

      _AddColorPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_color_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddColorPageRoutingModule],
        declarations: [_add_color_page__WEBPACK_IMPORTED_MODULE_1__.AddColorPage]
      })], _AddColorPageModule);
      /***/
    },

    /***/
    70525:
    /*!***********************************************************!*\
      !*** ./src/app/pages/product/add-color/add-color.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddColorPage": function AddColorPage() {
          return (
            /* binding */
            _AddColorPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_color_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-color.page.html */
      16670);
      /* harmony import */


      var _add_color_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-color.page.scss */
      47473);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _AddColorPage = /*#__PURE__*/function () {
        function AddColorPage(activatedRoute, authService, http, router, commonUtils) {
          _classCallCheck(this, AddColorPage);

          this.activatedRoute = activatedRoute;
          this.authService = authService;
          this.http = http;
          this.router = router;
          this.commonUtils = commonUtils;
          this.model = {};
        }

        _createClass(AddColorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.commonFunction();
          } // commonFunction start

        }, {
          key: "commonFunction",
          value: function commonFunction() {
            var _this = this;

            // get active url name
            this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
            this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
            this.parms_color_name = this.activatedRoute.snapshot.paramMap.get('name'); // console.log('parms_action_name', this.parms_action_name);
            // console.log('parms_action_id', this.parms_color_name);

            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              // console.log('res>>', res);
              if (res.authority == 'ADMIN') {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    // console.log('menu>>', data);
                    // console.log('this.router.url>>', this.router.url);
                    var pageUrlName = _this.router.url.split("/"); // console.log('pageUrlName', pageUrlName);


                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;
                        var moduleUrlName = item.modDetails.url.split("-"); // console.log('moduleUrlName',moduleUrlName,pageUrlName);

                        if (pageUrlName[1] == moduleUrlName[0]) {
                          if (_this.parms_action_name == 'add' && item.modPrivs.create == true) {
                            // console.log('-----Permission create Granted-----');
                            break;
                          } else if (_this.parms_action_name == 'edit' && item.modPrivs.update == true) {
                            // console.log('-----Permission update Granted-----');
                            _this.getcolorByName();

                            break;
                          } else {
                            // console.log('-------No Permission--------');
                            _this.router.navigateByUrl('/error');
                          }
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }
                });
              } else {
                _this.router.navigateByUrl('/error');
              }
            });
            /*Check permission status end*/
          } // getcolorByName start

        }, {
          key: "getcolorByName",
          value: function getcolorByName() {
            var _this2 = this;

            this.loader = true;
            this.getColorSubscribe = this.http.get("adminMData/getColour/" + this.parms_color_name).subscribe(function (res) {
              // console.log("Color Data",this.allcolordata,"response",res);
              // this.commonUtils.presentToast('success', res.message);
              _this2.loader = false;
              _this2.model = {
                colorName: res.colorName,
                colorValueCreate: res.colorValue,
                isActive: res.isActive
              };
            }, function (error) {
              _this2.loader = false;
              _this2.btnloader = false;

              _this2.commonUtils.presentToast('success', error.error.message); // recall category list

            });
          } // getcolorByName end
          // onSubmitColorForm start

        }, {
          key: "onSubmitColorForm",
          value: function onSubmitColorForm(form) {
            var _this3 = this;

            this.btnloader = true; // console.log("from",form.value);

            if (this.parms_action_name == 'add') {
              this.addColorSubscribe = this.http.put("adminMData/addColour", form.value).subscribe(function (res) {
                // console.log("Color Data",this.allcolordata,"response",res);
                _this3.btnloader = false;

                _this3.commonUtils.presentToast('success', res.message);

                _this3.router.navigateByUrl('/color-list');

                form.reset();
              }, function (error) {
                _this3.btnloader = false; // // console.log("error",error);

                _this3.commonUtils.presentToast('error', error.error.message); // recall category list

              });
            } else if (this.parms_action_name == 'edit') {
              this.addColorSubscribe = this.http.put("adminMData/updateColours/" + this.parms_color_name, form.value).subscribe(function (res) {
                _this3.commonUtils.presentToast('success', res.message);

                _this3.router.navigateByUrl('/color-list');

                form.reset();
              }, function (error) {
                _this3.btnloader = false;

                _this3.commonUtils.presentToast('success', error.error.message);
              });
            }
          } // onSubmitColorForm end

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.addColorSubscribe !== undefined) {
              this.addColorSubscribe.unsubscribe();
            }

            if (this.permissionDataSubscribe !== undefined) {
              this.permissionDataSubscribe.unsubscribe();
            }
          }
        }]);

        return AddColorPage;
      }();

      _AddColorPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils
        }];
      };

      _AddColorPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-color',
        template: _raw_loader_add_color_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_color_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddColorPage);
      /***/
    },

    /***/
    47473:
    /*!*************************************************************!*\
      !*** ./src/app/pages/product/add-color/add-color.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29sb3IucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    16670:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-color/add-color.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"form-layout\">\r\n        <div class=\"form-wrapper\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"page-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"page-header-left\">\r\n                            <h3>Color\r\n                                <!-- <small>Divatt Admin panel</small> -->\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <ol class=\"breadcrumb float-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <mat-icon>home</mat-icon>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item active\">\r\n                            {{action}} Color\r\n                          </li>\r\n                      </ol>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content-center\" *ngIf=\"loader\"><mat-spinner class=\"form-get-loader\"></mat-spinner></div>\r\n          <div class=\"card card-box\" *ngIf=\"!loader\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-header-tittle\">\r\n                  {{parms_action_name}} Color\r\n                </div>\r\n                \r\n            </div>\r\n            <form action=\"\" #color=\"ngForm\" (ngSubmit)=\"onSubmitColorForm(color)\">\r\n              <div class=\"card-body\">\r\n                <div class=\"col-md-6 m-auto\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <!-- Name -->\r\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                          <div class=\"form-group\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Color Name</mat-label>\r\n                              <input matInput type=\"text\"  name=\"colorName\" [(ngModel)] = \"model.colorName\" required pattern=\"\\S(.*\\S)?\">\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </ion-col>       \r\n                        \r\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                          <div class=\"form-group\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Color Value</mat-label>\r\n                              <input matInput type=\"text\"  name=\"colorValue\" [(ngModel)] = \"model.colorValueCreate\" readonly required>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </ion-col> \r\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                          <p>Select Color Value:</p>\r\n                          <input type=\"color\" name=\"value\" [(ngModel)] = \"model.colorValueCreate\">\r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"toggle-button w-fit\">\r\n                              <ion-label class=\"h2 mb-0 mr-1\">Is active : </ion-label>\r\n                              <ion-label>\r\n                                  <p class=\"onoff\"><input type=\"checkbox\" value=\"true\" id=\"isActive\" name=\"isActive\" [(ngModel)]=\"model.isActive\"><label for=\"isActive\"></label></p>\r\n                              </ion-label>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>    \r\n                      </ion-row>\r\n                    </ion-grid>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div></div>\r\n                <div>\r\n                  <ion-button class=\"custom-btn\" type=\"submit\"  [disabled]=\"!color.valid || btnloader\">\r\n                    <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                    Save\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" [routerLink]=\"['/', 'color-list']\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_product_add-color_add-color_module_ts-es5.js.map