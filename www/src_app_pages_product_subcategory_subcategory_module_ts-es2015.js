(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_subcategory_subcategory_module_ts"],{

/***/ 89360:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product/subcategory/subcategory-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoryPageRoutingModule": function() { return /* binding */ SubcategoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcategory.page */ 52059);




const routes = [
    {
        path: '',
        component: _subcategory_page__WEBPACK_IMPORTED_MODULE_0__.SubcategoryPage
    }
];
let SubcategoryPageRoutingModule = class SubcategoryPageRoutingModule {
};
SubcategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubcategoryPageRoutingModule);



/***/ }),

/***/ 23295:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product/subcategory/subcategory.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoryPageModule": function() { return /* binding */ SubcategoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcategory-routing.module */ 89360);
/* harmony import */ var _subcategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcategory.page */ 52059);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let SubcategoryPageModule = class SubcategoryPageModule {
};
SubcategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _subcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubcategoryPageRoutingModule
        ],
        declarations: [_subcategory_page__WEBPACK_IMPORTED_MODULE_1__.SubcategoryPage]
    })
], SubcategoryPageModule);



/***/ }),

/***/ 52059:
/*!***************************************************************!*\
  !*** ./src/app/pages/product/subcategory/subcategory.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubcategoryPage": function() { return /* binding */ SubcategoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_subcategory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./subcategory.page.html */ 1843);
/* harmony import */ var _subcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcategory.page.scss */ 39074);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);









let SubcategoryPage = class SubcategoryPage {
    constructor(http, toastController, modalController, alertController, commonUtils, authService, router) {
        this.http = http;
        this.toastController = toastController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonUtils = commonUtils;
        this.authService = authService;
        this.router = router;
        this.tableListData = [];
        this.itemcheckClick = false;
        this.checkedList = [];
        this.tableHeaderData = [
            {
                column_name: "categoryName",
                display_name: "Category Name",
                sortingButtonName: ""
            },
            {
                column_name: "categoryName",
                display_name: "SubCategory Name",
                sortingButtonName: ""
            }, {
                column_name: "categoryDescription",
                display_name: "Subcategory Description",
                sortingButtonName: ""
            }
        ];
        this.isListLoading = false;
        this.sortColumnName = '';
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
        // Select single checkbox end
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
        /*Check permission status start*/
        this.authService.globalparamsData.subscribe(res => {
            // console.log('res>>', res);
            if (res.authority == 'ADMIN') {
                this.permissionDataSubscribe = this.commonUtils.menuPermissionObservable.subscribe(data => {
                    if (data) {
                        // console.log('menu>>', data);
                        // console.log('this.router.url>>', this.router.url);
                        let pageUrl = this.router.url.split("/");
                        // console.log('pageUrl', pageUrl);
                        for (let item of data) {
                            if (item.modDetails.url == pageUrl[1]) {
                                if (item.modPrivs.list == true) {
                                    // console.log('-----Permission Granted-----');
                                    this.pagePermission = item;
                                    // console.log('this.pagePermission', this.pagePermission);
                                    this.listing_url = 'subcategory/list';
                                    this.onRefresh();
                                    // delete api
                                    this.deleteApi = 'subcategory/delete';
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
        /*Check permission status end*/
    }
    displayRecordChange(_record) {
        // console.log('_record', _record);
        this.displayRecord = _record;
        this.pageNo = 0;
        this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Display records end
    // List data start
    onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
        this.isListLoading = true;
        let api = _listUrl + '?page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm;
        this.tableListSubscribe = this.http.get(api).subscribe((res) => {
            this.isListLoading = false;
            // console.log('res', res);
            this.tableData = res;
            this.tableListData = res.data;
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
        }, errRes => {
            // this.selectLoadingDepend = false;
            this.isListLoading = false;
        });
    }
    // List data end
    // Pagination start
    setPage(page) {
        // console.log('page', page);
        // console.log("page");
        this.pageNo = page;
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Pagination end
    // Sorting start
    isSortTableHeader(_tableHeaderData, _headerItem) {
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
        this.searchTerm = event.target.value;
        // console.log('this.searchTerm', this.searchTerm);
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Search end
    // Referesh start
    onRefresh() {
        this.pageNo = 0;
        this.sortColumnName = 'id';
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
            // console.log("Edit data  res >", res.return_data);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let messages, headers;
            if (_identifier == 'delete') {
                headers = "Delete";
                messages = "Are you sure want to delete this subcategory?";
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: _msg,
                duration: 2000,
                cssClass: "my-tost-custom-class" + _type,
            });
            toast.present();
        });
    }
    statusChange(subcatid) {
        var id = { id: subcatid };
        this.changeStatusSubscribe = this.http.put('subcategory/status', id).subscribe((res) => {
            // console.log("res",res);
            this.commonUtils.presentToast('success', res.message);
            // this.getSubcategoryList();
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
        }, (error) => {
            // console.log("error",error);
            this.commonUtils.presentToast('error', error.messagee);
        });
    }
    // select all check box start
    allSelectItem(event) {
        // console.log(event);
        if (event.target.checked) {
            this.itemcheckClick = false;
            // // console.log('check item selkectedddddddddddddd');
            for (let i = 0; i < this.tableListData.length; i++) {
                // if(this.checkedList.includes(this.items[i].id) === false)
                if (this.checkedList.indexOf(this.tableListData[i].subCategory) === -1 && this.tableListData[i].subCategory !== null) {
                    this.checkedList.push(this.tableListData[i].subCategory);
                    this.tableListData[i].isSelected = true;
                }
                // console.log("this.checkedList",this.checkedList);
            }
        }
        else if (this.itemcheckClick == false) {
            // // console.log('not check item selectionnnnnnnnnnn')
            this.checkedList = [];
            for (let i = 0; i < this.tableListData.length; i++) {
                if (this.checkedList.indexOf(this.tableListData[i]) === -1) {
                    this.tableListData[i].isSelected = false;
                }
            }
        }
        // console.log('checked item all @@ >>', this.checkedList);
        // console.log('tableListData item all @@ >>', this.tableListData);
    }
    // Select all checkbox end
    // Select single checkbox start
    onCheckboxSelect(option, event) {
        if (event.target.checked) {
            if (this.checkedList.indexOf(option) === -1) {
                this.checkedList.push(option);
            }
        }
        else {
            for (let i = 0; i < this.tableListData.length; i++) {
                if (this.checkedList[i] == option) {
                    this.checkedList.splice(i, 1);
                }
            }
        }
        if (this.tableListData.length <= this.checkedList.length) {
            this.allselectModel = true;
            // console.log('length 4');
        }
        else {
            // console.log('length 0');
            this.allselectModel = false;
            this.itemcheckClick = true;
        }
        // console.log('checked item single >>', this.checkedList);
    }
    onClickDeleteItem(_identifire, _item, _items, _index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'aleart-popupBox',
                header: 'Delete',
                message: 'Do you really want to delete selected subcategory?',
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
                                let sentValues = { 'id': _item.subCategory.id };
                                _item.deleteLodershow = true;
                                this.deleteDataSubscribe = this.http.put("subcategory/delete", sentValues).subscribe((res) => {
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
                                this.deleteDataSubscribe = this.http.put('subcategory/muldelete', checkItemIdArray).subscribe((res) => {
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
                                    }
                                }, errRes => {
                                    this.deleteLodershow = false; //loader hide
                                    this.alldeleteLoaderShow = false;
                                    this.commonUtils.presentToast('error', errRes.error.message);
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
SubcategoryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
SubcategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-subcategory',
        template: _raw_loader_subcategory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_subcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubcategoryPage);



/***/ }),

/***/ 39074:
/*!*****************************************************************!*\
  !*** ./src/app/pages/product/subcategory/subcategory.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJjYXRlZ29yeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1843:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/subcategory/subcategory.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"subcategory-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>Sub category List\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-lg-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a [routerLink]=\"'/dashboard'\">\r\n                              <mat-icon>home</mat-icon>\r\n                          </a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\" >\r\n                          Category Management\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                            Sub category List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Sub category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n             Sub Category List\r\n            </div>\r\n            <div class=\"card-header-action\">\r\n              <ion-button *ngIf=\"pagePermission?.modPrivs?.create == true\" class=\"custom-btn\" [routerLink]=\"['/', 'subcategory', 'add', 'id']\" >\r\n                Add sub category\r\n              </ion-button>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"mbl-btn\">\r\n              <ion-button *ngIf=\"pagePermission?.modPrivs?.create == true\" class=\"custom-btn mobile-view\" [routerLink]=\"['/', 'subcategory', 'add', 'id']\" >\r\n                <ion-icon name='add-circle-outline'></ion-icon> Add\r\n              </ion-button>\r\n            </div>\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                <ion-item class=\"record\">\r\n                  <span class=\"text-black mr-1\">Records: </span>\r\n                  <mat-form-field  class=\"m-0\">\r\n                    <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                      <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                        <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                        <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper d-flex\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n                <ion-button *ngIf=\"pagePermission?.modPrivs?.create == true\" class=\"custom-btn desktop-view\" [routerLink]=\"['/', 'subcategory', 'add', 'id']\" >\r\n                  Add sub category\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"ion-text-start\">\r\n                              <div>\r\n                                <ion-checkbox color=\"primary\" name=\"select_all_item\" [(ngModel)]=\"allselectModel\" (ionChange)=\"allSelectItem($event)\"></ion-checkbox>\r\n                              </div>\r\n                            </th>\r\n                            <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                {{th.display_name}}\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"ion-text-center\">\r\n                              Subcategory Img\r\n                            </th>\r\n                            <th class=\"\">\r\n                              <div class=\"\">\r\n                                Status\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Actions\r\n                              </div>\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <!-- <tr [hidden]=\"isListLoading\" *ngIf=\"item?.subCategory == null\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr> -->\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\">\r\n                        <td  *ngIf=\"item?.subCategory != null\">{{i + 1}}</td>\r\n                        <td *ngIf=\"item?.subCategory != null\">\r\n                          <ion-checkbox  name=\"checkbox_name\" [(ngModel)]=\"item.isSelected\" (ionChange)=\"onCheckboxSelect(item.subCategory, $event)\" color=\"primary\"></ion-checkbox>\r\n                        </td>\r\n                        <td  *ngIf=\"item?.subCategory != null\">\r\n                          {{item?.categoryName}}\r\n                        </td>\r\n                        <td  *ngIf=\"item?.subCategory != null\">\r\n                          {{item?.subCategory?.categoryName}}\r\n                        </td>\r\n                        <td  *ngIf=\"item?.subCategory != null\">\r\n                          {{item?.subCategory?.categoryDescription}}\r\n                        </td>\r\n                        <td>\r\n                          <div class=\"text-center\">\r\n                            <img [src]=\"item?.subCategory?.categoryImage!= null ? item?.subCategory?.categoryImage : 'assets/images/noimage.jpg'\" class=\"tableimg\">\r\n                          </div>\r\n                        </td> \r\n                        <td  *ngIf=\"item?.subCategory != null\">\r\n                          <mat-slide-toggle\r\n                                *ngIf=\"pagePermission?.modPrivs?.update == true\"\r\n                                class=\"example-margin\"\r\n                                (change)=\"statusChange(item.subCategory.id)\"\r\n                                [checked]=\"item.subCategory.isActive == true\">\r\n                          </mat-slide-toggle>\r\n                        </td>\r\n                        <td  *ngIf=\"item?.subCategory != null\">\r\n                          <div class=\"action ion-text-center\">\r\n                            <ion-button *ngIf=\"pagePermission?.modPrivs?.update == true\" matTooltip=\"Edit\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" [routerLink]=\"['/', 'subcategory', 'edit', item.subCategory.id]\">\r\n                              <mat-icon>edit</mat-icon>\r\n                            </ion-button>\r\n                            <!-- <ion-button *ngIf=\"tableValueType == 0\" matTooltip=\"Delete\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"presentAlert('delete', item.subCategory.id)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </ion-button> -->\r\n                            <ion-button *ngIf=\"pagePermission?.modPrivs?.delete == true\" matTooltip=\"Delete\" matTooltipPosition=\"above\" color=\"danger\" (click)=\"onClickDeleteItem('single', item, tableListData, i)\">\r\n                              <mat-icon *ngIf=\"!item?.deleteLodershow\">delete</mat-icon>\r\n                              <ion-spinner *ngIf=\"item?.deleteLodershow\" class=\"delete-spinner\" name=\"crescent\"></ion-spinner>\r\n                          </ion-button>\r\n\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n              <ion-button *ngIf=\"pagePermission?.modPrivs?.delete == true\" [ngClass]=\"{'disabled':checkedList.length == 0 || alldeleteLoaderShow}\" class=\"w-40\" (click)=\"onClickDeleteItem('multiple', '', tableListData, '')\" matTooltip=\"Recycle Bin\" matTooltipPosition=\"above\" color=\"danger\">\r\n                <mat-icon *ngIf=\"!alldeleteLoaderShow\" >delete_forever</mat-icon>\r\n                <ion-spinner *ngIf=\"alldeleteLoaderShow\" class=\"delete-spinner\" name=\"crescent\"></ion-spinner>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_subcategory_subcategory_module_ts-es2015.js.map