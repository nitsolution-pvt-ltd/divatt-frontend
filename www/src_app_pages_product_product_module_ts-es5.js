(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_product_product_module_ts"], {
    /***/
    84577:
    /*!*********************************************************!*\
      !*** ./src/app/pages/product/product-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductPageRoutingModule": function ProductPageRoutingModule() {
          return (
            /* binding */
            _ProductPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/auth/auth.guard */
      26525);
      /* harmony import */


      var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.page */
      22102);

      var routes = [{
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_1__.ProductPage,
        canLoad: [src_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
      } // {
      //   path: 'category',
      //   loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule),
      //   canLoad:[AuthGuard]
      // },
      // {
      //   path: 'subcategory',
      //   loadChildren: () => import('./subcategory/subcategory.module').then( m => m.SubcategoryPageModule)
      // },
      // {
      //   path: 'add-category/:action/:id',
      //   loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
      // },
      // {
      //   path: 'add-subcategory/:action/:id',
      //   loadChildren: () => import('./add-subcategory/add-subcategory.module').then( m => m.AddSubcategoryPageModule)
      // },
      // {
      //   path: 'add-product/:action/:id',
      //   loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
      // },
      // {
      //   path: 'add-color/:action/:id',
      //   loadChildren: () => import('./add-color/add-color.module').then( m => m.AddColorPageModule)
      // },
      // {
      //   path: 'color',
      //   loadChildren: () => import('./color/color.module').then( m => m.ColorPageModule)
      // },
      ];

      var _ProductPageRoutingModule = function ProductPageRoutingModule() {
        _classCallCheck(this, ProductPageRoutingModule);
      };

      _ProductPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _ProductPageRoutingModule);
      /***/
    },

    /***/
    85888:
    /*!*************************************************!*\
      !*** ./src/app/pages/product/product.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductPageModule": function ProductPageModule() {
          return (
            /* binding */
            _ProductPageModule
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


      var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-routing.module */
      84577);
      /* harmony import */


      var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.page */
      22102);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _ProductPageModule = function ProductPageModule() {
        _classCallCheck(this, ProductPageModule);
      };

      _ProductPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPageRoutingModule],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_1__.ProductPage]
      })], _ProductPageModule);
      /***/
    },

    /***/
    22102:
    /*!***********************************************!*\
      !*** ./src/app/pages/product/product.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductPage": function ProductPage() {
          return (
            /* binding */
            _ProductPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product.page.html */
      98090);
      /* harmony import */


      var _product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.page.scss */
      7558);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../modal/modal.page */
      58167);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

      var _ProductPage = /*#__PURE__*/function () {
        function ProductPage(http, toastController, modalController, alertController, commonUtils, authService, router, storage) {
          _classCallCheck(this, ProductPage);

          this.http = http;
          this.toastController = toastController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.commonUtils = commonUtils;
          this.authService = authService;
          this.router = router;
          this.storage = storage;
          this.tableListData = [];
          this.itemcheckClick = false;
          this.checkedList = [];
          this.statustype = 'all';
          this.tableTitle = 'All';
          this.tableHeaderData1 = [{
            column_name: "productName",
            display_name: "Product Name",
            sortingButtonName: ""
          }, {
            column_name: "categoryName",
            display_name: "Category",
            sortingButtonName: ""
          }, {
            column_name: "subCategoryName",
            display_name: "SubCategory",
            sortingButtonName: ""
          }, {
            column_name: "displayName",
            display_name: "Display Name",
            sortingButtonName: ""
          }, {
            column_name: "designerCategory",
            display_name: "Designer Category",
            sortingButtonName: ""
          } // ,{
          //   column_name: "gender",
          //   display_name: "Gender",
          //   sortingButtonName: ""
          // }
          // ,
          // {
          //   column_name: "age",
          //   display_name: "Age",
          //   sortingButtonName: ""
          // }
          // ,{
          //   column_name: "priceType",
          //   display_name: "Price Type",
          //   sortingButtonName: ""
          // },
          // {
          //   column_name: "designerId",
          //   display_name: "Designer Id",
          //   sortingButtonName: ""
          // },
          // {
          //   column_name: "taxPercentage",
          //   display_name: "Tax Percentage",
          //   sortingButtonName: ""
          // }
          , {
            column_name: "price",
            display_name: "Indian MRP(₹)",
            sortingButtonName: ""
          }, {
            column_name: "salePrice",
            display_name: "Sale Price",
            sortingButtonName: ""
          }, {
            column_name: "purchaseMax",
            display_name: "Stock",
            sortingButtonName: ""
          }];
          this.tableHeaderData = [{
            column_name: "productName",
            display_name: "Product Name",
            sortingButtonName: ""
          }, {
            column_name: "productDescription",
            display_name: "Product Description",
            sortingButtonName: ""
          }, {
            column_name: "gender",
            display_name: "Gender",
            sortingButtonName: ""
          }, {
            column_name: "age",
            display_name: "Age",
            sortingButtonName: ""
          } // ,{
          //   column_name: "priceType",
          //   display_name: "Price Type",
          //   sortingButtonName: ""
          // },
          // {
          //   column_name: "designerId",
          //   display_name: "Designer Id",
          //   sortingButtonName: ""
          // },
          // {
          //   column_name: "taxPercentage",
          //   display_name: "Tax Percentage",
          //   sortingButtonName: ""
          // }
          , {
            column_name: "price",
            display_name: "Indian MRP(₹)",
            sortingButtonName: ""
          }, {
            column_name: "price",
            display_name: "US MRP($)",
            sortingButtonName: ""
          }, {
            column_name: "purchaseMax",
            display_name: "Stock",
            sortingButtonName: ""
          }]; // Variables start

          this.isListLoading = false;
          this.sortColumnName = '';
          this.sortOrderName = '';
          this.deleteLoading = false;
          this.restoreLoading = false; // approveProduct end

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
          } // { id : '5', displayValue: '0'}
          ]; // Sorting end
          // Search start

          this.searchTerm = ''; // Select single checkbox end
          // ---------------- Click Delete Item start ---------------------
          // deleteLodershow = false; 

          this.alldeleteLoaderShow = false;
        } // Variables end


        _createClass(ProductPage, [{
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

            var currentDate = Date.now();
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_5__(currentDate).format('YYYY/MM/DD');
            /*Check permission status start*/

            this.authService.globalparamsData.subscribe(function (res) {
              // console.log('res>>', res);
              if (res.authority == 'ADMIN') {
                _this.permissionDataSubscribe = _this.commonUtils.menuPermissionObservable.subscribe(function (data) {
                  if (data) {
                    // console.log('menu>>', data);
                    // console.log('this.router.url>>', this.router.url);
                    var pageUrl = _this.router.url.split("/"); // console.log('pageUrl', pageUrl);


                    var _iterator = _createForOfIteratorHelper(data),
                        _step;

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        if (item.modDetails.url == pageUrl[1]) {
                          if (item.modPrivs.list == true) {
                            // console.log('-----Permission Granted-----');
                            _this.pagePermission = item; // console.log('this.pagePermission', this.pagePermission);

                            break;
                          } else {
                            // console.log('-------No Permission--------');
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
              } else if (res.authority == 'DESIGNER') {
                // console.log("res.authority",res.authority);
                _this.getDesignerProfiledata(res.uid);
              }
            });
            /*Check permission status end*/
            // delete api

            this.deleteApi = 'category/delete';
            this.storage.get('setStroageGlobalParamsData').then(function (val) {
              // console.log('User ID', val.uid);
              _this.role = val.authority;
              _this.designerId = val.uid; // console.log("Role",this.role);

              _this.setApis(_this.role, _this.designerId);
            }); // console.log("this.listing_url",this.listing_url);
          } // getDesignerProfiledata for check perpession start

        }, {
          key: "getDesignerProfiledata",
          value: function getDesignerProfiledata(uid) {
            var _this2 = this;

            this.http.get("designer/" + uid).subscribe(function (res) {
              _this2.designerprofiledata = res;

              if (res.profileStatus == 'COMPLETED') {} else {
                var pageUrl = _this2.router.url.split("/"); // console.log('pageUrl', pageUrl[1]);


                if (pageUrl[1] == 'product-list') {
                  _this2.commonUtils.presentToast('error', "Sorry ! You don't have any permission on product.");

                  _this2.router.navigateByUrl('/error');
                }
              }
            }, function (error) {// console.log("error",error);
            });
          } // getDesignerProfiledata for check perpession  end

        }, {
          key: "setApis",
          value: function setApis(role, designerid) {
            if (role == 'DESIGNER') {
              this.listing_url = 'designerProduct/designerProductList/' + designerid;
              this.tableTitle = 'Designer';
            } else {
              this.listing_url = 'designerProducts/getProductDetailsallStatus'; // this.listing_url = 'designerProduct/listPerStatus';
            }

            this.onRefresh();
          } // datatype start

        }, {
          key: "datatype",
          value: function datatype(identifier) {
            // console.log(identifier);
            this.statustype = identifier;
            this.tableTitle = identifier; // if(identifier == 0)
            // {
            //   this.statustype = 'all'
            //   this.tableTitle ='All';
            // }else if(identifier == 1)
            // {
            //   this.statustype = 'pending'
            //   this.tableTitle ='Pending';
            // }else if(identifier == 2)
            // {
            //   this.statustype = 'approved'
            //   this.tableTitle ='Approved';
            // }else if(identifier == 3)
            // {
            //   this.statustype = 'rejected'
            //   this.tableTitle ='Rejected';
            // }

            this.onRefresh(); // this.onListDate(this.statustype,this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // datatype end
          // changeStatus start

        }, {
          key: "changeStatus",
          value: function changeStatus(identifier, item) {
            var _this3 = this;

            this.approvalApi = 'product/changeProductApprovalStatus'; // console.log("identifier,id",identifier,item);

            if (identifier == 'reject') {
              var _items;

              var data = {
                item: item,
                type: 'Rejected'
              };
              this.openProductCommentmodal('productapprove_modal', data, _items);
            } else if (identifier == 'approve') {
              var data = {
                item: item,
                type: 'Approved'
              };
              data = item.productStageDetails.comment;
              var body = [];
              body = item.productStageDetails.comment; // // console.log(this.get_item,this.get_item.item.comments.length);
              // if no comment

              if (item.productStageDetails.comment == null) {
                this.storage.get('setStroageGlobalParamsData').then(function (val) {
                  // console.log('All User Data', val.uid);
                  _this3.role = val.authority;
                  body = [{
                    Reason: 'Approved',
                    comments: '',
                    adminId: val.uid,
                    dateTime: _this3.currentDate
                  }];
                });
              } // // if comment have
              else {
                this.storage.get('setStroageGlobalParamsData').then(function (val) {
                  // console.log('All User Data', val.uid);
                  _this3.role = val.authority;
                  body.push({
                    Reason: 'Approved',
                    comments: '',
                    adminId: val.uid,
                    dateTime: _this3.currentDate
                  });
                });
              }

              this.storage.get('setStroageGlobalParamsData').then(function (val) {
                // console.log('All User Data', val.uid);
                _this3.role = val.authority;
                var comment = {
                  adminStatus: "Approved",
                  approvedBy: val.uid,
                  comments: data,
                  productId: item.productId,
                  designerId: item.designerId
                }; // console.log("comment",comment);

                _this3.approveProductSubscribe = _this3.http.put('product/changeProductApprovalStatus', comment).subscribe(function (res) {
                  _this3.onRefresh();

                  _this3.commonUtils.presentToast('success', res.message);
                }, function (error) {
                  // console.log("errorerror",error);
                  _this3.commonUtils.presentToast('error', error.error.message);
                });
              }); // this.onapproveProduct(data)
              // this.openProductCommentmodal('productapprove_modal', data, _items);
            }
          } // changeStatus end
          // approveProduct start

        }, {
          key: "onapproveProduct",
          value: function onapproveProduct(data) {
            var _this4 = this;

            // console.log(data);
            this.storage.get('setStroageGlobalParamsData').then(function (val) {
              // console.log('All User Data', val.uid);
              _this4.role = val.authority;
              var alldata = [{
                Reason: data.type,
                adminId: val.uid,
                dateTime: _this4.currentDate,
                comments: data.item.comments[0].comments
              }];
              var approvedata = {
                adminStatus: data.type,
                approvedBy: val.uid,
                comments: alldata,
                productId: data.item.productId,
                designerId: data.item.designerId
              };
              _this4.approveProductSubscribe = _this4.http.put('product/changeProductApprovalStatus', approvedata).subscribe(function (res) {
                _this4.commonUtils.presentToast('success', res.message); // this.btnloader = false;


                _this4.onRefresh();
              }, function (error) {
                // console.log("errorerror",error);
                //  this.btnloader = false;
                _this4.commonUtils.presentToast('error', error.error.message);
              });
            });
          }
        }, {
          key: "displayRecordChange",
          value: function displayRecordChange(_record) {
            // console.log('_record Apurba....', _record);
            this.displayRecord = _record;
            this.pageNo = 0;
            this.onListDate(this.statustype, this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Display records end
          // List data start

        }, {
          key: "onListDate",
          value: function onListDate(status, _listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
            var _this5 = this;

            this.isListLoading = true;

            if (this.role == 'DESIGNER') {
              var api = _listUrl + '?page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm; // var api = _listUrl+'?status='+status+'&page='+_pageNo+'&limit='+_displayRecord+'&sortName='+_sortColumnName+'&sort='+_sortOrderName+'&keyword='+_searchTerm;
            } else if (this.role == 'ADMIN') {
              api = _listUrl + '?adminStatus=' + status + '&page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm;
            }

            this.tableListSubscribe = this.http.get(api).subscribe(function (res) {
              _this5.isListLoading = false; // console.log('res', res);

              _this5.tableData = res;
              _this5.tableListData = res.data;

              if (_this5.tableListData.length != 0) {
                _this5.alldelbtn = false;
              }

              if (_this5.role == 'DESIGNER') {
                _this5.alldelbtn = false;
              } //---------  check item show start ----------


              if (_this5.tableListData && _this5.checkedList) {
                for (var i = 0; i < _this5.tableListData.length; i++) {
                  for (var j = 0; j < _this5.checkedList.length; j++) {
                    if (_this5.checkedList[j].id == _this5.tableListData[i].id) {
                      _this5.tableListData[i].isSelected = true;
                    }
                  }
                }
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this5.isListLoading = false;
            });
          } // List data end
          // Pagination start

        }, {
          key: "setPage",
          value: function setPage(page) {
            // console.log('page', page);
            // console.log("page");
            this.pageNo = page;
            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Pagination end
          // Sorting start

        }, {
          key: "isSortTableHeader",
          value: function isSortTableHeader(_tableHeaderData, _headerItem) {
            // console.log('_tableHeaderData', _tableHeaderData);
            // console.log('_headerItem', _headerItem);
            // all field reset first
            _tableHeaderData.forEach(function (val) {
              val.sortingButtonName = '';
            });

            _headerItem.orederShow = !_headerItem.orederShow;

            if (_headerItem.orederShow) {
              _headerItem.sortingButtonName = "ASC";
            } else {
              _headerItem.sortingButtonName = "DESC";
            }

            this.sortColumnName = _headerItem.column_name;
            this.sortOrderName = _headerItem.sortingButtonName; // console.log('this.sortColumnName', this.sortColumnName);
            // console.log('this.sortOrderName', this.sortOrderName);
            // console.log('_tableHeaderData>>', _tableHeaderData);

            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          }
        }, {
          key: "searchList",
          value: function searchList(event) {
            this.searchTerm = event.target.value; // console.log('this.searchTerm', this.searchTerm);

            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Search end
          // Referesh start

        }, {
          key: "onRefresh",
          value: function onRefresh() {
            this.pageNo = 0;
            this.sortColumnName = 'productId';
            this.sortOrderName = 'DESC';
            this.searchTerm = '';
            this.tableValueType = '0'; // table data call

            this.onListDate(this.statustype, this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
          } // Referesh end
          // Delete start

        }, {
          key: "deleteData",
          value: function deleteData(_id) {
            var _this6 = this;

            // console.log('id>>', _id);
            var sentValues = {
              'id': _id
            };
            this.deleteLoading = true;
            this.deleteDataSubscribe = this.http.put(this.deleteApi, sentValues).subscribe(function (res) {
              _this6.deleteLoading = false; // console.log("Edit data  res >", res.return_data);

              if (res.status == 200) {
                _this6.commonUtils.presentToast('success', res.message);

                _this6.onRefresh();
              } else {
                _this6.commonUtils.presentToast('error', res.message);
              }
            }, function (errRes) {
              // this.selectLoadingDepend = false;
              _this6.deleteLoading = false;
            });
          } // Delete end

          /*----------------Table list data end----------------*/
          // Delete aleart start

        }, {
          key: "presentAlert",
          value: function presentAlert(_identifier, _id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var messages, headers, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (_identifier == 'delete') {
                        headers = "Delete";
                        messages = "Are you sure want to delete this product?";
                      }

                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: 'aleart-popupBox',
                        header: headers,
                        message: messages,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'popup-cancel-btn',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          cssClass: 'popup-ok-btn',
                          handler: function handler() {
                            // console.log('Confirm Okay');
                            // this.clickActionBtn('', 'delete');
                            // this.deleteData(_id);
                            if (_identifier == 'delete') {
                              _this7.deleteData(_id);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
          } // statusChange(productid)
          // {    
          //   var data = {
          //     productid:productid,
          //     designerid:1
          //   }
          //   this.openProductCommentmodal('productapprove_modal',data,'')
          // }
          // select all check box start

        }, {
          key: "statusChange",
          value: function statusChange(productid) {
            var _this8 = this;

            this.changeStatusSubscribe = this.http.put('designerProduct/status/' + productid, '').subscribe(function (res) {
              _this8.commonUtils.presentToast('success', res.message); // this.getcategoryList();


              _this8.onListDate(_this8.statustype, _this8.listing_url, _this8.pageNo, _this8.displayRecord, _this8.sortColumnName, _this8.sortOrderName, _this8.searchTerm);
            }, function (error) {
              _this8.onListDate(_this8.statustype, _this8.listing_url, _this8.pageNo, _this8.displayRecord, _this8.sortColumnName, _this8.sortOrderName, _this8.searchTerm);

              _this8.commonUtils.presentToast('error', error.error.message);
            });
          }
        }, {
          key: "allSelectItem",
          value: function allSelectItem(event) {
            if (event.target.checked) {
              this.itemcheckClick = false; // // console.log('check item selkectedddddddddddddd');

              for (var i = 0; i < this.tableListData.length; i++) {
                // if(this.checkedList.includes(this.items[i].id) === false)
                if (this.checkedList.indexOf(this.tableListData[i]) === -1 && this.tableListData[i] !== null) {
                  this.checkedList.push(this.tableListData[i]);
                  this.tableListData[i].isSelected = true;
                }
              }
            } else if (this.itemcheckClick == false) {
              // // console.log('not check item selectionnnnnnnnnnn')
              this.checkedList = [];

              for (var _i = 0; _i < this.tableListData.length; _i++) {
                if (this.checkedList.indexOf(this.tableListData[_i]) === -1) {
                  this.tableListData[_i].isSelected = false;
                }
              }
            } // console.log('checked item all @@ >>', this.checkedList);
            // console.log('tableListData item all @@ >>', this.tableListData);

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
              this.allselectModel = true; // console.log('length 4');
            } else {
              // console.log('length 0');
              this.allselectModel = false;
              this.itemcheckClick = true;
            } // console.log('checked item single >>', this.checkedList);

          }
        }, {
          key: "onClickDeleteItem",
          value: function onClickDeleteItem(_identifire, _item, _items, _index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'aleart-popupBox',
                        header: 'Delete',
                        message: 'Do you really want to delete this product?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'popup-cancel-btn',
                          handler: function handler(blah) {// // console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ok',
                          cssClass: 'popup-ok-btn',
                          handler: function handler() {
                            // ------------ single item delete start ------------
                            if (_identifire == 'single') {
                              // console.log('_item', _item);
                              var sentValues = {
                                'id': _item
                              }; // _item.deleteLodershow = true;

                              // _item.deleteLodershow = true;
                              _this9.deleteDataSubscribe = _this9.http.put("designerProduct/delete/" + _item, '').subscribe(function (res) {
                                // _item.deleteLodershow = false;
                                // console.log("Edit data  res >", res.return_data);
                                if (res.status == 200) {
                                  // _items.splice( _index, 1 );
                                  // this.commonUtils.presentToast('success', res.return_message);
                                  // if(_items.length == 0){
                                  //   this.allselectModel = false;
                                  // }
                                  _this9.commonUtils.presentToast('success', res.message);

                                  _this9.onRefresh();
                                } else {
                                  _this9.commonUtils.presentToast('error', res.message);
                                }
                              }, function (errRes) {
                                // this.selectLoadingDepend = false;
                                // _item.deleteLodershow = false;
                                _this9.commonUtils.presentToast('error', errRes.error.message);
                              }); // ------------ single item delete end ------------
                            } else {
                              var checkItemIdArray = [];

                              if (_this9.checkedList) {
                                _this9.checkedList.forEach(function (element) {
                                  checkItemIdArray.push(element.id);
                                });
                              }

                              if (_items) {
                                _items.forEach(function (element) {
                                  _this9.checkedList.forEach(function (element1) {
                                    if (element.id == element1.id) {
                                      // element.deleteLodershow = true; //loader show
                                      _this9.alldeleteLoaderShow = true;
                                    }
                                  });
                                });
                              }

                              _this9.deleteDataSubscribe = _this9.http.put('product/muldelete', checkItemIdArray).subscribe(function (res) {
                                if (res.status == 200) {
                                  if (_items) {
                                    for (var i = 0; i < _items.length; i++) {
                                      for (var j = 0; j < _this9.checkedList.length; j++) {
                                        if (_items[i].id == _this9.checkedList[j].id) {
                                          // _items.splice(i, i);
                                          _this9.checkedList = []; // _items.splice(_items.indexOf(_items[i]), 1);
                                          // this.deleteLodershow = false; //loader hide

                                          // _items.splice(_items.indexOf(_items[i]), 1);
                                          // this.deleteLodershow = false; //loader hide
                                          _this9.alldeleteLoaderShow = false; // // console.log('delete items >>', _items);
                                          // // console.log('delete this.checkedList >>', this.checkedList);

                                          // // console.log('delete items >>', _items);
                                          // // console.log('delete this.checkedList >>', this.checkedList);
                                          _this9.allselectModel = false;
                                        }
                                      }
                                    }

                                    ;

                                    if (_items.length == 0) {
                                      _this9.allselectModel = false;
                                      _this9.checkedList = [];
                                      checkItemIdArray = [];
                                    }
                                  }

                                  _this9.commonUtils.presentToast('success', res.message);

                                  _this9.onRefresh();
                                } else {
                                  _this9.commonUtils.presentToast('error', res.message);
                                }
                              }, function (errRes) {
                                // this.deleteLodershow = false; //loader hide
                                _this9.alldeleteLoaderShow = false;

                                _items.forEach(function (element) {
                                  _this9.checkedList.forEach(function (element1) {
                                    if (element.id == element1.id) {
                                      // element.deleteLodershow = false;
                                      _this9.alldeleteLoaderShow = false;
                                    }
                                  });
                                });
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Click Delete Item end

        }, {
          key: "openProductCommentmodal",
          value: function openProductCommentmodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              var profile_modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                        cssClass: 'mymodalClass small openProductComment',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 2:
                      profile_modal = _context4.sent;
                      // modal data back to Component
                      profile_modal.onDidDismiss().then(function (getdata) {
                        // console.log('getdata >>>>>>>>>>>', getdata);
                        _this10.onListDate(_this10.statustype, _this10.listing_url, _this10.pageNo, _this10.displayRecord, _this10.sortColumnName, _this10.sortOrderName, _this10.searchTerm);

                        if (getdata.data == 'submitClose') {}
                      });
                      _context4.next = 6;
                      return profile_modal.present();

                    case 6:
                      return _context4.abrupt("return", _context4.sent);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // openRejectemodal start

        }, {
          key: "openRejectemodal",
          value: function openRejectemodal(_identifier, _item, _items) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var profile_modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                        cssClass: 'mymodalClass small rejectemodal',
                        componentProps: {
                          identifier: _identifier,
                          modalForm_item: _item,
                          modalForm_array: _items
                        }
                      });

                    case 2:
                      profile_modal = _context5.sent;
                      // modal data back to Component
                      profile_modal.onDidDismiss().then(function (getdata) {
                        // console.log('getdata >>>>>>>>>>>', getdata);
                        if (getdata.data == 'submitClose') {}
                      });
                      _context5.next = 6;
                      return profile_modal.present();

                    case 6:
                      return _context5.abrupt("return", _context5.sent);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          } // openRejectemodal end
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
          }
        }]);

        return ProductPage;
      }();

      _ProductPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage
        }];
      };

      _ProductPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-product',
        template: _raw_loader_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductPage);
      /***/
    },

    /***/
    7558:
    /*!*************************************************!*\
      !*** ./src/app/pages/product/product.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    98090:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"product-list\">\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"table-listing\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>{{tableTitle}} Product List\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\">\r\n                          <a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                          </a>\r\n                        </li>\r\n                        <li class=\"breadcrumb-item\">\r\n                          Product Management\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Product List\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n                  <!-- <div class=\"col-lg-6\">\r\n                      <ol class=\"breadcrumb pull-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <app-feather-icons [icon]=\"'home'\"></app-feather-icons>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\" *ngIf=\"breadcrumbs?.parentBreadcrumb\">\r\n                            Product\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\" *ngIf=\"breadcrumbs?.childBreadcrumb\">\r\n                              Sub category\r\n                          </li>\r\n                      </ol>\r\n                  </div> -->\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"note-section\" *ngIf=\"role =='ADMIN'\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                <div class=\"note-item note-item2 note-box-primary card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('all')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>view_list</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">All </p>\r\n                        <p><b>{{tableData?.all}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                <div class=\"note-item note-item2 note-box-warning card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('pending')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>schedule</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Pending</p>\r\n                        <p><b>{{tableData?.pending}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                <div class=\"note-item note-item2 note-box-success card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('approved')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>check</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Approved</p>\r\n                        <p><b>{{tableData?.approved}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n              <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                <div class=\"note-item note-item2 note-box-danger card-outer\">\r\n                  <div matRipple class=\"card card-box\" (click)=\"datatype('rejected')\">\r\n                      <div class=\"top\">\r\n                          <div class=\"icon\">\r\n                              <mat-icon>close</mat-icon>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"bottom\">\r\n                        <p class=\"heading\">Rejected</p>\r\n                        <p><b>{{tableData?.rejected}}</b> Products</p>\r\n                      </div>\r\n                  </div>\r\n                </div>             \r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </div>\r\n        <div class=\"card card-box card-table\">\r\n          <!-- <div class=\"card-header\">\r\n            <div class=\"card-header-tittle\">\r\n             {{tableTitle}} Product List\r\n            </div>\r\n            <div class=\"card-header-action\">\r\n              <ion-button class=\"custom-btn\" [routerLink]=\"['/', 'add-designer-product', 'add', 'id']\" *ngIf=\"role =='DESIGNER'\">\r\n                Add Product\r\n              </ion-button>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"card-body\">\r\n            <div class=\"add-content-button text-right\">\r\n            </div>\r\n            <div class=\"table-header\">\r\n              <div class=\"records-wrapper\">\r\n                <ion-item class=\"record\">\r\n                  <span class=\"text-black mr-1\">Records: </span>\r\n                  <mat-form-field  class=\"m-0\">\r\n                    <mat-select [(ngModel)]=\"displayRecord\" name=\"record\" (selectionChange)=\"displayRecordChange($event.value)\">\r\n                      <mat-option *ngFor=\"let record of displayRecords\" [value]=\"record.displayValue\">\r\n                        <span *ngIf=\"record.displayValue > 0\">{{record.displayValue}}</span>\r\n                        <!-- <span *ngIf=\"record.displayValue == 0\">All</span> -->\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"search-wrapper\">\r\n                <ion-searchbar class=\"p-0\" showCancelButton=\"focus\" debounce=\"500\" placeholder=\"Search  product name ....\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchList($event)\"></ion-searchbar>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-responsive\" *ngIf=\"role == 'ADMIN'\">\r\n              <table class=\"table\">\r\n                  <thead>\r\n                      <tr>\r\n                          <th class=\"ion-text-start\">\r\n                              <div>\r\n                                  #\r\n                              </div>\r\n                          </th> \r\n                          <th *ngFor=\"let th of tableHeaderData1\" (click)=\"isSortTableHeader(tableHeaderData1, th)\" class=\"ion-text-center\">\r\n                            <div>\r\n                              {{th.display_name}}\r\n                              <mat-icon *ngIf=\"th.sortingButtonName == ''\">import_export</mat-icon>\r\n                              <mat-icon *ngIf=\"th.sortingButtonName == 'ASC'\">expand_less</mat-icon>\r\n                              <mat-icon *ngIf=\"th.sortingButtonName == 'DESC'\">expand_more</mat-icon>\r\n                            </div>\r\n                          </th>\r\n                          <th class=\"ion-text-center\">\r\n                            <div class=\"ion-justify-content-center\">\r\n                              Product Img\r\n                            </div>\r\n                          </th>\r\n                          <th class=\"ion-text-center\">\r\n                            <div class=\"ion-justify-content-center\">\r\n                              Verifiction\r\n                            </div>\r\n                          </th>\r\n                          <th class=\"ion-text-center\" >\r\n                            <div class=\"ion-justify-content-center\">\r\n                              Actions\r\n                            </div>\r\n                          </th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr  [hidden]=\"!isListLoading\" class=\"loading-table-data\">\r\n                      <td colspan=\"100\" class=\"text-center\">\r\n                        Data is loading...\r\n                      </td>\r\n                    </tr>\r\n                    <tr [hidden]=\"isListLoading\" *ngIf=\"tableData?.data.length == 0\" class=\"loading-table-data\">\r\n                      <td colspan=\"100\" class=\"text-center\">\r\n                        No data found\r\n                      </td>\r\n                    </tr>\r\n                    <tr [hidden]=\"isListLoading\" *ngFor=\"let item of tableData?.data; let i = index\">\r\n                      <td>{{i + 1}}</td>\r\n                      <td>\r\n                        <a [routerLink]=\"['/', 'product-view',  item.productId]\" class=\"text-decoration-none\">\r\n                          <div class=\"longtext\" [matTooltip]=\"item?.productName\" matTooltipPosition=\"right\">\r\n                            {{item?.productDetails?.productName}}\r\n                          </div>\r\n                        </a>\r\n                      </td>\r\n                      <!-- <td>\r\n                        <div class=\"longtext\" [matTooltip]=\"item?.productDescription\"\r\n                        matTooltipPosition=\"right\">\r\n                          {{item?.productDetails?.productDescription}}\r\n                        </div>\r\n                        \r\n                      </td> -->\r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">{{item?.categoryName}}</td>\r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">{{item?.subCategoryName}}</td>\r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">\r\n                        {{item?.designerProfile?.displayName}}\r\n                      </td>\r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">\r\n                        {{item?.designerProfile?.designerCategory}}\r\n                      </td>\r\n                      <!-- <td>\r\n                        {{item?.gender}}\r\n                      </td> -->\r\n                      <!-- <td>\r\n                        {{item?.age?.min}}--{{item?.age?.max}}\r\n                      </td> -->\r\n                      <!-- <td>\r\n                        {{item?.priceType}}\r\n                      </td>\r\n                      <td>\r\n                        {{item?.taxPercentage}}\r\n                      </td>  -->\r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">\r\n                        \r\n                        {{item?.mrp}}\r\n                      </td>                        \r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">\r\n                        {{item?.deal?.salePrice ? item?.deal?.salePrice : '0'}}\r\n                      </td>\r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">\r\n                          {{item?.soh}}\r\n                      </td>\r\n                      <td>\r\n                        <!-- <a href=\"{{item?.images[0].name}}\" data-fancybox data-caption=\"My caption\">\r\n                          <img [src]=\"item?.images[0].name\" class=\"w-50 img-fluid rounded\">\r\n                        </a> -->\r\n                        <div class=\"symbol-group symbol-hover\">\r\n                         <a [href]=\"item?.images[0]?.large\" target=\"_blank\" *ngIf=\"item?.images[0]?.large\">\r\n                            <img [src]=\"item?.images[0]?.large\" class=\"img-fluid rounded tableimg\">\r\n                            <!-- <fancybox box-for=\"item.productId\"> -->\r\n                          </a>\r\n                          <a [href]=\"item?.images[1]?.large\" target=\"_blank\"  *ngIf=\"item?.images[1]?.large\">\r\n                            <img [src]=\"item?.images[1]?.large\" class=\"img-fluid rounded tableimg\">\r\n                          </a>\r\n                          <a [href]=\"item?.images[2]?.large\" target=\"_blank\"  *ngIf=\"item?.images[2]?.large\">\r\n                            <img [src]=\"item?.images[2]?.large\" class=\"img-fluid rounded tableimg\">\r\n                          </a>\r\n                          <a [href]=\"item?.images[3]?.large\" target=\"_blank\"  *ngIf=\"item?.images[3]?.large\">\r\n                            <img [src]=\"item?.images[3]?.large\" class=\"img-fluid rounded tableimg\">\r\n                          </a>\r\n                        </div>\r\n                      </td>\r\n                      <td [routerLink]=\"['/', 'product-view',  item.productId]\">\r\n                        <span class=\"status\" [ngClass]=\"{ 'warning': item.adminStatus == 'Pending' , 'danger': item.adminStatus == 'Rejected','success': item.adminStatus == 'Approved'}\">\r\n                          {{item?.adminStatus}}\r\n                        </span>\r\n                        \r\n                      </td>\r\n                      <td class=\"action pt-0 text-center\">\r\n                        <ion-fab *ngIf=\"pagePermission?.modPrivs?.update == true\" horizontal=\"end\" vertical=\"bottom\" slot=\"\">\r\n                          <ion-fab-button color=\"dark\">\r\n                            <ion-icon color=\"warning\"  matTooltip=\"Pending\" matTooltipClass=\"bg-warning\" flow=\"up\" delay=\"500\" name=\"time-outline\" *ngIf=\"item.adminStatus== 'Pending'\"></ion-icon>\r\n                            <ion-icon color=\"danger\"  matTooltip=\"Rejected\" matTooltipClass=\"bg-danger\" flow=\"up\" delay=\"500\" name=\"close-circle-outline\" *ngIf=\"item.adminStatus== 'Rejected'\"></ion-icon>\r\n                            <ion-icon  color=\"success\" matTooltip=\"Approved\" matTooltipClass=\"bg-success\" flow=\"up\" delay=\"500\" name=\"checkmark-circle-outline\" *ngIf=\"item.adminStatus== 'Approved'\"></ion-icon>\r\n                          </ion-fab-button>\r\n                          <ion-fab-list side=\"start\">\r\n                            <ion-fab-button color=\"danger\" matTooltip=\"Reject Product\" matTooltipClass=\"bg-danger\" flow=\"up\" delay=\"500\" *ngIf=\"item.adminStatus != 'Rejected'\" (click)=\"changeStatus('reject',item)\">\r\n                              <ion-icon name=\"close-circle-outline\" color=\"dark\"></ion-icon>\r\n                            </ion-fab-button>\r\n                            <ion-fab-button color=\"success\"  matTooltip=\"Approve Product\" matTooltipClass=\"bg-success\" flow=\"up\" delay=\"500\" *ngIf=\"item.adminStatus != 'Approved'\" (click)=\"changeStatus('approve',item)\">\r\n                              <ion-icon name=\"checkmark-circle-outline\" color=\"dark\"></ion-icon>\r\n                            </ion-fab-button>\r\n                          </ion-fab-list>\r\n                        </ion-fab>\r\n                        <ion-button *ngIf=\"tableTitle == 'rejected'\" matTooltip=\"View message\" matTooltipPosition=\"above\" size=\"small\" color=\"secondary\" (click)=\"openRejectemodal('message_modal', item?.productStageDetails?.comment, '');\">\r\n                          <mat-icon>chat</mat-icon>\r\n                        </ion-button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n              </table>\r\n          </div>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"action\">\r\n              <ion-button matTooltip=\"Refresh\" matTooltipPosition=\"above\" size=\"small\" color=\"primary\" (click)=\"onRefresh()\">\r\n                <mat-icon>refresh</mat-icon>\r\n              </ion-button>\r\n              <div *ngIf=\"tableData?.data.length == 0\">\r\n                <ion-button [ngClass]=\"{'disabled':checkedList.length == 0 || alldeleteLoaderShow}\" class=\"w-40\" (click)=\"onClickDeleteItem('multiple', '', tableListData, '')\" matTooltip=\"Recycle Bin\" matTooltipPosition=\"above\" color=\"danger\" *ngIf=\"alldelbtn\">\r\n                  <mat-icon *ngIf=\"!alldeleteLoaderShow\" >delete_forever</mat-icon>\r\n                  <ion-spinner *ngIf=\"alldeleteLoaderShow\" class=\"delete-spinner\" name=\"crescent\"></ion-spinner>\r\n                </ion-button>\r\n              </div>\r\n            </div>\r\n            <div>\r\n                <ul class=\"pagination\">\r\n                    <li (click)=\"setPage(0)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"First\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- First -->\r\n                          <ion-icon name=\"play-skip-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.currentPage - 1)\" [ngClass]=\"{disabled:tableData?.currentPage === 0}\" class=\"circle-border\" matTooltip=\"Previous\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Previous -->\r\n                          <ion-icon name=\"caret-back\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li>\r\n                        Page <a>{{ tableData?.currentPage + 1 }}</a> of {{ tableData?.totalPage + 1 }} \r\n                    </li>\r\n                    <li> <span class=\"ran-separator pull-right margin-top-3\"></span> </li>\r\n                    <li (click)=\"setPage(tableData.currentPage + 1)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Next\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Next -->\r\n                          <ion-icon name=\"caret-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                    <li (click)=\"setPage(tableData.totalPage)\" [ngClass]=\"{disabled:tableData?.currentPage === tableData?.totalPage}\" class=\"circle-border\" matTooltip=\"Last\" matTooltipPosition=\"above\">\r\n                        <a>\r\n                          <!-- Last -->\r\n                          <ion-icon name=\"play-skip-forward\"></ion-icon>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_product_product_module_ts-es5.js.map