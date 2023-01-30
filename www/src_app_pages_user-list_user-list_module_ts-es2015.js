(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_user-list_user-list_module_ts"],{

/***/ 11398:
/*!*************************************************************!*\
  !*** ./src/app/pages/user-list/user-list-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageRoutingModule": function() { return /* binding */ UserListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list.page */ 187);




const routes = [
    {
        path: '',
        component: _user_list_page__WEBPACK_IMPORTED_MODULE_0__.UserListPage
    }
];
let UserListPageRoutingModule = class UserListPageRoutingModule {
};
UserListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserListPageRoutingModule);



/***/ }),

/***/ 34543:
/*!*****************************************************!*\
  !*** ./src/app/pages/user-list/user-list.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPageModule": function() { return /* binding */ UserListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list-routing.module */ 11398);
/* harmony import */ var _user_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page */ 187);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let UserListPageModule = class UserListPageModule {
};
UserListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListPageRoutingModule
        ],
        declarations: [_user_list_page__WEBPACK_IMPORTED_MODULE_1__.UserListPage]
    })
], UserListPageModule);



/***/ }),

/***/ 187:
/*!***************************************************!*\
  !*** ./src/app/pages/user-list/user-list.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListPage": function() { return /* binding */ UserListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-list.page.html */ 82700);
/* harmony import */ var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list.page.scss */ 8823);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);










let UserListPage = class UserListPage {
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
                column_name: "firstName",
                display_name: "First Name",
                sortingButtonName: "",
            },
            {
                column_name: "lastName",
                display_name: "Last Name",
                sortingButtonName: "",
            },
            {
                column_name: "dob",
                display_name: "DOB",
                sortingButtonName: "",
            },
            {
                column_name: "email",
                display_name: "Email",
                sortingButtonName: "",
            },
            {
                column_name: "username",
                display_name: "Username",
                sortingButtonName: "",
            },
            {
                column_name: "mobileNo",
                display_name: "Mobile No",
                sortingButtonName: "",
            },
            {
                column_name: "createdOn",
                display_name: "Register On",
                sortingButtonName: "",
            },
        ];
        this.isListLoading = false;
        this.sortColumnName = "";
        this.sortOrderName = "";
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
        // this.listing_url = "user/getUserList";
        // this.onRefresh();
        /*Check permission status start*/
        this.authService.globalparamsData.subscribe((res) => {
            console.log("res>>", res);
            if (res.authority == "ADMIN") {
                this.permissionDataSubscribe =
                    this.commonUtils.menuPermissionObservable.subscribe((data) => {
                        if (data) {
                            console.log("menu>>", data);
                            console.log("this.router.url>>", this.router.url);
                            let pageUrl = this.router.url.split("/");
                            console.log("pageUrl", pageUrl);
                            for (let item of data) {
                                if (item.modDetails.url == pageUrl[1]) {
                                    if (item.modPrivs.list == true) {
                                        console.log("-----Permission Granted-----");
                                        this.pagePermission = item;
                                        console.log("this.pagePermission", this.pagePermission);
                                        this.listing_url = "user/getUserList";
                                        this.onRefresh();
                                        // delete api
                                        break;
                                    }
                                    else {
                                        console.log("-------No Permission--------");
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
    displayRecordChange(_record) {
        console.log("_record", _record);
        this.displayRecord = _record;
        this.pageNo = 0;
        this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Display records end
    // List data start
    onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
        this.isListLoading = true;
        let api = _listUrl + "?page=" + _pageNo + "&limit=" + _displayRecord + "&sortName=" + _sortColumnName + "&sort=" + _sortOrderName + "&keyword=" + _searchTerm;
        this.tableListSubscribe = this.http.get(api).subscribe((res) => {
            this.isListLoading = false;
            console.log("res", res);
            this.tableData = res;
            for (let index = 0; index < res.data.length; index++) {
                this.tableData.data[index].createdOn = moment__WEBPACK_IMPORTED_MODULE_2__(this.tableData.data[index].createdOn).format('DD MMM YYYY');
            }
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
        }, (errRes) => {
            // this.selectLoadingDepend = false;
            this.isListLoading = false;
        });
    }
    // List data end
    // Pagination start
    setPage(page) {
        console.log("page", page);
        console.log("page");
        this.pageNo = page;
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Pagination end
    // Sorting start
    isSortTableHeader(_tableHeaderData, _headerItem) {
        console.log("_tableHeaderData", _tableHeaderData);
        console.log("_headerItem", _headerItem);
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
        console.log("this.sortColumnName", this.sortColumnName);
        console.log("this.sortOrderName", this.sortOrderName);
        console.log("_tableHeaderData>>", _tableHeaderData);
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    searchList(event) {
        this.searchTerm = event.target.value;
        console.log("this.searchTerm", this.searchTerm);
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
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
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
    }
    // Referesh end
    statusChange(id) {
    }
    /*----------------Table list data end----------------*/
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
UserListPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
UserListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-list',
        template: _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserListPage);



/***/ }),

/***/ 8823:
/*!*****************************************************!*\
  !*** ./src/app/pages/user-list/user-list.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 82700:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-list/user-list.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"user-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>User List\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          User List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n              User List\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                  <ion-item class=\"record\">\r\n                    <span class=\"text-black mr-1\">Records: </span>\r\n                    <mat-form-field  class=\"m-0\">\r\n                      <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                        <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                          <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                          <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n             </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th> \r\n                            <th class=\"ion-text-start\">\r\n                              <div>\r\n                                  Profile Img\r\n                              </div>\r\n                          </th>                            \r\n                            <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                {{th.display_name}}\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                              </div>\r\n                            </th>\r\n                            <!-- <th>\r\n                              Status\r\n                            </th> -->\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>\r\n                          <div class=\"text-center\">\r\n                            <img [src]=\"item?.profilePic!= '' ? item?.profilePic : 'assets/images/noimage.jpg'\" class=\"tableimg\">\r\n                          </div>\r\n                        </td> \r\n                        <td>\r\n                          {{item?.firstName}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.lastName}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.dob}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.email}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.username}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.mobileNo}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.createdOn}}\r\n                        </td>\r\n                        <!-- <td>\r\n                          <mat-slide-toggle\r\n                                *ngIf=\"pagePermission?.modPrivs?.update == true\"\r\n                                class=\"example-margin\"\r\n                                (change)=\"statusChange(item.id)\"\r\n                                [checked]=\"item.isActive == true\">\r\n                          </mat-slide-toggle>\r\n                        </td> -->\r\n                        \r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-list_user-list_module_ts-es2015.js.map