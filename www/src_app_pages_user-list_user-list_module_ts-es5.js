(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_user-list_user-list_module_ts"], {
    /***/
    11398:
    /*!*************************************************************!*\
      !*** ./src/app/pages/user-list/user-list-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserListPageRoutingModule": function UserListPageRoutingModule() {
          return (
            /* binding */
            _UserListPageRoutingModule
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


      var _user_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-list.page */
      187);

      var routes = [{
        path: '',
        component: _user_list_page__WEBPACK_IMPORTED_MODULE_0__.UserListPage
      }];

      var _UserListPageRoutingModule = function UserListPageRoutingModule() {
        _classCallCheck(this, UserListPageRoutingModule);
      };

      _UserListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UserListPageRoutingModule);
      /***/
    },

    /***/
    34543:
    /*!*****************************************************!*\
      !*** ./src/app/pages/user-list/user-list.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserListPageModule": function UserListPageModule() {
          return (
            /* binding */
            _UserListPageModule
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


      var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-list-routing.module */
      11398);
      /* harmony import */


      var _user_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-list.page */
      187);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _UserListPageModule = function UserListPageModule() {
        _classCallCheck(this, UserListPageModule);
      };

      _UserListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _user_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserListPageRoutingModule],
        declarations: [_user_list_page__WEBPACK_IMPORTED_MODULE_1__.UserListPage]
      })], _UserListPageModule);
      /***/
    },

    /***/
    187:
    /*!***************************************************!*\
      !*** ./src/app/pages/user-list/user-list.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserListPage": function UserListPage() {
          return (
            /* binding */
            _UserListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./user-list.page.html */
      82700);
      /* harmony import */


      var _user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-list.page.scss */
      8823);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);

      var _UserListPage = /*#__PURE__*/function () {
        function UserListPage(http, toastController, modalController, alertController, commonUtils, authService, router) {
          _classCallCheck(this, UserListPage);

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
          this.tableHeaderData = [{
            column_name: "firstName",
            display_name: "First Name",
            sortingButtonName: ""
          }, {
            column_name: "lastName",
            display_name: "Last Name",
            sortingButtonName: ""
          }, {
            column_name: "dob",
            display_name: "DOB",
            sortingButtonName: ""
          }, {
            column_name: "email",
            display_name: "Email",
            sortingButtonName: ""
          }, {
            column_name: "username",
            display_name: "Username",
            sortingButtonName: ""
          }, {
            column_name: "mobileNo",
            display_name: "Mobile No",
            sortingButtonName: ""
          }, {
            column_name: "createdOn",
            display_name: "Register On",
            sortingButtonName: ""
          }];
          this.isListLoading = false;
          this.sortColumnName = "";
          this.sortOrderName = "";
          this.deleteLoading = false;
          this.restoreLoading = false;
          /*----------------Table list data start----------------*/
          // Display records start

          this.displayRecord = 10;
          this.displayRecords = [{
            id: '1',
            displayValue: 10
          }, {
            id: '2',
            displayValue: 25
          }, {
            id: '3',
            displayValue: 50
          }, {
            id: '4',
            displayValue: 100
          }]; // Sorting end
          // Search start

          this.searchTerm = "";
        } // Variables end


        _createClass(UserListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.commonFunction();
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

            this.allselectModel = false;
            this.checkedList = []; // this.listing_url = "user/getUserList";
            // this.onRefresh();

            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              console.log("res>>", res);

              if (res.authority == "ADMIN") {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    console.log("menu>>", data);
                    console.log("this.router.url>>", _this.router.url);

                    var pageUrl = _this.router.url.split("/");

                    console.log("pageUrl", pageUrl);

                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        if (item.modDetails.url == pageUrl[1]) {
                          if (item.modPrivs.list == true) {
                            console.log("-----Permission Granted-----");
                            _this.pagePermission = item;
                            console.log("this.pagePermission", _this.pagePermission);
                            _this.listing_url = "user/getUserList";

                            _this.onRefresh(); // delete api


                            break;
                          } else {
                            console.log("-------No Permission--------");

                            _this.router.navigateByUrl("/error");
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
                _this.router.navigateByUrl("/error");
              }
            });
            /*Check permission status end*/
          }
        }, {
          key: "displayRecordChange",
          value: function displayRecordChange(_record) {
            console.log("_record", _record);
            this.displayRecord = _record;
            this.pageNo = 0;
            this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Display records end
          // List data start

        }, {
          key: "onListDate",
          value: function onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
            var _this2 = this;

            this.isListLoading = true;
            var api = _listUrl + "?page=" + _pageNo + "&limit=" + _displayRecord + "&sortName=" + _sortColumnName + "&sort=" + _sortOrderName + "&keyword=" + _searchTerm;
            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              _this2.isListLoading = false;
              console.log("res", res);
              _this2.tableData = res;

              for (var index = 0; index < res.data.length; index++) {
                _this2.tableData.data[index].createdOn = moment__WEBPACK_IMPORTED_MODULE_2__(_this2.tableData.data[index].createdOn).format('DD MMM YYYY');
              }

              _this2.tableListData = res.data; //---------  check item show start ----------

              if (_this2.tableListData && _this2.checkedList) {
                for (var i = 0; i < _this2.tableListData.length; i++) {
                  for (var j = 0; j < _this2.checkedList.length; j++) {
                    if (_this2.checkedList[j].id == _this2.tableListData[i].id) {
                      _this2.tableListData[i].isSelected = true;
                    }
                  }
                }
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this2.isListLoading = false;
            });
          } // List data end
          // Pagination start

        }, {
          key: "setPage",
          value: function setPage(page) {
            console.log("page", page);
            console.log("page");
            this.pageNo = page;
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Pagination end
          // Sorting start

        }, {
          key: "isSortTableHeader",
          value: function isSortTableHeader(_tableHeaderData, _headerItem) {
            console.log("_tableHeaderData", _tableHeaderData);
            console.log("_headerItem", _headerItem); // all field reset first

            _tableHeaderData.forEach(function (val) {
              val.sortingButtonName = "";
            });

            _headerItem.orederShow = !_headerItem.orederShow;

            if (_headerItem.orederShow) {
              _headerItem.sortingButtonName = "ASC";
            } else {
              _headerItem.sortingButtonName = "DESC";
            }

            this.sortColumnName = _headerItem.column_name;
            this.sortOrderName = _headerItem.sortingButtonName;
            console.log("this.sortColumnName", this.sortColumnName);
            console.log("this.sortOrderName", this.sortOrderName);
            console.log("_tableHeaderData>>", _tableHeaderData);
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          }
        }, {
          key: "searchList",
          value: function searchList(event) {
            this.searchTerm = event.target.value;
            console.log("this.searchTerm", this.searchTerm);
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Search end
          // Referesh start

        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.pageNo = 0;
            this.sortColumnName = "id";
            this.sortOrderName = "DESC";
            this.searchTerm = "";
            this.tableValueType = "0"; // table data call

            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Referesh end

        }, {
          key: "statusChange",
          value: function statusChange(id) {}
          /*----------------Table list data end----------------*/
          // ----------- destroy unsubscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.tableListSubscribe !== undefined) {
              this.tableListSubscribe.unsubscribe();
            }

            if (this.permissionDataSubscribe !== undefined) {
              this.permissionDataSubscribe.unsubscribe();
            }
          }
        }]);

        return UserListPage;
      }();

      _UserListPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _UserListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-list',
        template: _raw_loader_user_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_user_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UserListPage);
      /***/
    },

    /***/
    8823:
    /*!*****************************************************!*\
      !*** ./src/app/pages/user-list/user-list.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    82700:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-list/user-list.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"user-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>User List\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          User List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n              User List\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                  <ion-item class=\"record\">\r\n                    <span class=\"text-black mr-1\">Records: </span>\r\n                    <mat-form-field  class=\"m-0\">\r\n                      <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                        <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                          <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                          <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search data ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n             </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th> \r\n                            <th class=\"ion-text-start\">\r\n                              <div>\r\n                                  Profile Img\r\n                              </div>\r\n                          </th>                            \r\n                            <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                {{th.display_name}}\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                              </div>\r\n                            </th>\r\n                            <!-- <th>\r\n                              Status\r\n                            </th> -->\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>\r\n                          <div class=\"text-center\">\r\n                            <img [src]=\"item?.profilePic!= '' ? item?.profilePic : 'assets/images/noimage.jpg'\" class=\"tableimg\">\r\n                          </div>\r\n                        </td> \r\n                        <td>\r\n                          {{item?.firstName}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.lastName}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.dob}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.email}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.username}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.mobileNo}}\r\n                        </td>\r\n                        <td>\r\n                          {{item?.createdOn}}\r\n                        </td>\r\n                        <!-- <td>\r\n                          <mat-slide-toggle\r\n                                *ngIf=\"pagePermission?.modPrivs?.update == true\"\r\n                                class=\"example-margin\"\r\n                                (change)=\"statusChange(item.id)\"\r\n                                [checked]=\"item.isActive == true\">\r\n                          </mat-slide-toggle>\r\n                        </td> -->\r\n                        \r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_user-list_user-list_module_ts-es5.js.map