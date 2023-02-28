(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_order-list_order-list_module_ts"], {
    /***/
    52414:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-list-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderListPageRoutingModule": function OrderListPageRoutingModule() {
          return (
            /* binding */
            _OrderListPageRoutingModule
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


      var _order_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-list.page */
      5659);

      var routes = [{
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_0__.OrderListPage
      }];

      var _OrderListPageRoutingModule = function OrderListPageRoutingModule() {
        _classCallCheck(this, OrderListPageRoutingModule);
      };

      _OrderListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OrderListPageRoutingModule);
      /***/
    },

    /***/
    21401:
    /*!***************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-list.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderListPageModule": function OrderListPageModule() {
          return (
            /* binding */
            _OrderListPageModule
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


      var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-list-routing.module */
      52414);
      /* harmony import */


      var _order_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-list.page */
      5659);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _OrderListPageModule = function OrderListPageModule() {
        _classCallCheck(this, OrderListPageModule);
      };

      _OrderListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderListPageRoutingModule],
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_1__.OrderListPage]
      })], _OrderListPageModule);
      /***/
    },

    /***/
    5659:
    /*!*************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-list.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderListPage": function OrderListPage() {
          return (
            /* binding */
            _OrderListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./order-list.page.html */
      9957);
      /* harmony import */


      var _order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-list.page.scss */
      63246);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../modal/modal.page */
      58167);

      var _OrderListPage = /*#__PURE__*/function () {
        function OrderListPage(http, toastController, modalController, alertController, commonUtils, authService, router) {
          _classCallCheck(this, OrderListPage);

          this.http = http;
          this.toastController = toastController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.commonUtils = commonUtils;
          this.authService = authService;
          this.router = router;
          this.statustype = 'New';
          this.tableTitle = 'New';
          this.order_countData = {};
          this.tableListData = [];
          this.itemcheckClick = false;
          this.checkedList = [];
          this.tableHeaderData = [{
            column_name: "orderId",
            display_name: "Order Id",
            sortingButtonName: ""
          }, {
            column_name: "invoiceId",
            display_name: "invoice Id",
            sortingButtonName: ""
          }, {
            column_name: "displayName",
            display_name: "display Name",
            sortingButtonName: ""
          }, {
            column_name: "createdOn",
            display_name: "Order Date",
            sortingButtonName: ""
          }, {
            column_name: "mrp",
            display_name: "MRP",
            sortingButtonName: ""
          }, {
            column_name: "discount",
            display_name: "Discount",
            sortingButtonName: ""
          }, {
            column_name: "salesPrice",
            display_name: "sales Price",
            sortingButtonName: ""
          }, {
            column_name: "giftWrapAmount",
            display_name: "giftWrap Amount",
            sortingButtonName: ""
          }, {
            column_name: "paymentMode",
            display_name: "Payment Mode",
            sortingButtonName: ""
          }, {
            column_name: "razorpay_payment_id",
            display_name: "Razorpay Payment id",
            sortingButtonName: ""
          }];
          this.isListLoading = false;
          this.sortColumnName = "";
          this.sortOrderName = "";
          this.deleteLoading = false;
          this.restoreLoading = false; // datatype end

          /*----------------Table list data start----------------*/
          // Display records start

          this.displayRecord = 10;
          this.displayRecords = [{
            id: '1',
            displayValue: 10
          }, {
            id: '2',
            displayValue: 25
          }, {
            id: '3',
            displayValue: 50
          }, {
            id: '4',
            displayValue: 100
          } // { id : '5', displayValue: '0'}
          ]; // Sorting end
          // Search start

          this.searchTerm = "";
        } // Variables end


        _createClass(OrderListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.commonFunction();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            var _this = this;

            this.allselectModel = false;
            this.checkedList = [];
            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              // console.log("res>>", res);
              if (res.authority == "ADMIN") {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    // console.log("menu>>", data);
                    // console.log("this.router.url>>", this.router.url);
                    var pageUrl = _this.router.url.split("/"); // console.log("pageUrl", pageUrl);


                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        if (item.modDetails.url == pageUrl[1]) {
                          if (item.modPrivs.list == true) {
                            // console.log("-----Permission Granted-----");
                            _this.pagePermission = item; // console.log("this.pagePermission", this.pagePermission);

                            _this.listing_url = "userOrder/skuList";

                            _this.onRefresh(); // delete api


                            break;
                          } else {
                            // console.log("-------No Permission--------");
                            _this.router.navigateByUrl("/error");
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
                _this.router.navigateByUrl("/error");
              }
            });
            /*Check permission status end*/
          } // datatype start

        }, {
          key: "datatype",
          value: function datatype(identifier) {
            // console.log(identifier);
            this.statustype = identifier;
            this.tableTitle = identifier;
            this.onRefresh(); //  this.onListDate(this.statustype,this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          }
        }, {
          key: "displayRecordChange",
          value: function displayRecordChange(_record) {
            // console.log("_record", _record);
            this.displayRecord = _record;
            this.pageNo = 0;
            this.onListDate(this.statustype, this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Display records end
          // List data start

        }, {
          key: "onListDate",
          value: function onListDate(status, _listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
            var _this2 = this;

            this.isListLoading = true;
            var api = _listUrl + '?orderItemStatus=' + status + '&page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm;
            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              _this2.isListLoading = false; // console.log("res data......", res);

              _this2.tableData = res;
              var count = [];
              count = res === null || res === void 0 ? void 0 : res.data;

              for (var index = 0; index < count.length; index++) {
                _this2.tableData.data[index].createdOn = moment__WEBPACK_IMPORTED_MODULE_2__(res === null || res === void 0 ? void 0 : res.data[index].createdOn, 'DD/MM/YYYY hh:mm:ss').format('DD-MM-YYYY');
              }

              _this2.tableListData = res.data;
              _this2.order_countData = {
                New: res.New,
                Orders: res.Orders,
                Cancelation: res.Cancelation,
                Active: res.Active,
                Delivered: res.Delivered,
                Packed: res.Packed,
                returnRefund: res.returnRefund,
                Shipped: res.Shipped,
                Cancelled: res.Cancelled,
                returnRequest: res.returnRequest,
                Rejected: res.rejected,
                requestForCancelation: res.requestForCancelation
              }; // console.log("Order Count Data....",this.order_countData);
              //---------  check item show start ----------

              if (_this2.tableListData && _this2.checkedList) {
                for (var i = 0; i < _this2.tableListData.length; i++) {
                  for (var j = 0; j < _this2.checkedList.length; j++) {
                    if (_this2.checkedList[j].id == _this2.tableListData[i].id) {
                      _this2.tableListData[i].isSelected = true;
                    }
                  }
                }
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this2.isListLoading = false;
            });
          } // List data end
          // Pagination start

        }, {
          key: "setPage",
          value: function setPage(page) {
            // console.log("page", page);
            // console.log("page");
            this.pageNo = page;
            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Pagination end
          // Sorting start

        }, {
          key: "isSortTableHeader",
          value: function isSortTableHeader(_tableHeaderData, _headerItem) {
            // console.log("_tableHeaderData", _tableHeaderData);
            // console.log("_headerItem", _headerItem);
            // all field reset first
            _tableHeaderData.forEach(function (val) {
              val.sortingButtonName = "";
            });

            _headerItem.orederShow = !_headerItem.orederShow;

            if (_headerItem.orederShow) {
              _headerItem.sortingButtonName = "ASC";
            } else {
              _headerItem.sortingButtonName = "DESC";
            }

            this.sortColumnName = _headerItem.column_name;
            this.sortOrderName = _headerItem.sortingButtonName; // console.log("this.sortColumnName", this.sortColumnName);
            // console.log("this.sortOrderName", this.sortOrderName);
            // console.log("_tableHeaderData>>", _tableHeaderData);

            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          }
        }, {
          key: "searchList",
          value: function searchList(event) {
            this.searchTerm = event.target.value; // console.log("this.searchTerm", this.searchTerm);

            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Search end
          // Referesh start

        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.pageNo = 0;
            this.sortColumnName = "id";
            this.sortOrderName = "DESC";
            this.searchTerm = "";
            this.tableValueType = "0"; // table data call

            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Referesh end

          /*----------------Table list data end----------------*/
          // exportDoc start

        }, {
          key: "openorderExportModal",
          value: function openorderExportModal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var orderCommentmodal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
                        cssClass: 'mymodalClass small profilemodal',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 2:
                      orderCommentmodal = _context.sent;
                      // modal data back to Component
                      orderCommentmodal.onDidDismiss().then(function (getdata) {
                        // console.log("getdata",getdata);
                        _this3.onRefresh();
                      });
                      _context.next = 6;
                      return orderCommentmodal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // exportDoc end
          // ----------- destroy unsubscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.tableListSubscribe !== undefined) {
              this.tableListSubscribe.unsubscribe();
            }

            if (this.permissionDataSubscribe !== undefined) {
              this.permissionDataSubscribe.unsubscribe();
            }
          }
        }]);

        return OrderListPage;
      }();

      _OrderListPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }];
      };

      _OrderListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-order-list",
        template: _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OrderListPage);
      /***/
    },

    /***/
    63246:
    /*!***************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-list.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1saXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    9957:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-list/order-list.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"order-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3 *ngIf=\"tableTitle != 'returnRequest' && tableTitle !='returnRefund'\">{{tableTitle}} Order List</h3>\r\n                          <h3 *ngIf=\"tableTitle == 'returnRequest' || tableTitle =='returnRefund'\">{{tableTitle =='returnRefund' ? 'Return/Refund' : 'Return Request'}} Order List</h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          Order Management\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Order List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"note-section\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                <h3 class=\"card-row\">Orders</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-primary card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('New')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon> new_releases </mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">New</p>\r\n                        <p *ngIf=\"order_countData?.New\"><b>{{order_countData?.New}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.New\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-Purple card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Orders')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>add_shopping_cart</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Orders</p>\r\n                        <p *ngIf=\"order_countData?.Orders\"><b>{{order_countData?.Orders}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Orders\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-info card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Packed')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>store</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Packed</p>\r\n                        <p *ngIf=\"order_countData?.Packed\"><b>{{order_countData?.Packed}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Packed\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-warning card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Shipped')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon> local_shipping</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Shipped</p>\r\n                        <p *ngIf=\"order_countData?.Shipped\"><b>{{order_countData?.Shipped}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Shipped\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-success card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Delivered')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_turned_in</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Delivered</p>\r\n                        <p *ngIf=\"order_countData?.Delivered\"><b>{{order_countData?.Delivered}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Delivered\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                <h3 class=\"card-row\">Approvals</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <!-- Return Request -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('returnRequest')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return Request</p>\r\n                        <p *ngIf=\"order_countData?.returnRequest\"><b>{{order_countData?.returnRequest}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.returnRequest\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Cancel Request -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Request for cancelation')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>cancel_presentation</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Cancel Request</p>\r\n                        <p *ngIf=\"order_countData?.requestForCancelation\"><b>{{order_countData?.requestForCancelation}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.requestForCancelation\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Return Rejected -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Return rejected by admin')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>sync_disabled</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return Request Rejected</p>\r\n                        <p ><b>{{tabeData?.returnRejectedByAdmin ? tabeData?.returnRejectedByAdmin :'0'}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- return request approve -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Return request approved')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>done</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return request approved</p>\r\n                        <p *ngIf=\"tableData?.returnRequestApproved\"><b>{{tableData?.returnRequestApproved}}</b> Products</p>\r\n                        <p *ngIf=\"!tableData?.returnRequestApproved\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n               <!-- Canceled -->\r\n               <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('cancelled')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>clear</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Canceled</p>\r\n                        <p *ngIf=\"order_countData?.Cancelled\"><b>{{order_countData?.Cancelled}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Cancelled\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                <h3 class=\"card-row\">Return Process</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>              \r\n              <!-- Product Shipped by user -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Product Shipped by user')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Product Shipped by user</p>\r\n                        <p *ngIf=\"tableData?.productShippedByUser\"><b>{{tableData?.productShippedByUser}}</b> Products</p>\r\n                        <p *ngIf=\"!tableData?.productShippedByUser\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Product received from user -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Product received from user')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>clear</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Product received from user</p>\r\n                        <p *ngIf=\"tableData?.productReceivedFromUser\"><b>{{tableData?.productReceivedFromUser}}</b> Products</p>\r\n                        <p *ngIf=\"!tableData?.productReceivedFromUser\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Return/Refund -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('returnRefund')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return/Refund</p>\r\n                        <p ><b>{{order_countData?.returnRefund ? order_countData?.returnRefund :'0'}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Return/Refund Rejected -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Rejected')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return/Refund Rejected</p>\r\n                        <p ><b>{{order_countData?.Rejected ? order_countData?.Rejected :'0'}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n            {{tableTitle}}  order List\r\n            </div>\r\n            <div class=\"card-header-action\">\r\n              <ion-button class=\"custom-btn\" (click)=\"openorderExportModal('orderExportModal','','')\">\r\n                <mat-icon>file_upload</mat-icon>Export Doc\r\n              </ion-button>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                  <ion-item class=\"record\">\r\n                    <span class=\"text-black mr-1\">Records: </span>\r\n                    <mat-form-field  class=\"m-0\">\r\n                      <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                        <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                          <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                          <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n             </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th>                            \r\n                            <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                {{th.display_name}}\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"\">\r\n                              <div class=\"justify-content-center\">\r\n                                Order Status\r\n                              </div>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>\r\n                          <a [routerLink]=\"['/', 'order-products-list', item?.orderId,item?.productId]\" class=\"text-decoration-none\">{{item?.orderId}}</a>\r\n                        </td>\r\n                        <td>\r\n                          {{item?.invoiceId ? item?.invoiceId : 'N/A'}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.displayName}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.createdOn}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.mrp}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.discount ? item?.discount : '0'}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.salesPrice ? item?.salesPrice : 'N/A'}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.giftWrapAmount ? item?.giftWrapAmount : '0'}}\r\n                        </td>\r\n                        <td>\r\n                           {{item?.paymentData?.paymentMode ? item?.paymentData?.paymentMode : 'N/A'}}\r\n                        </td>\r\n                        <!-- <td>\r\n                          {{item?.paymentData?.paymentDetails?.razorpay_order_id}}\r\n                        </td> -->\r\n                        <td>\r\n                          {{item?.paymentData?.paymentDetails?.razorpay_payment_id ? item?.paymentData?.paymentDetails?.razorpay_payment_id : 'N/A'}}\r\n                        </td>\r\n                        <td class=\"ion-text-center\">\r\n                          <!-- <span class=\"status\" [ngClass]=\"{'success': item?.deliveryStatus == 'dispatch'}\" *ngIf=\"item?.deliveryStatus != 'cancel' && item?.paymentData && item?.paymentData?.paymentStatus != 'FALLED'\">\r\n                            {{item?.deliveryStatus}}\r\n                          </span>\r\n                          <span class=\"status success\" *ngIf=\"!item?.paymentData || item?.paymentData?.paymentStatus == 'FALLED'\">\r\n                            Order Not Conformed\r\n                          </span> -->\r\n                          <!-- <span class=\"status danger\"  *ngIf=\"item.deliveryStatus == 'cancel'\">\r\n                            {{item?.deliveryStatus}}\r\n                          </span>  -->\r\n                          <span class=\"status\" *ngIf=\"item?.orderItemStatus != 'returnRefund' && item?.orderItemStatus != 'Rejected' && item?.paymentData\" [ngClass]=\"{'success': item?.orderItemStatus == 'Delivered' ,'danger': item?.orderItemStatus == 'cancelled' || item?.orderItemStatus == 'Request for cancelation', 'warning': item?.orderItemStatus == 'New' || item?.orderItemStatus == 'Return request approved' || item?.orderItemStatus == 'Product received from user' || item?.orderItemStatus == 'Product shipped by user' || item?.orderItemStatus == 'Orders' || item?.orderItemStatus == 'Packed' || item?.orderItemStatus == 'Shipped' || item?.orderItemStatus == 'returnRequest' }\">\r\n                            {{item?.orderItemStatus == 'returnRequest' ? 'Return Request' : item?.orderItemStatus}}\r\n                          </span>\r\n                          <span class=\"status success\" *ngIf=\"item?.orderItemStatus == 'returnRefund' && item?.paymentData\">\r\n                            Return/Refund\r\n                          </span>\r\n                          <span class=\"status warning\" *ngIf=\"item?.orderItemStatus == 'Rejected' && item?.paymentData\">\r\n                            Return Rejected\r\n                          </span>\r\n                          <span class=\"status warning\" *ngIf=\"!item?.paymentData\">\r\n                            Order Not Confirmed\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_product_order-list_order-list_module_ts-es5.js.map