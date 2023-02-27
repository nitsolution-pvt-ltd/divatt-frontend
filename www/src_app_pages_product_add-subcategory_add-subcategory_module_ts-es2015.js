(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_add-subcategory_add-subcategory_module_ts"],{

/***/ 28300:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/product/add-subcategory/add-subcategory-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSubcategoryPageRoutingModule": function() { return /* binding */ AddSubcategoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_subcategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-subcategory.page */ 12790);




const routes = [
    {
        path: '',
        component: _add_subcategory_page__WEBPACK_IMPORTED_MODULE_0__.AddSubcategoryPage
    }
];
let AddSubcategoryPageRoutingModule = class AddSubcategoryPageRoutingModule {
};
AddSubcategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddSubcategoryPageRoutingModule);



/***/ }),

/***/ 44656:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product/add-subcategory/add-subcategory.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSubcategoryPageModule": function() { return /* binding */ AddSubcategoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_subcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-subcategory-routing.module */ 28300);
/* harmony import */ var _add_subcategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subcategory.page */ 12790);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let AddSubcategoryPageModule = class AddSubcategoryPageModule {
};
AddSubcategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _add_subcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddSubcategoryPageRoutingModule
        ],
        declarations: [_add_subcategory_page__WEBPACK_IMPORTED_MODULE_1__.AddSubcategoryPage]
    })
], AddSubcategoryPageModule);



/***/ }),

/***/ 12790:
/*!***********************************************************************!*\
  !*** ./src/app/pages/product/add-subcategory/add-subcategory.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSubcategoryPage": function() { return /* binding */ AddSubcategoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_subcategory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-subcategory.page.html */ 52509);
/* harmony import */ var _add_subcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subcategory.page.scss */ 75060);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);








let AddSubcategoryPage = class AddSubcategoryPage {
    constructor(activatedRoute, http, router, commonUtils, authService) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.commonUtils = commonUtils;
        this.authService = authService;
        this.model = {};
        // getcatById end
        /* -----------Image uploading start----------- */
        this.imageSrc = '';
        this.previewimageSrc = '';
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
        this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
        // console.log('parms_action_name', this.parms_action_name);
        // console.log('parms_action_id', this.parms_action_id);
        this.getcategoryList();
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
                                    break;
                                }
                                else if (this.parms_action_name == 'edit' && item.modPrivs.update == true) {
                                    // console.log('-----Permission update Granted-----');
                                    this.getcatById();
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
    // commonFunction end
    // getcatById start
    getcatById() {
        this.loader = true;
        this.getsubCategorybyIdSubscribe = this.http.get("subcategory/view/" + this.parms_action_id).subscribe((res) => {
            this.loader = false;
            this.model = {
                categoryName: res.categoryName,
                categoryDescription: res.categoryDescription,
                categoryImage: res.categoryImage,
                id: res.id,
                createdBy: res.createdBy,
                parentId: parseInt(res.parentId),
            };
            this.imageSrc = res.categoryImage;
            this.previewimageSrc = res.categoryImage;
            // console.log("this.model",this.model);
        }, (error) => {
            this.loader = false;
            // console.log("error",error);
        });
    }
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.imageSrc = e.target.files[0];
        var fd = new FormData();
        fd.append("file", e.target.files[0]);
        this.http.post("admin/profile/s3/upload", fd).subscribe((res) => {
            this.imageSrc = res.path;
            this.previewimageSrc = res.path;
            this.model.categoryImage = res.path;
            // console.log("profileimgpath",this.imageSrc);
            // this.commonUtils.presentToast('success', res.message);
        }, (error) => {
            // console.log("error",error);
            this.commonUtils.presentToast('error', error.error.message);
        });
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.previewimageSrc = reader.result;
        // console.log("imageSrc1",this.imageSrc);
    }
    /* Image uploading end */
    // form submit start
    onSubmitsubCategoryForm(form) {
        this.btnloader = true;
        // add api start
        if (this.parms_action_name == 'add') {
            // set all value
            this.allcategorydata = {
                categoryDescription: form.value.categoryDescription,
                categoryName: form.value.categoryName,
                parentId: form.value.parentId,
                categoryImage: this.imageSrc,
                level: 0,
                // createdBy:this.categoryModel.createdBy,
                createdBy: 'Admin',
            };
            // set all val
            var fd = new FormData();
            fd.append("categoryImage", this.imageSrc);
            this.addsubCategorySubscribe = this.http.post('subcategory/add', this.allcategorydata).subscribe((res) => {
                // window.location.reload();
                // console.log("allcategorydata",this.allcategorydata,"response",res);
                this.router.navigateByUrl('/subcategory-list');
                this.btnloader = false;
                this.commonUtils.presentToast('success', res.message);
                form.reset();
            }, error => {
                this.btnloader = false;
                // console.log(error);
                this.commonUtils.presentToast('error', error.error.message);
            });
        }
        // add api end
        // edit api start
        else if (this.parms_action_name == 'edit') {
            // console.log("else",this.imageSrc,this.model.categoryImage);      
            this.allcategorydata = {
                categoryDescription: form.value.categoryDescription,
                categoryName: form.value.categoryName,
                categoryImage: this.imageSrc,
                level: 0,
                id: this.model.id,
                parentId: form.value.parentId,
                createdBy: this.model.createdBy,
            };
            // console.log("this.allcategorydata",this.allcategorydata);
            this.addsubCategorySubscribe = this.http.put("subcategory/update/" + this.parms_action_id, this.allcategorydata).subscribe((res) => {
                // console.log("allcategorydatay",this.allcategorydata,"response",res);
                this.btnloader = false;
                this.commonUtils.presentToast('success', res.message);
                this.router.navigateByUrl('/subcategory-list');
                form.reset();
            }, error => {
                this.btnloader = false;
                // // console.log("error",error);
                this.commonUtils.presentToast('error', error.error.message);
                // recall category list
            });
        }
        // edit api end
    }
    //  form submit end  
    // getcategoryList start
    getcategoryList() {
        this.getCategoryListSubscribe = this.http.get("category/list?limit=0").subscribe((res) => {
            // console.log("res",res);
            this.categoryslist = res.data;
        }, (error) => {
            // console.log("error",error);
        });
    }
    // getcategoryList end
    ngsel(e) {
    }
    // ngOnDestroy start
    ngOnDestroy() {
        if (this.addsubCategorySubscribe !== undefined) {
            this.addsubCategorySubscribe.unsubscribe();
        }
        if (this.getCategoryListSubscribe !== undefined) {
            this.getCategoryListSubscribe.unsubscribe();
        }
        if (this.getsubCategorybyIdSubscribe !== undefined) {
            this.getsubCategorybyIdSubscribe.unsubscribe();
        }
        if (this.permissionDataSubscribe !== undefined) {
            this.permissionDataSubscribe.unsubscribe();
        }
    }
};
AddSubcategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AddSubcategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-subcategory',
        template: _raw_loader_add_subcategory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_subcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddSubcategoryPage);



/***/ }),

/***/ 75060:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product/add-subcategory/add-subcategory.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3ViY2F0ZWdvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 52509:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-subcategory/add-subcategory.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"page-header-left\">\r\n                        <h3>{{parms_action_name}} Sub category\r\n                            <!-- <small>Divatt Admin panel</small> -->\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ol class=\"breadcrumb float-right\">\r\n                      <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                              <mat-icon>home</mat-icon>\r\n                          </a></li>\r\n                      <li class=\"breadcrumb-item\" >\r\n                        Category Management\r\n                      </li>\r\n                      <li class=\"breadcrumb-item active\">\r\n                        {{parms_action_name}} Sub category\r\n                      </li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-layout\">\r\n      <div class=\"form-wrapper\">\r\n        <div class=\"row justify-content-center\" *ngIf=\"loader\"><mat-spinner class=\"form-get-loader\"></mat-spinner></div>\r\n\r\n        <div class=\"card card-box\" *ngIf=\"!loader\">\r\n          <!-- <div class=\"card-header\">\r\n              <div class=\"card-header-tittle\">\r\n                {{parms_action_name}} Sub category\r\n              </div>\r\n              \r\n          </div> -->\r\n          <form #subcategory=\"ngForm\" (ngSubmit)=\"onSubmitsubCategoryForm(subcategory)\">\r\n            <div class=\"card-body\">\r\n              <div class=\"col-md-6 m-auto\">  \r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                      <div class=\"form-item ngsel\">\r\n                        <ng-select [items]=\"categoryslist\" \r\n                                bindLabel=\"categoryName\" \r\n                                name=\"parentId\"\r\n                                placeholder=\"Select Category\"\r\n                                bindValue=\"id\" \r\n                                [(ngModel)]=\"model.parentId\"\r\n                                (change)=\"ngsel(model.parentId)\"\r\n                                required>\r\n                        </ng-select>\r\n                        <label>Select Category </label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- Name -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                          <mat-label>Sub category Name</mat-label>\r\n                          <input matInput  name=\"categoryName\" [(ngModel)]=\"model.categoryName\"  pattern=\"\\S(.*\\S)?\" required>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                          <mat-label>Sub category Description</mat-label>\r\n                          <textarea matInput  name=\"categoryDescription\" [(ngModel)]=\"model.categoryDescription\" required></textarea>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    \r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                     <div class=\"form-item\">\r\n                        <div class=\"custom-file\">\r\n                          <input class=\"custom-file-input\" id=\"singleFileUpload\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event)\">\r\n                          <label class=\"custom-file-label\" for=\"singleFileUpload\">Choose img&nbsp;*</label>\r\n                          <img [src]=\"previewimageSrc\"/>\r\n                          <input type=\"hidden\" name=\"previewimageSrc\" [(ngModel)]=\"previewimageSrc\" required>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <div></div>\r\n              <div>\r\n                \r\n                <ion-button class=\"custom-btn\" [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"  [disabled]=\"!subcategory.valid\">\r\n                  <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                  Save\r\n                </ion-button>\r\n                <ion-button color=\"danger\" [routerLink]=\"['/', 'subcategory-list']\">\r\n                  Cancel\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_add-subcategory_add-subcategory_module_ts-es2015.js.map