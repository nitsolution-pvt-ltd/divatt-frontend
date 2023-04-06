(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_order-list_order-list_module_ts"],{

/***/ 52414:
/*!***********************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageRoutingModule": function() { return /* binding */ OrderListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list.page */ 5659);




const routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_0__.OrderListPage
    },
];
let OrderListPageRoutingModule = class OrderListPageRoutingModule {
};
OrderListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderListPageRoutingModule);



/***/ }),

/***/ 21401:
/*!***************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageModule": function() { return /* binding */ OrderListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list-routing.module */ 52414);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page */ 5659);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let OrderListPageModule = class OrderListPageModule {
};
OrderListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderListPageRoutingModule
        ],
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_1__.OrderListPage]
    })
], OrderListPageModule);



/***/ }),

/***/ 5659:
/*!*************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPage": function() { return /* binding */ OrderListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-list.page.html */ 9957);
/* harmony import */ var _order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page.scss */ 63246);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/modal.page */ 58167);











let OrderListPage = class OrderListPage {
    constructor(http, toastController, modalController, alertController, commonUtils, authService, router) {
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
        this.tableHeaderData = [
            {
                column_name: "orderId",
                display_name: "Order Id",
                sortingButtonName: "",
            },
            {
                column_name: "invoiceId",
                display_name: "invoice Id",
                sortingButtonName: "",
            },
            {
                column_name: "displayName",
                display_name: "display Name",
                sortingButtonName: "",
            },
            {
                column_name: "createdOn",
                display_name: "Order Date",
                sortingButtonName: "",
            },
            {
                column_name: "cancelationTime",
                display_name: "Canceled Date",
                sortingButtonName: "",
            },
            {
                column_name: "mrp",
                display_name: "MRP",
                sortingButtonName: "",
            },
            {
                column_name: "discount",
                display_name: "Discount",
                sortingButtonName: "",
            },
            {
                column_name: "salesPrice",
                display_name: "sales Price",
                sortingButtonName: "",
            },
            {
                column_name: "giftWrapAmount",
                display_name: "giftWrap Amount",
                sortingButtonName: "",
            },
            {
                column_name: "paymentMode",
                display_name: "Payment Mode",
                sortingButtonName: "",
            },
            {
                column_name: "razorpay_payment_id",
                display_name: "Razorpay Payment id",
                sortingButtonName: "",
            },
        ];
        this.isListLoading = false;
        this.sortColumnName = "";
        this.sortOrderName = "";
        this.deleteLoading = false;
        this.restoreLoading = false;
        // datatype end
        /*----------------Table list data start----------------*/
        // Display records start
        this.displayRecord = 10;
        this.displayRecords = [
            { id: '1', displayValue: 10 },
            { id: '2', displayValue: 25 },
            { id: '3', displayValue: 50 },
            { id: '4', displayValue: 100 },
            // { id : '5', displayValue: '0'}
        ];
        // Sorting end
        // Search start
        this.searchTerm = "";
    }
    // Variables end
    ngOnInit() {
        // this.commonFunction();
    }
    ionViewWillEnter() {
        this.commonFunction();
    }
    commonFunction() {
        this.allselectModel = false;
        this.checkedList = [];
        /*Check permission status start*/
        this.authService.globalparamsData.subscribe((res) => {
            // console.log("res>>", res);
            if (res.authority == "ADMIN") {
                this.permissionDataSubscribe =
                    this.commonUtils.menuPermissionObservable.subscribe((data) => {
                        if (data) {
                            // console.log("menu>>", data);
                            // console.log("this.router.url>>", this.router.url);
                            let pageUrl = this.router.url.split("/");
                            // console.log("pageUrl", pageUrl);
                            for (let item of data) {
                                if (item.modDetails.url == pageUrl[1]) {
                                    if (item.modPrivs.list == true) {
                                        // console.log("-----Permission Granted-----");
                                        this.pagePermission = item;
                                        // console.log("this.pagePermission", this.pagePermission);
                                        this.listing_url = "userOrder/skuList";
                                        this.onRefresh();
                                        // delete api
                                        break;
                                    }
                                    else {
                                        // console.log("-------No Permission--------");
                                        this.router.navigateByUrl("/error");
                                    }
                                }
                            }
                        }
                    });
            }
            else {
                this.router.navigateByUrl("/error");
            }
        });
        /*Check permission status end*/
    }
    // datatype start
    datatype(identifier) {
        // console.log(identifier);
        this.statustype = identifier;
        this.tableTitle = identifier;
        this.onRefresh();
        //  this.onListDate(this.statustype,this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    displayRecordChange(_record) {
        // console.log("_record", _record);
        this.displayRecord = _record;
        this.pageNo = 0;
        this.onListDate(this.statustype, this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Display records end
    // List data start
    onListDate(status, _listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
        this.isListLoading = true;
        let api = _listUrl + '?orderItemStatus=' + status + '&page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm;
        this.tableListSubscribe = this.http.get(api).subscribe((res) => {
            this.isListLoading = false;
            // console.log("res data......", res);
            this.tableData = res;
            var count = [];
            count = res === null || res === void 0 ? void 0 : res.data;
            for (let index = 0; index < count.length; index++) {
                this.tableData.data[index].createdOn = moment__WEBPACK_IMPORTED_MODULE_2__(res === null || res === void 0 ? void 0 : res.data[index].createdOn, 'DD/MM/YYYY hh:mm:ss').format('DD-MM-YYYY');
            }
            this.tableListData = res.data;
            this.order_countData = {
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
            };
            // console.log("Order Count Data....",this.order_countData);
            //---------  check item show start ----------
            if (this.tableListData && this.checkedList) {
                for (let i = 0; i < this.tableListData.length; i++) {
                    for (let j = 0; j < this.checkedList.length; j++) {
                        if (this.checkedList[j].id == this.tableListData[i].id) {
                            this.tableListData[i].isSelected = true;
                        }
                    }
                }
            }
        }, (errRes) => {
            // this.selectLoadingDepend = false;
            this.isListLoading = false;
        });
    }
    // List data end
    // Pagination start
    setPage(page) {
        // console.log("page", page);
        // console.log("page");
        this.pageNo = page;
        this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Pagination end
    // Sorting start
    isSortTableHeader(_tableHeaderData, _headerItem) {
        // console.log("_tableHeaderData", _tableHeaderData);
        // console.log("_headerItem", _headerItem);
        // all field reset first
        _tableHeaderData.forEach((val) => {
            val.sortingButtonName = "";
        });
        _headerItem.orederShow = !_headerItem.orederShow;
        if (_headerItem.orederShow) {
            _headerItem.sortingButtonName = "ASC";
        }
        else {
            _headerItem.sortingButtonName = "DESC";
        }
        this.sortColumnName = _headerItem.column_name;
        this.sortOrderName = _headerItem.sortingButtonName;
        // console.log("this.sortColumnName", this.sortColumnName);
        // console.log("this.sortOrderName", this.sortOrderName);
        // console.log("_tableHeaderData>>", _tableHeaderData);
        this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    searchList(event) {
        this.searchTerm = event.target.value;
        // console.log("this.searchTerm", this.searchTerm);
        this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Search end
    // Referesh start
    onRefresh() {
        this.pageNo = 0;
        this.sortColumnName = "id";
        this.sortOrderName = "DESC";
        this.searchTerm = "";
        this.tableValueType = "0";
        // table data call
        this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Referesh end
    /*----------------Table list data end----------------*/
    // exportDoc start
    openorderExportModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('openProfilemodal ...........>>', _identifier);
            let orderCommentmodal;
            orderCommentmodal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
                cssClass: 'mymodalClass small profilemodal',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            orderCommentmodal.onDidDismiss()
                .then((getdata) => {
                // console.log("getdata",getdata);
                this.onRefresh();
            });
            return yield orderCommentmodal.present();
        });
    }
    // exportDoc end
    // ----------- destroy unsubscription start ---------
    ngOnDestroy() {
        if (this.tableListSubscribe !== undefined) {
            this.tableListSubscribe.unsubscribe();
        }
        if (this.permissionDataSubscribe !== undefined) {
            this.permissionDataSubscribe.unsubscribe();
        }
    }
};
OrderListPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
OrderListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-order-list",
        template: _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderListPage);



/***/ }),

/***/ 63246:
/*!***************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9957:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-list/order-list.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"order-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3 *ngIf=\"tableTitle != 'returnRequest' && tableTitle !='returnRefund'\">{{tableTitle}} Order List</h3>\r\n                          <h3 *ngIf=\"tableTitle == 'returnRequest' || tableTitle =='returnRefund'\">{{tableTitle =='returnRefund' ? 'Return/Refund' : 'Return Request'}} Order List</h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          Order Management\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Order List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"note-section\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                <h3 class=\"card-row\">Orders</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-primary card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('New')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon> new_releases </mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">New</p>\r\n                        <p *ngIf=\"order_countData?.New\"><b>{{order_countData?.New}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.New\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-Purple card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Orders')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>add_shopping_cart</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Orders</p>\r\n                        <p *ngIf=\"order_countData?.Orders\"><b>{{order_countData?.Orders}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Orders\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-info card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Packed')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>store</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Packed</p>\r\n                        <p *ngIf=\"order_countData?.Packed\"><b>{{order_countData?.Packed}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Packed\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-warning card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Shipped')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon> local_shipping</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Shipped</p>\r\n                        <p *ngIf=\"order_countData?.Shipped\"><b>{{order_countData?.Shipped}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Shipped\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-success card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Delivered')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_turned_in</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Delivered</p>\r\n                        <p *ngIf=\"order_countData?.Delivered\"><b>{{order_countData?.Delivered}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Delivered\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                <h3 class=\"card-row\">Approvals</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <!-- Return Request -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('returnRequest')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return Request</p>\r\n                        <p *ngIf=\"order_countData?.returnRequest\"><b>{{order_countData?.returnRequest}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.returnRequest\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Cancel Request -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Request for cancelation')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>cancel_presentation</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Cancel Request</p>\r\n                        <p *ngIf=\"order_countData?.requestForCancelation\"><b>{{order_countData?.requestForCancelation}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.requestForCancelation\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Return Rejected -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Return rejected by admin')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>sync_disabled</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return Request Rejected</p>\r\n                        <p ><b>{{tabeData?.returnRejectedByAdmin ? tabeData?.returnRejectedByAdmin :'0'}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- return request approve -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Return request approved')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>done</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return request approved</p>\r\n                        <p *ngIf=\"tableData?.returnRequestApproved\"><b>{{tableData?.returnRequestApproved}}</b> Products</p>\r\n                        <p *ngIf=\"!tableData?.returnRequestApproved\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n               <!-- Canceled -->\r\n               <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('cancelled')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>clear</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Canceled</p>\r\n                        <p *ngIf=\"order_countData?.Cancelled\"><b>{{order_countData?.Cancelled}}</b> Products</p>\r\n                        <p *ngIf=\"!order_countData?.Cancelled\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                <h3 class=\"card-row\">Return Process</h3>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>              \r\n              <!-- Product Shipped by user -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Product Shipped by user')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Product Shipped by user</p>\r\n                        <p *ngIf=\"tableData?.productShippedByUser\"><b>{{tableData?.productShippedByUser}}</b> Products</p>\r\n                        <p *ngIf=\"!tableData?.productShippedByUser\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Product received from user -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Product received from user')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>clear</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Product received from user</p>\r\n                        <p *ngIf=\"tableData?.productReceivedFromUser\"><b>{{tableData?.productReceivedFromUser}}</b> Products</p>\r\n                        <p *ngIf=\"!tableData?.productReceivedFromUser\"><b>0</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Return/Refund -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('returnRefund')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return/Refund</p>\r\n                        <p ><b>{{order_countData?.returnRefund ? order_countData?.returnRefund :'0'}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <!-- Return/Refund Rejected -->\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer order-cards\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('Rejected')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                            <mat-icon>assignment_return</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Return/Refund Rejected</p>\r\n                        <p ><b>{{order_countData?.Rejected ? order_countData?.Rejected :'0'}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n            {{tableTitle}}  order List\r\n            </div>\r\n            <div class=\"card-header-action\">\r\n              <ion-button class=\"custom-btn\" (click)=\"openorderExportModal('orderExportModal','','')\">\r\n                <mat-icon>file_upload</mat-icon>Export Doc\r\n              </ion-button>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                  <ion-item class=\"record\">\r\n                    <span class=\"text-black mr-1\">Records: </span>\r\n                    <mat-form-field  class=\"m-0\">\r\n                      <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                        <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                          <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                          <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n             </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th>                            \r\n                            <th *ngFor=\"let th of tableHeaderData\"  [hidden]=\"th.column_name =='createdOn' && tableTitle == 'cancelled' || th.column_name =='cancelationTime' && tableTitle !== 'cancelled'\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                <span>{{th.display_name}}</span>\r\n                                \r\n                                <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"\">\r\n                              <div class=\"justify-content-center\">\r\n                                Order Status\r\n                              </div>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\" [routerLink]=\"['/', 'order-products-list', item?.orderId,item?.productId]\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>\r\n                          <a [routerLink]=\"['/', 'order-products-list', item?.orderId,item?.productId]\" class=\"text-decoration-none\">{{item?.orderId}}</a>\r\n                        </td>\r\n                        <td>\r\n                          {{item?.invoiceId ? item?.invoiceId : 'N/A'}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.displayName}}\r\n                        </td>\r\n                        <td *ngIf=\"tableTitle !== 'cancelled'\">\r\n                          {{item?.createdOn}}\r\n                        </td>\r\n                        <td *ngIf=\"tableTitle == 'cancelled'\">\r\n                          {{item?.orderStatusDetails?.cancelOrderDetails?.cancelationTime}}\r\n                          {{item?.orderStatusDetails?.cancelFromUser?.dateTime | date:'dd MMM yyy'}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.mrp}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.discount ? item?.discount : '0'}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.salesPrice ? item?.salesPrice : 'N/A'}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.giftWrapAmount ? item?.giftWrapAmount : '0'}}\r\n                        </td>\r\n                        <td>\r\n                           {{item?.paymentData?.paymentMode ? item?.paymentData?.paymentMode : 'N/A'}}\r\n                        </td>\r\n                        <!-- <td>\r\n                          {{item?.paymentData?.paymentDetails?.razorpay_order_id}}\r\n                        </td> -->\r\n                        <td>\r\n                          {{item?.paymentData?.paymentDetails?.razorpay_payment_id ? item?.paymentData?.paymentDetails?.razorpay_payment_id : 'N/A'}}\r\n                        </td>\r\n                        <td class=\"ion-text-center\">\r\n                          <!-- <span class=\"status\" [ngClass]=\"{'success': item?.deliveryStatus == 'dispatch'}\" *ngIf=\"item?.deliveryStatus != 'cancel' && item?.paymentData && item?.paymentData?.paymentStatus != 'FALLED'\">\r\n                            {{item?.deliveryStatus}}\r\n                          </span>\r\n                          <span class=\"status success\" *ngIf=\"!item?.paymentData || item?.paymentData?.paymentStatus == 'FALLED'\">\r\n                            Order Not Conformed\r\n                          </span> -->\r\n                          <!-- <span class=\"status danger\"  *ngIf=\"item.deliveryStatus == 'cancel'\">\r\n                            {{item?.deliveryStatus}}\r\n                          </span>  -->\r\n                          <span class=\"status\" *ngIf=\"item?.orderItemStatus != 'returnRefund' && item?.orderItemStatus != 'Rejected' && item?.paymentData\" [ngClass]=\"{'success': item?.orderItemStatus == 'Delivered' ,'danger': item?.orderItemStatus == 'cancelled' || item?.orderItemStatus == 'Request for cancelation', 'warning': item?.orderItemStatus == 'New' || item?.orderItemStatus == 'Return request approved' || item?.orderItemStatus == 'Product received from user' || item?.orderItemStatus == 'Product shipped by user' || item?.orderItemStatus == 'Orders' || item?.orderItemStatus == 'Packed' || item?.orderItemStatus == 'Shipped' || item?.orderItemStatus == 'returnRequest' }\">\r\n                            {{item?.orderItemStatus == 'returnRequest' ? 'Return Request' : item?.orderItemStatus}}\r\n                          </span>\r\n                          <span class=\"status success\" *ngIf=\"item?.orderItemStatus == 'returnRefund' && item?.paymentData\">\r\n                            Return/Refund\r\n                          </span>\r\n                          <span class=\"status warning\" *ngIf=\"item?.orderItemStatus == 'Rejected' && item?.paymentData\">\r\n                            Return Rejected\r\n                          </span>\r\n                          <span class=\"status warning\" *ngIf=\"!item?.paymentData\">\r\n                            Order Not Confirmed\r\n                          </span>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_order-list_order-list_module_ts-es2015.js.map