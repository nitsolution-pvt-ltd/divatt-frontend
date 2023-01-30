(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_employee_management_add-employee_add-employee_module_ts"], {
    /***/
    32851:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/employee_management/add-employee/add-employee-routing.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEmployeePageRoutingModule": function AddEmployeePageRoutingModule() {
          return (
            /* binding */
            _AddEmployeePageRoutingModule
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


      var _add_employee_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-employee.page */
      70380);

      var routes = [{
        path: '',
        component: _add_employee_page__WEBPACK_IMPORTED_MODULE_0__.AddEmployeePage
      }];

      var _AddEmployeePageRoutingModule = function AddEmployeePageRoutingModule() {
        _classCallCheck(this, AddEmployeePageRoutingModule);
      };

      _AddEmployeePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddEmployeePageRoutingModule);
      /***/
    },

    /***/
    1070:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/employee_management/add-employee/add-employee.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEmployeePageModule": function AddEmployeePageModule() {
          return (
            /* binding */
            _AddEmployeePageModule
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


      var _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-employee-routing.module */
      32851);
      /* harmony import */


      var _add_employee_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-employee.page */
      70380);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddEmployeePageModule = function AddEmployeePageModule() {
        _classCallCheck(this, AddEmployeePageModule);
      };

      _AddEmployeePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddEmployeePageRoutingModule],
        declarations: [_add_employee_page__WEBPACK_IMPORTED_MODULE_1__.AddEmployeePage]
      })], _AddEmployeePageModule);
      /***/
    },

    /***/
    70380:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/employee_management/add-employee/add-employee.page.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddEmployeePage": function AddEmployeePage() {
          return (
            /* binding */
            _AddEmployeePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_employee_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-employee.page.html */
      14732);
      /* harmony import */


      var _add_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-employee.page.scss */
      7403);
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

      var _AddEmployeePage = /*#__PURE__*/function () {
        /*Variable end*/
        function AddEmployeePage(toastController, menuCtrl, http, commonUtils, // common functionlity come here
        router, activatedRoute, authService) {
          _classCallCheck(this, AddEmployeePage);

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
          this.hideset = true;
          /*Get roles end */

          /* -----------Image uploading start----------- */

          this.imageSrc = ''; // ---------- init end ----------
          // ======================== form submit start ===================

          this.formLoading = false;
        }

        _createClass(AddEmployeePage, [{
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

            this.getroleList_api = 'admin/roles'; // form_api Api

            this.form_api = 'admin/profile/add';
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

                            _this.getroleList();

                            break;
                          } else if (_this.parms_action_name == 'edit' && item.modPrivs.update == true) {
                            console.log('-----Permission update Granted-----');

                            _this.getroleList();

                            _this.editApi = 'admin/profile/' + _this.parms_action_id; // form api

                            _this.editForm_api = 'admin/profile/update'; // init call

                            _this.init();

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
          /* -------------Get roles start------------- */

        }, {
          key: "getroleList",
          value: function getroleList() {
            var _this2 = this;

            this.editLoading = true;
            this.getroles = this.http.get(this.getroleList_api).subscribe(function (res) {
              _this2.roleList = res;
              console.log("Get roleList", _this2.roleList);
              _this2.editLoading = false;
            }, function (errRes) {
              console.log("Get roleList >", errRes);
              _this2.editLoading = false;
            });
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e) {
            var _this3 = this;

            var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();

            if (!file.type.match(pattern)) {
              alert('invalid format');
              return;
            }

            var fd = new FormData();
            fd.append("file", e.target.files[0]);
            this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
              _this3.imageSrc = res.path;
              _this3.model.profilePic = res.path;
              console.log("profileimgpath", _this3.imageSrc); // this.commonUtils.presentToast('success', res.message);
            }, function (error) {
              console.log("error", error);

              _this3.commonUtils.presentToast('error', error.error.message);
            });
          }
          /* Image uploading end */

          /* Default select start */

        }, {
          key: "ngsel",
          value: function ngsel(value) {
            console.log('Select >>>', value);
          } // Date format change start

        }, {
          key: "changeDateFormat",
          value: function changeDateFormat(_identifier, _date) {
            console.log('_date', _date);
            console.log('_identifier', _identifier);

            if (_identifier == 'registrationDate') {
              this.model.isntRegDate = moment__WEBPACK_IMPORTED_MODULE_3__(_date).format('YYYY/MM/DD');
            } else if (_identifier == 'establishmentDate') {
              this.model.instEndDate = moment__WEBPACK_IMPORTED_MODULE_3__(_date).format('YYYY/MM/DD');
            } else if (_identifier == 'dateOfBirth') {
              this.model.dob = moment__WEBPACK_IMPORTED_MODULE_3__(_date).format('YYYY/MM/DD');
            }

            console.log('model.isntRegDate', this.model.isntRegDate);
          } // Date format change end
          // ---------- init start ----------

        }, {
          key: "init",
          value: function init() {
            var _this4 = this;

            if (this.parms_action_name == 'edit') {
              this.actionHeaderText = 'Edit';
              this.editLoading = true; //edit data call

              this.editDataSubscribe = this.http.get(this.editApi).subscribe(function (res) {
                _this4.editLoading = false;
                console.log("Edit data  res >", res.return_data);
                _this4.model = {
                  firstName: res.firstName,
                  lastName: res.lastName,
                  dob: res.dob,
                  email: res.email,
                  mobileNo: res.mobileNo,
                  role: res.role,
                  roleName: res.roleName,
                  uid: res.uid,
                  profilePic: res.profilePic,
                  password: res.password
                };
                _this4.imageSrc = res.profilePic; // this.ngsel(this.model.instId);

                _this4.model.chkdob = moment__WEBPACK_IMPORTED_MODULE_3__(res.dob).format('YYYY-MM-DD');
                console.log('this.model.creatDate', _this4.model); // edit data

                _this4.allEditData = res;
                console.log('this.allEditData', _this4.allEditData);
              }, function (errRes) {
                // this.selectLoadingDepend = false;
                _this4.editLoading = false;
              });
            } else {
              this.actionHeaderText = 'Add';
            }
          }
        }, {
          key: "onSubmitForm",
          value: function onSubmitForm(form) {
            var _this5 = this;

            console.log("add form submit >", form.value);
            this.formLoading = true;
            var formValue = form.value;
            console.log('formValue', formValue);

            if (!form.valid) {
              return;
            }

            if (this.parms_action_name == 'edit') {
              this.formSubmitSubscribe = this.http.put(this.editForm_api, form.value).subscribe(function (response) {
                _this5.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this5.router.navigateByUrl('employee-list');

                  _this5.commonUtils.presentToast('success', response.message);

                  form.reset();
                } else {
                  _this5.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this5.formLoading = false;

                _this5.commonUtils.presentToast('error', errRes.message);
              });
            } else if (this.parms_action_name == 'add') {
              this.formSubmitSubscribe = this.http.post(this.form_api, form.value).subscribe(function (response) {
                _this5.formLoading = false;
                console.log("add form response >", response);

                if (response.status == 200) {
                  _this5.router.navigateByUrl('employee-list');

                  _this5.commonUtils.presentToast('success', response.message);

                  form.reset();

                  _this5.getroleList();
                } else {
                  _this5.commonUtils.presentToast('error', response.message);
                }
              }, function (errRes) {
                _this5.formLoading = false;

                _this5.commonUtils.presentToast('error', errRes.error.message);
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

        return AddEmployeePage;
      }();

      _AddEmployeePage.ctorParameters = function () {
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

      _AddEmployeePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-employee',
        template: _raw_loader_add_employee_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_employee_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddEmployeePage);
      /***/
    },

    /***/
    7403:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/employee_management/add-employee/add-employee.page.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZW1wbG95ZWUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    14732:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee_management/add-employee/add-employee.page.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"page-header-left\">\r\n                        <h3>{{parms_action_name}} Employee\r\n                            <!-- <small>Divatt Admin panel</small> -->\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ol class=\"breadcrumb float-right\">\r\n                      <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                              <mat-icon>home</mat-icon>\r\n                          </a></li>\r\n                      <li class=\"breadcrumb-item\" >\r\n                        Employee Management\r\n                      </li>\r\n                      <li class=\"breadcrumb-item active\">\r\n                        {{parms_action_name}} Employee\r\n                      </li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-layout\">\r\n      <div class=\"form-wrapper\">\r\n        <div class=\"card card-box\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n              {{parms_action_name}} Employee\r\n            </div>\r\n          </div> -->\r\n          <form action=\"\" #addForm=\"ngForm\" (ngSubmit)=\"onSubmitForm(addForm)\">\r\n            <div class=\"card-body\">\r\n              <!-- Hidden data -->\r\n              <input *ngIf=\"parms_action_name =='edit'\" type=\"hidden\" name=\"uid\" [(ngModel)]=\"model.uid\">\r\n              <input *ngIf=\"parms_action_name =='edit'\" type=\"hidden\" name=\"password\" [(ngModel)]=\"model.password\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <!-- First name -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                        <mat-label>First Name</mat-label>\r\n                        <input matInput  name=\"firstName\" [(ngModel)] = \"model.firstName\" required pattern=\"\\S(.*\\S)?\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Last name -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                        <mat-label>Last Name</mat-label>\r\n                        <input matInput  name=\"lastName\" [(ngModel)] = \"model.lastName\" required pattern=\"\\S(.*\\S)?\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Date of birth -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\r\n                    <div class=\"form-item\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Date of Birth</mat-label>\r\n                        <input (change)=\"changeDateFormat('dateOfBirth', model.chkdob)\" matInput placeholder=\"Date of Birth\" type=\"date\" name=\"chkdob\" [(ngModel)]=\"model.chkdob\" required>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Hidden -->\r\n                  <input type=\"hidden\" name=\"dob\" [(ngModel)]=\"model.dob\" required>\r\n                  <!-- Mobile Number -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Mobile Number</mat-label>\r\n                        <input matInput min=\"1\" type=\"number\"  pattern=\"^((\\\\+91-?)|0)?[0-9]{10}$\"  onKeyPress=\"if(this.value.length==10) {return false;}\" maxlength=\"10\" name=\"mobileNo\" [(ngModel)]=\"model.mobileNo\" required>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Email -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Email</mat-label>\r\n                        <input matInput type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\" email required>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Password -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\"  size-lg=\"4\" *ngIf=\"parms_action_name =='add'\">\r\n                    <div class=\"form-group\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Password</mat-label>\r\n                        <input matInput [type]=\"hideset ? 'password' : 'text'\" name=\"password\" [(ngModel)]=\"model.password\" required>\r\n                        <button mat-icon-button matSuffix (click)=\"hideset = !hideset\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideset\">\r\n                          <mat-icon>{{hideset ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                        </button>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Role -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                    <div class=\"form-item ngsel\">\r\n                      <ng-select [items]=\"roleList\" \r\n                              bindLabel=\"roleName\" \r\n                              name=\"role\"\r\n                              placeholder=\"Select Role\"\r\n                              bindValue=\"roleKey\" \r\n                              [(ngModel)]=\"model.role\"\r\n                              (change)=\"ngsel(model.role)\"\r\n                              required>\r\n                      </ng-select>\r\n                      <label>Role <sup>*</sup> </label>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Hidden -->\r\n                  <input type=\"hidden\" name=\"roleName\" [(ngModel)]=\"model.role\">\r\n                  <!-- Profile Picture -->\r\n                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                    <div class=\"form-item\">\r\n                      <div class=\"custom-file\">\r\n                        <input class=\"custom-file-input\" id=\"singleFileUpload\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event)\">\r\n                        <label class=\"custom-file-label\" for=\"singleFileUpload\">Choose file</label>\r\n                        <img [src]=\"imageSrc\"/>\r\n                      </div>\r\n                    </div>\r\n                  </ion-col>\r\n                  <!-- Hidden -->\r\n                  <input type=\"hidden\" name=\"profilePic\" [(ngModel)]=\"model.profilePic\" required>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n    \r\n            <div class=\"card-footer\">\r\n              <div></div>\r\n              <div>\r\n                <ion-button class=\"custom-btn\" type=\"submit\" [disabled]=\"!addForm.valid\">\r\n                  <ion-spinner *ngIf=\"formLoading\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                  Save\r\n                </ion-button>\r\n                <ion-button color=\"danger\" [routerLink]=\"['/', 'employee-list']\" >\r\n                  Cancel\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_employee_management_add-employee_add-employee_module_ts-es5.js.map