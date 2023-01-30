(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_banner_banner_banner_module_ts"], {
    /***/
    68809:
    /*!**************************************************************!*\
      !*** ./src/app/pages/banner/banner/banner-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BannerPageRoutingModule": function BannerPageRoutingModule() {
          return (
            /* binding */
            _BannerPageRoutingModule
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


      var _banner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./banner.page */
      4478);

      var routes = [{
        path: '',
        component: _banner_page__WEBPACK_IMPORTED_MODULE_0__.BannerPage
      }];

      var _BannerPageRoutingModule = function BannerPageRoutingModule() {
        _classCallCheck(this, BannerPageRoutingModule);
      };

      _BannerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BannerPageRoutingModule);
      /***/
    },

    /***/
    2397:
    /*!******************************************************!*\
      !*** ./src/app/pages/banner/banner/banner.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BannerPageModule": function BannerPageModule() {
          return (
            /* binding */
            _BannerPageModule
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


      var _banner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./banner-routing.module */
      68809);
      /* harmony import */


      var _banner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./banner.page */
      4478);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _BannerPageModule = function BannerPageModule() {
        _classCallCheck(this, BannerPageModule);
      };

      _BannerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _banner_routing_module__WEBPACK_IMPORTED_MODULE_0__.BannerPageRoutingModule],
        declarations: [_banner_page__WEBPACK_IMPORTED_MODULE_1__.BannerPage]
      })], _BannerPageModule);
      /***/
    },

    /***/
    4478:
    /*!****************************************************!*\
      !*** ./src/app/pages/banner/banner/banner.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BannerPage": function BannerPage() {
          return (
            /* binding */
            _BannerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_banner_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./banner.page.html */
      24509);
      /* harmony import */


      var _banner_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./banner.page.scss */
      57576);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
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

      var _BannerPage = /*#__PURE__*/function () {
        function BannerPage(activatedRoute, http, router, commonUtils, authService) {
          _classCallCheck(this, BannerPage);

          this.activatedRoute = activatedRoute;
          this.http = http;
          this.router = router;
          this.commonUtils = commonUtils;
          this.authService = authService;
          this.example = false;
          this.model = {}; // getBannerById end

          /* -----------Image uploading start----------- */

          this.imageSrc = null;
          this.previewimageSrc = '';
          this.uploader = false;
        }

        _createClass(BannerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.commonFunction();
          } // commonFunction start

        }, {
          key: "commonFunction",
          value: function commonFunction() {
            var currentDate = Date.now();
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__(currentDate).format('YYYY-MM-DD'); // get active url name

            this.commonUtils.getPathNameFun(this.router.url.split('/')[1]);
            this.parms_action_name = this.activatedRoute.snapshot.paramMap.get('action');
            this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
            console.log('parms_action_name', this.parms_action_name);
            console.log('parms_action_id', this.parms_action_id);
            /*Check permission status start*/
            // this.authService.globalparamsData.subscribe(res => {
            //   console.log('res>>', res);
            //   if(res.authority == 'ADMIN'){
            //     this.permissionDataSubscribe = this.commonUtils.menuPermissionObservable.subscribe(data => {
            //       if(data){
            //         console.log('menu>>', data);
            //         console.log('this.router.url>>', this.router.url);
            //         let pageUrlName = this.router.url.split("/");
            //         console.log('pageUrlName', pageUrlName);
            //         for(let item of data) {
            //           let moduleUrlName = item.modDetails.url.split("-");
            //           console.log('moduleUrlName',moduleUrlName);
            //           if(pageUrlName[1] == moduleUrlName[0]){
            //             if(this.parms_action_name == 'add' && item.modPrivs.create == true){
            //                console.log('-----Permission create Granted-----');
            //               break;
            //             }else if(this.parms_action_name == 'edit' && item.modPrivs.update == true){
            //               console.log('-----Permission update Granted-----');
            //               this.getBannerById();
            //               break;
            //             }else {
            //               console.log('-------No Permission--------');
            //               this.router.navigateByUrl('/error');
            //             }
            //           }
            //         }
            //       }
            //     })
            //   }else {
            //     this.router.navigateByUrl('/error');
            //   }
            // })

            /*Check permission status end*/

            this.getBannerById();
          } // commonFunction end
          // getBannerById start

        }, {
          key: "getBannerById",
          value: function getBannerById() {
            var _this = this;

            this.model.startDate = null;
            this.model.endDate = null;
            this.loader = true;
            this.getBannerbyIdSubscribe = this.http.get("adminMData/getBanner/" + this.parms_action_id).subscribe(function (res) {
              console.log("res", res);
              _this.loader = false;
              _this.model = {
                title: res.title,
                description: res.description,
                image: res.image,
                url: res.url,
                startDate: res.startDate,
                endDate: res.endDate
              };
              _this.model.start_Date = moment__WEBPACK_IMPORTED_MODULE_2__(res.startDate).format('YYYY-MM-DD');
              _this.model.end_Date = moment__WEBPACK_IMPORTED_MODULE_2__(res.endDate).format('YYYY-MM-DD');
              _this.imageSrc = res.image;
              _this.previewimageSrc = res.image;
            }, function (error) {
              _this.loader = false;
              console.log("error", error);
            });
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e) {
            var _this2 = this;

            this.uploader = true;
            var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            var pattern = /image-*/;
            var reader = new FileReader();

            if (!file.type.match(pattern)) {
              alert('invalid format');
              return;
            }

            console.log(this.imageSrc);
            this.imageSrc = null; // this.file = null;
            // this.imageSrc= e.target.files[0];

            var fd = new FormData();
            fd.append("file", e.target.files[0]);
            this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
              _this2.imageSrc = res.path;
              _this2.model.image = res.path;
              console.log("profileimgpath", _this2.imageSrc);
              _this2.uploader = false; // this.commonUtils.presentToast('success', res.message);
            }, function (error) {
              console.log("error", error);
              _this2.uploader = false;

              _this2.commonUtils.presentToast('error', error.error.message);
            });
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(file);
          }
        }, {
          key: "_handleReaderLoaded",
          value: function _handleReaderLoaded(e) {
            var reader = e.target;
            this.previewimageSrc = reader.result;
          }
          /* Image uploading end */
          // onSubmitCategortForm start 

        }, {
          key: "onSubmitbannerForm",
          value: function onSubmitbannerForm(form) {
            var _this3 = this;

            this.btnloader = true; // add api start

            if (this.parms_action_name == 'add') {
              this.addBannerSubscribe = this.http.post('adminMData/addBanner', form.value).subscribe(function (res) {
                console.log("allcategorydata", _this3.allcategorydata, "response", res);
                _this3.btnloader = false;

                _this3.commonUtils.presentToast('success', res.message);

                _this3.router.navigateByUrl('/banner-list');

                form.reset();
                _this3.imageSrc = '';
              }, function (error) {
                console.log(error);
                _this3.btnloader = false;

                _this3.commonUtils.presentToast('error', error.error.message);
              });
            } // add api end
            // edit api start
            else if (this.parms_action_name == 'edit') {
              this.addBannerSubscribe = this.http.put("adminMData/updateBanner/" + this.parms_action_id, form.value).subscribe(function (res) {
                console.log("allcategorydatay", _this3.allcategorydata, "response", res);
                _this3.btnloader = false; // window.location.reload();

                _this3.commonUtils.presentToast('success', res.message);

                _this3.router.navigateByUrl('/banner-list');

                form.reset();
              }, function (error) {
                _this3.btnloader = false;

                _this3.commonUtils.presentToast('error', error.error.message);
              });
            } // edit api end

          } // onSubmitCategortForm end
          // changeDateFormat

        }, {
          key: "changeDateFormat",
          value: function changeDateFormat(date, identifire, event) {
            console.log('event', event.target.value);

            if (event.target.value) {
              if (identifire == 'start') {
                this.model.startDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).format('YYYY/MM/DD');
              } else {
                this.model.endDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).format('YYYY/MM/DD');
              }
            } else {
              if (identifire == 'start') {
                this.model.startDate = null;
                this.model.start_Date = null;
                this.model.endDate = null;
                this.model.end_Date = null;
              } else {
                this.model.endDate = null;
                this.model.end_Date = null;
              }
            }
          } // changeDateFormat end
          // ngOnDestroy start

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.getBannerbyIdSubscribe !== undefined) {
              this.getBannerbyIdSubscribe.unsubscribe();
            }

            if (this.addBannerSubscribe !== undefined) {
              this.addBannerSubscribe.unsubscribe();
            }

            if (this.permissionDataSubscribe !== undefined) {
              this.permissionDataSubscribe.unsubscribe();
            }
          }
        }]);

        return BannerPage;
      }();

      _BannerPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_4__.CommonUtils
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }];
      };

      _BannerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-banner',
        template: _raw_loader_banner_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_banner_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BannerPage);
      /***/
    },

    /***/
    57576:
    /*!******************************************************!*\
      !*** ./src/app/pages/banner/banner/banner.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    24509:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banner/banner/banner.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"form-layout\">\r\n        <div class=\"form-wrapper\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"page-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                        <div class=\"page-header-left\">\r\n                            <h3>{{parms_action_name}} banner\r\n                                <!-- <small>Divatt Admin panel</small> -->\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <ol class=\"breadcrumb float-right\">\r\n                          <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                  <mat-icon>home</mat-icon>\r\n                              </a></li>\r\n                          <li class=\"breadcrumb-item\">\r\n                            Banner List\r\n                          </li>\r\n                          <li class=\"breadcrumb-item active\">\r\n                            {{parms_action_name}} banner\r\n                          </li>\r\n                      </ol>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content-center\" *ngIf=\"loader\"><mat-spinner class=\"form-get-loader\"></mat-spinner></div>\r\n          <div class=\"card card-box\" *ngIf=\"!loader\">\r\n            <!-- <div class=\"card-header\">\r\n                <div class=\"card-header-tittle\">\r\n                  {{parms_action_name}} Banner\r\n                </div>\r\n                \r\n            </div> -->\r\n            \r\n            <form action=\"\" #banner=\"ngForm\" (ngSubmit)=\"onSubmitbannerForm(banner)\" >\r\n              <div class=\"card-body\">\r\n                    <ion-grid>\r\n                      <ion-row>\r\n                        <!-- Name -->\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"3\">\r\n                          <div class=\"form-group\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Banner title</mat-label>\r\n                              <input matInput  name=\"title\" [(ngModel)]=\"model.title\" required pattern=\"\\S(.*\\S)?\">\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"3\">\r\n                          <div class=\"form-item mt-3\">\r\n                            <div class=\"custom-file preview\">\r\n                              <input type=\"hidden\" name=\"image\" [(ngModel)] = \"model.image\" required>\r\n                              <input class=\"custom-file-input\" id=\"singleFileUpload\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event)\">\r\n                              <label class=\"custom-file-label\" for=\"singleFileUpload\">Banner Img</label>\r\n                              <img [src]=\"imageSrc != null ? imageSrc : 'assets/images/nobanner.jpg'\" *ngIf=\"!uploader\"/>\r\n                              <div class=\"text-black d-flex\" *ngIf=\"uploader\">Uploading&nbsp;<ion-spinner name=\"dots\"  class=\"text-black\"></ion-spinner></div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"3\">\r\n                          <div class=\"form-group\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Start Date</mat-label>\r\n                              <input matInput type=\"date\"  name=\"start_Date\" [required]=\"model.start_Date\" [(ngModel)] = \"model.start_Date\" [min]=\"currentDate\" (change)=\"changeDateFormat(model.start_Date,'start',$event)\" >\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </ion-col>\r\n                        <input type=\"hidden\" name=\"startDate\" [(ngModel)]=\"model.startDate\">\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"3\">\r\n                          <div class=\"form-group\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>End Date</mat-label>\r\n                              <input matInput type=\"date\"  name=\"end_Date\" required [disabled]=\"!model.start_Date\" [(ngModel)] = \"model.end_Date\" [min]=\"model.start_Date\" (change)=\"changeDateFormat(model.end_Date,'end',$event)\" >\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </ion-col>\r\n                        <input type=\"hidden\" name=\"endDate\" [(ngModel)]=\"model.endDate\">\r\n                      </ion-row>\r\n                      <ion-row>\r\n                        \r\n                        <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\r\n                          <div class=\"form-group\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Banner Description</mat-label>\r\n                              <textarea matInput  name=\"description\" rows=\"4\" [(ngModel)] = \"model.description\" ></textarea>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </ion-col>\r\n                        \r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                          <div class=\"form-group\">\r\n                            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                              <mat-label>Banner url</mat-label>\r\n                              <input matInput  name=\"url\" [(ngModel)] = \"model.url\" placeholder=\"https://dev.divatt.com/divatt/designer-list/all\" pattern=\"\\S(.*\\S)?\">\r\n                              <!-- <mat-icon matSuffix (click)=\"example = !example;\" class=\"cursor-pointer text-dark\">info</mat-icon> -->\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <div></div>\r\n                <div>\r\n                  <ion-button class=\"custom-btn\" [ngClass]=\"{'disabled' : btnloader}\" type=\"submit\"  [disabled]=\"!banner.valid\">\r\n                    <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\"></ion-spinner>\r\n                    {{parms_action_name == 'add' ? 'Save' : 'Update'}}\r\n                  </ion-button>\r\n                  <ion-button color=\"danger\" [routerLink]=\"['/', 'banner-list']\">\r\n                    Cancel\r\n                  </ion-button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_banner_banner_banner_module_ts-es5.js.map