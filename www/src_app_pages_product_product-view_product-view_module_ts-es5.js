(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_product-view_product-view_module_ts"], {
    /***/
    61687:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/product/product-view/product-view-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductViewPageRoutingModule": function ProductViewPageRoutingModule() {
          return (
            /* binding */
            _ProductViewPageRoutingModule
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


      var _product_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-view.page */
      72689);

      var routes = [{
        path: '',
        component: _product_view_page__WEBPACK_IMPORTED_MODULE_0__.ProductViewPage
      }];

      var _ProductViewPageRoutingModule = function ProductViewPageRoutingModule() {
        _classCallCheck(this, ProductViewPageRoutingModule);
      };

      _ProductViewPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProductViewPageRoutingModule);
      /***/
    },

    /***/
    72227:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/product/product-view/product-view.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductViewPageModule": function ProductViewPageModule() {
          return (
            /* binding */
            _ProductViewPageModule
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


      var _product_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-view-routing.module */
      61687);
      /* harmony import */


      var _product_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-view.page */
      72689);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _ProductViewPageModule = function ProductViewPageModule() {
        _classCallCheck(this, ProductViewPageModule);
      };

      _ProductViewPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _product_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductViewPageRoutingModule],
        declarations: [_product_view_page__WEBPACK_IMPORTED_MODULE_1__.ProductViewPage]
      })], _ProductViewPageModule);
      /***/
    },

    /***/
    72689:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/product/product-view/product-view.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductViewPage": function ProductViewPage() {
          return (
            /* binding */
            _ProductViewPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-view.page.html */
      60060);
      /* harmony import */


      var _product_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-view.page.scss */
      87834);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../modal/modal.page */
      58167);

      var _ProductViewPage = /*#__PURE__*/function () {
        function ProductViewPage(http, modalController, router, commonUtils, activatedRoute, toastController, authService) {
          _classCallCheck(this, ProductViewPage);

          this.http = http;
          this.modalController = modalController;
          this.router = router;
          this.commonUtils = commonUtils;
          this.activatedRoute = activatedRoute;
          this.toastController = toastController;
          this.authService = authService;
          this.showAmountdtl = false;
          this.productDetail = {};
          this.taxAmount = '';
          this.basicAmount = '';
          this.colourlist = [];
          this.designCustomizationFeatures = false;
          this.showHSNcode = false;
          this.productColors = []; // openRejectemodal end

          this.slideRightConfig = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true
          };
        }

        _createClass(ProductViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            var _this = this;

            this.productId = this.activatedRoute.snapshot.params.id;
            this.getProductdetails();
            $.getScript('assets/js/sticky-kit.js');
            $.getScript('assets/js/menu.js');
            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              // console.log('res>>', res);
              if (res.authority == 'ADMIN') {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    // console.log('menu>>', data);
                    // console.log('this.router.url>>', this.router.url);
                    var pageUrl = _this.router.url.split("/"); // console.log('pageUrl', pageUrl);


                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        if (item.modDetails.url == 'product-list') {
                          if (item.modPrivs.list == true) {
                            // console.log('-----Permission Granted-----');
                            _this.pagePermission = item; // console.log('this.pagePermission', this.pagePermission);

                            _this.api_url = 'user/viewAdmin/' + _this.productId;

                            _this.getProductdetails();

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
              } else if (res.authority == 'DESIGNER') {
                _this.api_url = 'user/viewAdmin/' + _this.productId;

                _this.getProductdetails();
              } // else  {
              //   this.router.navigateByUrl('/error');
              // }

            });
            /*Check permission status end*/
          }
        }, {
          key: "getProductdetails",
          value: function getProductdetails() {
            var _this2 = this;

            // console.log("response----",this.productDetail);
            this.productDataSubscribe = this.http.get(this.api_url).subscribe(function (response) {
              // console.log("response----",response);
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

              _this2.productDetail = response;

              if (response.productId == null) {
                _this2.router.navigateByUrl('/error');
              } // console.log("response----",this.productDetail);


              var discountAmount, taxAmount, amount;
              amount = parseInt((100 * (response === null || response === void 0 ? void 0 : response.mrp) / (100 + ((_b = (_a = response === null || response === void 0 ? void 0 : response.deal) === null || _a === void 0 ? void 0 : _a.taxAmount) === null || _b === void 0 ? void 0 : _b.taxValue))).toFixed(0));
              _this2.basicAmount = parseInt((100 * (response === null || response === void 0 ? void 0 : response.mrp) / (100 + ((_d = (_c = response === null || response === void 0 ? void 0 : response.deal) === null || _c === void 0 ? void 0 : _c.taxAmount) === null || _d === void 0 ? void 0 : _d.taxValue))).toFixed(0));
              discountAmount = parseInt((100 * ((_e = response === null || response === void 0 ? void 0 : response.deal) === null || _e === void 0 ? void 0 : _e.salePrice) / (100 + ((_g = (_f = response === null || response === void 0 ? void 0 : response.deal) === null || _f === void 0 ? void 0 : _f.taxAmount) === null || _g === void 0 ? void 0 : _g.taxValue))).toFixed(0));
              _this2.afterDiscount = parseInt((100 * ((_h = response === null || response === void 0 ? void 0 : response.deal) === null || _h === void 0 ? void 0 : _h.salePrice) / (100 + ((_k = (_j = response === null || response === void 0 ? void 0 : response.deal) === null || _j === void 0 ? void 0 : _j.taxAmount) === null || _k === void 0 ? void 0 : _k.taxValue))).toFixed(0));
              _this2.discount = (_l = response === null || response === void 0 ? void 0 : response.deal) === null || _l === void 0 ? void 0 : _l.dealValue; // if(response?.deal?.dealType == "Flat")
              // {
              //   this.discount = response?.deal?.dealValue;
              // }else if(response?.deal?.dealType == "Percentage")
              // {
              //   this.discount =parseInt(((response?.mrp * response?.deal?.dealValue) / 100).toFixed(0));          
              // }

              if (_this2.afterDiscount > _this2.basicAmount) {
                _this2.discount = _this2.afterDiscount - _this2.basicAmount;
              } else {
                _this2.discount = _this2.basicAmount - _this2.afterDiscount;
              }

              if (((_m = response === null || response === void 0 ? void 0 : response.deal) === null || _m === void 0 ? void 0 : _m.dealType) != 'None') {
                if (((_o = response === null || response === void 0 ? void 0 : response.deal) === null || _o === void 0 ? void 0 : _o.salePrice) < amount) {
                  _this2.taxAmount = discountAmount - ((_p = response === null || response === void 0 ? void 0 : response.deal) === null || _p === void 0 ? void 0 : _p.salePrice);
                } else {
                  _this2.taxAmount = ((_q = response === null || response === void 0 ? void 0 : response.deal) === null || _q === void 0 ? void 0 : _q.salePrice) - discountAmount;
                }
              } else {
                _this2.taxAmount = (response === null || response === void 0 ? void 0 : response.mrp) - amount;
              }

              _this2.getColorList();
            }, function (errRes) {
              // console.log("error handeller >>@@",errRes );
              if (errRes.status == 400) {
                _this2.router.navigateByUrl('/error');
              }
            });
          }
        }, {
          key: "getColorList",
          value: function getColorList() {
            var _this3 = this;

            this.getColorListSubscribe = this.http.get("adminMData/coloreList").subscribe(function (res) {
              _this3.colourlist = res;
              _this3.productColors = [];

              for (var index = 0; index < _this3.colourlist.length; index++) {
                if (_this3.productDetail.colour == _this3.colourlist[index].colorName) {
                  _this3.productColors.push(_this3.colourlist[index].colorValue);
                }
              } // console.log("color list.....",this.productColors);

            }, function (error) {});
          } //getColorList end
          // openRejectemodal start

        }, {
          key: "openRejectemodal",
          value: function openRejectemodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var profile_modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                        cssClass: 'mymodalClass small rejectemodal',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 2:
                      profile_modal = _context.sent;
                      // modal data back to Component
                      profile_modal.onDidDismiss().then(function (getdata) {
                        // console.log('getdata >>>>>>>>>>>', getdata);
                        if (getdata.data == 'submitClose') {}
                      });
                      _context.next = 6;
                      return profile_modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ProductViewPage;
      }();

      _ProductViewPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }];
      };

      _ProductViewPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-product-view',
        template: _raw_loader_product_view_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
        styles: [_product_view_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductViewPage);
      /***/
    },

    /***/
    87834:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/product/product-view/product-view.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".position-sticky {\n  top: 10px;\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  margin-bottom: 10px;\n}\n\n.lowVisibility {\n  opacity: 0.5;\n  cursor: not-allowed !important;\n}\n\n.lowVisibility mat-icon {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxTQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0FBRUoiLCJmaWxlIjoicHJvZHVjdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1zdGlja3lcclxue1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubG93VmlzaWJpbGl0eSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvd1Zpc2liaWxpdHkgbWF0LWljb24ge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    60060:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-view/product-view.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"add-designer-product\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>Product Preview\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a>\r\n                          </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Product \r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Product View\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-layout\">\r\n          <div class=\"form-wrapper\">\r\n            <div class=\"card-outer\">\r\n              <div class=\"card card-box\">\r\n                  <!-- section start -->\r\n                <section class=\"product_view pt-4 pb-4\">\r\n                  <div class=\"collection-wrapper \">\r\n                    <div class=\"container\">\r\n                      <div class=\"row sidebar\">\r\n                        <div class=\"col-lg-12 col-sm-12\">\r\n                          <div class=\"container-fluid\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6\">\r\n                                  <div class=\"img-section position-relative\">\r\n                                      <!-- <img [src]=\"productDetail?.image[0].large\" /> -->\r\n                                      <ng-template  class=\"col-12\" ngFor let-item [ngForOf]=\"productDetail?.images\">\r\n                                          <div class=\"mb-3 d-inline-block not-for-mobile\" >\r\n                                            <img class=\"\" src=\"{{item.large}}\" alt=\"\" class=\"img-fluid blur-up lazyload product_img_template\"/>\r\n                                          </div>\r\n                                        </ng-template>\r\n                                        <ngx-slick-carousel class=\"no-arrow \" #slickModal=\"slick-carousel\" [config]=\"slideRightConfig\">\r\n                                          <!-- <div ngxSlickItem  *ngFor=\"let product of productDetail\">\r\n                                            <img class=\"\" src=\"assets/images/fashion/product/10.jpg\" alt=\"\" class=\"img-fluid blur-up lazyload\"/>\r\n                                          </div> -->\r\n                                          <div ngxSlickItem *ngFor=\"let images of productDetail?.images\">\r\n                                            <img class=\"\" [src]=\"images.large\" alt=\"\" class=\"img-fluid blur-up lazyload\"/>\r\n                                          </div>\r\n                                        </ngx-slick-carousel>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6\">\r\n                                  <div class=\"product-view-card position-sticky\">\r\n                                      <div class=\"p-30 b-b-2\">\r\n                                          <div class=\"status-content\">\r\n                                              <div class=\"row align-item\">\r\n                                                  <div class=\"col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5\">\r\n                                                      <p class=\"d-flex\">Status: <span class=\"status\" [ngClass]=\"{'text-success':productDetail?.adminStatus == 'Approved'}\">{{productDetail?.adminStatus}}</span>&nbsp;<mat-icon *ngIf=\"productDetail?.adminStatus == 'Rejected'\" class=\"cursor-pointer text-black\"  (click)=\"openRejectemodal('message_modal', productDetail?.productStageDetails?.comment, '');\">chat</mat-icon></p>\r\n                                                  </div>\r\n                                                  <div class=\"col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5\">\r\n                                                      <p>Stock: <span>{{productDetail?.soh}}</span></p>\r\n                                                  </div>\r\n                                                 \r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2\">\r\n                                          <div class=\"MRP-content\">\r\n                                              <p>{{productDetail?.productDetails?.productName}}</p>\r\n                                              <h1 class=\"d-flex\">₹{{productDetail?.deal?.salePrice || productDetail?.deal?.salePrice == 0 ? productDetail?.deal?.salePrice : productDetail?.mrp}} <span *ngIf=\"productDetail?.deal?.salePrice || productDetail?.deal?.salePrice == 0\">₹{{productDetail?.mrp}}</span>&nbsp;<mat-icon title=\"HSN Details\" (click)=\"showAmountdtl=!showAmountdtl\" class=\"cursor-pointer price-info\">info</mat-icon></h1>\r\n                                              <div class=\"shopping customizationMessage mt-0 mb-1 p-0 text-black\" [ngClass]=\"{'showCustomization mt-1 p-1':showAmountdtl}\">\r\n                                                Basic Amount : ₹{{basicAmount ? basicAmount : '0'}} <br>\r\n                                                <span *ngIf=\"productDetail?.deal?.salePrice\">Discount: - ₹{{discount ? discount : '0'}} <br></span>\r\n                                                <span *ngIf=\"productDetail?.deal?.salePrice\">After Discount: ₹{{afterDiscount ? afterDiscount : '0'}}<br></span> \r\n                                                Tax Amount : + ₹{{taxAmount ? taxAmount : '0'}} &nbsp;\r\n                                            </div>\r\n                                              <div class=\"shopping d-flex\">\r\n                                                <span class=\"d-flex align-items-center\">HSN Code: {{productDetail?.deal?.taxAmount?.hsnCode}} &nbsp;<mat-icon title=\"HSN Details\" (click)=\"showHSNcode=!showHSNcode\" class=\"cursor-pointer\">info</mat-icon></span>\r\n                                              </div>\r\n                                              <div class=\"shopping customizationMessage mt-0 p-0 text-black\" [ngClass]=\"{'showCustomization mt-1 p-1':showHSNcode}\">\r\n                                                {{productDetail?.deal?.taxAmount?.description}}\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <!-- <div class=\"ptl-15 b-b-2\">\r\n                                          <div class=\"age-content\">\r\n                                              <div class=\"row\">\r\n                                                  <div class=\"col-md-6\">\r\n                                                      <div class=\"d-flex\">\r\n                                                          <div class=\"gender\">\r\n                                                              <p>Gender</p>\r\n                                                              <span>{{productDetail?.gender}}</span>\r\n                                                          </div>\r\n                                                          <div class=\"age\">\r\n                                                              <p>Age</p>\r\n                                                              <span>{{productDetail?.age?.min}} - {{productDetail?.age?.max}}</span>\r\n                                                          </div>\r\n                                                      </div>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div> -->\r\n                                      <div class=\"ptl-15 b-b-2\">\r\n                                          <div class=\"type-content\">\r\n                                              <div class=\"row\">\r\n                                                  <div class=\"col-md-6\">\r\n                                                      <div class=\"type\">\r\n                                                          <p>Type</p>\r\n                                                          <span>{{productDetail?.subCategoryName}}</span>\r\n                                                      </div>\r\n                                                  </div>\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2\">\r\n                                          <div class=\"size-content\">\r\n                                              <div class=\"size\">\r\n                                                  <p>Size</p>\r\n                                                  <label [for]=\"size\" [ngClass]=\"{'active':sizeactive == size}\" *ngFor=\"let size of productDetail?.sizes;let i = index;\" (click)=\"activeSize('size',size)\"><span>{{size == 'Free Size' ? 'F' : size}}</span></label>\r\n                                                  <!-- <input type=\"radio\" name=\"size\" id=\"XXL\" value=\"XXL\" />\r\n                                                  <label for=\"XXL\"><span>XXL</span></label>  -->\r\n                                                  <label *ngIf=\"productDetail?.withCustomization\"   matTooltip=\"Customization\"><span>C</span></label>\r\n                                                    \r\n                                                  <!-- <button *ngIf=\"productDetail?.withCustomization\" class=\"custom-button\" mat-raised-button matTooltip=\"Customization\">C</button> -->\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2\">\r\n                                          <div class=\"color-content\">\r\n                                              <div class=\"color\">\r\n                                                  <span>Colour</span>\r\n                                                  <p>{{productDetail?.colour}}</p>\r\n                                                  <!-- <div > -->\r\n                                                      <!-- <input type=\"radio\" [id]=\"color.colour\" [value]=\"color.colour\"   /> -->\r\n                                                      <!-- <label [for]=\"productDetail?.colour\"  class=\"d-flex\" [ngClass]=\"{'active':coloractive == productDetail?.colour}\"><span [style.background]='productDetail.colour' (click)=\"activeSize('color',productDetail?.colour)\"></span></label> -->\r\n                                                      <!-- <label [for]=\"color\"  *ngFor=\"let color of productColors;let i = index;\" class=\"d-flex\" ><span [style.background]='color'></span></label> -->\r\n                                                  <!-- </div> -->\r\n                                              </div>\r\n                                          </div>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2\">\r\n                                          <div class=\"shopping-content\">\r\n                                              <!-- <div class=\"shopping\">\r\n                                                  <img src=\"assets/images/cart.png\" /><span>Free shipping</span>\r\n                                              </div> -->\r\n                                              <div class=\"shopping\">\r\n                                                <img src=\"assets/images/cod.png\" alt=\"\">\r\n                                                <span>Ships in {{productDetail?.shipmentTime}}&nbsp;days.</span>\r\n                                              </div>\r\n                                              <!-- <div class=\"shopping\" *ngIf=\"productDetail?.cod\">\r\n                                                  <img src=\"assets/images/cod.png\" /><span>Cash on delivery</span>\r\n                                              </div> -->\r\n                                              <div [ngClass]=\"{'lowVisibility': !productDetail?.returnAcceptable}\" class=\"shopping\">\r\n                                                  <img src=\"assets/images/easy-return.png\" /><span>Easy return available.</span>\r\n                                              </div>\r\n                                              <div class=\"shopping\">\r\n                                                  <img src=\"assets/images/cart2.png\" /><span>Free Shipping only in india</span>\r\n                                              </div>\r\n                                              <div class=\"shopping\" [ngClass]=\"{'lowVisibility': !productDetail?.withGiftWrap}\">\r\n                                                  <img src=\"assets/images/giftwrap.png\" /><span>GiftWrap available.</span>\r\n                                              </div>\r\n                                              <div class=\"shopping\" [ngClass]=\"{'lowVisibility': !productDetail?.cancelAcceptable}\">\r\n                                                  <img src=\"assets/images/cancelproduct.jpg\" /><span>Cancellation  available</span>\r\n                                              </div>\r\n                                              <div class=\"shopping\" [ngClass]=\"{'lowVisibility': !productDetail?.withCustomization}\">\r\n                                                  <img src=\"assets/images/pencil.png\" /><span>Size Customization available.</span>\r\n                                              </div>\r\n                                              <div class=\"shopping d-flex\" [ngClass]=\"{'lowVisibility': !productDetail?.withDesignCustomization}\">\r\n                                                  <img src=\"assets/images/pencil.png\" /><span class=\"d-flex align-items-center\">Design Customization available.&nbsp;<mat-icon (click)=\"designCustomizationFeatures=!designCustomizationFeatures\" class=\"cursor-pointer\">chat</mat-icon></span>\r\n                                              </div>\r\n                                              <div class=\"shopping customizationMessage mt-0 p-0 text-black\" style=\"margin-left: 2.5em;\" [ngClass]=\"{'showCustomization mt-1 p-1':designCustomizationFeatures}\">\r\n                                                {{productDetail?.designCustomizationFeatures}}\r\n                                              </div>\r\n                                              <p class=\"p-text\">Note: Custom made orders are not returnable.</p>\r\n                                          </div>\r\n                                          <h1 class=\"specifications-head\">Specifications</h1>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                          <h1 class=\"product-head\">Product Description</h1>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                          <p class=\"desc-text\">{{productDetail?.productDetails?.productDescription}}</p>\r\n                                          <h1 class=\"fit-head\">Fit</h1>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                          <p class=\"desc-text\">{{productDetail?.productDetails?.fittingInformation}}</p>\r\n                                          <h1 class=\"style-head\">Occassion </h1>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                          <p class=\"style-text\">{{productDetail?.productDetails?.occation}}</p>\r\n                                          <h1 class=\"composition-head\">Composition</h1>\r\n                                      </div>\r\n                                      <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                          <p class=\"composition-text\">{{productDetail?.productDetails?.composition}}</p>\r\n                                          <h1 class=\"washing-head\">Washing Instruction</h1>\r\n                                      </div>\r\n                                      <!-- <div class=\"ptl-15 b-b-0 b-b-2 p-b-5\">\r\n                                          <p class=\"washing-text\">{{productDetail?.productDetails?.washingInformation}}</p>\r\n                                      </div> -->\r\n                                      <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                        <p class=\"desc-text\">{{productDetail?.productDetails?.washingInformation}}</p>\r\n                                        <h1 *ngIf=\"productDetail?.giftWrapAmount\" class=\"style-head\">Giftwrap Amount </h1>\r\n                                    </div>\r\n                                    <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                        <p *ngIf=\"productDetail?.giftWrapAmount\" class=\"style-text\">₹ {{productDetail?.giftWrapAmount}}</p>\r\n                                        <h1 class=\"composition-head\">Product Weight</h1>\r\n                                    </div>\r\n                                    <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                        <p class=\"style-text\">{{productDetail?.productWeight}}{{productDetail?.weightUnit}}</p>\r\n                                        <h1 class=\"composition-head\">Purchase Quantity</h1>\r\n                                    </div>\r\n                                    <div class=\"ptl-15 b-b-2 p-b-5\">\r\n                                      <p class=\"style-text\">Minimum : {{productDetail?.purchaseMinQuantity}} &nbsp;&nbsp;Maximum : {{productDetail?.purchaseMaxQuantity}}</p>\r\n                                      <!-- <h1 class=\"composition-head\">Purchase Quantity</h1> -->\r\n                                  </div>\r\n                                      <div class=\"share-content\">\r\n                                          <span class=\"share-title\">Share it : </span>\r\n                                          <span class=\"share-icon\"><img src=\"assets/images/facebook.png\"></span>\r\n                                          <span class=\"share-icon\"><img src=\"assets/images/instagram.png\"></span>\r\n                                          <span class=\"share-icon\"><img src=\"assets/images/twitter.png\"></span>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </section>\r\n                <!-- Section ends -->\r\n\r\n                <!-- product-tab starts -->\r\n                <!-- <section class=\" m-0 designer p-0\" >\r\n                  <div class=\"container pt-2 mt-3\" >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                        <p class=\"specifications-title  text-center mt-3\">Description</p>\r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                        <div class=\"p-3\">\r\n                          <div class=\"single-product-tables mt-3 justify-content\">\r\n                            <p class=\"info_text\">\r\n                            {{productDetail.productDescription}}\r\n                            </p>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                  </div>\r\n                </section> -->\r\n                <!-- product-tab ends -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_product_product-view_product-view_module_ts-es5.js.map