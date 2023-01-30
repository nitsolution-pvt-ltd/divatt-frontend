(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_role_management_role-permission_role-permission_module_ts"], {
    /***/
    18280:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/role_management/role-permission/role-permission-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolePermissionPageRoutingModule": function RolePermissionPageRoutingModule() {
          return (
            /* binding */
            _RolePermissionPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _role_permission_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./role-permission.page */
      98477);

      var routes = [{
        path: '',
        component: _role_permission_page__WEBPACK_IMPORTED_MODULE_0__.RolePermissionPage
      }];

      var _RolePermissionPageRoutingModule = function RolePermissionPageRoutingModule() {
        _classCallCheck(this, RolePermissionPageRoutingModule);
      };

      _RolePermissionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RolePermissionPageRoutingModule);
      /***/
    },

    /***/
    31937:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/role_management/role-permission/role-permission.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolePermissionPageModule": function RolePermissionPageModule() {
          return (
            /* binding */
            _RolePermissionPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./role-permission-routing.module */
      18280);
      /* harmony import */


      var _role_permission_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role-permission.page */
      98477);

      var _RolePermissionPageModule = function RolePermissionPageModule() {
        _classCallCheck(this, RolePermissionPageModule);
      };

      _RolePermissionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _role_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePermissionPageRoutingModule],
        declarations: [_role_permission_page__WEBPACK_IMPORTED_MODULE_1__.RolePermissionPage]
      })], _RolePermissionPageModule);
      /***/
    },

    /***/
    98477:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/role_management/role-permission/role-permission.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolePermissionPage": function RolePermissionPage() {
          return (
            /* binding */
            _RolePermissionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_role_permission_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./role-permission.page.html */
      90006);
      /* harmony import */


      var _role_permission_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role-permission.page.scss */
      29196);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RolePermissionPage = /*#__PURE__*/function () {
        function RolePermissionPage() {
          _classCallCheck(this, RolePermissionPage);
        }

        _createClass(RolePermissionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RolePermissionPage;
      }();

      _RolePermissionPage.ctorParameters = function () {
        return [];
      };

      _RolePermissionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-role-permission',
        template: _raw_loader_role_permission_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_role_permission_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RolePermissionPage);
      /***/
    },

    /***/
    29196:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/role_management/role-permission/role-permission.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLXBlcm1pc3Npb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    90006:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role_management/role-permission/role-permission.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>role-permission</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_role_management_role-permission_role-permission_module_ts-es5.js.map