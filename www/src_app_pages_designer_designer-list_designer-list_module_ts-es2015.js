(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_designer_designer-list_designer-list_module_ts"],{

/***/ 55067:
/*!******************************************************************************!*\
  !*** ./src/app/pages/designer/designer-list/designer-list-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerListPageRoutingModule": function() { return /* binding */ DesignerListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _designer_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-list.page */ 94754);




const routes = [
    {
        path: '',
        component: _designer_list_page__WEBPACK_IMPORTED_MODULE_0__.DesignerListPage
    }
];
let DesignerListPageRoutingModule = class DesignerListPageRoutingModule {
};
DesignerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DesignerListPageRoutingModule);



/***/ }),

/***/ 33986:
/*!**********************************************************************!*\
  !*** ./src/app/pages/designer/designer-list/designer-list.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerListPageModule": function() { return /* binding */ DesignerListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _designer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./designer-list-routing.module */ 55067);
/* harmony import */ var _designer_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer-list.page */ 94754);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let DesignerListPageModule = class DesignerListPageModule {
};
DesignerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _designer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignerListPageRoutingModule
        ],
        declarations: [_designer_list_page__WEBPACK_IMPORTED_MODULE_1__.DesignerListPage]
    })
], DesignerListPageModule);



/***/ }),

/***/ 94754:
/*!********************************************************************!*\
  !*** ./src/app/pages/designer/designer-list/designer-list.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignerListPage": function() { return /* binding */ DesignerListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_designer_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./designer-list.page.html */ 76756);
/* harmony import */ var _designer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designer-list.page.scss */ 22051);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/modal.page */ 58167);










let DesignerListPage = class DesignerListPage {
    constructor(http, toastController, modalController, alertController, commonUtils, authService, router) {
        this.http = http;
        this.toastController = toastController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonUtils = commonUtils;
        this.authService = authService;
        this.router = router;
        this.item = {};
        this.filttername = 'isProfileCompleated';
        this.tabletitle = "Completed";
        this.profileStatus = "COMPLETED";
        this.Lebellist = [];
        this.tableListData = [];
        this.itemcheckClick = false;
        this.checkedList = [];
        this.tableHeaderData = [
            {
                column_name: "displayName",
                display_name: "Display Name",
                sortingButtonName: "",
            },
            {
                column_name: "boutiqueName",
                display_name: "Boutique Name",
                sortingButtonName: "",
            },
            {
                column_name: "designerCategory",
                display_name: "Designer Category",
                sortingButtonName: "",
            },
            {
                column_name: "firstName1",
                display_name: "Designer 1",
                sortingButtonName: "",
            }, {
                column_name: "firstName2",
                display_name: "Designer 2",
                sortingButtonName: "",
            }, {
                column_name: "email",
                display_name: "Email",
                sortingButtonName: "",
            }, {
                column_name: "mobileNo",
                display_name: "Mobile No",
                sortingButtonName: "",
            }, {
                column_name: "gender",
                display_name: "Gender",
                sortingButtonName: "",
            }, {
                column_name: "dob",
                display_name: "dob",
                sortingButtonName: "",
            },
        ];
        this.isListLoading = false;
        this.sortColumnName = "";
        this.sortOrderName = "";
        this.deleteLoading = false;
        this.restoreLoading = false;
        this.model = {};
        // checkDesignerList end
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
                                    this.listing_url = "designer/list";
                                    this.onRefresh();
                                    // delete api
                                    this.deleteApi = "adminMData/deleteDesignerLevels";
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
        this.getLebellist();
    }
    /*----------------Table list data start----------------*/
    // checkDesignerList start
    checkDesignerList(_identifier) {
        this.pageNo = 0;
        if (_identifier == 'completed') {
            this.tabletitle = "Completed";
            this.showAction = "";
            this.profileStatus = "COMPLETED";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'waitForApprove') {
            this.tabletitle = "Waiting For Approve";
            this.showAction = "waitForApprove";
            this.profileStatus = "waitForApprove";
            // this.profileStatus = "ACTIVE";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'waitForSubmit') {
            this.tabletitle = "Approved";
            this.showAction = "";
            this.profileStatus = "APPROVE";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'submitted') {
            this.tabletitle = "Submitted";
            this.showAction = "submitted";
            this.profileStatus = "SUBMITTED";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'saved') {
            this.tabletitle = "Saved";
            this.showAction = "Saved";
            this.profileStatus = "SAVED";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'rejected') {
            this.tabletitle = "rejected";
            this.showAction = "";
            this.profileStatus = "REJECTED";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'deleted') {
            this.tabletitle = "Deleted";
            this.showAction = "";
            this.profileStatus = "";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'changeRequest') {
            this.tabletitle = "Change Request";
            this.showAction = "changeRequest";
            this.profileStatus = "changeRequest";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
        else if (_identifier == 'changeRequest') {
            this.tabletitle = "Change Request";
            this.showAction = "changeRequest";
            this.profileStatus = "changeRequest";
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
        }
    }
    displayRecordChange(_record) {
        // console.log("_record", _record);
        this.displayRecord = _record;
        this.pageNo = 0;
        this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
    }
    // Display records end
    // List data start
    onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, filttertype, _sortOrderName, _searchTerm, _profileStatus) {
        this.isListLoading = true;
        // isDeleted=true
        let api;
        if (this.tabletitle == 'Deleted') {
            api = _listUrl + "?page=" + _pageNo + "&limit=" + _displayRecord + "&sortName=" + _sortColumnName + "&sort=" + _sortOrderName + "&keyword=" + _searchTerm + "&isDeleted=true" + "&profileStatus=" + _profileStatus;
        }
        else {
            api = _listUrl + "?page=" + _pageNo + "&limit=" + _displayRecord + "&sortName=" + _sortColumnName + "&sort=" + _sortOrderName + "&keyword=" + _searchTerm + "&profileStatus=" + _profileStatus;
        }
        this.tableListSubscribe = this.http.get(api).subscribe((res) => {
            this.isListLoading = false;
            // console.log("res", res);
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
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
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
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
    }
    searchList(event) {
        this.searchTerm = event.target.value;
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
    }
    // Search end
    // Referesh start
    onRefresh() {
        this.pageNo = 0;
        this.sortColumnName = "dId";
        this.sortOrderName = "DESC";
        this.searchTerm = "";
        this.tableValueType = "0";
        this.getLebellist();
        // table data call
        this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
    }
    // Referesh end
    // Delete start
    deleteData(_id) {
        // console.log("id>>", _id);
        let sentValues = { id: _id };
        this.deleteLoading = true;
        this.deleteDataSubscribe = this.http.put(this.deleteApi, sentValues).subscribe((res) => {
            this.deleteLoading = false;
            // // console.log("Delete data  res >", res.return_data);
            if (res.status == 200) {
                this.commonUtils.presentToast("success", res.message);
                this.onRefresh();
            }
            else {
                this.commonUtils.presentToast("error", res.message);
            }
        }, (errRes) => {
            // this.selectLoadingDepend = false;
            this.commonUtils.presentToast("error", errRes.error.message);
            this.deleteLoading = false;
        });
    }
    // Delete end
    /*----------------Table list data end----------------*/
    // Delete aleart start
    presentAlert(_identifier, _id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let messages, headers;
            if (_identifier == "delete") {
                headers = "Delete";
                messages = "Are you sure want to delete?";
            }
            const alert = yield this.alertController.create({
                cssClass: "aleart-popupBox",
                header: headers,
                message: messages,
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "popup-cancel-btn",
                        handler: (blah) => {
                            // console.log("Confirm Cancel: blah");
                        },
                    },
                    {
                        text: "Okay",
                        cssClass: "popup-ok-btn",
                        handler: () => {
                            // console.log("Confirm Okay");
                            // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);
                            if (_identifier == "delete") {
                                this.deleteData(_id);
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    // Delete aleart end
    presentToast(_msg, _type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: _msg,
                duration: 2000,
                cssClass: "my-tost-custom-class" + _type,
            });
            toast.present();
        });
    }
    selectLabel(value) {
        this.labelValue = value.Name;
        // console.log("this.Lebellist",value,this.labelValue);
    }
    // selectLabel end
    changeStatus(type, actiontype, _item) {
        // console.log("_item",_item);
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        if (actiontype == 'waitForApprove') {
            var _items;
            var formData;
            if (type == 'reject') {
                formData = {
                    dId: _item.dId,
                    uid: _item.uid,
                    isActive: _item.isActive,
                    profileStatus: "REJECTED",
                    isDeleted: _item.isDeleted,
                    isProfileCompleted: _item.isProfileCompleted,
                    isProfileSubmitted: _item.isProfileSubmitted,
                };
                this.openDesignerCommentmodal('Desigerrejected_modal', formData, _items);
            }
            else if (type == 'approve') {
                formData = {
                    dId: _item.dId,
                    uid: _item.uid,
                    isActive: _item.isActive,
                    profileStatus: "APPROVE",
                    isDeleted: _item.isDeleted,
                    isProfileCompleted: false,
                    isProfileSubmitted: _item.isProfileSubmitted,
                };
                this.openDesignerCommentmodal('DesigerApprove_modal', formData, _items);
                // this.changeStatusSubscribe = this.http.put("designer/update", formData).subscribe(
                //   (res: any) => {
                //     this.commonUtils.presentToast("success", res.message);
                //     // this.getcategoryList();
                //     this.onListDate( this.listing_url, this.pageNo,this.displayRecord,this.sortColumnName,this.filttertype,this.sortOrderName,this.searchTerm, this.profileStatus);
                //   },
                //   (error) => {
                //     this.commonUtils.presentToast("error", error.error.message);
                //   }
                // );
            }
        }
        else if (actiontype == 'submitted' || actiontype == 'changeRequest') {
            var profileStatus = 'REJECTED';
            if (actiontype == 'changeRequest') {
                profileStatus = "COMPLETED";
            }
            if (type == 'reject') {
                formData = {
                    dId: _item.dId,
                    uid: _item.uid,
                    isActive: _item.isActive,
                    // profileStatus: _item.isApproved,
                    profileStatus: profileStatus,
                    isDeleted: _item.isDeleted,
                    isProfileCompleted: true,
                    isProfileSubmitted: _item.isProfileSubmitted,
                    displayName: _item.designerProfileEntity.designerProfile.displayName,
                    designerCategory: _item.designerProfileEntity.designerProfile.designerCategory,
                    // displayName:"Sonar Bangla",
                    // designerCategory:"Neo",
                };
                this.openDesignerCommentmodal('Desigerrejected_modal', formData, _items);
            }
            else if (type == 'approve') {
                formData =
                    {
                        dId: _item.dId,
                        uid: _item.uid,
                        isActive: _item.isActive,
                        profileStatus: "COMPLETED",
                        isDeleted: _item.isDeleted,
                        isProfileCompleted: true,
                        isProfileSubmitted: _item.isProfileSubmitted,
                        designerCategory: (_b = (_a = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _a === void 0 ? void 0 : _a.designerProfile) === null || _b === void 0 ? void 0 : _b.designerCategory,
                        displayName: (_d = (_c = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _c === void 0 ? void 0 : _c.designerProfile) === null || _d === void 0 ? void 0 : _d.displayName,
                        // designerCategory: "Neo",
                        // displayName: "Sonar Bangla",
                        designerProfileEntity: {
                            designerPersonalInfoEntity: {
                                bankDetails: {
                                    accountNumber: (_g = (_f = (_e = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _e === void 0 ? void 0 : _e.designerPersonalInfoEntity) === null || _f === void 0 ? void 0 : _f.bankDetails) === null || _g === void 0 ? void 0 : _g.accountNumber,
                                    bankName: (_k = (_j = (_h = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _h === void 0 ? void 0 : _h.designerPersonalInfoEntity) === null || _j === void 0 ? void 0 : _j.bankDetails) === null || _k === void 0 ? void 0 : _k.bankName,
                                    ifscCode: (_o = (_m = (_l = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _l === void 0 ? void 0 : _l.designerPersonalInfoEntity) === null || _m === void 0 ? void 0 : _m.bankDetails) === null || _o === void 0 ? void 0 : _o.ifscCode,
                                },
                                designerDocuments: {
                                    aadharCard: (_r = (_q = (_p = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _p === void 0 ? void 0 : _p.designerPersonalInfoEntity) === null || _q === void 0 ? void 0 : _q.designerDocuments) === null || _r === void 0 ? void 0 : _r.aadharCard,
                                    panCard: (_u = (_t = (_s = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _s === void 0 ? void 0 : _s.designerPersonalInfoEntity) === null || _t === void 0 ? void 0 : _t.designerDocuments) === null || _u === void 0 ? void 0 : _u.panCard,
                                }
                            },
                            designerProfile: {
                                digitalSignature: (_w = (_v = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _v === void 0 ? void 0 : _v.designerProfile) === null || _w === void 0 ? void 0 : _w.digitalSignature,
                            },
                            boutiqueProfile: {
                                gstin: (_y = (_x = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _x === void 0 ? void 0 : _x.boutiqueProfile) === null || _y === void 0 ? void 0 : _y.gstin
                            }
                        }
                    };
                // this.openDesignerCommentmodal('DesigerApprove_modal', formData, _items);
                this.changeStatusSubscribe = this.http.put("designer/update", formData).subscribe((res) => {
                    this.commonUtils.presentToast("success", res.message);
                    // this.getcategoryList();
                    this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
                }, (error) => {
                    this.commonUtils.presentToast("error", error.error.message);
                });
            }
        }
        // console.log('_item', _item);
    }
    // select all check box start
    openProductCommentmodal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('openProductCommentmodal ...........>>', _identifier);
            let profile_modal;
            profile_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
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
                this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
                if (getdata.data == 'submitClose') {
                }
            });
            return yield profile_modal.present();
        });
    }
    // openRejectemodal start
    allSelectItem(event) {
        if (event.target.checked) {
            this.itemcheckClick = false;
            // // console.log('check item selkectedddddddddddddd');
            for (let i = 0; i < this.tableListData.length; i++) {
                // if(this.checkedList.includes(this.items[i].id) === false)
                if (this.checkedList.indexOf(this.tableListData[i]) === -1 &&
                    this.tableListData[i] !== null) {
                    this.checkedList.push(this.tableListData[i]);
                    this.tableListData[i].isSelected = true;
                }
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
        // console.log("checked item all @@ >>", this.checkedList);
        // console.log("tableListData item all @@ >>", this.tableListData);
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
            // console.log("length 4");
        }
        else {
            // console.log("length 0");
            this.allselectModel = false;
            this.itemcheckClick = true;
        }
        // console.log("checked item single >>", this.checkedList);
    }
    onClickDeleteItem(_identifire, _item, _items, _index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: "aleart-popupBox",
                header: "Delete",
                message: "Do you really want to delete?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "popup-cancel-btn",
                        handler: (blah) => {
                            // // console.log('Confirm Cancel: blah');
                        },
                    },
                    {
                        text: "Ok",
                        cssClass: "popup-ok-btn",
                        handler: () => {
                            var _a, _b, _c, _d;
                            // ------------ single item delete start ------------
                            if (_identifire == "single") {
                                // console.log("_item", _item);
                                let formData;
                                formData = {
                                    dId: _item.dId,
                                    isActive: _item.isActive,
                                    designerCategory: (_b = (_a = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _a === void 0 ? void 0 : _a.designerProfile) === null || _b === void 0 ? void 0 : _b.designerCategory,
                                    displayName: (_d = (_c = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _c === void 0 ? void 0 : _c.designerProfile) === null || _d === void 0 ? void 0 : _d.displayName,
                                    // designerCategory: "Neo",
                                    // displayName: "Sonar Bangla",
                                    profileStatus: _item.profileStatus,
                                    isDeleted: true,
                                    isProfileCompleted: _item.isProfileCompleted,
                                    isProfileSubmitted: _item.isProfileSubmitted,
                                };
                                this.changeStatusSubscribe = this.http.put("designer/designerProfileDelete?designerEmail=" + _item.email, '').subscribe((res) => {
                                    this.commonUtils.presentToast("success", res.message);
                                    this.model = {};
                                    this.getLebellist();
                                    this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
                                }, (error) => {
                                    this.commonUtils.presentToast("error", error.error.message);
                                });
                                // ------------ single item delete end ------------
                            }
                            else {
                                let checkItemIdArray = [];
                                if (this.checkedList) {
                                    this.checkedList.forEach((element) => {
                                        checkItemIdArray.push(element.id);
                                    });
                                }
                                if (_items) {
                                    _items.forEach((element) => {
                                        this.checkedList.forEach((element1) => {
                                            if (element.id == element1.id) {
                                                element.deleteLodershow = true; //loader show
                                                this.alldeleteLoaderShow = true;
                                            }
                                        });
                                    });
                                }
                                this.deleteDataSubscribe = this.http
                                    .put("category/muldelete", checkItemIdArray)
                                    .subscribe((res) => {
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
                                            if (_items.length == 0) {
                                                this.allselectModel = false;
                                                this.checkedList = [];
                                                checkItemIdArray = [];
                                            }
                                        }
                                        this.commonUtils.presentToast("success", res.message);
                                        this.onRefresh();
                                    }
                                    else {
                                        this.commonUtils.presentToast("error", res.message);
                                    }
                                }, (errRes) => {
                                    this.deleteLodershow = false; //loader hide
                                    this.commonUtils.presentToast("error", errRes.error.message);
                                    this.alldeleteLoaderShow = false;
                                    _items.forEach((element) => {
                                        this.checkedList.forEach((element1) => {
                                            if (element.id == element1.id) {
                                                element.deleteLodershow = false;
                                                this.alldeleteLoaderShow = false;
                                            }
                                        });
                                    });
                                });
                            }
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    // Click Delete Item end
    openDesignerCommentmodal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('openDesignerCommentmodal ...........>>', _identifier);
            let profile_modal;
            profile_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
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
                this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
                if (getdata.data == 'submitClose') {
                }
            });
            return yield profile_modal.present();
        });
    }
    // openRejectemodal start
    // openRejectemodal start
    openRejectemodal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('openRejectemodal ...........>>', _identifier,_item);
            let profile_modal;
            profile_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                cssClass: 'mymodalClass small rejectemodal',
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
                if (getdata.data == 'submitClose') {
                }
            });
            return yield profile_modal.present();
        });
    }
    // openRejectemodal end
    // getLebellist start
    getLebellist() {
        this.LebellistDataSubcribe = this.http.get("adminMData/getDesignerCategory").subscribe((res) => {
            this.Lebellist = res.data;
        }, error => {
            // console.log(error);
            this.commonUtils.presentToast('error', error.error.message);
        });
    }
    // getLebellist end
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
        if (this.LebellistDataSubcribe !== undefined) {
            this.LebellistDataSubcribe.unsubscribe();
        }
    }
};
DesignerListPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
DesignerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-designer-list",
        template: _raw_loader_designer_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_designer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DesignerListPage);



/***/ }),

/***/ 22051:
/*!**********************************************************************!*\
  !*** ./src/app/pages/designer/designer-list/designer-list.page.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive {\n  overflow: visible;\n  overflow-x: auto;\n}\n\n.table-overflow {\n  max-width: 20em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6ImRlc2lnbmVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4udGFibGUtb3ZlcmZsb3dcclxue1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */");

/***/ }),

/***/ 76756:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/designer/designer-list/designer-list.page.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"designer-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>{{tabletitle}} Designer List\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item\" >\r\n                          Designer Management\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Designer List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"note-section\">\r\n          <div class=\"col-md-10 m-auto\">\r\n            <div class=\"row\">\r\n              <!-- Waiting for approval -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4\">\r\n                <div class=\"note-item note-item2 note-box-warning card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('waitForApprove')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>schedule</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Waiting for login approval</p>\r\n                        <p><b>{{tableData?.waitingForApproval}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Approved -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4\">\r\n                <div class=\"note-item note-item2 note-box-success card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('waitForSubmit')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>verified</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Approved</p>\r\n                        <p><b>{{tableData?.waitingForSubmit}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>   \r\n              </div>\r\n              <!-- Submitted -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4\">\r\n                <div class=\"note-item note-item2 note-box-teal card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('submitted')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>grading</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Profile Submitted</p>\r\n                        <p><b>{{tableData?.submitted}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>   \r\n              </div> \r\n              <!-- saved -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-Purple card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('saved')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>save</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Profile Saved</p>\r\n                        <p><b>{{tableData?.saved}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>   \r\n              </div>\r\n              <!-- Completed -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-primary card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('completed')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>check</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Profile Completed</p>\r\n                        <p><b>{{tableData?.completed}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>       \r\n              </div>\r\n              <!-- Rejected -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('rejected')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>close</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Rejected</p>\r\n                        <p><b>{{tableData?.rejected}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Change Request -->\r\n              <!-- <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-primary card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('changeRequest')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>change_circle</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Change Request</p>\r\n                        <p><b>{{tableData?.changeRequest}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              <!-- Deleted -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('deleted')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>delete</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Deleted</p>\r\n                        <p><b>{{tableData?.deleted}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n                {{tabletitle}} Designer List\r\n            </div>\r\n            <div class=\"card-header-action\">\r\n              <ion-button class=\"custom-btn\" [routerLink]=\"['/', 'designer-level']\">\r\n                Add Designer Lebel\r\n              </ion-button>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                  <ion-item class=\"record\">\r\n                    <span class=\"text-black mr-1\">Records: </span>\r\n                    <mat-form-field  class=\"m-0\">\r\n                      <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                        <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                          <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                          <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search email ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                unique id\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Profile\r\n                              </div>\r\n                            </th>\r\n                            <!-- <th class=\"ion-text-start\">\r\n                              <div>\r\n                                <ion-checkbox color=\"primary\" name=\"select_all_item\" [(ngModel)]=\"allselectModel\" (ionChange)=\"allSelectItem($event)\"></ion-checkbox>\r\n                              </div>\r\n                            </th> -->\r\n                            <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                {{th.display_name}}\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                              </div>\r\n                            </th>\r\n                            <!-- *ngIf=\"tabletitle =='Submitted'\" -->\r\n                            <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Actions\r\n                              </div>\r\n                            </th>\r\n                            <!-- <th class=\"ion-text-center\"  *ngIf=\"tabletitle !='Waiting For Approve' && tabletitle !='Saved' && tabletitle !='Change Request' && tabletitle !='Deleted'\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                More\r\n                              </div>\r\n                            </th> -->\r\n                            <!-- <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Actions\r\n                              </div>\r\n                            </th> -->\r\n                        </tr> \r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\" class=\"cursor-pointer\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{item?.uid}}</td>\r\n                        <!-- <td>\r\n                            <ion-checkbox  name=\"checkbox_name\" [(ngModel)]=\"item.isSelected\" (ionChange)=\"onCheckboxSelect(item, $event)\" color=\"primary\"></ion-checkbox>\r\n                    \r\n                        </td> -->\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          <div class=\"text-center\">\r\n                            <img [src]=\"item?.designerProfileEntity?.designerProfile?.profilePic!= null ? item?.designerProfileEntity?.designerProfile?.profilePic : 'assets/images/noimage.jpg'\" class=\"tableimg\">\r\n                          </div>\r\n\r\n                        </td> \r\n                        <td class=\"table-overflow\" [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.displayName ? item?.designerProfileEntity?.designerProfile?.displayName : 'N/A'}}\r\n                        </td>\r\n                        <td class=\"table-overflow\" [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.boutiqueProfile?.boutiqueName}}\r\n                        </td> \r\n                        <td class=\"table-overflow\" [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.designerCategory}}\r\n                        </td> \r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.firstName1}}&nbsp;\r\n                          {{item?.designerProfileEntity?.designerProfile?.lastName1}}\r\n                        </td>\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.firstName2}}&nbsp;\r\n                          {{item?.designerProfileEntity?.designerProfile?.lastName2}}\r\n                        </td>\r\n                        <!-- <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.boutiqueProfile?.firmName}}\r\n                        </td> -->\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.email}}\r\n                        </td>\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.designerProfile?.mobileNo}}\r\n                        </td> \r\n                        <td class=\"text-capitalize\" [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.designerProfile?.gender}}\r\n                        </td> \r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.designerProfile?.dob}}\r\n                        </td>\r\n                        \r\n                        <td class=\"action text-center pt-0\" >\r\n                          <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"\" *ngIf=\"pagePermission?.modPrivs?.update == true && showAction!='Saved' && showAction\" >\r\n                            <ion-fab-button color=\"dark\" >\r\n                              <ion-icon color=\"warning\" *ngIf=\"item.profileStatus == 'waitForApprove' || item.profileStatus == 'COMPLETED' || item.profileStatus == 'SAVED'\" tooltip=\"Pending\" flow=\"up\" delay=\"500\" name=\"time-outline\" ></ion-icon>\r\n                              <ion-icon color=\"warning\" *ngIf=\"item.profileStatus == 'SUBMITTED'\" tooltip=\"Pending\" flow=\"up\" delay=\"500\" name=\"time-outline\" ></ion-icon>\r\n                              <ion-icon color=\"danger\" *ngIf=\"item.profileStatus == 'REJECTED'\" tooltip=\"Rejected\" flow=\"up\" delay=\"500\" name=\"close-circle-outline\"></ion-icon>\r\n                              <!-- <ion-icon  color=\"success\" tooltip=\"Approved\" flow=\"up\" delay=\"500\" name=\"checkmark-circle-outline\"></ion-icon> -->\r\n                            </ion-fab-button>\r\n                            <ion-fab-list side=\"start\">\r\n                              <ion-fab-button color=\"danger\" tooltip=\"Reject Product\" flow=\"up\" delay=\"500\"  (click)=\"changeStatus('reject',showAction,item)\" >\r\n                                <ion-icon name=\"close-circle-outline\" color=\"dark\"></ion-icon>\r\n                              </ion-fab-button>\r\n                              <ion-fab-button color=\"success\" tooltip=\"Approve Product\" flow=\"up\" delay=\"500\" (click)=\"changeStatus('approve',showAction,item)\">\r\n                                <ion-icon name=\"checkmark-circle-outline\" color=\"dark\"></ion-icon>\r\n                              </ion-fab-button>\r\n                            </ion-fab-list>\r\n                          </ion-fab>\r\n                          <ion-button  matTooltip=\"View message\" *ngIf=\"tabletitle !='Waiting For Approve' && tabletitle !='Saved' && tabletitle !='Change Request' && tabletitle !='Deleted' && tabletitle== 'rejected'\"  matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"openRejectemodal('rejectmessage_modal', item.adminComment, '');\">\r\n                            <mat-icon>chat</mat-icon>\r\n                          </ion-button>\r\n                          <ion-button  matTooltip=\"Delete\" [ngClass]=\"{'d-none':tabletitle =='Waiting For Approve' || tabletitle =='Deleted' }\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"onClickDeleteItem('single', item, '','');\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </ion-button>\r\n                          <!-- <ion-button  matTooltip=\"Delete\" [ngClass]=\"{'d-none':tabletitle =='Waiting For Approve' || tabletitle =='Deleted'}\" *ngIf=\"tabletitle !='Submitted'\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"onClickDeleteItem('single', item, '','');\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </ion-button> -->\r\n                        </td>\r\n                        <!-- <td class=\"action\" *ngIf=\"tabletitle !='Waiting For Approve' && tabletitle !='Saved' && tabletitle !='Change Request' && tabletitle !='Deleted'\">\r\n                          <ion-button  matTooltip=\"View message\" *ngIf=\"tabletitle== 'rejected'\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"openRejectemodal('rejectmessage_modal', item.adminComment, '');\">\r\n                            <mat-icon>chat</mat-icon>\r\n                          </ion-button>\r\n                          <ion-button  matTooltip=\"Delete\" [ngClass]=\"{'d-none':tabletitle =='Waiting For Approve' || tabletitle =='Deleted' }\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"onClickDeleteItem('single', item, '','');\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </ion-button>\r\n                        </td> -->\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_designer_designer-list_designer-list_module_ts-es2015.js.map