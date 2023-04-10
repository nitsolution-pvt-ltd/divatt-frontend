(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth/auth.guard */ 26525);




const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/auth.module */ 6621)).then(m => m.AuthPageModule)
    },
    {
        path: 'role/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_role_management_add-role_add-role_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/role_management/add-role/add-role.module */ 42344)).then(m => m.AddRolePageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'role-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_role_management_role-list_role-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/role_management/role-list/role-list.module */ 50129)).then(m => m.RoleListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'role-permission',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_role_management_role-permission_role-permission_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/role_management/role-permission/role-permission.module */ 31937)).then(m => m.RolePermissionPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal/modal.module */ 89399)).then(m => m.ModalPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 88558)).then(m => m.ProfilePageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'product-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/product.module */ 85888)).then(m => m.ProductPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'add-designer-product/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_designer_add-designer-product_add-designer-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/designer/add-designer-product/add-designer-product.module */ 51392)).then(m => m.AddDesignerProductPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'designer-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_designer_designer-list_designer-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/designer/designer-list/designer-list.module */ 33986)).then(m => m.DesignerListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'category-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_category_category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/category/category.module */ 85697)).then(m => m.CategoryPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'subcategory-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_subcategory_subcategory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/subcategory/subcategory.module */ 23295)).then(m => m.SubcategoryPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'category/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_add-category_add-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/add-category/add-category.module */ 49844)).then(m => m.AddCategoryPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'subcategory/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_add-subcategory_add-subcategory_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/add-subcategory/add-subcategory.module */ 44656)).then(m => m.AddSubcategoryPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'color/:action/:name',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_add-color_add-color_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/add-color/add-color.module */ 94550)).then(m => m.AddColorPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'color-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_color_color_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/color/color.module */ 87911)).then(m => m.ColorPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'employee/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_management_add-employee_add-employee_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/employee_management/add-employee/add-employee.module */ 1070)).then(m => m.AddEmployeePageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'employee-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee_management_employee-list_employee-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/employee_management/employee-list/employee-list.module */ 98440)).then(m => m.EmployeeListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/error/error.module */ 5204)).then(m => m.ErrorPageModule)
    },
    {
        path: 'order-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_order-list_order-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/order-list/order-list.module */ 21401)).then(m => m.OrderListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'order-products-list/:orderId/:productId/:productSize',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_order-list_order-products-list_order-products-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/order-list/order-products-list/order-products-list.module */ 13749)).then(m => m.OrderProductsListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'order-list-designer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_designer_order-list-designer_order-list-designer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/designer/order-list-designer/order-list-designer.module */ 84154)).then(m => m.OrderListDesignerPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'product-view/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_product-view_product-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/product-view/product-view.module */ 72227)).then(m => m.ProductViewPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'user-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_user-list_user-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user-list/user-list.module */ 34543)).then(m => m.UserListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'level-designer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_designer_designer-label_designer-label_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/designer/designer-label/designer-label.module */ 63987)).then(m => m.DesignerLabelPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'level/:action/:name',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_designer_add-label_add-label_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/designer/add-label/add-label.module */ 1533)).then(m => m.AddLabelPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'order-products-designer/:orderId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_designer_order-list-designer_order-products-designer_order-products-designer_mo-51e30a").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/designer/order-list-designer/order-products-designer/order-products-designer.module */ 21736)).then(m => m.OrderProductsDesignerPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'designer-view/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_designer_designer-view_designer-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/designer/designer-view/designer-view.module */ 12402)).then(m => m.DesignerViewPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'hsn-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_hsn-list_hsn-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/hsn-list/hsn-list.module */ 63998)).then(m => m.HsnListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'hsn/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_product_add-hsn_add-hsn_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product/add-hsn/add-hsn.module */ 95723)).then(m => m.AddHsnPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'banner/:action/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_banner_banner_banner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/banner/banner/banner.module */ 2397)).then(m => m.BannerPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'banner-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_banner_banner-list_banner-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/banner/banner-list/banner-list.module */ 29801)).then(m => m.BannerListPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'payments',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_accounts_accounts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/accounts/accounts.module */ 63218)).then(m => m.AccountsPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'payments-view/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_accounts_accounts-view_accounts-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/accounts/accounts-view/accounts-view.module */ 83369)).then(m => m.AccountsViewPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'transactions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_transactions_transactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transactions/transactions.module */ 94)).then(m => m.TransactionsPageModule),
        canLoad: [_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled', preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ 51228);
/* harmony import */ var _services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/common-utils/common-utils */ 83914);












let AppComponent = class AppComponent {
    constructor(platform, activatedRoute, http, authService, menuCtrl, renderer, router, storage, commonUtils, // common functionlity come here
    _document //use for fabicon
    ) {
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.renderer = renderer;
        this.router = router;
        this.storage = storage;
        this.commonUtils = commonUtils;
        this._document = _document;
        this.main_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
        this.file_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.fileUrl;
        this.isActive = false;
        this.toggle = false;
        this.designermodules = [{
                modDetails: {
                    title: 'Dashboard',
                    title_icon: 'home',
                    url: 'dashboard',
                },
                modName: 'module1',
            }, {
                modDetails: {
                    title: "Product Management",
                    title_icon: "checkroom",
                    url: "product-list",
                },
                modName: 'module2',
            }];
        this.admin = false;
        this.productAdd = false;
        this.onSiteInformation();
    }
    toggleMenu(_item) {
        // console.log('', this.toggle);
        if (_item == false) {
            this.toggle = true;
            // this.menuCtrl.enable(true);
        }
        else {
            this.toggle = false;
            // this.menuCtrl.enable(false);
        }
    }
    ionViewWillEnter() {
        // console.log(window.location.href)
        let x = window.location.href.split('#')[1];
        let current = x.split('/')[1];
        // console.log("this.href", window.location.href.split('#')[1], current);
        if (current == 'auth') {
            this.menuicon = true;
        }
        else if (current == 'error') {
            this.menuicon = true;
        }
        // console.log('ionViewWillEnter');
    }
    ngOnInit() {
        // this.router.url;
        // console.log('this.router.url',this.router.url);
        this._document.getElementById('pageTitle').innerHTML = 'Divatt | Happy Shopping';
        // console.log("designermodules",this.designermodules);
        this.commonfunction();
        $.getScript('assets/js/script.js');
        $.getScript('assets/js/sticky-kit.js');
        // this.onActivate(event);
    }
    //  commonfunction start
    commonfunction() {
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            // // console.log('User ID', val.uid);
        });
    }
    // commonfunction end
    initializeApp() {
        // this._document.getElementById('pageTitle').innerHTML = 'Divatt | Happy Shopping';
        this.platform.ready().then(() => {
            // user data call
            this.userInfoData();
            // ----get current active url name start---
            this.activatedRoute.url.subscribe((activeUrl) => {
                this.url_name = window.location.pathname;
                // console.log('this.url_name app.componet.ts @@@>>',activeUrl, this.url_name.split('/')[1]);
                var y = localStorage.getItem('userdata');
                // console.log('retrievedObject: ', y);
                // console.log(window.location.href)
                let x = window.location.href.split('#')[1];
                let title = this.url_name.split('/')[1];
                let pageTitle = title.charAt(0).toUpperCase() + title.slice(1);
                // this._document.getElementById('pageTitle').innerHTML = 'Divatt | ' + pageTitle;
                let current = x === null || x === void 0 ? void 0 : x.split('/')[1];
                // console.log("this.href", window.location.href.split('#')[1], current);
                if (current == 'auth') {
                    this.menuicon = true;
                }
                else if (current == 'forgot-password') {
                    this.menuicon = true;
                }
            });
            //get current active url name end
            // observable data for all page url name get
            this.commonUtils.pagePathNameAnywhereObsv.subscribe(pathRes => {
                // // console.log('common utility path page url name #### @@@@@@@ >>', pathRes);
                this.url_path_name = pathRes;
            });
        });
    }
    //------------------- menu item show get_user_dtlsstart------------------------
    /*--------------------User info data get start--------------------*/
    userInfoData() {
        // console.log('userInfoData');
        this.userInfodDataLoading = true;
        this.authService.globalparamsData.subscribe(res => {
            // console.log('res>>', res);
            if (res != null || res != undefined) {
                this.userInfoSubscribe = this.http.get('auth/info/' + res.authority + '/' + res.username).subscribe((response) => {
                    this.userInfodDataLoading = false;
                    // console.log('this.get_user_dtls',response);
                    this.get_user_dtls = response;
                    if (res.authority == 'ADMIN') {
                        // this.userPermissionData(response.role);
                        this.admin = true;
                    }
                    else if (res.authority == 'DESIGNER') {
                        // this.getDesignerProfiledata(val.authority,val.username)
                        this.getDesignerProfiledata(res.uid);
                    }
                    else {
                        this.admin = false;
                    }
                }, errRes => {
                    this.userInfodDataLoading = false;
                });
            }
            else {
                this.menuicon = true;
            }
        });
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            // console.log('User ID', val);
            if (val != null || val != undefined) {
                if (this.url_name.split('/')[1] == 'auth' && val != null) {
                    this.router.navigateByUrl('/dashboard');
                }
                this.userInfoSubscribe = this.http.get('auth/info/' + val.authority + '/' + val.username).subscribe((response) => {
                    this.userInfodDataLoading = false;
                    // console.log('this.get_user_dtls',response);
                    this.get_user_dtls = response;
                    if (val.authority == 'ADMIN') {
                        // this.userPermissionData(response.role);
                        this.admin = true;
                    }
                    else {
                        this.admin = false;
                    }
                }, errRes => {
                    this.userInfodDataLoading = false;
                });
            }
            else {
                this.menuicon = true;
            }
        });
    }
    /*User info data get end*/
    // getDesignerProfiledata start
    getDesignerProfiledata(uid) {
        this.http.get("designer/" + uid).subscribe((res) => {
            this.designerprofiledata = res;
            if (res.profileStatus == 'COMPLETED') {
                this.productAdd = true;
            }
            else {
                this.productAdd = false;
            }
        }, (error) => {
            // console.log("error",error);
        });
    }
    // getDesignerProfiledata end
    /*--------------------User permission data get start--------------------*/
    userPermissionData(_role) {
        this.permissionMenuLoading = true;
        this.userPermissionDataSubscribe = this.http.get('admin/role/' + _role).subscribe((response) => {
            this.permissionMenuLoading = false;
            // console.log('this.get_user_permission',response);
            this.get_user_permission = response;
            // console.log("designermodules",this.designermodules);
            this.commonUtils.menuPermissionService(response.modules);
        }, errRes => {
            this.permissionMenuLoading = false;
        });
    }
    /*User permission data get end*/
    closeModal() {
        // console.log('Clicked');
        // this.menuCtrl.enable(false);
        this.menuCtrl.toggle();
    }
    onSiteInformation() {
        // // console.log('this.url_name app.componet.ts  pathname @@@>>',  window.location.pathname);
        this.site_path = window.location.pathname;
        this.site_href = window.location.href;
        this.site_href_split = window.location.href.split('/')[1];
        this.site_path_split = window.location.pathname.split('/')[1];
        // server print reasult///////
        /* site_path > /ci/xcelero/online/
        site_href > https://demo.rnjcs.in/ci/xcelero/online/#/auth
        site_href_split >
        site_path_split > ci  */
        const parsedUrl = new URL(window.location.href);
        const baseUrl = parsedUrl.hostname;
        //// console.log('parsedUrl> ', parsedUrl);
        // console.log('baseUrl> ', baseUrl); // this will print http://example.com or http://localhost:4200
        if (baseUrl == 'localhost' || baseUrl == '192.168.1.218') {
            this.site_url_name = 'https://www.marketing-crm.bongtechsolutions.com/';
        }
        else {
            this.site_url_name = window.location.href;
        }
        this.siteInfoLoading = true;
        // initializeApp
        this.initializeApp();
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils },
    { type: HTMLDocument //use for fabicon
        , decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT,] }] }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _pages_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/modal/modal.module */ 89399);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/interceptors/interceptor */ 82411);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.IonicStorageModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _pages_modal_modal_module__WEBPACK_IMPORTED_MODULE_3__.ModalPageModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
        ],
        providers: [
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE, useValue: 'en-GB' },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__.PathLocationStrategy },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS, useClass: _services_interceptors_interceptor__WEBPACK_IMPORTED_MODULE_4__.InterceptorProvider, multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA
        ]
    })
], AppModule);



/***/ }),

/***/ 1604:
/*!***************************************************************************!*\
  !*** ./src/app/common-component/common-footer/common-footer.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonFooterComponent": function() { return /* binding */ CommonFooterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./common-footer.component.html */ 79818);
/* harmony import */ var _common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-footer.component.scss */ 54965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CommonFooterComponent = class CommonFooterComponent {
    constructor() {
        this.today = Date.now();
    }
    ngOnInit() { }
};
CommonFooterComponent.ctorParameters = () => [];
CommonFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'common-footer',
        template: _raw_loader_common_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_common_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommonFooterComponent);



/***/ }),

/***/ 81090:
/*!***************************************************************************!*\
  !*** ./src/app/common-component/common-header/common-header.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonHeaderComponent": function() { return /* binding */ CommonHeaderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_common_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./common-header.component.html */ 88477);
/* harmony import */ var _common_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-header.component.scss */ 75325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/modal/modal.page */ 58167);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);











let CommonHeaderComponent = class CommonHeaderComponent {
    constructor(menuCtrl, modalController, router, storage, authService, http, commonUtils) {
        this.menuCtrl = menuCtrl;
        this.modalController = modalController;
        this.router = router;
        this.storage = storage;
        this.authService = authService;
        this.http = http;
        this.commonUtils = commonUtils;
        this.showSearch = false;
        this.userData = {};
        this.productAdd = false;
        this.openleftnav = false;
        router.events.subscribe((val) => {
            // // console.log('Route Change',val);
            this.openleftnav = false;
        });
    }
    ngOnInit() {
        // this.storage.set('name', 'Max');
        // Or to get a key/value pair
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            // console.log('All User Data', val);
            // // console.log("this.href",val.username.split('@')[0]);
            this.role = val.authority;
            this.getuserInfo(val.authority, val.username);
            this.storage.get('profileImageData').then((val) => {
                // console.log('profileImageData', val);
            });
        });
        this.commonfunction();
    }
    // ..... Login  modal start ......
    //  commonfunction start
    commonfunction() {
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            // console.log('User ID', val);
            if (val.authority == 'DESIGNER') {
                // this.getDesignerProfiledata(val.authority,val.username)
                this.getDesignerProfiledata(val.uid);
            }
        });
    }
    // commonfunction end
    // getDesignerProfiledata start
    getDesignerProfiledata(uid) {
        this.http.get("designer/" + uid).subscribe((res) => {
            this.designerprofiledata = res;
            // console.log("res",res);
            this.profileImage = res.designerProfile.profilePic;
            // console.log("this.profileImage",this.profileImage);
            if (res.profileStatus == 'COMPLETED') {
                this.productAdd = true;
            }
            else {
                this.productAdd = false;
            }
        }, (error) => {
            // console.log("error",error);
        });
    }
    // getDesignerProfiledata end
    // getuserInfo start
    getuserInfo(role, username) {
        // console.log("username",this.username);
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            if (val.authority == "DESIGNER") {
                this.http.get("designer/" + val.uid).subscribe((res) => {
                    this.userData = res;
                }, (error) => {
                    if (error.statuss == 500) {
                        this.authService.logout();
                    }
                });
            }
            else {
                this.http.get("auth/info/" + role + "/" + username).subscribe((res) => {
                    this.userData = res;
                    this.userPermissionData(res.role);
                    this.profileImage = res.profilePic;
                }, (error) => {
                    if (error.statuss == 500) {
                        this.authService.logout();
                    }
                });
            }
        });
    }
    // getuserInfo end
    openChangePasswordmodal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('openChangePasswordmodal_identifier ...........>>', _identifier);
            let changePassword_modal;
            changePassword_modal = yield this.modalController.create({
                component: src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
                cssClass: 'mymodalClass small ChangePassword',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            changePassword_modal.onDidDismiss()
                .then((getdata) => {
                // console.log('getdata >>>>>>>>>>>', getdata);
                if (getdata.data == 'submitClose') {
                }
            });
            return yield changePassword_modal.present();
        });
    }
    // Login modal end 
    showSearchBox(_item) {
        // console.log('showSearch>>', this.showSearch);
        if (this.showSearch == false) {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
        }
    }
    menuOpenClose() {
        this.menuCtrl.enable(false);
    }
    goToPage(url) {
        this.router.navigateByUrl(url);
    }
    // getDesignerProfiledata end
    /*--------------------User permission data get start--------------------*/
    userPermissionData(_role) {
        this.permissionMenuLoading = true;
        this.userPermissionDataSubscribe = this.http.get('admin/role/' + _role).subscribe((response) => {
            this.permissionMenuLoading = false;
            // console.log('this.get_user_permission',response);
            this.get_user_permission = response;
            // console.log("designermodules",this.designermodules);
            this.commonUtils.menuPermissionService(response.modules);
        }, errRes => {
            this.permissionMenuLoading = false;
        });
    }
    /*User permission data get end*/
    openNav() {
        this.openleftnav = !this.openleftnav;
    }
    // go to login page start
    logout() {
        this.authService.logout();
        // this.router.navigateByUrl('/welcome');
        localStorage.removeItem('token');
    }
};
CommonHeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils }
];
CommonHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'common-header',
        template: _raw_loader_common_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_common_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommonHeaderComponent);



/***/ }),

/***/ 11413:
/*!***************************************************************!*\
  !*** ./src/app/directives/directives/must-match.directive.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatchDirective": function() { return /* binding */ MustMatchDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _must_match_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./must-match.validator */ 84293);
var MustMatchDirective_1;




let MustMatchDirective = MustMatchDirective_1 = class MustMatchDirective {
    constructor() {
        this.mustMatch = [];
    }
    validate(formGroup) {
        return (0,_must_match_validator__WEBPACK_IMPORTED_MODULE_0__.MustMatch)(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
};
MustMatchDirective.propDecorators = {
    mustMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['mustMatch',] }]
};
MustMatchDirective = MustMatchDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
        selector: '[mustMatch]',
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS, useExisting: MustMatchDirective_1, multi: true }]
    })
], MustMatchDirective);



/***/ }),

/***/ 84293:
/*!***************************************************************!*\
  !*** ./src/app/directives/directives/must-match.validator.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": function() { return /* binding */ MustMatch; }
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ 9378:
/*!*****************************************************!*\
  !*** ./src/app/pages/modal/modal-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageRoutingModule": function() { return /* binding */ ModalPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.page */ 58167);




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_0__.ModalPage
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ 89399:
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageModule": function() { return /* binding */ ModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-routing.module */ 9378);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page */ 58167);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ModalPageModule = class ModalPageModule {
};
ModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPageRoutingModule
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_1__.ModalPage]
    })
], ModalPageModule);



/***/ }),

/***/ 58167:
/*!*******************************************!*\
  !*** ./src/app/pages/modal/modal.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": function() { return /* binding */ ModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.page.html */ 11610);
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.scss */ 85773);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ 51228);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);











// import { CategoryPage } from '../product/category/category.page';

var myDate = new Date();
let ModalPage = class ModalPage {
    constructor(navParams, modalController, http, storage, router, commonUtils, authService) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.commonUtils = commonUtils;
        this.authService = authService;
        this.hide = 'password';
        this.hide2 = 'password';
        this.hide3 = 'password';
        this.model = {};
        this.modal = {};
        this.showInfo2 = false;
        this.maritalstatuslist = [
            {
                id: 1, name: "Unmarried"
            }, {
                id: 2, name: "Married"
            }
        ];
        this.designerprofiledata = {
            ifscCode: '',
            bankName: '',
            accountNumber: '',
        };
        this.adminprofiledata = {};
        this.alladminprofileProfiledata = {};
        this.alldesignerProfiledata = {};
        this.stateList = [];
        this.countryList = [{
                id: 1, name: "India"
            }];
        this.active_class = false;
        this.Lebellist = [];
        this.authData = {};
        this.mesorementData = {};
        this.userData = {};
        // setdesignerProfiledata end
        /* Validation errors start */
        this.errors = {};
        // ChangepswForm end
        this.aadharCardfile = '';
        this.panCardfile = '';
        this.previewimageSrc = '';
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        const date = new Date();
        // this.filter_date =  moment(date.setDate(date.getDate() + 7)).format('YYYY-MM-DD')
        this.filter_date = moment__WEBPACK_IMPORTED_MODULE_2__(date.setDate(date.getDate() + 7)).format('YYYY-MM-DD');
        // console.log("date",date.setDate(date.getDate() + 7),date.getDate() + 7,this.filter_date);
        let currentDate = Date.now();
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY/MM/DD');
        this.currentDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD hh:mm:ss');
        // this.dateRange =  moment(new Date()).format('YYYY-MM-DD');
        // console.log('this.currentDate',this.currentDate,this.currentDateTime);
        this.currentYear = (new Date()).getFullYear() - 18;
        // console.log("DATE",myDate,(new Date()).getFullYear(),this.currentYear);
        this.commonFunction();
        // this.designerprofiledata.country = 1;
        this.get_item = '';
        this.get_identifier = this.navParams.get('identifier');
        this.get_item = this.navParams.get('modalForm_item');
        this.get_array = this.navParams.get('modalForm_array');
        if (this.get_identifier == 'changepassword_modal') {
            this.heder_title = 'change password ';
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'categoryadd_modal') {
            this.heder_title = 'Add Category ';
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'designerprofile_modal') {
            this.heder_title = 'Edit Profile ';
            // console.log("get_item",this.get_item);
            this.setdesignerProfiledata();
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'adminprofile_modal') {
            this.heder_title = 'Edit Profile ';
            // console.log("get_item",this.get_item);
            this.setadminProfiledata();
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'productapprove_modal') {
            // console.log("get_item",this.get_item);
            // this.api_url = 'user/user-login';
            if (this.get_item.type == "Approved") {
                this.heder_title = 'Approve Product ';
            }
            else if (this.get_item.type == "Rejected") {
                this.heder_title = 'Reject Product ';
            }
        }
        else if (this.get_identifier == 'message_modal') {
            this.heder_title = 'Comments of Approve and Rejection';
            // console.log("get_item",this.get_item);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'rejectmessage_modal') {
            this.heder_title = 'Comments of Rejection';
            // console.log("get_item",this.get_item);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'Desigerrejected_modal') {
            this.heder_title = 'Reason for rejection ';
            // console.log("get_item",this.get_item);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'DesigerApprove_modal') {
            this.heder_title = 'Approve Designer';
            // console.log("get_item",this.get_item);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderCommentdesigner_modal') {
            this.heder_title = 'Add Comment';
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderCommentAdmin_modal') {
            this.heder_title = 'Update tracking Order';
            // console.log("tracking",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderDeliveryAdmin_modal') {
            this.heder_title = 'Delivery Partner data';
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'DeliveredAdmin_modal') {
            this.heder_title = 'Delivered Details';
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderCancelAdmin_modal') {
            this.heder_title = 'Reason of Cancel';
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderCancelDesigner_modal') {
            this.heder_title = 'Reason of Cancel';
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'cancelledApprovalModal') {
            this.heder_title = 'Request for cancelation';
            this.model.orderStatus = 'Approve';
            console.log("get_item", this.get_item, this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderExportModal') {
            this.heder_title = 'Export Order Document';
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderpackModal') {
            this.heder_title = 'Order Packed Form';
            // console.log("get_item",this.get_item,this.get_array);
            this.productId = this.get_item.productId;
            this.orderId = this.get_item.orderId;
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'ordershippedModal') {
            this.heder_title = 'Order Shipped Form';
            // console.log("get_item",this.get_item,this.get_array);
            this.productId = this.get_item.productId;
            this.orderId = this.get_item.orderId;
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'returnRequestConfirm') {
            // this.heder_title = 'Order Delivered Form';
            this.heder_title = 'Return Request confirm';
            // console.log("get_item",this.get_item,this.get_array);
            this.productId = this.get_item.productId;
            this.orderId = this.get_item.orderId;
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'orderdeliverModal') {
            this.heder_title = 'Order Delivered Form';
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
            this.productId = this.get_item.productId;
            this.orderId = this.get_item.orderId;
            let x = this.get_item.shippingDate.split(" ");
            this.mindateRange = moment__WEBPACK_IMPORTED_MODULE_2__(this.get_item.createdOn, 'DD/MM/YYYY hh:mm:ss').format('YYYY-MM-DD');
            let currentDate2, currentDate = Date.now();
            currentDate2 = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD');
            this.model.deliver_Date = currentDate2;
            this.model.deliveredDate = currentDate2;
            var dateArray = [], day = [], month = [], year = [], final;
            dateArray = x[0];
            for (let index = 0; index < dateArray.length; index++) {
                if (index == 0 || index == 1) {
                    day.push(dateArray[index]);
                }
                else if (index == 3 || index == 4) {
                    month.push(dateArray[index]);
                }
                else if (index == 6 || index == 7 || index == 8 || index == 9) {
                    year.push(dateArray[index]);
                }
            }
            year = year.toString();
            year = year.replaceAll(',', '');
            month = month.toString();
            month = month.replaceAll(',', '');
            day = day.toString();
            day = day.replaceAll(',', '');
            console.log('dateRange', day, month, year, final);
            // this.dateRange = year.toString()+'-'+month+'-'+day;
            this.dateRange = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            // this.dateRange = '2022-12-24'
            // console.log('this.dateRange',this.dateRange,this.get_item.shippingDate,x);
        }
        else if (this.get_identifier == 'ordersModal') {
            this.heder_title = 'Customization';
        }
        else if (this.get_identifier == 'accountStatus') {
            this.heder_title = 'Designer Return Amount ';
            // this.api_url = 'user/user-login';
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD');
            console.log('this.get_item', this.get_item);
            this.model.status = this.get_item.designer_return_amount[0].status;
            this.model.remarks = this.get_item.designer_return_amount[0].remarks;
            this.model.paymentDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.get_item.designer_return_amount[0].payment_datetime).format('YYYY-MM-DD');
            this.model.updatedDatetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.get_item.designer_return_amount[0].updated_datetime).format('YYYY-MM-DD');
            this.model.updated_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(this.get_item.designer_return_amount[0].updated_datetime).format('YYYY-MM-DD hh:mm:ss');
            // console.log("this.model.paymentDate",this.model.paymentDate,this.get_item.designer_return_amount[0].payment_datetime);
            this.model.payment_datetime = this.get_item.designer_return_amount[0].payment_datetime;
        }
        else if (this.get_identifier == 'serviceStatus') {
            this.heder_title = 'Service Charge';
            // this.api_url = 'user/user-login';
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD');
            // console.log('this.get_item',this.get_item);
            this.model.status = (_b = (_a = this.get_item) === null || _a === void 0 ? void 0 : _a.service_charge) === null || _b === void 0 ? void 0 : _b.status;
            this.model.remarks = (_d = (_c = this.get_item) === null || _c === void 0 ? void 0 : _c.service_charge) === null || _d === void 0 ? void 0 : _d.remarks;
            this.model.service_Date = moment__WEBPACK_IMPORTED_MODULE_2__((_f = (_e = this.get_item) === null || _e === void 0 ? void 0 : _e.service_charge) === null || _f === void 0 ? void 0 : _f.date).format('YYYY-MM-DD');
            this.model.servicedate = moment__WEBPACK_IMPORTED_MODULE_2__((_h = (_g = this.get_item) === null || _g === void 0 ? void 0 : _g.service_charge) === null || _h === void 0 ? void 0 : _h.date).format('YYYY-MM-DD hh:mm:ss');
            // console.log("this.model.paymentDate",this.model.paymentDate,this.get_item.designer_return_amount[0].payment_datetime);
        }
        else if (this.get_identifier == 'govt_charge') {
            this.heder_title = 'Government Charge';
            // this.api_url = 'user/user-login';
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD');
            // console.log('this.get_item',this.get_item);
            this.model.status = (_k = (_j = this.get_item) === null || _j === void 0 ? void 0 : _j.govt_charge[0]) === null || _k === void 0 ? void 0 : _k.status;
            this.model.remarks = (_m = (_l = this.get_item) === null || _l === void 0 ? void 0 : _l.govt_charge[0]) === null || _m === void 0 ? void 0 : _m.remarks;
            this.model.gov_Date = moment__WEBPACK_IMPORTED_MODULE_2__((_p = (_o = this.get_item) === null || _o === void 0 ? void 0 : _o.govt_charge[0]) === null || _p === void 0 ? void 0 : _p.datetime).format('YYYY-MM-DD');
            this.model.govdate = moment__WEBPACK_IMPORTED_MODULE_2__((_r = (_q = this.get_item) === null || _q === void 0 ? void 0 : _q.govt_charge[0]) === null || _r === void 0 ? void 0 : _r.datetime).format('YYYY-MM-DD hh:mm:ss');
            // console.log("this.model.paymentDate",this.model.govdate,this.get_item.govt_charge[0].datetime,this.model.gov_date );
        }
        else if (this.get_identifier == 'userCustomMesorment') {
            let type;
            if (this.get_item.sizeType == 'CM') {
                type = 'CMS';
            }
            else {
                type = 'inch';
            }
            this.mesorementData = this.get_item;
            this.heder_title = 'Standard Measurement Charts in ' + type;
            // console.log("get_item",this.get_item,this.get_array);
            // this.api_url = 'user/user-login';
        }
        else if (this.get_identifier == 'forceReturnModal') {
            this.heder_title = 'Force Return Comment';
            this.productId = this.get_item.productId;
            this.orderId = this.get_item.orderId;
        }
        else if (this.get_identifier == 'returnRefund') {
            this.heder_title = 'Return/Refund product';
            this.productId = this.get_item.productId;
            this.orderId = this.get_item.orderId;
            if ((_u = (_t = (_s = this.get_item) === null || _s === void 0 ? void 0 : _s.orderStatusDetails) === null || _t === void 0 ? void 0 : _t.returnFromAdmin) === null || _u === void 0 ? void 0 : _u.isReturn) {
                this.model.isReturn = 'true';
            }
            else if (!((_x = (_w = (_v = this.get_item) === null || _v === void 0 ? void 0 : _v.orderStatusDetails) === null || _w === void 0 ? void 0 : _w.returnFromAdmin) === null || _x === void 0 ? void 0 : _x.isReturn)) {
                this.model.isReturn = 'false';
            }
            this.model.comment = (_0 = (_z = (_y = this.get_item) === null || _y === void 0 ? void 0 : _y.orderStatusDetails) === null || _z === void 0 ? void 0 : _z.returnFromAdmin) === null || _0 === void 0 ? void 0 : _0.comment;
        }
        else if (this.get_identifier == 'forceReturnOnModal') {
            this.heder_title = 'Turn on Return';
            this.productId = this.get_item.productId;
            this.orderId = this.get_item.orderId;
        }
        // get user name
        // console.log('get_identifier',this.get_identifier);
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            // console.log('All User Data', val.username);
            this.username = val.username;
            this.userData = val;
            this.GetAdminData = this.http.get("auth/info/" + val.authority + '/' + val.username).subscribe((res) => {
                this.authData = res;
            }, (error) => {
            });
        });
        this.model.packedCovered = false;
        this.model.packingVideo = false;
    }
    // data for profile edit start
    // commonFunction start
    commonFunction() {
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            // console.log('User ID', val);
            this.authId = val.uid;
            this.role = localStorage.getItem('userdata');
            // console.log("Role",this.role);
            if (this.role == 'DESIGNER') {
                this.profileupdateApi = "designer/profile/update";
                // console.log("DESIGNER");
                this.getState();
            }
            else {
                this.GenarateInvoiceSubscribe = this.http.get("auth/info/" + val.authority + '/' + val.username).subscribe((res) => {
                    this.authData = res;
                }, (error) => {
                });
                this.profileupdateApi = "admin/profile/update";
                // console.log("Admi");
            }
        });
        this.getLebellist();
        // console.log(this.authData);
    }
    // commonFunction end
    // setadminProfiledata start
    setadminProfiledata() {
        //  console.log('adminprofiledata',this.get_item);
        //  this.adminprofiledata = this.get_item;
        //  this.adminprofiledata.admindob = moment(this.get_item.dob).format('YYYY-MM-DD');
        //  this.adminprofiledata.dob = this.get_item.dob;
        //  this.adminprofiledata.dob = this.get_item.dob;
        // console.log("this.profiledata",this.adminprofiledata);
        this.adminprofiledata = {
            admindob: moment__WEBPACK_IMPORTED_MODULE_2__(this.get_item.dob).format('YYYY-MM-DD'),
            dob: this.get_item.dob,
            firstName: this.get_item.firstName,
            lastName: this.get_item.lastName,
            gstIn: this.get_item.gstIn,
            email: this.get_item.email,
            gender: this.get_item.gender,
            profilePic: this.get_item.profilePic,
            mobileNo: this.get_item.mobileNo,
            pan: this.get_item.pan,
            country: this.get_item.country,
            state: this.get_item.state,
            city: this.get_item.city,
            pin: this.get_item.pin,
            password: this.get_item.password,
            roleName: this.get_item.roleName,
            uid: this.get_item.uid,
            role: this.get_item.role,
        };
        if (this.get_item.country) {
            this.getState();
        }
    }
    // setadminProfiledata end
    ordersSubmit(form, identifier) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
        console.log('get_item>>', this.get_item);
        // console.log("orders form...", form.value);
        this.orderItemStatus = identifier;
        var body = {};
        if (identifier == 'Orders') {
            body = {
                "OrdersDTO": {
                    "withCustomization": form.value.withCustomization,
                    "withDesignCustomization": form.value.withDesignCustomization,
                }
            };
        }
        else if (identifier == 'ordersCancel') {
        }
        else if (identifier == 'Packed') {
            body = {
                "PackedDTO": {
                    "packedCovered": form.value.packedCovered,
                    "packingVideo": form.value.packingVideo,
                }
            };
        }
        else if (identifier == 'Shipped') {
            body = {
                "ShippedDTO": {
                    "courierName": form.value.courierName,
                    "awbNumber": form.value.awbNumber
                }
            };
        }
        else if (identifier == 'Delivered') {
            const date = new Date();
            this.filter_date = moment__WEBPACK_IMPORTED_MODULE_2__(date.setMinutes(date.getMinutes() + 60)).format('YYYY-MM-DD : HH:mm:ss');
            console.log('filter_date', this.filter_date);
            var designerData = {}, total_amount = 0, basic_amount = 0, total_amount_received = 0, total_tax_amount = 0, total_tax = 0, fee = 0, igst = 0, igst2 = 0, cgst = 0, sgst = 0, data, accountData = {}, invoiceId, hsn_amount = 0, hsn_cgst = 0, tcs = 0, hsn_igst = 0, hsn_rate = 0, hsn_sgst = 0, net_payable_designer = 0;
            if (this.get_item.hsnData && this.get_item.salesPrice != 0) {
                // console.log("SALEPRICE");
                hsn_rate = ((_a = this.get_item.hsnData) === null || _a === void 0 ? void 0 : _a.cgst) + ((_b = this.get_item.hsnData) === null || _b === void 0 ? void 0 : _b.sgst) + ((_c = this.get_item.hsnData) === null || _c === void 0 ? void 0 : _c.igst);
                basic_amount = parseInt(((100 * ((_d = this.get_item) === null || _d === void 0 ? void 0 : _d.mrp)) / (100 + hsn_rate)).toFixed(0));
                // hsn_cgst = ((this.get_item.hsnData?.cgst * this.get_item.salesPrice) / 100).toFixed(2);
                // hsn_igst = ((this.get_item.hsnData?.igst * this.get_item.salesPrice) / 100).toFixed(2);
                // hsn_sgst =  ((this.get_item.hsnData?.sgst * this.get_item.salesPrice) / 100).toFixed(2);
                total_amount = parseFloat((((this.get_item.salesPrice * 12) / 100) + ((((this.get_item.salesPrice * 12) / 100) * 0.18) + ((this.get_item.mrp * 1) / 100))).toFixed(2));
                // total_tax = parseFloat((((((((this.get_item.salesPrice  * 12) / 100 ) * 18))) / 100) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
                fee = parseFloat(((basic_amount * 12) / 100).toFixed(2));
                total_tax = parseFloat(((basic_amount * 12) / 100).toFixed(2));
                igst = parseFloat((((basic_amount * 12) / 100) * 0.18).toFixed(2));
                // igst2 = parseFloat((((basic_amount  * 12) / 100 ) * 0.18).toFixed(2));
                cgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
                sgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
                total_amount_received = this.get_item.salesPrice;
                // total_amount_received = parseFloat(((this.get_item.salesPrice  * 12) / 100).toFixed(2));
                // net_payable_designer =  parseFloat((((basic_amount  * 12) / 100) - ((((this.get_item.salesPrice  * 12) / 100 ) * 0.18) + ((this.get_item.mrp * 1) / 100))).toFixed(2))
                // total_tax_amount = parseFloat(((((this.get_item.salesPrice  * 12) / 100 ) * 0.18) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
                tcs = parseFloat(((basic_amount * 1) / 100).toFixed(2));
                net_payable_designer = this.get_item.salesPrice - (tcs + igst + fee);
                total_tax_amount = fee + igst + tcs;
            }
            else {
                // console.log("MRP");
                hsn_rate = ((_e = this.get_item.hsnData) === null || _e === void 0 ? void 0 : _e.cgst) + ((_f = this.get_item.hsnData) === null || _f === void 0 ? void 0 : _f.sgst) + ((_g = this.get_item.hsnData) === null || _g === void 0 ? void 0 : _g.igst);
                basic_amount = parseInt(((100 * ((_h = this.get_item) === null || _h === void 0 ? void 0 : _h.mrp)) / (100 + hsn_rate)).toFixed(0));
                total_tax = parseFloat(((basic_amount * 12) / 100).toFixed(2));
                // hsn_amount = (((this.get_item.hsnData?.cgst * this.get_item.mrp) / 100) + ((this.get_item.hsnData?.sgst * this.get_item.mrp) / 100) + ((this.get_item.hsnData?.igst * this.get_item.mrp) / 100)).toFixed(2);
                // hsn_cgst = ((this.get_item.hsnData?.cgst * this.get_item.mrp) / 100).toFixed(2);
                // hsn_igst = ((this.get_item.hsnData?.igst * this.get_item.mrp) / 100).toFixed(2);
                // hsn_sgst =  ((this.get_item.hsnData?.sgst * this.get_item.mrp) / 100).toFixed(2);
                total_amount = parseFloat((((this.get_item.mrp * 12) / 100) + ((((this.get_item.mrp * 12) / 100) * 0.18) + ((this.get_item.mrp * 1) / 100))).toFixed(2));
                // total_tax = parseFloat((((((((this.get_item.mrp  * 12) / 100 ) * 18))) / 100) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
                fee = parseFloat(((basic_amount * 12) / 100).toFixed(2));
                igst = parseFloat((((basic_amount * 12) / 100) * 0.18).toFixed(2));
                // igst2 = parseFloat((((this.get_item.mrp  * 12) / 100 ) * 0.12).toFixed(2));
                cgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
                sgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
                total_amount_received = this.get_item.mrp;
                // total_amount_received = parseFloat(((this.get_item.mrp  * 12) / 100).toFixed(2));
                // total_tax_amount = parseFloat(((((this.get_item.mrp  * 12) / 100 ) * 0.18) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
                tcs = parseFloat(((basic_amount * 1) / 100).toFixed(2));
                net_payable_designer = this.get_item.mrp - (tcs + igst + fee);
                total_tax_amount = fee + igst + tcs;
            }
            //  console.log("basic_amount",basic_amount);
            let total_tax2 = parseInt(hsn_cgst) + parseInt(hsn_igst) + parseInt(hsn_sgst);
            //  console.log("hsn_cgst",hsn_cgst,hsn_igst,hsn_sgst,total_tax2);
            if ((_k = (_j = this.get_item) === null || _j === void 0 ? void 0 : _j.hsnData) === null || _k === void 0 ? void 0 : _k.igst) {
                hsn_amount = (_l = this.get_item) === null || _l === void 0 ? void 0 : _l.taxAmount;
                hsn_igst = parseFloat(((_m = this.get_item) === null || _m === void 0 ? void 0 : _m.taxAmount).toFixed(2));
                hsn_cgst = 0;
                hsn_sgst = 0;
            }
            else {
                hsn_amount = (_o = this.get_item) === null || _o === void 0 ? void 0 : _o.taxAmount;
                hsn_igst = 0;
                hsn_cgst = parseFloat((((_p = this.get_item) === null || _p === void 0 ? void 0 : _p.taxAmount) / 2).toFixed(2));
                hsn_sgst = parseFloat((((_q = this.get_item) === null || _q === void 0 ? void 0 : _q.taxAmount) / 2).toFixed(2));
            }
            this.http.get('designer/' + this.get_item.designerId).subscribe((res) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30;
                designerData = res;
                body = {
                    "DeliveryDTO": {
                        "deliveredDate": form.value.deliveredDate
                    }
                };
                // console.log('invoiceId',this.filter_date);
                var salesPrice = 0;
                if (((_a = this.get_item) === null || _a === void 0 ? void 0 : _a.salesPrice) == 0) {
                    salesPrice = (_b = this.get_item) === null || _b === void 0 ? void 0 : _b.mrp;
                }
                else {
                    salesPrice = (_c = this.get_item) === null || _c === void 0 ? void 0 : _c.salesPrice;
                }
                accountData = {
                    "admin_details": {
                        "address": ((_d = this.authData) === null || _d === void 0 ? void 0 : _d.city) + ',' + ((_e = this.authData) === null || _e === void 0 ? void 0 : _e.state) + ',' + ((_f = this.authData) === null || _f === void 0 ? void 0 : _f.country),
                        "admin_id": (_g = this.authData) === null || _g === void 0 ? void 0 : _g.uid,
                        "gstIn": (_h = this.authData) === null || _h === void 0 ? void 0 : _h.gstIn,
                        "pan": (_j = this.authData) === null || _j === void 0 ? void 0 : _j.pan,
                        "pin": (_k = this.authData) === null || _k === void 0 ? void 0 : _k.pin,
                        "mobile": (_l = this.authData) === null || _l === void 0 ? void 0 : _l.mobileNo,
                        "name": ((_m = this.authData) === null || _m === void 0 ? void 0 : _m.firstName) + ' ' + ((_o = this.authData) === null || _o === void 0 ? void 0 : _o.lastName),
                        "gender": (_p = this.authData) === null || _p === void 0 ? void 0 : _p.gender
                    },
                    "datetime": this.currentDateTime,
                    "designer_details": {
                        "address": (_q = designerData === null || designerData === void 0 ? void 0 : designerData.socialProfile) === null || _q === void 0 ? void 0 : _q.address,
                        "designer_id": designerData === null || designerData === void 0 ? void 0 : designerData.designerId,
                        "designer_name": designerData === null || designerData === void 0 ? void 0 : designerData.designerName,
                        "boutiqueName": (_r = designerData === null || designerData === void 0 ? void 0 : designerData.boutiqueProfile) === null || _r === void 0 ? void 0 : _r.boutiqueName,
                        "display_name": (_s = designerData === null || designerData === void 0 ? void 0 : designerData.designerProfile) === null || _s === void 0 ? void 0 : _s.displayName,
                        "gst_in": (_t = designerData === null || designerData === void 0 ? void 0 : designerData.boutiqueProfile) === null || _t === void 0 ? void 0 : _t.gstin,
                        "email": (_u = designerData === null || designerData === void 0 ? void 0 : designerData.designerProfile) === null || _u === void 0 ? void 0 : _u.email,
                        "mobile": (_v = designerData === null || designerData === void 0 ? void 0 : designerData.designerProfile) === null || _v === void 0 ? void 0 : _v.mobileNo,
                        "city": (_w = designerData === null || designerData === void 0 ? void 0 : designerData.designerProfile) === null || _w === void 0 ? void 0 : _w.city,
                        "state": (_x = designerData === null || designerData === void 0 ? void 0 : designerData.designerProfile) === null || _x === void 0 ? void 0 : _x.state,
                        "country": (_y = designerData === null || designerData === void 0 ? void 0 : designerData.designerProfile) === null || _y === void 0 ? void 0 : _y.country,
                        "pan": (_0 = (_z = designerData === null || designerData === void 0 ? void 0 : designerData.designerPersonalInfoEntity) === null || _z === void 0 ? void 0 : _z.designerDocuments) === null || _0 === void 0 ? void 0 : _0.panCard,
                        "pin": (_1 = designerData === null || designerData === void 0 ? void 0 : designerData.designerProfile) === null || _1 === void 0 ? void 0 : _1.pinCode,
                    },
                    "filter_date": this.filter_date,
                    "designer_return_amount": [
                        {
                            "datetime": this.currentDateTime,
                            "basic_amount": basic_amount,
                            "designer_id": (_2 = this.get_item) === null || _2 === void 0 ? void 0 : _2.designerId,
                            "discount": (_3 = this.get_item) === null || _3 === void 0 ? void 0 : _3.discount,
                            "hsn_amount": parseFloat(hsn_amount),
                            "hsn_cgst": parseFloat(hsn_cgst),
                            "hsn_igst": parseFloat(hsn_igst),
                            "hsn_rate": parseFloat(hsn_rate),
                            "hsn_sgst": parseFloat(hsn_sgst),
                            "net_payable_designer": net_payable_designer,
                            "payment_datetime": moment__WEBPACK_IMPORTED_MODULE_2__((_5 = (_4 = this.get_array) === null || _4 === void 0 ? void 0 : _4.paymentData) === null || _5 === void 0 ? void 0 : _5.createdOn).format('YYYY-MM-DD hh:mm:ss'),
                            "mrp": (_6 = this.get_item) === null || _6 === void 0 ? void 0 : _6.mrp,
                            "order_id": (_7 = this.get_item) === null || _7 === void 0 ? void 0 : _7.orderId,
                            "status": "NOT RETURN",
                            "product_id": (_8 = this.get_item) === null || _8 === void 0 ? void 0 : _8.productId,
                            "product_sku": (_9 = this.get_item) === null || _9 === void 0 ? void 0 : _9.productSku,
                            "remarks": '',
                            "sales_price": salesPrice,
                            "size": (_10 = this.get_item) === null || _10 === void 0 ? void 0 : _10.size,
                            "tax_type": (_11 = this.get_item) === null || _11 === void 0 ? void 0 : _11.taxType,
                            "units": (_12 = this.get_item) === null || _12 === void 0 ? void 0 : _12.units,
                            "user_id": (_13 = this.get_item) === null || _13 === void 0 ? void 0 : _13.userId,
                            "tcs": tcs,
                            "total_amount_received": total_amount_received,
                            "total_tax_amount": total_tax_amount,
                            "updated_by": this.authData.uid,
                            "updated_datetime": this.currentDateTime
                        }
                    ],
                    "govt_charge": [
                        {
                            "cgst": 0,
                            "datetime": this.currentDateTime,
                            "fee": fee,
                            "igst": igst,
                            "rate": 12,
                            "remarks": "",
                            "sgst": 0,
                            "status": 'NOT PAID',
                            "tcs": tcs,
                            "tcs_rate": 1,
                            "total_amount": fee + igst + tcs,
                            "total_tax": igst + tcs,
                            "units": (_14 = this.get_item) === null || _14 === void 0 ? void 0 : _14.units,
                            "updated_by": this.authData.uid,
                            "updated_datetime": this.currentDateTime
                        }
                    ],
                    "order_details": [
                        {
                            "basic_amount": basic_amount,
                            "datetime": this.currentDateTime,
                            "delivery_datetime": moment__WEBPACK_IMPORTED_MODULE_2__(form.value.deliver_Date).format('YYYY-MM-DD hh:mm:ss'),
                            "designer_id": (_15 = this.get_item) === null || _15 === void 0 ? void 0 : _15.designerId,
                            "discount": (_16 = this.get_item) === null || _16 === void 0 ? void 0 : _16.discount,
                            "hsn_cgst": parseFloat(hsn_cgst),
                            "hsn_igst": parseFloat(hsn_igst),
                            "hsn_rate": parseFloat(hsn_rate),
                            "hsn_sgst": parseFloat(hsn_sgst),
                            "hsn_amount": parseFloat(hsn_amount),
                            "image": (_17 = this.get_item) === null || _17 === void 0 ? void 0 : _17.images,
                            "giftWrapAmount": (_18 = this.get_item) === null || _18 === void 0 ? void 0 : _18.giftWrapAmount,
                            "invoice_id": invoiceId,
                            "paymentMode": (_20 = (_19 = this.get_array) === null || _19 === void 0 ? void 0 : _19.paymentData) === null || _20 === void 0 ? void 0 : _20.paymentMode,
                            "mrp": (_21 = this.get_item) === null || _21 === void 0 ? void 0 : _21.mrp,
                            "order_id": (_22 = this.get_item) === null || _22 === void 0 ? void 0 : _22.orderId,
                            "order_date": moment__WEBPACK_IMPORTED_MODULE_2__((_23 = this.get_item) === null || _23 === void 0 ? void 0 : _23.createdOn, "DD/MM/YYYY hh:mm:ss").format('DD/MM/YYYY'),
                            "order_status": "DELIVERED",
                            "product_id": (_24 = this.get_item) === null || _24 === void 0 ? void 0 : _24.productId,
                            "product_sku": (_25 = this.get_item) === null || _25 === void 0 ? void 0 : _25.productSku,
                            "remarks": '',
                            "sales_price": salesPrice,
                            "size": (_26 = this.get_item) === null || _26 === void 0 ? void 0 : _26.size,
                            "tax_type": (_27 = this.get_item) === null || _27 === void 0 ? void 0 : _27.taxType,
                            "total_tax": total_tax,
                            "units": (_28 = this.get_item) === null || _28 === void 0 ? void 0 : _28.units,
                            "user_id": (_29 = this.get_item) === null || _29 === void 0 ? void 0 : _29.userId
                        }
                    ],
                    "service_charge": {
                        "cgst": 0,
                        "date": moment__WEBPACK_IMPORTED_MODULE_2__(this.currentDateTime, 'YYYY-MM-DD hh:mm:ss').format('DD/MM/YYYY'),
                        "fee": fee,
                        "igst": igst,
                        "rate": 14,
                        "remarks": "",
                        "sgst": 0,
                        "status": 'NOT PAID',
                        "tcs": tcs,
                        "tcs_rate": 1,
                        "total_amount": fee + igst + tcs,
                        "total_tax": igst + tcs,
                        "units": (_30 = this.get_item) === null || _30 === void 0 ? void 0 : _30.units
                    }
                };
                this.GenarateAccountDataSubscribe = this.http.post("account/add", accountData).subscribe((res) => {
                }, (error) => {
                });
                // console.log('accountData',accountData);
            }, (error) => { });
        }
        else if (identifier == 'forceReturnOnModal') {
            this.orderItemStatus = 'ForceReturnAdmin';
            body = {
                "forceReturnOnDTO": {
                    "comments": form.value.comments,
                    "dateTime": this.currentDateTime,
                    "updatedBy": {
                        adminId: this.authData.uid,
                        email: this.authData.email,
                        mobileNo: this.authData.mobileNo,
                        firstName: this.authData.firstName,
                        lastName: this.authData.lastName,
                        name: this.authData.firstName + ' ' + this.authData.lastName
                    }
                }
            };
        }
        else if (identifier == 'returnApprove') {
            var orderItemStatus = 'Return request approved', isReturn = true;
            if (form.value.isReturn == "false") {
                orderItemStatus = 'Return rejected by admin';
                isReturn = false;
                body = {
                    "returnRejectedByAdmin": {
                        "comments": form.value.comment,
                        "isReturn": isReturn,
                        "dateTime": this.currentDateTime,
                        "updatedBy": {
                            adminId: this.authData.uid,
                            email: this.authData.email,
                            mobileNo: this.authData.mobileNo,
                            firstName: this.authData.firstName,
                            lastName: this.authData.lastName,
                            name: this.authData.firstName + ' ' + this.authData.lastName
                        }
                    }
                };
            }
            else {
                let forceReturnByAdmin = false;
                if (this.get_identifier == 'forceReturnModal') {
                    forceReturnByAdmin = true;
                }
                body = {
                    "ReturnRequestApproveDTO": {
                        "comments": form.value.comment,
                        "isReturn": true,
                        "dateTime": this.currentDateTime,
                        "forceReturnByAdmin": forceReturnByAdmin,
                        "updatedBy": {
                            adminId: this.authData.uid,
                            email: this.authData.email,
                            mobileNo: this.authData.mobileNo,
                            firstName: this.authData.firstName,
                            lastName: this.authData.lastName,
                            name: this.authData.firstName + ' ' + this.authData.lastName
                        }
                    }
                };
            }
            this.orderItemStatus = orderItemStatus;
        }
        else if (identifier == 'designerRecevedreturn') {
            body = {
                "designerRecevedreturn": {
                    "courierName": form.value.courierName,
                    "awbNumber": form.value.awbNumber
                }
            };
        }
        else if (identifier == 'returnRefund') {
            let isReturn = true;
            if (form.value.isReturn == 'false') {
                this.orderItemStatus = "Rejected";
                isReturn = false;
            }
            body = {
                orderItemStatus: this.orderItemStatus,
                orderStatusDetails: {
                    cancelOrderDetails: (_r = this.get_item.orderStatusDetails) === null || _r === void 0 ? void 0 : _r.cancelOrderDetails,
                    cancelRequestDetails: (_s = this.get_item.orderStatusDetails) === null || _s === void 0 ? void 0 : _s.cancelRequestDetails,
                    command: (_t = this.get_item.orderStatusDetails) === null || _t === void 0 ? void 0 : _t.command,
                    deliveryDetails: (_u = this.get_item.orderStatusDetails) === null || _u === void 0 ? void 0 : _u.deliveryDetails,
                    ordersDetails: (_v = this.get_item.orderStatusDetails) === null || _v === void 0 ? void 0 : _v.ordersDetails,
                    packedDetails: (_w = this.get_item.orderStatusDetails) === null || _w === void 0 ? void 0 : _w.packedDetails,
                    shippedDetails: (_x = this.get_item.orderStatusDetails) === null || _x === void 0 ? void 0 : _x.shippedDetails,
                    cancelFromUser: (_y = this.get_item.orderStatusDetails) === null || _y === void 0 ? void 0 : _y.cancelFromUser,
                    returnFromUser: (_z = this.get_item.orderStatusDetails) === null || _z === void 0 ? void 0 : _z.returnApproveFromAdmin,
                    returnRequestApprove: (_0 = this.get_item.orderStatusDetails) === null || _0 === void 0 ? void 0 : _0.returnRequestApprove,
                    designerReceivedProduct: (_1 = this.get_item.orderStatusDetails) === null || _1 === void 0 ? void 0 : _1.designerReceivedProduct,
                    userShippedProduct: (_2 = this.get_item.orderStatusDetails) === null || _2 === void 0 ? void 0 : _2.userShippedProduct,
                    forceReturnOnDTO: (_3 = this.get_item.orderStatusDetails) === null || _3 === void 0 ? void 0 : _3.userShippedProduct,
                    returnApproveFromAdmin: (_4 = this.get_item.orderStatusDetails) === null || _4 === void 0 ? void 0 : _4.returnApproveFromAdmin,
                    returnFromAdmin: {
                        comment: form.value.comment,
                        isReturn: isReturn,
                        dateTime: this.currentDateTime,
                    }
                }
            };
        }
        else if (identifier == 'ForceReturn') {
            this.orderItemStatus = 'ForceReturnAdmin';
            body = {
                "forceReturnOnDTO": {
                    "comments": form.value.comments,
                    "dateTime": this.currentDateTime,
                    "updatedBy": {
                        adminId: this.authData.uid,
                        email: this.authData.email,
                        mobileNo: this.authData.mobileNo,
                        firstName: this.authData.firstName,
                        lastName: this.authData.lastName,
                        name: this.authData.firstName + ' ' + this.authData.lastName
                    }
                }
            };
        }
        setTimeout(() => {
            var api;
            if (identifier == 'returnRefund') {
                api = "userOrder/orderStatusUpdate/" + this.orderId + "/" + this.productId;
                this.statusChangeSubscribe = this.http.put(api, body).subscribe((res) => {
                    this.commonUtils.presentToast('success', res.message);
                    this.closeModal();
                }, (errRes) => {
                    this.commonUtils.presentToast('error', errRes.error.message);
                });
            }
            else {
                api = 'userOrder/itemStatusChangefromAdmin?orderId=' + this.orderId + '&productId=' + this.productId + '&orderItemStatus=' + this.orderItemStatus + '&size=' + this.get_item.size;
                this.statusChangeSubscribe = this.http.post(api, body).subscribe((res) => {
                    this.commonUtils.presentToast('success', res.message);
                    this.closeModal();
                }, (errRes) => {
                    this.commonUtils.presentToast('error', errRes.error.message);
                });
            }
        }, 500);
    }
    // changeDateFormat start
    // setdesignerProfiledata start
    setdesignerProfiledata() {
        this.designerprofiledata = this.get_item;
        this.designerprofiledata =
            {
                designerId: this.get_item.designerId,
                firstName1: this.get_item.designerProfile.firstName1,
                lastName1: this.get_item.designerProfile.lastName1,
                firstName2: this.get_item.designerProfile.firstName2,
                lastName2: this.get_item.designerProfile.lastName2,
                displayName: this.get_item.designerProfile.displayName,
                email: this.get_item.designerProfile.email,
                password: this.get_item.designerProfile.password,
                profilePic: this.get_item.designerProfile.profilePic,
                mobileNo: this.get_item.designerProfile.mobileNo,
                altMobileNo: this.get_item.designerProfile.altMobileNo,
                maritalStatus: this.get_item.designerProfile.maritalStatus,
                gender: this.get_item.designerProfile.gender,
                qualification: this.get_item.designerProfile.qualification,
                address: this.get_item.socialProfile.address,
                achievements: this.get_item.socialProfile.achievements,
                description: this.get_item.socialProfile.description,
                facebookLink: this.get_item.socialProfile.facebookLink,
                instagramLink: this.get_item.socialProfile.instagramLink,
                youtubeLink: this.get_item.socialProfile.youtubeLink,
                boutiqueName: this.get_item.boutiqueProfile.boutiqueName,
                firmName: this.get_item.boutiqueProfile.firmName,
                experience: this.get_item.boutiqueProfile.experience,
                gstin: this.get_item.boutiqueProfile.gstin,
                operatingCity: this.get_item.boutiqueProfile.operatingCity,
                professionalCategory: this.get_item.boutiqueProfile.professionalCategory,
                yearOfOperation: this.get_item.boutiqueProfile.yearOfOperation,
                state: this.get_item.designerProfile.state,
                city: this.get_item.designerProfile.city,
                country: this.get_item.designerProfile.country,
            };
        this.designerprofiledata.dob = moment__WEBPACK_IMPORTED_MODULE_2__(this.get_item.designerProfile.dob).format('YYYY-MM-DD');
        // console.log("this.profiledata",this.designerprofiledata,this.designerprofiledata.dob);
        if (this.get_item.designerPersonalInfoEntity) {
            this.previewimageSrc_aadher = this.get_item.designerPersonalInfoEntity.designerDocuments.aadharCard;
            ;
            this.previewimageSrc_pan = this.get_item.designerPersonalInfoEntity.designerDocuments.panCard;
            this.designerprofiledata.bankName = this.get_item.designerPersonalInfoEntity.bankDetails.bankName;
            this.designerprofiledata.accountNumber = this.get_item.designerPersonalInfoEntity.bankDetails.accountNumber;
            this.designerprofiledata.ifscCode = this.get_item.designerPersonalInfoEntity.bankDetails.ifscCode;
        }
    }
    checkValidtion(_identifier) {
        console.log('_identifier', _identifier);
        const onlyAlphabate = '^[a-zA-Z][a-zA-Z\s]*$';
        console.log('this.modal.displayName', this.modal.displayName);
        // Validate the full name field
        if (_identifier == 'displayName' && this.modal.displayName) {
            if (this.modal.displayName.match(onlyAlphabate) != null) {
                this.errors.displayName = '';
            }
            else {
                this.errors.displayName = 'Please enter only alphabet';
            }
        }
        else {
            this.errors.displayName = 'Please enter display name';
        }
        console.log('errors', this.errors);
    }
    /* Validation errors end */
    // data for profile edit end
    // changeDateFormat start
    changeDateFormat(_identifier, _date) {
        // console.log("_identifier",_identifier,_date,this.adminprofiledata.dob,this.designerprofiledata.designerProfile.dob);
        if (_identifier == 'DESIGNER') {
            this.model.designerdob = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'ADMIN') {
            this.adminprofiledata.dob = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
            // console.log("this.model.admindob",this.adminprofiledata.admindob);
        }
        else if (_identifier == 'Approval') {
            this.model.ApprovalDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'del_date') {
            this.model.deliveredDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'del_Expdate') {
            this.model.deliveryExpectedDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'delivered_time') {
            this.model.deliveredDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'export_start') {
            this.model.startDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('DD/MM/YYYY');
        }
        else if (_identifier == 'export_end') {
            this.model.endDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('DD/MM/YYYY');
        }
        else if (_identifier == 'deliver_date') {
            this.model.deliver_date = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('DD/MM/YYYY');
        }
        else if (_identifier == 'deliveredDate') {
            this.model.deliveredDate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY-MM-DD');
            // this.model.deliveredDate = _date;
        }
        else if (_identifier == 'payment') {
            this.model.payment_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY/MM/DD');
        }
        else if (_identifier == 'updatedDatetime') {
            this.model.updated_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY-MM-DD hh:mm:ss');
        }
        else if (_identifier == 'gov_Date') {
            this.model.govdate = moment__WEBPACK_IMPORTED_MODULE_2__(_date).format('YYYY-MM-DD hh:mm:ss');
        }
        // console.log("_identifier",_identifier,_date,this.adminprofiledata.dob,this.designerprofiledata.designerProfile.dob);
    }
    dateFormatChange(_identifier, event) {
        // this.model.effectiveDate = moment(event.value).format('YYYY/MM/DD');
        if (_identifier == 'ADMIN') {
            this.adminprofiledata.dob = moment__WEBPACK_IMPORTED_MODULE_2__(event.value).format('YYYY/MM/DD');
        }
        else if (_identifier == 'deliveredDate') {
            this.model.deliveredDate = moment__WEBPACK_IMPORTED_MODULE_2__(event.value).format('YYYY-MM-DD');
        }
        else if (_identifier == 'payment') {
            this.model.payment_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(event.value).format('YYYY/MM/DD');
        }
        else if (_identifier == 'updatedDatetime') {
            this.model.updated_datetime = moment__WEBPACK_IMPORTED_MODULE_2__(event.value).format('YYYY-MM-DD hh:mm:ss');
        }
        else if (_identifier == 'service_Date') {
            this.model.servicedate = moment__WEBPACK_IMPORTED_MODULE_2__(event.value).format('YYYY-MM-DD hh:mm:ss');
        }
        else if (_identifier == 'gov_Date') {
            this.model.govdate = moment__WEBPACK_IMPORTED_MODULE_2__(event.value).format('YYYY-MM-DD hh:mm:ss');
        }
    }
    // changeDateFormat end
    // ChangepswForm start
    onSubmitChangepswForm(form) {
        this.btnloader2 = true;
        var data = {
            newPass: form.value.newPass,
            oldPass: form.value.oldPass,
            userName: form.value.userName,
            userType: 'Admin'
        };
        // console.log("Change Password-->",form.value);
        this.http.post("auth/changePassword", data).subscribe((res) => {
            // console.log("res",res);
            this.btnloader2 = false;
            this.commonUtils.presentToast('success', res.message);
            this.closeModal();
        }, (error) => {
            console.log("error", error);
            this.btnloader2 = false;
            this.commonUtils.presentToast('error', error.error.message);
        });
    }
    handleInputChange(e, type) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        if (type == 'aadharCard') {
            this.fileType = type;
            this.aadharCardfile = e.target.files[0];
            var fd = new FormData();
            fd.append("file", e.target.files[0]);
            this.http.post("admin/profile/s3/upload", fd).subscribe((res) => {
                this.previewimageSrc_aadher = res.path;
                this.designerprofiledata.aadharCard = res.path;
                // console.log("profileimgpath",this.aadharCardfile);
                // this.commonUtils.presentToast('success', res.message);
            }, (error) => {
                console.log("error", error);
                this.commonUtils.presentToast('error', error.error.message);
            });
        }
        else if (type == 'panCard') {
            this.fileType = type;
            this.panCardfile = e.target.files[0];
            var fd = new FormData();
            fd.append("file", e.target.files[0]);
            this.http.post("admin/profile/s3/upload", fd).subscribe((res) => {
                this.previewimageSrc_pan = res.path;
                this.designerprofiledata.aadharCard = res.path;
                // console.log("profileimgpath",this.panCardfile);
                // this.commonUtils.presentToast('success', res.message);
            }, (error) => {
                console.log("error", error);
                this.commonUtils.presentToast('error', error.error.message);
            });
        }
        reader.readAsDataURL(file);
    }
    // onSubmitdesignerProfileForm start
    onSubmitdesignerProfileForm(form) {
        // console.log("form",form.value);
        this.formloader = true;
        var boutiqueProfile = {
            boutiqueName: form.value.boutiqueName,
            experience: form.value.experience,
            firmName: form.value.firmName,
            gstin: form.value.gstin,
            operatingCity: form.value.operatingCity,
            professionalCategory: form.value.professionalCategory,
            yearOfOperation: form.value.yearOfOperation,
        };
        this.designerProfile;
        if (form.value.dob == undefined) {
            // this.designerProfile = {
            //   dob:
            // }
            var dob = moment__WEBPACK_IMPORTED_MODULE_2__(this.designerprofiledata.dob).format('YYYY/MM/DD');
        }
        else {
            // this.designerProfile = {
            //   dob:form.value.dob,
            // }
            dob = form.value.dob;
        }
        this.designerProfile = {
            altMobileNo: form.value.altMobileNo,
            profilePic: form.value.profilePic,
            displayName: form.value.displayName,
            email: this.designerprofiledata.email,
            password: this.designerprofiledata.password,
            firstName1: form.value.firstName1,
            firstName2: form.value.firstName2,
            gender: form.value.gender,
            lastName1: form.value.lastName1,
            lastName2: form.value.lastName2,
            maritalStatus: form.value.maritalStatus,
            mobileNo: form.value.mobileNo,
            qualification: form.value.qualification,
            dob: dob,
            country: form.value.country,
            state: form.value.state,
            city: form.value.city,
        };
        var socialProfile = {
            achievements: form.value.achievements,
            address: form.value.address,
            description: form.value.description,
            facebookLink: form.value.facebookLink,
            instagramLink: form.value.instagramLink,
            youtubeLink: form.value.youtubeLink,
        };
        var designerPersonalInfoEntity = {
            designerId: this.designerprofiledata.designerId,
            bankDetails: {
                accountNumber: form.value.accountNumber,
                bankName: form.value.bankName,
                ifscCode: form.value.ifscCode
            },
            designerDocuments: {
                aadharCard: this.previewimageSrc_aadher,
                panCard: this.previewimageSrc_pan,
                void_check: form.value.void_check
            }
        };
        this.alldesignerProfiledata = {
            boutiqueProfile: boutiqueProfile,
            designerProfile: this.designerProfile,
            socialProfile: socialProfile,
            designerPersonalInfoEntity: designerPersonalInfoEntity,
            email: this.designerprofiledata.email,
            password: this.designerprofiledata.password,
            designerId: this.designerprofiledata.designerId,
            designerName: this.designerprofiledata.firstName1 + ' ' + this.designerprofiledata.lastName1
        };
        // this.allProfiledata = form.value
        // console.log("this.designerprofiledata",this.alldesignerProfiledata);
        // console.log(form.value);
        this.profileupdateSubcribe = this.http.put(this.profileupdateApi, this.alldesignerProfiledata).subscribe((res) => {
            this.formloader = false;
            this.closeModal();
            // window.location.reload();
            this.commonUtils.presentToast('success', res.message);
        }, error => {
            this.formloader = false;
            console.log("error", error);
            this.commonUtils.presentToast('error', error.error.message);
            // recall category list
        });
    }
    // onSubmitdesignerProfileForm end
    // onSubmitadminProfileForm start
    onSubmitadminProfileForm(form) {
        this.alladminprofileProfiledata = {
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            email: form.value.email,
            gender: form.value.gender,
            gstIn: form.value.gstIn,
            pan: form.value.pan,
            city: form.value.city,
            country: form.value.country,
            state: form.value.state,
            pin: form.value.pin,
            dob: form.value.dob,
            profilePic: form.value.profilePic,
            password: this.adminprofiledata.password,
            roleName: this.adminprofiledata.roleName,
            mobileNo: this.adminprofiledata.mobileNo,
            uid: this.adminprofiledata.uid,
            role: this.adminprofiledata.role,
        };
        // console.log("this.allProfiledata",this.alladminprofileProfiledata);
        // console.log(form.value);
        this.profileupdateSubcribe = this.http.put(this.profileupdateApi, this.alladminprofileProfiledata).subscribe((res) => {
            this.closeModal();
            this.commonUtils.presentToast('success', res.message);
        }, error => {
            console.log("error", error);
            this.commonUtils.presentToast('error', error.error.message);
        });
    }
    // onSubmitadminProfileForm end
    // approveProduct start
    onSubmitapproveProduct(form) {
        var data = [];
        data = this.get_item.item.productStageDetails.comment;
        // console.log(this.get_item,this.get_item.item.comments.length);
        // if no comment
        if (this.get_item.item.productStageDetails.comment == null) {
            this.storage.get('setStroageGlobalParamsData').then((val) => {
                // console.log('All User Data', val.uid);
                this.role = val.authority;
                data = [
                    {
                        Reason: this.get_item.type,
                        comments: form.value.comment,
                        adminId: val.uid,
                        dateTime: this.currentDate,
                    }
                ];
            });
        }
        // // if comment have
        else {
            this.storage.get('setStroageGlobalParamsData').then((val) => {
                // console.log('All User Data', val.uid);
                this.role = val.authority;
                data.push({
                    Reason: this.get_item.type, comments: form.value.comment, adminId: val.uid, dateTime: this.currentDate,
                });
            });
        }
        this.btnloader = true;
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            // console.log('All User Data', val.uid);
            this.role = val.authority;
            let comment = {
                adminStatus: this.get_item.type,
                approvedBy: val.uid,
                comments: data,
                productId: this.get_item.item.productId,
                designerId: this.get_item.item.designerId,
            };
            // console.log("comment",comment);
            this.approveProductSubscribe = this.http.put('product/changeProductApprovalStatus', comment).subscribe((res) => {
                this.commonUtils.presentToast('success', res.message);
                this.btnloader = false;
                this.closeModal();
            }, (error) => {
                console.log("errorerror", error);
                this.btnloader = false;
                this.commonUtils.presentToast('error', error.error.message);
            });
        });
    }
    // approveProduct end
    // onSubmitdesignerRejectForm start
    onSubmitdesignerRejectForm(form) {
        // console.log(this.get_item);  
        var formData = {
            adminComment: form.value.comment,
            dId: this.get_item.dId,
            uid: this.get_item.uid,
            isActive: this.get_item.isActive,
            profileStatus: this.get_item.profileStatus,
            isDeleted: this.get_item.isDeleted,
            isProfileCompleted: this.get_item.isProfileCompleted,
            isProfileSubmitted: this.get_item.isProfileSubmitted,
            displayName: this.get_item.displayName,
            designerCategory: this.get_item.designerCategory,
        };
        this.btnloader = true;
        this.approveProductSubscribe = this.http.put('designer/update', formData).subscribe((res) => {
            this.commonUtils.presentToast('success', res.message);
            this.btnloader = false;
            this.closeModal();
        }, (error) => {
            console.log("errorerror", error);
            this.btnloader = false;
            this.commonUtils.presentToast('error', error);
        });
    }
    // onSubmitdesignerRejectForm end
    // onSubmitdesignerApproveForm start
    onSubmitdesignerApproveForm(form) {
        // console.log(this.get_item);  
        var formData = {
            designerCategory: form.value.designerCategory,
            displayName: form.value.displayName,
            dId: this.get_item.dId,
            uid: this.get_item.uid,
            isActive: this.get_item.isActive,
            profileStatus: this.get_item.profileStatus,
            isDeleted: this.get_item.isDeleted,
            isProfileCompleted: this.get_item.isProfileCompleted,
            isProfileSubmitted: this.get_item.isProfileSubmitted,
        };
        this.btnloader = true;
        this.approveProductSubscribe = this.http.put('designer/update', formData).subscribe((res) => {
            this.commonUtils.presentToast('success', res.message);
            this.btnloader = false;
            this.closeModal();
        }, (error) => {
            console.log("errorerror", error);
            this.btnloader = false;
            this.commonUtils.presentToast('error', error.error.message);
        });
    }
    // onSubmitdesignerApproveForm end
    // closeModal start
    closeModal() {
        this.modalController.dismiss();
    }
    // closeModal end
    // passwordvalid start
    passwordvalid(new_password, conform_password) {
        if (conform_password == undefined) {
            this.error = '';
        }
        else if (new_password != conform_password) {
            this.error = "New password and conform password  not match.";
            setTimeout(() => {
                // this.error = "";
            }, 3000);
        }
        else if (new_password == conform_password) {
            this.error = "";
        }
        else {
            this.error = "";
        }
    }
    // passwordvalid end
    // onSubmitDispatchForm start
    onSubmitDispatchForm(form) {
        // console.log("form",form.value,this.get_item);
        this.get_item.trackingHistory[0].comment = form.value.comment;
        this.changeorderStatusSubscribe = this.http.post("userOrder/track/add", this.get_item).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitDispatchForm end
    // onSubmitShipmentAdminForm start
    onSubmitShipmentAdminForm(form) {
        // console.log("SHIPPING DATA",this.get_array,this.get_item);
        var data = {}, time, todate;
        var trackingHistory = [];
        if (this.get_array.TrackingData) {
            trackingHistory = this.get_array.TrackingData.trackingHistory;
        }
        var day = new Date();
        // console.log(day,day.getMinutes());
        if (day.getSeconds() > 10) {
            time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
        }
        else {
            time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
        }
        // console.log(day,time);
        todate = moment__WEBPACK_IMPORTED_MODULE_2__(day).format('YYYY/MM/DD');
        // console.log("form",form.value,this.get_item);
        this.get_item.deliveredDate = form.value.deliveredDate;
        this.get_item.deliveryStatus = "shipment";
        this.get_item.deliveryStarted = form.value.deliveryStarted;
        // this.get_item.trackingHistory[1].comment = form.value.comment;
        this.authService.globalparamsData.subscribe((res) => {
            // console.log("trackingHistory", res,trackingHistory);
            if (res.authority != "DESIGNER") {
                {
                    trackingHistory.push({ time: time, date: todate, comment: form.value.comment, adminId: res.uid, auth: res.authority, type: 'shipment' });
                }
            }
            // console.log("trackingHistory", res,trackingHistory);
        });
        this.get_item.deliveryMode = form.value.deliveryMode;
        this.get_item.deliveryExpectedDate = form.value.deliveryExpectedDate;
        // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
        this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, this.get_item).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.genInvoice();
            // this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    genInvoice() {
        var designerData = {}, data = {};
        this.getDesignerSubscribe = this.http.get("designer/" + this.get_array.designerId).subscribe((res) => {
            // this.commonUtils.presentToast("success", res.message);
            designerData = res;
            data = {
                designerDetails: {
                    GSTIN: designerData.boutiqueProfile.gstin,
                    PAN: '',
                    name: designerData.designerName,
                    mobile: designerData.designerProfile.mobileNo,
                    address: designerData.socialProfile.address,
                },
                invoiceDatetime: '',
                invoiceId: '',
                orderDatetime: this.get_array.moredata.orderDate,
                orderId: this.get_array.moredata.orderId,
                productDetails: {
                    colour: this.get_array.colour,
                    createdOn: this.get_array.createdOn,
                    designerId: this.get_array.designerId,
                    discount: this.get_array.discount,
                    id: this.get_array.id,
                    images: this.get_array.images,
                    mrp: this.get_array.mrp,
                    orderId: this.get_array.orderId,
                    orderItemStatus: this.get_array.orderItemStatus,
                    productId: this.get_array.productId,
                    productName: this.get_array.productName,
                    productSku: this.get_array.productSku,
                    reachedCentralHub: this.get_array.reachedCentralHub,
                    salesPrice: this.get_array.salesPrice,
                    size: this.get_array.size,
                    taxAmount: this.get_array.taxAmount,
                    taxType: this.get_array.taxType,
                    units: this.get_array.units,
                    updatedOn: this.get_array.updatedOn,
                    userId: this.get_array.userId,
                },
                userDetails: {
                    userId: this.get_array.moredata.userId,
                    shipping_address: this.get_array.moredata.shippingAddress,
                    billing_address: this.get_array.moredata.billingAddress,
                    mobile: this.get_array.moredata.billingAddress.mobile,
                },
            };
            setTimeout(() => {
                this.GenarateInvoiceSubscribe = this.http.post("userOrder/invoices/add", data).subscribe((res) => {
                    // this.commonUtils.presentToast("success", res.message);
                    this.closeModal();
                }, (error) => {
                    setTimeout(() => {
                        this.commonUtils.presentToast("success", error.error.message);
                        // if(error.error.message =='Invoice already exist!')
                        // {
                        this.closeModal();
                        // }
                    }, 1000);
                });
            }, 500);
            // console.log("getDesignerSubscribe",res,data);
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // getState start
    // SelectedCountry start
    SelectedCountry(id) {
        this.getState();
        this.adminprofiledata.state = null;
    }
    // SelectedCountry end
    getState() {
        this.stateLoading = true;
        this.getStateData = this.http.get("user/getStateData").subscribe((res) => {
            this.stateList = res;
            this.stateLoading = false;
        }, (erroe) => {
            this.stateLoading = false;
        });
    }
    // getState end
    // onSubmitShipmentAdminForm end
    // onSubmitDeliveryAdminForms start
    onSubmitDeliveryAdminForm(form) {
        var data = {}, time, todate;
        var trackingHistory = [];
        trackingHistory = this.get_array.TrackingData.trackingHistory;
        var day = new Date();
        // console.log(day,day.getMinutes());
        if (day.getSeconds() > 10) {
            time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
        }
        else {
            time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
        }
        // console.log(day,time);
        todate = moment__WEBPACK_IMPORTED_MODULE_2__(day).format('YYYY/MM/DD');
        // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
        this.get_item.deliveredDate = form.value.del_Time;
        this.get_item.deliveryStarted = this.get_item.deliveryStarted;
        this.get_item.deliveryStatus = "out_for_delivery";
        // this.get_item.trackingHistory[1].comment = form.value.comment;
        this.authService.globalparamsData.subscribe((res) => {
            // console.log("trackingHistory", res,trackingHistory);
            if (res.authority != "DESIGNER") {
                {
                    trackingHistory.push({ outdeliverytime: form.value.del_Time, date: todate, comment: form.value.comment, adminId: res.uid, auth: res.authority, type: 'out_for_delivery', deliverypartnername: form.value.deliverypartnername, deliverypartnerNumber: form.value.deliverypartnerNumber });
                }
            }
            // console.log("trackingHistory", res,trackingHistory);
        });
        this.get_item.deliveryMode = this.get_item.deliveryMode;
        this.get_item.deliveryExpectedDate = this.get_item.deliveryExpectedDate;
        // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
        this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, this.get_item).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitDeliveryAdminForm end
    // onSubmitDeliveredAdminForm start
    onSubmitDeliveredAdminForm(form) {
        var data = {}, time, todate;
        var trackingHistory = [];
        trackingHistory = this.get_array.TrackingData.trackingHistory;
        var day = new Date();
        // console.log(day,day.getMinutes());
        if (day.getSeconds() > 10) {
            time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
        }
        else {
            time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
        }
        // console.log(day,time);
        todate = moment__WEBPACK_IMPORTED_MODULE_2__(day).format('YYYY/MM/DD');
        // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
        this.get_item.deliveryStatus = "delivered";
        // this.get_item.deliveryStarted = form.value.deliveryStarted;
        // this.get_item.trackingHistory[1].comment = form.value.comment;
        this.authService.globalparamsData.subscribe((res) => {
            // console.log("trackingHistory", res,trackingHistory);
            if (res.authority != "DESIGNER") {
                {
                    trackingHistory.push({ delivered_time: form.value.delivered_time, date: todate, comment: form.value.comment, adminId: res.uid, auth: res.authority, type: 'delivered', deliverypartnername: form.value.deliverypartnername, deliverypartnerNumber: form.value.deliverypartnerNumber });
                }
            }
            // console.log("trackingHistory", res,trackingHistory);
        });
        this.get_item.deliveryMode = form.value.deliveryMode;
        this.get_item.deliveredDate = form.value.deliveredDate;
        // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
        this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, this.get_item).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitDeliveredAdminForm end
    // onSubmitDeliveredCancelAdminForm start
    onSubmitDeliveredCancelAdminForm(form) {
        var body = {
            comment: form.value.comment,
            orderStatus: "cancelled",
            dateTime: this.currentDateTime
        };
        this.changeorderStatusSubscribe = this.http.post("userOrder/adminCancelation/?orderId=" + this.get_item.orderId + "&productId=" + this.get_item.productId, body).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitDeliveredCancelAdminForm end
    // onSubmitDeliveredCancelDesignerForm start
    onSubmitDeliveredCancelDesignerForm(form) {
        var data = {}, time, todate;
        var trackingHistory = [];
        var day = new Date();
        // console.log(day,day.getMinutes());
        if (day.getSeconds() > 10) {
            time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
        }
        else {
            time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
        }
        // console.log(day,time);
        todate = moment__WEBPACK_IMPORTED_MODULE_2__(day).format('YYYY/MM/DD');
        // console.log("form",form.value,this.get_item);
        // this.get_item.deliveredDate = form.value.deliveredDate;
        this.get_item.deliveryStatus = "cancel";
        this.get_item.deliveryStarted = form.value.deliveryStarted;
        // this.get_item.trackingHistory[1].comment = form.value.comment;
        if (this.get_array.TrackingData) {
            trackingHistory = this.get_array.TrackingData.trackingHistory;
            this.authService.globalparamsData.subscribe((res) => {
                trackingHistory.push({ time: time, date: todate, comment: form.value.comment, designerId: res.uid, auth: res.authority, type: 'cancel' });
                // console.log("trackingHistory", res,trackingHistory);
            });
            // console.log("trackingHistory", data,trackingHistory);
        }
        if (this.get_array.TrackingData) {
            data = {
                deliveredDate: this.get_array.TrackingData.deliveredDate,
                deliveryExpectedDate: this.get_array.TrackingData.deliveryExpectedDate,
                deliveryMode: this.get_array.TrackingData.deliveryMode,
                deliveryStarted: this.get_array.TrackingData.deliveryStarted,
                deliveryStatus: "cancel",
                deliveryType: this.get_array.TrackingData.deliveryType,
                designerId: this.get_array.TrackingData.designerId,
                id: this.get_array.TrackingData.id,
                orderId: this.get_array.TrackingData.orderId,
                procuctSku: this.get_array.TrackingData.procuctSku,
                productId: this.get_array.TrackingData.productId,
                trackingHistory: trackingHistory,
                trackingId: this.get_array.TrackingData.trackingId,
                trackingUrl: this.get_array.TrackingData.trackingUrl,
                userId: this.get_array.TrackingData.userId
            };
        }
        else {
            this.authService.globalparamsData.subscribe((res) => {
                trackingHistory.push({ time: time, date: todate, comment: "", designerId: res.uid, auth: res.authority, type: 'cancel' });
                // console.log("trackingHistory", res,trackingHistory);
                data = {
                    deliveredDate: "",
                    deliveryExpectedDate: "",
                    deliveryMode: "",
                    deliveryStarted: "",
                    deliveryStatus: "cancel",
                    deliveryType: "",
                    designerId: res.uid,
                    orderId: this.get_array.orderId,
                    procuctSku: "",
                    productId: this.get_item.productId,
                    trackingHistory: trackingHistory,
                    trackingId: "",
                    trackingUrl: "",
                    userId: this.get_array.userId,
                    orderItemStatus: "cancel"
                };
            });
            // console.log(data);
            this.changeorderStatusSubscribe = this.http.post("userOrder/track/add", data).subscribe((res) => {
                this.commonUtils.presentToast("success", res.message);
                this.closeModal();
            }, (error) => {
                this.commonUtils.presentToast("success", error.error.message);
            });
        }
        // console.log("trackingHistory", data,trackingHistory);
        // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
        this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, data).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitDeliveredCancelDesignerForm end
    onSubmitcancelledApprovalForm(form) {
        var data = {
            "comment": form.value.comment,
            "orderStatus": form.value.orderStatus,
            'dateTime': this.currentDateTime
        };
        this.changeorderStatusSubscribe = this.http.post("userOrder/adminApprovalCancelation?designerId=" + this.get_item.designerId + "&orderId=" + this.get_item.orderId + "&productId=" + this.get_item.productId, data).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            if (form.value.orderStatus == 'cancelled') {
                this.stockRecorverSubscribe = this.http.put('designerProduct/stockRecoverService', this.get_item).subscribe((response) => { }, errRes => { this.commonUtils.presentToast("success", errRes.error.message); });
            }
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitRefundApprovalForm
    onSubmitReturnApprovalForm(form) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var orderStatusDetails = {}, orderItemStatus = 'Return request approved', isReturn = true;
        if (form.value.isReturn == 'false') {
            orderItemStatus = 'Rejected';
            isReturn = false;
        }
        if (this.get_item.orderStatusDetails) {
            orderStatusDetails = {
                orderItemStatus: orderItemStatus,
                orderStatusDetails: {
                    cancelOrderDetails: (_a = this.get_item.orderStatusDetails) === null || _a === void 0 ? void 0 : _a.cancelOrderDetails,
                    cancelRequestDetails: (_b = this.get_item.orderStatusDetails) === null || _b === void 0 ? void 0 : _b.cancelRequestDetails,
                    command: (_c = this.get_item.orderStatusDetails) === null || _c === void 0 ? void 0 : _c.command,
                    deliveryDetails: (_d = this.get_item.orderStatusDetails) === null || _d === void 0 ? void 0 : _d.deliveryDetails,
                    ordersDetails: (_e = this.get_item.orderStatusDetails) === null || _e === void 0 ? void 0 : _e.ordersDetails,
                    packedDetails: (_f = this.get_item.orderStatusDetails) === null || _f === void 0 ? void 0 : _f.packedDetails,
                    shippedDetails: (_g = this.get_item.orderStatusDetails) === null || _g === void 0 ? void 0 : _g.shippedDetails,
                    cancelFromUser: (_h = this.get_item.orderStatusDetails) === null || _h === void 0 ? void 0 : _h.cancelFromUser,
                    returnFromUser: (_j = this.get_item.orderStatusDetails) === null || _j === void 0 ? void 0 : _j.returnFromUser,
                    returnFromAdmin: (_k = this.get_item.orderStatusDetails) === null || _k === void 0 ? void 0 : _k.returnFromAdmin,
                    returnApproveFromAdmin: {
                        comment: form.value.comment,
                        isReturn: isReturn,
                        dateTime: this.currentDateTime,
                    }
                }
            };
        }
        else {
            orderStatusDetails = {
                orderItemStatus: orderItemStatus,
                orderStatusDetails: {
                    // returnApproveFromAdmin:{
                    //   comment:form.value.comment,
                    //   isReturn:isReturn,
                    //   dateTime:this.currentDateTime,
                    // }
                    returnApproveFromAdmin: {
                        comment: form.value.comment,
                        isReturn: isReturn,
                        dateTime: this.currentDateTime,
                    }
                }
            };
        }
        this.changeorderStatusSubscribe = this.http.put("userOrder/orderStatusUpdate/" + this.get_item.orderId + "/" + this.get_item.productId, orderStatusDetails).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitOrderExport start
    // onSubmitaccountStatusForm start
    onSubmitaccountStatusForm(form) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.get_item.designer_return_amount[0].status = form.value.status;
        this.get_item.designer_return_amount[0].remarks = form.value.remarks;
        this.get_item.designer_return_amount[0].payment_datetime = form.value.payment_datetime;
        this.get_item.designer_return_amount[0].updated_by = this.authData.uid;
        this.get_item.designer_return_amount[0].updated_datetime = this.currentDateTime;
        var data = {
            admin_details: {
                "address": ((_a = this.authData) === null || _a === void 0 ? void 0 : _a.city) + ',' + ((_b = this.authData) === null || _b === void 0 ? void 0 : _b.state) + ',' + ((_c = this.authData) === null || _c === void 0 ? void 0 : _c.country),
                "admin_id": (_d = this.authData) === null || _d === void 0 ? void 0 : _d.uid,
                "gstIn": (_e = this.authData) === null || _e === void 0 ? void 0 : _e.gstIn,
                "pan": (_f = this.authData) === null || _f === void 0 ? void 0 : _f.pan,
                "pin": (_g = this.authData) === null || _g === void 0 ? void 0 : _g.pin,
                "mobile": (_h = this.authData) === null || _h === void 0 ? void 0 : _h.mobileNo,
                "name": ((_j = this.authData) === null || _j === void 0 ? void 0 : _j.firstName) + ' ' + ((_k = this.authData) === null || _k === void 0 ? void 0 : _k.lastName),
                "gender": (_l = this.authData) === null || _l === void 0 ? void 0 : _l.gender
            },
            designer_details: this.get_item.designer_details,
            datetime: this.get_item.datetime,
            filter_date: this.get_item.filter_date,
            order_details: this.get_item.order_details,
            designer_return_amount: this.get_item.designer_return_amount,
            service_charge: this.get_item.service_charge,
            govt_charge: this.get_item.govt_charge,
            "_id": (_m = this.get_item) === null || _m === void 0 ? void 0 : _m._id,
            "id": this.get_item.id
        };
        // console.log("submitaccountStatusSubscribe",form.value,data,this.get_item,this.get_item.designer_return_amount[0]);
        this.submitaccountStatusSubscribe = this.http.put("account/update/" + this.get_item.id, data).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitaccountStatusForm end
    // onSubmitaccountStatusForm start
    onSubmitserviceStatusForm(form) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        this.get_item.service_charge.status = form.value.status;
        this.get_item.service_charge.remarks = form.value.remarks;
        this.get_item.service_charge.date = form.value.servicedate;
        this.get_item.service_charge.updated_by = this.authData.uid;
        this.get_item.service_charge.updated_datetime = this.currentDateTime;
        var data = {
            admin_details: {
                "address": ((_a = this.authData) === null || _a === void 0 ? void 0 : _a.city) + ',' + ((_b = this.authData) === null || _b === void 0 ? void 0 : _b.state) + ',' + ((_c = this.authData) === null || _c === void 0 ? void 0 : _c.country),
                "admin_id": (_d = this.authData) === null || _d === void 0 ? void 0 : _d.uid,
                "gstIn": (_e = this.authData) === null || _e === void 0 ? void 0 : _e.gstIn,
                "pan": (_f = this.authData) === null || _f === void 0 ? void 0 : _f.pan,
                "pin": (_g = this.authData) === null || _g === void 0 ? void 0 : _g.pin,
                "mobile": (_h = this.authData) === null || _h === void 0 ? void 0 : _h.mobileNo,
                "name": ((_j = this.authData) === null || _j === void 0 ? void 0 : _j.firstName) + ' ' + ((_k = this.authData) === null || _k === void 0 ? void 0 : _k.lastName),
                "gender": (_l = this.authData) === null || _l === void 0 ? void 0 : _l.gender
            },
            designer_details: (_m = this.get_item) === null || _m === void 0 ? void 0 : _m.designer_details,
            datetime: (_o = this.get_item) === null || _o === void 0 ? void 0 : _o.datetime,
            filter_date: this.get_item.filter_date,
            order_details: (_p = this.get_item) === null || _p === void 0 ? void 0 : _p.order_details,
            designer_return_amount: (_q = this.get_item) === null || _q === void 0 ? void 0 : _q.designer_return_amount,
            service_charge: (_r = this.get_item) === null || _r === void 0 ? void 0 : _r.service_charge,
            govt_charge: (_s = this.get_item) === null || _s === void 0 ? void 0 : _s.govt_charge,
            "_id": (_t = this.get_item) === null || _t === void 0 ? void 0 : _t._id,
            "id": (_u = this.get_item) === null || _u === void 0 ? void 0 : _u.id
        };
        this.submitaccountStatusSubscribe = this.http.put("account/update/" + this.get_item.id, data).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    // onSubmitaccountStatusForm end
    // onSubmitgovStatusForm start
    onSubmitgovStatusForm(form) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        this.get_item.govt_charge[0].status = form.value.status;
        this.get_item.govt_charge[0].remarks = form.value.remarks;
        this.get_item.govt_charge[0].datetime = form.value.govdate;
        this.get_item.govt_charge[0].updated_by = this.authData.uid;
        this.get_item.govt_charge[0].updated_datetime = this.currentDateTime;
        var data = {
            admin_details: {
                "address": ((_a = this.authData) === null || _a === void 0 ? void 0 : _a.city) + ',' + ((_b = this.authData) === null || _b === void 0 ? void 0 : _b.state) + ',' + ((_c = this.authData) === null || _c === void 0 ? void 0 : _c.country),
                "admin_id": (_d = this.authData) === null || _d === void 0 ? void 0 : _d.uid,
                "gstIn": (_e = this.authData) === null || _e === void 0 ? void 0 : _e.gstIn,
                "pan": (_f = this.authData) === null || _f === void 0 ? void 0 : _f.pan,
                "pin": (_g = this.authData) === null || _g === void 0 ? void 0 : _g.pin,
                "mobile": (_h = this.authData) === null || _h === void 0 ? void 0 : _h.mobileNo,
                "name": ((_j = this.authData) === null || _j === void 0 ? void 0 : _j.firstName) + ' ' + ((_k = this.authData) === null || _k === void 0 ? void 0 : _k.lastName),
                "gender": (_l = this.authData) === null || _l === void 0 ? void 0 : _l.gender
            },
            designer_details: (_m = this.get_item) === null || _m === void 0 ? void 0 : _m.designer_details,
            datetime: (_o = this.get_item) === null || _o === void 0 ? void 0 : _o.datetime,
            filter_date: this.get_item.filter_date,
            order_details: (_p = this.get_item) === null || _p === void 0 ? void 0 : _p.order_details,
            designer_return_amount: (_q = this.get_item) === null || _q === void 0 ? void 0 : _q.designer_return_amount,
            service_charge: (_r = this.get_item) === null || _r === void 0 ? void 0 : _r.service_charge,
            govt_charge: (_s = this.get_item) === null || _s === void 0 ? void 0 : _s.govt_charge,
            "_id": (_t = this.get_item) === null || _t === void 0 ? void 0 : _t._id,
            "id": (_u = this.get_item) === null || _u === void 0 ? void 0 : _u.id
        };
        this.submitaccountStatusSubscribe = this.http.put("account/update/" + this.get_item.id, data).subscribe((res) => {
            this.commonUtils.presentToast("success", res.message);
            this.closeModal();
        }, (error) => {
            this.commonUtils.presentToast("success", error.error.message);
        });
    }
    getExportType(type) {
        this.ExportType = type;
    }
    onSubmitOrderExport(form) {
        let api;
        // console.log(form.value);
        if (this.ExportType == 'pdf') {
            api = "userOrder/exelSheet" + "?startDate=" + form.value.startDate + "&endDate=" + form.value.endDate;
        }
        else if (this.ExportType == 'doc') {
            api = "userOrder/exelSheet" + "?startDate=" + form.value.startDate + "&endDate=" + form.value.endDate;
        }
        this.ExportOrderSubscribe = this.http.get(api).subscribe((res) => { }, (error) => { });
        window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl + '/' + api);
        this.closeModal();
    }
    // onSubmitOrderExport end
    ngsel(e) {
    }
    selectState(id) {
    }
    // getLebellist start
    getLebellist() {
        this.LebellistDataSubcribe = this.http.get("adminMData/getDesignerCategory").subscribe((res) => {
            this.Lebellist = res.data;
        }, error => {
            console.log(error);
            this.commonUtils.presentToast('error', error.error.message);
        });
    }
    // getLebellist end
    ngOnDestroy() {
        if (this.ExportOrderSubscribe !== undefined) {
            this.ExportOrderSubscribe.unsubscribe();
        }
        if (this.getStateData !== undefined) {
            this.getStateData.unsubscribe();
        }
        if (this.getDesignerSubscribe !== undefined) {
            this.getDesignerSubscribe.unsubscribe();
        }
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils },
    { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPage);



/***/ }),

/***/ 26525:
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 51228);
/* harmony import */ var _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-utils/common-utils */ 83914);







/* tslint:disable */
let AuthGuard = class AuthGuard {
    constructor(authService, router, commonUtils) {
        this.authService = authService;
        this.router = router;
        this.commonUtils = commonUtils;
    }
    canLoad(route, segments) {
        /* if(!this.authService.globalparamsData.){
          this.router.navigateByUrl('/auth');
        }
        // console.log("this.authService.userIsAuthenticate >", this.authService.userIsAuthenticate);
        // return true; observable return boolean value true or false
        return this.authService.userIsAuthenticate; */
        return this.authService.globalparamsData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(isAuthenticated => {
            if (!isAuthenticated) {
                // console.log('when auto login >');
                return this.authService.autoLogin();
            }
            else {
                // console.log('when menually login >');
                /* this.commonUtils.menuDataobservable.subscribe(menuData =>{
                  menuData.forEach(element => {
                    element.pages.forEach(element2 => {
                   console.log('menu data gurd >>>>>>>>>>>>>>>>>>>>>>>>> element2', element2.type.split('/')[1]);
                  this.commonUtils.pagePathNameAnywhereObsv.subscribe(pathRes => {
                    // console.log(' url name #### >>', pathRes);
                    if(element2.type.split('/')[1] == pathRes){
                      // console.log('founddddddddddddddddddddddddddddddddddddddddddddddddd');
                      return of(!!isAuthenticated); //(!!) means true or false (boolean value)
                    }else{
                      // console.log('not tt  founddddddddddddddddddddddddddddddddddddddddddddddddd');
                      return of(!!isAuthenticated); //(!!) means true or false (boolean value)
                    }
                  });
                    });
                  });
                }); */
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(!!isAuthenticated); //(!!) means true or false (boolean value)
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(isAuthenticated => {
            // console.log('isAuthenticated gurd ##################### 222', isAuthenticated);
            if (!isAuthenticated) {
                this.router.navigateByUrl('/auth');
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
    // CanLoad is need for befor module loaded it check auth true or false
], AuthGuard);



/***/ }),

/***/ 51228:
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-utils/common-utils */ 83914);











const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
const API_MASTER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiMaster;
/* tslint:disable */
let AuthService = class AuthService {
    constructor(storage, plt, http, router, location, commonUtils) {
        this.storage = storage;
        this.plt = plt;
        this.http = http;
        this.router = router;
        this.location = location;
        this.commonUtils = commonUtils;
        // private _globalparamsData = null;
        this._globalparamsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    // get token session master as observable
    get globalparamsData() {
        return this._globalparamsData.asObservable();
    }
    // get token session master as a non observable
    getTokenSessionMaster() {
        return this._globalparamsData.value;
    }
    //================== auto login start ===================
    autoLogin() {
        // stroage data get
        // console.log('autoLogin>>', this.storage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.storage.get('setStroageGlobalParamsData')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(storData => {
            // console.log('storData @@@@@@@>>>>>', storData);
            if (!storData || !storData.token) {
                return null;
            }
            const storeauth = {
                'token': storData.token,
                'username': storData.username,
                'uid': storData.uid,
                'authority': storData.authority,
            };
            return storeauth;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(storeauthtication => {
            if (storeauthtication) {
                this._globalparamsData.next(storeauthtication);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(userLog => {
            // // console.log("auto login map userLog >>>", userLog);
            return !!userLog; //return true/false(boolen value)
        }));
    }
    // auto login end
    // ================= login service call start ==================
    login(_url, _data, _siteInfo) {
        return this.http.post(`${_url}`, _data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(this.setGlobalParams.bind(this)) //use for response value send
        );
    }
    // ---setGlobalParams function defination----
    setGlobalParams(resData) {
        // console.log('..................set 11 >', resData);
        localStorage.setItem('userdata', resData.authority);
        // console.log(localStorage.getItem('userdata'));
        if (resData.status > 200) {
            this.commonUtils.presentToast('success', resData.message);
            // window.location.reload();
        }
        this._globalparamsData.next({
            'token': resData.token,
            'username': resData.username,
            'uid': resData.uid,
            'authority': resData.authority,
        });
        // stroage
        this.storeAuthData(resData);
    }
    //--- storeAuthData function defination---
    storeAuthData(_data) {
        // console.log('data>>>>>>>>>>>>>>>>>>>>>>>>', _data);
        // set stroage data
        this.storage.set('setStroageGlobalParamsData', {
            'token': _data.token,
            'username': _data.username,
            'uid': _data.uid,
            'authority': _data.authority,
        });
        // Plugins.Storage.set({ key: 'authData', value: data });
    }
    //login service call end
    //======================= logout functionlity start ==============
    logout() {
        this.storage.clear().then(() => {
            // console.log('all stroage data cleared');
            // this.router.navigateByUrl('/auth');
            // .then(() => {
            window.location.reload();
            // });
            this._globalparamsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
            /* this.router.routeReuseStrategy.shouldReuseRoute = function () {
              return false;
            }; */
            // location.reload();
            // window.location.replace('/auth');
            // location.reload();
            setTimeout(() => {
                // window.location.reload(); //working
            }, 1000);
            this.commonUtils.presentToast('success', "Logout successfully");
        });
        // this._globalparamsData = null;
    }
};
AuthService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_1__.CommonUtils }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 83914:
/*!*******************************************************!*\
  !*** ./src/app/services/common-utils/common-utils.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonUtils": function() { return /* binding */ CommonUtils; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagination/pagination.service */ 38783);








/* tslint:disable */
let CommonUtils = class CommonUtils {
    constructor(http, storage, pagerService, toastController) {
        this.http = http;
        this.storage = storage;
        this.pagerService = pagerService;
        this.toastController = toastController;
        //----------- group login click identifire data get start ------------
        this._groupLoginClickableIdentifire = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // group login click identifire data get  end
        //----------- group login data get start ------------
        this._groupLoginClickableData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // group login data get  end
        //----------- site inforamation  start ------------
        this._siteInfoCheck = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // site inforamation  end
        //----------- user type start ------------
        this._userTypeCheck = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        // user type end
        //--------- menu data fetch start ---------------
        this._menudata = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // menu data fetch end
        //--------- menu permission fetch start ---------------
        this._menuPermission = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // menu permission fetch end
        // -----get url name all component start----
        this._pagepathName = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        /* return this.http.post<{name:string}>('https://...json',{
            value,
            id:null
            })

            .pipe(
            switchMap(resData => {
                console.log('resData *********** 1111111111 >', this.tickets);
                generateId = resData.name; //id set
                return this.tickets;
            }),

            take(1),
            
            tap(ticketss => {
                console.log('resData *********** 222222222 >', this.tickets);
                // console.log('ticketss *********** >', ticketss);
                value.id = generateId; //id get
                this._tickets.next(ticketss.concat(value));
                // ticketss.push(value);
            })
        ) */
        // -----get url name all component end----
        // ----add and remove item (+ -) start-----
        //Add more functions
        this.addToItem = function (items) {
            items.push({});
        };
        //Remove more functions
        this.removeToItem = function (index, event, items, action, isDefault) {
            event.preventDefault();
            if (items.length == 1 && isDefault && action == 'edit')
                return;
            //items remove
            items.splice(index, 1);
        };
        // add and remove item (+ -)end
        // ================= display page record start =========================
        this.displayRecord = '10';
        this.displayRecords = [
            { id: '1', displayValue: '10' },
            { id: '2', displayValue: '25' },
            { id: '3', displayValue: '50' },
            { id: '4', displayValue: '100' },
            { id: '5', displayValue: '200' }
        ];
        this._itemsHeader = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // pager object
        this.pager = {};
        this._items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        // click edit item update end
        // ===================== getlist data Fetch start ===================
        this._getList = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get groupLoginIdentifireObservable() {
        return this._groupLoginClickableIdentifire.asObservable();
    }
    onClickGroupIdentifire(data) {
        this._groupLoginClickableIdentifire.next(data);
    }
    get groupLoginClickDataObservable() {
        return this._groupLoginClickableData.asObservable();
    }
    onClickGroupItemData(data) {
        this._groupLoginClickableData.next(data);
    }
    get getSiteInfoObservable() {
        return this._siteInfoCheck.asObservable();
    }
    setSiteInfo(type) {
        // console.log('setSiteInfo SERVICE >>>>>>>>',type);
        this._siteInfoCheck.next(type);
    }
    get getUserTypeObservable() {
        return this._userTypeCheck.asObservable();
    }
    setUserType(type) {
        this._userTypeCheck.next(type);
    }
    get menuDataobservable() {
        return this._menudata.asObservable();
    }
    getMenudataService(path) {
        this._menudata.next(path);
    }
    get menuPermissionObservable() {
        return this._menuPermission.asObservable();
    }
    menuPermissionService(data) {
        this._menuPermission.next(data);
    }
    get pagePathNameAnywhereObsv() {
        return this._pagepathName.asObservable();
    }
    getPathNameFun(path) {
        this._pagepathName.next(path);
    }
    // display page record end
    // ====================== tost message start ==================
    presentToast(_type, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                animated: true,
                translucent: true,
                position: "top",
                duration: 4000,
                cssClass: "my-tost-custom-class " + _type,
            });
            toast.present();
        });
    }
    get itemsHeaderData() {
        // return [...this._itemsHeader];
        return this._itemsHeader.asObservable();
    }
    headerListData(_getUrl) {
        this.items_header_data = []; //blank array items will be push
        // table header column selection
        this.tableHeaderData = [];
        this.tableheaderDropdownChecked = [];
        return this.http.get(`${_getUrl}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resData) => {
            if (resData.return_status > 0 && resData.return_data.length > 0) {
                for (const key in resData.return_data) {
                    if (resData.return_data.hasOwnProperty(key)) {
                        this.items_header_data.push(resData.return_data[key]);
                    }
                }
            }
            else {
                // infinite scroll complite
                // event.target.complete();
            }
            // ---- array filter by display and default array item start ---
            this.items_header_data.forEach((val, ind) => {
                // dropdown show item
                if (val.is_display == 1) {
                    if (this.tableHeaderData.indexOf(val.column_name) === -1) {
                        this.tableHeaderData.push(val);
                    }
                }
                // dropdown checked item
                if (val.is_default == 1) {
                    if (this.tableheaderDropdownChecked.indexOf(val.column_name) === -1) {
                        this.tableheaderDropdownChecked.push(val);
                    }
                }
            });
            // copy array header data to new array
            this.tableHeaderDataDropdown = this.tableHeaderData.map((item) => item);
            // array filter by display and default array item end
            return [this.tableHeaderData, this.tableheaderDropdownChecked, this.tableHeaderDataDropdown];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(itmArry => {
            // console.log('itmArry >>>>>>>>>>', itmArry);
            this._itemsHeader.next(itmArry[0]); //update observable data
        }));
    }
    get itemsData() {
        // return [...this._items];
        return this._items.asObservable();
    }
    //(api_url, display_record, page, apiParms, search, cherecterSearch,  orderBy, order, advanceSearch, identifire)
    fetchList(_getUrl, _per_page_showItem, _page, _api_parms, _search, _cherecterSearch, _orderBy, _order, _advanceSearch, _identifire) {
        let apiParameters = '';
        let advanceSearchParams = '';
        let onlySearch;
        // search
        if (_search === undefined || _search === null || _search == '') {
            onlySearch = '';
        }
        else {
            onlySearch = _search;
        }
        // advance search
        let formData = new FormData();
        let other_data = _advanceSearch;
        if (other_data !== undefined && other_data !== null && other_data !== '') {
            for (var item in other_data) {
                if (other_data[item] == undefined) {
                    other_data[item] = '';
                }
                advanceSearchParams = advanceSearchParams + '&' + item + '=' + other_data[item];
            }
        }
        // api parameters
        let other_data_parms = _api_parms;
        if (other_data_parms !== undefined && other_data_parms !== null && other_data_parms !== '') {
            for (var itemP in other_data_parms) {
                if (other_data_parms[itemP] == undefined) {
                    other_data_parms[itemP] = '';
                }
                apiParameters = apiParameters + '&' + itemP + '=' + other_data_parms[itemP];
            }
        }
        this.items_data = []; //blank array items will be push
        return this.http.get(`${_getUrl}?per_page=${_per_page_showItem}&page=${_page}${apiParameters}&search=${_search}&sortbychar=${_cherecterSearch}&orderby=${_orderBy}&order=${_order}${advanceSearchParams}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resData) => {
            this.items_data = [];
            // console.log('listing link call .................resData =>', resData);
            if (resData.return_status > 0 && resData.return_data.data.length > 0) {
                for (const key in resData.return_data.data) {
                    if (resData.return_data.data.hasOwnProperty(key)) {
                        this.items_data.push(resData.return_data.data[key]);
                    }
                }
                this.listAllResData = resData.return_data;
                // console.log('listing common serveice aaaaaaaaaaaaaa >>>>>', resData.return_data);
            }
            // // // console.log('listing common serveice 111 >>>>>', resData.return_data);
            if (resData.return_status > 0 && resData.return_data.total == '0') {
                // console.log('listing common serveice bbbbbbbbbbbbb >>>>>', resData.return_data);
                this.listAllResData = resData.return_data;
            }
            if (resData.return_status > 0) {
                return [this.items_data, this.listAllResData];
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(itmArry => {
            // console.log('itmArry >----------------------->', itmArry);
            if (itmArry) {
                this._items.next(itmArry);
                this._items.complete();
            }
            // this._items.complete();
        }));
    }
    clickEditDataFun(_data) {
        this.clickEditData = _data;
        // console.log("_data.principle >", _data.principle);
    }
    get getListData() {
        // return [...this._getList];
        return this._getList.asObservable();
    }
    getlistCommon(_getUrl) {
        return this.http.get(`${_getUrl}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resData) => {
            if (resData.return_status > 0) {
                return resData.return_data;
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(itmArry => {
            this._getList.next(itmArry);
        }));
    }
    // getlist data Fetch end
    // ===================== select checkbox get value start ===================
    onCheckboxSelectCommon(option, event, _getItemsArry, _allselectModel, _itemcheckClick, _checkedList) {
        if (event.target.checked) {
            if (_checkedList.indexOf(option.id) === -1) {
                _checkedList.push(option.id);
            }
        }
        else {
            for (let i = 0; i < _getItemsArry.length; i++) {
                if (_checkedList[i] == option.id) {
                    _checkedList.splice(i, 1);
                }
            }
        }
        if (_getItemsArry.length <= _checkedList.length) {
            _allselectModel = true;
            // console.log('length 4');
        }
        else {
            // console.log('length 0');
            _allselectModel = false;
            _itemcheckClick = true;
        }
        return [_checkedList, _allselectModel];
        // console.log('checked item >>', this.checkedList);
    }
    // select checkbog get value end
    // =================all checkbox value selected start====================
    allSelectItemCommon(event, _getItemsArry, _itemcheckClick, _checkedList) {
        if (event.target.checked) {
            _itemcheckClick = false;
            // console.log('check item selkectedddddddddddddd');
            for (let i = 0; i < _getItemsArry.length; i++) {
                // if(this.checkedList.includes(this.items[i].id) === false)
                if (_checkedList.indexOf(_getItemsArry[i].id) === -1 && _getItemsArry[i].id !== null) {
                    _checkedList.push(_getItemsArry[i].id);
                    _getItemsArry[i].isSelected = true;
                }
            }
        }
        else if (_itemcheckClick == false) {
            // console.log('not check item selectionnnnnnnnnnn')
            _checkedList = [];
            for (let i = 0; i < _getItemsArry.length; i++) {
                if (_checkedList.indexOf(_getItemsArry[i].id) === -1) {
                    _getItemsArry[i].isSelected = false;
                }
            }
        }
        return _checkedList;
        // console.log('checked item @@ >>', _checkedList);
    }
};
CommonUtils.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage },
    { type: _pagination_pagination_service__WEBPACK_IMPORTED_MODULE_0__.PaginationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
CommonUtils = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], CommonUtils);



/***/ }),

/***/ 82411:
/*!******************************************************!*\
  !*** ./src/app/services/interceptors/interceptor.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorProvider": function() { return /* binding */ InterceptorProvider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.service */ 51228);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-utils/common-utils */ 83914);











const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
const API_MASTER = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiMaster;
/* tslint:disable */
let InterceptorProvider = class InterceptorProvider {
    constructor(router, toastController, storage, authService, commonUtils, alertController, http) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.authService = authService;
        this.commonUtils = commonUtils;
        this.alertController = alertController;
        this.http = http;
        this.isparams = false;
        this.authToken = '';
        // private _globalparamsData = null;
        this._globalparamsData = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    }
    // get token session master as observable
    get globalparamsData() {
        return this._globalparamsData.asObservable();
    }
    // get token session master as a non observable
    getTokenSessionMaster() {
        return this._globalparamsData.value;
    }
    intercept(request, next) {
        let authorization;
        // Keeps the original request params. as a new HttpParams
        let newParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({ fromString: request.params.toString() });
        let get_global_params = this.authService.getTokenSessionMaster();
        // console.log('get_global_params intercepter >>>>>>>>>>>>>>>>', get_global_params);
        if (get_global_params != null && get_global_params.master == undefined) {
            get_global_params.master = API_MASTER;
        }
        if (get_global_params != null && get_global_params.token !== undefined && get_global_params.session !== undefined && get_global_params.master !== undefined) {
            // newParams = newParams.append('token', get_global_params.token);
            // newParams = newParams.append('session', get_global_params.session);
            // newParams = newParams.append('master', get_global_params.master); 
        }
        // console.log('newParams >>>>>>>', get_global_params);
        if (get_global_params == null || get_global_params.token == null) {
            authorization = 'Bearer ';
            // console.log('appkey false');
        }
        else {
            authorization = 'Bearer ' + get_global_params.token;
        }
        // Clone the request with params instead of setParams
        const requestClone = request.clone({
            url: `${API_URL}/${request.url}`,
            setHeaders: {
                'Authorization': authorization,
            }
        });
        // return next.handle(requestClone);
        return next.handle(requestClone).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((event) => {
            let eventUrl;
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
                if (event.body.return_status == 0) {
                    //this.router.navigateByUrl('/auth');
                    // this.authService.logout();
                    this.commonUtils.presentToast('error', event.body.message);
                }
                //token expire check
                if (event.body.return_token_expire) {
                    //this.router.navigateByUrl('/auth');
                    this.authService.logout();
                }
                //show return_message
                if (!event.body.return_token_expire) {
                    // this.commonUtils.presentToast('info', event.body.return_message);
                }
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            // this.router.navigateByUrl('/auth');
            console.log("interceptor error handeller >>", error);
            if (error.status === 0) {
                // this.commonUtils.presentToast('error', 'Please Check Your Network Connection!');
                /* this.router.navigateByUrl('/auth');
                console.log('<< please check your network connection! >>'); */
            }
            else if (error.status === 404 || error.status === 400) {
                // this.router.navigateByUrl('/error');
                // this.commonUtils.presentToast('error', 'Could not sign you up, please try again');
            }
            else if (error.status === 500) {
                this.commonUtils.presentToast('error', 'Token not valid');
                // this.authService.logout();
                /* this.commonUtils.presentToast('success', 'Internal Server Error');
                this.commonUtils.presentToast('info', 'Internal Server Error'); */
            }
            else if (error.status === 401) {
                this.commonUtils.presentToast('error', 'Could not sign you up, please try again');
                // this.authService.logout();
                this.router.navigateByUrl('/auth');
            }
            else {
                // this.commonUtils.presentToast('error', error.error.messagee);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
        }));
    }
    // reload alert
    logoutAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const reload = yield this.alertController.create({
                header: 'Logout',
                message: 'Do you want to logout from other devices?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'popup-cancel-btn',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        cssClass: 'popup-ok-btn',
                        handler: () => {
                            // console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield reload.present();
        });
    }
    // reload page end
    /* async presentToast(msg) {
      const toast = await this.toastController.create({
        message: msg,
        showCloseButton: true,
        animated:true,
        cssClass:"my-tost-custom-class",
        translucent: true,
        duration: 2000
      });
      toast.present();
    } */
    // ----------- destroy subscription start ---------
    ngOnDestroy() {
        if (this.logoutDataSubscribe !== undefined) {
            this.logoutDataSubscribe.unsubscribe();
        }
    }
};
InterceptorProvider.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
InterceptorProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()
], InterceptorProvider);



/***/ }),

/***/ 38783:
/*!***********************************************************!*\
  !*** ./src/app/services/pagination/pagination.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationService": function() { return /* binding */ PaginationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let PaginationService = class PaginationService {
    constructor() { }
    getPager(totalItems, currentPage, pageSize) {
        /* console.log('pagination totalItems >', totalItems);
        console.log('pagination currentPage >', currentPage);
        console.log('pagination pageSize >', pageSize); */
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
PaginationService.ctorParameters = () => [];
PaginationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], PaginationService);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _common_component_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-component/common-header/common-header.component */ 81090);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ 94553);
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-progress-bar */ 33523);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-apexcharts */ 34256);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _common_component_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-component/common-footer/common-footer.component */ 1604);
/* harmony import */ var _directives_directives_must_match_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/directives/must-match.directive */ 11413);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-slick-carousel */ 99217);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var mat_select_filter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! mat-select-filter */ 99968);




// Material module start













// Material module end


 // angular dropdown










let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _common_component_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__.CommonHeaderComponent,
            _common_component_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__.CommonFooterComponent,
            _directives_directives_must_match_directive__WEBPACK_IMPORTED_MODULE_2__.MustMatchDirective
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            // Material module start
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_21__.SlickCarouselModule,
            // Material module end
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_22__.ProgressBarModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__.NgApexchartsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__.NgSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule,
            mat_select_filter__WEBPACK_IMPORTED_MODULE_29__.MatSelectFilterModule
        ],
        exports: [
            _common_component_common_header_common_header_component__WEBPACK_IMPORTED_MODULE_0__.CommonHeaderComponent,
            _common_component_common_footer_common_footer_component__WEBPACK_IMPORTED_MODULE_1__.CommonFooterComponent,
            _directives_directives_must_match_directive__WEBPACK_IMPORTED_MODULE_2__.MustMatchDirective,
            // Material module start
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadgeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_21__.SlickCarouselModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__.MatSlideToggleModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
            // Material module end
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_22__.ProgressBarModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__.NgApexchartsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_24__.NgSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__.MatDatepickerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
            mat_select_filter__WEBPACK_IMPORTED_MODULE_29__.MatSelectFilterModule
        ]
    })
], SharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiMaster: '1',
    // apiUrl:'https://65.1.190.195:9095/dev',
    // fileUrl:'https://65.1.190.195:9095/dev'
    apiUrl: 'https://dev.divatt.com/dev',
    fileUrl: 'https://dev.divatt.com/dev',
    // apiUrl:'https://192.168.1.87:9095/default',
    // fileUrl:'https://192.168.1.87:9095/default'
    // apiUrl:'https://192.168.1.8:9095/dev',
    // fileUrl:'https://192.168.1.8:9095/dev'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu.md ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding-top: 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.split-pane-visible ion-menu {\n  transition: 0.4s linear;\n}\n\n.toggleMenuBtn {\n  transition: 0.4s linear;\n}\n\nmat-expansion-panel.noSubMenu .mat-expansion-panel-spacing {\n  margin: 0 !important;\n}\n\n.mat-accordion > .mat-expansion-panel-spacing.noSubMenu {\n  margin: 0;\n}\n\nion-menu.main-side-menu .menu-list-box mat-expansion-panel {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdFLG1CQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUVFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7O0VBRUUsa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGdDQUFBO0VBQUEsMkRBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLCtCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtBQVJGOztBQVdBO0VBQ0Usc0JBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLCtCQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7QUFSRjs7QUFXQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFURjs7QUFZQTtFQUNFLGlDQUFBO0FBVEY7O0FBV0E7RUFFRSx1QkFBQTtBQVRGOztBQVdBO0VBRUUsdUJBQUE7QUFURjs7QUFhRTtFQUVFLG9CQUFBO0FBWEo7O0FBbUJBO0VBRUUsU0FBQTtBQWpCRjs7QUFtQkE7RUFFRSwyQkFBQTtBQWpCRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAvLyAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAvLyAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgLy8gcGFkZGluZzogMjBweCAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICM2MTZlN2U7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM3Mzg0OWE7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLnNwbGl0LXBhbmUtdmlzaWJsZSBpb24tbWVudVxyXG57XHJcbiAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXI7XHJcbn1cclxuLnRvZ2dsZU1lbnVCdG4gXHJcbntcclxuICB0cmFuc2l0aW9uOiAwLjRzIGxpbmVhcjtcclxufVxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLm5vU3ViTWVudVxyXG57XHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZ1xyXG4gIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLm1hdC1hY2NvcmRpb24+Lm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZy5ub1N1Yk1lbnU6bGFzdC1jaGlsZCwgLm1hdC1hY2NvcmRpb24+KjpsYXN0LWNoaWxkOm5vdCgubWF0LWV4cGFuc2lvbi1wYW5lbCkgLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcbi5tYXQtYWNjb3JkaW9uPi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmcubm9TdWJNZW51XHJcbntcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaW9uLW1lbnUubWFpbi1zaWRlLW1lbnUgLm1lbnUtbGlzdC1ib3ggbWF0LWV4cGFuc2lvbi1wYW5lbFxyXG57XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 54965:
/*!*****************************************************************************!*\
  !*** ./src/app/common-component/common-footer/common-footer.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-footer {\n  background-color: #ffffff;\n}\n.ion-footer .footer {\n  width: 100%;\n  padding: 15px;\n  color: #a5a5a5;\n  line-height: 1.7;\n}\n@media screen and (max-width: 426px) {\n  .ion-footer .footer {\n    text-align: center;\n  }\n  .ion-footer .float-right {\n    float: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKO0FBQUk7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFFSTtJQUVJLGtCQUFBO0VBRlY7RUFJTTtJQUVJLHNCQUFBO0VBSFY7QUFDRiIsImZpbGUiOiJjb21tb24tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjYTVhNWE1O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICBcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDI2cHgpIFxyXG4gICAge1xyXG4gICAgICAgIC5mb290ZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgLmZsb2F0LXJpZ2h0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 75325:
/*!*****************************************************************************!*\
  !*** ./src/app/common-component/common-header/common-header.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".desktopscreen {\n  display: block;\n}\n.desktopscreen .biglogo {\n  max-width: 11em;\n}\n.style2 {\n  display: none !important;\n}\n.mobilescreen {\n  display: none !important;\n}\n.tabletscreen {\n  display: none !important;\n}\n.main-custom-style {\n  display: flex;\n  justify-content: space-between;\n}\n.custom-style {\n  display: flex;\n  justify-content: end;\n}\n@media screen and (max-width: 426px) {\n  .main-custom-style {\n    display: block;\n  }\n  .main-custom-style .custom-style {\n    display: grid;\n    justify-content: normal;\n  }\n  .main-custom-style .custom-style .d-flex {\n    justify-content: end;\n  }\n  .main-custom-style .custom-style ion-searchbar {\n    order: 2;\n  }\n}\n::-webkit-scrollbar {\n  width: 10px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 5px;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #1abc9c;\n  border-radius: 5px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #117e68;\n}\n.menuicon {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 8px;\n}\n.menuicon mat-icon {\n  color: black;\n  font-size: 32px;\n  height: 32px;\n  margin-right: 20px;\n  cursor: pointer;\n}\n.admin-side-nav {\n  height: 100vh;\n  width: 300px;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: -300px;\n  background-color: white;\n  transition: all 0.5s ease;\n}\n.admin-side-nav .side-nav-inner {\n  position: relative;\n  overflow-y: scroll;\n  height: 100vh;\n  margin-top: 80px;\n  background: white;\n  z-index: 999;\n  padding-bottom: 40px;\n}\n.admin-side-nav .side-nav-inner ul {\n  margin-bottom: 23%;\n}\n.admin-side-nav .sidebar-back {\n  position: fixed;\n  background: white;\n  width: 300px;\n  padding: 29.5px 20px;\n  font-size: 18px;\n  z-index: 7;\n  color: #222222;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-bottom: 1px solid #efefef;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.admin-side-nav .sidebar-back i {\n  padding-right: 0.5rem !important;\n}\n.admin-side-nav li a {\n  font-weight: 400;\n  line-height: 23px;\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  display: flex;\n  align-items: center;\n  padding-right: 22px !important;\n  padding: 5px 0 5px 20px !important;\n  margin-bottom: 15px;\n  font-size: 16px;\n  transition: 0.3s ease-in-out;\n  color: #313131;\n}\n.admin-side-nav li a:hover {\n  color: #106f5c;\n}\n.admin-side-nav li a span {\n  font-size: 15px;\n  color: #313131;\n  font-family: work-Sans, sans-serif;\n  font-weight: 600;\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.admin-side-nav li a mat-icon {\n  margin-right: 10px;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-side-nav .sidebar-overlay {\n  visibility: hidden;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  position: fixed;\n  z-index: 6;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 1s;\n}\n.admin-side-nav.open-side {\n  left: 0;\n}\n.admin-side-nav.open-side .sidebar-overlay {\n  opacity: 0.8;\n  visibility: visible;\n}\n@media screen and (max-width: 767px) {\n  .custom-style {\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  .tabletscreen {\n    display: flex !important;\n  }\n  .tabletscreen img {\n    max-width: 3.5em;\n  }\n\n  .desktopscreen {\n    display: none !important;\n  }\n\n  .mobilescreen .smalllogo {\n    max-width: 5em;\n  }\n}\n@media screen and (max-width: 524px) {\n  .custom-style.style1 {\n    display: none !important;\n  }\n\n  .custom-style.style2 {\n    display: grid !important;\n    justify-content: normal;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0FBQUo7QUFDSTtFQUVJLGVBQUE7QUFBUjtBQUdBO0VBRUksd0JBQUE7QUFESjtBQUdBO0VBQ0ksd0JBQUE7QUFBSjtBQUVBO0VBQ0ksd0JBQUE7QUFDSjtBQUVBO0VBRUksYUFBQTtFQUNBLDhCQUFBO0FBQUo7QUFFQTtFQUVJLGFBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0E7RUFFSTtJQUVJLGNBQUE7RUFGTjtFQUdNO0lBRUksYUFBQTtJQUNBLHVCQUFBO0VBRlY7RUFHVTtJQUVJLG9CQUFBO0VBRmQ7RUFJVTtJQUVJLFFBQUE7RUFIZDtBQUNGO0FBUUE7RUFDSSxXQUFBO0FBTko7QUFTRSxVQUFBO0FBQ0E7RUFFRSxrQkFBQTtBQVBKO0FBVUUsV0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVBKO0FBVUUsb0JBQUE7QUFDQTtFQUNFLG1CQUFBO0FBUEo7QUFTRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQVBKO0FBUUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFOUjtBQVNBO0VBR0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFFQSx5QkFBQTtBQVRKO0FBVUk7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFUUjtBQVVRO0VBRUksa0JBQUE7QUFUWjtBQVlHO0VBRUssZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBWFI7QUFZUTtFQUNJLGdDQUFBO0FBVlo7QUFjUTtFQUNHLGdCQUFBO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBWlo7QUFhWTtFQUVJLGNBQUE7QUFaaEI7QUFjWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFaaEI7QUFjWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBWmhCO0FBZ0JJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQWRSO0FBbUJBO0VBQ0ksT0FBQTtBQWhCSjtBQWlCSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQWZSO0FBa0JBO0VBQ0c7SUFDQyw4QkFBQTtJQUNBLFdBQUE7RUFmRjs7RUFpQkU7SUFDSSx3QkFBQTtFQWROO0VBZU07SUFDSSxnQkFBQTtFQWJWOztFQWdCRTtJQUVJLHdCQUFBO0VBZE47O0VBa0JNO0lBQ0ksY0FBQTtFQWZWO0FBQ0Y7QUFtQkE7RUFDSTtJQUNDLHdCQUFBO0VBakJIOztFQW1CRTtJQUVJLHdCQUFBO0lBQ0EsdUJBQUE7RUFqQk47QUFDRiIsImZpbGUiOiJjb21tb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2t0b3BzY3JlZW5cclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAuYmlnbG9nb1xyXG4gICAge1xyXG4gICAgICAgIG1heC13aWR0aDogMTFlbTtcclxuICAgIH1cclxufVxyXG4uc3R5bGUyXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubW9iaWxlc2NyZWVue1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi50YWJsZXRzY3JlZW57XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluLWN1c3RvbS1zdHlsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jdXN0b20tc3R5bGVcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNnB4KSBcclxue1xyXG4gICAgLm1haW4tY3VzdG9tLXN0eWxlXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLmN1c3RvbS1zdHlsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XHJcbiAgICAgICAgICAgIC5kLWZsZXhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXNlYXJjaGJhclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuICAgICBcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzFhYmM5YzsgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzExN2U2ODsgXHJcbiAgfVxyXG4gIC5tZW51aWNvblxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICBtYXQtaWNvbntcclxuICAgICAgICBjb2xvcjogcmdiKDAgMCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4uYWRtaW4tc2lkZS1uYXZcclxue1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IC0zMDBweDtcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIC5zaWRlLW5hdi1pbm5lclxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSk7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjMlO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgIC5zaWRlYmFyLWJhY2sgIHtcclxuICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUpO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAyOS41cHggMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgei1pbmRleDogNztcclxuICAgICAgICBjb2xvcjogcmdiKDM0IDM0IDM0KTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzkgMjM5IDIzOSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMDZmNWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHdvcmstU2Fucywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci1vdmVybGF5IHtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsMC43KTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmFkbWluLXNpZGUtbmF2Lm9wZW4tc2lkZXtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAuc2lkZWJhci1vdmVybGF5IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxufSBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAuY3VzdG9tLXN0eWxle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgIC50YWJsZXRzY3JlZW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzLjVlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVza3RvcHNjcmVlblxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH0gXHJcbiAgICAubW9iaWxlc2NyZWVue1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAuc21hbGxsb2dve1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDVlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUyNHB4KSB7XHJcbiAgICAuY3VzdG9tLXN0eWxlLnN0eWxlMXtcclxuICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLXN0eWxlLnN0eWxlMlxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgICBcclxuIH0iXX0= */");

/***/ }),

/***/ 85773:
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".download_type {\n  justify-content: center;\n}\n.download_type .icon {\n  text-align: center;\n  width: 68px;\n  border: 2px solid black;\n  border-radius: 5px;\n  padding: 11px 0 7px 0;\n  cursor: pointer;\n}\n.download_type .icon [type=radio] {\n  visibility: hidden;\n  width: 0;\n}\n.download_type .icon [type=radio]:checked ~ mat-icon {\n  color: green;\n}\n.download_type .icon [type=radio]:checked ~ p {\n  color: green;\n}\n.download_type .icon p {\n  margin-bottom: 0;\n}\n.download_type .icon:nth-child(1) {\n  margin-right: 10px;\n}\n.exportType_title {\n  font-size: 20px;\n  text-align: center;\n}\n.shipped_modal input[type=number]::-webkit-inner-spin-button,\n.shipped_modal input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.userCustomMesorment .name {\n  font-size: 17px;\n  color: #4c4c4d;\n}\n.userCustomMesorment .size {\n  font-size: 14px;\n  font-weight: 500;\n  color: #000;\n}\n.userCustomMesorment .col-md-8.pb-13 {\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 576px) {\n  .userCustomMesorment .col-xs-6 {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 426px) {\n  .userCustomMesorment .col-xs-6 {\n    width: 100%;\n    margin-bottom: 12px;\n  }\n  .userCustomMesorment .col-md-8.pb-13 {\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQWNBLGVBQUE7QUFaUjtBQURRO0VBRUksa0JBQUE7RUFDQSxRQUFBO0FBRVo7QUFBUTtFQUVJLFlBQUE7QUFDWjtBQUNRO0VBRUksWUFBQTtBQUFaO0FBR1E7RUFFSSxnQkFBQTtBQUZaO0FBS0k7RUFDSSxrQkFBQTtBQUhSO0FBTUE7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQVFJOztFQUVJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFMUjtBQVNJO0VBRUksZUFBQTtFQUNBLGNBQUE7QUFQUjtBQVNJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVJSO0FBWUk7RUFFSSxtQkFBQTtBQVhSO0FBYUk7RUFFSTtJQUVJLFVBQUE7RUFiVjtBQUNGO0FBZUk7RUFFSTtJQUVJLFdBQUE7SUFDQSxtQkFBQTtFQWZWO0VBaUJNO0lBRUksa0JBQUE7RUFoQlY7QUFDRiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWRfdHlwZVxyXG57XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5pY29ue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCAwIDApO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMXB4IDAgN3B4IDA7XHJcbiAgICAgICAgW3R5cGU9cmFkaW9dXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBbdHlwZT1yYWRpb106Y2hlY2tlZCB+IG1hdC1pY29uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaWNvbjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi5leHBvcnRUeXBlX3RpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2hpcHBlZF9tb2RhbFxyXG57XHJcbiAgICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG4gICAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogMDsgXHJcbiAgICB9XHJcbn1cclxuLnVzZXJDdXN0b21NZXNvcm1lbnQge1xyXG4gICAgLm5hbWVcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig3NiA3NiA3Nyk7XHJcbiAgICB9XHJcbiAgICAuc2l6ZSBcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTgucGItMTNcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCkgXHJcbiAgICB7XHJcbiAgICAgICAgLmNvbC14cy02XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQyNnB4KSBcclxuICAgIHtcclxuICAgICAgICAuY29sLXhzLTZcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIC5jb2wtbWQtOC5wYi0xM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-app>\r\n  <ion-split-pane contentId=\"main-content\" [ngClass]=\"{ 'toggle-menu': toggle == true}\">\r\n    <ion-button class=\"toggleMenuBtn\" [ngClass]=\"{ 'd-none': menuicon}\">\r\n      <mat-icon (click)=\"toggleMenu(toggle)\">format_align_left</mat-icon>\r\n    </ion-button>\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" class=\"main-side-menu\">\r\n      <ion-header>\r\n        <ion-toolbar >\r\n          <ion-title>\r\n            <div class=\"header_logo\">\r\n              <img class=\"logo-1stpart\" [routerLink]=\"'/dashboard'\" src=\"assets/images/logo.png\" alt=\"logo\">\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"menu-list-box\">\r\n        menu loading show\r\n        <div class=\"menu-loading\" *ngIf=\"permissionMenuLoading\">\r\n          <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\r\n          <div class=\"menu-loading-inner\">\r\n            <ion-spinner name=\"dots\"></ion-spinner>\r\n          </div>\r\n        </div>\r\n        <mat-accordion *ngIf=\"!permissionMenuLoading && admin\">\r\n          Multiple menu start\r\n          <mat-expansion-panel *ngFor=\"let item of get_user_permission?.modules; let i = index\" [ngClass]=\"{ 'ion-hide': item.modPrivs.list == false}\" class=\"noSubMenu\" #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <mat-expansion-panel-header [routerLink]=\"item.modDetails.url\" class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\r\n              <mat-panel-title>\r\n                <mat-icon>{{item.modDetails.title_icon}}</mat-icon>\r\n                {{item.modDetails.title}} \r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n        <mat-accordion *ngIf=\"!admin\">\r\n          Multiple menu start\r\n          <mat-expansion-panel class=\"noSubMenu\" #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <mat-expansion-panel-header [routerLink]=\"['/dashboard']\" class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\r\n              <mat-panel-title>\r\n                <mat-icon>home</mat-icon>\r\n                Dashboard\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel *ngIf=\"designerprofiledata?.profileStatus != 'waitForApprove'\" class=\"noSubMenu\" #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <mat-expansion-panel-header [routerLink]=\"['product-list']\" class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\r\n              <mat-panel-title>\r\n                <mat-icon>checkroom</mat-icon>\r\n                Product Management\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n          </mat-expansion-panel>\r\n          <mat-expansion-panel *ngIf=\"designerprofiledata?.profileStatus != 'waitForApprove'\" class=\"noSubMenu\" #example routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <mat-expansion-panel-header [routerLink]=\"['order-list-designer']\" class=\"mat-header-bg\" [class.active-parent] = \"example.expanded\">\r\n              <mat-panel-title>\r\n                <mat-icon>shopping_bag</mat-icon>\r\n                Order Management \r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\" ></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app> -->\r\n<ion-app>\r\n    <ion-router-outlet id=\"main-content\" ></ion-router-outlet>\r\n</ion-app>");

/***/ }),

/***/ 79818:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/common-footer/common-footer.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-footer\">\r\n  <div class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 footer-copyright\">\r\n          <div>Copyright {{today | date:'y'}} © Divatt All rights reserved. </div>\r\n        </div>\r\n        <div class=\"col-md-6 \">\r\n          <div class=\"float-right\">Developed by <a href=\"https://www.nitsolution.in/\" class=\"text-black text-decoration-none\"  target=\"_blank\">NIT</a> </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ 88477:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-component/common-header/common-header.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"main-header\">\r\n  <ion-toolbar>\r\n    <div class=\"main-custom-style\">\r\n      <!-- <ion-buttons slot=\"start\" >  -->\r\n        <div class=\"menuicon desktopscreen\">\r\n          <mat-icon (click)=\"openNav()\">menu</mat-icon>\r\n          <a class=\"d-flex\" routerLink=\"/dashboard\">\r\n            <img class=\"logo-1stpart biglogo\"  src=\"assets/images/logo.png\" alt=\"logo\">\r\n          </a>\r\n        </div>\r\n      \r\n      <!-- </ion-buttons> -->\r\n    <div class=\"custom-style style1\">\r\n      <div class=\"menuicon tabletscreen \">\r\n        <mat-icon (click)=\"openNav()\">menu</mat-icon>\r\n        <a class=\"d-flex\" routerLink=\"/dashboard\">\r\n          <img class=\"logo-1stpart smalllogo\"  src=\"assets/images/favicon.png\" alt=\"logo\">\r\n        </a>\r\n      </div>\r\n      <!-- <ion-searchbar slot=\"end\" debounce=\"500\"></ion-searchbar> -->\r\n      <div class=\"d-flex\">\r\n        <div class=\"menuicon mobilescreen\">\r\n          <mat-icon>menu</mat-icon>\r\n          <a class=\"d-flex\" routerLink=\"/dashboard\">\r\n            <img class=\"logo-1stpart smalllogo\"  src=\"assets/images/favicon.png\" alt=\"logo\">\r\n          </a>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <ion-buttons slot=\"end\" class=\"notification-panel header-btn\">\r\n            <button mat-button [matMenuTriggerFor]=\"notification\">\r\n              <mat-icon matBadge=\"8\" matBadgePosition=\"after\"   >notifications_none</mat-icon>\r\n            </button>\r\n            <mat-menu #notification=\"matMenu\" xPosition=\"before\" backdropClass=\"matMenuDropdown\">\r\n              <div class=\"notification-box\">\r\n                <div class=\"notification-list\">\r\n                  <p class=\"tittle\">Notification</p>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading success\">\r\n                        <mat-icon>local_mall</mat-icon>\r\n                        <span>Your order ready for Ship..! </span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading danger\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                        <span>Deleted Succesfully</span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading warning\">\r\n                        <mat-icon>file_download</mat-icon>\r\n                        <span>Downloading....</span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading info\">\r\n                        <mat-icon>error_outline</mat-icon>\r\n                        <span>250 MB trash files</span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </div>\r\n              </div>\r\n            </mat-menu>\r\n          </ion-buttons>\r\n          <ion-buttons slot=\"end\">\r\n            <div class=\"profile-box\">\r\n              <button mat-button [matMenuTriggerFor]=\"profile\">\r\n                <ion-item>\r\n                  <ion-avatar slot=\"start\">\r\n                   <img [src]=\"profileImage!= null ? profileImage : 'assets/images/noimage.jpg'\" alt=\"\" class=\"\">\r\n          \r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    <h2 class=\"userName text-capitalize\" *ngIf=\"role != 'DESIGNER'\">{{userData?.firstName}}</h2>\r\n                    <h3 *ngIf=\"role == 'ADMIN'\" class=\"userRole\">{{userData?.roleName ==\"SADMIN\" ? 'ADMIN' : userData?.roleName}}</h3>\r\n                    <h3 *ngIf=\"role != 'DESIGNER' && role != 'ADMIN'\" class=\"userRole\">{{userData?.roleName}}</h3>\r\n                  </ion-label>\r\n                </ion-item>\r\n              </button>\r\n              <mat-menu #profile=\"matMenu\" xPosition=\"before\" backdropClass=\"matMenuDropdown\">\r\n                <ul class=\"dropdown-box\">\r\n                  <li class=\"box-item profile-option\">\r\n                    <ul>\r\n                      <li class=\"option-header\">\r\n                        <p>Profile options</p>\r\n                      </li>\r\n                      <li><ion-label (click)=\"goToPage('profile');\">Profile</ion-label></li>\r\n                      <li><ion-label (click)=\"openChangePasswordmodal('changepassword_modal', '', '');\">Change Password</ion-label></li>\r\n                      <li><ion-label (click)=\"logout();\">Logout</ion-label></li>\r\n                    </ul>\r\n                  </li>\r\n                </ul>\r\n              </mat-menu>\r\n            </div>\r\n          </ion-buttons>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"custom-style style2 d-grid\">\r\n      <div class=\"d-flex justify-content-between\">\r\n        <div class=\"menuicon tabletscreen \">\r\n        <mat-icon (click)=\"openNav()\">menu</mat-icon>\r\n        <a class=\"d-flex\" routerLink=\"/dashboard\">\r\n          <img class=\"logo-1stpart smalllogo\"  src=\"assets/images/favicon.png\" alt=\"logo\">\r\n        </a>\r\n      </div>\r\n      <div class=\"d-flex\">\r\n        <div class=\"menuicon mobilescreen\">\r\n          <mat-icon (click)=\"openNav()\">menu</mat-icon>\r\n          <a class=\"d-flex\" routerLink=\"/dashboard\">\r\n            <img class=\"logo-1stpart smalllogo\"  src=\"assets/images/favicon.png\" alt=\"logo\">\r\n          </a>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <ion-buttons slot=\"end\" class=\"notification-panel header-btn\">\r\n            <button mat-button [matMenuTriggerFor]=\"notification\">\r\n              <mat-icon matBadge=\"8\" matBadgePosition=\"after\"   >notifications_none</mat-icon>\r\n            </button>\r\n            <mat-menu #notification=\"matMenu\" xPosition=\"before\" backdropClass=\"matMenuDropdown\">\r\n              <div class=\"notification-box\">\r\n                <div class=\"notification-list\">\r\n                  <p class=\"tittle\">Notification</p>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading success\">\r\n                        <mat-icon>local_mall</mat-icon>\r\n                        <span>Your order ready for Ship..! </span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading danger\">\r\n                        <mat-icon>delete_forever</mat-icon>\r\n                        <span>Deleted Succesfully</span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading warning\">\r\n                        <mat-icon>file_download</mat-icon>\r\n                        <span>Downloading....</span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"notification-item\">\r\n                    <div class=\"notification-item-content\">\r\n                      <p class=\"notification-heading info\">\r\n                        <mat-icon>error_outline</mat-icon>\r\n                        <span>250 MB trash files</span>\r\n                      </p>\r\n                      <p class=\"notification-content\">\r\n                        The World Wide Web goes live with its first web page. \r\n                        The World Wide Web goes live with its first web page. \r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </div>\r\n              </div>\r\n            </mat-menu>\r\n          </ion-buttons>\r\n          <ion-buttons slot=\"end\">\r\n            <div class=\"profile-box\">\r\n              <button mat-button [matMenuTriggerFor]=\"profile\">\r\n                <ion-item>\r\n                  <ion-avatar slot=\"start\">\r\n                   <img [src]=\"profileImage!= null ? profileImage : 'assets/images/noimage.jpg'\" alt=\"\" class=\"\">\r\n          \r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    <!-- <h2 class=\"userName text-capitalize\" *ngIf=\"role == 'DESIGNER'\">{{userData?.designerProfile?.firstName}}</h2> -->\r\n                    <h2 class=\"userName text-capitalize\" *ngIf=\"role != 'DESIGNER'\">{{userData?.firstName}}</h2>\r\n                    <h3 *ngIf=\"role == 'ADMIN'\" class=\"userRole\">{{userData?.roleName ==\"SADMIN\" ? 'ADMIN' : userData?.roleName}}</h3>\r\n                    <h3 *ngIf=\"role != 'DESIGNER' && role != 'ADMIN'\" class=\"userRole\">{{userData?.roleName}}</h3>\r\n                  </ion-label>\r\n                </ion-item>\r\n              </button>\r\n              <mat-menu #profile=\"matMenu\" xPosition=\"before\" backdropClass=\"matMenuDropdown\">\r\n                <ul class=\"dropdown-box\">\r\n                  <li class=\"box-item profile-option\">\r\n                    <ul>\r\n                      <li class=\"option-header\">\r\n                        <p>Profile options</p>\r\n                      </li>\r\n                      <li><ion-label (click)=\"goToPage('profile');\">Profile</ion-label></li>\r\n                      <li><ion-label (click)=\"openChangePasswordmodal('changepassword_modal', '', '');\">Change Password</ion-label></li>\r\n                      <li><ion-label (click)=\"logout();\">Logout</ion-label></li>\r\n                    </ul>\r\n                  </li>\r\n                </ul>\r\n              </mat-menu>\r\n            </div>\r\n          </ion-buttons>\r\n        </div>\r\n        \r\n      </div>\r\n      </div>\r\n      <!-- <ion-searchbar slot=\"end\" debounce=\"500\"></ion-searchbar> -->\r\n\r\n    </div>\r\n    \r\n    </div>\r\n    \r\n  </ion-toolbar>\r\n  <div class=\"admin-side-nav\" [ngClass]=\"{ 'open-side': openleftnav}\">\r\n    <div class=\"sidebar-overlay\" (click)=\"openNav()\"></div>\r\n    <div class=\"sidebar-back text-left\" (click)=\"openNav()\">\r\n      <i  class=\"fa fa-angle-left pr-2\"></i> Back\r\n    </div>\r\n    <div class=\"side-nav-inner\">\r\n     \r\n      <div class=\"menu-loading\" *ngIf=\"permissionMenuLoading\">\r\n        <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\r\n        <div class=\"menu-loading-inner\">\r\n          <ion-spinner name=\"dots\"></ion-spinner>\r\n        </div>\r\n      </div>\r\n      <ul class=\"sm pixelstrap sm-vertical desktop\" *ngIf=\"!permissionMenuLoading && role == 'ADMIN'\">\r\n        <li class=\"main-item\"  *ngFor=\"let item of get_user_permission?.modules; let i = index\" [ngClass]=\"{ 'ion-hide': item.modPrivs.list == false,'d-none': item.modDetails.title == 'Product specification'}\">\r\n          <!-- ngif submenu -->\r\n          <!-- <a   class=\"main-link\" (click)=\"closeNav()\" routerLink=\"/designer-list/all\"  [ngClass]=\"{'noSubMenu':!designerlists.length}\"><span>Designer</span></a> -->\r\n         <!-- /admin -->\r\n          <a   class=\"main-link\" [routerLink]=\"'/'+item.modDetails.url\">\r\n             <mat-icon >{{item.modDetails.title_icon}}</mat-icon>\r\n           <span >{{item.modDetails.title == 'Color List' ? 'Colour List' : item.modDetails.title}}</span>  </a>\r\n       </li>\r\n      </ul>  \r\n    </div>\r\n    <!-- [ngStyle]=\"{'left': 'menuleftPosition'}\" -->\r\n    <!-- [style.background-image] -->\r\n  </div>\r\n</ion-header>");

/***/ }),

/***/ 11610:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"modal-header\">\r\n  <ion-toolbar>\r\n    <div class=\"modal-inner\">\r\n      <ion-title>{{heder_title}}</ion-title>\r\n      <a (click)=\"closeModal()\" class=\"modal-close\">\r\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\" title=\"Close Modal\"></ion-icon>\r\n      </a>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"form-layout\">\r\n    <div class=\"form-wrapper\">\r\n      <div class=\"common-modal-body\">\r\n        <div class=\"modal-wrapper\">\r\n          <!-- changepassword_modal modal start -->\r\n          <div class=\"changepassword pt-2\" *ngIf=\"get_identifier == 'changepassword_modal'\">\r\n            <div class=\"login-inner\">\r\n              <form class=\"login\" #changepasswordForm=\"ngForm\" (ngSubmit)=\"onSubmitChangepswForm(changepasswordForm)\"\r\n                novalidate>\r\n                <input type=\"hidden\" [(ngModel)]=\"username\" name=\"userName\">\r\n                <div class=\"form-group\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Old Password</mat-label>\r\n                    <input matInput [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"model.oldPass\" name=\"oldPass\"\r\n                      required clearInput>\r\n                    <a matTooltipPosition=\"above\" mat-icon-button matSuffix (click)=\"hide = !hide\"\r\n                      [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    </a>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>New Password</mat-label>\r\n                    <input matInput [type]=\"hide2 ? 'password' : 'text'\" [(ngModel)]=\"model.newPass\"\r\n                      (keyup)=\"passwordvalid(model.newPass,model.conformpassword)\" name=\"newPass\" required clearInput>\r\n                    <a mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\"\r\n                      [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    </a>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"form-group p-0\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Conform Password</mat-label>\r\n                    <input matInput [type]=\"hide3 ? 'password' : 'text'\"\r\n                      (keyup)=\"passwordvalid(model.newPass,model.conformpassword)\" [(ngModel)]=\"model.conformpassword\"\r\n                      name=\"conformpassword\" required clearInput>\r\n                    <a matTooltip=\"{{hide3 ? 'Show Password' : 'Hide Password'}}\" matTooltipPosition=\"above\"\r\n                      mat-icon-button matSuffix (click)=\"hide3 = !hide3\" [attr.aria-label]=\"'Hide password'\"\r\n                      [attr.aria-pressed]=\"hide\">\r\n                      <mat-icon>{{hide3 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    </a>\r\n                  </mat-form-field>\r\n                </div>\r\n                <p class=\"text-danger text-center\">{{error}}</p>\r\n                <div class=\"form-button mt-5 pt-3\">\r\n                  <ion-button class=\"custom-btn\" [ngClass]=\"{'disabled' : error}\" type=\"submit\"\r\n                    [disabled]=\"!changepasswordForm.valid\">\r\n                    <ion-spinner class=\"btnloader\" name=\"crescent\" *ngIf=\"btnloader2\"></ion-spinner>\r\n                    Change Password\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- changepassword_modal modal end -->\r\n          <!-- adminprofile_modal modal start -->\r\n          <div class=\"profile_modal pt-2 pb-3\" *ngIf=\"get_identifier == 'adminprofile_modal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #adminprofileForm=\"ngForm\" (ngSubmit)=\"onSubmitadminProfileForm(adminprofileForm)\"\r\n                novalidate>\r\n                <input type=\"hidden\" name=\"profilePic\" [(ngModel)]=\"adminprofiledata.profilePic\">\r\n                <ion-grid *ngIf=\"role != 'DESIGNER'\">\r\n                  <ion-row>\r\n                    <!-- Name -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>First Name</mat-label>\r\n                          <input matInput type=\"text\" [(ngModel)]=\"adminprofiledata.firstName\" name=\"firstName\"\r\n                            pattern=\"[A-Za-z]+\" required clearInput>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- Last Name -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Last Name</mat-label>\r\n                          <input matInput type=\"text\" [(ngModel)]=\"adminprofiledata.lastName\" name=\"lastName\" required\r\n                            pattern=\"[A-Za-z]+\" clearInput>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- Email -->\r\n                    <!--old \"^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$\" -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Email</mat-label>\r\n                          <input matInput type=\"email\" [(ngModel)]=\"adminprofiledata.email\" name=\"email\"\r\n                            pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\" required clearInput>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- Mobile No -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Mobile No</mat-label>\r\n                          <input matInput type=\"text\" [(ngModel)]=\"adminprofiledata.mobileNo\" name=\"mobileNo\" required\r\n                            pattern=\"^((\\\\+91-?)|0)?[0-9]{10}$\" onKeyPress=\"if(this.value.length==10) {return false;}\"\r\n                            maxlength=\"10\" clearInput>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- DOB -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <!-- <mat-form-field appearance=\"outline\">\r\n                          <mat-label>DOB</mat-label>\r\n                          <input matInput type=\"date\" [(ngModel)]=\"adminprofiledata.admindob\" name=\"admindob\" required\r\n                            (change)=\"changeDateFormat('ADMIN',adminprofiledata.admindob)\" clearInput>\r\n                        </mat-form-field> -->\r\n\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Effective Date</mat-label>\r\n                          <input matInput (dateChange)=\"dateFormatChange('ADMIN', $event)\" (dateInput)=\"dateFormatChange('ADMIN', $event)\" [matDatepicker]=\"ADMIN\" placeholder=\"{{adminprofiledata.admindob}}\" name=\"admindob\" [(ngModel)]=\"adminprofiledata.admindob\" readonly>\r\n                          <mat-datepicker-toggle matSuffix [for]=\"ADMIN\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #ADMIN></mat-datepicker>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <input type=\"hidden\" name=\"dob\" [(ngModel)]=\"adminprofiledata.dob\" required>\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"mb-1\">Gender</label>\r\n                        <mat-radio-group [(ngModel)]=\"adminprofiledata.gender\" name=\"gender\" required>\r\n                          <mat-radio-button value=\"male\">Male</mat-radio-button>&nbsp;\r\n                          <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n                        </mat-radio-group>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- gstin -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>GSTIN</mat-label>\r\n                          <input matInput type=\"text\" [(ngModel)]=\"adminprofiledata.gstIn\" name=\"gstIn\" maxlength=\"15\"\r\n                            minlength=\"15\" required pattern=\"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$\"\r\n                            clearInput>\r\n                          <mat-hint class=\"d-flex align-items-center cursor-pointer\"\r\n                            (click)=\"showInfo2 = !showInfo2\">GSTIN Format.&nbsp;<mat-icon>info</mat-icon></mat-hint>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"showInfo\" [ngClass]=\"{'show  mb-2':showInfo2}\">\r\n                        1. It should be 15 characters long.<br>\r\n                        2.The first 2 characters should be the number.<br>\r\n                        3.The next 10 characters should be the PAN number of the taxpayer.<br>\r\n                        4.The 13th character (entity code) should be a number from 1-9 or an alphabet.<br>\r\n                        5.The 14th character should be Z.<br>\r\n                        6.The 15th character should be an alphabet or a number.\r\n                      </div>\r\n                      <!-- pattern=\"^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]1}[1-9A-Z]{1}Z[0-9A-Z]{1}$ -->\r\n                    </ion-col>\r\n                    <!-- PAN -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>PAN</mat-label>\r\n                          <input matInput [(ngModel)]=\"adminprofiledata.pan\" name=\"pan\" required clearInput>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- Country -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-item ngsel\">\r\n                        <ng-select [items]=\"countryList\" bindLabel=\"name\" name=\"country\" placeholder=\"Select Country\"\r\n                          bindValue=\"name\" [(ngModel)]=\"adminprofiledata.country\"\r\n                          (change)=\"SelectedCountry(adminprofiledata.country)\" required>\r\n                        </ng-select>\r\n                        <label>Country<sup>*</sup></label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- State -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-item ngsel\">\r\n                        <ng-select [items]=\"stateList\" bindLabel=\"name\" name=\"state\" placeholder=\"Select State\"\r\n                          bindValue=\"name\" [(ngModel)]=\"adminprofiledata.state\"\r\n                          (change)=\"selectState(adminprofiledata.state)\" required\r\n                          [disabled]=\"!adminprofiledata.country || stateLoading\">\r\n                        </ng-select>\r\n                        <label>State <sup>*</sup> </label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- city -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>city</mat-label>\r\n                          <input matInput type=\"text\" [(ngModel)]=\"adminprofiledata.city\" name=\"city\" required\r\n                            pattern=\"\\S(.*\\S)?\" clearInput>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <!-- PIN -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Pin</mat-label>\r\n                          <input matInput type=\"text\" pattern=\"^[1-9][0-9]{5}$\" maxlength=\"6\" minlength=\"6\"\r\n                            [(ngModel)]=\"adminprofiledata.pin\" name=\"pin\" required clearInput>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : btnloader2}\" type=\"submit\" style=\"padding-left: 19px;\"\r\n                    [disabled]=\"!adminprofileForm.valid\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"btnloader2\" name=\"crescent\" *ngIf=\"btnloader2\"></ion-spinner>\r\n                    Update\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- adminprofile_modal modal end -->\r\n          <!-- productapprove_modal modal start -->\r\n          <div class=\"product_modal pt-2\" *ngIf=\"get_identifier == 'productapprove_modal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #approveForm=\"ngForm\" (ngSubmit)=\"onSubmitapproveProduct(approveForm)\">\r\n\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <!-- comment -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Enter a comment</mat-label>\r\n                          <textarea matInput type=\"text\" [(ngModel)]=\"modal.comment\" name=\"comment\" required clearInput\r\n                            rows=\"5\">\r\n                            </textarea>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                <div class=\"form-button\">\r\n                  <ion-button class=\"custom-btn\" [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"\r\n                    [disabled]=\"!approveForm.valid\">\r\n                    <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- productmessage_modal modal end -->\r\n          <!-- productmessage_modal modal start -->\r\n          <div class=\"product_modal pt-2\" *ngIf=\"get_identifier == 'message_modal'\">\r\n            <div class=\"\">\r\n              <div class=\"comment-body\" *ngFor=\"let item of get_item\">\r\n                <p class=\"opacity-6 mb-0\"\r\n                  [ngClass]=\"{'success': item.Reason == 'Approved' , 'danger': item.Reason == 'Rejected'}\">Reason: <span\r\n                    class=\"font-weight-200\">{{item?.Reason}}</span> <span\r\n                    class=\"float-right\">Date:{{item?.dateTime}}</span> </p>\r\n                <p class=\"mb-0 message\"><span>Comment : </span>{{item?.comments}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"product_modal pt-2\" *ngIf=\"get_identifier == 'rejectmessage_modal'\">\r\n            <div class=\"\">\r\n              <div class=\"comment-body\">\r\n                <p class=\"opacity-8 mb-0 danger\">Reason: <span class=\"font-weight-200\">Rejected</span></p>\r\n                <p class=\"mb-0 message\"><span>Comment : </span>{{get_item}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- productapprove_modal modal end -->\r\n          <!-- Desigerrejected_modal modal start -->\r\n          <div class=\"product_modal pt-2\" *ngIf=\"get_identifier == 'Desigerrejected_modal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #designerRejectForm=\"ngForm\"\r\n                (ngSubmit)=\"onSubmitdesignerRejectForm(designerRejectForm)\">\r\n\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <!-- comment -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Enter a comment</mat-label>\r\n                          <textarea matInput type=\"text\" [(ngModel)]=\"modal.comment\" name=\"comment\" required clearInput\r\n                            rows=\"5\">\r\n                            </textarea>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                <div class=\"form-button\">\r\n                  <ion-button class=\"custom-btn\" [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"\r\n                    [disabled]=\"!designerRejectForm.valid\">\r\n                    <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- Desigerrejected_modal modal end -->\r\n          <!-- Desigerrejected_modal modal start -->\r\n          <div class=\"product_modal pt-2\" *ngIf=\"get_identifier == 'DesigerApprove_modal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #designerApproveForm=\"ngForm\"\r\n                (ngSubmit)=\"onSubmitdesignerApproveForm(designerApproveForm)\">\r\n\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <!-- comment -->\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Display Name</mat-label>\r\n                          <input (keyUp)=\"checkValidtion('displayName')\" (input)=\"checkValidtion('displayName')\" (blur)=\"checkValidtion('displayName')\" matInput type=\"text\" [(ngModel)]=\"modal.displayName\" name=\"displayName\" required\r\n                          pattern=\"^[a-zA-Z][a-zA-Z\\s]*$\" clearInput>\r\n                          <mat-hint *ngIf=\"errors.displayName\">{{errors.displayName}}</mat-hint>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\">\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Select Lebel</mat-label>\r\n                          <mat-select name=\"designerCategory\" [(ngModel)]=\"modal.designerCategory\" required>\r\n                            <mat-option *ngFor=\"let Lebel of Lebellist\" [value]=\"Lebel.Name\">{{Lebel.Name}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n                <div class=\"form-button\">\r\n                  <ion-button class=\"custom-btn\" [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"\r\n                    [disabled]=\"!designerApproveForm.valid\">\r\n                    <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- Desigerrejected_modal modal end -->\r\n          <!-- orderCancelDesigner_modal modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'orderCancelDesigner_modal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #orderCancel=\"ngForm\" (ngSubmit)=\"onSubmitDeliveredCancelAdminForm(orderCancel)\"\r\n                novalidate>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Reason of Cancel</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.comment\" name=\"comment\" rows=\"5\" required\r\n                        clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <input type=\"hidden\" name=\"deliveryStatus\" [(ngModel)]=\"model.deliveryStatus\">\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!orderCancel.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- orderCancelDesignermodal modal end -->\r\n          <!-- order-packed Admin modal start -->\r\n          <div class=\"packed_modal pt-2\" *ngIf=\"get_identifier == 'orderpackModal'\">\r\n            <div class=\"login-inner\">\r\n              <form class=\"login\" novalidate #orderPackedForm=\"ngForm\"\r\n                (ngSubmit)=\"ordersSubmit(orderPackedForm,'Packed')\">\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"mat-form form-group\">\r\n                    <mat-checkbox class=\"example-margin mat-check mr-b-15\" name=\"packedCovered\"\r\n                      [(ngModel)]=\"model.packedCovered\" required>\r\n                      <p>Packed in Divatt Cover</p>\r\n                    </mat-checkbox>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"mat-form form-group\">\r\n                    <mat-checkbox class=\"example-margin mat-check mr-b-15\" name=\"packingVideo\"\r\n                      [(ngModel)]=\"model.packingVideo\" required>\r\n                      <p>Recorded the packing video</p>\r\n                    </mat-checkbox>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button type=\"submit\" style=\"padding-left: 19px;\" [disabled]=\"!orderPackedForm.valid\"\r\n                    class=\"custom-btn\">\r\n                    Submit\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- order-packed Admin modal end -->\r\n          <!-- order-Shipped Admin modal start -->\r\n          <div class=\"shipped_modal pt-2\" *ngIf=\"get_identifier == 'ordershippedModal'\">\r\n            <div class=\"login-inner\">\r\n              <form class=\"login\" novalidate #orderShippedForm=\"ngForm\"\r\n                (ngSubmit)=\"ordersSubmit(orderShippedForm,'Shipped')\">\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Courier Name</mat-label>\r\n                      <input matInput type=\"text\" name=\"courierName\" pattern=\"^[a-zA-Z \\-\\']+\" clearInput required\r\n                        [(ngModel)]=\"model.courierName\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>AWB Number</mat-label>\r\n                      <input matInput type=\"number\" min=\"0\" name=\"awbNumber\" clearInput required\r\n                        [(ngModel)]=\"model.awbNumber\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button type=\"submit\" style=\"padding-left: 19px;\" [disabled]=\"!orderShippedForm.valid\"\r\n                    class=\"custom-btn\">\r\n                    Submit\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- order-Shipped Admin modal end -->\r\n          <!-- order-Deliverd Admin modal start -->\r\n          <div class=\"deliverd_modal pt-2\" *ngIf=\"get_identifier == 'orderdeliverModal'\">\r\n            <div class=\"login-inner\">\r\n              <form class=\"login\" novalidate #orderDeliverdForm=\"ngForm\"\r\n                (ngSubmit)=\"ordersSubmit(orderDeliverdForm,'Delivered')\">\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <!-- <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Delivered Date</mat-label>\r\n                      <input matInput type=\"date\" [(ngModel)]=\"model.deliver_Date\" name=\"deliver_Date\"\r\n                        [min]=\"mindateRange\" [max]=\"dateRange\" required\r\n                        (change)=\"changeDateFormat('deliveredDate',model.deliver_Date)\" clearInput>\r\n                    </mat-form-field> -->\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Delivered Date</mat-label>\r\n                      <input matInput (dateChange)=\"dateFormatChange('deliveredDate', $event)\" (dateInput)=\"dateFormatChange('deliveredDate', $event)\" [matDatepicker]=\"deliveredDate\" placeholder=\"{{model.deliver_Date}}\" [(ngModel)]=\"model.deliver_Date\" name=\"deliver_Date\"\r\n                      [min]=\"mindateRange\" [max]=\"dateRange\" required readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"deliveredDate\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #deliveredDate></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <input type=\"hidden\" [(ngModel)]=\"model.deliveredDate\" name=\"deliveredDate\">\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button type=\"submit\" style=\"padding-left: 19px;\" [disabled]=\"!orderDeliverdForm.valid\"\r\n                    class=\"custom-btn\">\r\n                    Submit\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- order-Deliverd Admin modal end -->\r\n          <!-- cancelledApprovalModal modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'cancelledApprovalModal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #cancelledApproval=\"ngForm\"\r\n                (ngSubmit)=\"onSubmitcancelledApprovalForm(cancelledApproval)\" novalidate>\r\n                <label id=\"example-radio-group-label\">Request</label>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"orderStatus\" [(ngModel)]=\"model.orderStatus\">\r\n                      <mat-radio-button value=\"cancelled\">Approve</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button value=\"Rejected\">Reject</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Comment</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.comment\" name=\"comment\" rows=\"5\" required\r\n                        clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!cancelledApproval.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- cancelledApprovalModal modal end -->\r\n          <!-- accountStatus modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'accountStatus'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #accountStatus=\"ngForm\" (ngSubmit)=\"onSubmitaccountStatusForm(accountStatus)\"\r\n                novalidate>\r\n                <label id=\"example-radio-group-label\">Return Amount Status</label>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"status\" [(ngModel)]=\"model.status\">\r\n                      <mat-radio-button [disabled]=\"get_item?.designer_return_amount[0]?.status == 'RETURN'\"\r\n                        value=\"RETURN\">Paid</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button [disabled]=\"get_item?.designer_return_amount[0]?.status == 'RETURN'\"\r\n                        value=\"NOT RETURN\">Unpaid</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <!-- <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Date</mat-label>\r\n                      <input matInput type=\"date\" [(ngModel)]=\"model.paymentDate\" [max]=\"currentDate\" name=\"paymentDate\"\r\n                        (change)=\"changeDateFormat('payment',model.paymentDate)\" clearInput required />\r\n                    </mat-form-field> -->\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Date</mat-label>\r\n                      <input matInput [max]=\"currentDate\" (dateChange)=\"dateFormatChange('payment', $event)\" (dateInput)=\"dateFormatChange('payment', $event)\" [matDatepicker]=\"payment\" placeholder=\"{{model.paymentDate}}\" [(ngModel)]=\"model.paymentDate\" name=\"paymentDate\" required readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"payment\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #payment></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <input type=\"hidden\" [(ngModel)]=\"model.payment_datetime\" name=\"payment_datetime\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <!-- <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Updated Datetime</mat-label>\r\n                      <input matInput type=\"date\" [(ngModel)]=\"model.updatedDatetime\" name=\"updatedDatetime\"\r\n                        (change)=\"changeDateFormat('updatedDatetime',model.updatedDatetime)\" clearInput required />\r\n                    </mat-form-field> -->\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Updated Datetime</mat-label>\r\n                      <input matInput (dateChange)=\"dateFormatChange('updatedDatetime', $event)\" (dateInput)=\"dateFormatChange('updatedDatetime', $event)\" [matDatepicker]=\"updatedDatetime\" placeholder=\"{{model.updatedDatetime}}\" [(ngModel)]=\"model.updatedDatetime\" name=\"updatedDatetime\" required readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"updatedDatetime\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #updatedDatetime></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <input type=\"hidden\" [(ngModel)]=\"model.updated_datetime\" name=\"updated_datetime\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Remarks</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.remarks\" name=\"remarks\" rows=\"5\" clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!accountStatus.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- accountStatus modal end -->\r\n          <!-- serviceStatus modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'serviceStatus'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #serviceStatus=\"ngForm\" (ngSubmit)=\"onSubmitserviceStatusForm(serviceStatus)\"\r\n                novalidate>\r\n                <label id=\"example-radio-group-label\">Service Charge Status</label>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"status\" [(ngModel)]=\"model.status\">\r\n                      <mat-radio-button [disabled]=\"get_item?.service_charge?.status == 'PAID'\"\r\n                        value=\"PAID\">PAID</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button [disabled]=\"get_item?.service_charge?.status == 'PAID'\" value=\"NOT PAID\">NOT\r\n                        PAID</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <!-- <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Date</mat-label>\r\n                      <input matInput type=\"date\" [(ngModel)]=\"model.service_Date\" [max]=\"currentDate\"\r\n                        name=\"service_Date\" (change)=\"changeDateFormat('service_Date',model.service_Date)\" clearInput\r\n                        required />\r\n                    </mat-form-field> -->\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Updated Datetime</mat-label>\r\n                      <input matInput [max]=\"currentDate\" (dateChange)=\"dateFormatChange('service_Date', $event)\" (dateInput)=\"dateFormatChange('service_Date', $event)\" [matDatepicker]=\"service_Date\" placeholder=\"{{model.service_Date}}\" [(ngModel)]=\"model.service_Date\" name=\"service_Date\" required readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"service_Date\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #service_Date></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <input type=\"hidden\" [(ngModel)]=\"model.servicedate\" name=\"servicedate\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Remarks</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.remarks\" name=\"remarks\" rows=\"5\" clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!serviceStatus.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- serviceStatus modal end -->\r\n          <!-- govStatus modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'govt_charge'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #govt_charge=\"ngForm\" (ngSubmit)=\"onSubmitgovStatusForm(govt_charge)\" novalidate>\r\n                <label id=\"example-radio-group-label\">Government Charge Status</label>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"status\" [(ngModel)]=\"model.status\">\r\n                      <mat-radio-button [disabled]=\"get_item?.govt_charge[0]?.status == 'PAID'\"\r\n                        value=\"PAID\">PAID</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button [disabled]=\"get_item?.govt_charge[0]?.status == 'PAID'\" value=\"NOT PAID\">NOT\r\n                        PAID</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <!-- <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Date</mat-label>\r\n                      <input matInput type=\"date\" [(ngModel)]=\"model.gov_Date\" name=\"gov_Date\"\r\n                        (change)=\"changeDateFormat('gov_Date',model.gov_Date)\" clearInput required />\r\n                    </mat-form-field> -->\r\n\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Updated Datetime</mat-label>\r\n                      <input matInput (dateChange)=\"dateFormatChange('gov_Date', $event)\" (dateInput)=\"dateFormatChange('gov_Date', $event)\" [matDatepicker]=\"gov_Date\" placeholder=\"{{model.gov_Date}}\" [(ngModel)]=\"model.gov_Date\" name=\"gov_Date\" required readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"gov_Date\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #gov_Date></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <input type=\"hidden\" [(ngModel)]=\"model.govdate\" name=\"govdate\">\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Remarks</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.remarks\" name=\"remarks\" rows=\"5\" clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!govt_charge.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- govStatus modal end -->\r\n          <!-- govStatus modal start -->\r\n          <div class=\"profile_modal userCustomMesorment pt-2\" *ngIf=\"get_identifier == 'userCustomMesorment'\">\r\n            <div class=\"row text-black\" *ngIf=\"get_item?.gender == 'men'\">\r\n              <div class=\"col-md-6 col-sm-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Neck</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.neck}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Shoulder </span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.shoulder}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Chest</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.chest}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Crotch Length</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.crotchLength}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Side neck point to waist</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.sideNeck}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Nape to waist</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.napeNaist}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Back width</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.backWidth}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Armscye depth</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.armscyeDepth}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Armhole</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.armhole}} {{mesorementData?.sizeType == 'inch'\r\n                      ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Top arm(bicep)</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.topArm}} {{mesorementData?.sizeType == 'inch'\r\n                      ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Elbow</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.elbow}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Wrist</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.wrist}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Sleeve length</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.sleeveLength}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 col-sm-6\">\r\n                <div class=\"row\">\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Crotch depth</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.crotchDepth}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Waist</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waist}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Hip</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.hip}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Top hip</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.topHip}} {{mesorementData?.sizeType == 'inch'\r\n                      ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Waist to hip</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waistToHip}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Waist to knee</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waistToknee}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Waist to ankle</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waistToAnkle}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Knee to ankle</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.kneeToAnkle}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Thigh</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.thigh}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Knee</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.knee}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Calf circumference</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.calfCircumference}} {{mesorementData?.sizeType\r\n                      == 'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">High ankle</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.highAnkle}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Ankle</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.ankle}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Waist to floor</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waistToFloor}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row text-black\" *ngIf=\"get_item?.gender == 'women'\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Neck</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.neck}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Shoulder </span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.shoulder}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Bust</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.bust}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Crotch Length</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.crotchLength}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Waist</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waist}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Hip</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.hip}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Rib cage (under bust)</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.ribCage}} {{mesorementData?.sizeType == 'inch'\r\n                      ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Top hip (low waist)</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.topHip}} {{mesorementData?.sizeType == 'inch'\r\n                      ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Side neck point to waist apex (front neck depth)</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.sideNeck}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Waist to hip</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waistToHip}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Back side neck point to waist (back neck depth)</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.backSide}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Front side neck point to waist (kurta length along with waist to knee)</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.frontSide}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\"col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Back width</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.backWidth}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"row\">\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Waist to knee</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waistToKnee}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"name\">Armscye depth</span>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.armscyeDepth}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Knee to ankle(may be required for ankle length)</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.kneeToAnkle}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Armhole</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.armhole}} {{mesorementData?.sizeType == 'inch'\r\n                      ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Thigh</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.thigh}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Top arm(bicep)</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.topArm}} {{mesorementData?.sizeType == 'inch'\r\n                      ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Knee</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.knee}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Knee to ankle</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.kneeToAnkle}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Thigh</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.thigh}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Knee</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.knee}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Elbow</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.elbow}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Calf circumference</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.calfCircumference}} {{mesorementData?.sizeType\r\n                      == 'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">High ankle</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.highAnkle}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Wrist</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.wrist}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Ankle</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.ankle}} {{mesorementData?.sizeType == 'inch' ?\r\n                      'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Crotch depth</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.crotchDepth}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                  <div class=\" col-md-8 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <div class=\"name\">Waist to floor(bottom length)</div>\r\n                  </div>\r\n                  <div class=\"col-md-4 pb-13 col-sm-6 col-xs-6 pb-13\">\r\n                    <span class=\"size\">{{mesorementData?.measurementJSON?.waistToFloor}} {{mesorementData?.sizeType ==\r\n                      'inch' ? 'inches' : 'CMS'}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- returnRequest modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'returnRequestConfirm'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #ReturnApproval=\"ngForm\" (ngSubmit)=\"ordersSubmit(ReturnApproval,'returnApprove')\"\r\n                novalidate>\r\n                <label id=\"example-radio-group-label\">Request</label>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"isReturn\" [(ngModel)]=\"model.isReturn\" required>\r\n                      <mat-radio-button value=\"true\">Approve</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button value=\"false\">Reject</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Comment</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.comment\" name=\"comment\" rows=\"5\" required\r\n                        clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!ReturnApproval.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- returnRequest modal end -->\r\n          <!-- forceReturnModal modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'forceReturnModal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #forceReturn=\"ngForm\" (ngSubmit)=\"ordersSubmit(forceReturn,'returnApprove')\"\r\n                novalidate>\r\n                <label id=\"example-radio-group-label\">Request</label>\r\n                <!-- <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"isReturn\" [(ngModel)]=\"model.isReturn\" required>\r\n                      <mat-radio-button value=\"true\">Approve</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button value=\"false\">Reject</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col> -->\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Comment</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.comment\" name=\"comment\" rows=\"5\" required\r\n                        clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!forceReturn.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'forceReturnOnModal'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #ForceReturn=\"ngForm\" (ngSubmit)=\"ordersSubmit(ForceReturn,'forceReturnOnModal')\"\r\n                novalidate>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Commnts</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.comments\" name=\"comments\" rows=\"5\" clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!ForceReturn.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- forceReturnModal modal end -->\r\n          <!-- returnRequest modal start -->\r\n          <!-- <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'returnRefund'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #returnRefundForm=\"ngForm\" (ngSubmit)=\"ordersSubmit(returnRefundForm,'returnRefund')\"  novalidate>\r\n                <label id=\"example-radio-group-label\">Request</label>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"isReturn\" [(ngModel)]=\"model.isReturn\" required>\r\n                      <mat-radio-button value=\"true\">Approve</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button value=\"false\">Reject</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Comment</mat-label>\r\n                      <textarea matInput type=\"text\"\r\n                      [(ngModel)]=\"model.comment\"\r\n                      name=\"comment\"\r\n                      rows=\"5\"\r\n                      required\r\n                      clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!returnRefundForm.valid\" type=\"submit\" style=\"padding-left: 19px;\"   class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div> -->\r\n          <!-- returnRequest modal end -->\r\n          <!-- returnRequest modal start -->\r\n          <div class=\"profile_modal pt-2\" *ngIf=\"get_identifier == 'returnRefund'\">\r\n            <div class=\"\">\r\n              <form class=\"login\" #returnRefundForm=\"ngForm\" (ngSubmit)=\"ordersSubmit(returnRefundForm,'returnRefund')\"\r\n                novalidate>\r\n                <label id=\"example-radio-group-label\">Request</label>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-radio-group name=\"isReturn\" [(ngModel)]=\"model.isReturn\" required>\r\n                      <mat-radio-button value=\"true\">Approve</mat-radio-button>&nbsp;&nbsp;&nbsp;\r\n                      <mat-radio-button value=\"false\">Reject</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n                  <div class=\"form-group\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Comment</mat-label>\r\n                      <textarea matInput type=\"text\" [(ngModel)]=\"model.comment\" name=\"comment\" rows=\"5\" required\r\n                        clearInput>\r\n                      </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ion-col>\r\n                <div class=\"form-button\">\r\n                  <ion-button [ngClass]=\"{'disabled' : formloader}\" [disabled]=\"!returnRefundForm.valid\" type=\"submit\"\r\n                    style=\"padding-left: 19px;\" class=\"custom-btn\">\r\n                    <ion-spinner class=\"formloader\" name=\"crescent\" *ngIf=\"formloader\"></ion-spinner>\r\n                    Submit\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" (click)=\"closeModal()\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- returnRequest modal end -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n<!-- (keyup.enter)=\"onSubmitChangepswForm(changepasswordForm)\" -->");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map