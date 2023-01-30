(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_role_management_add-role_add-role_module_ts"], {
    /***/
    82651:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/role_management/add-role/add-role-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddRolePageRoutingModule": function AddRolePageRoutingModule() {
          return (
            /* binding */
            _AddRolePageRoutingModule
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


      var _add_role_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-role.page */
      75653);

      var routes = [{
        path: '',
        component: _add_role_page__WEBPACK_IMPORTED_MODULE_0__.AddRolePage
      }];

      var _AddRolePageRoutingModule = function AddRolePageRoutingModule() {
        _classCallCheck(this, AddRolePageRoutingModule);
      };

      _AddRolePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddRolePageRoutingModule);
      /***/
    },

    /***/
    42344:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/role_management/add-role/add-role.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddRolePageModule": function AddRolePageModule() {
          return (
            /* binding */
            _AddRolePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _add_role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-role-routing.module */
      82651);
      /* harmony import */


      var _add_role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-role.page */
      75653);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddRolePageModule = function AddRolePageModule() {
        _classCallCheck(this, AddRolePageModule);
      };

      _AddRolePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_role_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddRolePageRoutingModule],
        declarations: [_add_role_page__WEBPACK_IMPORTED_MODULE_1__.AddRolePage]
      })], _AddRolePageModule);
      /***/
    },

    /***/
    75653:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/role_management/add-role/add-role.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddRolePage": function AddRolePage() {
          return (
            /* binding */
            _AddRolePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_role_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-role.page.html */
      28017);
      /* harmony import */


      var _add_role_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-role.page.scss */
      16036);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);

      var _AddRolePage = /*#__PURE__*/function () {
        /*Variable end*/
        function AddRolePage(toastController, menuCtrl, http, commonUtils, // common functionlity come here
        router, activatedRoute, authService) {
          _classCallCheck(this, AddRolePage);

          this.toastController = toastController;
          this.menuCtrl = menuCtrl;
          this.http = http;
          this.commonUtils = commonUtils;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.authService = authService;
          /*Variable start*/

          this.model = {};
          this.editLoading = false; // ---------- init end ----------
          // ======================== form submit start ===================

          this.formLoading = false;
        }

        _createClass(AddRolePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.commonFunction();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.commonFunction();
          }
        }, {
          key: "commonFunction",
          value: function commonFunction() {
            var _this = this;

            // get active url name
            this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
            this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
            this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
            console.log('parms_action_name', this.parms_action_name);
            console.log('parms_action_id', this.parms_action_id); // get module api

            this.getmoduleList_api = 'admin/modules'; // form_api Api

            this.form_api = 'admin/role';
            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              console.log('res>>', res);

              if (res.authority == 'ADMIN') {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    console.log('menu>>', data);
                    console.log('this.router.url>>', _this.router.url);

                    var pageUrlName = _this.router.url.split("/");

                    console.log('pageUrlName', pageUrlName);

                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;
                        var moduleUrlName = item.modDetails.url.split("-");
                        console.log('moduleUrlName', moduleUrlName);

                        if (pageUrlName[1] == moduleUrlName[0]) {
                          if (_this.parms_action_name == 'add' && item.modPrivs.create == true) {
                            console.log('-----Permission create Granted-----');

                            _this.getmoduleList();

                            break;
                          } else if (_this.parms_action_name == 'edit' && item.modPrivs.update == true) {
                            console.log('-----Permission update Granted-----');
                            _this.editApi = 'admin/role/' + _this.parms_action_id; // init call

                            _this.init();

                            _this.getmoduleList();

                            break;
                          } else {
                            console.log('-------No Permission--------');

                            _this.router.navigateByUrl('/error');
                          }
                        }
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }
                });
              } else {
                _this.router.navigateByUrl('/error');
              }
            });
            /*Check permission status end*/
          }
          /* -------------Get modules start------------- */

        }, {
          key: "getmoduleList",
          value: function getmoduleList() {
            var _this2 = this;

            this.editLoading = true;
            this.getmodules = this.http.get(this.getmoduleList_api).subscribe(function (res) {
              _this2.moduleList = res;
              console.log("Get moduleList", _this2.moduleList);
              _this2.editLoading = false;
            }, function (errRes) {
              console.log("Get moduleList >", errRes);
              _this2.editLoading = false;
            });
          }
          /*Get modules end */
          // ---------- init start ----------

        }, {
          key: "init",
          value: function init() {
            var _this3 = this;

            if (this.parms_action_name == 'edit') {
              this.actionHeaderText = 'Edit';
              this.editLoading = true; //edit data call

              this.editDataSubscribe = this.http.get(this.editApi).subscribe(function (res) {
                _this3.editLoading = false;
                console.log("Edit data  res >", res.return_data);
                _this3.model = {
                  roleName: res.roleName,
                  modules: res.modules
                };
                console.log('modules', _this3.model.modules); // this.ngsel(this.model.instId);

                _this3.model.creatDate = moment__WEBPACK_IMPORTED_MODULE_3__(res.lcCreatDate).format('YYYY-MM-DD');
                console.log('this.model.creatDate', _this3.model); // edit data

                _this3.allEditData = res;
                console.log('this.allEditData', _this3.allEditData);
              }, function (errRes) {
                // this.selectLoadingDepend = false;
                _this3.editLoading = false;
              });
            } else {
              this.actionHeaderText = 'Add';
            }
          }
        }, {
          key: "onSubmitForm",
          value: function onSubmitForm(form) {
            var _this4 = this;

            console.log("add form submit >", form.value);
            this.formLoading = true;
            var formValue = form.value;
            console.log('formValue', formValue);
            var modules = [];
            console.log('formValue.length', formValue.length);
            console.log('formValue.modules[index].modName', formValue.modules0modName);

            for (var index = 0; index < formValue.length; index++) {
              modules.push({
                "modName": formValue["modules" + index + "modName"],
                "modPrivs": {
                  "create": formValue["modules" + index + "create"],
                  "update": formValue["modules" + index + "update"],
                  "list": formValue["modules" + index + "list"],
                  "delete": formValue["modules" + index + "delete"]
                }
              });
            }

            console.log('modules', modules);
            var formAllData = {
              "roleName": formValue.roleName,
              "modules": modules
            };
            console.log('formAllData', formAllData);

            if (!form.valid) {
              return;
            }

            if (this.parms_action_name == 'edit') {
              this.formSubmitSubscribe = this.http.post(this.editForm_api, formAllData).subscribe(function (response) {
                _this4.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this4.router.navigateByUrl('role-list');

                  _this4.commonUtils.presentToast('success', response.message);

                  form.reset();
                } else {
                  _this4.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this4.formLoading = false;
              });
            } else if (this.parms_action_name == 'add') {
              this.formSubmitSubscribe = this.http.post(this.form_api, formAllData).subscribe(function (response) {
                _this4.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this4.router.navigateByUrl('role-list');

                  _this4.commonUtils.presentToast('success', response.message);

                  form.reset();

                  _this4.getmoduleList();
                } else {
                  _this4.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this4.formLoading = false;
              });
            }
          } // form submit end
          // ----------- destroy subscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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
        }]);

        return AddRolePage;
      }();

      _AddRolePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
        }];
      };

      _AddRolePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-role',
        template: _raw_loader_add_role_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_role_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddRolePage);
      /***/
    },

    /***/
    16036:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/role_management/add-role/add-role.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcm9sZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    28017:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role_management/add-role/add-role.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"page-header-left\">\r\n                        <h3>{{parms_action_name}} Role\r\n                            <!-- <small>Divatt Admin panel</small> -->\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ol class=\"breadcrumb float-right\">\r\n                      <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                              <mat-icon>home</mat-icon>\r\n                          </a></li>\r\n                      <li class=\"breadcrumb-item\" >\r\n                        Role Management\r\n                      </li>\r\n                      <li class=\"breadcrumb-item active\">\r\n                        {{parms_action_name}} Role\r\n                      </li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-layout\">\r\n        <div class=\"form-wrapper\">\r\n          <div class=\"card card-box\">\r\n            <!-- <div class=\"card-header\">\r\n                <div class=\"card-header-tittle\">\r\n                  {{parms_action_name}} Role\r\n                </div>\r\n            </div> -->\r\n            <form action=\"\" #addForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addForm)\">\r\n              <div class=\"card-body\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\r\n                      <!-- Role name -->\r\n                      <div class=\"form-group\">\r\n                        <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                          <mat-label>Role Name</mat-label>\r\n                          <input matInput  name=\"roleName\" [(ngModel)]=\"model.roleName\" required pattern=\"\\S(.*\\S)?\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                      <h2>Role Permissions</h2>\r\n                      <div class=\"table-responsive \">\r\n                        <table>\r\n                          <thead>\r\n                            <th>Module Name</th>\r\n                            <th>List</th>\r\n                            <th>Create</th>\r\n                            <th>Update</th>\r\n                            <th>Delete</th>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of moduleList?.adminModules; let i = index; let first = first;\" >\r\n                              <td>\r\n                                {{item?.title}} \r\n                                <input type=\"hidden\" name=\"modules{{i}}modName\" [(ngModel)]=\"item.title_code\">\r\n                                <input type=\"hidden\" name=\"length\" [(ngModel)]=\"moduleList.adminModules.length\">\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}list\"\r\n                                [(ngModel)] = \"item.list\"\r\n                                [checked]=\"item.list\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}create\"\r\n                                [(ngModel)] = \"item.create\"\r\n                                [checked]=\"item.create\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}update\"\r\n                                [(ngModel)] = \"item.update\"\r\n                                [checked]=\"item.update\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                              <td>\r\n                                <mat-slide-toggle\r\n                                class=\"example-margin\"\r\n                                name=\"modules{{i}}delete\"\r\n                                [(ngModel)] = \"item.delete\"\r\n                                [checked]=\"item.delete\"\r\n                                ></mat-slide-toggle>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n      \r\n              <div class=\"card-footer\">\r\n                <div></div>\r\n                <div>\r\n                  <ion-button class=\"custom-btn\" type=\"submit\" [disabled]=\"!addForm.valid\">\r\n                    <ion-spinner *ngIf=\"formLoading\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                    Save\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" [routerLink]=\"['/', 'role-list']\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_role_management_add-role_add-role_module_ts-es5.js.map