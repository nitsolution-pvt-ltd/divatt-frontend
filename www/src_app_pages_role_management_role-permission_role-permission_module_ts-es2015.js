(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_role_management_role-permission_role-permission_module_ts"],{

/***/ 18280:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/role_management/role-permission/role-permission-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePermissionPageRoutingModule": function() { return /* binding */ RolePermissionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _role_permission_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-permission.page */ 98477);




const routes = [
    {
        path: '',
        component: _role_permission_page__WEBPACK_IMPORTED_MODULE_0__.RolePermissionPage
    }
];
let RolePermissionPageRoutingModule = class RolePermissionPageRoutingModule {
};
RolePermissionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RolePermissionPageRoutingModule);



/***/ }),

/***/ 31937:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/role_management/role-permission/role-permission.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePermissionPageModule": function() { return /* binding */ RolePermissionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-permission-routing.module */ 18280);
/* harmony import */ var _role_permission_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-permission.page */ 98477);







let RolePermissionPageModule = class RolePermissionPageModule {
};
RolePermissionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePermissionPageRoutingModule
        ],
        declarations: [_role_permission_page__WEBPACK_IMPORTED_MODULE_1__.RolePermissionPage]
    })
], RolePermissionPageModule);



/***/ }),

/***/ 98477:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/role_management/role-permission/role-permission.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePermissionPage": function() { return /* binding */ RolePermissionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_role_permission_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./role-permission.page.html */ 90006);
/* harmony import */ var _role_permission_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-permission.page.scss */ 29196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let RolePermissionPage = class RolePermissionPage {
    constructor() { }
    ngOnInit() {
    }
};
RolePermissionPage.ctorParameters = () => [];
RolePermissionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-role-permission',
        template: _raw_loader_role_permission_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_role_permission_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RolePermissionPage);



/***/ }),

/***/ 29196:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/role_management/role-permission/role-permission.page.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLXBlcm1pc3Npb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 90006:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role_management/role-permission/role-permission.page.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>role-permission</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_role_management_role-permission_role-permission_module_ts-es2015.js.map