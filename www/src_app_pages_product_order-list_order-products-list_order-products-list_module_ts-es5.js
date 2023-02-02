(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_order-list_order-products-list_order-products-list_module_ts"], {
    /***/
    6329:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-products-list/order-products-list-routing.module.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderProductsListPageRoutingModule": function OrderProductsListPageRoutingModule() {
          return (
            /* binding */
            _OrderProductsListPageRoutingModule
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


      var _order_products_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-products-list.page */
      72103);

      var routes = [{
        path: '',
        component: _order_products_list_page__WEBPACK_IMPORTED_MODULE_0__.OrderProductsListPage
      }];

      var _OrderProductsListPageRoutingModule = function OrderProductsListPageRoutingModule() {
        _classCallCheck(this, OrderProductsListPageRoutingModule);
      };

      _OrderProductsListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OrderProductsListPageRoutingModule);
      /***/
    },

    /***/
    13749:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-products-list/order-products-list.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderProductsListPageModule": function OrderProductsListPageModule() {
          return (
            /* binding */
            _OrderProductsListPageModule
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


      var _order_products_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-products-list-routing.module */
      6329);
      /* harmony import */


      var _order_products_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-products-list.page */
      72103);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _OrderProductsListPageModule = function OrderProductsListPageModule() {
        _classCallCheck(this, OrderProductsListPageModule);
      };

      _OrderProductsListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _order_products_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderProductsListPageRoutingModule],
        declarations: [_order_products_list_page__WEBPACK_IMPORTED_MODULE_1__.OrderProductsListPage]
      })], _OrderProductsListPageModule);
      /***/
    },

    /***/
    72103:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-products-list/order-products-list.page.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderProductsListPage": function OrderProductsListPage() {
          return (
            /* binding */
            _OrderProductsListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_order_products_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./order-products-list.page.html */
      70134);
      /* harmony import */


      var _order_products_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-products-list.page.scss */
      4168);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/pages/modal/modal.page */
      58167);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _OrderProductsListPage = /*#__PURE__*/function () {
        function OrderProductsListPage(http, activatedRoute, toastController, modalController, alertController, commonUtils, authService, router) {
          _classCallCheck(this, OrderProductsListPage);

          this.http = http;
          this.activatedRoute = activatedRoute;
          this.toastController = toastController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.commonUtils = commonUtils;
          this.authService = authService;
          this.router = router;
          this.model = {};
          this.showreturnRequesttmsg = false;
          this.showRecivedtmsg = false;
          this.showreturnRefundtmsg = false;
          this.showcancelFromUsertmsg = false;
          this.showCancelRequestmsg = false;
          this.showCanceledtmsg = false;
          this.showreturnRefundmsg = false;
          this.showreturnRequestApprove = false;
          this.showCustomization = false;
          this.showGiftwrap = false;
          this.trackingDetailsX = {};
          this.tableListData = [];
          this.itemcheckClick = false;
          this.checkedList = [];
          this.tableHeaderData = [{
            column_name: "orderId",
            display_name: "Order Id",
            sortingButtonName: ""
          }, {
            column_name: "productName",
            display_name: "Product Name",
            sortingButtonName: ""
          }, {
            column_name: "colour",
            display_name: "Colour",
            sortingButtonName: ""
          }, {
            column_name: "mrp",
            display_name: "MRP",
            sortingButtonName: ""
          }, {
            column_name: "salesPrice",
            display_name: "Sales Price",
            sortingButtonName: ""
          }, {
            column_name: "taxAmount",
            display_name: "Tax Amount",
            sortingButtonName: ""
          }, {
            column_name: "units",
            display_name: "Units",
            sortingButtonName: ""
          }, {
            column_name: "size",
            display_name: "Size",
            sortingButtonName: ""
          }, {
            column_name: "taxType",
            display_name: "Tax Type",
            sortingButtonName: ""
          }];
          this.isListLoading = false;
          this.sortColumnName = "";
          this.sortOrderName = "";
          this.deleteLoading = false;
          this.restoreLoading = false;
          this.packed_done = false;
          this.delivered_done = false;
          this.shipped_done = false;
          this.orders_done = false;
          this.progressbar_1 = false;
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
          ];
          this.cancelRequestDetailsrejectionTime = '';
          this.cancelRequestDetailscancellationTime = ''; // Sorting end
          // Search start

          this.searchTerm = "";
        } // Variables end


        _createClass(OrderProductsListPage, [{
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

            this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('orderId');
            this.parms_action_productId = this.activatedRoute.snapshot.paramMap.get('productId');
            this.allselectModel = false;
            this.checkedList = [];
            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              console.log("res>>", res);

              if (res.authority == "ADMIN") {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    console.log("menu>>", data);
                    console.log("this.router.url>>", _this.router.url);

                    var pageUrl = _this.router.url.split("/");

                    console.log("pageUrl", pageUrl);

                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        if (item.modDetails.url == 'order-list') {
                          if (item.modPrivs.list == true) {
                            console.log("-----Permission Granted-----");
                            _this.pagePermission = item;
                            console.log("this.pagePermission", _this.pagePermission); // this.listing_url = "userOrder/list";

                            _this.listing_url = "userOrder/getOrder/" + _this.parms_action_id;

                            _this.onRefresh(); // delete api


                            break;
                          } else {
                            console.log("-------No Permission--------");

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
            // this.onRefresh();
          }
        }, {
          key: "displayRecordChange",
          value: function displayRecordChange(_record) {
            console.log("_record", _record);
            this.displayRecord = _record;
            this.pageNo = 0;
            this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // List data start

        }, {
          key: "onListDate",
          value: function onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
            var _this2 = this;

            this.isListLoading = true;
            var currentDate = Date.now();
            this.currentDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD hh:mm:ss');
            var api = _listUrl;
            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;

              _this2.isListLoading = false;
              console.log("res", res);

              for (var i = 0; i < res.OrderSKUDetails.length; i++) {
                // console.log("product Id....",this.orderItem.OrderSKUDetails[i].productId);
                _this2.paymentData = res.paymentData;

                if (_this2.parms_action_productId == res.OrderSKUDetails[i].productId) {
                  _this2.tableData = res.OrderSKUDetails[i];
                  _this2.model.returnAcceptable = (_a = res.OrderSKUDetails[i]) === null || _a === void 0 ? void 0 : _a.returnAcceptable;
                  _this2.tableData.orderDate = moment__WEBPACK_IMPORTED_MODULE_2__((_b = res === null || res === void 0 ? void 0 : res.OrderSKUDetails[i]) === null || _b === void 0 ? void 0 : _b.createdOn, "DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
                  _this2.trackingDetailsX = res.OrderSKUDetails[i].orderStatusDetails;

                  if (_this2.trackingDetailsX) {
                    if ((_c = _this2.trackingDetailsX) === null || _c === void 0 ? void 0 : _c.cancelOrderDetails) {
                      _this2.cancelOrderDetailsTime = moment__WEBPACK_IMPORTED_MODULE_2__((_e = (_d = _this2.trackingDetailsX) === null || _d === void 0 ? void 0 : _d.cancelOrderDetails) === null || _e === void 0 ? void 0 : _e.cancelationTime, "DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_g = (_f = _this2.trackingDetailsX) === null || _f === void 0 ? void 0 : _f.cancelRequestDetails) === null || _g === void 0 ? void 0 : _g.cancellationTime) {
                      _this2.cancelRequestDetailscancellationTime = moment__WEBPACK_IMPORTED_MODULE_2__((_j = (_h = _this2.trackingDetailsX) === null || _h === void 0 ? void 0 : _h.cancelRequestDetails) === null || _j === void 0 ? void 0 : _j.cancellationTime, "DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_l = (_k = _this2.trackingDetailsX) === null || _k === void 0 ? void 0 : _k.cancelRequestDetails) === null || _l === void 0 ? void 0 : _l.rejectionTime) {
                      _this2.cancelRequestDetailsrejectionTime = moment__WEBPACK_IMPORTED_MODULE_2__((_o = (_m = _this2.trackingDetailsX) === null || _m === void 0 ? void 0 : _m.cancelRequestDetails) === null || _o === void 0 ? void 0 : _o.rejectionTime, "DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_p = _this2.trackingDetailsX) === null || _p === void 0 ? void 0 : _p.returnFromUser) {
                      _this2.returnFromUserTime = moment__WEBPACK_IMPORTED_MODULE_2__((_r = (_q = _this2.trackingDetailsX) === null || _q === void 0 ? void 0 : _q.returnFromUser) === null || _r === void 0 ? void 0 : _r.dateTime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_s = _this2.trackingDetailsX) === null || _s === void 0 ? void 0 : _s.returnFromAdmin) {
                      _this2.returnFromAdminTime = moment__WEBPACK_IMPORTED_MODULE_2__((_u = (_t = _this2.trackingDetailsX) === null || _t === void 0 ? void 0 : _t.returnFromAdmin) === null || _u === void 0 ? void 0 : _u.dateTime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_v = _this2.trackingDetailsX) === null || _v === void 0 ? void 0 : _v.cancelFromUser) {
                      _this2.cancelFromUserTime = moment__WEBPACK_IMPORTED_MODULE_2__((_x = (_w = _this2.trackingDetailsX) === null || _w === void 0 ? void 0 : _w.cancelFromUser) === null || _x === void 0 ? void 0 : _x.dateTime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_y = _this2.trackingDetailsX) === null || _y === void 0 ? void 0 : _y.designerReceivedProduct) {
                      _this2.designerReceivedProductTime = moment__WEBPACK_IMPORTED_MODULE_2__((_0 = (_z = _this2.trackingDetailsX) === null || _z === void 0 ? void 0 : _z.designerReceivedProduct) === null || _0 === void 0 ? void 0 : _0.dateTime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_1 = _this2.trackingDetailsX) === null || _1 === void 0 ? void 0 : _1.forceReturnOnDTO) {
                      _this2.forceReturnOnDTOTime = moment__WEBPACK_IMPORTED_MODULE_2__((_3 = (_2 = _this2.trackingDetailsX) === null || _2 === void 0 ? void 0 : _2.forceReturnOnDTO) === null || _3 === void 0 ? void 0 : _3.dateTime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
                    }

                    if ((_4 = _this2.trackingDetailsX) === null || _4 === void 0 ? void 0 : _4.returnRequestApprove) {
                      _this2.returnRequestApproveTime = moment__WEBPACK_IMPORTED_MODULE_2__((_6 = (_5 = _this2.trackingDetailsX) === null || _5 === void 0 ? void 0 : _5.returnRequestApprove) === null || _6 === void 0 ? void 0 : _6.dateTime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
                    }
                  }

                  console.log("table back data.....", _this2.tableData);

                  if ((_9 = (_8 = (_7 = _this2.tableData) === null || _7 === void 0 ? void 0 : _7.orderStatusDetails) === null || _8 === void 0 ? void 0 : _8.deliveryDetails) === null || _9 === void 0 ? void 0 : _9.deliveredDate) {
                    _this2.tableData.orderStatusDetails.deliveryDetails.deliveredDate = moment__WEBPACK_IMPORTED_MODULE_2__((_12 = (_11 = (_10 = _this2.tableData) === null || _10 === void 0 ? void 0 : _10.orderStatusDetails) === null || _11 === void 0 ? void 0 : _11.deliveryDetails) === null || _12 === void 0 ? void 0 : _12.deliveredDate, 'YYYY-MM-DD').format('DD/MM/YYYY');
                  }

                  console.log("table back data.....", _this2.tableData);
                  var shippingDate = (_13 = _this2.tableData) === null || _13 === void 0 ? void 0 : _13.shippingDate.split(" ");
                  _this2.shippingDate = shippingDate[0];
                }
              } // this.tableData = res;


              console.log("table back data.....", _this2.tableData);
              _this2.bilingData = res.billingAddress;
              _this2.tableListData = res;
              console.log("this.tableListData....", res.billingAddress); // this.url = environment.apiUrl+"/"+"userOrder/getOrderByInvoiceId/"+res.invoiceId;

              _this2.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl + "/userOrder/getOrderSummary/" + _this2.tableData.orderId;
              _this2.invoiceId = res.invoiceId;
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this2.isListLoading = false;
            });
          } // List data end
          // Pagination start

        }, {
          key: "setPage",
          value: function setPage(page) {
            console.log("page", page);
            console.log("page");
            this.pageNo = page;
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Pagination end
          // Sorting start

        }, {
          key: "isSortTableHeader",
          value: function isSortTableHeader(_tableHeaderData, _headerItem) {
            console.log("_tableHeaderData", _tableHeaderData);
            console.log("_headerItem", _headerItem); // all field reset first

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
            this.sortOrderName = _headerItem.sortingButtonName;
            console.log("this.sortColumnName", this.sortColumnName);
            console.log("this.sortOrderName", this.sortOrderName);
            console.log("_tableHeaderData>>", _tableHeaderData);
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          }
        }, {
          key: "searchList",
          value: function searchList(event) {
            this.searchTerm = event.target.value;
            console.log("this.searchTerm", this.searchTerm);
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
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

            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Referesh end

        }, {
          key: "forceReturn",
          value: function forceReturn(tableData, tableListData, returnAcceptable) {} // changeStatus end

        }, {
          key: "changeStatus",
          value: function changeStatus(type) {
            var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var moredata = arguments.length > 2 ? arguments[2] : undefined;
            console.log("item", type, item, moredata);
            var data = {},
                time,
                todate;
            var trackingHistory = []; // item={
            //   moredata:moredata
            // };

            item.moredata = moredata;

            if (item.TrackingData) {
              trackingHistory = item.TrackingData.trackingHistory;
            }

            var day = new Date();
            console.log(day, day.getMinutes());

            if (day.getSeconds() > 10) {
              time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
            } else {
              time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
            }

            console.log(day, time);
            todate = moment__WEBPACK_IMPORTED_MODULE_2__(day).format('YYYY/MM/DD'); // [Dispatch:{time:00.00,date:00/00/0000,comment:"",},Shipment:{time:00.00,date:00/00/0000,comment:""},Out for Delivery:{time:00.00,date:00/00/0000,comment:""},Delivered:{time:00.00,date:00/00/0000,comment:""}]
            // 4 obj

            console.log(todate, trackingHistory);
            data = {
              deliveredDate: item.TrackingData.deliveredDate,
              deliveryExpectedDate: item.TrackingData.deliveryExpectedDate,
              deliveryMode: item.TrackingData.deliveryMode,
              deliveryStarted: item.TrackingData.deliveryStarted,
              deliveryStatus: moredata.deliveryStatus,
              deliveryType: "Admin to Dispatch",
              designerId: item.designerId,
              orderId: item.orderId,
              productSku: item.productSku,
              productId: item.productId,
              trackingHistory: trackingHistory,
              userId: item.userId,
              trackingId: item.TrackingData.trackingId,
              trackingUrl: item.TrackingData.trackingUrl
            };

            if (type == 'shipment') {
              this.openorderCommentmodal("orderCommentAdmin_modal", data, item);
            } else if (type == 'out_for') {
              this.openorderCommentmodal("orderDeliveryAdmin_modal", data, item);
            } else if (type == 'delivered') {
              this.openorderCommentmodal("DeliveredAdmin_modal", data, item);
            } else if (type == 'Cancel') {
              this.openorderCommentmodal("orderCancelAdmin_modal", data, item);
            }
          } // changeStatus start

        }, {
          key: "openorderCommentmodal",
          value: function openorderCommentmodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var orderCommentmodal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('openProfilemodal ...........>>', _identifier);
                      _context.next = 3;
                      return this.modalController.create({
                        component: src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                        cssClass: 'mymodalClass small profilemodal',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 3:
                      orderCommentmodal = _context.sent;
                      // modal data back to Component
                      orderCommentmodal.onDidDismiss().then(function (getdata) {
                        console.log("getdata", getdata);

                        _this3.onRefresh();
                      });
                      _context.next = 7;
                      return orderCommentmodal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // orderpack start

        }, {
          key: "orderStatus_modal",
          value: function orderStatus_modal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var size, orderCommentmodal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('openordermodal ...........>>', _identifier, _item);
                      size = 'small';

                      if (_identifier == 'userCustomMesorment') {
                        _item = _item.measurementObject;
                        size = 'medium';
                      } else if (_identifier == 'forceReturnModal') {}

                      _context2.next = 5;
                      return this.modalController.create({
                        component: src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                        cssClass: 'mymodalClass ' + size + ' profilemodal',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 5:
                      orderCommentmodal = _context2.sent;
                      // modal data back to Component
                      orderCommentmodal.onDidDismiss().then(function (getdata) {
                        console.log("getdata........", getdata); // console.log("getdata",getdata);

                        _this4.packed_done = getdata.data;

                        _this4.onRefresh();
                      });
                      _context2.next = 9;
                      return orderCommentmodal.present();

                    case 9:
                      return _context2.abrupt("return", _context2.sent);

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // orderpack end
          // orders start

        }, {
          key: "orders_modal",
          value: function orders_modal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var orderCommentmodal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('openordermodal ...........>>', _identifier);
                      console.log('openordermodal _item ...........>>', _item, this.tableData);

                      if (_identifier == 'returnRequestConfirm') {
                        console.log(_item);
                      } // if(_item == 'true'){


                      _context3.next = 5;
                      return this.modalController.create({
                        component: src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                        cssClass: 'mymodalClass small profilemodal',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 5:
                      orderCommentmodal = _context3.sent;
                      // modal data back to Component
                      orderCommentmodal.onDidDismiss().then(function (getdata) {
                        console.log("getdata.......", getdata); // console.log("getdata",getdata);

                        _this5.orders_done = getdata.data;
                        setTimeout(function () {
                          _this5.progressbar_1 = true;
                        }, 1000);

                        _this5.onRefresh();
                      });
                      _context3.next = 9;
                      return orderCommentmodal.present();

                    case 9:
                      return _context3.abrupt("return", _context3.sent);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // orders end

          /*----------------Table list data end----------------*/

        }, {
          key: "createInvoice",
          value: function createInvoice() {
            var _this6 = this;

            console.log("tableData", this.tableData);
            var orders = this.tableData.OrderSKUDetails;
            var productIds = [],
                userId;
            userId = this.tableData.userId;
            var api = "/" + this.tableData.orderId + "/" + userId; // console.log("tableData",this.tableData,orders,orders.designerId,orders.orderId,productIds,userId);

            this.tableListSubscribe = this.http.post(api, '').subscribe(function (res) {
              _this6.isListLoading = false;
            }, function (errRes) {});
          } // ----------- destroy unsubscription start ---------

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

        return OrderProductsListPage;
      }();

      _OrderProductsListPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_5__.CommonUtils
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }];
      };

      _OrderProductsListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-order-products-list',
        template: _raw_loader_order_products_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_products_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OrderProductsListPage);
      /***/
    },

    /***/
    4168:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/product/order-list/order-products-list/order-products-list.page.scss ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".customizationMessage {\n  opacity: 0;\n  height: 0;\n  padding: 0;\n  transition: 0.1s ease-in-out;\n  background-color: rgba(0, 0, 0, 0.1);\n  max-width: 24rem;\n  margin-top: 0;\n}\n\n.customizationMessage.showCustomization {\n  margin: 10px 0 5px 0;\n  padding: 10px;\n  opacity: 1;\n  height: auto;\n  width: 100%;\n}\n\n.customizationDescption {\n  width: 100%;\n}\n\n@media screen and (max-width: 426px) {\n  .customizationDescption {\n    display: grid;\n    width: 100%;\n  }\n  .customizationDescption .id-header {\n    font-size: 12.5px;\n  }\n}\n\n.mailbox {\n  width: 100%;\n  max-width: 24rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 7px;\n}\n\n.mailbox .to, .mailbox .from {\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.mailbox .message {\n  text-align: left;\n}\n\n.hiddentext li span {\n  max-width: 100px;\n  overflow: hidden;\n  width: 100%;\n  display: inline-block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.hiddentext li span.showtext {\n  display: inline;\n  display: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXByb2R1Y3RzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBRUksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0E7RUFHSSxXQUFBO0FBRko7O0FBSUE7RUFFSTtJQUVJLGFBQUE7SUFDQSxXQUFBO0VBSE47RUFJTTtJQUVJLGlCQUFBO0VBSFY7QUFDRjs7QUFNQTtFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBT0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFMUjs7QUFVSTtFQUVJLGdCQUFBO0FBVFI7O0FBY0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVhSOztBQWFJO0VBRUksZUFBQTtFQUFBLGdCQUFBO0FBWlIiLCJmaWxlIjoib3JkZXItcHJvZHVjdHMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9taXphdGlvbk1lc3NhZ2Vcclxue1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWF4LXdpZHRoOiAyNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAvLyB3aWR0aDogMDtcclxufVxyXG4uY3VzdG9taXphdGlvbk1lc3NhZ2Uuc2hvd0N1c3RvbWl6YXRpb25cclxue1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jdXN0b21pemF0aW9uRGVzY3B0aW9uXHJcbntcclxuICAgIC8vIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNnB4KSBcclxue1xyXG4gICAgLmN1c3RvbWl6YXRpb25EZXNjcHRpb25cclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC5pZC1oZWFkZXIgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEyLjVweDtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbn1cclxuLm1haWxib3hcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDI0cmVtO1xyXG4gICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIC50bywuZnJvbXtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NhZ2VcclxuICAgIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcbi5oaWRkZW50ZXh0XHJcbntcclxuICAgIGxpIHNwYW57XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgbGkgc3Bhbi5zaG93dGV4dFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    70134:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-list/order-products-list/order-products-list.page.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>Order Items List\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Order Items List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-box\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n              Order Items List\r\n            </div>\r\n            <!-- <div class=\"card-header-action\">\r\n              <a [href]=\"url\" class=\"cursor-pointer text-decoration-none btn btn-primary border-none box-shadow-none shadow-none-focus btn-shadow\" matRipple target=\"_blank\" (click)=\"createInvoice()\">Download Invoice</a>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"card-body order-card\" >\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\r\n                <div class=\"order-item-image\">\r\n                  <img [src]=\"tableData?.images\" >\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-7\">\r\n                <div class=\"product-bg\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"product-name\">\r\n                        <p class=\"order_product\">{{tableData?.productName}}</p>\r\n                        <h1>₹{{tableData?.salesPrice ? tableData?.salesPrice : tableData?.mrp}}<span *ngIf=\"tableData?.salesPrice\">₹{{tableData?.mrp}}</span></h1>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4\">\r\n                      <div class=\"order-id\">\r\n                        <span class=\"id-header\">Order Id: </span>\r\n                        <span>{{tableData?.orderId}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4\">\r\n                      <div class=\"order-date\">\r\n                        <span class=\"id-header\">Order date: </span>\r\n                        <span>{{tableData?.orderDate}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4\">\r\n                      <div class=\"delivery-date\">\r\n                        <span class=\"id-header\">Delivery date: </span>\r\n                        <span *ngIf=\"!tableData?.orderStatusDetails?.deliveryDetails\">{{shippingDate}}</span>\r\n                        <span *ngIf=\"tableData?.orderStatusDetails?.deliveryDetails\">{{tableData?.orderStatusDetails?.deliveryDetails?.deliveredDate}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"order-details-title\">\r\n                        <h1>Order Status</h1>\r\n                      </div>\r\n                      <div class=\"order-steper\">\r\n                        <!-- progress bar all step -->\r\n                        <ul id=\"progressbar-1\" class=\"mx-0 mt-0 mb-5 px-0 pt-0 pb-4\" *ngIf=\"tableData?.orderItemStatus == 'Orders' && paymentData || tableData?.orderItemStatus == 'Delivered' && paymentData || tableData?.orderItemStatus == 'Shipped' && paymentData || tableData?.orderItemStatus == 'Packed' && paymentData\" [ngClass]=\"{'cancellation': tableData?.orderItemStatus == 'cancelled'}\">\r\n                            <li class=\"step0 active\" id=\"step1\"><span\r\n                                ><img src=\"assets/images/orders.png\" />Order Verified</span></li>\r\n                            <li class=\"step0 text-center\" [ngClass]=\"{'disabledclick active': tableData?.orderItemStatus == 'Packed' || tableData?.orderItemStatus == 'Delivered' || tableData?.orderItemStatus == 'Shipped'}\" (click)=\"orderStatus_modal('orderpackModal',tableData,'')\" id=\"step2\"><span><img src=\"assets/images/packing.png\" />Packed</span></li>\r\n                            <li class=\"step0 text-center\" id=\"step3\" [ngClass]=\"{'active':  tableData?.orderItemStatus == 'Delivered' || tableData?.orderItemStatus == 'Shipped', 'disabledclick':  tableData?.orderItemStatus == 'Delivered' || tableData?.orderItemStatus == 'Shipped' || tableData?.orderStatusDetails?.packedDetails == null}\" (click)=\"orderStatus_modal('ordershippedModal',tableData,'')\"><span><img src=\"assets/images/shipment.png\" />Ship</span></li>\r\n                            <li class=\"step0 text-center text-muted\" [ngClass]=\"{'active': tableData?.orderItemStatus == 'Delivered' ,'disabledclick': tableData?.orderItemStatus == 'Delivered' || tableData?.orderStatusDetails?.shippedDetails == null }\" id=\"step4\" (click)=\"orderStatus_modal('orderdeliverModal',tableData,tableListData)\"><span><img src=\"assets/images/deliverd.png\" />Delivered</span></li>\r\n                        </ul>\r\n                        <!-- *ngIf=\"tableData?.orderItemStatus == 'Delivered'\" -->\r\n                          \r\n                        <!-- progress bar all step -->\r\n                        <!-- progress bar two step -->\r\n                        <!-- Verify Orders -->\r\n                        <ul id=\"progressbar-2\" class=\"mx-0 mt-0 mb-5 px-0 pt-0 pb-4\" *ngIf=\"tableData?.orderItemStatus == 'New' && paymentData\" >\r\n                          <li class=\"step0 active\" id=\"step1\"><span\r\n                              ><img src=\"assets/images/orders.png\" />Verify Orders</span></li>\r\n                          <li class=\"step0 text-muted text-end disabledclick\" (click)=\"orders_modal('ordersModal',tableData,'')\" id=\"step4\" [ngClass]=\"{'active': tableData?.orderItemStatus == 'Packed' || tableData?.orderItemStatus == 'Orders' || tableData?.orderItemStatus == 'Shipped' || tableData?.orderItemStatus == 'Delivered' || tableData?.orderItemStatus == 'cancelled'}\"><span\r\n                              style=\"margin-right: 22px;\"><img src=\"assets/images/orders.png\" />Orders</span></li>\r\n                        </ul>\r\n                        <!-- Request for cancelation -->\r\n                        <ul id=\"progressbar-2\" class=\"mx-0 mt-0 mb-5 px-0 pt-0 pb-4\" *ngIf=\"tableData?.orderItemStatus == 'Request for cancelation' && paymentData || tableData?.orderItemStatus == 'cancelled' && paymentData\" [ngClass]=\"{'cancellation': tableData?.orderItemStatus == 'cancelled'}\">\r\n                          <li class=\"step0 active\" id=\"step1\"><span\r\n                              ><img src=\"assets/images/orders.png\" />Verify Orders</span></li>\r\n                          <li class=\"step0 text-muted text-end \" (click)=\"orders_modal('cancelledApprovalModal',tableData,'')\" id=\"step4\" [ngClass]=\"{'active disabledclick': tableData?.orderItemStatus == 'cancelled'}\"><span\r\n                              style=\"margin-right: 22px;\"><img src=\"assets/images/orders.png\" />Cancelled</span></li>\r\n                        </ul>\r\n\r\n                        <!-- refundRequest -->\r\n                        <ul id=\"progressbar-2\" class=\"mx-0 mt-0 mb-5 px-0 pt-0 pb-4 refundRequest\" *ngIf=\"tableData?.orderItemStatus == 'returnRequest' && paymentData || tableData?.orderItemStatus == 'Return rejected by admin' && tableData?.orderStatusDetails?.returnRejectedByAdmin\" >\r\n                          <li class=\"step0 active\" id=\"step1\"><span><img src=\"assets/images/orders.png\" />Return Request</span></li>\r\n                          <li class=\"step0 text-muted text-end\" (click)=\"orders_modal('returnRequestConfirm',tableData,'')\" id=\"step4\" [ngClass]=\"{'active': tableData?.orderItemStatus == 'Return rejected by admin'}\">\r\n                            <span style=\"margin-right: 22px;\" *ngIf=\"tableData?.orderItemStatus != 'Return rejected by admin'\">\r\n                              <img src=\"assets/images/orders.png\" />{{tableData?.orderItemStatus == 'returnRequest' ? 'Return Approve' : 'Return/Refund accepted'}}\r\n                            </span>\r\n                            <span style=\"margin-right: 22px;\" *ngIf=\"tableData?.orderItemStatus == 'Return rejected by admin'\">\r\n                              <img src=\"assets/images/orders.png\" />Return request rejected \r\n                            </span>\r\n                            </li>\r\n                        </ul>\r\n                        <!-- return request approve -->\r\n                        <ul id=\"progressbar-2\" class=\"mx-0 mt-0 mb-5 px-0 pt-0 pb-4 refundRequest NotConfirmed\" *ngIf=\"!paymentData\" >\r\n                          <li class=\"step0 active\" id=\"step1\"><span><img src=\"assets/images/orders.png\" />Order</span></li>\r\n                          <li class=\"step0 text-muted text-end active\"  id=\"step4\">\r\n                            <span style=\"margin-right: 22px;\" >\r\n                              <img src=\"assets/images/orders.png\" />Order Not Confirmed\r\n                            </span>\r\n                            </li>\r\n                        </ul>\r\n                        <ul id=\"progressbar-1\" class=\"mx-0 mt-0 mb-5 px-0 pt-0 pb-4 refundRequest hiddentext\" *ngIf=\"tableData?.orderItemStatus == 'Return request approved' || tableData?.orderItemStatus == 'Product shipped by user' || tableData?.orderItemStatus == 'returnRefund' || tableData?.orderItemStatus == 'Product received from user' || tableData?.orderItemStatus == 'Rejected' && tableData?.orderStatusDetails?.returnFromAdmin\">\r\n                          <li class=\"step0 active\" id=\"step1\"><span  class=\"showtext\"\r\n                              ><img src=\"assets/images/orders.png\" />Return approve</span></li>\r\n                          <li class=\"step0 text-center cursor-default\" [ngClass]=\"{'disabledclick active': tableData?.orderStatusDetails?.userShippedProduct}\"  id=\"step2\"><span [ngClass]=\"{'showtext' : viewText == 'Product shipped'}\" (click)=\"viewText = 'Product shipped'\"><img src=\"assets/images/packing.png\" />Shipped</span></li>\r\n                          <li class=\"step0 text-center cursor-default\" id=\"step3\" [ngClass]=\"{'active disabledclick':  tableData?.orderStatusDetails?.designerReceivedProduct}\"><span [ngClass]=\"{'showtext' : viewText == 'Product received'}\" (click)=\"viewText = 'Product received'\"><img src=\"assets/images/shipment.png\" />Received</span></li>\r\n                          <li class=\"step0 text-center text-muted\" [ngClass]=\"{'active': tableData?.orderStatusDetails?.returnFromAdmin ,'disabledclick':  tableData?.orderItemStatus == 'returnRefund' || tableData?.orderItemStatus == 'Return request approved' || tableData?.orderItemStatus == 'Product shipped by user'}\" id=\"step4\" (click)=\"orders_modal('returnRefund',tableData,'')\"><span class=\"showtext\" >\r\n                            <img [src]=\"tableData?.orderStatusDetails?.returnFromAdmin?.isReturn == false ? 'assets/images/cancel-button.png' : 'assets/images/deliverd.png'\" />\r\n                            <span *ngIf=\"tableData?.orderItemStatus == 'Product received from user'\">\r\n                              Return/Refund\r\n                            </span>\r\n                            <span *ngIf=\"tableData?.orderItemStatus == 'returnRefund' || tableData?.orderItemStatus == 'Rejected'\">\r\n                              {{tableData?.orderItemStatus == 'returnRefund' ? 'Return/Refunded' : 'Refund Rejected'}}\r\n                            </span>\r\n                            <!-- {{tableData?.orderItemStatus != 'Rejected' ? 'Return/Refund' : 'Refund Rejected'}} -->\r\n                          </span></li>\r\n                      </ul>\r\n                        <!-- progress bar two step -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12  shortNotes\">\r\n                          <p *ngIf=\"tableData?.orderItemStatus == 'Orders'\" class=\"mb-0 pt-2\"><mat-icon class=\"text-success\">verified</mat-icon><span>Order verified by {{tableData?.displayName}}.</span></p>\r\n                          <p *ngIf=\"tableData?.orderItemStatus == 'Packed'\" class=\"mb-0 pt-2\"><mat-icon class=\"text-success\">verified</mat-icon><span>Product packed in divatt cover & Recorded the packing video.</span></p>\r\n                          <p *ngIf=\"tableData?.orderItemStatus == 'Shipped'\" class=\"mb-0 pt-2\"><mat-icon class=\"text-success\">verified</mat-icon><span>Product courier by {{tableData?.orderStatusDetails?.shippedDetails?.courierName}} on {{tableData?.orderStatusDetails?.shippedDetails?.orderShippedTime}}</span></p>\r\n                          <p *ngIf=\"tableData?.orderItemStatus == 'Shipped'\" class=\"mb-0\"><mat-icon class=\"text-success\">info</mat-icon><span>Product AWB number : {{tableData?.orderStatusDetails?.shippedDetails?.awbNumber}}</span></p>\r\n                          <p *ngIf=\"tableData?.orderItemStatus == 'Delivered'\" class=\"mb-0 pt-2\"><mat-icon class=\"text-success\">verified</mat-icon><span>Product delivered by {{tableData?.orderStatusDetails?.shippedDetails?.courierName}} on {{tableData?.orderStatusDetails?.deliveryDetails?.deliveredDate}}.</span></p>\r\n                          <p *ngIf=\"tableData?.orderItemStatus == 'returnRefund'\" class=\"mb-2 pt-2\"><mat-icon class=\"text-success\">verified</mat-icon><span>Product return completed and <b>₹{{tableData?.salesPrice ? tableData?.salesPrice : tableData?.mrp}}</b>  refunded to buyer account on {{returnFromAdminTime}}.</span></p>  \r\n                          <p *ngIf=\"tableData?.orderItemStatus == 'Delivered' && tableData?.orderStatusDetails?.forceReturnOnDTO\" class=\"mb-2 pt-2\"><mat-icon class=\"text-warning\">info</mat-icon><span>You have  turn on forcefully return for this order because {{tableData?.orderStatusDetails?.forceReturnOnDTO?.comments}} on {{forceReturnOnDTOTime}}.</span></p>  \r\n                          \r\n                        </div>\r\n                        <br>\r\n                        <a (click)=\"orderStatus_modal('forceReturnModal',tableData,tableListData)\" class=\"text-danger cursor-pointer d-flex align-items-center\" *ngIf=\"tableData?.orderItemStatus == 'Delivered' && tableData?.orderStatusDetails?.returnRequestApprove == null\">\r\n                          <mat-icon>restart_alt</mat-icon> Force to Return\r\n                         </a>\r\n                         <br>\r\n                         <div class=\"form-group\" *ngIf=\"tableData?.orderItemStatus == 'Delivered' && tableData?.orderStatusDetails?.forceReturnOnDTO == null\">\r\n                           <mat-checkbox name=\"returnAcceptable\" [(ngModel)]=\"model.returnAcceptable\" (change)=\"orderStatus_modal('forceReturnOnModal',tableData,tableListData,model.returnAcceptable)\">\r\n                            Turn on return forcefully\r\n                           </mat-checkbox>\r\n                         </div>\r\n                        <!-- <p class=\"text-right\" *ngIf=\"tableData?.orderItemStatus != 'cancelled' && tableData?.orderItemStatus != 'Delivered' && tableData?.orderItemStatus != 'Shipped' && tableData?.orderItemStatus != 'Packed' && tableData?.orderItemStatus != 'New' && tableData?.orderItemStatus != 'Request for cancelation' && tableData?.orderItemStatus != 'returnRequest' && tableData?.orderItemStatus != 'returnRefund'\"><a  class=\"text-danger text-decoration-none  font-weight-bold cursor-pointer\" (click)=\"orderStatus_modal('orderCancelDesigner_modal',tableData,'')\">Cancel Order</a></p> -->\r\n                       <!-- returnFromUser -->\r\n                       <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderItemStatus == 'returnRequest' || tableData?.orderItemStatus == 'Rejected'  || tableData?.orderItemStatus == 'Return rejected by admin'\">\r\n                        <div class=\"product-qty customizationDescption\">\r\n                          <span class=\"id-header d-flex align-items-center cursor-pointer w-fit text-dark font-weight-bold\" (click)=\"showreturnRequesttmsg=!showreturnRequesttmsg\">Reason of Return Request<mat-icon >{{showreturnRequesttmsg ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                          <span [ngClass]=\"{'showCustomization':showreturnRequesttmsg}\" class=\"customizationMessage\">\r\n                            <b>Reason: </b>{{tableData?.orderStatusDetails?.returnFromUser?.reason}} <br>\r\n                            <b>Comment: </b>{{tableData?.orderStatusDetails?.returnFromUser?.comment}} <br>\r\n                            <br><span  class=\"font-xs d-inline-block float-right\">{{returnFromUserTime}}</span>\r\n                          </span>\r\n                          \r\n                        </div>\r\n                      </div>\r\n                      <!-- designerReceivedProduct -->\r\n                       <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderItemStatus == 'Product received from user'\">\r\n                        <div class=\"product-qty customizationDescption\">\r\n                          <span class=\"id-header d-flex align-items-center cursor-pointer w-fit text-dark font-weight-bold\" (click)=\"showRecivedtmsg=!showRecivedtmsg\">Product received from buyer<mat-icon >{{showreturnRequesttmsg ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                          <span [ngClass]=\"{'showCustomization':showRecivedtmsg}\" class=\"customizationMessage\">\r\n                            Seller recived {{tableData?.orderStatusDetails?.designerReceivedProduct?.correctProduct ? 'currect' :'wrong'}} product <br>\r\n                            <b>Comment: </b>{{tableData?.orderStatusDetails?.designerReceivedProduct?.comments}} <br>\r\n                            <br><span  class=\"font-xs d-inline-block float-right\">{{designerReceivedProductTime}}</span>\r\n                          </span>\r\n                          \r\n                        </div>\r\n                      </div>\r\n                        <!-- returnFromAdmin -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderItemStatus == 'returnRefund' || tableData?.orderItemStatus == 'Rejected'\">\r\n                          <div class=\"product-qty customizationDescption\">\r\n                            <span class=\"id-header d-flex align-items-center cursor-pointer w-fit text-dark font-weight-bold pt-1\" (click)=\"showreturnRefundtmsg=!showreturnRefundtmsg\">{{tableData?.orderStatusDetails?.returnFromAdmin?.isReturn ? 'Return/Refund completed' : 'Refund rejected'}}<mat-icon >{{showreturnRefundtmsg ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                            <span [ngClass]=\"{'showCustomization':showreturnRefundtmsg}\" class=\"customizationMessage\">\r\n                              {{tableData?.orderStatusDetails?.returnFromAdmin?.comment}}.<br>\r\n                              <br><span  class=\"font-xs d-inline-block float-right\">{{returnFromAdminTime}}</span>\r\n                            </span>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                        <!-- Request for cancelation message(cancelOrderDetails) -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderStatusDetails?.cancelOrderDetails\">\r\n                          <div class=\"product-qty customizationDescption\">\r\n                            <span class=\"id-header d-flex align-items-center cursor-pointer w-fit text-dark font-weight-bold\" (click)=\"showCancelRequestmsg=!showCancelRequestmsg\">Reason of request for cancelation <mat-icon >{{showCancelRequestmsg ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                            <span [ngClass]=\"{'showCustomization':showCancelRequestmsg}\" class=\"customizationMessage\">\r\n                              {{tableData?.orderStatusDetails?.cancelOrderDetails?.cancelComment}}\r\n                              <br><span  class=\"font-xs d-inline-block float-right\">{{cancelOrderDetailsTime}}</span>\r\n                            </span>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                        <!-- cancelled Reject message(cancelRequestDetails) -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderStatusDetails?.cancelRequestDetails\">\r\n                          <div class=\"product-qty customizationDescption\">\r\n                            <span class=\"id-header d-flex align-items-center cursor-pointer w-fit text-dark font-weight-bold\" (click)=\"showCanceledtmsg=!showCanceledtmsg\">Reason of cancelled reply<mat-icon >{{showCanceledtmsg ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                            <span [ngClass]=\"{'showCustomization':showCanceledtmsg}\" class=\"customizationMessage\">\r\n                              {{tableData?.orderStatusDetails?.cancelRequestDetails?.adminCancellationComment ? tableData?.orderStatusDetails?.cancelRequestDetails?.adminCancellationComment : tableData?.orderStatusDetails?.cancelRequestDetails?.adminRejectionComment}}\r\n                              <br><span  class=\"font-xs d-inline-block float-right\">{{cancelRequestDetailsrejectionTime ? cancelRequestDetailsrejectionTime : cancelRequestDetailscancellationTime}}</span>\r\n                            </span>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                        <!-- returnRequestApprove -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderItemStatus == 'Return request approved' && tableData?.orderStatusDetails?.returnRequestApprove\">\r\n                          <div class=\"product-qty customizationDescption\">\r\n                            <span class=\"id-header d-flex align-items-center cursor-pointer w-fit text-dark font-weight-bold\" (click)=\"showreturnRequestApprove=!showreturnRequestApprove\">Return request Approve<mat-icon >{{showCanceledtmsg ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                            <span [ngClass]=\"{'showCustomization':showreturnRequestApprove}\" class=\"customizationMessage\">\r\n                              {{tableData?.orderStatusDetails?.returnRequestApprove?.comments}}\r\n                              <br><span  class=\"font-xs d-inline-block float-right\">{{returnRequestApproveTime}}</span>\r\n                            </span>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                        <!-- cancelFromUser -->\r\n                        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderItemStatus == 'cancelled' && tableData?.orderStatusDetails?.cancelFromUser\">\r\n                          <div class=\"product-qty customizationDescption\">\r\n                            <span class=\"id-header d-flex align-items-center cursor-pointer w-fit text-dark font-weight-bold\" (click)=\"showcancelFromUsertmsg=!showcancelFromUsertmsg\">Reason of order cancel from user<mat-icon >{{showcancelFromUsertmsg ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                              <span [ngClass]=\"{'showCustomization':showcancelFromUsertmsg}\" class=\"customizationMessage\">\r\n                                <b>Reason: </b>{{tableData?.orderStatusDetails?.cancelFromUser?.reason}} <br>\r\n                                <b>Comment: </b>{{tableData?.orderStatusDetails?.cancelFromUser?.comment}} <br>\r\n                                <br><span  class=\"font-xs d-inline-block float-right\">{{cancelFromUserTime}}</span>\r\n                              </span>\r\n                            \r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"product-details-title\">\r\n                        <h1>Product Details</h1>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"product-color\">\r\n                        <span class=\"id-header\">Color: </span>\r\n                        <span class=\"text-black\">&nbsp;{{tableData?.colour}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"product-size d-flex\">\r\n                        <span class=\"id-header\">Size: </span>\r\n                        <span class=\"d-flex align-items-center\">{{tableData?.size}} &nbsp;<mat-icon *ngIf=\"tableData?.size == 'Custom'\" class=\"cursor-pointer\" (click)=\"orderStatus_modal('userCustomMesorment',tableData,'')\">info</mat-icon></span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"product-qty\">\r\n                        <span class=\"id-header\">QTY: </span>\r\n                        <span>{{tableData?.units}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"product-qty\">\r\n                        <span class=\"id-header\">Design Customization: </span>\r\n                        <span>{{tableData?.customizationStatus ? 'Yes' : 'No'}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.customizationStatus\">\r\n                      <div class=\"product-qty customizationDescption\">\r\n                        <span class=\"id-header d-flex align-items-center cursor-pointer w-fit\" (click)=\"showCustomization=!showCustomization\">Design Customization Message <mat-icon >{{showCustomization ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                        <span [ngClass]=\"{'showCustomization':showCustomization}\" class=\"customizationMessage\">{{tableData?.customObject?.customizationDetails}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.giftWrapAmount\">\r\n                      <div class=\"product-qty\">\r\n                        <span class=\"id-header\">Giftwrap: </span>\r\n                        <span>{{tableData?.giftwrapStatus ? 'Yes' : 'No'}}<span *ngIf=\"tableData?.giftwrapStatus\">(₹{{tableData?.giftWrapAmount}})</span></span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.giftwrapStatus\">\r\n                      <div class=\"product-qty customizationDescption\">\r\n                        <span class=\"id-header d-flex align-items-center cursor-pointer w-fit\" (click)=\"showGiftwrap=!showGiftwrap\">Giftwrap Details <mat-icon >{{showGiftwrap ? 'expand_less' : 'expand_more'}}</mat-icon></span>\r\n                        <!-- <span >{{tableData?.giftWrapObject?.customizationDetails}}</span> -->\r\n                        <div [ngClass]=\"{'showCustomization':showGiftwrap}\" class=\"customizationMessage mailbox\">\r\n                          <p class=\"to\">To<br><span>{{tableData?.giftWrapObject?.to}}</span></p>\r\n                          <p class=\"message\">{{tableData?.giftWrapObject?.message}}</p>\r\n                          <p class=\"text-right from  mb-0\">From<br><span>{{tableData?.giftWrapObject?.from}}</span></p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"contact-details-title\">\r\n                        <h1>Contact Details</h1>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"customer-name\">\r\n                        <span class=\"id-header\">Customer Name: </span>\r\n                        <span>{{bilingData?.fullName}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n                      <div class=\"phone-number\">\r\n                        <span class=\"id-header\">Phone Number: </span>\r\n                        <span>{{bilingData?.mobile}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderItemStatus == 'Delivered' || tableData?.orderItemStatus == 'returnRefund' || tableData?.orderItemStatus == 'returnRequest' || tableData?.invoiceId\">\r\n                      <div class=\"contact-details-title\">\r\n                        <h1>Invoice</h1>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" *ngIf=\"tableData?.orderItemStatus == 'Delivered' || tableData?.orderItemStatus == 'returnRefund' || tableData?.orderItemStatus == 'returnRequest' || tableData?.invoiceId\">\r\n                      <a mat-raised-button color=\"primary\" class=\"bg-theme\" [href]=\"url\" target=\"_blank\">Download Invoice <mat-icon>download</mat-icon></a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_product_order-list_order-products-list_order-products-list_module_ts-es5.js.map