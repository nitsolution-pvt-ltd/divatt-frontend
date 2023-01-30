(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 41474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": function() { return /* binding */ ProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 64629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 88558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": function() { return /* binding */ ProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 41474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 64629);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 64629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 79291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common-utils/common-utils */ 83914);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.page */ 58167);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);











let ProfilePage = class ProfilePage {
    constructor(menuCtrl, http, modalController, alertController, commonUtils, router, storage) {
        this.menuCtrl = menuCtrl;
        this.http = http;
        this.modalController = modalController;
        this.alertController = alertController;
        this.commonUtils = commonUtils;
        this.router = router;
        this.storage = storage;
        this.designerprofiledata = {};
        this.adminprofiledata = {};
        this.showmoreLess = false;
        this.showmore = false;
        this.showmore1 = false;
        this.edit = false;
        // uplodeProfilepic end
        // uplodeProfilepicDesigner start
        this.choseFilePath = {};
        this.formBtn = false;
    }
    ngOnInit() {
        this.commonFunction();
    }
    commonFunction() {
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            console.log('User ID', val.uid);
            if (val.authority == 'DESIGNER') {
                // this.getDesignerProfiledata(val.authority,val.username)
                this.getDesignerProfiledata(val.uid);
                this.getProfileData = this.http.get("designer/countData/" + val.uid).subscribe((res) => {
                    this.followers = res.FollowersData;
                }, (error) => {
                });
            }
            else if (val.authority == 'ADMIN') {
                this.getAdminProfiledata(val.authority, val.username);
            }
            this.uid = val.uid;
            this.role = val.authority;
            this.username = val.username;
            console.log("Role", this.role);
        });
    }
    // getDesignerProfiledata start
    getDesignerProfiledata(uid) {
        this.getProfileData = this.http.get("designer/" + uid).subscribe((res) => {
            this.formBtn = false;
            this.designerprofiledata = res;
            this.designerprofiledata.dob = moment__WEBPACK_IMPORTED_MODULE_4__(res.designerProfile.dob).format('YYYY-MM-DD');
            console.log("this.modalDate", this.designerprofiledata.designerProfile.dob);
            console.log("profiledata", this.designerprofiledata);
            if (this.designerprofiledata == null) {
                // this.show = false;
                this.edit = false;
            }
            else {
                this.active = true;
            }
            console.log("profiledata", this.designerprofiledata);
            console.log("this.modalDate");
        }, (error) => {
            this.formBtn = true;
            console.log("error", error);
            this.show = false;
            this.edit = false;
        });
    }
    // getDesignerProfiledata end
    // getAdminProfiledata start
    getAdminProfiledata(role, username) {
        console.log("auth/info/");
        this.getProfileData = this.http.get("auth/info/" + role + "/" + username).subscribe((res) => {
            this.formBtn = false;
            if (this.adminprofiledata == null) {
                // this.show = false;
                this.edit = false;
            }
            else {
                this.active = true;
            }
            this.adminprofiledata = res;
            this.adminDob = res === null || res === void 0 ? void 0 : res.dob;
            console.log("profiledata", this.adminprofiledata);
            console.log("this.modalDate", this.adminprofiledata.dob);
        }, (error) => {
            this.formBtn = true;
            console.log("error", error);
            this.show = false;
            this.edit = false;
        });
    }
    // getAdminProfiledata end
    // chooseFile
    chooseFile(_identifier, image) {
        var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        // if (!allowedExtensions.exec(image)) {
        //   // alert('Invalid file type');
        //   this.commonUtils.presentToast("error","Invalid file type. Only JPG,PNG,JPEG file is allowed.")
        //   // fileInput.value = '';
        //   return false;
        // }else{
        if (image.target.files[0] != undefined) {
            this.imageLoader = true;
            var fd = new FormData();
            fd.append("file", image.target.files[0]);
            this.http.post("admin/profile/s3/upload", fd).subscribe((res) => {
                this.storage.set('profileImageData', {
                    'profileImgpath': res.path,
                });
                this.storage.get('profileImageData').then((val) => {
                    console.log('User IDprofileImgpath', val);
                });
                console.log();
                if (_identifier == 'DESIGNER') {
                    this.designerprofiledata.designerProfile.profilePic = res.path;
                    this.uplodeProfilepicDesigner();
                }
                else if (_identifier == 'ADMIN') {
                    this.adminprofiledata.profilePic = res.path;
                    this.uplodeProfilepicAdmin();
                }
                this.imageLoader = false;
            }, (error) => {
                console.log("error", error);
                this.commonUtils.presentToast('error', error.error.message);
                this.imageLoader = false;
            });
        }
        // }
        // console.log('image',image.target.files[0]);
    }
    // chooseFile
    // uplodeProfilepic start
    uplodeProfilepicAdmin() {
        this.profileupdateSubcribe = this.http.put('admin/profile/update', this.adminprofiledata).subscribe((res) => {
            console.log("resres0", res);
            this.commonUtils.presentToast('success', res.message);
            // var imgpath = 
            this.imageLoader = false;
        }, error => {
            // console.log("error",error);
            this.commonUtils.presentToast('error', error.error.message);
        });
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            console.log('User ID', val.uid);
            this.getAdminProfiledata(val.authority, val.username);
        });
        console.log("this.adminprofiledata.profilepic", this.adminprofiledata.profilepic);
        // this.commonUtils.presentToast('success', res.message);
    }
    uplodeProfilepicDesigner() {
        this.profileupdateSubcribe = this.http.put('designer/profile/update', this.designerprofiledata).subscribe((res) => {
            this.imageLoader = false;
            console.log("XYZ", res);
            this.commonUtils.presentToast('success', res.message);
            this.profileimgpath = res.designerProfile.profilePic;
        }, error => {
            // console.log("error",error);
            this.commonUtils.presentToast('error', error.error.message);
        });
        this.storage.get('setStroageGlobalParamsData').then((val) => {
            console.log('User ID', val.uid);
            this.getDesignerProfiledata(val.uid);
        });
    }
    // uplodeProfilepicDesigner end
    // cancleUploading start
    cancleUploading(type, identifier) {
        this.formBtn = !this.formBtn;
        console.log(this.formBtn);
        if (type == 'edit') {
        }
        else if (type == 'close') {
            this.storage.get('setStroageGlobalParamsData').then((val) => {
                console.log('User ID', val.uid);
                if (identifier == 'ADMIN') {
                    this.getAdminProfiledata(val.authority, val.username);
                }
                else if (identifier == 'DESIGNER') {
                    this.getDesignerProfiledata(val.uid);
                }
            });
        }
    }
    // cancleUploading end
    // openAdminProfilemodal start
    openAdminProfilemodal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('openProfilemodal ...........>>', _identifier);
            let profile_modal;
            profile_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                cssClass: 'mymodalClass medium profilemodal',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: _item,
                    modalForm_array: _items,
                }
            });
            // modal data back to Component
            profile_modal.onDidDismiss()
                .then((getdata) => {
                this.getAdminProfiledata(this.role, this.username);
                console.log('getdata >>>>>>>>>>>', getdata);
                if (getdata.data == 'submitClose') {
                }
            });
            return yield profile_modal.present();
        });
    }
    // openAdminProfilemodal end
    // openAdminProfilemodal start
    openDesignerProfilemodal(_identifier, _item, _items) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('openProfilemodal ...........>>', _identifier);
            let profile_modal;
            profile_modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__.ModalPage,
                cssClass: 'mymodalClass medium profilemodal',
                componentProps: {
                    identifier: _identifier,
                    modalForm_item: this.designerprofiledata,
                    modalForm_array: _items
                }
            });
            // modal data back to Component
            profile_modal.onDidDismiss()
                .then((getdata) => {
                this.getDesignerProfiledata(this.uid);
                console.log('getdata >>>>>>>>>>>', getdata);
                if (getdata.data == 'submitClose') {
                }
            });
            return yield profile_modal.present();
        });
    }
    // openAdminProfilemodal end
    // Delete start
    deleteData(_id) {
        console.log('id>>', _id);
        let sentValues = { 'id': _id };
        this.deleteDataSubscribe = this.http.delete("admin/profile/" + this.profileId).subscribe((res) => {
            console.log("Delete", res.return_data);
            if (res.status == 200) {
                this.commonUtils.presentToast('success', res.message);
            }
            else {
                this.commonUtils.presentToast('error', res.message);
            }
        }, errRes => {
        });
    }
    // Delete end
    statusChange(_id) {
        console.log('id>>', _id);
        this.deleteDataSubscribe = this.http.put("admin/profile/" + _id, '').subscribe((res) => {
            console.log("Delete", res.return_data);
            if (res.status == 200) {
                this.commonUtils.presentToast('success', res.message);
            }
            else {
                this.commonUtils.presentToast('error', res.message);
            }
        }, errRes => {
        });
    }
    // ----------- destroy unsubscription start ---------
    ngOnDestroy() {
        if (this.getProfileData !== undefined) {
            this.getProfileData.unsubscribe();
        }
        if (this.followCountData !== undefined) {
            this.followCountData.unsubscribe();
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_common_utils_common_utils__WEBPACK_IMPORTED_MODULE_2__.CommonUtils },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-details.text-center .label {\n  position: relative;\n}\n\n.formloader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nmat-spinner.formloader {\n  width: 30px;\n  height: 30px;\n}\n\nmat-spinner.formloader svg {\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksa0JBQUE7QUFGUjs7QUFLQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQUtBO0VBRUksV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFJSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBSFIiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1kZXRhaWxzLnRleHQtY2VudGVyXHJcbntcclxuICAgIC5sYWJlbFxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxufVxyXG4uZm9ybWxvYWRlclxyXG57XHJcbiAgICBwb3NpdGlvbjogIGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcbm1hdC1zcGlubmVyLmZvcm1sb2FkZXJcclxue1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBzdmdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7IFxyXG4gICAgICAgIGNpcmNsZXtcclxuICAgICAgICAgICAgLy8gc3Ryb2tlLXdpZHRoOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 79291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<common-header></common-header>\r\n<ion-content>\r\n  <div class=\"page-body\">\r\n    <div class=\"page-wrapper profile-page\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"page-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"page-header-left\">\r\n                        <h3>Profile\r\n                            <!-- <small>Divatt Admin panel</small> -->\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ol class=\"breadcrumb float-right\">\r\n                      <li class=\"breadcrumb-item\"><a [routerLink]=\"'/dashboard'\">\r\n                              <mat-icon>home</mat-icon>\r\n                          </a></li>\r\n                      <!-- <li class=\"breadcrumb-item\" *ngIf=\"role == 'ADMIN'\">\r\n                        Admin\r\n                      </li>\r\n                      <li class=\"breadcrumb-item\" *ngIf=\"role == 'DESIGNER'\">\r\n                        Designer\r\n                      </li> -->\r\n                      <li class=\"breadcrumb-item active\">\r\n                        Profile\r\n                      </li>\r\n                  </ol>\r\n              </div>\r\n            </div>\r\n        </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-4\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                      <div class=\"profile-details text-center\">\r\n\r\n                        <div *ngIf=\"role == 'ADMIN'\" class=\"w-fit m-auto label\">\r\n                          <mat-spinner class=\"formloader small-width\"  *ngIf=\"imageLoader\"></mat-spinner>\r\n                          <img [src]=\"adminprofiledata?.profilePic!= null ? adminprofiledata?.profilePic : 'assets/images/noimage.jpg'\" alt=\"\" class=\"img-fluid img-90 rounded-circle blur-up lazyloaded\">\r\n                          <label for=\"profilepic\" class=\"image_update_btn\"><mat-icon *ngIf=\"!formBtn\">edit</mat-icon></label>\r\n                        </div >  \r\n                        <input type=\"file\"  *ngIf=\"role == 'ADMIN'\" id=\"profilepic\"  class=\"opacity-0 h-0 p-0\" [ngClass]=\"{ 'disabled': imageLoader}\" (change)=\"chooseFile('ADMIN',$event)\">\r\n                        \r\n                        \r\n                        <div *ngIf=\"role == 'DESIGNER'\" class=\"w-fit m-auto label\">\r\n                          <mat-spinner class=\"formloader small-width\" *ngIf=\"imageLoader\"></mat-spinner>\r\n                          <img [src]=\"designerprofiledata?.designerProfile?.profilePic!= null ? designerprofiledata?.designerProfile?.profilePic : 'assets/images/noimage.jpg'\" alt=\"\" class=\"img-fluid img-90 rounded-circle blur-up lazyloaded\">\r\n                          <label for=\"profilepic\" class=\"image_update_btn\"><mat-icon (click)=\"cancleUploading('edit','DESIGNER')\">edit</mat-icon></label>\r\n                        </div> \r\n                        <input type=\"file\" *ngIf=\"role == 'DESIGNER'\" id=\"profilepic\"  class=\"opacity-0 h-0 p-0\" [ngClass]=\"{ 'disabled': imageLoader}\"  (change)=\"chooseFile('DESIGNER',$event)\">\r\n                          \r\n                        <p class=\"text-muted  text-black\" *ngIf=\"role == 'ADMIN'\">{{adminprofiledata?.firstName}} {{adminprofiledata?.lastName}}</p>\r\n                        <p class=\"text-muted  text-black\" *ngIf=\"role == 'DESIGNER'\">{{designerprofiledata?.designerProfile?.firstName1}}  {{designerprofiledata?.designerProfile?.lastName1}}</p>\r\n                        <p class=\"text-muted  text-black text-capitalize d-flex justify-content-center\" *ngIf=\"role == 'DESIGNER'\">\r\n                          <span class=\"status\" [ngClass]=\"{ 'warning': designerprofiledata.profileStatus == 'SUBMITTED' , 'danger': designerprofiledata.profileStatus == 'REJECTED','success': designerprofiledata.profileStatus == 'COMPLETED'}\">\r\n                          {{designerprofiledata?.profileStatus}}\r\n                        </span></p>\r\n                        <p class=\"text-muted  text-black text-capitalize d-flex justify-content-center\" *ngIf=\"role == 'DESIGNER'\"><mat-icon class=\"mr-1\">people</mat-icon><span style=\"line-height: 25px;\">Followers :</span><span style=\"line-height: 25px;\">{{followers}}</span></p>\r\n                        <p *ngIf=\"role == 'DESIGNER'\">\r\n                          <mat-slide-toggle\r\n                            class=\"example-margin\"\r\n                            (change)=\"statusChange(designerprofiledata.designerId)\"\r\n                            [checked]=\"designerprofiledata.accountStatus == true\">\r\n                          </mat-slide-toggle>\r\n                        </p>\r\n                        </div>\r\n                     <!-- <p class=\"text-center m-0 mt-2\">\r\n                        <a (click)=\"deleteData(profiledata.id)\" class=\"link\">Delete Profile</a>\r\n                      </p> -->\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-8\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <mat-tab-group mat-align-tabs=\"start\" [ngClass]=\"{'onlyOne' : role != 'DESIGNER'}\">\r\n                    <mat-tab *ngIf=\"role == 'ADMIN'\">\r\n                      <ng-template mat-tab-label>\r\n                        <mat-icon>person_outline</mat-icon>\r\n                        <span >Profile</span>\r\n                      </ng-template>\r\n                        <div class=\"dtl-body pt-2 pb-2 p-4\">\r\n                          <div class=\"d-flex align-items-center justify-content-between\">\r\n                            <h3 class=\"font-weight-500 mb-3 h3 mt-3\">Profile</h3>\r\n                           \r\n                            <!-- <button  type=\"button\" (click)=\"openProfilemodal('profile_modal', profiledata, '');\" class=\"btn btn-primary\">Edit</button> -->\r\n                          </div>\r\n                          <div class=\"table-responsive\">\r\n                            <table>\r\n                              <tr  *ngIf=\"adminprofiledata.firstName\">\r\n                                <td class=\"border-0\"><span class=\"text-black\">First Name:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.firstName}}</span></td>\r\n                              </tr>\r\n                              <tr *ngIf=\"adminprofiledata.lastName\">\r\n                                <td class=\"border-0\" ><span class=\"text-black\">Last Name:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.lastName}}</span></td>\r\n                              </tr>\r\n                              <tr *ngIf=\"adminprofiledata.email\">\r\n                                <td class=\"border-0\" ><span class=\"text-black\">Email:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.email}}</span></td>\r\n                              </tr>\r\n                              <tr  *ngIf=\"adminprofiledata.gender\">\r\n                                <td class=\"border-0\"><span class=\"text-black\">Gender:</span></td>\r\n                                <td class=\"border-0\"><span class=\"text-capitalize\">{{adminprofiledata?.gender}}</span></td>\r\n                                <td class=\"border-0\"><span class=\"text-black\">Mobile No:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.mobileNo}}</span></td>\r\n                              </tr>\r\n                              <tr >\r\n                                <td class=\"border-0\" ><span class=\"text-black\">DOB:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminDob}}</span></td>\r\n                                <td class=\"border-0\" ><span class=\"text-black\">GSTIN:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.gstIn}}</span></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"border-0\" ><span class=\"text-black\">City:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.city}}</span></td>\r\n                                <td class=\"border-0\" ><span class=\"text-black\">Pin:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.pin}}</span></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"border-0\" ><span class=\"text-black\">State:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.state}}</span></td>\r\n                                <td class=\"border-0\" ><span class=\"text-black\">Country:</span></td>\r\n                                <td class=\"border-0\"><span>{{adminprofiledata?.country}}</span></td>\r\n                              </tr>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                        \r\n                    </mat-tab>\r\n                    <mat-tab *ngIf=\"role == 'DESIGNER'\">\r\n                      <ng-template mat-tab-label>\r\n                        <mat-icon>person_outline</mat-icon>\r\n                        <span >Profile</span>\r\n                      </ng-template>\r\n                        <div class=\"dtl-body pt-2 pb-2 p-4\">\r\n                          <div class=\"d-flex align-items-center justify-content-between\">\r\n                            <h3 class=\"font-weight-500 mb-3 h3 mt-3\">Profile</h3>\r\n                            \r\n                            \r\n                          </div>\r\n                          <div class=\"table-responsive\">\r\n                            <table>\r\n                              <tr>\r\n                                <td class=\"p-0\">\r\n                                  <table class=\"w-100\">\r\n                                    <tr >\r\n                                      <td class=\"border-0\"><span class=\"text-black\">Designer 1</span></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"border-0\"  ><span class=\"text-black\">First Name:</span></td>\r\n                                      <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.firstName1}}</span></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"border-0\"><span class=\"text-black\">Last Name:</span></td>\r\n                                      <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.lastName1}}</span></td>\r\n                                    </tr>\r\n                                  </table>\r\n                                </td>\r\n                                <td class=\"p-0\">\r\n                                  <table class=\"w-100\">\r\n                                    <tr >\r\n                                      <td class=\"border-0\"><span class=\"text-black\">Designer 2</span></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"border-0\"  ><span class=\"text-black\">First Name:</span></td>\r\n                                      <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.firstName2}}</span></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"border-0\"><span class=\"text-black\">Last Name:</span></td>\r\n                                      <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.lastName2}}</span></td>\r\n                                    </tr>\r\n                                  </table>\r\n                                </td>\r\n                              </tr>\r\n                              <!-- <tr >\r\n                                <td class=\"border-0\"><span class=\"text-black\">Designer 2</span></td>\r\n                              </tr>\r\n                              <tr >\r\n                                <td class=\"border-0\"  ><span class=\"text-black\">First Name:</span></td>\r\n                                <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.firstName2}}</span></td>\r\n                              </tr>\r\n                              <tr >\r\n                                <td class=\"border-0\"><span class=\"text-black\">Last Name:</span></td>\r\n                                <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.lastName2}}</span></td>\r\n                              </tr>-->\r\n                              <tr > \r\n                                <td class=\"border-0\" ><span class=\"text-black\">Email:</span></td>\r\n                                <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.email}}</span></td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"border-0\"><span class=\"text-black\">Gender:</span></td>\r\n                                <td class=\"border-0\"><span class=\"text-capitalize\">{{designerprofiledata?.designerProfile?.gender}}</span></td>\r\n                              </tr>\r\n                              <tr >\r\n                                <td class=\"border-0\"  ><span class=\"text-black\">Mobile No:</span></td>\r\n                                <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.mobileNo}}</span></td>\r\n                              </tr>\r\n                              <tr  >\r\n                                <td class=\"border-0\" ><span class=\"text-black\">DOB:</span></td>\r\n                                <td class=\"border-0\"><span>{{designerprofiledata?.designerProfile?.dob}}</span></td>\r\n                              </tr>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                        \r\n                    </mat-tab>\r\n                    <mat-tab *ngIf=\"role == 'DESIGNER'\">\r\n                      <ng-template mat-tab-label>\r\n                        <mat-icon>people</mat-icon>\r\n                        <span>Social</span>\r\n                      </ng-template>\r\n                      <div class=\"table-responsive\" *ngIf=\"designerprofiledata?.designerPersonalInfoEntity\">\r\n                        <table>\r\n                          <!-- <tr  >\r\n                            <td class=\"border-0\"  ><span class=\"text-black\">Achievements:</span></td>\r\n                            <td class=\"border-0\"  [ngClass]=\"{ 'd-none': designerprofiledata?.socialProfile?.achievements.length > 100}\"><div class=\"description_text\" >{{designerprofiledata?.socialProfile?.achievements}} </div></td>\r\n                            <td class=\"border-0\" *ngIf=\"designerprofiledata?.socialProfile?.achievements.length > 100\"><div class=\"description_text\"  [ngClass]=\"{ 'visible': showmore1}\">{{designerprofiledata?.socialProfile?.achievements}} </div><a (click)=\"showmore1 = !showmore1\" *ngIf=\"designerprofiledata?.socialProfile?.achievements\" class=\"text-primary\">{{showmore1 ? 'Show less' : 'Show more'}}</a></td>\r\n                          </tr> -->\r\n                          <tr >\r\n                            <td class=\"border-0\" ><span class=\"text-black\">Address:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.socialProfile?.address}}</span></td>\r\n                          </tr>\r\n                          <tr >\r\n                            <td class=\"border-0\" ><span class=\"text-black\">Description:</span></td>\r\n                            <td class=\"border-0\"  [ngClass]=\"{ 'd-none': designerprofiledata?.socialProfile?.description.length > 100}\"><div class=\"description_text\" >{{designerprofiledata?.socialProfile?.description}} </div></td>\r\n                            <td class=\"border-0\" *ngIf=\"designerprofiledata?.socialProfile?.description.length > 100\"><div class=\"description_text\"  [ngClass]=\"{ 'visible': showmore}\">{{designerprofiledata?.socialProfile?.description}} </div><a (click)=\"showmore = !showmore\" class=\"text-primary\" *ngIf=\"designerprofiledata?.socialProfile?.description\">{{showmore ? 'Show less' : 'Show more'}}</a></td>\r\n                          </tr>\r\n                          <tr >\r\n                            <td class=\"border-0\" ><span class=\"text-black\">Facebook Link:</span></td>\r\n                            <td class=\"border-0\"><span class=\"text-capitalize\">{{designerprofiledata?.socialProfile?.facebookLink}}</span></td>\r\n                          </tr>\r\n                          <tr >\r\n                            <td class=\"border-0\"><span class=\"text-black\">Instagram Link:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.socialProfile?.instagramLink}}</span></td>\r\n                          </tr>\r\n                          <tr >\r\n                            <td class=\"border-0\"><span class=\"text-black\">Youtube Link:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.socialProfile?.youtubeLink}}</span></td>\r\n                          </tr>\r\n                          <tr >\r\n                            <td class=\"border-0\" ><span class=\"text-black\">Website URL:</span></td>\r\n                            <td class=\"border-0\"><span class=\"text-capitalize\">{{designerprofiledata?.socialProfile?.facebookLink}}</span></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </mat-tab>\r\n                    <mat-tab *ngIf=\"role == 'DESIGNER'\">\r\n                      <ng-template mat-tab-label>\r\n                        <mat-icon>account_balance</mat-icon>\r\n                        <span>Bank Details</span>\r\n                      </ng-template>\r\n                      <div class=\"table-responsive\" *ngIf=\"designerprofiledata?.designerPersonalInfoEntity\">\r\n                        <table>\r\n                          <tr>\r\n                            <td class=\"border-0\"  ><span class=\"text-black\">Account Number:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.designerPersonalInfoEntity?.bankDetails?.accountNumber}}</span></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td class=\"border-0\" ><span class=\"text-black\">Bank Name:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.designerPersonalInfoEntity?.bankDetails?.bankName}}</span></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td class=\"border-0\" ><span class=\"text-black\">Ifsc Code:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.designerPersonalInfoEntity?.bankDetails?.ifscCode}}</span></td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </mat-tab>\r\n                    <mat-tab *ngIf=\"role == 'DESIGNER'\">\r\n                      <ng-template mat-tab-label>\r\n                        <mat-icon>description</mat-icon>\r\n                        <span>More</span>\r\n                      </ng-template>\r\n                      <div class=\"table-responsive\" *ngIf=\"designerprofiledata?.designerPersonalInfoEntity\">\r\n\r\n                        <table>\r\n                          \r\n                          <tr >\r\n                            <td class=\"border-0\"><span class=\"text-black\">Firm Name:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.boutiqueProfile?.firmName}}</span></td>\r\n                          </tr>\r\n                          <tr >\r\n                            <td class=\"border-0\"><span class=\"text-black\">GST in:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.boutiqueProfile?.gstin}}</span></td>\r\n                          </tr>\r\n                          <tr >\r\n                            <td class=\"border-0\"><span class=\"text-black\">Operating City:</span></td>\r\n                            <td class=\"border-0\" ><span class=\"text-capitalize\">{{designerprofiledata?.boutiqueProfile?.operatingCity}}</span></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td class=\"border-0\"  ><span class=\"text-black\">Designer Category:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.boutiqueProfile?.professionalCategory}}</span></td>\r\n                          </tr>\r\n                          <!-- <tr >\r\n                            <td class=\"border-0\"><span class=\"text-black\">Year Of Operation:</span></td>\r\n                            <td class=\"border-0\"><span>{{designerprofiledata?.boutiqueProfile?.yearOfOperation}}</span></td>\r\n                          </tr> -->\r\n                        </table>\r\n                      </div>\r\n                    </mat-tab>\r\n                    <!-- <mat-tab *ngIf=\"role == 'DESIGNER'\">\r\n                      <ng-template mat-tab-label>\r\n                        <mat-icon>settings</mat-icon>\r\n                        <span>Permission</span>\r\n                      </ng-template>\r\n                    </mat-tab> -->\r\n                  </mat-tab-group>\r\n                  <p>\r\n                    <ion-button *ngIf=\"role == 'DESIGNER'\" type=\"button\" (click)=\"openDesignerProfilemodal('designerprofile_modal', designerprofiledata, '');\" class=\"custom-btn float-right\">\r\n                      Edit\r\n                    </ion-button>\r\n                    <ion-button *ngIf=\"role == 'ADMIN'\"    type=\"button\"   (click)=\"openAdminProfilemodal('adminprofile_modal', adminprofiledata, '');\" class=\"custom-btn float-right\">\r\n                      Edit\r\n                    </ion-button>\r\n                    </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts-es2015.js.map