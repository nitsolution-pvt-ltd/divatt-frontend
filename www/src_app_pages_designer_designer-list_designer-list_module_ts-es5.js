(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_designer_designer-list_designer-list_module_ts"], {
    /***/
    55067:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/designer/designer-list/designer-list-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignerListPageRoutingModule": function DesignerListPageRoutingModule() {
          return (
            /* binding */
            _DesignerListPageRoutingModule
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


      var _designer_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./designer-list.page */
      94754);

      var routes = [{
        path: '',
        component: _designer_list_page__WEBPACK_IMPORTED_MODULE_0__.DesignerListPage
      }];

      var _DesignerListPageRoutingModule = function DesignerListPageRoutingModule() {
        _classCallCheck(this, DesignerListPageRoutingModule);
      };

      _DesignerListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DesignerListPageRoutingModule);
      /***/
    },

    /***/
    33986:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/designer/designer-list/designer-list.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignerListPageModule": function DesignerListPageModule() {
          return (
            /* binding */
            _DesignerListPageModule
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


      var _designer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./designer-list-routing.module */
      55067);
      /* harmony import */


      var _designer_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./designer-list.page */
      94754);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _DesignerListPageModule = function DesignerListPageModule() {
        _classCallCheck(this, DesignerListPageModule);
      };

      _DesignerListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _designer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.DesignerListPageRoutingModule],
        declarations: [_designer_list_page__WEBPACK_IMPORTED_MODULE_1__.DesignerListPage]
      })], _DesignerListPageModule);
      /***/
    },

    /***/
    94754:
    /*!********************************************************************!*\
      !*** ./src/app/pages/designer/designer-list/designer-list.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DesignerListPage": function DesignerListPage() {
          return (
            /* binding */
            _DesignerListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_designer_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./designer-list.page.html */
      76756);
      /* harmony import */


      var _designer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./designer-list.page.scss */
      22051);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../modal/modal.page */
      58167);

      var _DesignerListPage = /*#__PURE__*/function () {
        function DesignerListPage(http, toastController, modalController, alertController, commonUtils, authService, router) {
          _classCallCheck(this, DesignerListPage);

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
          this.tableHeaderData = [{
            column_name: "displayName",
            display_name: "Display Name",
            sortingButtonName: ""
          }, {
            column_name: "boutiqueName",
            display_name: "Boutique Name",
            sortingButtonName: ""
          }, {
            column_name: "designerCategory",
            display_name: "Designer Category",
            sortingButtonName: ""
          }, {
            column_name: "firstName1",
            display_name: "Designer 1",
            sortingButtonName: ""
          }, {
            column_name: "firstName2",
            display_name: "Designer 2",
            sortingButtonName: ""
          }, {
            column_name: "email",
            display_name: "Email",
            sortingButtonName: ""
          }, {
            column_name: "mobileNo",
            display_name: "Mobile No",
            sortingButtonName: ""
          }, {
            column_name: "gender",
            display_name: "Gender",
            sortingButtonName: ""
          }, {
            column_name: "dob",
            display_name: "dob",
            sortingButtonName: ""
          }];
          this.isListLoading = false;
          this.sortColumnName = "";
          this.sortOrderName = "";
          this.deleteLoading = false;
          this.restoreLoading = false;
          this.model = {}; // checkDesignerList end
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
          } // { id : '5', displayValue: '0'}
          ]; // Sorting end
          // Search start

          this.searchTerm = ""; // Select single checkbox end
          // ---------------- Click Delete Item start ---------------------

          this.deleteLodershow = false;
          this.alldeleteLoaderShow = false;
        } // Variables end


        _createClass(DesignerListPage, [{
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

            /*Check permission status start*/
            this.authService.globalparamsData.subscribe(function (res) {
              console.log('res>>', res);

              if (res.authority == 'ADMIN') {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    console.log('menu>>', data);
                    console.log('this.router.url>>', _this.router.url);

                    var pageUrl = _this.router.url.split("/");

                    console.log('pageUrl', pageUrl);

                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        if (item.modDetails.url == pageUrl[1]) {
                          if (item.modPrivs.list == true) {
                            console.log('-----Permission Granted-----');
                            _this.pagePermission = item;
                            console.log('this.pagePermission', _this.pagePermission);
                            _this.listing_url = "designer/list";

                            _this.onRefresh(); // delete api


                            _this.deleteApi = "adminMData/deleteDesignerLevels";
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

            this.getLebellist();
          }
          /*----------------Table list data start----------------*/
          // checkDesignerList start

        }, {
          key: "checkDesignerList",
          value: function checkDesignerList(_identifier) {
            this.pageNo = 0;

            if (_identifier == 'completed') {
              this.tabletitle = "Completed";
              this.showAction = "";
              this.profileStatus = "COMPLETED";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'waitForApprove') {
              this.tabletitle = "Waiting For Approve";
              this.showAction = "waitForApprove";
              this.profileStatus = "waitForApprove"; // this.profileStatus = "ACTIVE";

              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'waitForSubmit') {
              this.tabletitle = "Approved";
              this.showAction = "";
              this.profileStatus = "APPROVE";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'submitted') {
              this.tabletitle = "Submitted";
              this.showAction = "submitted";
              this.profileStatus = "SUBMITTED";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'saved') {
              this.tabletitle = "Saved";
              this.showAction = "Saved";
              this.profileStatus = "SAVED";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'rejected') {
              this.tabletitle = "rejected";
              this.showAction = "";
              this.profileStatus = "REJECTED";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'deleted') {
              this.tabletitle = "Deleted";
              this.showAction = "";
              this.profileStatus = "";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'changeRequest') {
              this.tabletitle = "Change Request";
              this.showAction = "changeRequest";
              this.profileStatus = "changeRequest";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            } else if (_identifier == 'changeRequest') {
              this.tabletitle = "Change Request";
              this.showAction = "changeRequest";
              this.profileStatus = "changeRequest";
              this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
            }
          }
        }, {
          key: "displayRecordChange",
          value: function displayRecordChange(_record) {
            console.log("_record", _record);
            this.displayRecord = _record;
            this.pageNo = 0;
            this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
          } // Display records end
          // List data start

        }, {
          key: "onListDate",
          value: function onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, filttertype, _sortOrderName, _searchTerm, _profileStatus) {
            var _this2 = this;

            this.isListLoading = true; // isDeleted=true

            var api;

            if (this.tabletitle == 'Deleted') {
              api = _listUrl + "?page=" + _pageNo + "&limit=" + _displayRecord + "&sortName=" + _sortColumnName + "&sort=" + _sortOrderName + "&keyword=" + _searchTerm + "&isDeleted=true" + "&profileStatus=" + _profileStatus;
            } else {
              api = _listUrl + "?page=" + _pageNo + "&limit=" + _displayRecord + "&sortName=" + _sortColumnName + "&sort=" + _sortOrderName + "&keyword=" + _searchTerm + "&profileStatus=" + _profileStatus;
            }

            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              _this2.isListLoading = false;
              console.log("res", res);
              _this2.tableData = res;
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
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
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
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
          }
        }, {
          key: "searchList",
          value: function searchList(event) {
            this.searchTerm = event.target.value;
            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
          } // Search end
          // Referesh start

        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.pageNo = 0;
            this.sortColumnName = "dId";
            this.sortOrderName = "DESC";
            this.searchTerm = "";
            this.tableValueType = "0";
            this.getLebellist(); // table data call

            this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.filttertype, this.sortOrderName, this.searchTerm, this.profileStatus);
          } // Referesh end
          // Delete start

        }, {
          key: "deleteData",
          value: function deleteData(_id) {
            var _this3 = this;

            console.log("id>>", _id);
            var sentValues = {
              id: _id
            };
            this.deleteLoading = true;
            this.deleteDataSubscribe = this.http.put(this.deleteApi, sentValues).subscribe(function (res) {
              _this3.deleteLoading = false; // console.log("Delete data  res >", res.return_data);

              if (res.status == 200) {
                _this3.commonUtils.presentToast("success", res.message);

                _this3.onRefresh();
              } else {
                _this3.commonUtils.presentToast("error", res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this3.commonUtils.presentToast("error", errRes.error.message);

              _this3.deleteLoading = false;
            });
          } // Delete end

          /*----------------Table list data end----------------*/
          // Delete aleart start

        }, {
          key: "presentAlert",
          value: function presentAlert(_identifier, _id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var messages, headers, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (_identifier == "delete") {
                        headers = "Delete";
                        messages = "Are you sure want to delete?";
                      }

                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: "aleart-popupBox",
                        header: headers,
                        message: messages,
                        buttons: [{
                          text: "Cancel",
                          role: "cancel",
                          cssClass: "popup-cancel-btn",
                          handler: function handler(blah) {
                            console.log("Confirm Cancel: blah");
                          }
                        }, {
                          text: "Okay",
                          cssClass: "popup-ok-btn",
                          handler: function handler() {
                            console.log("Confirm Okay"); // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);

                            // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);
                            if (_identifier == "delete") {
                              _this4.deleteData(_id);
                            }
                          }
                        }]
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Delete aleart end

        }, {
          key: "presentToast",
          value: function presentToast(_msg, _type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toastController.create({
                        message: _msg,
                        duration: 2000,
                        cssClass: "my-tost-custom-class" + _type
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "selectLabel",
          value: function selectLabel(value) {
            this.labelValue = value.Name;
            console.log("this.Lebellist", value, this.labelValue);
          } // selectLabel end

        }, {
          key: "changeStatus",
          value: function changeStatus(type, actiontype, _item) {
            var _this5 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;

            console.log("_item", _item);

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
                  isProfileSubmitted: _item.isProfileSubmitted
                };
                this.openDesignerCommentmodal('Desigerrejected_modal', formData, _items);
              } else if (type == 'approve') {
                formData = {
                  dId: _item.dId,
                  uid: _item.uid,
                  isActive: _item.isActive,
                  profileStatus: "APPROVE",
                  isDeleted: _item.isDeleted,
                  isProfileCompleted: false,
                  isProfileSubmitted: _item.isProfileSubmitted
                };
                this.openDesignerCommentmodal('DesigerApprove_modal', formData, _items); // this.changeStatusSubscribe = this.http.put("designer/update", formData).subscribe(
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
            } else if (actiontype == 'submitted' || actiontype == 'changeRequest') {
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
                  designerCategory: _item.designerProfileEntity.designerProfile.designerCategory // displayName:"Sonar Bangla",
                  // designerCategory:"Neo",

                };
                this.openDesignerCommentmodal('Desigerrejected_modal', formData, _items);
              } else if (type == 'approve') {
                formData = {
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
                        ifscCode: (_o = (_m = (_l = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _l === void 0 ? void 0 : _l.designerPersonalInfoEntity) === null || _m === void 0 ? void 0 : _m.bankDetails) === null || _o === void 0 ? void 0 : _o.ifscCode
                      },
                      designerDocuments: {
                        aadharCard: (_r = (_q = (_p = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _p === void 0 ? void 0 : _p.designerPersonalInfoEntity) === null || _q === void 0 ? void 0 : _q.designerDocuments) === null || _r === void 0 ? void 0 : _r.aadharCard,
                        panCard: (_u = (_t = (_s = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _s === void 0 ? void 0 : _s.designerPersonalInfoEntity) === null || _t === void 0 ? void 0 : _t.designerDocuments) === null || _u === void 0 ? void 0 : _u.panCard
                      }
                    },
                    designerProfile: {
                      digitalSignature: (_w = (_v = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _v === void 0 ? void 0 : _v.designerProfile) === null || _w === void 0 ? void 0 : _w.digitalSignature
                    },
                    boutiqueProfile: {
                      gstin: (_y = (_x = _item === null || _item === void 0 ? void 0 : _item.designerProfileEntity) === null || _x === void 0 ? void 0 : _x.boutiqueProfile) === null || _y === void 0 ? void 0 : _y.gstin
                    }
                  }
                }; // this.openDesignerCommentmodal('DesigerApprove_modal', formData, _items);

                this.changeStatusSubscribe = this.http.put("designer/update", formData).subscribe(function (res) {
                  _this5.commonUtils.presentToast("success", res.message); // this.getcategoryList();


                  _this5.onListDate(_this5.listing_url, _this5.pageNo, _this5.displayRecord, _this5.sortColumnName, _this5.filttertype, _this5.sortOrderName, _this5.searchTerm, _this5.profileStatus);
                }, function (error) {
                  _this5.commonUtils.presentToast("error", error.error.message);
                });
              }
            }

            console.log('_item', _item);
          } // select all check box start

        }, {
          key: "openProductCommentmodal",
          value: function openProductCommentmodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var profile_modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('openProductCommentmodal ...........>>', _identifier);
                      _context3.next = 3;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                        cssClass: 'mymodalClass small openProductComment',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 3:
                      profile_modal = _context3.sent;
                      // modal data back to Component
                      profile_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        _this6.onListDate(_this6.listing_url, _this6.pageNo, _this6.displayRecord, _this6.sortColumnName, _this6.filttertype, _this6.sortOrderName, _this6.searchTerm, _this6.profileStatus);

                        if (getdata.data == 'submitClose') {}
                      });
                      _context3.next = 7;
                      return profile_modal.present();

                    case 7:
                      return _context3.abrupt("return", _context3.sent);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // openRejectemodal start

        }, {
          key: "allSelectItem",
          value: function allSelectItem(event) {
            if (event.target.checked) {
              this.itemcheckClick = false; // console.log('check item selkectedddddddddddddd');

              for (var i = 0; i < this.tableListData.length; i++) {
                // if(this.checkedList.includes(this.items[i].id) === false)
                if (this.checkedList.indexOf(this.tableListData[i]) === -1 && this.tableListData[i] !== null) {
                  this.checkedList.push(this.tableListData[i]);
                  this.tableListData[i].isSelected = true;
                }
              }
            } else if (this.itemcheckClick == false) {
              // console.log('not check item selectionnnnnnnnnnn')
              this.checkedList = [];

              for (var _i = 0; _i < this.tableListData.length; _i++) {
                if (this.checkedList.indexOf(this.tableListData[_i]) === -1) {
                  this.tableListData[_i].isSelected = false;
                }
              }
            }

            console.log("checked item all @@ >>", this.checkedList);
            console.log("tableListData item all @@ >>", this.tableListData);
          } // Select all checkbox end
          // Select single checkbox start

        }, {
          key: "onCheckboxSelect",
          value: function onCheckboxSelect(option, event) {
            if (event.target.checked) {
              if (this.checkedList.indexOf(option) === -1) {
                this.checkedList.push(option);
              }
            } else {
              for (var i = 0; i < this.tableListData.length; i++) {
                if (this.checkedList[i] == option) {
                  this.checkedList.splice(i, 1);
                }
              }
            }

            if (this.tableListData.length <= this.checkedList.length) {
              this.allselectModel = true;
              console.log("length 4");
            } else {
              console.log("length 0");
              this.allselectModel = false;
              this.itemcheckClick = true;
            }

            console.log("checked item single >>", this.checkedList);
          }
        }, {
          key: "onClickDeleteItem",
          value: function onClickDeleteItem(_identifire, _item, _items, _index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: "aleart-popupBox",
                        header: "Delete",
                        message: "Do you really want to delete?",
                        buttons: [{
                          text: "Cancel",
                          role: "cancel",
                          cssClass: "popup-cancel-btn",
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: "Ok",
                          cssClass: "popup-ok-btn",
                          handler: function handler() {
                            var _a, _b, _c, _d; // ------------ single item delete start ------------


                            // ------------ single item delete start ------------
                            if (_identifire == "single") {
                              console.log("_item", _item);
                              var formData;
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
                                isProfileSubmitted: _item.isProfileSubmitted
                              };
                              _this7.changeStatusSubscribe = _this7.http.put("designer/designerProfileDelete?designerEmail=" + _item.email, '').subscribe(function (res) {
                                _this7.commonUtils.presentToast("success", res.message);

                                _this7.model = {};

                                _this7.getLebellist();

                                _this7.onListDate(_this7.listing_url, _this7.pageNo, _this7.displayRecord, _this7.sortColumnName, _this7.filttertype, _this7.sortOrderName, _this7.searchTerm, _this7.profileStatus);
                              }, function (error) {
                                _this7.commonUtils.presentToast("error", error.error.message);
                              }); // ------------ single item delete end ------------
                            } else {
                              var checkItemIdArray = [];

                              if (_this7.checkedList) {
                                _this7.checkedList.forEach(function (element) {
                                  checkItemIdArray.push(element.id);
                                });
                              }

                              if (_items) {
                                _items.forEach(function (element) {
                                  _this7.checkedList.forEach(function (element1) {
                                    if (element.id == element1.id) {
                                      element.deleteLodershow = true; //loader show

                                      //loader show
                                      _this7.alldeleteLoaderShow = true;
                                    }
                                  });
                                });
                              }

                              _this7.deleteDataSubscribe = _this7.http.put("category/muldelete", checkItemIdArray).subscribe(function (res) {
                                if (res.status == 200) {
                                  if (_items) {
                                    for (var i = 0; i < _items.length; i++) {
                                      for (var j = 0; j < _this7.checkedList.length; j++) {
                                        if (_items[i].id == _this7.checkedList[j].id) {
                                          // _items.splice(i, i);
                                          _this7.checkedList = []; // _items.splice(_items.indexOf(_items[i]), 1);

                                          // _items.splice(_items.indexOf(_items[i]), 1);
                                          _this7.deleteLodershow = false; //loader hide

                                          //loader hide
                                          _this7.alldeleteLoaderShow = false; // console.log('delete items >>', _items);
                                          // console.log('delete this.checkedList >>', this.checkedList);

                                          // console.log('delete items >>', _items);
                                          // console.log('delete this.checkedList >>', this.checkedList);
                                          _this7.allselectModel = false;
                                        }
                                      }
                                    }

                                    if (_items.length == 0) {
                                      _this7.allselectModel = false;
                                      _this7.checkedList = [];
                                      checkItemIdArray = [];
                                    }
                                  }

                                  _this7.commonUtils.presentToast("success", res.message);

                                  _this7.onRefresh();
                                } else {
                                  _this7.commonUtils.presentToast("error", res.message);
                                }
                              }, function (errRes) {
                                _this7.deleteLodershow = false; //loader hide

                                //loader hide
                                _this7.commonUtils.presentToast("error", errRes.error.message);

                                _this7.alldeleteLoaderShow = false;

                                _items.forEach(function (element) {
                                  _this7.checkedList.forEach(function (element1) {
                                    if (element.id == element1.id) {
                                      element.deleteLodershow = false;
                                      _this7.alldeleteLoaderShow = false;
                                    }
                                  });
                                });
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // Click Delete Item end

        }, {
          key: "openDesignerCommentmodal",
          value: function openDesignerCommentmodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var profile_modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log('openDesignerCommentmodal ...........>>', _identifier);
                      _context5.next = 3;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                        cssClass: 'mymodalClass small openProductComment',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 3:
                      profile_modal = _context5.sent;
                      // modal data back to Component
                      profile_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        _this8.onListDate(_this8.listing_url, _this8.pageNo, _this8.displayRecord, _this8.sortColumnName, _this8.filttertype, _this8.sortOrderName, _this8.searchTerm, _this8.profileStatus);

                        if (getdata.data == 'submitClose') {}
                      });
                      _context5.next = 7;
                      return profile_modal.present();

                    case 7:
                      return _context5.abrupt("return", _context5.sent);

                    case 8:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // openRejectemodal start
          // openRejectemodal start

        }, {
          key: "openRejectemodal",
          value: function openRejectemodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var profile_modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log('openRejectemodal ...........>>', _identifier, _item);
                      _context6.next = 3;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_4__.ModalPage,
                        cssClass: 'mymodalClass small rejectemodal',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 3:
                      profile_modal = _context6.sent;
                      // modal data back to Component
                      profile_modal.onDidDismiss().then(function (getdata) {
                        console.log('getdata >>>>>>>>>>>', getdata);

                        if (getdata.data == 'submitClose') {}
                      });
                      _context6.next = 7;
                      return profile_modal.present();

                    case 7:
                      return _context6.abrupt("return", _context6.sent);

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // openRejectemodal end
          // getLebellist start

        }, {
          key: "getLebellist",
          value: function getLebellist() {
            var _this9 = this;

            this.LebellistDataSubcribe = this.http.get("adminMData/getDesignerCategory").subscribe(function (res) {
              _this9.Lebellist = res.data;
            }, function (error) {
              console.log(error);

              _this9.commonUtils.presentToast('error', error.error.message);
            });
          } // getLebellist end
          // ----------- destroy unsubscription start ---------

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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
        }]);

        return DesignerListPage;
      }();

      _DesignerListPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_3__.CommonUtils
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _DesignerListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-designer-list",
        template: _raw_loader_designer_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_designer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DesignerListPage);
      /***/
    },

    /***/
    22051:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/designer/designer-list/designer-list.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table-responsive {\n  overflow: visible;\n  overflow-x: auto;\n}\n\n.table-overflow {\n  max-width: 20em;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbmVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBRUksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6ImRlc2lnbmVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4udGFibGUtb3ZlcmZsb3dcclxue1xyXG4gICAgbWF4LXdpZHRoOiAyMGVtO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    76756:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/designer/designer-list/designer-list.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"designer-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>{{tabletitle}} Designer List\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a></li>\r\n                        <li class=\"breadcrumb-item\" >\r\n                          Designer Management\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Designer List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"note-section\">\r\n          <div class=\"col-md-10 m-auto\">\r\n            <div class=\"row\">\r\n              <!-- Waiting for approval -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4\">\r\n                <div class=\"note-item note-item2 note-box-warning card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('waitForApprove')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>schedule</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Waiting for login approval</p>\r\n                        <p><b>{{tableData?.waitingForApproval}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Approved -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4\">\r\n                <div class=\"note-item note-item2 note-box-success card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('waitForSubmit')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>verified</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Approved</p>\r\n                        <p><b>{{tableData?.waitingForSubmit}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>   \r\n              </div>\r\n              <!-- Submitted -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4\">\r\n                <div class=\"note-item note-item2 note-box-teal card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('submitted')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>grading</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Profile Submitted</p>\r\n                        <p><b>{{tableData?.submitted}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>   \r\n              </div> \r\n              <!-- saved -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-Purple card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('saved')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>save</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Profile Saved</p>\r\n                        <p><b>{{tableData?.saved}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>   \r\n              </div>\r\n              <!-- Completed -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-primary card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('completed')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>check</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Profile Completed</p>\r\n                        <p><b>{{tableData?.completed}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>       \r\n              </div>\r\n              <!-- Rejected -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('rejected')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>close</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Rejected</p>\r\n                        <p><b>{{tableData?.rejected}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Change Request -->\r\n              <!-- <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-primary card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('changeRequest')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>change_circle</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Change Request</p>\r\n                        <p><b>{{tableData?.changeRequest}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              <!-- Deleted -->\r\n              <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"checkDesignerList('deleted')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>delete</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Deleted</p>\r\n                        <p><b>{{tableData?.deleted}}</b> Designers</p>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n                {{tabletitle}} Designer List\r\n            </div>\r\n            <div class=\"card-header-action\">\r\n              <ion-button class=\"custom-btn\" [routerLink]=\"['/', 'designer-level']\">\r\n                Add Designer Lebel\r\n              </ion-button>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                  <ion-item class=\"record\">\r\n                    <span class=\"text-black mr-1\">Records: </span>\r\n                    <mat-form-field  class=\"m-0\">\r\n                      <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                        <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                          <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                          <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search email ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"ion-text-start\">\r\n                                <div>\r\n                                    #\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                unique id\r\n                              </div>\r\n                            </th>\r\n                            <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Profile\r\n                              </div>\r\n                            </th>\r\n                            <!-- <th class=\"ion-text-start\">\r\n                              <div>\r\n                                <ion-checkbox color=\"primary\" name=\"select_all_item\" [(ngModel)]=\"allselectModel\" (ionChange)=\"allSelectItem($event)\"></ion-checkbox>\r\n                              </div>\r\n                            </th> -->\r\n                            <th *ngFor=\"let th of tableHeaderData\" (click)=\"isSortTableHeader(tableHeaderData, th)\" class=\"ion-text-center\">\r\n                              <div>\r\n                                {{th.display_name}}\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                                <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                              </div>\r\n                            </th>\r\n                            <!-- *ngIf=\"tabletitle =='Submitted'\" -->\r\n                            <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Actions\r\n                              </div>\r\n                            </th>\r\n                            <!-- <th class=\"ion-text-center\"  *ngIf=\"tabletitle !='Waiting For Approve' && tabletitle !='Saved' && tabletitle !='Change Request' && tabletitle !='Deleted'\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                More\r\n                              </div>\r\n                            </th> -->\r\n                            <!-- <th class=\"ion-text-center\">\r\n                              <div class=\"ion-justify-content-center\">\r\n                                Actions\r\n                              </div>\r\n                            </th> -->\r\n                        </tr> \r\n                    </thead>\r\n                    <tbody>\r\n                      <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          Data is loading...\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                        <td colspan=\"100\" class=\"text-center\">\r\n                          No data found\r\n                        </td>\r\n                      </tr>\r\n                      <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\" class=\"cursor-pointer\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{item?.uid}}</td>\r\n                        <!-- <td>\r\n                            <ion-checkbox  name=\"checkbox_name\" [(ngModel)]=\"item.isSelected\" (ionChange)=\"onCheckboxSelect(item, $event)\" color=\"primary\"></ion-checkbox>\r\n                    \r\n                        </td> -->\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          <div class=\"text-center\">\r\n                            <img [src]=\"item?.designerProfileEntity?.designerProfile?.profilePic!= null ? item?.designerProfileEntity?.designerProfile?.profilePic : 'assets/images/noimage.jpg'\" class=\"tableimg\">\r\n                          </div>\r\n\r\n                        </td> \r\n                        <td class=\"table-overflow\" [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.displayName ? item?.designerProfileEntity?.designerProfile?.displayName : 'N/A'}}\r\n                        </td>\r\n                        <td class=\"table-overflow\" [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.boutiqueProfile?.boutiqueName}}\r\n                        </td> \r\n                        <td class=\"table-overflow\" [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.designerCategory}}\r\n                        </td> \r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.firstName1}}&nbsp;\r\n                          {{item?.designerProfileEntity?.designerProfile?.lastName1}}\r\n                        </td>\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\" >\r\n                          {{item?.designerProfileEntity?.designerProfile?.firstName2}}&nbsp;\r\n                          {{item?.designerProfileEntity?.designerProfile?.lastName2}}\r\n                        </td>\r\n                        <!-- <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.boutiqueProfile?.firmName}}\r\n                        </td> -->\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.email}}\r\n                        </td>\r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.designerProfile?.mobileNo}}\r\n                        </td> \r\n                        <td class=\"text-capitalize\" [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.designerProfile?.gender}}\r\n                        </td> \r\n                        <td [routerLink]=\"['/', 'designer-view', item.dId]\">\r\n                          {{item?.designerProfileEntity?.designerProfile?.dob}}\r\n                        </td>\r\n                        \r\n                        <td class=\"action text-center pt-0\" >\r\n                          <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"\" *ngIf=\"pagePermission?.modPrivs?.update == true && showAction!='Saved' && showAction\" >\r\n                            <ion-fab-button color=\"dark\" >\r\n                              <ion-icon color=\"warning\" *ngIf=\"item.profileStatus == 'waitForApprove' || item.profileStatus == 'COMPLETED' || item.profileStatus == 'SAVED'\" tooltip=\"Pending\" flow=\"up\" delay=\"500\" name=\"time-outline\" ></ion-icon>\r\n                              <ion-icon color=\"warning\" *ngIf=\"item.profileStatus == 'SUBMITTED'\" tooltip=\"Pending\" flow=\"up\" delay=\"500\" name=\"time-outline\" ></ion-icon>\r\n                              <ion-icon color=\"danger\" *ngIf=\"item.profileStatus == 'REJECTED'\" tooltip=\"Rejected\" flow=\"up\" delay=\"500\" name=\"close-circle-outline\"></ion-icon>\r\n                              <!-- <ion-icon  color=\"success\" tooltip=\"Approved\" flow=\"up\" delay=\"500\" name=\"checkmark-circle-outline\"></ion-icon> -->\r\n                            </ion-fab-button>\r\n                            <ion-fab-list side=\"start\">\r\n                              <ion-fab-button color=\"danger\" tooltip=\"Reject Product\" flow=\"up\" delay=\"500\"  (click)=\"changeStatus('reject',showAction,item)\" >\r\n                                <ion-icon name=\"close-circle-outline\" color=\"dark\"></ion-icon>\r\n                              </ion-fab-button>\r\n                              <ion-fab-button color=\"success\" tooltip=\"Approve Product\" flow=\"up\" delay=\"500\" (click)=\"changeStatus('approve',showAction,item)\">\r\n                                <ion-icon name=\"checkmark-circle-outline\" color=\"dark\"></ion-icon>\r\n                              </ion-fab-button>\r\n                            </ion-fab-list>\r\n                          </ion-fab>\r\n                          <ion-button  matTooltip=\"View message\" *ngIf=\"tabletitle !='Waiting For Approve' && tabletitle !='Saved' && tabletitle !='Change Request' && tabletitle !='Deleted' && tabletitle== 'rejected'\"  matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"openRejectemodal('rejectmessage_modal', item.adminComment, '');\">\r\n                            <mat-icon>chat</mat-icon>\r\n                          </ion-button>\r\n                          <ion-button  matTooltip=\"Delete\" [ngClass]=\"{'d-none':tabletitle =='Waiting For Approve' || tabletitle =='Deleted' }\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"onClickDeleteItem('single', item, '','');\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </ion-button>\r\n                          <!-- <ion-button  matTooltip=\"Delete\" [ngClass]=\"{'d-none':tabletitle =='Waiting For Approve' || tabletitle =='Deleted'}\" *ngIf=\"tabletitle !='Submitted'\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"onClickDeleteItem('single', item, '','');\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </ion-button> -->\r\n                        </td>\r\n                        <!-- <td class=\"action\" *ngIf=\"tabletitle !='Waiting For Approve' && tabletitle !='Saved' && tabletitle !='Change Request' && tabletitle !='Deleted'\">\r\n                          <ion-button  matTooltip=\"View message\" *ngIf=\"tabletitle== 'rejected'\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"openRejectemodal('rejectmessage_modal', item.adminComment, '');\">\r\n                            <mat-icon>chat</mat-icon>\r\n                          </ion-button>\r\n                          <ion-button  matTooltip=\"Delete\" [ngClass]=\"{'d-none':tabletitle =='Waiting For Approve' || tabletitle =='Deleted' }\" matTooltipPosition=\"above\" size=\"small\" color=\"danger\" (click)=\"onClickDeleteItem('single', item, '','');\">\r\n                            <mat-icon>delete</mat-icon>\r\n                          </ion-button>\r\n                        </td> -->\r\n                      </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_designer_designer-list_designer-list_module_ts-es5.js.map