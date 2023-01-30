(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_designer_order-list-designer_order-products-designer_order-products-designer_mo-51e30a"], {
    /***/
    97943:
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/pages/designer/order-list-designer/order-products-designer/order-products-designer-routing.module.ts ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderProductsDesignerPageRoutingModule": function OrderProductsDesignerPageRoutingModule() {
          return (
            /* binding */
            _OrderProductsDesignerPageRoutingModule
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


      var _order_products_designer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-products-designer.page */
      51538);

      var routes = [{
        path: '',
        component: _order_products_designer_page__WEBPACK_IMPORTED_MODULE_0__.OrderProductsDesignerPage
      }];

      var _OrderProductsDesignerPageRoutingModule = function OrderProductsDesignerPageRoutingModule() {
        _classCallCheck(this, OrderProductsDesignerPageRoutingModule);
      };

      _OrderProductsDesignerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _OrderProductsDesignerPageRoutingModule);
      /***/
    },

    /***/
    21736:
    /*!**************************************************************************************************************!*\
      !*** ./src/app/pages/designer/order-list-designer/order-products-designer/order-products-designer.module.ts ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderProductsDesignerPageModule": function OrderProductsDesignerPageModule() {
          return (
            /* binding */
            _OrderProductsDesignerPageModule
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


      var _order_products_designer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./order-products-designer-routing.module */
      97943);
      /* harmony import */


      var _order_products_designer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-products-designer.page */
      51538);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _OrderProductsDesignerPageModule = function OrderProductsDesignerPageModule() {
        _classCallCheck(this, OrderProductsDesignerPageModule);
      };

      _OrderProductsDesignerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _order_products_designer_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderProductsDesignerPageRoutingModule],
        declarations: [_order_products_designer_page__WEBPACK_IMPORTED_MODULE_1__.OrderProductsDesignerPage]
      })], _OrderProductsDesignerPageModule);
      /***/
    },

    /***/
    51538:
    /*!************************************************************************************************************!*\
      !*** ./src/app/pages/designer/order-list-designer/order-products-designer/order-products-designer.page.ts ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrderProductsDesignerPage": function OrderProductsDesignerPage() {
          return (
            /* binding */
            _OrderProductsDesignerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_order_products_designer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./order-products-designer.page.html */
      5408);
      /* harmony import */


      var _order_products_designer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./order-products-designer.page.scss */
      694);
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

      var _OrderProductsDesignerPage = /*#__PURE__*/function () {
        function OrderProductsDesignerPage(http, activatedRoute, toastController, modalController, alertController, commonUtils, authService, router) {
          _classCallCheck(this, OrderProductsDesignerPage);

          this.http = http;
          this.activatedRoute = activatedRoute;
          this.toastController = toastController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.commonUtils = commonUtils;
          this.authService = authService;
          this.router = router;
          this.tableListData = [];
          this.itemcheckClick = false;
          this.checkedList = [];
          this.tableHeaderData = [{
            column_name: "Product Image",
            display_name: "Product Img",
            sortingButtonName: ""
          }, {
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
            column_name: "units",
            display_name: "QTY",
            sortingButtonName: ""
          }, {
            column_name: "mrp",
            display_name: "MRP",
            sortingButtonName: ""
          }, {
            column_name: "salesPrice",
            display_name: "Sale Price",
            sortingButtonName: ""
          }, {
            column_name: "discount",
            display_name: "Discount",
            sortingButtonName: ""
          } // {
          //   column_name: "paymentMode",
          //   display_name: "Payment Mode",
          //   sortingButtonName: "",
          // },
          // {
          //   column_name: "razorpay_payment_id",
          //   display_name: "Razorpay Payment id",
          //   sortingButtonName: "",
          // },
          ];
          this.isListLoading = false;
          this.sortColumnName = "";
          this.sortOrderName = "";
          this.deleteLoading = false;
          this.restoreLoading = false;
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

          this.searchTerm = ""; // Select single checkbox end
          // ---------------- Click Delete Item start ---------------------

          this.deleteLodershow = false;
          this.alldeleteLoaderShow = false;
        } // Variables end


        _createClass(OrderProductsDesignerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
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
            this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl + "/" + "order/genrateDesignerInvoice/" + this.parms_action_id;
            this.allselectModel = false;
            this.checkedList = [];
            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              console.log("res>>9", res);

              if (res.authority == "DESIGNER") {
                _this.listing_url = "userOrder/getOrder/" + _this.parms_action_id;

                _this.onRefresh();

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

                        if (item.modDetails.url == pageUrl[1]) {
                          if (item.modPrivs.list == true) {
                            console.log("-----Permission Granted-----");
                            _this.pagePermission = item;
                            console.log("this.pagePermission", _this.pagePermission, res.uid);

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
          }
        }, {
          key: "displayRecordChange",
          value: function displayRecordChange(_record) {
            console.log("_record", _record);
            this.displayRecord = _record;
            this.pageNo = 0;
            this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Display records end
          // List data start

        }, {
          key: "onListDate",
          value: function onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
            var _this2 = this;

            this.isListLoading = true;
            var api = _listUrl + "?page=" + _pageNo + "&limit=" + _displayRecord + "&sortName=" + _sortColumnName + "&sort=" + _sortOrderName + "&keyword=" + _searchTerm;
            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              _this2.isListLoading = false;
              console.log("restableData", res);
              _this2.tableData = res;
              _this2.tableListData = res.data; // this.createInvoice();       //---------  check item show start ----------

              _this2.invoiceId = res.invoiceId;
              _this2.orderId = res.orderId;

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
          // Delete start

        }, {
          key: "deleteData",
          value: function deleteData(_id) {
            var _this3 = this;

            console.log("id>>", _id);
            var sentValues = {
              id: _id
            };
            this.deleteLoading = true;
            this.deleteDataSubscribe = this.http.put(this.deleteApi, sentValues).subscribe(function (res) {
              _this3.deleteLoading = false; // console.log("Delete data  res >", res.return_data);

              if (res.status == 200) {
                _this3.commonUtils.presentToast("success", res.message);

                _this3.onRefresh();
              } else {
                _this3.commonUtils.presentToast("error", res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this3.commonUtils.presentToast("error", errRes.error.message);

              _this3.deleteLoading = false;
            });
          } // Delete end

          /*----------------Table list data end----------------*/
          // Delete aleart start

        }, {
          key: "presentAlert",
          value: function presentAlert(_identifier, _id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var messages, headers, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (_identifier == "delete") {
                        headers = "Delete";
                        messages = "Are you sure want to delete this category?";
                      }

                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: "aleart-popupBox",
                        header: headers,
                        message: messages,
                        buttons: [{
                          text: "Cancel",
                          role: "cancel",
                          cssClass: "popup-cancel-btn",
                          handler: function handler(blah) {
                            console.log("Confirm Cancel: blah");
                          }
                        }, {
                          text: "Okay",
                          cssClass: "popup-ok-btn",
                          handler: function handler() {
                            console.log("Confirm Okay"); // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);

                            // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);
                            if (_identifier == "delete") {
                              _this4.deleteData(_id);
                            }
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Delete aleart end

        }, {
          key: "presentToast",
          value: function presentToast(_msg, _type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: _msg,
                        duration: 2000,
                        cssClass: "my-tost-custom-class" + _type
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // changeStatus end

        }, {
          key: "changeStatus",
          value: function changeStatus(type, item, moredata) {
            var data = {},
                time,
                todate;
            var trackingHistory = [];
            var day = new Date();

            if (day.getSeconds() > 10) {
              time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
            } else {
              time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
            }

            console.log(day, time);
            todate = moment__WEBPACK_IMPORTED_MODULE_2__(day).format('YYYY/MM/DD'); // [Dispatch:{time:00.00,date:00/00/0000,comment:"",},Shipment:{time:00.00,date:00/00/0000,comment:""},Out for Delivery:{time:00.00,date:00/00/0000,comment:""},Delivered:{time:00.00,date:00/00/0000,comment:""}]
            // 4 obj

            this.authService.globalparamsData.subscribe(function (res) {
              console.log("res>>9", res);

              if (res.authority == "DESIGNER") {
                {
                  trackingHistory[0] = {
                    time: time,
                    date: todate,
                    comment: "",
                    designerId: res.uid,
                    auth: res.authority,
                    type: 'Dispatch'
                  };
                }
              }
            }); // trackingHistory=[
            //   {time:time,date:todate,comment:""}
            // ]

            console.log(todate, trackingHistory);
            data = {
              deliveredDate: "",
              deliveryExpectedDate: "",
              deliveryMode: '',
              deliveryStarted: "",
              deliveryStatus: moredata.deliveryStatus,
              deliveryType: "Designer to Admin",
              designerId: item.designerId,
              orderId: item.orderId,
              productSku: item.productSku,
              productId: item.productId,
              trackingHistory: trackingHistory,
              userId: item.userId,
              trackingId: "",
              trackingUrl: "",
              orderItemStatus: "dispatch"
            };
            console.log(day, day.getMinutes());
            console.log("item", type, item, moredata);

            if (type == 'Cancel') {
              console.log('Cancel', item, moredata);

              if (item.TrackingData) {
                data = {
                  deliveredDate: "",
                  deliveryExpectedDate: "",
                  deliveryMode: moredata.deliveryMode,
                  deliveryStarted: "",
                  deliveryStatus: moredata.deliveryStatus,
                  deliveryType: "Cancelled by Designer",
                  designerId: item.designerId,
                  orderId: item.orderId,
                  productSku: item.productSku,
                  productId: item.productId,
                  trackingHistory: moredata.trackingHistory,
                  userId: item.userId,
                  trackingId: item.TrackingData.trackingId,
                  trackingUrl: "",
                  orderItemStatus: "cancel"
                };
              }

              this.openorderCommentmodal("orderCancelDesigner_modal", data, item);
            } else {
              this.openorderCommentmodal("orderCommentdesigner_modal", data, "designer");
            }
          } // changeStatus start

        }, {
          key: "openorderCommentmodal",
          value: function openorderCommentmodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var orderCommentmodal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('openProfilemodal ...........>>', _identifier);
                      _context3.next = 3;
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
                      orderCommentmodal = _context3.sent;
                      // modal data back to Component
                      orderCommentmodal.onDidDismiss().then(function (getdata) {
                        console.log("getdata", getdata);

                        _this5.onRefresh();
                      });
                      _context3.next = 7;
                      return orderCommentmodal.present();

                    case 7:
                      return _context3.abrupt("return", _context3.sent);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // select all check box start

        }, {
          key: "allSelectItem",
          value: function allSelectItem(event) {
            if (event.target.checked) {
              this.itemcheckClick = false; // console.log('check item selkectedddddddddddddd');

              for (var i = 0; i < this.tableListData.length; i++) {
                // if(this.checkedList.includes(this.items[i].id) === false)
                if (this.checkedList.indexOf(this.tableListData[i]) === -1 && this.tableListData[i] !== null) {
                  this.checkedList.push(this.tableListData[i]);
                  this.tableListData[i].isSelected = true;
                }
              }
            } else if (this.itemcheckClick == false) {
              // console.log('not check item selectionnnnnnnnnnn')
              this.checkedList = [];

              for (var _i = 0; _i < this.tableListData.length; _i++) {
                if (this.checkedList.indexOf(this.tableListData[_i]) === -1) {
                  this.tableListData[_i].isSelected = false;
                }
              }
            }

            console.log("checked item all @@ >>", this.checkedList);
            console.log("tableListData item all @@ >>", this.tableListData);
          } // Select all checkbox end
          // Select single checkbox start

        }, {
          key: "onCheckboxSelect",
          value: function onCheckboxSelect(option, event) {
            if (event.target.checked) {
              if (this.checkedList.indexOf(option) === -1) {
                this.checkedList.push(option);
              }
            } else {
              for (var i = 0; i < this.tableListData.length; i++) {
                if (this.checkedList[i] == option) {
                  this.checkedList.splice(i, 1);
                }
              }
            }

            if (this.tableListData.length <= this.checkedList.length) {
              this.allselectModel = true;
              console.log("length 4");
            } else {
              console.log("length 0");
              this.allselectModel = false;
              this.itemcheckClick = true;
            }

            console.log("checked item single >>", this.checkedList);
          }
        }, {
          key: "onClickDeleteItem",
          value: function onClickDeleteItem(_identifire, _item, _items, _index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: "aleart-popupBox",
                        header: "Delete",
                        message: "Do you really want to delete selected category?",
                        buttons: [{
                          text: "Cancel",
                          role: "cancel",
                          cssClass: "popup-cancel-btn",
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: "Ok",
                          cssClass: "popup-ok-btn",
                          handler: function handler() {
                            // ------------ single item delete start ------------
                            if (_identifire == "single") {
                              console.log("_item", _item);
                              var sentValues = {
                                id: _item.id
                              };
                              _item.deleteLodershow = true;
                              _this6.deleteDataSubscribe = _this6.http.put("category/delete", sentValues).subscribe(function (res) {
                                _item.deleteLodershow = false;
                                console.log("Edit data  res >", res.return_data);

                                if (res.status == 200) {
                                  _items.splice(_index, 1);

                                  _this6.commonUtils.presentToast("success", res.return_message);

                                  if (_items.length == 0) {
                                    _this6.allselectModel = false;
                                  }

                                  _this6.commonUtils.presentToast("success", res.message);

                                  _this6.onRefresh();
                                } else {
                                  _this6.commonUtils.presentToast("error", res.message);
                                }
                              }, function (errRes) {
                                // this.selectLoadingDepend = false;
                                _this6.commonUtils.presentToast("error", errRes.error.message);

                                _item.deleteLodershow = false;
                              }); // ------------ single item delete end ------------
                            } else {
                              var checkItemIdArray = [];

                              if (_this6.checkedList) {
                                _this6.checkedList.forEach(function (element) {
                                  checkItemIdArray.push(element.id);
                                });
                              }

                              if (_items) {
                                _items.forEach(function (element) {
                                  _this6.checkedList.forEach(function (element1) {
                                    if (element.id == element1.id) {
                                      element.deleteLodershow = true; //loader show

                                      //loader show
                                      _this6.alldeleteLoaderShow = true;
                                    }
                                  });
                                });
                              }

                              _this6.deleteDataSubscribe = _this6.http.put("category/muldelete", checkItemIdArray).subscribe(function (res) {
                                if (res.status == 200) {
                                  if (_items) {
                                    for (var i = 0; i < _items.length; i++) {
                                      for (var j = 0; j < _this6.checkedList.length; j++) {
                                        if (_items[i].id == _this6.checkedList[j].id) {
                                          // _items.splice(i, i);
                                          _this6.checkedList = []; // _items.splice(_items.indexOf(_items[i]), 1);

                                          // _items.splice(_items.indexOf(_items[i]), 1);
                                          _this6.deleteLodershow = false; //loader hide

                                          //loader hide
                                          _this6.alldeleteLoaderShow = false; // console.log('delete items >>', _items);
                                          // console.log('delete this.checkedList >>', this.checkedList);

                                          // console.log('delete items >>', _items);
                                          // console.log('delete this.checkedList >>', this.checkedList);
                                          _this6.allselectModel = false;
                                        }
                                      }
                                    }

                                    if (_items.length == 0) {
                                      _this6.allselectModel = false;
                                      _this6.checkedList = [];
                                      checkItemIdArray = [];
                                    }
                                  }

                                  _this6.commonUtils.presentToast("success", res.message);

                                  _this6.onRefresh();
                                } else {
                                  _this6.commonUtils.presentToast("error", res.message);

                                  _this6.alldeleteLoaderShow = false;
                                }
                              }, function (errRes) {
                                _this6.commonUtils.presentToast("error", errRes.error.message);

                                _this6.alldeleteLoaderShow = false;

                                _items.forEach(function (element) {
                                  _this6.checkedList.forEach(function (element1) {
                                    if (element.id == element1.id) {
                                      element.deleteLodershow = false;
                                      _this6.alldeleteLoaderShow = false;
                                    }
                                  });
                                });
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Click Delete Item end
          // ----------- destroy unsubscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.tableListSubscribe !== undefined) {
              this.tableListSubscribe.unsubscribe();
            }

            if (this.deleteDataSubscribe !== undefined) {
              this.deleteDataSubscribe.unsubscribe();
            }

            if (this.changeStatusSubscribe !== undefined) {
              this.changeStatusSubscribe.unsubscribe();
            }

            if (this.permissionDataSubscribe !== undefined) {
              this.permissionDataSubscribe.unsubscribe();
            }
          }
        }]);

        return OrderProductsDesignerPage;
      }();

      _OrderProductsDesignerPage.ctorParameters = function () {
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

      _OrderProductsDesignerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-order-products-designer',
        template: _raw_loader_order_products_designer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_order_products_designer_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OrderProductsDesignerPage);
      /***/
    },

    /***/
    694:
    /*!**************************************************************************************************************!*\
      !*** ./src/app/pages/designer/order-list-designer/order-products-designer/order-products-designer.page.scss ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1wcm9kdWN0cy1kZXNpZ25lci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    5408:
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/designer/order-list-designer/order-products-designer/order-products-designer.page.html ***!
      \****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>Order Items List\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          Order List\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Order Items List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-box\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n              Order Items List\r\n            </div>\r\n            <div class=\"card-header-action\">\r\n              <a [href]=\"url\" target=\"_blank\" class=\"cursor-pointer text-decoration-none btn btn-primary border-none box-shadow-none shadow-none-focus btn-shadow\" >Download Invoice</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"table-header mt-3 mb-2\">\r\n              <div class=\"records-wrapper\">\r\n                  <ion-item class=\"record\">\r\n                    <span class=\"text-black mr-1\">Records: </span>\r\n                    <mat-form-field  class=\"m-0\">\r\n                      <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                        <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                          <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                          <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n             </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th>                            \r\n                            <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                {{th.display_name}}\r\n                                <!-- <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon> -->\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Status\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Action\r\n                              </div>\r\n                            </th>\r\n                          </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.OrderSKUDetails.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.OrderSKUDetails; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>\r\n                          <div class=\"symbol-group symbol-hover\">\r\n                            <a [href]=\"item?.images\" [attr.data-fancybox]=\"item.productId\" *ngIf=\"item?.images\">\r\n                              <img [src]=\"item?.images\" class=\"img-fluid rounded tableimg\">\r\n                            </a>\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          {{item?.orderId}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.productName}}\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"color-icon\" [style.background-color]=\"item?.colour\"></div>\r\n                        </td>\r\n                        <td>\r\n                          {{item?.units}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.mrp}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.salesPrice}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.discount}}\r\n                        </td>\r\n                        <!-- <td>\r\n                           {{item?.paymentData?.paymentMode}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.paymentData?.paymentDetails?.razorpay_payment_id}}\r\n                        </td> -->\r\n                        <td class=\"text-center\">\r\n                          <span class=\"status\" *ngIf=\"!item?.TrackingData && item.orderItemStatus\" [ngClass]=\"{ 'success': item.orderItemStatus == 'Active'}\">\r\n                            {{item?.orderItemStatus}}\r\n                          </span>\r\n                         <span class=\"status success\" *ngIf=\"item?.TrackingData\" [ngClass]=\"{'danger': item?.TrackingData?.deliveryStatus == 'cancel'}\">\r\n                            {{item?.TrackingData?.deliveryStatus}}\r\n                          </span>\r\n                        </td>\r\n                        <td class=\"action text-center pt-0\" >\r\n                          <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"\" [ngClass]=\"{ 'disabled': item?.TrackingData?.deliveryStatus == 'cancel'}\">\r\n                            <ion-fab-button color=\"dark\" >\r\n                               <mat-icon class=\"danger\" *ngIf=\"item?.TrackingData?.deliveryStatus == 'cancel'\" matTooltip=\"Order Canceled\" flow=\"up\" delay=\"500\">close</mat-icon>\r\n                              <!--<mat-icon style=\"color: #fff;\" color=\"success\" *ngIf=\"item.orderItemStatus == 'Out for Delivery'\" matTooltip=\"Out for Delivery\" flow=\"up\" delay=\"500\">local_shipping</mat-icon> -->\r\n                               <mat-icon class=\"success\" *ngIf=\"!item?.TrackingData\" matTooltip=\"Active\" flow=\"up\" delay=\"500\">notifications_active</mat-icon>\r\n                               <mat-icon class=\"success\" *ngIf=\"item?.TrackingData?.deliveryStatus == 'dispatch'\" matTooltip=\"Active\" flow=\"up\" delay=\"500\">content_paste_go</mat-icon>\r\n                               <mat-icon class=\"success\" *ngIf=\"item?.TrackingData && item?.TrackingData?.deliveryStatus != 'dispatch' && item?.TrackingData?.deliveryStatus != 'cancel'\" matTooltip=\"Delivered Status\" flow=\"up\" delay=\"500\">verified</mat-icon>\r\n                            </ion-fab-button>\r\n                            <ion-fab-list side=\"start\">\r\n                              <!-- <ion-fab-button color=\"danger\" matTooltip=\"Shipment\"   flow=\"up\" delay=\"500\"  (click)=\"changeStatus('reject',showAction,item)\" >\r\n                                <mat-icon style=\"color: #fff;\">inventory</mat-icon>\r\n                              </ion-fab-button> -->\r\n                              <!-- [ngClass]=\"{ 'disabled': item?.TrackingData}\" -->\r\n                              <ion-fab-button color=\"success\" matTooltip=\"Dispatch\"   flow=\"up\" delay=\"500\"  (click)=\"changeStatus('Dispatch',item,tableData)\" [ngClass]=\"{ 'disabled': item?.TrackingData}\">\r\n                                <mat-icon class=\"text-white\">content_paste_go</mat-icon>\r\n                              </ion-fab-button>\r\n                              <ion-fab-button color=\"danger\" matTooltip=\"Cancel Order\"   flow=\"up\" delay=\"500\"  (click)=\"changeStatus('Cancel',item,tableData)\" [ngClass]=\"{ 'disabled': item?.TrackingData?.deliveryStatus == 'cancel' || item?.TrackingData?.deliveryStatus == 'delivered'}\">\r\n                                <mat-icon class=\"text-white\">close</mat-icon>\r\n                              </ion-fab-button>\r\n                              <!-- <ion-fab-button matTooltip=\"Out for Delivery\"  color=\"success\" flow=\"up\" delay=\"500\" (click)=\"changeStatus('approve',showAction,item)\" [ngClass]=\"{'disabled':tabletitle =='Submitted' && !this.model.categories}\">\r\n                                <mat-icon>local_shipping</mat-icon>\r\n                              </ion-fab-button> -->\r\n                              <!-- <ion-fab-button matTooltip=\"Delivered\"  color=\"success\" flow=\"up\" delay=\"500\" (click)=\"changeStatus('approve',showAction,item)\" >\r\n                                <mat-icon>verified</mat-icon>\r\n                              </ion-fab-button> -->\r\n                            </ion-fab-list>\r\n                          </ion-fab>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n            <!-- <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          First\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          Previous\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          Next\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          Last\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_designer_order-list-designer_order-products-designer_order-products-designer_mo-51e30a-es5.js.map