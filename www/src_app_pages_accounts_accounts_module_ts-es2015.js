(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_accounts_accounts_module_ts"],{

/***/ 49457:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ 28015:
/*!***********************************************************!*\
  !*** ./src/app/pages/accounts/accounts-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageRoutingModule": function() { return /* binding */ AccountsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts.page */ 54296);




const routes = [
    {
        path: '',
        component: _accounts_page__WEBPACK_IMPORTED_MODULE_0__.AccountsPage
    },
];
let AccountsPageRoutingModule = class AccountsPageRoutingModule {
};
AccountsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountsPageRoutingModule);



/***/ }),

/***/ 63218:
/*!***************************************************!*\
  !*** ./src/app/pages/accounts/accounts.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPageModule": function() { return /* binding */ AccountsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounts-routing.module */ 28015);
/* harmony import */ var _accounts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page */ 54296);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AccountsPageModule = class AccountsPageModule {
};
AccountsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountsPageRoutingModule
        ],
        declarations: [_accounts_page__WEBPACK_IMPORTED_MODULE_1__.AccountsPage]
    })
], AccountsPageModule);



/***/ }),

/***/ 54296:
/*!*************************************************!*\
  !*** ./src/app/pages/accounts/accounts.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountsPage": function() { return /* binding */ AccountsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accounts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accounts.page.html */ 36479);
/* harmony import */ var _accounts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.page.scss */ 53267);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ 58167);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ 49457);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);













let AccountsPage = class AccountsPage {
    constructor(http, toastController, modalController, alertController, commonUtils, authService, router) {
        this.http = http;
        this.toastController = toastController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonUtils = commonUtils;
        this.authService = authService;
        this.router = router;
        this.noFiltter = false;
        this.showFilter = true;
        this.selectedYear = '';
        this.yearList = [];
        this.allmonthList = [
            { id: 1, name: 'January' },
            { id: 2, name: 'February' },
            { id: 3, name: 'March' },
            { id: 4, name: 'April' },
            { id: 5, name: 'May' },
            { id: 6, name: 'June' },
            { id: 7, name: 'July' },
            { id: 8, name: 'August' },
            { id: 9, name: 'September' },
            { id: 10, name: 'October' },
            { id: 11, name: 'November' },
            { id: 12, name: 'December' }
        ];
        this.monthList = [];
        this.startYear = '2022';
        this.endYear = '';
        this.settlement = '';
        this.selectedMonth = '';
        this.model = {};
        this.serviceCharge = '';
        this.designerReturn = '';
        this.govtCharge = '';
        this.order_status = '';
        this.ReturnStatus = '';
        this.designerId = '';
        this.Employees2 = 40;
        this.tableListData = [];
        this.itemcheckClick = false;
        this.checkedList = [];
        this.tableHeaderData = [
            {
                column_name: "order_details.order_id",
                display_name: "Order Id",
                sortingButtonName: ""
            },
            {
                column_name: "order_details.invoice_id",
                display_name: "User Invoice Id",
                sortingButtonName: ""
            },
            {
                column_name: "service_charge.designer_invoice_id",
                display_name: "Designer Invoice Id",
                sortingButtonName: ""
            },
            {
                column_name: "designer_details.display_name",
                display_name: "Display Name",
                sortingButtonName: ""
            },
            {
                column_name: "order_details.mrp",
                display_name: "Basic Amount",
                sortingButtonName: ""
            },
            {
                column_name: "order_details.discount",
                display_name: "discount",
                sortingButtonName: ""
            },
            {
                column_name: "order_details.hsn_amount",
                display_name: "GST  Amount",
                sortingButtonName: ""
            },
            {
                column_name: "order_details.giftWrapAmount",
                display_name: "GiftWrap Amount",
                sortingButtonName: ""
            },
            {
                column_name: "order_details.sales_price",
                display_name: "TOTAL Amount",
                sortingButtonName: ""
            },
            {
                column_name: "service_charge.total_tax",
                display_name: "DIVATT Charges",
                sortingButtonName: ""
            },
            {
                column_name: "designer_return_amount.hsn_amount",
                display_name: "GST Amount",
                sortingButtonName: ""
            },
            {
                column_name: "service_charge.tcs",
                display_name: "TCS",
                sortingButtonName: ""
            },
            {
                column_name: "designer_return_amount.net_payable_designer",
                display_name: "PAYABLE Amount",
                sortingButtonName: ""
            },
        ];
        this.isListLoading = false;
        this.sortColumnName = '_id';
        this.sortOrderName = '';
        this.deleteLoading = false;
        this.restoreLoading = false;
        /*----------------Table list data start----------------*/
        // Display records start
        this.displayRecord = 10;
        this.displayRecords = [
            { id: '1', displayValue: 10 },
            { id: '2', displayValue: 25 },
            { id: '3', displayValue: 50 },
            { id: '4', displayValue: 100 },
        ];
        // Sorting end
        // Search start
        this.searchTerm = '';
        // changeStatus end
        // ---------------- Click Delete Item start ---------------------
        this.deleteLodershow = false;
        this.alldeleteLoaderShow = false;
    }
    // Variables end
    ngOnInit() {
        // this.commonFunction();
    }
    ionViewWillEnter() {
        this.commonFunction();
    }
    commonFunction() {
        let currentDate = Date.now();
        this.currentDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD hh:mm:ss');
        /*Check permission status start*/
        this.authService.globalparamsData.subscribe(res => {
            // // console.log('res>>', res);
            if (res.authority == 'ADMIN') {
                this.permissionDataSubscribe = this.commonUtils.menuPermissionObservable.subscribe(data => {
                    if (data) {
                        // // console.log('menu>>', data);
                        // console.log('this.router.url>>', this.router.url);
                        let pageUrl = this.router.url.split("/");
                        // // console.log('pageUrl', pageUrl);
                        for (let item of data) {
                            if (item.modDetails.url == pageUrl[1]) {
                                if (item.modPrivs.list == true) {
                                    // // console.log('-----Permission Granted-----');
                                    this.pagePermission = item;
                                    // // console.log('this.pagePermission', this.pagePermission);
                                    this.setPageData();
                                    break;
                                }
                                else {
                                    // console.log('-------No Permission--------');
                                    this.router.navigateByUrl('/error');
                                }
                            }
                        }
                    }
                });
            }
            else {
                this.router.navigateByUrl('/error');
            }
        });
    }
    setPageData() {
        /*Check permission status end*/
        this.allselectModel = false;
        this.model.filter = true;
        // // console.log('this.model.filter', this.model.filter);
        this.getDesignerList();
        this.checkedList = [];
        this.endYear = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY');
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_2__().format('MMMM');
        this.model.year = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY'));
        this.model.month = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__().format('MM'));
        this.selectedMonth = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__().format('MM'));
        let day = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__().format('DD'));
        console.log("this.day.......", day);
        if (day < 16) {
            this.model.settlement = 'firstSettlement';
            this.settlement = 'firstSettlement';
        }
        else {
            this.model.settlement = 'secondSettlement';
            this.settlement = 'secondSettlement';
        }
        // // console.log("this.model.year.....", this.model.year);
        this.selectedYear = this.model.year;
        if (this.model.year == this.endYear) {
            for (let index = 0; index < 12; index++) {
                // // console.log(this.currentMonth, this.allmonthList[index].id);
                if (this.currentMonth == this.allmonthList[index].id) {
                    this.mounthCount = index;
                    break;
                }
                else {
                    // this.monthList.push(this.allmonthList[index]);
                    this.mounthCount = index;
                }
            }
            for (let index = 0; index < this.mounthCount + 1; index++) {
                this.monthList.push(this.allmonthList[index]);
            }
        }
        else {
            this.monthList = this.allmonthList;
        }
        // // console.log("moment", this.endYear, this.currentMonth, this.model.year, moment().format('YYYY'));
        var count;
        if (this.endYear > this.startYear || this.endYear == this.startYear) {
            count = parseInt(this.endYear) - parseInt(this.startYear) + 1;
            for (let index = 0; index < count; index++) {
                // // console.log("moment", count);
                this.yearList.push(parseInt(this.startYear) + index);
            }
        }
        else {
            this.yearList.push(this.startYear);
            // for (let index = 0; index < 100; index++) {
            //   // console.log("moment",count);  
            //   this.yearList.push(parseInt(this.startYear) + index);
            // }
        }
        this.listing_url = 'account/list';
        this.onRefresh();
        // delete api
        this.deleteApi = 'category/delete';
        /*Check permission status end*/
    }
    displayRecordChange(_record) {
        // // console.log('_record', _record);
        this.tableListData = [];
        this.displayRecord = _record;
        this.pageNo = 0;
        this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Display records end
    applyFilter(event) {
        // // console.log(event);
        this.onRefresh();
    }
    // List data start
    onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
        var item = { orderId: '', basicAmount: '', gstAmount: '', totalAmount: '', divattCharges: '', tcs: '', payableAmount: '', pendingAmount: '' };
        this.isListLoading = true;
        let api;
        this.tableListData = [];
        if (this.model.filter) {
            api = _listUrl + '?page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm + '&designerReturn=' + this.designerReturn + '&designerId=' + this.designerId + '&serviceCharge=' + this.serviceCharge + '&govtCharge=' + this.govtCharge + '&ReturnStatus=' + this.ReturnStatus + '&year=' + this.selectedYear + '&month=' + this.selectedMonth + '&settlement=' + this.settlement;
        }
        else {
            api = _listUrl + '?page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm;
        }
        this.tableListSubscribe = this.http.get(api).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97, _98, _99, _100, _101, _102, _103, _104, _105, _106, _107, _108, _109, _110, _111, _112, _113, _114, _115, _116, _117, _118, _119, _120, _121, _122, _123, _124, _125, _126;
            this.isListLoading = false;
            // // console.log('res', res);
            this.tableData = res;
            // this.tableListData = res.data;
            for (let i = 0; i < res.data.length; i++) {
                // item =;
                if (((_b = (_a = res.data[i]) === null || _a === void 0 ? void 0 : _a.order_details[0]) === null || _b === void 0 ? void 0 : _b.order_status) == 'DELIVERED') {
                    var designer_return_amount = {
                        'orderId': (_d = (_c = res.data[i]) === null || _c === void 0 ? void 0 : _c.order_details[0]) === null || _d === void 0 ? void 0 : _d.order_id,
                        'basicAmount': (_f = (_e = res.data[i]) === null || _e === void 0 ? void 0 : _e.order_details[0]) === null || _f === void 0 ? void 0 : _f.mrp,
                        'basic_amount': (_h = (_g = res.data[i]) === null || _g === void 0 ? void 0 : _g.designer_return_amount[0]) === null || _h === void 0 ? void 0 : _h.basic_amount,
                        'hsn_amount': (_k = (_j = res.data[i]) === null || _j === void 0 ? void 0 : _j.order_details[0]) === null || _k === void 0 ? void 0 : _k.hsn_amount,
                        'hsn_sgst': (_m = (_l = res.data[i]) === null || _l === void 0 ? void 0 : _l.order_details[0]) === null || _m === void 0 ? void 0 : _m.hsn_sgst,
                        'hsn_igst': (_p = (_o = res.data[i]) === null || _o === void 0 ? void 0 : _o.order_details[0]) === null || _p === void 0 ? void 0 : _p.hsn_igst,
                        'totalAmount': (_r = (_q = res.data[i]) === null || _q === void 0 ? void 0 : _q.order_details[0]) === null || _r === void 0 ? void 0 : _r.sales_price,
                        'divattCharges': (_s = res.data[i]) === null || _s === void 0 ? void 0 : _s.service_charge.total_tax,
                        'tcs': (_t = res.data[i]) === null || _t === void 0 ? void 0 : _t.service_charge.tcs,
                        'discount': (_v = (_u = res.data[i]) === null || _u === void 0 ? void 0 : _u.order_details[0]) === null || _v === void 0 ? void 0 : _v.discount,
                        'net_payable_designer': (_x = (_w = res.data[i]) === null || _w === void 0 ? void 0 : _w.designer_return_amount[0]) === null || _x === void 0 ? void 0 : _x.net_payable_designer,
                        'status': (_z = (_y = res.data[i]) === null || _y === void 0 ? void 0 : _y.designer_return_amount[0]) === null || _z === void 0 ? void 0 : _z.status,
                    };
                    var govt_charge = {
                        'designer_invoice_id': (_1 = (_0 = res.data[i]) === null || _0 === void 0 ? void 0 : _0.govt_charge[0]) === null || _1 === void 0 ? void 0 : _1.designer_invoice_id,
                        'cgst': (_3 = (_2 = res.data[i]) === null || _2 === void 0 ? void 0 : _2.govt_charge[0]) === null || _3 === void 0 ? void 0 : _3.cgst,
                        'datetime': (_5 = (_4 = res.data[i]) === null || _4 === void 0 ? void 0 : _4.govt_charge[0]) === null || _5 === void 0 ? void 0 : _5.datetime,
                        'fee': (_7 = (_6 = res.data[i]) === null || _6 === void 0 ? void 0 : _6.govt_charge[0]) === null || _7 === void 0 ? void 0 : _7.fee,
                        'igst': (_9 = (_8 = res.data[i]) === null || _8 === void 0 ? void 0 : _8.govt_charge[0]) === null || _9 === void 0 ? void 0 : _9.igst,
                        'rate': (_11 = (_10 = res.data[i]) === null || _10 === void 0 ? void 0 : _10.govt_charge[0]) === null || _11 === void 0 ? void 0 : _11.rate,
                        'sgst': (_13 = (_12 = res.data[i]) === null || _12 === void 0 ? void 0 : _12.govt_charge[0]) === null || _13 === void 0 ? void 0 : _13.sgst,
                        'total_amount': (_15 = (_14 = res.data[i]) === null || _14 === void 0 ? void 0 : _14.govt_charge[0]) === null || _15 === void 0 ? void 0 : _15.total_amount,
                        'remarks': (_17 = (_16 = res.data[i]) === null || _16 === void 0 ? void 0 : _16.govt_charge[0]) === null || _17 === void 0 ? void 0 : _17.remarks,
                        'tcs': (_19 = (_18 = res.data[i]) === null || _18 === void 0 ? void 0 : _18.govt_charge[0]) === null || _19 === void 0 ? void 0 : _19.tcs,
                        'tcs_rate': (_21 = (_20 = res.data[i]) === null || _20 === void 0 ? void 0 : _20.govt_charge[0]) === null || _21 === void 0 ? void 0 : _21.tcs_rate,
                        'status': (_23 = (_22 = res.data[i]) === null || _22 === void 0 ? void 0 : _22.govt_charge[0]) === null || _23 === void 0 ? void 0 : _23.status,
                        'total_tax': (_25 = (_24 = res.data[i]) === null || _24 === void 0 ? void 0 : _24.govt_charge[0]) === null || _25 === void 0 ? void 0 : _25.total_tax,
                        'units': (_27 = (_26 = res.data[i]) === null || _26 === void 0 ? void 0 : _26.govt_charge[0]) === null || _27 === void 0 ? void 0 : _27.units,
                        'updated_by': (_29 = (_28 = res.data[i]) === null || _28 === void 0 ? void 0 : _28.govt_charge[0]) === null || _29 === void 0 ? void 0 : _29.updated_by,
                        'updated_datetime': (_31 = (_30 = res.data[i]) === null || _30 === void 0 ? void 0 : _30.govt_charge[0]) === null || _31 === void 0 ? void 0 : _31.updated_datetime,
                    };
                    var service_charge = {
                        'designer_invoice_id': (_33 = (_32 = res.data[i]) === null || _32 === void 0 ? void 0 : _32.service_charge) === null || _33 === void 0 ? void 0 : _33.designer_invoice_id,
                        'cgst': (_35 = (_34 = res.data[i]) === null || _34 === void 0 ? void 0 : _34.service_charge) === null || _35 === void 0 ? void 0 : _35.cgst,
                        'datetime': (_37 = (_36 = res.data[i]) === null || _36 === void 0 ? void 0 : _36.service_charge) === null || _37 === void 0 ? void 0 : _37.datetime,
                        'fee': (_39 = (_38 = res.data[i]) === null || _38 === void 0 ? void 0 : _38.service_charge) === null || _39 === void 0 ? void 0 : _39.fee,
                        'igst': (_41 = (_40 = res.data[i]) === null || _40 === void 0 ? void 0 : _40.service_charge) === null || _41 === void 0 ? void 0 : _41.igst,
                        'rate': (_43 = (_42 = res.data[i]) === null || _42 === void 0 ? void 0 : _42.service_charge) === null || _43 === void 0 ? void 0 : _43.rate,
                        'sgst': (_45 = (_44 = res.data[i]) === null || _44 === void 0 ? void 0 : _44.service_charge) === null || _45 === void 0 ? void 0 : _45.sgst,
                        'total_amount': (_47 = (_46 = res.data[i]) === null || _46 === void 0 ? void 0 : _46.service_charge) === null || _47 === void 0 ? void 0 : _47.total_amount,
                        'remarks': (_49 = (_48 = res.data[i]) === null || _48 === void 0 ? void 0 : _48.service_charge) === null || _49 === void 0 ? void 0 : _49.remarks,
                        'tcs': (_51 = (_50 = res.data[i]) === null || _50 === void 0 ? void 0 : _50.service_charge) === null || _51 === void 0 ? void 0 : _51.tcs,
                        'tcs_rate': (_53 = (_52 = res.data[i]) === null || _52 === void 0 ? void 0 : _52.service_charge) === null || _53 === void 0 ? void 0 : _53.tcs_rate,
                        'status': (_55 = (_54 = res.data[i]) === null || _54 === void 0 ? void 0 : _54.service_charge) === null || _55 === void 0 ? void 0 : _55.status,
                        'total_tax': (_57 = (_56 = res.data[i]) === null || _56 === void 0 ? void 0 : _56.service_charge) === null || _57 === void 0 ? void 0 : _57.total_tax,
                        'units': (_59 = (_58 = res.data[i]) === null || _58 === void 0 ? void 0 : _58.service_charge) === null || _59 === void 0 ? void 0 : _59.units,
                        'updated_by': (_61 = (_60 = res.data[i]) === null || _60 === void 0 ? void 0 : _60.service_charge) === null || _61 === void 0 ? void 0 : _61.updated_by,
                        'updated_datetime': (_63 = (_62 = res.data[i]) === null || _62 === void 0 ? void 0 : _62.service_charge) === null || _63 === void 0 ? void 0 : _63.updated_datetime,
                    };
                    var order_details = {
                        'order_invoice_id': (_65 = (_64 = res.data[i]) === null || _64 === void 0 ? void 0 : _64.order_details[0]) === null || _65 === void 0 ? void 0 : _65.invoice_id,
                        'hsn_cgst': (_67 = (_66 = res.data[i]) === null || _66 === void 0 ? void 0 : _66.order_details[0]) === null || _67 === void 0 ? void 0 : _67.hsn_cgst,
                        'datetime': (_69 = (_68 = res.data[i]) === null || _68 === void 0 ? void 0 : _68.order_details[0]) === null || _69 === void 0 ? void 0 : _69.datetime,
                        'delivery_datetime': (_71 = (_70 = res.data[i]) === null || _70 === void 0 ? void 0 : _70.order_details[0]) === null || _71 === void 0 ? void 0 : _71.delivery_datetime,
                        'hsn_amount': (_73 = (_72 = res.data[i]) === null || _72 === void 0 ? void 0 : _72.order_details[0]) === null || _73 === void 0 ? void 0 : _73.hsn_amount,
                        'giftWrapAmount': (_75 = (_74 = res.data[i]) === null || _74 === void 0 ? void 0 : _74.order_details[0]) === null || _75 === void 0 ? void 0 : _75.giftWrapAmount,
                        'hsn_igst': (_77 = (_76 = res.data[i]) === null || _76 === void 0 ? void 0 : _76.order_details[0]) === null || _77 === void 0 ? void 0 : _77.hsn_igst,
                        'hsn_rate': (_79 = (_78 = res.data[i]) === null || _78 === void 0 ? void 0 : _78.order_details[0]) === null || _79 === void 0 ? void 0 : _79.hsn_rate,
                        'hsn_sgst': (_81 = (_80 = res.data[i]) === null || _80 === void 0 ? void 0 : _80.order_details[0]) === null || _81 === void 0 ? void 0 : _81.hsn_sgst,
                        'mrp': (_83 = (_82 = res.data[i]) === null || _82 === void 0 ? void 0 : _82.order_details[0]) === null || _83 === void 0 ? void 0 : _83.mrp,
                        'remarks': (_85 = (_84 = res.data[i]) === null || _84 === void 0 ? void 0 : _84.order_details[0]) === null || _85 === void 0 ? void 0 : _85.remarks,
                        'order_id': (_87 = (_86 = res.data[i]) === null || _86 === void 0 ? void 0 : _86.order_details[0]) === null || _87 === void 0 ? void 0 : _87.order_id,
                        'tcs_rate': (_89 = (_88 = res.data[i]) === null || _88 === void 0 ? void 0 : _88.order_details[0]) === null || _89 === void 0 ? void 0 : _89.tcs_rate,
                        'order_status': (_91 = (_90 = res.data[i]) === null || _90 === void 0 ? void 0 : _90.order_details[0]) === null || _91 === void 0 ? void 0 : _91.order_status,
                        'total_tax': (_93 = (_92 = res.data[i]) === null || _92 === void 0 ? void 0 : _92.order_details[0]) === null || _93 === void 0 ? void 0 : _93.total_tax,
                        'units': (_95 = (_94 = res.data[i]) === null || _94 === void 0 ? void 0 : _94.order_details[0]) === null || _95 === void 0 ? void 0 : _95.units,
                        'payment_mode': (_97 = (_96 = res.data[i]) === null || _96 === void 0 ? void 0 : _96.order_details[0]) === null || _97 === void 0 ? void 0 : _97.payment_mode,
                        'product_id': (_99 = (_98 = res.data[i]) === null || _98 === void 0 ? void 0 : _98.order_details[0]) === null || _99 === void 0 ? void 0 : _99.product_id,
                        'product_sku': (_101 = (_100 = res.data[i]) === null || _100 === void 0 ? void 0 : _100.order_details[0]) === null || _101 === void 0 ? void 0 : _101.product_sku,
                        'sales_price': (_103 = (_102 = res.data[i]) === null || _102 === void 0 ? void 0 : _102.order_details[0]) === null || _103 === void 0 ? void 0 : _103.sales_price,
                        'size': (_105 = (_104 = res.data[i]) === null || _104 === void 0 ? void 0 : _104.order_details[0]) === null || _105 === void 0 ? void 0 : _105.size,
                        'tax_type': (_107 = (_106 = res.data[i]) === null || _106 === void 0 ? void 0 : _106.order_details[0]) === null || _107 === void 0 ? void 0 : _107.tax_type,
                        'user_id': (_109 = (_108 = res.data[i]) === null || _108 === void 0 ? void 0 : _108.order_details[0]) === null || _109 === void 0 ? void 0 : _109.user_id,
                        'discount': (_111 = (_110 = res.data[i]) === null || _110 === void 0 ? void 0 : _110.order_details[0]) === null || _111 === void 0 ? void 0 : _111.discount,
                        'designer_id': (_113 = (_112 = res.data[i]) === null || _112 === void 0 ? void 0 : _112.order_details[0]) === null || _113 === void 0 ? void 0 : _113.designer_id,
                        'image': (_115 = (_114 = res.data[i]) === null || _114 === void 0 ? void 0 : _114.order_details[0]) === null || _115 === void 0 ? void 0 : _115.image,
                    };
                    var designer_details = {
                        designerName: (_117 = (_116 = res.data[i]) === null || _116 === void 0 ? void 0 : _116.designer_details) === null || _117 === void 0 ? void 0 : _117.designer_name,
                        display_name: (_119 = (_118 = res.data[i]) === null || _118 === void 0 ? void 0 : _118.designer_details) === null || _119 === void 0 ? void 0 : _119.display_name,
                        designer_id: (_121 = (_120 = res.data[i]) === null || _120 === void 0 ? void 0 : _120.designer_details) === null || _121 === void 0 ? void 0 : _121.designer_id,
                    };
                    // // console.log("res.data[i]", res.data[i]);
                    let _id, id;
                    if ((_122 = res.data[i]) === null || _122 === void 0 ? void 0 : _122._id) {
                        id = (_123 = res.data[i]) === null || _123 === void 0 ? void 0 : _123._id;
                        _id = (_124 = res.data[i]) === null || _124 === void 0 ? void 0 : _124._id;
                    }
                    else {
                        id = (_125 = res.data[i]) === null || _125 === void 0 ? void 0 : _125.id;
                        _id = (_126 = res.data[i]) === null || _126 === void 0 ? void 0 : _126.id;
                    }
                    this.tableListData.push({ _id, id, designer_return_amount, govt_charge, service_charge, order_details, designer_details });
                }
            }
            // // console.log("tableListData", this.tableListData);
            //---------  check item show start ----------
            // if (this.tableListData && this.checkedList) {
            //   for (let i = 0; i < this.tableListData.length; i++) {
            //     for (let j = 0; j < this.checkedList.length; j++) {
            //       if (this.checkedList[j].id == this.tableListData[i].id) {
            //         this.tableListData[i].isSelected = true;
            //       }
            //     }
            //   }
            // }
        }, errRes => {
            // this.selectLoadingDepend = false;
            this.isListLoading = false;
        }, () => {
            // // console.log("In complete");
        });
    }
    // List data end
    // Pagination start
    setPage(page) {
        // // console.log('page', page);
        // // console.log("page");
        this.tableListData = [];
        this.pageNo = page;
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Pagination end
    selectFiltter(event, identifier) {
        // // console.log("selectFiltter......", event?.value, identifier);
        if (identifier == 'year') {
            this.monthList = [];
            this.model.month = '';
            this.selectedYear = event === null || event === void 0 ? void 0 : event.value;
            // console.log(this.selectedYear, this.endYear);
            if (this.selectedYear == this.endYear) {
                for (let index = 0; index < 12; index++) {
                    // console.log(this.currentMonth, this.allmonthList[index].id);
                    if (this.currentMonth == this.allmonthList[index].id) {
                        this.mounthCount = index;
                        break;
                    }
                    else {
                        // this.monthList.push(this.allmonthList[index]);
                        this.mounthCount = index;
                    }
                }
                for (let index = 0; index < this.mounthCount + 1; index++) {
                    this.monthList.push(this.allmonthList[index]);
                }
            }
            else {
                this.monthList = this.allmonthList;
            }
        }
        else if (identifier == 'month') {
            this.selectedMonth = event === null || event === void 0 ? void 0 : event.value;
            this.model.settlement = '';
        }
        else if (identifier == 'settlement') {
            this.settlement = event === null || event === void 0 ? void 0 : event.value;
        }
        else if (identifier == 'designerReturn') {
            this.designerReturn = event === null || event === void 0 ? void 0 : event.value;
        }
        else if (identifier == 'serviceCharge') {
            this.serviceCharge = event === null || event === void 0 ? void 0 : event.value;
        }
        else if (identifier == 'govtCharge') {
            this.govtCharge = event === null || event === void 0 ? void 0 : event.value;
        }
        else if (identifier == 'designerName') {
            if (event == null) {
                this.designerId = '';
            }
            else {
                this.designerId = event;
            }
        }
        // console.log(event);
        this.onRefresh();
    }
    // Sorting start
    isSortTableHeader(_tableHeaderData, _headerItem) {
        this.tableListData = [];
        // console.log('_tableHeaderData', _tableHeaderData);
        // console.log('_headerItem', _headerItem);
        // all field reset first
        _tableHeaderData.forEach((val) => {
            val.sortingButtonName = '';
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
        // console.log('this.sortColumnName', this.sortColumnName);
        // console.log('this.sortOrderName', this.sortOrderName);
        // console.log('_tableHeaderData>>', _tableHeaderData);
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    searchList(event) {
        this.tableListData = [];
        this.searchTerm = event.target.value;
        // console.log('this.searchTerm', this.searchTerm);
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Search end
    // Referesh start
    onRefresh() {
        this.tableListData = [];
        this.pageNo = 0;
        this.sortColumnName = '_id';
        this.sortOrderName = 'DESC';
        this.searchTerm = '';
        this.tableValueType = '0';
        // table data call
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Referesh end
    // Delete start
    deleteData(_id) {
        // console.log('id>>', _id);
        let sentValues = { 'id': _id };
        this.deleteLoading = true;
        this.deleteDataSubscribe = this.http.put(this.deleteApi, sentValues).subscribe((res) => {
            this.deleteLoading = false;
            // // console.log("Delete data  res >", res.return_data);
            if (res.status == 200) {
                this.commonUtils.presentToast('success', res.message);
                this.onRefresh();
            }
            else {
                this.commonUtils.presentToast('error', res.message);
            }
        }, errRes => {
            // this.selectLoadingDepend = false;
            this.commonUtils.presentToast('error', errRes.error.message);
            this.deleteLoading = false;
        });
    }
    // Delete end
    /*----------------Table list data end----------------*/
    // Delete aleart start
    presentAlert(_identifier, _id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let messages, headers;
            if (_identifier == 'delete') {
                headers = "Delete";
                messages = "Are you sure want to delete this category?";
            }
            const alert = yield this.alertController.create({
                cssClass: 'aleart-popupBox',
                header: headers,
                message: messages,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'popup-cancel-btn',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        cssClass: 'popup-ok-btn',
                        handler: () => {
                            // console.log('Confirm Okay');
                            // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);
                            if (_identifier == 'delete') {
                                this.deleteData(_id);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Delete aleart end
    presentToast(_msg, _type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: _msg,
                duration: 2000,
                cssClass: "my-tost-custom-class" + _type,
            });
            toast.present();
        });
    }
    // changeStatus start
    changeStatus(_identifier, item) {
        var _a, _b;
        // console.log(item, this.tableData.data);
        var _items;
        var data = {};
        for (let i = 0; i < this.tableData.data.length; i++) {
            if (((_a = this.tableData.data[i]) === null || _a === void 0 ? void 0 : _a._id) == item || ((_b = this.tableData.data[i]) === null || _b === void 0 ? void 0 : _b.id) == item) {
                data = this.tableData.data[i];
            }
        }
        this.openAccountStatusModal(_identifier, data, _items);
    }
    openAccountStatusModal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('openAccountStatusModal ...........>>', _identifier);
            let profile_modal;
            profile_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage,
                cssClass: 'mymodalClass small openProductComment',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            profile_modal.onDidDismiss()
                .then((getdata) => {
                // console.log('getdata >>>>>>>>>>>', getdata);
                this.onRefresh();
            });
            return yield profile_modal.present();
        });
    }
    onClickDeleteItem(_identifire, _item, _items, _index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'aleart-popupBox',
                header: 'Delete',
                message: 'Do you really want to delete selected category?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'popup-cancel-btn',
                        handler: (blah) => {
                            // // console.log('Confirm Cancel: blah');
                        }
                    },
                    {
                        text: 'Ok',
                        cssClass: 'popup-ok-btn',
                        handler: () => {
                            // ------------ single item delete start ------------
                            if (_identifire == 'single') {
                                // console.log('_item', _item);
                                let sentValues = { 'id': _item.id };
                                _item.deleteLodershow = true;
                                this.deleteDataSubscribe = this.http.put("category/delete", sentValues).subscribe((res) => {
                                    _item.deleteLodershow = false;
                                    // console.log("Edit data  res >", res.return_data);
                                    if (res.status == 200) {
                                        _items.splice(_index, 1);
                                        this.commonUtils.presentToast('success', res.return_message);
                                        if (_items.length == 0) {
                                            this.allselectModel = false;
                                        }
                                        this.commonUtils.presentToast('success', res.message);
                                        this.onRefresh();
                                    }
                                    else {
                                        this.commonUtils.presentToast('error', res.message);
                                    }
                                }, errRes => {
                                    // this.selectLoadingDepend = false;
                                    this.commonUtils.presentToast('error', errRes.error.message);
                                    _item.deleteLodershow = false;
                                });
                                // ------------ single item delete end ------------
                            }
                            else {
                                let checkItemIdArray = [];
                                if (this.checkedList) {
                                    this.checkedList.forEach(element => {
                                        checkItemIdArray.push(element.id);
                                    });
                                }
                                if (_items) {
                                    _items.forEach(element => {
                                        this.checkedList.forEach(element1 => {
                                            if (element.id == element1.id) {
                                                element.deleteLodershow = true; //loader show
                                                this.alldeleteLoaderShow = true;
                                            }
                                        });
                                    });
                                }
                                this.deleteDataSubscribe = this.http.put('category/muldelete', checkItemIdArray).subscribe((res) => {
                                    if (res.status == 200) {
                                        if (_items) {
                                            for (let i = 0; i < _items.length; i++) {
                                                for (let j = 0; j < this.checkedList.length; j++) {
                                                    if (_items[i].id == this.checkedList[j].id) {
                                                        // _items.splice(i, i);
                                                        this.checkedList = [];
                                                        // _items.splice(_items.indexOf(_items[i]), 1);
                                                        this.deleteLodershow = false; //loader hide
                                                        this.alldeleteLoaderShow = false;
                                                        // // console.log('delete items >>', _items);
                                                        // // console.log('delete this.checkedList >>', this.checkedList);
                                                        this.allselectModel = false;
                                                    }
                                                }
                                            }
                                            ;
                                            if (_items.length == 0) {
                                                this.allselectModel = false;
                                                this.checkedList = [];
                                                checkItemIdArray = [];
                                            }
                                        }
                                        this.commonUtils.presentToast('success', res.message);
                                        this.onRefresh();
                                    }
                                    else {
                                        this.commonUtils.presentToast('error', res.message);
                                        this.alldeleteLoaderShow = false;
                                    }
                                }, errRes => {
                                    this.commonUtils.presentToast('error', errRes.error.message);
                                    this.alldeleteLoaderShow = false;
                                    _items.forEach(element => {
                                        this.checkedList.forEach(element1 => {
                                            if (element.id == element1.id) {
                                                element.deleteLodershow = false;
                                                this.alldeleteLoaderShow = false;
                                            }
                                        });
                                    });
                                });
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Click Delete Item end
    Check(e) {
        // console.log("Val", e);
    }
    getDesignerList() {
        var api = "designer/list?limit=0&profileStatus=COMPLETED", designerList = [];
        this.http.get(api).subscribe((res) => {
            var _a, _b, _c, _d;
            for (let i = 0; i < res.data.length; i++) {
                designerList.push({ "id": (_a = res === null || res === void 0 ? void 0 : res.data[i]) === null || _a === void 0 ? void 0 : _a.dId, "name": (_d = (_c = (_b = res === null || res === void 0 ? void 0 : res.data[i]) === null || _b === void 0 ? void 0 : _b.designerProfileEntity) === null || _c === void 0 ? void 0 : _c.designerProfile) === null || _d === void 0 ? void 0 : _d.displayName });
                // this.filteredDesignerList.push(res?.data[i]?.designerProfileEntity?.designerProfile?.displayName);
            }
            this.designerList = designerList;
            // console.log("designerList", this.designerList, designerList, res.data);
        }, (error) => {
        });
        // console.log("designerList", this.designerList);
    }
    // public filteredDesignerList = this.designerList.slice();
    genarateExcle() {
        var url = 'account/excelReport?designerReturn=' + this.designerReturn + '&serviceCharge=' + this.serviceCharge + '&govtCharge=' + this.govtCharge + '&order_status=' + this.order_status + '&ReturnStatus=' + this.ReturnStatus + '&settlement=' + this.settlement + '&year=' + this.selectedYear + '&month=' + this.selectedMonth + '&designerId=' + this.designerId;
        this.http.get(url, { responseType: 'blob' }).subscribe(data => {
            const file = new File([data], "Divatt-payments-report-" + this.currentDateTime + '.xlsx', { type: 'application/vnd.ms-excel' });
            file_saver__WEBPACK_IMPORTED_MODULE_7__.saveAs(file);
        }, (error) => {
        });
    }
    genaratePDF(order, identifier) {
        var _a, _b;
        if (identifier == 'orderinvoice') {
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl + "/userOrder/getOrderSummary/" + order;
            window.open(url, "_blank");
        }
        else {
            let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiUrl + "/account/getDesignerInvoice/" + ((_a = order === null || order === void 0 ? void 0 : order.designer_return_amount) === null || _a === void 0 ? void 0 : _a.orderId) + "/" + ((_b = order === null || order === void 0 ? void 0 : order.designer_details) === null || _b === void 0 ? void 0 : _b.designer_id);
            window.open(url, "_blank");
        }
    }
    // ----------- destroy unsubscription start ---------
    ngOnDestroy() {
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
};
AccountsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
AccountsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-accounts',
        template: _raw_loader_accounts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accounts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountsPage);



/***/ }),

/***/ 53267:
/*!***************************************************!*\
  !*** ./src/app/pages/accounts/accounts.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter_row {\n  height: auto;\n  opacity: 1;\n  transition: 0.1s ease-in-out;\n}\n\n.filter_row.hide {\n  opacity: 0;\n  height: 0;\n  visibility: hidden;\n}\n\n.filter_row.disabled {\n  opacity: 0.7;\n}\n\n@media screen and (max-width: 576px) {\n  .col-xs-8 {\n    width: 80%;\n  }\n\n  .col-xs-4 {\n    width: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFFQTtFQUVJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUVJLFlBQUE7QUFESjs7QUFHQTtFQUVJO0lBRUksVUFBQTtFQUZOOztFQUlFO0lBRUksVUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoiYWNjb3VudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlcl9yb3dcclxue1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmZpbHRlcl9yb3cuaGlkZVxyXG57XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLy8gdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4uZmlsdGVyX3Jvdy5kaXNhYmxlZFxyXG57XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgXHJcbiAgICAuY29sLXhzLThcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmNvbC14cy00XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 36479:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/accounts.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"payments\">\r\n    <div class=\"page-body\">\r\n        <div class=\"page-wrapper\">\r\n          <div class=\"table-listing account-page\">\r\n            <div class=\"note-section\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                            <div class=\"note-item small-shadow note-box-info card-outer\">\r\n                                <div class=\"card card-box\" matRipple>\r\n                                    <div class=\"top\">\r\n                                        <div class=\"icon\">\r\n                                            <mat-icon>attach_money</mat-icon>\r\n                                        </div>\r\n                                        <div class=\"text\">Basic Amount</div>\r\n                                    </div>\r\n                                    <div class=\"middle\">\r\n                                        <!-- <mat-icon style=\"color: #F64545\">arrow_downward</mat-icon> -->\r\n                                        <div>₹ {{tableData?.basicAmount}}</div>\r\n                                    </div>\r\n                                    <!-- <div class=\"bottom\"><b>+36%</b> from last month</div> -->\r\n                                </div>\r\n                            </div>             \r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                            <div class=\"note-item small-shadow note-box-Purple card-outer\">\r\n                                <div class=\"card card-box\" matRipple>\r\n                                    <div class=\"top\">\r\n                                        <div class=\"icon\">\r\n                                            <mat-icon>credit_card</mat-icon>\r\n                                        </div>\r\n                                        <div class=\"text\">Product GST</div>\r\n                                    </div>\r\n                                    <div class=\"middle\">\r\n                                        <!-- <mat-icon style=\"color: #F4772E;\">arrow_upward</mat-icon> -->\r\n                                        <div>₹ {{tableData?.gstAmount}}</div>\r\n                                    </div>\r\n                                    <!-- <div class=\"bottom\"><b>+65%</b> from last month</div> -->\r\n                                </div>\r\n                            </div>             \r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                          <div class=\"note-item small-shadow note-box-info card-outer\">\r\n                              <div class=\"card card-box\" matRipple>\r\n                                  <div class=\"top\">\r\n                                      <div class=\"icon\">\r\n                                          <mat-icon>attach_money</mat-icon>\r\n                                      </div>\r\n                                      <div class=\"text\">Giftwrap Amount</div>\r\n                                  </div>\r\n                                  <div class=\"middle\">\r\n\r\n                                      <div>₹ {{tableData?.giftWrapAmount}}</div>\r\n                                      <!-- <div>₹ 0.00</div> -->\r\n                                  </div>\r\n                                  <!-- <div class=\"bottom\"><b>+36%</b> from last month</div> -->\r\n                              </div>\r\n                          </div>             \r\n                      </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                            <div class=\"note-item small-shadow note-box-danger card-outer\">\r\n                                <div class=\"card card-box\" matRipple>\r\n                                    <div class=\"top\">\r\n                                        <div class=\"icon\">\r\n                                            <mat-icon>paid</mat-icon>\r\n                                        </div>\r\n                                        <div class=\"text\">TOTAL AMOUNT</div>\r\n                                    </div>\r\n                                    <div class=\"middle\">\r\n                                        <!-- <mat-icon style=\"color: #59CA44;\">arrow_downward</mat-icon> -->\r\n                                        <div>₹ {{tableData?.totalAmount}}</div>\r\n                                    </div>\r\n                                    <!-- <div class=\"bottom\"><b>+22%</b> from last month</div> -->\r\n                                </div>\r\n                            </div>             \r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                          <div class=\"note-item small-shadow note-box-primary card-outer\">\r\n                              <div class=\"card card-box\" matRipple>\r\n                                  <div class=\"top\">\r\n                                      <div class=\"icon\">\r\n                                          <mat-icon>credit_card</mat-icon>\r\n                                      </div>\r\n                                      <div class=\"text\">DIVATT CHARGES</div>\r\n                                  </div>\r\n                                  <div class=\"middle\">\r\n                                      <!-- <mat-icon style=\"color: #F64545\">arrow_downward</mat-icon> -->\r\n                                      <div>₹ {{tableData?.totalServiceFee}}</div>\r\n                                  </div>\r\n                                  <!-- <div class=\"bottom\"><b>+36%</b> from last month</div> -->\r\n                              </div>\r\n                          </div>             \r\n                      </ion-col>\r\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                          <div class=\"note-item small-shadow note-box-success card-outer\">\r\n                              <div class=\"card card-box\" matRipple>\r\n                                  <div class=\"top\">\r\n                                      <div class=\"icon\">\r\n                                          <mat-icon>credit_card</mat-icon>\r\n                                      </div>\r\n                                      <div class=\"text\">DIVATT GST</div>\r\n                                  </div>\r\n                                  <div class=\"middle\">\r\n                                      <!-- <mat-icon style=\"color: #F4772E;\">arrow_upward</mat-icon> -->\r\n                                      <div>₹ {{tableData?.servicGst}}</div>\r\n                                  </div>\r\n                                  <!-- <div class=\"bottom\"><b>+65%</b> from last month</div> -->\r\n                              </div>\r\n                          </div>             \r\n                      </ion-col>\r\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                          <div class=\"note-item small-shadow note-box-danger card-outer\">\r\n                              <div class=\"card card-box\" matRipple>\r\n                                  <div class=\"top\">\r\n                                      <div class=\"icon\">\r\n                                          <mat-icon>credit_card</mat-icon>\r\n                                      </div>\r\n                                      <div class=\"text\">TCS</div>\r\n                                  </div>\r\n                                  <div class=\"middle\">\r\n                                      <!-- <mat-icon style=\"color: #59CA44;\">arrow_downward</mat-icon> -->\r\n                                      <div>₹ {{tableData?.totalTcs}}</div>\r\n                                  </div>\r\n                                  <!-- <div class=\"bottom\"><b>+22%</b> from last month</div> -->\r\n                              </div>\r\n                          </div>             \r\n                      </ion-col>\r\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                          <div class=\"note-item small-shadow note-box-MediumBlue card-outer\">\r\n                              <div class=\"card card-box\" matRipple>\r\n                                  <div class=\"top\">\r\n                                      <div class=\"icon\">\r\n                                          <mat-icon>account_balance_wallet</mat-icon>\r\n                                      </div>\r\n                                      <div class=\"text\">PAYABLE AMOUNT</div>\r\n                                  </div>\r\n                                  <div class=\"middle\">\r\n                                      <!-- <mat-icon style=\"color: #4290FC;\">arrow_upward</mat-icon> -->\r\n                                      <div>₹ {{tableData?.payableAmount}}</div>\r\n                                  </div>\r\n                                  <!-- <div class=\"bottom\"><b>+32%</b> from last month</div> -->\r\n                              </div>\r\n                          </div>             \r\n                      </ion-col>\r\n                      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"2.4\">\r\n                        <div class=\"note-item small-shadow note-box-warning card-outer\">\r\n                            <div class=\"card card-box\" matRipple>\r\n                                <div class=\"top\">\r\n                                    <div class=\"icon\">\r\n                                        <mat-icon>currency_exchange</mat-icon>\r\n                                    </div>\r\n                                    <div class=\"text\">PENDING AMOUNT</div>\r\n                                </div>\r\n                                <div class=\"middle\">\r\n                                    <!-- <mat-icon style=\"color: #efbc44;\">arrow_upward</mat-icon> -->\r\n                                    <div>₹ {{tableData?.pendingAmount}}</div>\r\n                                </div>\r\n                                <!-- <div class=\"bottom\"><b>+32%</b> from last month</div> -->\r\n                            </div>\r\n                        </div>             \r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <div class=\"card card-box card-table\">\r\n                    <div class=\"card-header\">\r\n                      <div class=\"card-header-tittle\">\r\n                        Account List\r\n                      </div>\r\n                      <div class=\"card-header-action d-flex align-items-center\">\r\n                        <div class=\"records-wrapper\">\r\n                          <ion-item class=\"record\">\r\n                            <span class=\"text-black mr-1\">Records: </span>\r\n                            <mat-form-field  class=\"m-0\">\r\n                              <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                                <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                                  <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                                  <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </ion-item>\r\n                        </div>\r\n                        <div class=\"search-wrapper\">\r\n                          <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <!-- <div class=\"table-header\">\r\n                        <div class=\"records-wrapper\">\r\n                            <ion-item class=\"record\">\r\n                              <span class=\"text-black mr-1\">Records: </span>\r\n                              <mat-form-field  class=\"m-0\">\r\n                                <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                                  <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                                    <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                                    <span *ngIf=\"record.displayValue == 0\">All</span>\r\n                                  </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div class=\"search-wrapper\">\r\n                          <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n                        </div>\r\n                      </div> -->\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                          <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Year</mat-label>\r\n                            <mat-select name=\"year\" [(ngModel)]=\"model.year\" (selectionChange)=\"selectFiltter($event,'year')\" [tabindex]=\"!model.filter ? '-1' : '0'\">\r\n                              <mat-option value=\"\"  >None</mat-option>\r\n                              <mat-option [value]=\"year\" [disabled]=\"!model.filter\" *ngFor=\"let year of yearList\">{{year}}</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-3 col-sm-4 col-xs-6\">\r\n                          <mat-form-field appearance=\"outline\" [ngClass]=\"{'disabled': !model.year}\" tabindex=\"-1\">\r\n                            <mat-label>Month</mat-label>\r\n                            <mat-select name=\"month\" [(ngModel)]=\"model.month\" (selectionChange)=\"selectFiltter($event,'month')\" [tabindex]=\"!model.filter ? '-1' : '0'\">\r\n                              <mat-option value=\"\"  [disabled]=\"!model.month\">None</mat-option>\r\n                              <mat-option [value]=\"month?.id\" [disabled]=\"!model.year || !model.filter\"  *ngFor=\"let month of monthList\">{{month?.name}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-2 col-sm-4 col-xs-6\">\r\n                          <mat-form-field appearance=\"outline\"  [ngClass]=\"{'disabled': !model.month}\" tabindex=\"-1\">\r\n                            <mat-label>Settlement</mat-label>\r\n                            <mat-select name=\"settlement\" [(ngModel)]=\"model.settlement\" (selectionChange)=\"selectFiltter($event,'settlement')\" [tabindex]=\"!model.filter ? '-1' : '0'\">\r\n                              <mat-option value=\"\"  [disabled]=\"!model.settlement\">None</mat-option>\r\n                              <mat-option value=\"firstSettlement\"  [disabled]=\"!model.month || !model.filter\">First settlement</mat-option>\r\n                              <mat-option value=\"secondSettlement\"  [disabled]=\"!model.month || !model.filter\">Second settlement</mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-5 col-sm-12 col-xs-6\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-8 col-sm-8 col-xs-8\">\r\n                              <div class=\"form-item ngsel large-height\">\r\n                                <ng-select [items]=\"designerList\" \r\n                                        bindLabel=\"name\" \r\n                                        name=\"designerName\"\r\n                                        bindValue=\"id\" \r\n                                        [searchable]=\"true\"\r\n                                        [(ngModel)]=\"model.designerName\"\r\n                                        (change)=\"selectFiltter(model.designerName,'designerName')\"\r\n                                        required>\r\n                                </ng-select>\r\n                                <label>Select Designer </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-md-3 col-sm-4 col-xs-4\">\r\n                              <button mat-mini-fab  class=\"bg-theme d-flex align-items-center justify-content-center mx-auto\"  matTooltip=\"Download payment details\" (click)=\"genarateExcle()\">\r\n                                <mat-icon>sim_card_download</mat-icon>\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"table-responsive\">\r\n                          <table class=\"table\">\r\n                              <thead>\r\n                                  <tr>\r\n                                      <th class=\"ion-text-start\">\r\n                                          <div>\r\n                                              #\r\n                                          </div>\r\n                                      </th>\r\n                                      \r\n                                      <!-- <th class=\"ion-text-start\">\r\n                                        <div>\r\n                                          <ion-checkbox color=\"primary\" name=\"select_all_item\" [(ngModel)]=\"allselectModel\" (ionChange)=\"allSelectItem($event)\"></ion-checkbox>\r\n                                        </div>\r\n                                      </th> -->\r\n                                      \r\n                                      <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                                        <div>\r\n                                          {{th.display_name}}\r\n                                          <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                          <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                          <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                                        </div>\r\n                                      </th>\r\n                                      <th class=\"\">\r\n                                        <div class=\"\">\r\n                                         Return Amount Status\r\n                                        </div>\r\n                                      </th>\r\n                                      <!-- <th class=\"\">\r\n                                        <div class=\"\">\r\n                                         Services Charge Status\r\n                                        </div>\r\n                                      </th>\r\n                                      <th class=\"\">\r\n                                        <div class=\"\">\r\n                                          Government Charge Status\r\n                                        </div>\r\n                                      </th> -->\r\n                                      <th class=\"ion-text-center\">\r\n                                        <div class=\"ion-justify-content-center\">\r\n                                          Actions\r\n                                        </div>\r\n                                      </th>\r\n                                  </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                                  <td colspan=\"100\" class=\"text-center\">\r\n                                    Data is loading...\r\n                                  </td>\r\n                                </tr>\r\n                                <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                                  <td colspan=\"100\" class=\"text-center\">\r\n                                    No data found\r\n                                  </td>\r\n                                </tr>\r\n                                <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableListData; let i = index\">\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">{{i + 1}}</td>\r\n                                  <!-- <td>\r\n                                      <ion-checkbox  name=\"checkbox_name\" [(ngModel)]=\"item.isSelected\" (ionChange)=\"onCheckboxSelect(item, $event)\" color=\"primary\"></ion-checkbox>\r\n                              \r\n                                  </td> -->\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.orderId}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.order_details?.order_invoice_id ? item?.order_details?.order_invoice_id : 'N/A'}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.service_charge?.designer_invoice_id}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_details?.display_name}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.basic_amount}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.discount}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.hsn_amount}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.order_details?.giftWrapAmount}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.totalAmount}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.divattCharges}}\r\n                                  </td >\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.hsn_amount}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.tcs}}\r\n                                  </td>\r\n                                  <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                    {{item?.designer_return_amount?.net_payable_designer}}\r\n                                  </td>\r\n                                    <td [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                      <div class=\"status\" [ngClass]=\"{'warning':item?.designer_return_amount?.status == 'NOT RETURN' , 'success':item?.designer_return_amount?.status == 'RETURN' , 'danger':item?.designer_return_amount?.status == 'RETURN/NOT RETURN'}\">\r\n                                        {{item?.designer_return_amount?.status}}\r\n                                      </div>\r\n                                  </td>\r\n                                    <!-- <td>\r\n                                      <div class=\"status\" [ngClass]=\"{'warning':item?.service_charge?.status == 'NOT PAID' , 'success':item?.service_charge?.status == 'PAID' , 'danger':item?.service_charge?.status == 'PAID/NOT PAID'}\">\r\n                                        {{item?.service_charge?.status}}\r\n                                      </div>\r\n                                  </td>\r\n                                  <td>\r\n                                    <div class=\"status\" [ngClass]=\"{'warning':item?.govt_charge?.status == 'NOT PAID' , 'success':item?.govt_charge?.status == 'PAID' , 'danger':item?.govt_charge?.status == 'PAID/NOT PAID'}\">\r\n                                      {{item?.govt_charge?.status}}\r\n                                    </div>\r\n                                </td> -->\r\n                                  <td>\r\n                                    <div class=\"action ion-text-center\">\r\n                                      <ion-button class=\"mr-1\" matTooltip=\"Designer Return Amount\" matTooltipPosition=\"above\" color=\"primary\" (click)=\"changeStatus('accountStatus',item?.id)\">\r\n                                        <mat-icon>paid</mat-icon>\r\n                                      </ion-button>\r\n                                      <!-- <ion-button class=\"mr-1\" matTooltip=\"Service Charge\" matTooltipPosition=\"above\" color=\"secondary\" (click)=\"changeStatus('serviceStatus',item?.id)\">\r\n                                        <mat-icon>credit_card</mat-icon>\r\n                                      </ion-button>\r\n                                      <ion-button class=\"mr-1\" matTooltip=\"Govt Charge\" matTooltipPosition=\"above\" color=\"success\" (click)=\"changeStatus('govt_charge',item?.id)\">\r\n                                        <mat-icon>payments</mat-icon>\r\n                                      </ion-button> -->\r\n                                      <!-- <ion-button class=\"mr-1\" matTooltip=\"View All Data\" matTooltipPosition=\"above\" color=\"primary\" [routerLink]=\"['/', 'payments-view', item?.id]\">\r\n                                        <mat-icon >visibility</mat-icon>\r\n                                      </ion-button> -->\r\n                                      <ion-button matTooltip=\"Download Payment Invoice\" matTooltipPosition=\"above\" color=\"warning\" (click)=\"genaratePDF(item,'')\">\r\n                                        <mat-icon >sim_card_download</mat-icon>\r\n                                      </ion-button>\r\n                                      <ion-button matTooltip=\"Download Order Invoice\" matTooltipPosition=\"above\" color=\"success\" (click)=\"genaratePDF(item?.designer_return_amount?.orderId,'orderinvoice')\">\r\n                                        <mat-icon >save_alt</mat-icon>\r\n                                      </ion-button>\r\n                                    </div>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                          </table>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                      <div class=\"action\">\r\n                        <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                          <mat-icon>refresh</mat-icon>\r\n                        </ion-button>\r\n                        <!-- <ion-button *ngIf=\"pagePermission?.modPrivs?.delete == true\" [ngClass]=\"{'disabled':checkedList.length == 0 || alldeleteLoaderShow}\" class=\"w-40\" (click)=\"onClickDeleteItem('multiple', '', tableListData, '')\" matTooltip=\"Recycle Bin\" matTooltipPosition=\"above\" color=\"danger\">\r\n                          <mat-icon *ngIf=\"!alldeleteLoaderShow\" >delete_forever</mat-icon>\r\n                          <ion-spinner *ngIf=\"alldeleteLoaderShow\" class=\"delete-spinner\" name=\"crescent\"></ion-spinner>\r\n                        </ion-button> -->\r\n                      </div>\r\n                      <div>\r\n                          <ul class=\"pagination\">\r\n                              <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                                  <a>\r\n                                    <!-- First -->\r\n                                    <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                                  </a>\r\n                              </li>\r\n                              <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage == 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                                  <a>\r\n                                    <!-- Previous -->\r\n                                    <ion-icon name=\"caret-back\"></ion-icon>\r\n                                  </a>\r\n                              </li>\r\n                              <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                              <li>\r\n                                  Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                              </li>\r\n                              <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                              <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                                  <a>\r\n                                    <!-- Next -->\r\n                                    <ion-icon name=\"caret-forward\"></ion-icon>\r\n                                  </a>\r\n                              </li>\r\n                              <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                                  <a>\r\n                                    <!-- Last -->\r\n                                    <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                                  </a>\r\n                              </li>\r\n                          </ul>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </ion-col>\r\n                \r\n              </ion-row>\r\n            </ion-grid>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <!-- common footer show -->\r\n    <common-footer></common-footer>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_accounts_accounts_module_ts-es2015.js.map