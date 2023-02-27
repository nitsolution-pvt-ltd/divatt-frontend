(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_accounts_accounts-view_accounts-view_module_ts"], {
    /***/
    18747:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/accounts/accounts-view/accounts-view-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountsViewPageRoutingModule": function AccountsViewPageRoutingModule() {
          return (
            /* binding */
            _AccountsViewPageRoutingModule
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


      var _accounts_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accounts-view.page */
      570);

      var routes = [{
        path: '',
        component: _accounts_view_page__WEBPACK_IMPORTED_MODULE_0__.AccountsViewPage
      }];

      var _AccountsViewPageRoutingModule = function AccountsViewPageRoutingModule() {
        _classCallCheck(this, AccountsViewPageRoutingModule);
      };

      _AccountsViewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AccountsViewPageRoutingModule);
      /***/
    },

    /***/
    83369:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/accounts/accounts-view/accounts-view.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountsViewPageModule": function AccountsViewPageModule() {
          return (
            /* binding */
            _AccountsViewPageModule
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


      var _accounts_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./accounts-view-routing.module */
      18747);
      /* harmony import */


      var _accounts_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accounts-view.page */
      570);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AccountsViewPageModule = function AccountsViewPageModule() {
        _classCallCheck(this, AccountsViewPageModule);
      };

      _AccountsViewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _accounts_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsViewPageRoutingModule],
        declarations: [_accounts_view_page__WEBPACK_IMPORTED_MODULE_1__.AccountsViewPage]
      })], _AccountsViewPageModule);
      /***/
    },

    /***/
    570:
    /*!********************************************************************!*\
      !*** ./src/app/pages/accounts/accounts-view/accounts-view.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountsViewPage": function AccountsViewPage() {
          return (
            /* binding */
            _AccountsViewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_accounts_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./accounts-view.page.html */
      48842);
      /* harmony import */


      var _accounts_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./accounts-view.page.scss */
      79277);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _AccountsViewPage = /*#__PURE__*/function () {
        function AccountsViewPage(http, toastController, modalController, alertController, commonUtils, authService, activatedRoute, router) {
          _classCallCheck(this, AccountsViewPage);

          this.http = http;
          this.toastController = toastController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.commonUtils = commonUtils;
          this.authService = authService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.accountData = {};
        }

        _createClass(AccountsViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.activatedRoute.snapshot.params.id;
            this.getAccountDataById();
          }
        }, {
          key: "getAccountDataById",
          value: function getAccountDataById() {
            var _this = this;

            this.tableListSubscribe = this.http.get('account/view/' + this.id).subscribe(function (res) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j;

              _this.accountData = res;
              _this.accountData = {
                designer_return_amount: res.designer_return_amount[0],
                order_details: res.order_details[0],
                service_charge: res.service_charge,
                govt_charge: res.govt_charge[0],
                admin_details: res.admin_details,
                designer_details: res.designer_details,
                _id: res._id
              };
              _this.accountData.order_details.datetime = moment__WEBPACK_IMPORTED_MODULE_2__((_b = (_a = _this.accountData) === null || _a === void 0 ? void 0 : _a.order_details) === null || _b === void 0 ? void 0 : _b.datetime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
              _this.accountData.order_details.delivery_datetime = moment__WEBPACK_IMPORTED_MODULE_2__((_d = (_c = _this.accountData) === null || _c === void 0 ? void 0 : _c.order_details) === null || _d === void 0 ? void 0 : _d.delivery_datetime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');

              if (((_e = res === null || res === void 0 ? void 0 : res.order_details[0]) === null || _e === void 0 ? void 0 : _e.sales_price) != 0) {
                _this.taxValue = ((_f = res === null || res === void 0 ? void 0 : res.order_details[0]) === null || _f === void 0 ? void 0 : _f.sales_price) - ((_g = res === null || res === void 0 ? void 0 : res.order_details[0]) === null || _g === void 0 ? void 0 : _g.hsn_amount);
              } else {
                _this.taxValue = ((_h = res === null || res === void 0 ? void 0 : res.order_details[0]) === null || _h === void 0 ? void 0 : _h.mrp) - ((_j = res === null || res === void 0 ? void 0 : res.order_details[0]) === null || _j === void 0 ? void 0 : _j.hsn_amount);
              }
            }, function (error) {});
          }
        }, {
          key: "genaratePDF",
          value: function genaratePDF(order, identifier) {
            // console.log('Data',order,identifier);
            var _a, _b;

            if (identifier == 'orderinvoice') {
              var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl + "/userOrder/getOrderSummary/" + order;
              window.open(url, "_blank");
            } else {
              var _url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl + "/account/getDesignerInvoice/" + ((_a = order === null || order === void 0 ? void 0 : order.designer_return_amount) === null || _a === void 0 ? void 0 : _a.order_id) + "/" + ((_b = order === null || order === void 0 ? void 0 : order.designer_details) === null || _b === void 0 ? void 0 : _b.designer_id);

              window.open(_url, "_blank");
            }
          } // ----------- destroy unsubscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.tableListSubscribe !== undefined) {
              this.tableListSubscribe.unsubscribe();
            }
          }
        }]);

        return AccountsViewPage;
      }();

      _AccountsViewPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _AccountsViewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-accounts-view',
        template: _raw_loader_accounts_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_accounts_view_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AccountsViewPage);
      /***/
    },

    /***/
    79277:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/accounts/accounts-view/accounts-view.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50cy12aWV3LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    48842:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/accounts-view/accounts-view.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n    <div class=\"page-body\">\r\n        <div class=\"page-wrapper\">\r\n          <div class=\"table-listing account-view\">\r\n            <div class=\"container-fluid\">\r\n              <div class=\"page-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"page-header-left\">\r\n                            <h3>Account View</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <ol class=\"breadcrumb float-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <mat-icon>home</mat-icon>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\">\r\n                            Account List\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\">\r\n                            Account Singel View\r\n                          </li>\r\n                      </ol>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n               <div class=\"col-sm-12 col-md-12 col-lg-10 m-auto\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"card border-0 \">\r\n                        <div class=\"card-header d-flex align-items-center justify-content-between\">\r\n                          <h3>Order Details</h3>\r\n                          <button mat-mini-fab  class=\"bg-theme d-flex align-items-center justify-content-center\" matTooltip=\"Download order details\" (click)=\"genaratePDF(accountData?.order_details?.order_id,'orderinvoice')\">\r\n                            <mat-icon>sim_card_download</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Order ID&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.order_id}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Order Date&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.datetime}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Invoice Number&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.invoice_id}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Delivery Date&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.delivery_datetime}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12 mt-4\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Product SKU&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.product_sku}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Gross Amount&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.mrp | number:'1.2-2'}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Discounts&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.discount | number:'1.2-2'}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Taxable Value&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{taxValue | number:'1.2-2'}}\r\n                                <!-- {{accountData?.order_details?.mrp - (accountData?.order_details?.hsn_cgst + accountData?.order_details?.hsn_sgst + accountData?.order_details?.hsn_igst).toFixed(0) | number:'1.2-2'}} -->\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">CGST(6%)&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.hsn_cgst | number:'1.2-2'}}\r\n                              </p>\r\n                            </div>\r\n                          </div><div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">SGST(6%)&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.hsn_sgst | number:'1.2-2'}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">IGST <span *ngIf=\"accountData?.order_details?.hsn_igst\">(12%)</span>&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.hsn_igst | number:'1.2-2'}}\r\n                              </p>\r\n                            </div>\r\n                            <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                              <div class=\"account-item flex price\">\r\n                                <h4 class=\"account-header\">Giftwrap&nbsp; :</h4>\r\n                                <p class=\"account-body\">\r\n                                  {{accountData?.order_details?.giftWrapAmount | number:'1.2-2'}}\r\n                                  <!-- 0.00 -->\r\n                                </p>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                              <hr style=\"margin: 5px 0;background: rgb(0 0 0);\"/>\r\n                            </div>\r\n                            <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                              <div class=\"account-item flex price\">\r\n                                <h4 class=\"account-header font-weight-bold\">Total&nbsp; :</h4>\r\n                                <p class=\"account-body font-weight-bold\" *ngIf=\"accountData?.order_details?.sales_price != 0\">\r\n                                  {{accountData?.order_details?.sales_price | number:'1.2-2'}}\r\n                                </p>\r\n                                <p class=\"account-body font-weight-bold\" *ngIf=\"accountData?.order_details?.sales_price == 0\">\r\n                                  {{accountData?.order_details?.mrp | number:'1.2-2'}}\r\n                                </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"card border-0 \">\r\n                        <div class=\"card-header d-flex align-items-center justify-content-between\">\r\n                          <h3>Divatt Charges Details</h3>\r\n                          <button mat-mini-fab  class=\"bg-theme d-flex align-items-center justify-content-center\" matTooltip=\"Download payment details\" (click)=\"genaratePDF(accountData,'')\">\r\n                            <mat-icon>sim_card_download</mat-icon>\r\n                          </button>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Invoice Id&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.designer_invoice_id}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Basic Value&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.fee}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">CGST (9%)&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.cgst}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">SGST (9%)&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.sgst}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12 \">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">IGST (18%)&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.igst}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <hr style=\"margin: 5px 0;background: rgb(0 0 0);\"/>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Total&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.fee + accountData?.service_charge?.igst}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">TCS (1%)&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.tcs}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <hr style=\"margin: 5px 0;background: rgb(0 0 0);\"/>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Gross Amount&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.service_charge?.total_amount}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-12 col-sm-12 col-lg-12\">\r\n                            <div class=\"account-item flex price\">\r\n                              <h4 class=\"account-header\">Payable Amount:&nbsp; :</h4>\r\n                              <p class=\"account-body\">\r\n                                {{accountData?.order_details?.mrp - accountData?.service_charge?.total_amount}}\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!-- common footer show -->\r\n    <common-footer></common-footer>\r\n</ion-content>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_accounts_accounts-view_accounts-view_module_ts-es5.js.map