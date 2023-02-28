(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_designer_add-designer-product_add-designer-product_module_ts"], {
    /***/
    91228:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/designer/add-designer-product/add-designer-product-routing.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddDesignerProductPageRoutingModule": function AddDesignerProductPageRoutingModule() {
          return (
            /* binding */
            _AddDesignerProductPageRoutingModule
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


      var _add_designer_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-designer-product.page */
      52743);

      var routes = [{
        path: '',
        component: _add_designer_product_page__WEBPACK_IMPORTED_MODULE_0__.AddDesignerProductPage
      }];

      var _AddDesignerProductPageRoutingModule = function AddDesignerProductPageRoutingModule() {
        _classCallCheck(this, AddDesignerProductPageRoutingModule);
      };

      _AddDesignerProductPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddDesignerProductPageRoutingModule);
      /***/
    },

    /***/
    51392:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/designer/add-designer-product/add-designer-product.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddDesignerProductPageModule": function AddDesignerProductPageModule() {
          return (
            /* binding */
            _AddDesignerProductPageModule
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


      var _add_designer_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./add-designer-product-routing.module */
      91228);
      /* harmony import */


      var _add_designer_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-designer-product.page */
      52743);
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      44466);

      var _AddDesignerProductPageModule = function AddDesignerProductPageModule() {
        _classCallCheck(this, AddDesignerProductPageModule);
      };

      _AddDesignerProductPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _add_designer_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddDesignerProductPageRoutingModule],
        declarations: [_add_designer_product_page__WEBPACK_IMPORTED_MODULE_1__.AddDesignerProductPage]
      })], _AddDesignerProductPageModule);
      /***/
    },

    /***/
    52743:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/designer/add-designer-product/add-designer-product.page.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddDesignerProductPage": function AddDesignerProductPage() {
          return (
            /* binding */
            _AddDesignerProductPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_designer_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-designer-product.page.html */
      10413);
      /* harmony import */


      var _add_designer_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-designer-product.page.scss */
      95084);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common-utils/common-utils */
      83914);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

      var _AddDesignerProductPage = /*#__PURE__*/function () {
        function AddDesignerProductPage(activatedRoute, storage, http, router, commonUtils) {
          _classCallCheck(this, AddDesignerProductPage);

          this.activatedRoute = activatedRoute;
          this.storage = storage;
          this.http = http;
          this.router = router;
          this.commonUtils = commonUtils;
          this.standredSOH = [{}];
          this.selectedList = [];
          this.allData = {};
          this.addgift = false;
          this.uplodeimgloader = false;
          this.fields = [{}];
          this.extraSpecifications = {};
          this.giftWrap = false;
          this.customization = false;
          this.cod = false;
          this.editextraspecification = false;
          this.back = '';
          this.side = '';
          this.close = '';
          this.neck = '';
          this.image6 = '';
          this.image7 = '';
          this.image8 = '';
          this.mesormentList = [{
            disabled: true,
            name: ''
          }];
          this.discountTypelist = [{
            id: 1,
            name: "Flat"
          }, {
            id: 2,
            name: "Percentage"
          }, {
            id: 3,
            name: "None"
          }];
          this.pricetyplist = [{
            id: 1,
            name: "Without Tax"
          }, {
            id: 2,
            name: "Inclusive Tax"
          }];
          this.genderList = [{
            id: 1,
            name: "Male"
          }, {
            id: 2,
            name: "Female"
          }];
          this.productdtl = {}; // Specification get end

          /* -----------Image uploading start----------- */

          this.imageidentifier = '';
        }

        _createClass(AddDesignerProductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.productdtl.discountValue = 0;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.commonFunction();
          } // commonFunction start

        }, {
          key: "commonFunction",
          value: function commonFunction() {
            var _this = this;

            this.storage.get('setStroageGlobalParamsData').then(function (val) {
              // console.log('All User Data', val.username,val.authority,val.firstName);
              // console.log("this.href",val.username.split('@')[0]);
              _this.role = val.authority;
              console.log('this.role', _this.role);

              if (_this.role == 'DESIGNER') {
                // this.getdesignerById(val.uid);
                _this.getDesignerProfiledata(val.uid);

                _this.getColorList();

                _this.getHSNlist('');

                _this.id = _this.activatedRoute.snapshot.params.id;
                _this.action = _this.activatedRoute.snapshot.params.action;
                console.log(_this.id, _this.action);
                _this.productdtl.inddiscountType = 'None';
                _this.productdtl.usdiscountType = 'None';

                _this.getcategoryList();

                if (_this.action == 'edit') {
                  _this.editextraspecification = true;
                  _this.getproductbyIdapi = 'designerProduct/view/';

                  _this.getproductById();

                  _this.getDesignerProfiledata(val.uid);
                }
              } else {
                _this.router.navigateByUrl('/error');
              }
            });
          } // commonFunction end

        }, {
          key: "getHSNlist",
          value: function getHSNlist(key) {
            var _this2 = this;

            this.getHSNListSubscribe = this.http.get("hsn/getactiveHSNList?searchKeyword=" + key).subscribe(function (res) {
              console.log("res", res);
              _this2.HSNlist = res;
            }, function (error) {// console.log("error",error);
              // this.commonUtils.presentToast('error', error.error.message);
            });
          }
        }, {
          key: "testSearch",
          value: function testSearch(term, item) {
            console.log(item);
            console.log(term);
            return item.name.startsWith(term);
          } // getDesignerProfiledata for check perpession start

        }, {
          key: "getDesignerProfiledata",
          value: function getDesignerProfiledata(uid) {
            var _this3 = this;

            console.log("this.getDesignerProfiledata(val.uid)", this.designerId);
            this.http.get("designer/" + uid).subscribe(function (res) {
              if (res.profileStatus == 'COMPLETED') {
                _this3.userData = res;
              } else {
                var pageUrl = _this3.router.url.split("/");

                console.log('pageUrl', pageUrl[1]);

                if (pageUrl[1] == 'add-designer-product') {
                  _this3.commonUtils.presentToast('error', "Sorry ! You don't have any permission on product.");

                  _this3.router.navigateByUrl('/error');
                }
              }
            }, function (error) {
              console.log("error", error);
            });
          } // getDesignerProfiledata for check perpession  end
          // getcatById start

        }, {
          key: "getdesignerById",
          value: function getdesignerById(role, username) {
            var _this4 = this;

            this.getDesignerSubcribe = this.http.get("designer/" + username).subscribe(function (res) {
              _this4.userData = res;
              console.log("this.userData", _this4.userData);
            }, function (error) {});
          } // getcatById end
          // getproductById start

        }, {
          key: "getproductById",
          value: function getproductById() {
            var _this5 = this;

            this.loader = true;
            this.getProductByIdSubscribe = this.http.get(this.getproductbyIdapi + this.id).subscribe(function (res) {
              _this5.loader = false;
              console.log("productdtl res", res);
              _this5.productdtl = res;
              _this5.productdtl = {
                productName: res.productName,
                productDescription: res.productDescription,
                categoryId: res.categoryId,
                subCategoryId: res.subCategoryId,
                min: res.age.min,
                max: res.age.max,
                purchaseMax: res.purchaseQuantity.purchaseMax,
                purchaseMin: res.purchaseQuantity.purchaseMin,
                gender: res.gender,
                cod: res.cod,
                taxInclusive: res.taxInclusive,
                customization: res.customization,
                giftWrap: res.giftWrap,
                priceType: res.priceType,
                taxPercentage: res.taxPercentage,
                front: res.images[0].name,
                colour: res.images[0].colour,
                inddiscountType: res.price.indPrice.discountType,
                inddiscountValue: res.price.indPrice.discountValue,
                fittingInformation: res.specifications.fittingInformation,
                productDetails: res.specifications.productDetails,
                style: res.specifications.style,
                customizationSOH: res.customizationSOH,
                washingInformation: res.specifications.washingInformation,
                cotton: res.specifications.composition.cotton,
                polystar: res.specifications.composition.polystar,
                indmrp: res.price.indPrice.mrp,
                amount: res.price.indPrice.mrp,
                indealPrice: res.price.indPrice.dealPrice,
                indealstart: res.price.indPrice.dealStart,
                indealend: res.price.indPrice.dealEnd,
                usdealstart: res.price.usPrice.dealStart,
                usdealend: res.price.usPrice.dealEnd,
                usdiscountType: res.price.usPrice.discountType,
                usdiscountValue: res.price.usPrice.discountValue,
                usmrp: res.price.usPrice.mrp,
                usamount: res.price.usPrice.mrp,
                usdealPrice: res.price.usPrice.dealPrice,
                extraSpecificationskey: Object.keys(res.extraSpecifications),
                extraSpecificationsvalue: Object.values(res.extraSpecifications) // hsnData:res.hsnData.hsnCode

              };

              if (res.hsnData) {
                _this5.productdtl.hsnData = res.hsnData.hsnCode;
                _this5.hsnData = res.hsnData;
              }

              _this5.frontImage = res.images[0].name, console.log('this.frontImage>>', _this5.frontImage);
              _this5.back = res.images[1].name, _this5.side = res.images[2].name, _this5.close = res.images[3].name, _this5.neck = res.images[4].name, _this5.image6 = res.images[5].name, _this5.image7 = res.images[6].name, _this5.image8 = res.images[7].name, _this5.productdtl.indeal_start = moment__WEBPACK_IMPORTED_MODULE_3__(res.price.indPrice.dealStart).format('YYYY-MM-DD');
              _this5.productdtl.indeal_end = moment__WEBPACK_IMPORTED_MODULE_3__(res.price.indPrice.dealEnd).format('YYYY-MM-DD');
              _this5.productdtl.usdeal_start = moment__WEBPACK_IMPORTED_MODULE_3__(res.price.usPrice.dealStart).format('YYYY-MM-DD');
              _this5.productdtl.usdeal_end = moment__WEBPACK_IMPORTED_MODULE_3__(res.price.usPrice.dealEnd).format('YYYY-MM-DD');

              for (var i = 0; i < res.standeredSOH.length; i++) {
                _this5.standredSOH[i] = res.standeredSOH[i]; // this.selectedList[i] = res.standeredSOH[i].sizeType;

                _this5.selectedList.push({
                  sizeType: res.standeredSOH[i].sizeType
                });

                console.log("this.productdtl.standeredSOH", _this5.standredSOH, res.standeredSOH, _this5.selectedList);
              }

              console.log("val", _this5.selectedList); // for(let i = 0;i < this.standredSOH.length; i++)
              // {
              //   if(res.standeredSOH[i].sizeType != this.selectedList[i])
              //   {
              //     // this.mesormentList.push({disabled:true});
              //     this.selectedList.push({sizeType:res.standeredSOH[i].sizeType})
              //   }
              // console.log("val",this.selectedList);
              // }

              console.log("this.productdtl.standeredSOH", _this5.standredSOH, res.standeredSOH);

              _this5.categorySelected('', _this5.productdtl.categoryId, 'onload');

              _this5.getSpecification(_this5.productdtl.categoryId);

              console.log("this.productdtl", _this5.productdtl); // const object1 = {
              //   a: 'somestring',
              //   b: 42,
              //   c: false
              // };

              for (var index = 0; index < res.extraSpecifications.length; index++) {
                _this5.extraSpecifications[_this5.specificationlist[index].name] = res.extraSpecifications[index].name;
                console.log('form.value.specificationValue+index;', res.extraSpecifications[index].name);
                console.log("Len", res.extraSpecifications.length);
              }

              console.log("final objeect is", _this5.extraSpecifications);
            }, function (error) {
              _this5.loader = false;
              console.log("error", error);

              _this5.commonUtils.presentToast('error', error.error.message);
            });
            console.log("selectedList", this.selectedList);
          } // getproductById end
          // changeDateFormat start

        }, {
          key: "changeDateFormat",
          value: function changeDateFormat(identifier, date) {
            if (identifier == 'indealstart') {
              this.productdtl.indealstart = moment__WEBPACK_IMPORTED_MODULE_3__(date).format('YYYY/MM/DD');
              console.log(this.productdtl.indealstart, date);
            } else if (identifier == 'indealend') {
              this.productdtl.indealend = moment__WEBPACK_IMPORTED_MODULE_3__(date).format('YYYY/MM/DD');
              console.log(this.productdtl.indealend, date);
            }

            if (identifier == 'usdealstart') {
              this.productdtl.usdealstart = moment__WEBPACK_IMPORTED_MODULE_3__(date).format('YYYY/MM/DD');
              console.log(this.productdtl.usdealstart, date);
            } else if (identifier == 'usdealend') {
              this.productdtl.usdealend = moment__WEBPACK_IMPORTED_MODULE_3__(date).format('YYYY/MM/DD');
              console.log(this.productdtl.usdealend, date);
            }
          } // changeDateFormat end
          // onGifiSelect start

        }, {
          key: "onGifiSelect",
          value: function onGifiSelect(e) {
            console.log(e);

            if (e == true) {
              this.addgift = true;
            } else {
              this.addgift = false;
            }
          } // onGifiSelect end

        }, {
          key: "isprimary",
          value: function isprimary(identifier, event) {
            console.log("identifier,event", identifier, event);

            if (identifier == 'image1') {
              this.isPrimary1 = true;
              this.isPrimary2 = false;
            } else if (identifier == 'img2') {
              this.isPrimary1 = false;
              this.isPrimary2 = true;
            }
          } // Specification get start

        }, {
          key: "getSpecification",
          value: function getSpecification(catid) {
            var _this6 = this;

            this.getSpecificationListSubscribe = this.http.get("specification/listOfSpecification/" + catid).subscribe(function (res) {
              console.log("res", res);
              _this6.specificationlist = res;
              console.log("this.specificationlist", _this6.specificationlist);
              console.log("Len", _this6.specificationlist.name);
            }, function (error) {
              console.log("error", error);
            });
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e, imageidentifier) {
            var _this7 = this;

            var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            this.imageidentifier = imageidentifier;
            var pattern = /image-*/;
            var reader = new FileReader();

            if (!file.type.match(pattern)) {
              alert('invalid format');
              return;
            }

            this.uplodeimgloader = true;
            var fd = new FormData();
            console.log("fd", e);
            fd.append("file", e.target.files[0]);

            if (this.imageidentifier == 'front') {
              this.productdtl.front = this.frontImage;
              console.log("this.frontImage", this.productdtl.front);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.frontImage = res.path;
                _this7.productdtl.front = _this7.frontImage;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.imageidentifier == 'back') {
              this.productdtl.back = this.back;
              console.log("this.back", this.productdtl.back);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.back = res.path;
                _this7.productdtl.back = _this7.back;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.imageidentifier == 'side') {
              this.productdtl.side = this.side;
              console.log("this.side", this.productdtl.side);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.side = res.path;
                _this7.productdtl.side = _this7.side;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.imageidentifier == 'close') {
              this.productdtl.close = this.close;
              console.log("this.close", this.productdtl.close);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.close = res.path;
                _this7.productdtl.close = _this7.close;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.imageidentifier == 'neck') {
              // this.neck  = reader.result;
              this.productdtl.neck = this.neck;
              console.log("this.neck", this.productdtl.neck);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.neck = res.path;
                _this7.productdtl.neck = _this7.neck;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.imageidentifier == 'image6') {
              // this.neck  = reader.result;
              this.productdtl.image6 = this.image6;
              console.log("this.neck", this.productdtl.image6);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.image6 = res.path;
                _this7.productdtl.image6 = _this7.image6;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.imageidentifier == 'image7') {
              // this.neck  = reader.result;
              this.productdtl.image7 = this.image7;
              console.log("this.neck", this.productdtl.image7);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.image7 = res.path;
                _this7.productdtl.image7 = _this7.image7;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.imageidentifier == 'image8') {
              // this.neck  = reader.result;
              this.productdtl.image8 = this.image8;
              console.log("this.neck", this.productdtl.image8);
              this.http.post("admin/profile/s3/upload", fd).subscribe(function (res) {
                _this7.image8 = res.path;
                _this7.productdtl.image8 = _this7.image8;
                _this7.uplodeimgloader = false;
              }, function (error) {
                console.log("error", error);
                _this7.uplodeimgloader = false;

                _this7.commonUtils.presentToast('error', error.error.message);
              });
            }

            console.log("this.productdtl", this.productdtl);
          }
          /* Image uploading end */

        }, {
          key: "removevalue",
          value: function removevalue(i, val) {
            console.log(val);
            this.standredSOH.splice(i, 1);
            this.selectedList.splice(i, 1);

            for (var j = 0; j < this.mesormentList.length; j++) {
              if (this.mesormentList[j].name == val) {
                if (this.mesormentList[j].disabled == true) this.mesormentList[j].disabled = false;else this.mesormentList[j].disabled = true;
              }
            }
          }
        }, {
          key: "addvalue",
          value: function addvalue() {
            this.standredSOH.push({
              notify: '',
              oos: '',
              sizeType: '',
              soh: ''
            });
          } // add dyenomic fields end
          // hsnSelected start

        }, {
          key: "hsnSelected",
          value: function hsnSelected(hsndata) {
            console.log("hsndata", hsndata);
            this.hsnData = hsndata;

            if (hsndata == undefined) {
              this.productdtl.amount = '';
              this.productdtl.indmrp = '';
              this.productdtl.indealPrice = '';
              this.productdtl.inddiscountType = 'None';
              this.productdtl.inddiscountValue = '';
            }
          } // hsnSelected end

        }, {
          key: "onSubmitDesigproductForm",
          value: function onSubmitDesigproductForm(form) {
            var _this8 = this;

            this.btnloader = true;
            console.log("this.SOH", form.value, this.standredSOH);
            console.log("Len", this.specificationlist.name, this.specificationlist.length);

            for (var index = 0; index < this.specificationlist.length; index++) {
              this.extraSpecifications[this.specificationlist[index].name] = form.value["specificationValue" + index];
              console.log('form.value.specificationValue+index;', form.value["specificationValue" + index]);
              console.log("Len", this.specificationlist[index].name);
            }

            console.log("final objeect is", this.extraSpecifications); // create small objects start

            var age = {
              min: form.value.min,
              max: form.value.max
            };
            var indPrice = {
              dealStart: form.value.indealstart,
              dealEnd: form.value.indealend,
              mrp: form.value.indmrp,
              dealPrice: this.productdtl.indealPrice,
              discountType: form.value.inddiscountType,
              discountValue: form.value.inddiscountValue
            };
            var usPrice = {
              dealStart: form.value.usdealstart,
              dealEnd: form.value.usdealend,
              mrp: form.value.usmrp,
              dealPrice: this.productdtl.usdealPrice,
              discountType: form.value.usdiscountType,
              discountValue: form.value.usdiscountValue
            };
            var purchaseQuantity = {
              purchaseMax: form.value.purchaseMax,
              purchaseMin: form.value.purchaseMin
            };
            var price = {
              indPrice: indPrice,
              usPrice: usPrice
            };
            var giftQnty = {
              IN: form.value.inamount,
              US: form.value.usamount
            };
            var images = [{
              isPrimary: true,
              colour: form.value.colour1,
              name: this.frontImage
            }, {
              name: this.back
            }, {
              name: this.side
            }, {
              name: this.close
            }, {
              name: this.neck
            }, {
              name: this.image6
            }, {
              name: this.image7
            }, {
              name: this.image8
            }]; // create small objects end
            // set boolean value start

            var composition = {
              cotton: form.value.cotton,
              polystar: form.value.polystar
            };
            var specifications = {
              productDetails: form.value.productDetails,
              fittingInformation: form.value.fittingInformation,
              Style: form.value.Style,
              composition: composition,
              washingInformation: form.value.washingInformation
            }; //  var standeredSOH = [
            //   {
            //     notify:form.value.notify,
            //     oos:form.value.oos,
            //     sizeType:form.value.sizeType,
            //     soh:form.value.soh,
            //   }
            //  ]

            var standeredSOH = this.standredSOH; // set boolean value end
            // for()
            // customize for gifiwrap start and main allData object

            if (this.addgift == false) {
              this.allData = {
                categoryId: form.value.categoryId,
                subCategoryId: form.value.subCategoryId,
                designerId: this.userData.designerId,
                designerName: this.userData.designerProfile.firstName1 + ' ' + this.userData.designerProfile.lastName1,
                colour: form.value.colour,
                price: price,
                customizationSOH: form.value.customizationSOH,
                age: age,
                gender: form.value.gender,
                customization: this.customization,
                cod: this.cod,
                giftWrap: this.giftWrap,
                purchaseQuantity: purchaseQuantity,
                priceType: form.value.priceType,
                productDescription: form.value.productDescription,
                productName: form.value.productName,
                taxInclusive: form.value.taxInclusive,
                standeredSOH: standeredSOH,
                taxPercentage: form.value.taxPercentage,
                images: images,
                extraSpecifications: this.extraSpecifications,
                specifications: specifications,
                hsnData: this.hsnData
              };
            } else {
              this.allData = {
                categoryId: form.value.categoryId,
                subCategoryId: form.value.subCategoryId,
                price: price,
                age: age,
                gender: form.value.gender,
                cod: this.cod,
                colour: form.value.colour,
                customizationSOH: form.value.customizationSOH,
                customozation: this.customization,
                giftWrap: this.giftWrap,
                designerId: this.userData.designerId,
                designerName: this.userData.designerProfile.firstName1 + ' ' + this.userData.designerProfile.lastName1,
                purchaseQuantity: purchaseQuantity,
                giftQnty: giftQnty,
                priceType: form.value.priceType,
                productDescription: form.value.productDescription,
                productName: form.value.productName,
                taxInclusive: form.value.taxInclusive,
                taxPercentage: form.value.taxPercentage,
                images: images,
                standeredSOH: standeredSOH,
                specifications: specifications,
                extraSpecifications: this.extraSpecifications,
                hsnData: this.hsnData
              };
            } // ccustomize for gifiwrap end


            console.log("this.allData", this.allData);

            if (this.action == 'add') {
              if (form.value.giftWrap != null) {
                this.giftWrap = form.value.giftWrap;
              }

              if (form.value.customization != null) {
                this.customization = form.value.customization;
              }

              if (form.value.cod != null) {
                this.cod = form.value.cod;
              }

              this.addProductSubcribe = this.http.post('designerProduct/add', this.allData).subscribe(function (res) {
                _this8.btnloader = false;
                form.reset();

                _this8.commonUtils.presentToast('success', res.message);

                _this8.router.navigateByUrl("product-list");
              }, function (error) {
                console.log(error);
                _this8.btnloader = false;

                _this8.commonUtils.presentToast('error', error.error.message);
              });
            } else if (this.action == 'edit') {
              if (form.value.dealEnd == undefined) this.addProductSubcribe = this.http.put('designerProduct/update/' + this.id, this.allData).subscribe(function (res) {
                _this8.btnloader = false; // form.reset();

                _this8.commonUtils.presentToast('success', res.message);

                _this8.router.navigateByUrl("product-list");
              }, function (error) {
                console.log(error);
                _this8.btnloader = false;

                _this8.commonUtils.presentToast('error', error.error.message);
              });
            }
          } // getcategoryList start

        }, {
          key: "getcategoryList",
          value: function getcategoryList() {
            var _this9 = this;

            this.getCategoryListSubscribe = this.http.get("category/getCategoryList").subscribe(function (res) {
              console.log("res", res);
              _this9.categoryslist = res;
            }, function (error) {
              // console.log("error",error);
              _this9.commonUtils.presentToast('error', error.error.message);
            });
          } // getcategoryList end
          // /*------Sale price calculation start------*/
          // salePriceCalculation(discountType,mrp,discountValue,identifier){
          //   // console.log(this.hsnData);
          //   // var mrp = this.hsnData.taxValue * _mrp;
          //   // console.log(mrp);
          //   console.log('discountType', discountType);
          //   console.log('mrp', mrp);
          //   console.log('discountValue', discountValue);
          //   console.log('identifier', identifier);
          //   if(identifier && discountType && mrp){
          //     let salePrice;
          //     let errorPrice;
          //     if(discountType == 'Flat'){
          //       if(mrp > discountValue){
          //         salePrice = (mrp - discountValue);
          //         errorPrice = false;
          //       }else if (discountValue > mrp){
          //         salePrice = 0;
          //         errorPrice = true;
          //       }else {
          //         salePrice = 0;
          //         errorPrice = false;
          //       }
          //       console.log('salePrice', salePrice);
          //       if(identifier == 'indiaPrice'){
          //         this.productdtl.indealPrice = salePrice;
          //           this.productdtl.indealPriceError = errorPrice;
          //       }else {
          //         this.productdtl.usdealPrice = salePrice;
          //           this.productdtl.usdealError = errorPrice;
          //       }
          //     }else  if(discountType == 'Percentage'){
          //       if(mrp > discountValue){
          //         salePrice = mrp - (mrp * (discountValue/100)) ;
          //         errorPrice = false;
          //       }else if(discountValue > mrp){
          //         salePrice = 0;
          //         errorPrice = true;
          //       }else {
          //         salePrice = 0;
          //         errorPrice = false;
          //       }
          //       console.log('salePrice', salePrice);
          //       if(identifier == 'indiaPrice'){
          //         this.productdtl.indealPrice = salePrice;
          //           this.productdtl.indealPriceError = errorPrice;
          //       }else {
          //         this.productdtl.usdealPrice = salePrice;
          //           this.productdtl.usdealError = errorPrice;
          //       }
          //     }else {
          //       if(identifier == 'indiaPrice'){
          //         this.productdtl.indealPrice = mrp;
          //         this.productdtl.inddiscountValue = 0;
          //       }else {
          //         this.productdtl.usdealPrice = mrp;
          //         this.productdtl.usdiscountValue = 0;
          //       }
          //     }
          //   }
          // }
          // /*Sale price calculation end*/

          /*------Sale price calculation start------*/
          // oldmrp;
          // o_mrp

        }, {
          key: "salePriceCalculation",
          value: function salePriceCalculation(amount, discountType, mrp, discountValue, identifier) {
            // indiaPrice start
            if (identifier == 'indiaPrice') {
              console.log(identifier);

              if (this.productdtl.indmrp) {} else {
                this.productdtl.indmrp = amount;
              }

              if (!discountValue) {
                discountValue = 0;
              } else {
                this.productdtl.indealPriceError = false;
              }

              var taxValue = this.hsnData.taxValue * this.productdtl.indmrp;
              this.productdtl.indealPrice = taxValue + this.productdtl.indmrp;

              if (this.productdtl.inddiscountType == 'Flat') {
                // this.productdtl.indmrp = amount;
                this.productdtl.indmrp = amount - discountValue;
                taxValue = this.hsnData.taxValue * this.productdtl.indmrp;
                this.productdtl.indealPrice = taxValue + this.productdtl.indmrp;

                if (discountValue > this.productdtl.amount) {
                  this.productdtl.indealPriceError = true;
                  this.productdtl.indmrp = this.productdtl.amount;
                  this.productdtl.discountValue = 0;
                  taxValue = this.hsnData.taxValue * this.productdtl.indmrp;
                  this.productdtl.indealPrice = taxValue + this.productdtl.amount;
                  console.log(this.productdtl.indealPrice, this.productdtl.discountValue, this.productdtl.indmrp);
                }
              } else if (this.productdtl.inddiscountType == 'Percentage') {
                // this.productdtl.indmrp = amount;
                this.productdtl.indmrp = amount - amount * (discountValue / 100);
                taxValue = this.hsnData.taxValue * this.productdtl.indmrp;
                this.productdtl.indealPrice = taxValue + this.productdtl.indmrp;

                if (discountValue > 100) {
                  this.productdtl.indealPriceError = true;
                  this.productdtl.indmrp = this.productdtl.amount;
                  this.productdtl.discountValue = 0;
                  taxValue = this.hsnData.taxValue * this.productdtl.indmrp;
                  this.productdtl.indealPrice = taxValue + this.productdtl.amount;
                }
              } else if (this.productdtl.inddiscountType == "None") {
                this.productdtl.indmrp = amount;
                taxValue = this.hsnData.taxValue * this.productdtl.indmrp;
                this.productdtl.indealPrice = taxValue + this.productdtl.indmrp;
              }
            } // indiaPrice  end
            // usPrice start
            else if (identifier == 'usPrice') {
              console.log(identifier);

              if (this.productdtl.usmrp) {} else {
                this.productdtl.usmrp = amount;
              }

              if (!discountValue) {
                discountValue = 0;
              } else {
                this.productdtl.usdealPriceError = false;
              }

              var taxValue = this.hsnData.taxValue * this.productdtl.usmrp;
              this.productdtl.usdealPrice = taxValue + this.productdtl.usmrp;

              if (this.productdtl.usdiscountType == 'Flat') {
                // this.productdtl.indmrp = amount;
                this.productdtl.usmrp = amount - discountValue;
                taxValue = this.hsnData.taxValue * this.productdtl.usmrp;
                this.productdtl.usdealPrice = taxValue + this.productdtl.usmrp;

                if (discountValue > this.productdtl.usamount) {
                  this.productdtl.usdealPriceError = true;
                  this.productdtl.usmrp = this.productdtl.usamount;
                  this.productdtl.usdiscountValue = 0;
                  taxValue = this.hsnData.taxValue * this.productdtl.usmrp;
                  this.productdtl.usdealPrice = taxValue + this.productdtl.usamount;
                }
              } else if (this.productdtl.usdiscountType == 'Percentage') {
                // this.productdtl.indmrp = amount;
                this.productdtl.usmrp = amount - amount * (discountValue / 100);
                taxValue = this.hsnData.taxValue * this.productdtl.usmrp;
                this.productdtl.usdealPrice = taxValue + this.productdtl.usmrp;

                if (discountValue > 100) {
                  this.productdtl.usdealPriceError = true;
                  this.productdtl.usmrp = this.productdtl.usamount;
                  this.productdtl.usdiscountValue = 0;
                  taxValue = this.hsnData.taxValue * this.productdtl.usmrp;
                  this.productdtl.usdealPrice = taxValue + this.productdtl.usamount;
                }
              } else if (this.productdtl.usdiscountType == "None") {
                this.productdtl.usmrp = amount;
                taxValue = this.hsnData.taxValue * this.productdtl.usmrp;
                this.productdtl.usdealPrice = taxValue + this.productdtl.usmrp;
              }
            } // usPrice  end


            console.log();
          }
          /*Sale price calculation end*/
          // categorySelected start

        }, {
          key: "categorySelected",
          value: function categorySelected(e, catid, calltype) {
            var _this10 = this;

            console.log('catid', catid, e);
            this.catname = e;

            if (calltype == 'onchange') {
              this.productdtl.subCategoryId = null;
              this.specificationlist = null;
              this.standredSOH = [{}];
              this.mesormentList = [];
              this.selectedList = [];
              this.editextraspecification = false;

              if (catid) {
                this.getSpecification(catid);
                this.getsubCategoryListSubscribe = this.http.get("subcategory/getAllSubcategory/" + catid).subscribe(function (res) {
                  console.log("res", res);
                  _this10.subcategorylist = res;
                }, function (error) {
                  _this10.commonUtils.presentToast('error', error.error.message);
                });
              }
            } else if (calltype == 'onload') {
              console.log("calltype", calltype);

              if (catid) {
                this.getSpecification(catid);
                this.getsubCategoryListSubscribe = this.http.get("subcategory/getAllSubcategory/" + catid).subscribe(function (res) {
                  console.log("res", res);
                  _this10.subcategorylist = res;
                  _this10.save_subcategorylist = res;

                  _this10.getMesormentList('onload');
                }, function (error) {
                  _this10.commonUtils.presentToast('error', error.error.message);
                });
              }
            }

            this.subcategorylist = [];
            this.specificationlist = null; // this.subcategorylist = 
          } // categorySelected end

        }, {
          key: "SubcatSelected",
          value: function SubcatSelected(e, id) {
            console.log(e, id);
            this.subcatname = e;
            this.standredSOH = [{}];
            this.mesormentList = [];
            this.selectedList = [];
            this.getMesormentList('onchange');
          } //getColorList start 

        }, {
          key: "getColorList",
          value: function getColorList() {
            var _this11 = this;

            this.getColorListSubscribe = this.http.get("adminMData/coloreList").subscribe(function (res) {
              console.log("res", res);
              _this11.colourlist = res;
            }, function (error) {
              // console.log("error",error);
              _this11.commonUtils.presentToast('error', error.error.message);
            });
          } //getColorList end
          // selectColor start

        }, {
          key: "selectColor",
          value: function selectColor(val) {
            console.log(val);
          } // selectColor end
          // getMesormentList start

        }, {
          key: "getMesormentList",
          value: function getMesormentList(calltype) {
            var _this12 = this;

            var x, y;
            console.log("this.categoryslistthis.categoryslist", this.categoryslist.length, this.categoryslist, this.productdtl.categoryId, this.save_subcategorylist, this.productdtl.subCategoryId);

            if (calltype == 'onload') {
              for (x = 0; x < this.categoryslist.length; x++) {
                if (this.productdtl.categoryId == this.categoryslist[x].id) {
                  this.catname = this.categoryslist[x].categoryName;
                  console.log("this.catname", this.catname);
                }
              }

              for (y = 0; y < this.save_subcategorylist.length; y++) {
                console.log("this.save_subcategorylist[y].id", this.save_subcategorylist[y].id);

                if (this.productdtl.subCategoryId == this.save_subcategorylist[y].id) {
                  this.subcatname = this.save_subcategorylist[y].categoryName;
                }
              }
            } else if (calltype == 'onchange') {}

            this.getMesormentListSubscribe = this.http.get("productMeasurement/view/" + this.catname + '/' + this.subcatname).subscribe(function (res) {
              console.log("res", res);
              _this12.mesormentList = res.measurementKey;

              _this12.mesormentList.forEach(function (element) {
                element.disabled = false;
              });

              for (var i = 0; i < _this12.selectedList.length; i++) {
                for (var j = 0; j < _this12.mesormentList.length; j++) {
                  if (_this12.mesormentList[j].name == _this12.selectedList[i].sizeType) _this12.mesormentList[j].disabled = true;
                }
              }

              console.log('me', _this12.mesormentList);
            }, function (error) {
              // console.log("error",error);
              _this12.commonUtils.presentToast('error', error.error.message);
            });
          } // getMesormentList end
          // clearfile start

        }, {
          key: "clearfile",
          value: function clearfile(index) {
            console.log("index", index);

            if (index == 'front') {
              this.productdtl.front = null;
              this.frontImage = null;
            } else if (index == 'back') {
              this.back = null;
            } else if (index == 'side') {
              this.side = null;
            } else if (index == 'close') {
              this.close = null;
            } else if (index == 'neck') {
              this.neck = null;
            } else if (index == 'image6') {
              this.image6 = null;
            } else if (index == 'image7') {
              this.image7 = null;
            } else if (index == 'image8') {
              this.image8 = null;
            }

            console.log("index", this.productdtl.images);
          } // clearfile end

        }, {
          key: "ngsel",
          value: function ngsel(id) {
            console.log(id);
          }
        }, {
          key: "setval",
          value: function setval(data) {
            this.setData = data;
          }
        }, {
          key: "toggleDisabled",
          value: function toggleDisabled(val) {
            console.log("val", val, this.selectedList, this.mesormentList, this.mesormentList.length);
            var selector;

            if (val != undefined) {
              console.log("undefined");

              if (val != '') {
                for (var j = 0; j < this.mesormentList.length; j++) {
                  if (this.mesormentList[j].name == val) {
                    if (this.mesormentList[j].disabled == true) this.mesormentList[j].disabled = false;else this.mesormentList[j].disabled = true;
                  }

                  if (this.mesormentList[j].name == this.setData) {
                    if (this.mesormentList[j].disabled == true) this.mesormentList[j].disabled = false;else this.mesormentList[j].disabled = true;
                  }
                }
              }
            }

            console.log("this.selectedList", selector, this.mesormentList); // const mesorment: any = this.mesormentList[1];
            // mesorment.disabled = !mesorment.disabled;
          } // ngOnDestroy start

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.getCategoryListSubscribe !== undefined) {
              this.getCategoryListSubscribe.unsubscribe();
            }

            if (this.getProductByIdSubscribe !== undefined) {
              this.getProductByIdSubscribe.unsubscribe();
            }

            if (this.getsubCategoryListSubscribe !== undefined) {
              this.getsubCategoryListSubscribe.unsubscribe();
            }

            if (this.getSpecificationListSubscribe !== undefined) {
              this.getSpecificationListSubscribe.unsubscribe();
            }

            if (this.addProductSubcribe !== undefined) {
              this.addProductSubcribe.unsubscribe();
            }

            if (this.getDesignerSubcribe !== undefined) {
              this.getDesignerSubcribe.unsubscribe();
            }

            if (this.getColorListSubscribe !== undefined) {
              this.getColorListSubscribe.unsubscribe();
            }

            if (this.getMesormentListSubscribe !== undefined) {
              this.getMesormentListSubscribe.unsubscribe();
            }

            if (this.getHSNListSubscribe !== undefined) {
              this.getHSNListSubscribe.unsubscribe();
            }
          }
        }]);

        return AddDesignerProductPage;
      }();

      _AddDesignerProductPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils
        }];
      };

      _AddDesignerProductPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-designer-product',
        template: _raw_loader_add_designer_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_designer_product_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddDesignerProductPage);
      /***/
    },

    /***/
    95084:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/designer/add-designer-product/add-designer-product.page.scss ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-hint {\n  color: var(--ion-color-danger);\n}\n\n.form-layout .form-wrapper .form-item .custom-file .custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 1.06rem + 2px);\n  padding: 0.53rem 1.3rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #3b3e66;\n  background-color: white;\n  border: 1px solid #d1d2db;\n  border-radius: 0.29rem;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n  width: 76% !important;\n}\n\n.custom-file-designer label {\n  display: grid;\n}\n\n.custom-file-designer label img {\n  margin: auto;\n  margin-bottom: 10px;\n  height: 120px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.custom-file-designer label span {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kZXNpZ25lci1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFFSTtFQUVJLGFBQUE7QUFBUjs7QUFDUTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQVo7O0FBRVE7RUFFSSxrQkFBQTtBQURaIiwiZmlsZSI6ImFkZC1kZXNpZ25lci1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1oaW50IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG4uZm9ybS1sYXlvdXQgLmZvcm0td3JhcHBlciAuZm9ybS1pdGVtIC5jdXN0b20tZmlsZSAuY3VzdG9tLWZpbGUtbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGhlaWdodDogY2FsYygxLjVlbSArIDEuMDZyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZzogMC41M3JlbSAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiByZ2IoNTkgNjIgMTAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA5IDIxMCAyMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yOXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9tLWZpbGUtZGVzaWduZXJcclxue1xyXG4gICAgbGFiZWxcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGltZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    10413:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/designer/add-designer-product/add-designer-product.page.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper\">\r\n      <div class=\"add-designer-product\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                      <div class=\"page-header-left\">\r\n                          <h3>Product\r\n                              <!-- <small>Divatt Admin panel</small> -->\r\n                          </h3>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <ol class=\"breadcrumb float-right\">\r\n                        <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                                <mat-icon>home</mat-icon>\r\n                            </a>\r\n                          </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          Product Management\r\n                        </li>\r\n                        <li class=\"breadcrumb-item active\">\r\n                          {{action}} Product\r\n                        </li>\r\n                    </ol>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-layout\">\r\n          <div class=\"form-wrapper\">\r\n            <div class=\"card-outer\">\r\n              <div class=\"row justify-content-center\" *ngIf=\"loader\"><mat-spinner class=\"form-get-loader\"></mat-spinner></div>\r\n              <div class=\"card card-box\" *ngIf=\"!loader\">\r\n                  <div class=\"card-header\">\r\n                      <div class=\"card-header-tittle\">\r\n                          {{action}} Product\r\n                      </div>\r\n                      <div class=\"card-header-action\">\r\n                      </div>\r\n                  </div>\r\n                  <form action=\"\" #designerproduct=\"ngForm\" (ngSubmit)=\"onSubmitDesigproductForm(designerproduct)\">\r\n                    <div class=\"card-body\">\r\n                      <div class=\"form-wrapper\">\r\n\r\n                        <mat-stepper orientation=\"vertical\" [linear]=\"isLinear\" #stepper>\r\n                          <!-- Product Category -->\r\n                          <mat-step>\r\n                            <ng-template matStepLabel>Product Category</ng-template>\r\n                            <div class=\"mat-stepper-form\">\r\n                              <ion-grid>\r\n                                <ion-row>\r\n                                  <!-- Select Category -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"categoryslist\" \r\n                                              [virtualScroll]=\"true\"\r\n                                              bindLabel=\"categoryName\" \r\n                                              name=\"categoryId\"\r\n                                              placeholder=\"Select Category\"\r\n                                              bindValue=\"id\" \r\n                                              [(ngModel)]=\"productdtl.categoryId\"\r\n                                              (change)=\"categorySelected($event.categoryName,productdtl.categoryId,'onchange')\"\r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Select Category <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Select sub Category -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"subcategorylist\" \r\n                                              bindLabel=\"categoryName\" \r\n                                              name=\"subCategoryId\"\r\n                                              placeholder=\"Select Sub Category\"\r\n                                              bindValue=\"id\" \r\n                                              [(ngModel)]=\"productdtl.subCategoryId\"\r\n                                              (change)=\"SubcatSelected($event.categoryName,productdtl.subCategoryId)\"\r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Select Subcategory <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </div>\r\n                            <!-- <div>\r\n                              <button mat-button matStepperNext>Next</button>\r\n                            </div> -->\r\n                          </mat-step>\r\n                          <!-- Product Details -->\r\n                          <mat-step>\r\n                            <ng-template matStepLabel>Product Details</ng-template>\r\n                            <div class=\"mat-stepper-form\">\r\n                              <!-- <ion-grid> -->\r\n                                <div class=\"row\">\r\n                                  <!-- \r\n                                    <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!close\" alt=\"\"> and Color -->\r\n                                  <div>\r\n                                    <p class=\"text-bold d-flex align-items-center\"><span>Choose images for</span>   <ion-spinner name=\"dots\" class=\"text-primary ml-2\" *ngIf=\"uplodeimgloader\"></ion-spinner></p>\r\n                                  </div>\r\n                                  <!-- Front view -->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      \r\n                                      <div class=\"custom-file-designer\">\r\n                                        \r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadfront\" type=\"file\" name=\"imageUrl\"  accept=\"image/*\" (change)=\"handleInputChange($event,'front')\" required>\r\n                                        <label class=\"\" for=\"singleFileUploadfront\">\r\n                                        <img  [src]=\"productdtl.front!= null ? productdtl.front : 'https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018'\"class=\"uplodeimgpev\"/><span>Front view <sup class=\"text-danger\">*</sup></span> </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"productdtl.front\">\r\n                                        <a (click)=\"clearfile('front')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                      \r\n                                      <!-- <p class=\"mt-1\"><label><input type=\"radio\"  value=\"true\" name=\"isPrimary\"  (change)=\"isprimary('image1',$event.target.checked)\"> Set default</label></p> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- Back view -->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      <div class=\"custom-file-designer\">\r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadback\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event,'back')\">\r\n                                        <label class=\"\" for=\"singleFileUploadback\">\r\n                                        <img [src]=\"back\" class=\"uplodeimgpev\" *ngIf=\"back\"/>\r\n                                        <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!back\" alt=\"\">\r\n                                        <span>Back view</span>  \r\n                                      </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"back\">\r\n                                        <a (click)=\"clearfile('back')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                      <!-- <p class=\"mt-1\"><label><input type=\"radio\"  value=\"true\" name=\"isPrimary\"  (change)=\"isprimary('image1',$event.target.checked)\"> Set default</label></p> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- Side view -->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      <div class=\"custom-file-designer\">\r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadside\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event,'side')\">\r\n                                        <label class=\"\" for=\"singleFileUploadside\">\r\n                                        <img [src]=\"side\" class=\"uplodeimgpev\"  *ngIf=\"side\"/>\r\n                                        <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!side\" alt=\"\">\r\n                                        <span>Side view</span> \r\n                                      </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"side\">\r\n                                        <a (click)=\"clearfile('side')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- Close up shot -->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      <div class=\"custom-file-designer\">\r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadclose\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event,'close')\">\r\n                                        <label class=\"\" for=\"singleFileUploadclose\">\r\n                                        <img [src]=\"close\" class=\"uplodeimgpev\" *ngIf=\"close\"/>\r\n                                        <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!close\" alt=\"\">\r\n                                        <span>Close up shot</span> \r\n                                        </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"close\">\r\n                                        <a (click)=\"clearfile('close')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                      <!-- <p class=\"mt-1\"><label><input type=\"radio\"  value=\"true\" name=\"isPrimary\"  (change)=\"isprimary('image1',$event.target.checked)\"> Set default</label></p> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- Neck design view -->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      <div class=\"custom-file-designer\">\r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadneck\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event,'neck')\">\r\n                                        <label class=\"\" for=\"singleFileUploadneck\">\r\n                                        <img [src]=\"neck\" class=\"uplodeimgpev\" *ngIf=\"neck\"/>\r\n                                        <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!neck\" alt=\"\">\r\n                                        <span>Neck design view</span> \r\n                                        </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"neck\">\r\n                                        <a (click)=\"clearfile('neck')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                      <!-- <p class=\"mt-1\"><label><input type=\"radio\"  value=\"true\" name=\"isPrimary\"  (change)=\"isprimary('image1',$event.target.checked)\"> Set default</label></p> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- More1 image6-->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      <div class=\"custom-file-designer\">\r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadimage6\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event,'image6')\">\r\n                                        <label class=\"\" for=\"singleFileUploadimage6\">\r\n                                        <img [src]=\"image6\" class=\"uplodeimgpev\" *ngIf=\"image6\"/>\r\n                                        <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!image6\" alt=\"\">\r\n                                        <!-- <span>Back view</span>   -->\r\n                                      </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"image6\">\r\n                                        <a (click)=\"clearfile('image6')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                      <!-- <p class=\"mt-1\"><label><input type=\"radio\"  value=\"true\" name=\"isPrimary\"  (change)=\"isprimary('image1',$event.target.checked)\"> Set default</label></p> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- More1 image7-->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      <div class=\"custom-file-designer\">\r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadimage7\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event,'image7')\">\r\n                                        <label class=\"\" for=\"singleFileUploadimage7\">\r\n                                        <img [src]=\"image7\" class=\"uplodeimgpev\" *ngIf=\"image7\"/>\r\n                                        <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!image7\" alt=\"\">\r\n                                        <!-- <span>Back view</span>   -->\r\n                                      </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"image7\">\r\n                                        <a (click)=\"clearfile('image7')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                      <!-- <p class=\"mt-1\"><label><input type=\"radio\"  value=\"true\" name=\"isPrimary\"  (change)=\"isprimary('image1',$event.target.checked)\"> Set default</label></p> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- More1 image8-->\r\n                                  <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\r\n                                    <div class=\"form-item\">\r\n                                      <div class=\"custom-file-designer\">\r\n                                        <input class=\"invisible w-0 h-0\" id=\"singleFileUploadimage8\" type=\"file\" name=\"imageUrl\" accept=\"image/*\" (change)=\"handleInputChange($event,'image8')\">\r\n                                        <label class=\"\" for=\"singleFileUploadimage8\">\r\n                                        <img [src]=\"image8\" class=\"uplodeimgpev\"  *ngIf=\"image8\" />\r\n                                        <img src=\"https://ps.w.org/kama-thumbnail/assets/icon-256x256.png?rev=1627018\" *ngIf=\"!image8\" alt=\"\">\r\n                                        <!-- <span>Back view</span>   -->\r\n                                      </label>\r\n                                      </div>\r\n                                      <p class=\"text-center\" *ngIf=\"image8\">\r\n                                        <a (click)=\"clearfile('image8')\" class=\"cursor-pointer\">\r\n                                          <mat-icon class=\"text-danger\">clear</mat-icon>\r\n                                        </a>\r\n                                      </p>\r\n                                      <!-- <p class=\"mt-1\"><label><input type=\"radio\"  value=\"true\" name=\"isPrimary\"  (change)=\"isprimary('image1',$event.target.checked)\"> Set default</label></p> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                 \r\n                              <!-- </ion-grid> -->\r\n                              <ion-grid>\r\n                                <ion-row>\r\n                                  <!-- Product Name -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Product Name</mat-label>\r\n                                        <textarea matInput [(ngModel)]=\"productdtl.productName\" name=\"productName\" required rows=\"4\"></textarea>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Product Descption -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Product Descption</mat-label>\r\n                                        <textarea matInput placeholder=\"Fill some details about the product\" [(ngModel)]=\"productdtl.productDescription\" name=\"productDescription\" required rows=\"4\"></textarea>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  \r\n                                  <!-- Min Age -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Min Age</mat-label>\r\n                                        <input matInput type=\"number\" min=\"0\" max=\"99\" name=\"min\" [(ngModel)]=\"productdtl.min\" onKeyPress=\"if(this.value.length == 2) return false;\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Max Age -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Max Age</mat-label>\r\n                                        <input matInput type=\"number\" min=\"1\" max=\"99\" onKeyPress=\"if(this.value.length == 2) return false;\" name=\"max\" [(ngModel)]=\"productdtl.max\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Purchase Min -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Purchase min quantity</mat-label>\r\n                                        <input matInput type=\"number\" min=\"0\"   name=\"purchaseMin\" [(ngModel)]=\"productdtl.purchaseMin\"/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Purchase Max -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Purchase max quantity</mat-label>\r\n                                        <input matInput type=\"number\" min=\"0\"   name=\"purchaseMax\" [(ngModel)]=\"productdtl.purchaseMax\"/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!--  Gender:  -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"genderList\" \r\n                                              bindLabel=\"name\" \r\n                                              name=\"gender\"\r\n                                              placeholder=\"Select Gender\"\r\n                                              bindValue=\"name\" \r\n                                              [(ngModel)]=\"productdtl.gender\"\r\n                                              (change)=\"ngsel(productdtl.gender)\"\r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Select Gender <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <!-- <ng-select [items]=\"colourlist\" \r\n                                              bindLabel=\"name\" \r\n                                              name=\"colour1\"\r\n                                              placeholder=\"Select Colour\"\r\n                                              bindValue=\"name\" \r\n                                              [(ngModel)]=\"productdtl.colour\" \r\n                                              (change)=\"ngsel(productdtl.colour)\"\r\n                                              required>\r\n                                      </ng-select> -->\r\n                                      <ng-select [items]=\"colourlist\" \r\n                                              bindLabel=\"colorName\" \r\n                                              name=\"colour1\"\r\n                                              placeholder=\"Select Colour\"\r\n                                              bindValue=\"colorValue\" \r\n                                              [(ngModel)]=\"productdtl.colour\" \r\n                                              (change)=\"selectColor($event)\"\r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Select Colour <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </div>\r\n                            <!-- <div>\r\n                              <button mat-button matStepperNext>Next</button>\r\n                            </div> -->\r\n                          </mat-step>\r\n                          <!-- Product Description -->\r\n                          <mat-step>\r\n                            <ng-template matStepLabel>Product Specifications</ng-template>\r\n                            <div class=\"mat-stepper-form\">\r\n                              <ion-grid>\r\n                                <ion-row>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <p class=\"text-bold\">Others Description</p>\r\n                                  </ion-col>\r\n                                  <!-- Product Details -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Product Details</mat-label>\r\n                                        <textarea matInput type=\"text\" [(ngModel)]=\"productdtl.productDetails\" name=\"productDetails\" required rows=\"4\"></textarea>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Fitting Information -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Fitting Information</mat-label>\r\n                                        <textarea matInput type=\"text\" [(ngModel)]=\"productdtl.fittingInformation\" name=\"fittingInformation\" required rows=\"4\"></textarea>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Style -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Occassion</mat-label>\r\n                                        <input matInput type=\"text\" [(ngModel)]=\"productdtl.Style\" name=\"Style\"/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  \r\n                                </ion-row>\r\n                                <ion-row>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <p class=\"text-bold\">Composition</p>\r\n                                  </ion-col>\r\n                                  <!-- Cotton -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Cotton</mat-label>\r\n                                        <input matInput type=\"text\" [(ngModel)]=\"productdtl.cotton\" name=\"cotton\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Polystar -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Polystar</mat-label>\r\n                                        <input matInput type=\"text\" [(ngModel)]=\"productdtl.polystar\" name=\"polystar\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Washing Information -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Washing Information</mat-label>\r\n                                        <input matInput type=\"text\" [(ngModel)]=\"productdtl.washingInformation\" name=\"washingInformation\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <!-- <ion-row>\r\n                                  <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <p class=\"text-bold\">Add Extra Specifications</p>\r\n                                  </ion-col>\r\n                                  <ion-col size-xs=\"6\" size-sm=\"6\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <div class=\"text-right\">\r\n                                      <ion-button (click)=\"addField()\" class=\"custom-btn\">\r\n                                        Add\r\n                                      </ion-button>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngFor=\"let field of fields; let i = index;\">\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"5\"  size-lg=\"5\">\r\n                                    <div class=\"form-group d-flex align-items-center\">\r\n                                    \r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Specifications Name {{i + 1}}</mat-label>\r\n                                        <input matInput  [(ngModel)]=\"field.key\"   type=\"text\" name=\"key{{i}}\" />\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"5\"  size-lg=\"5\">\r\n                                    <div class=\"form-group d-flex align-items-center\">\r\n                                    \r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Specifications {{i + 1}}</mat-label>\r\n                                        <input matInput  [(ngModel)]=\"field.value\"   type=\"text\" name=\"value{{i}}\" />\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"2\"  size-lg=\"2\">\r\n                                    <div class=\"d-flex align-items-center justify-content-center pt-2\">\r\n                                      <a (click)=\"removeField(i)\" class=\"text-danger btn btn-default\"  matTooltip=\"Remove Item\"\r\n                                      matTooltipClass=\"bg-danger\"><mat-icon>delete</mat-icon></a>\r\n                                    </div>\r\n                                    \r\n                                  </ion-col>\r\n                                </ion-row> -->\r\n                              </ion-grid>\r\n                            </div>\r\n                            <!-- <div>\r\n                              <button mat-button matStepperNext>Next</button>\r\n                            </div> -->\r\n                          </mat-step>\r\n                          <!-- Product Specification -->\r\n                          <mat-step>\r\n                            <ng-template matStepLabel>Product Extra Specification</ng-template>\r\n                            <div class=\"mat-stepper-form\">\r\n                              <ion-grid *ngIf=\"editextraspecification\">\r\n                                <p class=\"ion-text-center\" *ngIf=\"!specificationlist\">Please choose category first</p>\r\n                                <ion-row *ngFor=\"let itemSpc of specificationlist; let i = index; let first = first;\">\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <p class=\"text-bold\">{{itemSpc?.name}}</p>\r\n                                    <input type=\"hidden\" name=\"specificationKey{{i}}\" [(ngModel)] = \"itemSpc.name\">\r\n                                  </ion-col>\r\n                                  <!-- Select option -->\r\n                                  <ion-col *ngIf=\"itemSpc.type == 'select'\" size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"itemSpc.option\" \r\n                                              bindLabel=\"name\" \r\n                                              name=\"specificationValue{{i}}\"\r\n                                              placeholder=\"Select Category\"\r\n                                              bindValue=\"name\" \r\n                                              [(ngModel)]=\"productdtl.extraSpecificationsvalue[i]\"\r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Select {{itemSpc?.name}} <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n\r\n                                  <!-- Select option -->\r\n                                  <ion-col *ngIf=\"itemSpc.type == 'input'\" size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Fill the {{itemSpc?.name}}</mat-label>\r\n                                        <input matInput [(ngModel)]=\"productdtl.extraSpecificationsvalue[i]\" name=\"specificationValue{{i}}\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                              <ion-grid *ngIf=\"!editextraspecification\">\r\n                                <p class=\"ion-text-center\" *ngIf=\"!specificationlist\">Please choose category first</p>\r\n                                <ion-row *ngFor=\"let itemSpc of specificationlist; let i = index; let first = first;\">\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <p class=\"text-bold\">{{itemSpc?.name}}</p>\r\n                                    <input type=\"hidden\" name=\"specificationKey{{i}}\" [(ngModel)] = \"itemSpc.name\">\r\n                                  </ion-col>\r\n                                  <!-- Select option -->\r\n                                  <ion-col *ngIf=\"itemSpc.type == 'select'\" size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"itemSpc.option\" \r\n                                              bindLabel=\"name\" \r\n                                              name=\"specificationValue{{i}}\"\r\n                                              placeholder=\"Select Category\"\r\n                                              bindValue=\"name\" \r\n                                              ngModel\r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Select {{itemSpc?.name}} <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n\r\n                                  <!-- Select option -->\r\n                                  <ion-col *ngIf=\"itemSpc.type == 'input'\" size-xs=\"12\" size-sm=\"12\" size-md=\"6\"  size-lg=\"6\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Fill the {{itemSpc?.name}}</mat-label>\r\n                                        <input matInput ngModel name=\"specificationValue{{i}}\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </ion-grid>\r\n                            </div>\r\n                            <!-- <div>\r\n                              <button mat-button matStepperNext>Next</button>\r\n                            </div> -->\r\n                          </mat-step>\r\n                          <!-- Product Stock & Pricing -->\r\n                          <mat-step>\r\n                            <ng-template matStepLabel>Product Stock & Pricing</ng-template>\r\n                            <div class=\"mat-stepper-form\">\r\n                              <ion-grid>\r\n                                <ion-row>\r\n                                <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"toggle-button\">\r\n                                      <ion-label>Customization : </ion-label>\r\n                                      <ion-label>\r\n                                          <p class=\"onoff\"><input type=\"checkbox\" value=\"true\" id=\"customization\" name=\"customization\" [(ngModel)]=\"productdtl.customization\"><label for=\"customization\"></label></p>\r\n                                      </ion-label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Gift Wrap:  -->\r\n                                  <!-- <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"form-group  d-flex mt-2 radioBox\">\r\n                                      Gift Wrap: \r\n                                      <div class=\"ml-1 d-flex\">\r\n                                        <label for=\"\" class=\"d-flex align-items-center\"><input type=\"radio\" name=\"giftWrap\" value=true [(ngModel)]=\"productdtl.giftWrap\" (change)=\"onGifiSelect($event.target.value)\"><span>&nbsp;Yes&nbsp;</span></label>\r\n                                        <label for=\"\" class=\"d-flex align-items-center\"><input type=\"radio\" name=\"giftWrap\" value=false [(ngModel)]=\"productdtl.giftWrap\" (change)=\"onGifiSelect($event.target.value)\"><span>&nbsp;No</span></label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </ion-col> -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"toggle-button\">\r\n                                      <ion-label>Gift Wrap: </ion-label>\r\n                                      <ion-label>\r\n                                          <p class=\"onoff\"><input type=\"checkbox\" value=\"true\" id=\"giftWrap\" name=\"giftWrap\" [(ngModel)]=\"productdtl.giftWrap\" (change)=\"onGifiSelect(productdtl.giftWrap)\"><label for=\"giftWrap\"></label></p>\r\n                                      </ion-label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Cash on Delivery:  -->\r\n                                  <!-- <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\">\r\n                                    <div class=\"form-group d-flex mt-2 radioBox\">\r\n                                      Cash on Delivery: \r\n                                      <div class=\"ml-1 d-flex\">\r\n                                        <label for=\"\" class=\"d-flex align-items-center\"><input type=\"radio\" name=\"cod\" value=\"true\"  [(ngModel)]=\"productdtl.cod\"><span>&nbsp;Yes&nbsp;</span></label>\r\n                                        <label for=\"\" class=\"d-flex align-items-center\"><input type=\"radio\" name=\"cod\" value=\"false\" [(ngModel)]=\"productdtl.cod\"><span>&nbsp;No</span></label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </ion-col> -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"3\" *ngIf=\"!productdtl.customization\">\r\n                                    <div class=\"toggle-button\">\r\n                                      <ion-label>Cash on Delivery: </ion-label>\r\n                                      <ion-label>\r\n                                          <p class=\"onoff\"><input type=\"checkbox\" value=\"true\" id=\"cod\" name=\"cod\" [(ngModel)]=\"productdtl.cod\"><label for=\"cod\"></label></p>\r\n                                      </ion-label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Gift Wrap inamount -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\" *ngIf=\"productdtl.giftWrap == true\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Gift Wrap Indian amount(₹)</mat-label>\r\n                                        <input matInput [(ngModel)]=\"productdtl.inamount\" min=\"1\"  type=\"number\" name=\"inamount\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Gift Wrap usamount -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\" *ngIf=\"productdtl.giftWrap == true\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Gift Wrap US amount($)</mat-label>\r\n                                        <input matInput [(ngModel)]=\"productdtl.usamount\"  min=\"1\" type=\"number\" name=\"usamount\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Select Price Type -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"pricetyplist\" \r\n                                              bindLabel=\"name\" \r\n                                              name=\"priceType\"\r\n                                              placeholder=\"Select Price Type\"\r\n                                              bindValue=\"name\" \r\n                                              [(ngModel)]=\"productdtl.priceType\"\r\n                                              (change)=\"ngsel(productdtl.categoryId)\"\r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Select Price Type </label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Select HSN -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"HSNlist\" \r\n                                              bindLabel=\"hsnCode\" \r\n                                              name=\"hsnData\"\r\n                                              placeholder=\"Select HSN\"\r\n                                              bindValue=\"hsnCode\" \r\n                                              [searchable]=\"false\"\r\n                                              [searchFn]=\"testSearch\"\r\n                                              [(ngModel)]=\"productdtl.hsnData\"\r\n                                              (change)=\"hsnSelected($event)\"\r\n                                              required>\r\n                                              <ng-template ng-header-tmp>\r\n                                                <input  type=\"text\" class=\"form-control\" placeholder=\"Search\" (input)=\"getHSNlist($event.target.value)\"\r\n      />\r\n                                              </ng-template>\r\n                                              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\r\n                                                {{item.hsnCode}}&nbsp;/&nbsp;{{item.description}}&nbsp;/&nbsp;{{item.taxValue}}\r\n                                              </ng-template>\r\n                                              <ng-template ng-label-tmp let-item=\"item\">\r\n                                                  {{item.hsnCode}}&nbsp;/&nbsp;{{item.description}}&nbsp;/&nbsp;{{item.taxValue}}\r\n                                            </ng-template>\r\n                                      </ng-select>\r\n                                      <label>Select HSN </label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\" *ngIf=\"hsnData\">\r\n                                    <p class=\"mt-3\">HSN Tax Value : {{hsnData?.taxValue}}</p>\r\n                                  </ion-col>\r\n                                  <!-- Tax Percentage -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\" *ngIf=\"productdtl.priceType == 'Inclusive Tax'\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Tax Percentage</mat-label>\r\n                                        <input matInput [(ngModel)]=\"productdtl.taxPercentage\"  min=\"0\"  type=\"number\" name=\"taxPercentage\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- In Indian Price -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <p class=\"text-bold\">In Indian Price (₹)</p>\r\n                                  </ion-col>\r\n                                  <!-- Amount -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Amount</mat-label>\r\n                                        <input matInput placeholder=\"Enter Product Amount\" type=\"number\"  min=\"0\" [(ngModel)]=\"productdtl.amount\" name=\"amount\" (keyup)=\"salePriceCalculation(productdtl.amount,productdtl.inddiscountType, productdtl.indmrp, productdtl.inddiscountValue, 'indiaPrice')\" (change)=\"salePriceCalculation(productdtl.amount,productdtl.inddiscountType, productdtl.indmrp, productdtl.inddiscountValue, 'indiaPrice')\" required [disabled]=\"!productdtl.hsnData\"/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- MRP -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>MRP</mat-label>\r\n                                        <input matInput type=\"number\"  min=\"0\" [(ngModel)]=\"productdtl.indmrp\" name=\"indmrp\" (change)=\"salePriceCalculation(productdtl.amount,productdtl.inddiscountType, productdtl.indmrp, productdtl.inddiscountValue, 'indiaPrice')\" required readonly/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Sale Price -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Sale Price</mat-label>\r\n                                        <input matInput readonly type=\"number\"  min=\"0\" [(ngModel)]=\"productdtl.indealPrice\" name=\"indealPrice\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Select Discount Type -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"discountTypelist\" \r\n                                              bindLabel=\"name\" \r\n                                              name=\"inddiscountType\"\r\n                                              placeholder=\"Select Discount Type\"\r\n                                              bindValue=\"name\" \r\n                                              [(ngModel)]=\"productdtl.inddiscountType\"\r\n                                              (change)=\"salePriceCalculation(productdtl.amount,productdtl.inddiscountType, productdtl.indmrp, productdtl.inddiscountValue, 'indiaPrice')\"\r\n                                              required >\r\n                                      </ng-select>\r\n                                      <label>Select Discount Type <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Discount Value -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Discount Value <span *ngIf=\"productdtl.inddiscountType == 'Flat'\">in price</span><span *ngIf=\"productdtl.inddiscountType == 'Percentage'\">in Percentage</span></mat-label>\r\n                                        <input [disabled]=\"productdtl.inddiscountType == 'None'\"  min=\"0\" matInput type=\"number\" [(ngModel)]=\"productdtl.inddiscountValue\" name=\"inddiscountValue\" (keyup)=\"salePriceCalculation(productdtl.amount,productdtl.inddiscountType, productdtl.indmrp, productdtl.inddiscountValue, 'indiaPrice')\" required/>\r\n                                        <mat-hint *ngIf=\"productdtl.indealPriceError == true\">\r\n                                          Discount Value is <strong>Higher</strong> than MRP.\r\n                                        </mat-hint>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  \r\n                                  <!-- Deal Start Form -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Deal Start Form</mat-label>\r\n                                        <input matInput type=\"date\" [(ngModel)]=\"productdtl.indeal_start\" name=\"indeal_start\"\r\n                                        (change)=\"changeDateFormat('indealstart',productdtl.indeal_start)\" required>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <input type=\"hidden\" name=\"indealstart\" [(ngModel)]=\"productdtl.indealstart\" required>\r\n                                  <!-- Deal end to -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Deal End to</mat-label>\r\n                                        <input matInput type=\"date\" [(ngModel)]=\"productdtl.indeal_end\" name=\"indeal_end\"\r\n                                        (change)=\"changeDateFormat('indealend',productdtl.indeal_end)\" required>\r\n                                        \r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <input type=\"hidden\" name=\"indealend\" [(ngModel)]=\"productdtl.indealend\">\r\n                                  <!-- Us price Start -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <p class=\"text-bold\">In US Price ($)</p>\r\n                                  </ion-col>\r\n                                  <!-- Amount -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Amount</mat-label>\r\n                                        <input matInput placeholder=\"Enter Product Amount\" type=\"number\"  min=\"0\" [(ngModel)]=\"productdtl.usamount\" name=\"usamount\" (keyup)=\"salePriceCalculation(productdtl.usamount,productdtl.usdiscountType, productdtl.usmrp, productdtl.usdiscountValue, 'usPrice')\" (change)=\"salePriceCalculation(productdtl.usamount,productdtl.usdiscountType, productdtl.usmrp, productdtl.usdiscountValue, 'usPrice')\" required [disabled]=\"!productdtl.hsnData\"/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- MRP -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>MRP</mat-label>\r\n                                        <input matInput type=\"number\"  min=\"0\" [(ngModel)]=\"productdtl.usmrp\" name=\"usmrp\" (change)=\"salePriceCalculation(productdtl.usamount,productdtl.usdiscountType, productdtl.usmrp, productdtl.usdiscountValue, 'usPrice')\" required readonly/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Sale Price -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Sale Price</mat-label>\r\n                                        <input matInput readonly type=\"number\"  min=\"0\" [(ngModel)]=\"productdtl.usdealPrice\" name=\"usdealPrice\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Select Discount Type -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"discountTypelist\" \r\n                                              bindLabel=\"name\" \r\n                                              name=\"usdiscountType\"\r\n                                              placeholder=\"Select Discount Type\"\r\n                                              bindValue=\"name\" \r\n                                              [(ngModel)]=\"productdtl.usdiscountType\"\r\n                                              (change)=\"salePriceCalculation(productdtl.usamount,productdtl.usdiscountType, productdtl.usmrp, productdtl.usdiscountValue, 'usPrice')\"\r\n                                              required >\r\n                                      </ng-select>\r\n                                      <label>Select Discount Type <sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Discount Value -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"3\" size-md=\"3\"  size-lg=\"3\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Discount Value <span *ngIf=\"productdtl.usdiscountType == 'Flat'\">in price</span><span *ngIf=\"productdtl.usdiscountType == 'Percentage'\">in Percentage</span></mat-label>\r\n                                        <input [disabled]=\"productdtl.usdiscountType == 'None'\"  min=\"0\" matInput type=\"number\" [(ngModel)]=\"productdtl.usdiscountValue\" name=\"usdiscountValue\" (keyup)=\"salePriceCalculation(productdtl.usamount,productdtl.usdiscountType, productdtl.usmrp, productdtl.usdiscountValue, 'usPrice')\" required/>\r\n                                        <mat-hint *ngIf=\"productdtl.usdealPriceError == true\">\r\n                                          Discount Value is <strong>Higher</strong> than MRP.\r\n                                        </mat-hint>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- Deal Start Form -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Deal Start Form</mat-label>\r\n                                        <input matInput type=\"date\" [(ngModel)]=\"productdtl.usdeal_start\" name=\"usdeal_start\"\r\n                                        (change)=\"changeDateFormat('usdealstart',productdtl.usdeal_start)\" required>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <input type=\"hidden\" name=\"usdealstart\" [(ngModel)]=\"productdtl.usdealstart\">\r\n                                  <!-- Deal end to -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Deal End to</mat-label>\r\n                                        <input matInput type=\"date\" [(ngModel)]=\"productdtl.usdeal_end\" name=\"usdeal_end\"\r\n                                        (change)=\"changeDateFormat('usdealend',productdtl.usdeal_end)\" required>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <input type=\"hidden\" name=\"usdealend\" [(ngModel)]=\"productdtl.usdealend\">\r\n                                  <!-- Customization SOH -->\r\n                                 </ion-row>\r\n                                 <ion-row>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <p class=\"text-bold\">Customization SOH</p>\r\n                                  </ion-col>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label>Customization SOH</mat-label>\r\n                                        <input matInput type=\"number\"  min=\"0\" [(ngModel)]=\"productdtl.customizationSOH\" name=\"customizationSOH\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                               </ion-row>\r\n                                <!-- standeredSOH start -->\r\n                                <!-- <ion-row>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <p class=\"text-bold\">Standered SOH</p>\r\n                                  </ion-col>\r\n                                  notify\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Notify</mat-label>\r\n                                        <input matInput min=\"0\" type=\"number\" [(ngModel)]=\"productdtl.notify\" name=\"notify\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  oos\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> OOS</mat-label>\r\n                                        <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"productdtl.oos\" name=\"oos\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  sizeType\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <ng-select [items]=\"mesormentList\" \r\n                                              bindLabel=\"name\" \r\n                                              [(ngModel)]=\"productdtl.sizeType\" name=\"sizeType\"\r\n                                              placeholder=\"Select Size Type\"\r\n                                              bindValue=\"name\" \r\n                                              required>\r\n                                      </ng-select>\r\n                                      <label>Size Type<sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  soh\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> SOH</mat-label>\r\n                                        <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"productdtl.soh\" name=\"soh\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                standeredSOH end -->\r\n                                <!-- standeredSOH start -->\r\n                                <ion-row>\r\n                                  <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\"  size-lg=\"12\">\r\n                                    <!-- <p class=\"text-bold\">Standered SOH</p> -->\r\n                                    <div class=\"d-flex align-items-center\">\r\n                                      <span class=\"text-dark font-weight-bold h4 mb-0 mr-2\">Standered SOH</span>\r\n                                    <ion-button class=\"custom-btn\"  (click)=\"addvalue()\">\r\n                                      <mat-icon>add</mat-icon>\r\n                                    </ion-button>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <ion-row *ngFor=\"let value of standredSOH; let i = index\">\r\n                                  <!-- notify -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> Notify</mat-label>\r\n                                        <input matInput min=\"0\" type=\"number\" [(ngModel)]=\"value.notify\" name=\"notify{{i}}\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- oos -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> OOS</mat-label>\r\n                                        <input matInput type=\"number\" min=\"0\"  [(ngModel)]=\"value.oos\" name=\"oos{{i}}\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- sizeType -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-item ngsel\">\r\n                                      <!-- <ng-select [items]=\"mesormentList\" \r\n                                              bindLabel=\"name\" \r\n                                              [(ngModel)]=\"value.sizeType\" name=\"sizeType{{i}}\"\r\n                                              placeholder=\"Select Size Type\"\r\n                                              bindValue=\"name\" \r\n                                              required>\r\n                                      </ng-select> -->\r\n                                      <ng-select\r\n                                              [(ngModel)]=\"value.sizeType\" name=\"sizeType{{i}}\"\r\n                                              placeholder=\"Select Size Type\"\r\n                                              appendTo=\"body\"\r\n                                              (change)=\"toggleDisabled(value.sizeType)\"\r\n                                              (click)=\"setval(value.sizeType)\"\r\n                                              required>\r\n                                              <ng-option *ngFor=\"let mesorment of mesormentList;let i = index\" [value]=\"mesorment.name\"  [disabled]=\"mesorment.disabled\" >{{mesorment.name}}</ng-option>\r\n                                      </ng-select>\r\n                                      <label>Size Type<sup>*</sup></label>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <!-- soh -->\r\n                                  <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\"  size-lg=\"4\">\r\n                                    <div class=\"form-group\">\r\n                                      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n                                        <mat-label> SOH</mat-label>\r\n                                        <input matInput type=\"number\" min=\"0\" [(ngModel)]=\"value.soh\" name=\"soh{{i}}\" required/>\r\n                                      </mat-form-field>\r\n                                    </div>\r\n                                  </ion-col>\r\n                                  <ion-col>\r\n                                    <ion-button color=\"danger\" [ngClass]=\"{'disabled' : standredSOH.length < 2}\" (click)=\"removevalue(i,value.sizeType)\" class=\"mt-2\">\r\n                                      <mat-icon>cancel</mat-icon>\r\n                                    </ion-button>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <!-- standeredSOH end -->\r\n                              </ion-grid>\r\n                            </div>\r\n                            <!-- <div>\r\n                              <button mat-button matStepperNext>Next</button>\r\n                            </div> -->\r\n                          </mat-step>\r\n                          <mat-step>\r\n                            <ng-template matStepLabel>Done</ng-template>\r\n                            <p *ngIf=\"frontImage != ''\" >You are now done.</p>\r\n                            <div><p *ngIf=\"frontImage == ''\" class=\"text-danger mt-2\">Please choose one image.</p></div>\r\n                            <div class=\"card-footer\">\r\n                              \r\n                              <div>\r\n                                <ion-button class=\"custom-btn\" type=\"submit\" [disabled]=\"!designerproduct.valid || frontImage == null\">\r\n                                   <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\" ></ion-spinner>\r\n                                  Save \r\n                                </ion-button>\r\n                                <!-- <ion-button class=\"custom-btn\" type=\"submit\">\r\n                                  <ion-spinner *ngIf=\"btnloader\" slot=\"start\" name=\"crescent\" ></ion-spinner>\r\n                                  Save \r\n                                </ion-button> -->\r\n                                <ion-button color=\"danger\" [routerLink]=\"['/','product-list']\">\r\n                                  Cancel\r\n                                </ion-button>\r\n                              </div>\r\n                            </div>\r\n                          </mat-step>\r\n                        </mat-stepper>\r\n\r\n                      </div>\r\n                    </div>\r\n                    \r\n                  </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- common footer show -->\r\n<common-footer></common-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_designer_add-designer-product_add-designer-product_module_ts-es5.js.map