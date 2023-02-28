(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_role_management_add-role_add-role_module_ts"],{

/***/ 82651:
/*!***************************************************************************!*\
  !*** ./src/app/pages/role_management/add-role/add-role-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRolePageRoutingModule": function() { return /* binding */ AddRolePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_role_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-role.page */ 75653);




const routes = [
    {
        path: '',
        component: _add_role_page__WEBPACK_IMPORTED_MODULE_0__.AddRolePage
    }
];
let AddRolePageRoutingModule = class AddRolePageRoutingModule {
};
AddRolePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddRolePageRoutingModule);



/***/ }),

/***/ 42344:
/*!*******************************************************************!*\
  !*** ./src/app/pages/role_management/add-role/add-role.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRolePageModule": function() { return /* binding */ AddRolePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-role-routing.module */ 82651);
/* harmony import */ var _add_role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-role.page */ 75653);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AddRolePageModule = class AddRolePageModule {
};
AddRolePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _add_role_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddRolePageRoutingModule
        ],
        declarations: [_add_role_page__WEBPACK_IMPORTED_MODULE_1__.AddRolePage]
    })
], AddRolePageModule);



/***/ }),

/***/ 75653:
/*!*****************************************************************!*\
  !*** ./src/app/pages/role_management/add-role/add-role.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRolePage": function() { return /* binding */ AddRolePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_role_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-role.page.html */ 28017);
/* harmony import */ var _add_role_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-role.page.scss */ 16036);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);










let AddRolePage = class AddRolePage {
    /*Variable end*/
    constructor(toastController, menuCtrl, http, commonUtils, // common functionlity come here
    router, activatedRoute, authService) {
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.commonUtils = commonUtils;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        /*Variable start*/
        this.model = {};
        this.editLoading = false;
        // ---------- init end ----------
        // ======================== form submit start ===================
        this.formLoading = false;
    }
    ngOnInit() {
        this.commonFunction();
    }
    ionViewWillEnter() {
        this.commonFunction();
    }
    commonFunction() {
        // get active url name
        this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
        this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
        this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
        // console.log('parms_action_name', this.parms_action_name);
        // console.log('parms_action_id', this.parms_action_id);
        // get module api
        this.getmoduleList_api = 'admin/modules';
        // form_api Api
        this.form_api = 'admin/role';
        /*Check permission status start*/
        this.authService.globalparamsData.subscribe(res => {
            // console.log('res>>', res);
            if (res.authority == 'ADMIN') {
                this.permissionDataSubscribe = this.commonUtils.menuPermissionObservable.subscribe(data => {
                    if (data) {
                        // console.log('menu>>', data);
                        // console.log('this.router.url>>', this.router.url);
                        let pageUrlName = this.router.url.split("/");
                        // console.log('pageUrlName', pageUrlName);
                        for (let item of data) {
                            let moduleUrlName = item.modDetails.url.split("-");
                            // console.log('moduleUrlName',moduleUrlName);
                            if (pageUrlName[1] == moduleUrlName[0]) {
                                if (this.parms_action_name == 'add' && item.modPrivs.create == true) {
                                    // console.log('-----Permission create Granted-----');
                                    this.getmoduleList();
                                    break;
                                }
                                else if (this.parms_action_name == 'edit' && item.modPrivs.update == true) {
                                    // console.log('-----Permission update Granted-----');
                                    this.editApi = 'admin/role/' + this.parms_action_id;
                                    // init call
                                    this.init();
                                    this.getmoduleList();
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
    /* -------------Get modules start------------- */
    getmoduleList() {
        this.editLoading = true;
        this.getmodules = this.http.get(this.getmoduleList_api).subscribe((res) => {
            this.moduleList = res;
            // console.log("Get moduleList",this.moduleList);
            this.editLoading = false;
        }, errRes => {
            // console.log("Get moduleList >", errRes); 
            this.editLoading = false;
        });
    }
    /*Get modules end */
    // ---------- init start ----------
    init() {
        if (this.parms_action_name == 'edit') {
            this.actionHeaderText = 'Edit';
            this.editLoading = true;
            //edit data call
            this.editDataSubscribe = this.http.get(this.editApi).subscribe((res) => {
                this.editLoading = false;
                // console.log("Edit data  res >", res.return_data);
                this.model = {
                    roleName: res.roleName,
                    modules: res.modules
                };
                // console.log('modules', this.model.modules);
                // this.ngsel(this.model.instId);
                this.model.creatDate = moment__WEBPACK_IMPORTED_MODULE_3__(res.lcCreatDate).format('YYYY-MM-DD');
                // console.log('this.model.creatDate', this.model);
                // edit data
                this.allEditData = res;
                // console.log('this.allEditData', this.allEditData);
            }, errRes => {
                // this.selectLoadingDepend = false;
                this.editLoading = false;
            });
        }
        else {
            this.actionHeaderText = 'Add';
        }
    }
    onSubmitForm(form) {
        // console.log("add form submit >", form.value);
        this.formLoading = true;
        let formValue = form.value;
        // console.log('formValue', formValue);
        let modules = [];
        // console.log('formValue.length', formValue.length);
        // console.log('formValue.modules[index].modName', formValue.modules0modName);
        for (let index = 0; index < formValue.length; index++) {
            modules.push({
                "modName": formValue[`modules` + index + `modName`],
                "modPrivs": {
                    "create": formValue[`modules` + index + `create`],
                    "update": formValue[`modules` + index + `update`],
                    "list": formValue[`modules` + index + `list`],
                    "delete": formValue[`modules` + index + `delete`]
                }
            });
        }
        // console.log('modules', modules);
        let formAllData = {
            "roleName": formValue.roleName,
            "modules": modules
        };
        // console.log('formAllData',formAllData);
        if (!form.valid) {
            return;
        }
        if (this.parms_action_name == 'edit') {
            this.formSubmitSubscribe = this.http.post(this.editForm_api, formAllData).subscribe((response) => {
                this.formLoading = false;
                // console.log("add form response >", response);
                if (response.status == 200) {
                    this.router.navigateByUrl('role-list');
                    this.commonUtils.presentToast('success', response.message);
                    form.reset();
                }
                else {
                    this.commonUtils.presentToast('error', response.message);
                }
            }, errRes => {
                this.formLoading = false;
            });
        }
        else if (this.parms_action_name == 'add') {
            this.formSubmitSubscribe = this.http.post(this.form_api, formAllData).subscribe((response) => {
                this.formLoading = false;
                // console.log("add form response >", response);
                if (response.status == 200) {
                    this.router.navigateByUrl('role-list');
                    this.commonUtils.presentToast('success', response.message);
                    form.reset();
                    this.getmoduleList();
                }
                else {
                    this.commonUtils.presentToast('error', response.message);
                }
            }, errRes => {
                this.formLoading = false;
            });
        }
    }
    // form submit end
    // ----------- destroy subscription start ---------
    ngOnDestroy() {
        if (this.formSubmitSubscribe !== undefined) {
            this.formSubmitSubscribe.unsubscribe();
        }
        if (this.editDataSubscribe !== undefined) {
            this.editDataSubscribe.unsubscribe();
        }
        if (this.permissionDataSubscribe !== undefined) {
            this.permissionDataSubscribe.unsubscribe();
        }
    }
};
AddRolePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService }
];
AddRolePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-role',
        template: _raw_loader_add_role_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_role_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddRolePage);



/***/ }),

/***/ 16036:
/*!*******************************************************************!*\
  !*** ./src/app/pages/role_management/add-role/add-role.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcm9sZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 28017:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role_management/add-role/add-role.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"page-header-left\">\r\n                        <h3>{{parms_action_name}} Role\r\n                            <!-- <small>Divatt Admin panel</small> -->\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ol class=\"breadcrumb float-right\">\r\n                      <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                              <mat-icon>home</mat-icon>\r\n                          </a></li>\r\n                      <li class=\"breadcrumb-item\" >\r\n                        Role Management\r\n                      </li>\r\n                      <li class=\"breadcrumb-item active\">\r\n                        {{parms_action_name}} Role\r\n                      </li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-layout\">\r\n        <div class=\"form-wrapper\">\r\n          <div class=\"card card-box\">\r\n            <!-- <div class=\"card-header\">\r\n                <div class=\"card-header-tittle\">\r\n                  {{parms_action_name}} Role\r\n                </div>\r\n            </div> -->\r\n            <form action=\"\" #addForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addForm)\">\r\n              <div class=\"card-body\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\r\n                      <!-- Role name -->\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                          <mat-label>Role Name</mat-label>\r\n                          <input matInput  name=\"roleName\" [(ngModel)]=\"model.roleName\" required pattern=\"\\S(.*\\S)?\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                      <h2>Role Permissions</h2>\r\n                      <div class=\"table-responsive \">\r\n                        <table>\r\n                          <thead>\r\n                            <th>Module Name</th>\r\n                            <th>List</th>\r\n                            <th>Create</th>\r\n                            <th>Update</th>\r\n                            <th>Delete</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of moduleList?.adminModules; let i = index; let first = first;\" >\r\n                              <td>\r\n                                {{item?.title}} \r\n                                <input type=\"hidden\" name=\"modules{{i}}modName\" [(ngModel)]=\"item.title_code\">\r\n                                <input type=\"hidden\" name=\"length\" [(ngModel)]=\"moduleList.adminModules.length\">\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}list\"\r\n                                [(ngModel)] = \"item.list\"\r\n                                [checked]=\"item.list\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}create\"\r\n                                [(ngModel)] = \"item.create\"\r\n                                [checked]=\"item.create\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}update\"\r\n                                [(ngModel)] = \"item.update\"\r\n                                [checked]=\"item.update\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}delete\"\r\n                                [(ngModel)] = \"item.delete\"\r\n                                [checked]=\"item.delete\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n      \r\n              <div class=\"card-footer\">\r\n                <div></div>\r\n                <div>\r\n                  <ion-button class=\"custom-btn\" type=\"submit\" [disabled]=\"!addForm.valid\">\r\n                    <ion-spinner *ngIf=\"formLoading\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                    Save\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" [routerLink]=\"['/', 'role-list']\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_role_management_add-role_add-role_module_ts-es2015.js.map