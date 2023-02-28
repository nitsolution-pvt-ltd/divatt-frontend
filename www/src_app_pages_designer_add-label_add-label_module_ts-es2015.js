(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_designer_add-label_add-label_module_ts"],{

/***/ 44101:
/*!**********************************************************************!*\
  !*** ./src/app/pages/designer/add-label/add-label-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLabelPageRoutingModule": function() { return /* binding */ AddLabelPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_label_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-label.page */ 16795);




const routes = [
    {
        path: '',
        component: _add_label_page__WEBPACK_IMPORTED_MODULE_0__.AddLabelPage
    }
];
let AddLabelPageRoutingModule = class AddLabelPageRoutingModule {
};
AddLabelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddLabelPageRoutingModule);



/***/ }),

/***/ 1533:
/*!**************************************************************!*\
  !*** ./src/app/pages/designer/add-label/add-label.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLabelPageModule": function() { return /* binding */ AddLabelPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_label_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-label-routing.module */ 44101);
/* harmony import */ var _add_label_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-label.page */ 16795);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AddLabelPageModule = class AddLabelPageModule {
};
AddLabelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _add_label_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddLabelPageRoutingModule
        ],
        declarations: [_add_label_page__WEBPACK_IMPORTED_MODULE_1__.AddLabelPage]
    })
], AddLabelPageModule);



/***/ }),

/***/ 16795:
/*!************************************************************!*\
  !*** ./src/app/pages/designer/add-label/add-label.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLabelPage": function() { return /* binding */ AddLabelPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_label_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-label.page.html */ 34518);
/* harmony import */ var _add_label_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-label.page.scss */ 50866);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);








let AddLabelPage = class AddLabelPage {
    constructor(activatedRoute, http, router, commonUtils, authService) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.commonUtils = commonUtils;
        this.authService = authService;
        this.values = [{}];
        this.model = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.commonFunction();
    }
    // commonFunction start
    commonFunction() {
        // get active url name
        this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
        this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
        this.parms_LevelName = this.activatedRoute.snapshot.paramMap.get('name');
        // console.log('parms_action_name', this.parms_action_name);
        // console.log('parms_action_id', this.parms_LevelName);
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
                            // console.log('moduleUrlName,pageUrlName[1],moduleUrlName[0]',moduleUrlName,pageUrlName[1],moduleUrlName[0]);
                            if (pageUrlName[1] == moduleUrlName[0]) {
                                // console.log('pageUrlName[1]', pageUrlName[1]);
                                if (this.parms_action_name == 'add' && item.modPrivs.create == true) {
                                    // console.log('-----Permission create Granted-----');
                                    //  this.getcategoryList();
                                    // this.getproductMeasurement()
                                    break;
                                }
                                else if (this.parms_action_name == 'edit' && item.modPrivs.update == true) {
                                    // console.log('-----Permission update Granted-----');
                                    this.getLevel();
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
    // // commonFunction end
    // //       // getspecificationById start
    getLevel() {
        this.loader = true;
        this.getLevelSubscribe = this.http.get("adminMData/getDesignerCategory/" + this.parms_LevelName).subscribe((res) => {
            this.loader = false;
            // console.log("getLebelDataSubscribe",res);
            this.Lebel_id = res.id;
            this.model = {
                Name: res.Name,
            };
            // console.log("Mesorment",this.model);
        }, (error) => {
            this.loader = false;
            // console.log("error",error.error.message);
            this.commonUtils.presentToast('error', error.error.message);
        });
    }
    removevalue(i) {
        this.values.splice(i, 1);
    }
    addvalue() {
        this.values.push({ name: "" });
    }
    // form submit start
    onSubmitLebelForm(form) {
        this.btnloader = true;
        // console.log("allLebeldata",this.values,form.value);
        // add api start
        if (this.parms_action_name == 'add') {
            // set all value
            let allLebel = [];
            for (let i = 0; i < this.values.length; i++) {
                allLebel.push(this.values[i].name);
            }
            // console.log("allLebeldata",this.values,form.value,allLebel);
            this.allLebeldata = {
                id: 101,
                designerLevels: allLebel,
                metaKey: "DESIGNER_LEVELS",
            };
            // set all val
            this.addLebelSubscribe = this.http.put('adminMData/addDesignerCategory', this.allLebeldata).subscribe((res) => {
                // window.location.reload();
                // console.log("allLebeldata",this.allLebeldata,"response",res);
                this.router.navigateByUrl('/specifiction-list');
                this.commonUtils.presentToast('success', res.message);
                this.btnloader = false;
                form.reset();
                this.router.navigateByUrl('/level-designer');
                this.values = null;
            }, error => {
                // console.log(error);
                this.btnloader = false;
                this.commonUtils.presentToast('error', error.error.message);
            });
        }
        // add api end
        // edit api start
        else if (this.parms_action_name == 'edit') {
            // console.log("else",this.model); 
            let allLebel = [];
            allLebel.push(form.value.Name);
            var updateLevel = {
                designerLevels: allLebel,
            };
            this.addLebelSubscribe = this.http.put("adminMData/updateDesignerLevels/" + this.parms_LevelName, updateLevel).subscribe((res) => {
                // console.log("updateLevel",res);
                this.commonUtils.presentToast('success', res.message);
                this.router.navigateByUrl('/level-designer');
                form.reset();
            }, error => {
                this.commonUtils.presentToast('success', error.error.message);
            });
        }
        // edit api end
    }
    //  form submit end  
    ngOnDestroy() {
        if (this.permissionDataSubscribe !== undefined) {
            this.permissionDataSubscribe.unsubscribe();
        }
        if (this.getLevelSubscribe !== undefined) {
            this.getLevelSubscribe.unsubscribe();
        }
    }
};
AddLabelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AddLabelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-label',
        template: _raw_loader_add_label_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_label_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddLabelPage);



/***/ }),

/***/ 50866:
/*!**************************************************************!*\
  !*** ./src/app/pages/designer/add-label/add-label.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbGFiZWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 34518:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/designer/add-label/add-label.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"page-header-left\">\r\n                        <h3>{{parms_action_name}} Level\r\n                            <!-- <small>Divatt Admin panel</small> -->\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ol class=\"breadcrumb float-right\">\r\n                      <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                              <mat-icon>home</mat-icon>\r\n                          </a></li>\r\n                      <li class=\"breadcrumb-item\" >\r\n                        Designer Level\r\n                      </li>\r\n                      <li class=\"breadcrumb-item\" >\r\n                        {{parms_action_name}} Level\r\n                      </li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-layout\">\r\n      <div class=\"form-wrapper\">\r\n        <div class=\"row justify-content-center\" *ngIf=\"loader\"><mat-spinner class=\"form-get-loader\"></mat-spinner></div>\r\n        <div class=\"card card-box\" *ngIf=\"!loader\">\r\n          <!-- <div class=\"card-header\">\r\n              <div class=\"card-header-tittle\">\r\n                {{parms_action_name}} Designer Level\r\n              </div>\r\n              \r\n          </div> -->\r\n          <form #Lebel=\"ngForm\" (ngSubmit)=\"onSubmitLebelForm(Lebel)\">\r\n            <div class=\"card-body\" *ngIf=\"parms_action_name == 'add'\">\r\n              <div class=\"col-md-12\">  \r\n                <ion-grid>\r\n                  <ion-row>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <div class=\"d-flex align-items-center\">\r\n                        <span class=\"text-dark font-weight-bold h4 mb-0 mr-2\">Add Level</span>\r\n                      <ion-button class=\"custom-btn\"  (click)=\"addvalue()\">\r\n                        <mat-icon>add</mat-icon>\r\n                      </ion-button>\r\n                    </div> \r\n                    </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\" *ngFor=\"let value of values; let i = index\">\r\n                      <div class=\"d-flex\">\r\n                        <div class=\"form-group\">\r\n                          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                            <mat-label>Level Name</mat-label>\r\n                            <input matInput  [(ngModel)]=\"value.name\"name=\"value{{i}}\" required pattern=\"\\S(.*\\S)?\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <ion-button color=\"danger\" (click)=\"removevalue(i)\" class=\"mt-2\" [ngClass]=\"{ 'disabled': values.length < 2}\">\r\n                          <mat-icon>cancel</mat-icon>\r\n                        </ion-button>\r\n                        </div>\r\n                    </ion-col>\r\n                    <!-- <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                      <ion-button class=\"custom-btn\"  (click)=\"addvalue()\">\r\n                        <mat-icon>add</mat-icon>\r\n                      </ion-button>\r\n                    </ion-col> -->\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\" *ngIf=\"parms_action_name == 'add'\">\r\n              <div></div>\r\n              <div>\r\n                \r\n                <ion-button class=\"custom-btn\" type=\"submit\"  [disabled]=\"!Lebel.valid\">\r\n                  <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                  Save\r\n                </ion-button>\r\n                <ion-button color=\"danger\" [routerLink]=\"['/', 'level-designer']\">\r\n                  Cancel\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\" *ngIf=\"parms_action_name == 'edit'\">\r\n              <div class=\"col-md-5 m-auto\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                          <mat-label>Level Name</mat-label>\r\n                          <input matInput  name=\"Name\" [(ngModel)] = \"model.Name\" required>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  </ion-grid>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\" *ngIf=\"parms_action_name == 'edit'\">\r\n              <div></div>\r\n              <div>\r\n                <ion-button class=\"custom-btn\" type=\"submit\"  [disabled]=\"!Lebel.valid\">\r\n                  <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                  Save\r\n                </ion-button>\r\n                <ion-button color=\"danger\" [routerLink]=\"['/', 'level-designer']\">\r\n                  Cancel\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_designer_add-label_add-label_module_ts-es2015.js.map