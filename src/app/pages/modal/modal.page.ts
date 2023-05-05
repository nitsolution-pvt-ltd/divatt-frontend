import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
// import { CategoryPage } from '../product/category/category.page';
import { environment } from 'src/environments/environment';
var myDate = new Date();
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

  hide: any = 'password';
  hide2: any = 'password';
  hide3: any = 'password';
  model: any = {};
  modal: any = {};
  showInfo2 = false;
  get_identifier: any;
  get_item: any;
  get_array: any;
  heder_title: string;
  btnloader2
  username: any;
  tbody: any;
  allcategorydata: any;
  id: any;
  categoryModel: any;
  categoryImage: any;
  error: string;
  maritalstatuslist = [
    {
      id: 1, name: "Unmarried"
    }, {
      id: 2, name: "Married"
    }
  ]
  role: any;
  profileupdateApi: string;
  private profileupdateSubcribe: Subscription;
  private approveProductSubscribe: Subscription;
  btnloader: boolean;
  designerprofiledata: any = {
    ifscCode: '',
    bankName: '',
    accountNumber: '',
  };
  adminprofiledata: any = {};
  alladminprofileProfiledata: any = {};
  alldesignerProfiledata: any = {};
  formloader: boolean;
  previewimageSrc_aadher: any;
  previewimageSrc_pan: any;
  designerProfile: any;
  currentYear: number;
  private changeorderStatusSubscribe: Subscription;
  currentDate;
  currentDateTime;
  private ExportOrderSubscribe: Subscription;
  private GenarateInvoiceSubscribe: Subscription;
  private submitaccountStatusSubscribe: Subscription;
  private GenarateAccountDataSubscribe: Subscription;
  private getDesignerSubscribe: Subscription;
  stateList: any = [];
  countryList: any = [{
    id: 1, name: "India"
  }]
  active_class = false;
  private getStateData: Subscription;
  LebellistDataSubcribe: Subscription;
  Lebellist: any = [];
  designerId: string;
  orderId: string;
  productId: string;
  statusChangeSubscribe: Subscription;
  orderItemStatus: string;
  dateRange: any;
  authId: any;
  authData: any = {};
  filter_date: any;
  stateLoading: boolean;
  mindateRange: string;
  mesorementData: any = {};
  userData: any = {};
  validForm = false;
  private GetAdminData: Subscription;
  stockRecorverSubscribe: Subscription;

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private http: HttpClient, private storage: Storage,
    private router: Router, private commonUtils: CommonUtils,
    private authService: AuthService,
  ) { }

  ngOnInit() {

    const date = new Date();
    // this.filter_date =  moment(date.setDate(date.getDate() + 7)).format('YYYY-MM-DD')
    this.filter_date = moment(date.setDate(date.getDate() + 7)).format('YYYY-MM-DD')
    // console.log("date",date.setDate(date.getDate() + 7),date.getDate() + 7,this.filter_date);

    let currentDate = Date.now()
    this.currentDate = moment(currentDate).format('YYYY/MM/DD');
    this.currentDateTime = moment(currentDate).format('YYYY-MM-DD hh:mm:ss');
    // this.dateRange =  moment(new Date()).format('YYYY-MM-DD');
    // console.log('this.currentDate',this.currentDate,this.currentDateTime);
    this.currentYear = (new Date()).getFullYear() - 18;
    // console.log("DATE",myDate,(new Date()).getFullYear(),this.currentYear);
    this.commonFunction();
    // this.designerprofiledata.country = 1;
    this.get_item = '';
    this.get_identifier = this.navParams.get('identifier');
    this.get_item = this.navParams.get('modalForm_item');
    this.get_array = this.navParams.get('modalForm_array');
    if (this.get_identifier == 'changepassword_modal') {
      this.heder_title = 'change password ';
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'categoryadd_modal') {
      this.heder_title = 'Add Category ';
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'designerprofile_modal') {
      this.heder_title = 'Edit Profile ';
      // console.log("get_item",this.get_item);
      this.setdesignerProfiledata();
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'adminprofile_modal') {
      this.heder_title = 'Edit Profile ';
      // console.log("get_item",this.get_item);
      this.setadminProfiledata();
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'productapprove_modal') {

      // console.log("get_item",this.get_item);
      // this.api_url = 'user/user-login';
      if (this.get_item.type == "Approved") {
        this.heder_title = 'Approve Product ';
      } else if (this.get_item.type == "Rejected") {
        this.heder_title = 'Reject Product ';
      }

    } else if (this.get_identifier == 'message_modal') {
      this.heder_title = 'Comments of Approve and Rejection';
      // console.log("get_item",this.get_item);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'rejectmessage_modal') {
      this.heder_title = 'Comments of Rejection';
      // console.log("get_item",this.get_item);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'Desigerrejected_modal') {
      this.heder_title = 'Reason for rejection ';
      // console.log("get_item",this.get_item);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'DesigerApprove_modal') {
      this.heder_title = 'Approve Designer';
      // console.log("get_item",this.get_item);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderCommentdesigner_modal') {
      this.heder_title = 'Add Comment';
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderCommentAdmin_modal') {
      this.heder_title = 'Update tracking Order';
      // console.log("tracking",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderDeliveryAdmin_modal') {
      this.heder_title = 'Delivery Partner data';
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'DeliveredAdmin_modal') {
      this.heder_title = 'Delivered Details';
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderCancelAdmin_modal') {
      this.heder_title = 'Reason of Cancel';
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderCancelDesigner_modal') {
      this.heder_title = 'Reason of Cancel';
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'cancelledApprovalModal') {
      this.heder_title = 'Request for Cancellation';
      this.model.orderStatus = 'Approve';
      console.log("get_item", this.get_item, this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderExportModal') {
      this.heder_title = 'Export Order Document';
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderpackModal') {
      this.heder_title = 'Order Packed Form';
      // console.log("get_item",this.get_item,this.get_array);
      this.productId = this.get_item.productId;
      this.orderId = this.get_item.orderId;
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'ordershippedModal') {
      this.heder_title = 'Order Shipped Form';
      // console.log("get_item",this.get_item,this.get_array);
      this.productId = this.get_item.productId;
      this.orderId = this.get_item.orderId;
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'returnRequestConfirm') {
      // this.heder_title = 'Order Delivered Form';
      this.heder_title = 'Return Request confirm';

      // console.log("get_item",this.get_item,this.get_array);
      this.productId = this.get_item.productId;
      this.orderId = this.get_item.orderId;
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'orderdeliverModal') {
      this.heder_title = 'Order Delivered Form';
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
      this.productId = this.get_item.productId;
      this.orderId = this.get_item.orderId;
      let x = this.get_item.shippingDate.split(" ");
      this.mindateRange = moment(this.get_item.createdOn, 'DD/MM/YYYY hh:mm:ss').format('YYYY-MM-DD');
      let currentDate2, currentDate = Date.now()
      currentDate2 = moment(currentDate).format('YYYY-MM-DD');
      this.model.deliver_Date = currentDate2;
      this.model.deliveredDate = currentDate2;
      var dateArray: any = [], day: any = [], month: any = [], year: any = [], final: any;
      dateArray = x[0];
      for (let index = 0; index < dateArray.length; index++) {
        if (index == 0 || index == 1) {
          day.push(dateArray[index]);
        } else if (index == 3 || index == 4) {
          month.push(dateArray[index]);
        } else if (index == 6 || index == 7 || index == 8 || index == 9) {
          year.push(dateArray[index]);
        }
      }
      year = year.toString();
      year = year.replaceAll(',', '');
      month = month.toString();
      month = month.replaceAll(',', '');
      day = day.toString();
      day = day.replaceAll(',', '');
      console.log('dateRange', day, month, year, final);
      // this.dateRange = year.toString()+'-'+month+'-'+day;
      this.dateRange = moment(new Date()).format('YYYY-MM-DD');

      // this.dateRange = '2022-12-24'
      // console.log('this.dateRange',this.dateRange,this.get_item.shippingDate,x);

    } else if (this.get_identifier == 'ordersModal') {
      this.heder_title = 'Customization';
    } else if (this.get_identifier == 'accountStatus') {
      this.heder_title = 'Designer Return Amount ';
      // this.api_url = 'user/user-login';
      this.currentDate = moment(currentDate).format('YYYY-MM-DD');
      console.log('this.get_item', this.get_item);
      this.model.net_payable = this.get_item.designer_return_amount[0].net_payable_designer;
      this.model.status = this.get_item.designer_return_amount[0].status;
      this.model.remarks = this.get_item.designer_return_amount[0].remarks;
      this.model.paymentDate = moment(this.get_item.designer_return_amount[0].payment_datetime).format('YYYY-MM-DD');
      this.model.updatedDatetime = moment(this.get_item.designer_return_amount[0].updated_datetime).format('YYYY-MM-DD');
      this.model.updated_datetime = moment(this.get_item.designer_return_amount[0].updated_datetime).format('YYYY-MM-DD hh:mm:ss');
      // console.log("this.model.paymentDate",this.model.paymentDate,this.get_item.designer_return_amount[0].payment_datetime);

      this.model.payment_datetime = this.get_item.designer_return_amount[0].payment_datetime;

    } else if (this.get_identifier == 'serviceStatus') {
      this.heder_title = 'Service Charge';
      // this.api_url = 'user/user-login';
      this.currentDate = moment(currentDate).format('YYYY-MM-DD');
      // console.log('this.get_item',this.get_item);
      this.model.status = this.get_item?.service_charge?.status;
      this.model.remarks = this.get_item?.service_charge?.remarks;
      this.model.service_Date = moment(this.get_item?.service_charge?.date).format('YYYY-MM-DD');
      this.model.servicedate = moment(this.get_item?.service_charge?.date).format('YYYY-MM-DD hh:mm:ss');
      // console.log("this.model.paymentDate",this.model.paymentDate,this.get_item.designer_return_amount[0].payment_datetime);

    } else if (this.get_identifier == 'govt_charge') {
      this.heder_title = 'Government Charge';
      // this.api_url = 'user/user-login';
      this.currentDate = moment(currentDate).format('YYYY-MM-DD');
      // console.log('this.get_item',this.get_item);
      this.model.status = this.get_item?.govt_charge[0]?.status;
      this.model.remarks = this.get_item?.govt_charge[0]?.remarks;
      this.model.gov_Date = moment(this.get_item?.govt_charge[0]?.datetime).format('YYYY-MM-DD');
      this.model.govdate = moment(this.get_item?.govt_charge[0]?.datetime).format('YYYY-MM-DD hh:mm:ss');
      // console.log("this.model.paymentDate",this.model.govdate,this.get_item.govt_charge[0].datetime,this.model.gov_date );
    } else if (this.get_identifier == 'userCustomMesorment') {
      let type;
      if (this.get_item.sizeType == 'CM') {
        type = 'CMS'
      } else {
        type = 'inch'
      }
      this.mesorementData = this.get_item;
      this.heder_title = 'Standard Measurement Charts in ' + type;
      // console.log("get_item",this.get_item,this.get_array);
      // this.api_url = 'user/user-login';
    } else if (this.get_identifier == 'forceReturnModal') {
      this.heder_title = 'Force Return Comment';
      this.productId = this.get_item.productId;
      this.orderId = this.get_item.orderId;
    } else if (this.get_identifier == 'returnRefund') {
      this.heder_title = 'Return/Refund product';
      this.productId = this.get_item.productId;
      this.orderId = this.get_item.orderId;
      if (this.get_item?.orderStatusDetails?.returnFromAdmin?.isReturn) {
        this.model.isReturn = 'true'
      } else if (!this.get_item?.orderStatusDetails?.returnFromAdmin?.isReturn) {
        this.model.isReturn = 'false'
      }
      this.model.comment = this.get_item?.orderStatusDetails?.returnFromAdmin?.comment
    } else if (this.get_identifier == 'forceReturnOnModal') {
      this.heder_title = 'Turn on Return';
      this.productId = this.get_item.productId;
      this.orderId = this.get_item.orderId;
    }

    // get user name
    // console.log('get_identifier',this.get_identifier);
    this.storage.get('setStroageGlobalParamsData').then((val) => {
      // console.log('All User Data', val.username);
      this.username = val.username;
      this.userData = val;
      this.GetAdminData = this.http.get("auth/info/" + val.authority + '/' + val.username).subscribe(
        (res: any) => {
          this.authData = res;
        },
        (error) => {
        });
    });
    this.model.packedCovered = false;
    this.model.packingVideo = false;
  }
  // data for profile edit start
  // commonFunction start
  commonFunction() {
    this.storage.get('setStroageGlobalParamsData').then((val) => {
      // console.log('User ID', val);
      this.authId = val.uid;
      this.role = localStorage.getItem('userdata');
      // console.log("Role",this.role);
      if (this.role == 'DESIGNER') {
        this.profileupdateApi = "designer/profile/update";
        // console.log("DESIGNER");
        this.getState();
      }
      else {
        this.GenarateInvoiceSubscribe = this.http.get("auth/info/" + val.authority + '/' + val.username).subscribe(
          (res: any) => {
            this.authData = res;
          },
          (error) => {
          });
        this.profileupdateApi = "admin/profile/update";
        // console.log("Admi");
      }
    });
    this.getLebellist();
    // console.log(this.authData);

  }
  // commonFunction end

  /* Validation check start */
  errorList: any = {};
  checkValidtion(fieldNAme: any) {
    console.log('fieldNAme');
    const onlyAB = /^[A-Z]+$/i;
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const numberRegex = '^[0-9]*$';
    const noSpacalchar = "^[a-zA-Z0-9 ]+$";
    const onlyAlpha = /\d+/g;
    const emptySpace = /^ *$/;
    // productapproveComment
    if (fieldNAme == 'productapproveComment') {
      // productapproveComment
      if (this.modal.comment) {
        console.log('this.modal.comment.match(emptySpace)', this.modal.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.modal.comment.match(emptySpace) !== null){
          this.errorList.productapproveComment = 'Empty Space not allowed';
        } else {
          this.errorList.productapproveComment = '';
        }
      } else {
        this.errorList.productapproveComment = 'Enter your Comment';

      }
    }
    // desigerrejectedcomment
    if (fieldNAme == 'desigerrejectedcomment') {
      // desigerrejectedcomment
      if (this.modal.comment) {
        console.log('this.modal.comment.match(emptySpace)', this.modal.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.modal.comment.match(emptySpace) !== null){
          this.errorList.desigerrejectedcomment = 'Empty Space not allowed';
        } else {
          this.errorList.desigerrejectedcomment = '';
        }
      } else {
        this.errorList.desigerrejectedcomment = 'Enter your Comment';

      }
    }
    // displayname
    if (fieldNAme == 'displayName') {
      if (this.modal.displayName) {
        
        if (this.modal.displayName.match(noSpacalchar) == null) {
          this.errorList.displayName = 'No special character are allowed';

        } else if(this.modal.displayName.match(onlyAlpha) !== null) {
          this.errorList.displayName = 'Please enter only alphabet';
        } else if(this.modal.displayName.match(emptySpace) !== null){
          this.errorList.displayName = 'Empty Space not allowed';
        } else {
          this.errorList.displayName = '';
        }
      } else {
        this.errorList.displayName = 'Enter a display name';

      }
    }
    // designerCategory
    if (fieldNAme == 'designerCategory') {
      // state
      if (this.modal.designerCategory) {
        this.errorList.designerCategory = '';

      } else {
        this.errorList.designerCategory = 'Select a designer level.';

      }
    }
    // orderCancelComment
    if (fieldNAme == 'orderCancelComment') {
      // orderCancelComment
      if (this.model.comment) {
        console.log('this.model.comment.match(emptySpace)', this.model.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comment.match(emptySpace) !== null){
          this.errorList.orderCancelComment = 'Empty Space not allowed';
        } else {
          this.errorList.orderCancelComment = '';
        }
      } else {
        this.errorList.orderCancelComment = 'Enter your Comment';

      }
    }
    // courierName
    if (fieldNAme == 'courierName') {
      if (this.model.courierName) {
        
        if (this.model.courierName.match(noSpacalchar) == null) {
          this.errorList.courierName = 'No special character are allowed';

        } else if(this.model.courierName.match(onlyAlpha) !== null) {
          this.errorList.courierName = 'Please enter only alphabet';
        } else if(this.model.courierName.match(emptySpace) !== null){
          this.errorList.courierName = 'Empty Space not allowed';
        } else {
          this.errorList.courierName = '';
        }
      } else {
        this.errorList.courierName = 'Enter a Courier Name';

      }
    }
    // cancelledApprovalcomment
    if (fieldNAme == 'cancelledApprovalcomment') {
      // cancelledApprovalcomment
      if (this.model.comment) {
        console.log('this.model.comment.match(emptySpace)', this.model.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comment.match(emptySpace) !== null){
          this.errorList.cancelledApprovalcomment = 'Empty Space not allowed';
        } else {
          this.errorList.cancelledApprovalcomment = '';
        }
      } else {
        this.errorList.cancelledApprovalcomment = 'Enter your Comment';

      }
    }
    // returnRequestComment
    if (fieldNAme == 'returnRequestComment') {
      // returnRequestComment
      if (this.model.comment) {
        console.log('this.model.comment.match(emptySpace)', this.model.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comment.match(emptySpace) !== null){
          this.errorList.returnRequestComment = 'Empty Space not allowed';
        } else {
          this.errorList.returnRequestComment = '';
        }
      } else {
        this.errorList.returnRequestComment = 'Enter your Comment';

      }
    }
    // returnApproveComment
    if (fieldNAme == 'returnApproveComment') {
      // returnApproveComment
      if (this.model.comment) {
        console.log('this.model.comment.match(emptySpace)', this.model.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comment.match(emptySpace) !== null){
          this.errorList.returnApproveComment = 'Empty Space not allowed';
        } else {
          this.errorList.returnApproveComment = '';
        }
      } else {
        this.errorList.returnApproveComment = 'Enter your Comment';

      }
    }
    // forceReturnComment
    if (fieldNAme == 'forceReturnComment') {
      // forceReturnComment
      if (this.model.comments) {
        console.log('this.model.comments.match(emptySpace)', this.model.comments.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comments.match(emptySpace) !== null){
          this.errorList.forceReturnComment = 'Empty Space not allowed';
        } else {
          this.errorList.forceReturnComment = '';
        }
      } else {
        this.errorList.forceReturnComment = 'Enter your Comment';

      }
    }
    // returnRefundComment
    if (fieldNAme == 'returnRefundComment') {
      // returnRefundComment
      if (this.model.comment) {
        console.log('this.model.comment.match(emptySpace)', this.model.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comment.match(emptySpace) !== null){
          this.errorList.returnRefundComment = 'Empty Space not allowed';
        } else {
          this.errorList.returnRefundComment = '';
        }
      } else {
        this.errorList.returnRefundComment = 'Enter your Comment';

      }
    }
    // paymentDate
    if (fieldNAme == 'paymentDate') {
      console.log('this.model.paymentDate',this.model.paymentDate);
      
      if (this.model.paymentDate == 'Invalid date') {
        this.errorList.paymentDate = 'Select a payment date';
      }else if (this.model.paymentDate) {
        this.errorList.paymentDate = '';
      } else {
        this.errorList.paymentDate = 'Select a payment date';
      }
    }
    // updatedDatetime
    if (fieldNAme == 'updatedDatetime') {
      if (this.model.updatedDatetime == 'Invalid date') {
        this.errorList.updatedDatetime = 'Select a payment date';
      }else if (this.model.updatedDatetime) {
        this.errorList.updatedDatetime = '';
      } else {
        this.errorList.updatedDatetime = 'Select a date';
      }
    }
  }
  /* Validation check end */
  // setadminProfiledata start
  setadminProfiledata() {
    //  console.log('adminprofiledata',this.get_item);

    //  this.adminprofiledata = this.get_item;
    //  this.adminprofiledata.admindob = moment(this.get_item.dob).format('YYYY-MM-DD');
    //  this.adminprofiledata.dob = this.get_item.dob;
    //  this.adminprofiledata.dob = this.get_item.dob;
    // console.log("this.profiledata",this.adminprofiledata);
    this.adminprofiledata = {
      admindob: moment(this.get_item.dob).format('YYYY-MM-DD'),
      dob: this.get_item.dob,
      firstName: this.get_item.firstName,
      lastName: this.get_item.lastName,
      gstIn: this.get_item.gstIn,
      email: this.get_item.email,
      gender: this.get_item.gender,
      profilePic: this.get_item.profilePic,
      mobileNo: this.get_item.mobileNo,
      pan: this.get_item.pan,
      country: this.get_item.country,
      state: this.get_item.state,
      city: this.get_item.city,
      pin: this.get_item.pin,
      password: this.get_item.password,
      roleName: this.get_item.roleName,
      uid: this.get_item.uid,
      role: this.get_item.role,

    }
    if (this.get_item.country) {
      this.getState();
    }
  }
  // setadminProfiledata end
  ordersSubmit(form: NgForm, identifier: any) {
    console.log('get_item>>', this.get_item);

    // console.log("orders form...", form.value);
    this.orderItemStatus = identifier;
    var body: any = {};
    if (identifier == 'Orders') {
      body = {
        "OrdersDTO": {
          "withCustomization": form.value.withCustomization,
          "withDesignCustomization": form.value.withDesignCustomization,
        }
      }
    } else if (identifier == 'ordersCancel') {

    } else if (identifier == 'Packed') {
      body = {
        "PackedDTO": {
          "packedCovered": form.value.packedCovered,
          "packingVideo": form.value.packingVideo,
        }

      }
    } else if (identifier == 'Shipped') {
      body = {
        "ShippedDTO": {
          "courierName": form.value.courierName,
          "awbNumber": form.value.awbNumber
        }
      }
    } else if (identifier == 'Delivered') {

      const date = new Date();

      this.filter_date = moment(date.setMinutes(date.getMinutes() + 60)).format('YYYY-MM-DD : HH:mm:ss');
      console.log('filter_date', this.filter_date);

      var designerData: any = {}, total_amount = 0, basic_amount = 0, total_amount_received = 0, total_tax_amount = 0,
        total_tax = 0, fee: any = 0, igst: any = 0, igst2: any = 0, cgst: any = 0, sgst: any = 0, data: any, accountData: any = {},
        invoiceId, hsn_amount: any = 0, hsn_cgst: any = 0, tcs = 0, hsn_igst: any = 0, hsn_rate: any = 0, hsn_sgst: any = 0, net_payable_designer = 0;

      if (this.get_item.hsnData && this.get_item.salesPrice != 0) {
        // console.log("SALEPRICE");
        hsn_rate = this.get_item.hsnData?.cgst + this.get_item.hsnData?.sgst + this.get_item.hsnData?.igst;

        basic_amount = parseInt(((100 * this.get_item?.mrp) / (100 + hsn_rate)).toFixed(0))

        // hsn_cgst = ((this.get_item.hsnData?.cgst * this.get_item.salesPrice) / 100).toFixed(2);
        // hsn_igst = ((this.get_item.hsnData?.igst * this.get_item.salesPrice) / 100).toFixed(2);

        // hsn_sgst =  ((this.get_item.hsnData?.sgst * this.get_item.salesPrice) / 100).toFixed(2);
        total_amount = parseFloat((((this.get_item.salesPrice * 12) / 100) + ((((this.get_item.salesPrice * 12) / 100) * 0.18) + ((this.get_item.mrp * 1) / 100))).toFixed(2));
        // total_tax = parseFloat((((((((this.get_item.salesPrice  * 12) / 100 ) * 18))) / 100) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
        fee = parseFloat(((basic_amount * 12) / 100).toFixed(2));
        total_tax = parseFloat(((basic_amount * 12) / 100).toFixed(2));
        igst = parseFloat((((basic_amount * 12) / 100) * 0.18).toFixed(2));
        // igst2 = parseFloat((((basic_amount  * 12) / 100 ) * 0.18).toFixed(2));
        cgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
        sgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
        total_amount_received = this.get_item.salesPrice;
        // total_amount_received = parseFloat(((this.get_item.salesPrice  * 12) / 100).toFixed(2));
        // net_payable_designer =  parseFloat((((basic_amount  * 12) / 100) - ((((this.get_item.salesPrice  * 12) / 100 ) * 0.18) + ((this.get_item.mrp * 1) / 100))).toFixed(2))
        // total_tax_amount = parseFloat(((((this.get_item.salesPrice  * 12) / 100 ) * 0.18) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
        tcs = parseFloat(((basic_amount * 1) / 100).toFixed(2))
        net_payable_designer = this.get_item.salesPrice - (tcs + igst + fee)
        total_tax_amount = fee + igst + tcs;

      } else {
        // console.log("MRP");
        hsn_rate = this.get_item.hsnData?.cgst + this.get_item.hsnData?.sgst + this.get_item.hsnData?.igst;
        basic_amount = parseInt(((100 * this.get_item?.mrp) / (100 + hsn_rate)).toFixed(0))
        total_tax = parseFloat(((basic_amount * 12) / 100).toFixed(2));
        // hsn_amount = (((this.get_item.hsnData?.cgst * this.get_item.mrp) / 100) + ((this.get_item.hsnData?.sgst * this.get_item.mrp) / 100) + ((this.get_item.hsnData?.igst * this.get_item.mrp) / 100)).toFixed(2);
        // hsn_cgst = ((this.get_item.hsnData?.cgst * this.get_item.mrp) / 100).toFixed(2);
        // hsn_igst = ((this.get_item.hsnData?.igst * this.get_item.mrp) / 100).toFixed(2);
        // hsn_sgst =  ((this.get_item.hsnData?.sgst * this.get_item.mrp) / 100).toFixed(2);
        total_amount = parseFloat((((this.get_item.mrp * 12) / 100) + ((((this.get_item.mrp * 12) / 100) * 0.18) + ((this.get_item.mrp * 1) / 100))).toFixed(2));
        // total_tax = parseFloat((((((((this.get_item.mrp  * 12) / 100 ) * 18))) / 100) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
        fee = parseFloat(((basic_amount * 12) / 100).toFixed(2));
        igst = parseFloat((((basic_amount * 12) / 100) * 0.18).toFixed(2));
        // igst2 = parseFloat((((this.get_item.mrp  * 12) / 100 ) * 0.12).toFixed(2));
        cgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
        sgst = parseFloat((((basic_amount * 12) / 100) * 0.09).toFixed(2));
        total_amount_received = this.get_item.mrp;
        // total_amount_received = parseFloat(((this.get_item.mrp  * 12) / 100).toFixed(2));
        // total_tax_amount = parseFloat(((((this.get_item.mrp  * 12) / 100 ) * 0.18) + ((this.get_item.mrp * 1) / 100)).toFixed(2));
        tcs = parseFloat(((basic_amount * 1) / 100).toFixed(2))
        net_payable_designer = this.get_item.mrp - (tcs + igst + fee)
        total_tax_amount = fee + igst + tcs;
      }
      //  console.log("basic_amount",basic_amount);

      let total_tax2 = parseInt(hsn_cgst) + parseInt(hsn_igst) + parseInt(hsn_sgst);
      //  console.log("hsn_cgst",hsn_cgst,hsn_igst,hsn_sgst,total_tax2);
      if (this.get_item?.hsnData?.igst) {
        hsn_amount = this.get_item?.taxAmount;
        hsn_igst = parseFloat((this.get_item?.taxAmount).toFixed(2));
        hsn_cgst = 0;
        hsn_sgst = 0;

      } else {
        hsn_amount = this.get_item?.taxAmount;
        hsn_igst = 0;
        hsn_cgst = parseFloat((this.get_item?.taxAmount / 2).toFixed(2));
        hsn_sgst = parseFloat((this.get_item?.taxAmount / 2).toFixed(2));
      }
      this.http.get('designer/' + this.get_item.designerId).subscribe(
        (res: any) => {
          designerData = res;

          body = {
            "DeliveryDTO": {
              "deliveredDate": form.value.deliveredDate
            }
          }
          // console.log('invoiceId',this.filter_date);
          var salesPrice = 0;
          if (this.get_item?.salesPrice == 0) {
            salesPrice = this.get_item?.mrp
          }
          else {
            salesPrice = this.get_item?.salesPrice
          }
          accountData = {
            "admin_details": {
              "address": this.authData?.city + ',' + this.authData?.state + ',' + this.authData?.country,
              "admin_id": this.authData?.uid,
              "gstIn": this.authData?.gstIn,
              "pan": this.authData?.pan,
              "pin": this.authData?.pin,
              "mobile": this.authData?.mobileNo,
              "name": this.authData?.firstName + ' ' + this.authData?.lastName,
              "gender": this.authData?.gender
            },
            "datetime": this.currentDateTime,
            "designer_details": {
              "address": designerData?.socialProfile?.address,
              "designer_id": designerData?.designerId,
              "designer_name": designerData?.designerName,
              "boutiqueName": designerData?.boutiqueProfile?.boutiqueName,
              "display_name": designerData?.designerProfile?.displayName,
              "gst_in": designerData?.boutiqueProfile?.gstin,
              "email": designerData?.designerProfile?.email,
              "mobile": designerData?.designerProfile?.mobileNo,
              "city": designerData?.designerProfile?.city,
              "state": designerData?.designerProfile?.state,
              "country": designerData?.designerProfile?.country,
              "pan": designerData?.designerPersonalInfoEntity?.designerDocuments?.panCard,
              "pin": designerData?.designerProfile?.pinCode,
            },
            "filter_date": this.filter_date,
            "designer_return_amount": [
              {
                "datetime": this.currentDateTime,
                "basic_amount": basic_amount,
                "designer_id": this.get_item?.designerId,
                "discount": this.get_item?.discount,
                "hsn_amount": parseFloat(hsn_amount),
                "hsn_cgst": parseFloat(hsn_cgst),
                "hsn_igst": parseFloat(hsn_igst),
                "hsn_rate": parseFloat(hsn_rate),
                "hsn_sgst": parseFloat(hsn_sgst),
                "net_payable_designer": net_payable_designer,
                "payment_datetime": moment(this.get_array?.paymentData?.createdOn).format('YYYY-MM-DD hh:mm:ss'),
                "mrp": this.get_item?.mrp,
                "order_id": this.get_item?.orderId,
                "status": "NOT RETURN",
                "product_id": this.get_item?.productId,
                "product_sku": this.get_item?.productSku,
                "remarks": '',
                "sales_price": salesPrice,
                "size": this.get_item?.size,
                "tax_type": this.get_item?.taxType,
                "units": this.get_item?.units,
                "user_id": this.get_item?.userId,
                "tcs": tcs,
                "total_amount_received": total_amount_received,
                "total_tax_amount": total_tax_amount,
                "updated_by": this.authData.uid,
                "updated_datetime": this.currentDateTime
              }
            ],
            "govt_charge": [
              {
                "cgst": 0,
                "datetime": this.currentDateTime,
                "fee": fee,
                "igst": igst,
                "rate": 12,
                "remarks": "",
                "sgst": 0,
                "status": 'NOT PAID',
                "tcs": tcs,
                "tcs_rate": 1,
                "total_amount": fee + igst + tcs,
                "total_tax": igst + tcs,
                "units": this.get_item?.units,
                "updated_by": this.authData.uid,
                "updated_datetime": this.currentDateTime
              }
            ],
            "order_details": [
              {
                "basic_amount": basic_amount,
                "datetime": this.currentDateTime,
                "delivery_datetime": moment(form.value.deliver_Date).format('YYYY-MM-DD hh:mm:ss'),
                "designer_id": this.get_item?.designerId,
                "discount": this.get_item?.discount,
                "hsn_cgst": parseFloat(hsn_cgst),
                "hsn_igst": parseFloat(hsn_igst),
                "hsn_rate": parseFloat(hsn_rate),
                "hsn_sgst": parseFloat(hsn_sgst),
                "hsn_amount": parseFloat(hsn_amount),
                "image": this.get_item?.images,
                "giftWrapAmount": this.get_item?.giftWrapAmount,
                "invoice_id": invoiceId,
                "paymentMode": this.get_array?.paymentData?.paymentMode,
                "mrp": this.get_item?.mrp,
                "order_id": this.get_item?.orderId,
                "order_date": moment(this.get_item?.createdOn, "DD/MM/YYYY hh:mm:ss").format('DD/MM/YYYY'),
                "order_status": "DELIVERED",
                "product_id": this.get_item?.productId,
                "product_sku": this.get_item?.productSku,
                "remarks": '',
                "sales_price": salesPrice,
                "size": this.get_item?.size,
                "tax_type": this.get_item?.taxType,
                "total_tax": total_tax,
                "units": this.get_item?.units,
                "user_id": this.get_item?.userId
              }
            ],
            "service_charge": {
              "cgst": 0,
              "date": moment(this.currentDateTime, 'YYYY-MM-DD hh:mm:ss').format('DD/MM/YYYY'),
              "fee": fee,
              "igst": igst,
              "rate": 14,
              "remarks": "",
              "sgst": 0,
              "status": 'NOT PAID',
              "tcs": tcs,
              "tcs_rate": 1,
              "total_amount": fee + igst + tcs,
              "total_tax": igst + tcs,
              "units": this.get_item?.units
            }
          }
          this.GenarateAccountDataSubscribe = this.http.post("account/add", accountData).subscribe(
            (res: any) => {
            },
            (error) => {
            });


          // console.log('accountData',accountData);
        },
        (error: any) => { },
      );



    } else if (identifier == 'forceReturnOnModal') {
      this.orderItemStatus = 'ForceReturnAdmin';
      body = {
        "forceReturnOnDTO": {
          "comments": form.value.comments,
          "dateTime": this.currentDateTime,
          "updatedBy": {
            adminId: this.authData.uid,
            email: this.authData.email,
            mobileNo: this.authData.mobileNo,
            firstName: this.authData.firstName,
            lastName: this.authData.lastName,
            name: this.authData.firstName + ' ' + this.authData.lastName
          }
        }
      }


    } else if (identifier == 'returnApprove') {
      var orderItemStatus = 'Return request approved', isReturn = true;
      if (form.value.isReturn == "false") {
        orderItemStatus = 'Return rejected by admin'
        isReturn = false;
        body = {
          "returnRejectedByAdmin": {
            "comments": form.value.comment,
            "isReturn": isReturn,
            "dateTime": this.currentDateTime,
            "updatedBy": {
              adminId: this.authData.uid,
              email: this.authData.email,
              mobileNo: this.authData.mobileNo,
              firstName: this.authData.firstName,
              lastName: this.authData.lastName,
              name: this.authData.firstName + ' ' + this.authData.lastName
            }
          }

        }
      }
      else {
        let forceReturnByAdmin = false;
        if (this.get_identifier == 'forceReturnModal') {
          forceReturnByAdmin = true
        }
        body = {
          "ReturnRequestApproveDTO": {
            "comments": form.value.comment,
            "isReturn": true,
            "dateTime": this.currentDateTime,
            "forceReturnByAdmin": forceReturnByAdmin,
            "updatedBy": {
              adminId: this.authData.uid,
              email: this.authData.email,
              mobileNo: this.authData.mobileNo,
              firstName: this.authData.firstName,
              lastName: this.authData.lastName,
              name: this.authData.firstName + ' ' + this.authData.lastName
            }
          }

        }
      }
      this.orderItemStatus = orderItemStatus;

    } else if (identifier == 'designerRecevedreturn') {
      body = {
        "designerRecevedreturn": {
          "courierName": form.value.courierName,
          "awbNumber": form.value.awbNumber
        }
      }
    } else if (identifier == 'returnRefund') {
      let isReturn = true;
      if (form.value.isReturn == 'false') {
        this.orderItemStatus = "Rejected"
        isReturn = false;
      }
      body = {
        orderItemStatus: this.orderItemStatus,
        orderStatusDetails: {
          cancelOrderDetails: this.get_item.orderStatusDetails?.cancelOrderDetails,
          cancelRequestDetails: this.get_item.orderStatusDetails?.cancelRequestDetails,
          command: this.get_item.orderStatusDetails?.command,
          deliveryDetails: this.get_item.orderStatusDetails?.deliveryDetails,
          ordersDetails: this.get_item.orderStatusDetails?.ordersDetails,
          packedDetails: this.get_item.orderStatusDetails?.packedDetails,
          shippedDetails: this.get_item.orderStatusDetails?.shippedDetails,
          cancelFromUser: this.get_item.orderStatusDetails?.cancelFromUser,
          returnFromUser: this.get_item.orderStatusDetails?.returnApproveFromAdmin,
          returnRequestApprove: this.get_item.orderStatusDetails?.returnRequestApprove,
          designerReceivedProduct: this.get_item.orderStatusDetails?.designerReceivedProduct,
          userShippedProduct: this.get_item.orderStatusDetails?.userShippedProduct,
          forceReturnOnDTO: this.get_item.orderStatusDetails?.userShippedProduct,
          returnApproveFromAdmin: this.get_item.orderStatusDetails?.returnApproveFromAdmin,
          returnFromAdmin: {
            comment: form.value.comment,
            isReturn: isReturn,
            dateTime: this.currentDateTime,
          }

        }
      }
    } else if (identifier == 'ForceReturn') {
      this.orderItemStatus = 'ForceReturnAdmin';
      body = {
        "forceReturnOnDTO": {
          "comments": form.value.comments,
          "dateTime": this.currentDateTime,
          "updatedBy": {
            adminId: this.authData.uid,
            email: this.authData.email,
            mobileNo: this.authData.mobileNo,
            firstName: this.authData.firstName,
            lastName: this.authData.lastName,
            name: this.authData.firstName + ' ' + this.authData.lastName
          }
        }
      }


    }

    setTimeout(() => {
      var api;

      if (identifier == 'returnRefund') {
        api = "userOrder/orderStatusUpdate/" + this.orderId + "/" + this.productId;
        this.statusChangeSubscribe = this.http.put(api, body).subscribe(
          (res: any) => {
            this.commonUtils.presentToast('success', res.message);
            this.closeModal();
          },
          (errRes: any) => {
            this.commonUtils.presentToast('error', errRes.error.message)
          }
        );
      }
      else {

        api = 'userOrder/itemStatusChangefromAdmin?orderId=' + this.orderId + '&productId=' + this.productId + '&orderItemStatus=' + this.orderItemStatus + '&size=' + this.get_item.size;
        this.statusChangeSubscribe = this.http.post(api, body).subscribe(
          (res: any) => {
            this.commonUtils.presentToast('success', res.message);
            this.closeModal();
          },
          (errRes: any) => {
            this.commonUtils.presentToast('error', errRes.error.message)
          }
        );
      }

    }, 500);

  }
  // changeDateFormat start
  // setdesignerProfiledata start
  setdesignerProfiledata() {
    this.designerprofiledata = this.get_item;
    this.designerprofiledata =
    {

      designerId: this.get_item.designerId,
      firstName1: this.get_item.designerProfile.firstName1,
      lastName1: this.get_item.designerProfile.lastName1,
      firstName2: this.get_item.designerProfile.firstName2,
      lastName2: this.get_item.designerProfile.lastName2,
      displayName: this.get_item.designerProfile.displayName,
      email: this.get_item.designerProfile.email,
      password: this.get_item.designerProfile.password,
      profilePic: this.get_item.designerProfile.profilePic,
      mobileNo: this.get_item.designerProfile.mobileNo,
      altMobileNo: this.get_item.designerProfile.altMobileNo,
      maritalStatus: this.get_item.designerProfile.maritalStatus,
      gender: this.get_item.designerProfile.gender,
      qualification: this.get_item.designerProfile.qualification,
      address: this.get_item.socialProfile.address,
      achievements: this.get_item.socialProfile.achievements,
      description: this.get_item.socialProfile.description,
      facebookLink: this.get_item.socialProfile.facebookLink,
      instagramLink: this.get_item.socialProfile.instagramLink,
      youtubeLink: this.get_item.socialProfile.youtubeLink,
      boutiqueName: this.get_item.boutiqueProfile.boutiqueName,
      firmName: this.get_item.boutiqueProfile.firmName,
      experience: this.get_item.boutiqueProfile.experience,
      gstin: this.get_item.boutiqueProfile.gstin,
      operatingCity: this.get_item.boutiqueProfile.operatingCity,
      professionalCategory: this.get_item.boutiqueProfile.professionalCategory,
      yearOfOperation: this.get_item.boutiqueProfile.yearOfOperation,
      state: this.get_item.designerProfile.state,
      city: this.get_item.designerProfile.city,
      country: this.get_item.designerProfile.country,

    }
    this.designerprofiledata.dob = moment(this.get_item.designerProfile.dob).format('YYYY-MM-DD');
    // console.log("this.profiledata",this.designerprofiledata,this.designerprofiledata.dob);

    if (this.get_item.designerPersonalInfoEntity) {
      this.previewimageSrc_aadher = this.get_item.designerPersonalInfoEntity.designerDocuments.aadharCard;;
      this.previewimageSrc_pan = this.get_item.designerPersonalInfoEntity.designerDocuments.panCard;
      this.designerprofiledata.bankName = this.get_item.designerPersonalInfoEntity.bankDetails.bankName;
      this.designerprofiledata.accountNumber = this.get_item.designerPersonalInfoEntity.bankDetails.accountNumber;
      this.designerprofiledata.ifscCode = this.get_item.designerPersonalInfoEntity.bankDetails.ifscCode;
    }

  }
  // setdesignerProfiledata end

  // data for profile edit end
  // changeDateFormat start
  changeDateFormat(_identifier, _date) {
    // console.log("_identifier",_identifier,_date,this.adminprofiledata.dob,this.designerprofiledata.designerProfile.dob);
    if (_identifier == 'DESIGNER') {
      this.model.designerdob = moment(_date).format('YYYY/MM/DD');
    } else if (_identifier == 'ADMIN') {
      this.adminprofiledata.dob = moment(_date).format('YYYY/MM/DD');
      // console.log("this.model.admindob",this.adminprofiledata.admindob);

    } else if (_identifier == 'Approval') {
      this.model.ApprovalDate = moment(_date).format('YYYY/MM/DD');
    } else if (_identifier == 'del_date') {
      this.model.deliveredDate = moment(_date).format('YYYY/MM/DD');

    } else if (_identifier == 'del_Expdate') {
      this.model.deliveryExpectedDate = moment(_date).format('YYYY/MM/DD');
    } else if (_identifier == 'delivered_time') {
      this.model.deliveredDate = moment(_date).format('YYYY/MM/DD');
    } else if (_identifier == 'export_start') {
      this.model.startDate = moment(_date).format('DD/MM/YYYY');
    } else if (_identifier == 'export_end') {
      this.model.endDate = moment(_date).format('DD/MM/YYYY');
    } else if (_identifier == 'deliver_date') {
      this.model.deliver_date = moment(_date).format('DD/MM/YYYY');
    } else if (_identifier == 'deliveredDate') {
      this.model.deliveredDate = moment(_date).format('YYYY-MM-DD');
      // this.model.deliveredDate = _date;
    } else if (_identifier == 'payment') {
      this.model.payment_datetime = moment(_date).format('YYYY/MM/DD');
    } else if (_identifier == 'updatedDatetime') {
      this.model.updated_datetime = moment(_date).format('YYYY-MM-DD hh:mm:ss');
    } else if (_identifier == 'gov_Date') {
      this.model.govdate = moment(_date).format('YYYY-MM-DD hh:mm:ss');
    }
    // console.log("_identifier",_identifier,_date,this.adminprofiledata.dob,this.designerprofiledata.designerProfile.dob);

  }

  dateFormatChange(_identifier, event: MatDatepickerInputEvent<Date>) {

    // this.model.effectiveDate = moment(event.value).format('YYYY/MM/DD');
    if (_identifier == 'ADMIN') {
      this.adminprofiledata.dob = moment(event.value).format('YYYY/MM/DD');
    } else if (_identifier == 'deliveredDate') {
      this.model.deliveredDate = moment(event.value).format('YYYY-MM-DD');
    } else if (_identifier == 'payment') {
      this.model.payment_datetime = moment(event.value).format('YYYY/MM/DD');
      this.checkValidtion('paymentDate');
    } else if (_identifier == 'updatedDatetime') {
      this.model.updated_datetime = moment(event.value).format('YYYY-MM-DD hh:mm:ss');
      this.checkValidtion('updatedDatetime');
    } else if (_identifier == 'service_Date') {
      this.model.servicedate = moment(event.value).format('YYYY-MM-DD hh:mm:ss');
    } else if (_identifier == 'gov_Date') {
      this.model.govdate = moment(event.value).format('YYYY-MM-DD hh:mm:ss');
    }


  }
  // changeDateFormat end

  // ChangepswForm start
  onSubmitChangepswForm(form: NgForm) {
    this.btnloader2 = true;
    var data = {
      newPass: form.value.newPass,
      oldPass: form.value.oldPass,
      userName: form.value.userName,
      userType: 'Admin'
    }
    // console.log("Change Password-->",form.value);
    this.http.post("auth/changePassword", data).subscribe(
      (res: any) => {
        // console.log("res",res);
        this.btnloader2 = false;
        this.commonUtils.presentToast('success', res.message);
        this.closeModal();
      },
      (error) => {
        console.log("error", error);
        this.btnloader2 = false;
        this.commonUtils.presentToast('error', error.error.message);
      })

  }
  // ChangepswForm end
  private aadharCardfile: string = '';
  private panCardfile: string = '';
  private fileType;
  private previewimageSrc: string = '';
  handleInputChange(e, type) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    if (type == 'aadharCard') {
      this.fileType = type;
      this.aadharCardfile = e.target.files[0];
      var fd = new FormData();
      fd.append("file", e.target.files[0]);
      this.http.post("admin/profile/s3/upload", fd).subscribe(
        (res: any) => {
          this.previewimageSrc_aadher = res.path;
          this.designerprofiledata.aadharCard = res.path;
          // console.log("profileimgpath",this.aadharCardfile);
          // this.commonUtils.presentToast('success', res.message);
        },
        (error) => {
          console.log("error", error);
          this.commonUtils.presentToast('error', error.error.message);
        })
    } else if (type == 'panCard') {
      this.fileType = type;
      this.panCardfile = e.target.files[0];
      var fd = new FormData();
      fd.append("file", e.target.files[0]);
      this.http.post("admin/profile/s3/upload", fd).subscribe(
        (res: any) => {
          this.previewimageSrc_pan = res.path;
          this.designerprofiledata.aadharCard = res.path;
          // console.log("profileimgpath",this.panCardfile);
          // this.commonUtils.presentToast('success', res.message);
        },
        (error) => {
          console.log("error", error);
          this.commonUtils.presentToast('error', error.error.message);
        })
    }

    reader.readAsDataURL(file);
  }
  // onSubmitdesignerProfileForm start
  onSubmitdesignerProfileForm(form: NgForm) {
    // console.log("form",form.value);

    this.formloader = true;
    var boutiqueProfile = {
      boutiqueName: form.value.boutiqueName,
      experience: form.value.experience,
      firmName: form.value.firmName,
      gstin: form.value.gstin,
      operatingCity: form.value.operatingCity,
      professionalCategory: form.value.professionalCategory,
      yearOfOperation: form.value.yearOfOperation,
    }
    this.designerProfile;

    if (form.value.dob == undefined) {
      // this.designerProfile = {
      //   dob:
      // }
      var dob = moment(this.designerprofiledata.dob).format('YYYY/MM/DD');
    }
    else {
      // this.designerProfile = {
      //   dob:form.value.dob,

      // }
      dob = form.value.dob;
    }
    this.designerProfile = {
      altMobileNo: form.value.altMobileNo,
      profilePic: form.value.profilePic,
      displayName: form.value.displayName,
      email: this.designerprofiledata.email,
      password: this.designerprofiledata.password,
      firstName1: form.value.firstName1,
      firstName2: form.value.firstName2,
      gender: form.value.gender,
      lastName1: form.value.lastName1,
      lastName2: form.value.lastName2,
      maritalStatus: form.value.maritalStatus,
      mobileNo: form.value.mobileNo,
      qualification: form.value.qualification,
      dob: dob,
      country: form.value.country,
      state: form.value.state,
      city: form.value.city,

    }
    var socialProfile = {
      achievements: form.value.achievements,
      address: form.value.address,
      description: form.value.description,
      facebookLink: form.value.facebookLink,
      instagramLink: form.value.instagramLink,
      youtubeLink: form.value.youtubeLink,
    }

    var designerPersonalInfoEntity = {
      designerId: this.designerprofiledata.designerId,
      bankDetails: {
        accountNumber: form.value.accountNumber,
        bankName: form.value.bankName,
        ifscCode: form.value.ifscCode
      },
      designerDocuments: {
        aadharCard: this.previewimageSrc_aadher,
        panCard: this.previewimageSrc_pan,
        void_check: form.value.void_check
      }
    }
    this.alldesignerProfiledata = {
      boutiqueProfile: boutiqueProfile,
      designerProfile: this.designerProfile,
      socialProfile: socialProfile,
      designerPersonalInfoEntity: designerPersonalInfoEntity,
      email: this.designerprofiledata.email,
      password: this.designerprofiledata.password,
      designerId: this.designerprofiledata.designerId,
      designerName: this.designerprofiledata.firstName1 + ' ' + this.designerprofiledata.lastName1
    }

    // this.allProfiledata = form.value
    // console.log("this.designerprofiledata",this.alldesignerProfiledata);

    // console.log(form.value);
    this.profileupdateSubcribe = this.http.put(this.profileupdateApi, this.alldesignerProfiledata).subscribe((res: any) => {
      this.formloader = false;
      this.closeModal()
      // window.location.reload();
      this.commonUtils.presentToast('success', res.message);
    }, error => {
      this.formloader = false;
      console.log("error", error);
      this.commonUtils.presentToast('error', error.error.message);
      // recall category list
    })
  }
  // onSubmitdesignerProfileForm end
  // onSubmitadminProfileForm start
  onSubmitadminProfileForm(form: NgForm) {
    this.alladminprofileProfiledata = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      gender: form.value.gender,
      gstIn: form.value.gstIn,
      pan: form.value.pan,
      city: form.value.city,
      country: form.value.country,
      state: form.value.state,
      pin: form.value.pin,
      dob: form.value.dob,
      profilePic: form.value.profilePic,
      password: this.adminprofiledata.password,
      roleName: this.adminprofiledata.roleName,
      mobileNo: this.adminprofiledata.mobileNo,
      uid: this.adminprofiledata.uid,
      role: this.adminprofiledata.role,
    }


    // console.log("this.allProfiledata",this.alladminprofileProfiledata);

    // console.log(form.value);
    this.profileupdateSubcribe = this.http.put(this.profileupdateApi, this.alladminprofileProfiledata).subscribe((res: any) => {
      this.closeModal()
      this.commonUtils.presentToast('success', res.message);
    }, error => {
      console.log("error", error);
      this.commonUtils.presentToast('error', error.error.message);
    })
  }
  // onSubmitadminProfileForm end
  // approveProduct start
  onSubmitapproveProduct(form: NgForm) {
    var data: any = [];
    data = this.get_item.item.productStageDetails.comment;
    // console.log(this.get_item,this.get_item.item.comments.length);
    // if no comment
    if (this.get_item.item.productStageDetails.comment == null) {
      this.storage.get('setStroageGlobalParamsData').then((val) => {
        // console.log('All User Data', val.uid);
        this.role = val.authority;
        data = [
          {
            Reason: this.get_item.type,
            comments: form.value.comment,
            adminId: val.uid,
            dateTime: this.currentDate,
          }
        ]
      });
    }
    // // if comment have
    else {
      this.storage.get('setStroageGlobalParamsData').then((val) => {
        // console.log('All User Data', val.uid);
        this.role = val.authority;
        data.push({
          Reason: this.get_item.type, comments: form.value.comment, adminId: val.uid, dateTime: this.currentDate,
        })
      });
    }
    this.btnloader = true;
    this.storage.get('setStroageGlobalParamsData').then((val) => {
      // console.log('All User Data', val.uid);
      this.role = val.authority;
      let comment = {
        adminStatus: this.get_item.type,
        approvedBy: val.uid,
        comments: data,
        productId: this.get_item.item.productId,
        designerId: this.get_item.item.designerId,
      }
      // console.log("comment",comment);

      this.approveProductSubscribe = this.http.put('product/changeProductApprovalStatus', comment).subscribe(
        (res: any) => {
          this.commonUtils.presentToast('success', res.message);
          this.btnloader = false;
          this.closeModal();
        },
        (error) => {
          console.log("errorerror", error);
          this.btnloader = false;
          this.commonUtils.presentToast('error', error.error.message);

        })
    });

  }
  // approveProduct end
  // onSubmitdesignerRejectForm start
  onSubmitdesignerRejectForm(form: NgForm) {

    // console.log(this.get_item);  
    var formData = {
      adminComment: form.value.comment,
      dId: this.get_item.dId,
      uid: this.get_item.uid,
      isActive: this.get_item.isActive,
      profileStatus: this.get_item.profileStatus,
      isDeleted: this.get_item.isDeleted,
      isProfileCompleted: this.get_item.isProfileCompleted,
      isProfileSubmitted: this.get_item.isProfileSubmitted,
      displayName: this.get_item.displayName,
      designerCategory: this.get_item.designerCategory,
    }
    this.btnloader = true;
    this.approveProductSubscribe = this.http.put('designer/update', formData).subscribe(
      (res: any) => {
        this.commonUtils.presentToast('success', res.message);
        this.btnloader = false;
        this.closeModal();
      },
      (error) => {
        console.log("errorerror", error);
        this.btnloader = false;
        this.commonUtils.presentToast('error', error);

      })

  }
  // onSubmitdesignerRejectForm end
  // onSubmitdesignerApproveForm start
  onSubmitdesignerApproveForm(form: NgForm) {

    // console.log(this.get_item);  
    var formData = {
      designerCategory: form.value.designerCategory,
      displayName: form.value.displayName,
      dId: this.get_item.dId,
      uid: this.get_item.uid,
      isActive: this.get_item.isActive,
      profileStatus: this.get_item.profileStatus,
      isDeleted: this.get_item.isDeleted,
      isProfileCompleted: this.get_item.isProfileCompleted,
      isProfileSubmitted: this.get_item.isProfileSubmitted,
    }
    this.btnloader = true;
    this.approveProductSubscribe = this.http.put('designer/update', formData).subscribe(
      (res: any) => {
        this.commonUtils.presentToast('success', res.message);
        this.btnloader = false;
        this.closeModal();
      },
      (error) => {
        console.log("errorerror", error);
        this.btnloader = false;
        this.commonUtils.presentToast('error', error.error.message);

      })

  }
  // onSubmitdesignerApproveForm end
  // closeModal start
  closeModal() {
    this.modalController.dismiss();
  }
  // closeModal end
  // passwordvalid start
  passwordvalid(new_password, conform_password) {
    if (conform_password == undefined) {
      this.error = '';

    } else if (new_password != conform_password) {
      this.error = "New password and conform password  not match.";
      setTimeout(() => {                           // <<<---using ()=> syntax
        // this.error = "";
      }, 3000);
    } else if (new_password == conform_password) {
      this.error = "";
    }
    else {
      this.error = "";
    }

  }
  // passwordvalid end
  // onSubmitDispatchForm start
  onSubmitDispatchForm(form: NgForm) {
    // console.log("form",form.value,this.get_item);
    this.get_item.trackingHistory[0].comment = form.value.comment;
    this.changeorderStatusSubscribe = this.http.post("userOrder/track/add", this.get_item).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitDispatchForm end
  // onSubmitShipmentAdminForm start
  onSubmitShipmentAdminForm(form: NgForm) {
    // console.log("SHIPPING DATA",this.get_array,this.get_item);

    var data: any = {}, time, todate;
    var trackingHistory: any = [];
    if (this.get_array.TrackingData) {
      trackingHistory = this.get_array.TrackingData.trackingHistory;
    }
    var day = new Date();
    // console.log(day,day.getMinutes());
    if (day.getSeconds() > 10) {
      time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
    }
    else {
      time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
    }
    // console.log(day,time);
    todate = moment(day).format('YYYY/MM/DD');
    // console.log("form",form.value,this.get_item);
    this.get_item.deliveredDate = form.value.deliveredDate;
    this.get_item.deliveryStatus = "shipment";
    this.get_item.deliveryStarted = form.value.deliveryStarted;
    // this.get_item.trackingHistory[1].comment = form.value.comment;
    this.authService.globalparamsData.subscribe((res) => {
      // console.log("trackingHistory", res,trackingHistory);
      if (res.authority != "DESIGNER") {
        {
          trackingHistory.push({ time: time, date: todate, comment: form.value.comment, adminId: res.uid, auth: res.authority, type: 'shipment' });
        }
      }
      // console.log("trackingHistory", res,trackingHistory);
    });
    this.get_item.deliveryMode = form.value.deliveryMode;
    this.get_item.deliveryExpectedDate = form.value.deliveryExpectedDate;
    // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
    this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, this.get_item).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.genInvoice();
        // this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  genInvoice() {
    var designerData: any = {}, data: any = {};
    this.getDesignerSubscribe = this.http.get("designer/" + this.get_array.designerId).subscribe(
      (res: any) => {
        // this.commonUtils.presentToast("success", res.message);
        designerData = res;
        data = {
          designerDetails: {
            GSTIN: designerData.boutiqueProfile.gstin,
            PAN: '',
            name: designerData.designerName,
            mobile: designerData.designerProfile.mobileNo,
            address: designerData.socialProfile.address,
          },
          invoiceDatetime: '',
          invoiceId: '',
          orderDatetime: this.get_array.moredata.orderDate,
          orderId: this.get_array.moredata.orderId,
          productDetails: {
            colour: this.get_array.colour,
            createdOn: this.get_array.createdOn,
            designerId: this.get_array.designerId,
            discount: this.get_array.discount,
            id: this.get_array.id,
            images: this.get_array.images,
            mrp: this.get_array.mrp,
            orderId: this.get_array.orderId,
            orderItemStatus: this.get_array.orderItemStatus,
            productId: this.get_array.productId,
            productName: this.get_array.productName,
            productSku: this.get_array.productSku,
            reachedCentralHub: this.get_array.reachedCentralHub,
            salesPrice: this.get_array.salesPrice,
            size: this.get_array.size,
            taxAmount: this.get_array.taxAmount,
            taxType: this.get_array.taxType,
            units: this.get_array.units,
            updatedOn: this.get_array.updatedOn,
            userId: this.get_array.userId,
          },
          userDetails: {
            userId: this.get_array.moredata.userId,
            shipping_address: this.get_array.moredata.shippingAddress,
            billing_address: this.get_array.moredata.billingAddress,
            mobile: this.get_array.moredata.billingAddress.mobile,
          },
        }
        setTimeout(() => {
          this.GenarateInvoiceSubscribe = this.http.post("userOrder/invoices/add", data).subscribe(
            (res: any) => {
              // this.commonUtils.presentToast("success", res.message);
              this.closeModal();
            },
            (error) => {
              setTimeout(() => {
                this.commonUtils.presentToast("success", error.error.message);
                // if(error.error.message =='Invoice already exist!')
                // {
                this.closeModal();
                // }
              }, 1000);
            }
          );
        }, 500);

        // console.log("getDesignerSubscribe",res,data);

      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );



  }
  // getState start
  // SelectedCountry start
  SelectedCountry(id) {
    this.getState();
    this.adminprofiledata.state = null;
  }
  // SelectedCountry end
  getState() {
    this.stateLoading = true;
    this.getStateData = this.http.get("user/getStateData").subscribe(
      (res: any) => {
        this.stateList = res
        this.stateLoading = false;
      },
      (erroe) => {
        this.stateLoading = false;
      });
  }
  // getState end

  // onSubmitShipmentAdminForm end
  // onSubmitDeliveryAdminForms start
  onSubmitDeliveryAdminForm(form: NgForm) {
    var data: any = {}, time, todate;
    var trackingHistory: any = [];
    trackingHistory = this.get_array.TrackingData.trackingHistory;
    var day = new Date();
    // console.log(day,day.getMinutes());
    if (day.getSeconds() > 10) {
      time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
    }
    else {
      time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
    }
    // console.log(day,time);
    todate = moment(day).format('YYYY/MM/DD');
    // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
    this.get_item.deliveredDate = form.value.del_Time;
    this.get_item.deliveryStarted = this.get_item.deliveryStarted;
    this.get_item.deliveryStatus = "out_for_delivery";
    // this.get_item.trackingHistory[1].comment = form.value.comment;
    this.authService.globalparamsData.subscribe((res) => {
      // console.log("trackingHistory", res,trackingHistory);
      if (res.authority != "DESIGNER") {
        {
          trackingHistory.push({ outdeliverytime: form.value.del_Time, date: todate, comment: form.value.comment, adminId: res.uid, auth: res.authority, type: 'out_for_delivery', deliverypartnername: form.value.deliverypartnername, deliverypartnerNumber: form.value.deliverypartnerNumber });
        }
      }
      // console.log("trackingHistory", res,trackingHistory);
    });
    this.get_item.deliveryMode = this.get_item.deliveryMode;
    this.get_item.deliveryExpectedDate = this.get_item.deliveryExpectedDate;
    // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
    this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, this.get_item).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitDeliveryAdminForm end
  // onSubmitDeliveredAdminForm start
  onSubmitDeliveredAdminForm(form: NgForm) {
    var data: any = {}, time, todate;
    var trackingHistory: any = [];
    trackingHistory = this.get_array.TrackingData.trackingHistory;
    var day = new Date();
    // console.log(day,day.getMinutes());
    if (day.getSeconds() > 10) {
      time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
    }
    else {
      time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
    }
    // console.log(day,time);
    todate = moment(day).format('YYYY/MM/DD');
    // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
    this.get_item.deliveryStatus = "delivered";
    // this.get_item.deliveryStarted = form.value.deliveryStarted;
    // this.get_item.trackingHistory[1].comment = form.value.comment;
    this.authService.globalparamsData.subscribe((res) => {
      // console.log("trackingHistory", res,trackingHistory);
      if (res.authority != "DESIGNER") {
        {
          trackingHistory.push({ delivered_time: form.value.delivered_time, date: todate, comment: form.value.comment, adminId: res.uid, auth: res.authority, type: 'delivered', deliverypartnername: form.value.deliverypartnername, deliverypartnerNumber: form.value.deliverypartnerNumber });
        }
      }
      // console.log("trackingHistory", res,trackingHistory);
    });
    this.get_item.deliveryMode = form.value.deliveryMode;
    this.get_item.deliveredDate = form.value.deliveredDate;
    // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
    this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, this.get_item).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitDeliveredAdminForm end
  // onSubmitDeliveredCancelAdminForm start
  onSubmitDeliveredCancelAdminForm(form: NgForm) {
    var body = {
      comment: form.value.comment,
      orderStatus: "cancelled",
      dateTime: this.currentDateTime
    }
    this.changeorderStatusSubscribe = this.http.post("userOrder/adminCancelation/?orderId=" + this.get_item.orderId + "&productId=" + this.get_item.productId + '&size=' + this.get_item.size, body).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitDeliveredCancelAdminForm end
  // onSubmitDeliveredCancelDesignerForm start
  onSubmitDeliveredCancelDesignerForm(form: NgForm) {
    var data: any = {}, time, todate;
    var trackingHistory: any = [];

    var day = new Date();
    // console.log(day,day.getMinutes());
    if (day.getSeconds() > 10) {
      time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds();
    }
    else {
      time = day.getHours() + ':' + day.getMinutes() + ':0' + day.getSeconds();
    }
    // console.log(day,time);
    todate = moment(day).format('YYYY/MM/DD');
    // console.log("form",form.value,this.get_item);
    // this.get_item.deliveredDate = form.value.deliveredDate;
    this.get_item.deliveryStatus = "cancel";
    this.get_item.deliveryStarted = form.value.deliveryStarted;
    // this.get_item.trackingHistory[1].comment = form.value.comment;
    if (this.get_array.TrackingData) {
      trackingHistory = this.get_array.TrackingData.trackingHistory;
      this.authService.globalparamsData.subscribe((res) => {

        trackingHistory.push({ time: time, date: todate, comment: form.value.comment, designerId: res.uid, auth: res.authority, type: 'cancel' });
        // console.log("trackingHistory", res,trackingHistory);
      });
      // console.log("trackingHistory", data,trackingHistory);
    }

    if (this.get_array.TrackingData) {
      data = {
        deliveredDate: this.get_array.TrackingData.deliveredDate,
        deliveryExpectedDate: this.get_array.TrackingData.deliveryExpectedDate,
        deliveryMode: this.get_array.TrackingData.deliveryMode,
        deliveryStarted: this.get_array.TrackingData.deliveryStarted,
        deliveryStatus: "cancel",
        deliveryType: this.get_array.TrackingData.deliveryType,
        designerId: this.get_array.TrackingData.designerId,
        id: this.get_array.TrackingData.id,
        orderId: this.get_array.TrackingData.orderId,
        procuctSku: this.get_array.TrackingData.procuctSku,
        productId: this.get_array.TrackingData.productId,
        trackingHistory: trackingHistory,
        trackingId: this.get_array.TrackingData.trackingId,
        trackingUrl: this.get_array.TrackingData.trackingUrl,
        userId: this.get_array.TrackingData.userId
      };
    } else {
      this.authService.globalparamsData.subscribe((res) => {

        trackingHistory.push({ time: time, date: todate, comment: "", designerId: res.uid, auth: res.authority, type: 'cancel' });
        // console.log("trackingHistory", res,trackingHistory);
        data = {
          deliveredDate: "",
          deliveryExpectedDate: "",
          deliveryMode: "",
          deliveryStarted: "",
          deliveryStatus: "cancel",
          deliveryType: "",
          designerId: res.uid,
          orderId: this.get_array.orderId,
          procuctSku: "",
          productId: this.get_item.productId,
          trackingHistory: trackingHistory,
          trackingId: "",
          trackingUrl: "",
          userId: this.get_array.userId,
          orderItemStatus: "cancel"
        };

      });
      // console.log(data);

      this.changeorderStatusSubscribe = this.http.post("userOrder/track/add", data).subscribe(
        (res: any) => {
          this.commonUtils.presentToast("success", res.message);
          this.closeModal();
        },
        (error) => {
          this.commonUtils.presentToast("success", error.error.message);
        }
      );

    }

    // console.log("trackingHistory", data,trackingHistory);
    // console.log("form",form.value,this.get_item,this.get_array.TrackingData.trackingId);
    this.changeorderStatusSubscribe = this.http.put("userOrder/track/update/" + this.get_array.TrackingData.trackingId, data).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitDeliveredCancelDesignerForm end
  onSubmitcancelledApprovalForm(form: NgForm) {
    var data = {
      "comment": form.value.comment,
      "orderStatus": form.value.orderStatus,
      'dateTime': this.currentDateTime
    };
    this.changeorderStatusSubscribe = this.http.post("userOrder/adminApprovalCancelation?designerId=" + this.get_item.designerId + "&orderId=" + this.get_item.orderId + "&productId=" + this.get_item.productId + '&size=' + this.get_item.size, data).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        if (form.value.orderStatus == 'cancelled') {
          this.stockRecorverSubscribe = this.http.put('designerProduct/stockRecoverService', this.get_item).subscribe((response: any) => { },
            errRes => { this.commonUtils.presentToast("success", errRes.error.message); });
        }
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitRefundApprovalForm
  onSubmitReturnApprovalForm(form: NgForm) {
    var orderStatusDetails: any = {}, orderItemStatus = 'Return request approved', isReturn = true;
    if (form.value.isReturn == 'false') {
      orderItemStatus = 'Rejected'
      isReturn = false;
    }
    if (this.get_item.orderStatusDetails) {

      orderStatusDetails = {
        orderItemStatus: orderItemStatus,
        orderStatusDetails: {
          cancelOrderDetails: this.get_item.orderStatusDetails?.cancelOrderDetails,
          cancelRequestDetails: this.get_item.orderStatusDetails?.cancelRequestDetails,
          command: this.get_item.orderStatusDetails?.command,
          deliveryDetails: this.get_item.orderStatusDetails?.deliveryDetails,
          ordersDetails: this.get_item.orderStatusDetails?.ordersDetails,
          packedDetails: this.get_item.orderStatusDetails?.packedDetails,
          shippedDetails: this.get_item.orderStatusDetails?.shippedDetails,
          cancelFromUser: this.get_item.orderStatusDetails?.cancelFromUser,
          returnFromUser: this.get_item.orderStatusDetails?.returnFromUser,
          returnFromAdmin: this.get_item.orderStatusDetails?.returnFromAdmin,
          returnApproveFromAdmin: {
            comment: form.value.comment,
            isReturn: isReturn,
            dateTime: this.currentDateTime,
          }
        }
      }

    }
    else {
      orderStatusDetails = {
        orderItemStatus: orderItemStatus,
        orderStatusDetails: {
          // returnApproveFromAdmin:{
          //   comment:form.value.comment,
          //   isReturn:isReturn,
          //   dateTime:this.currentDateTime,
          // }
          returnApproveFromAdmin: {
            comment: form.value.comment,
            isReturn: isReturn,
            dateTime: this.currentDateTime,
          }
        }
      }
    }
    this.changeorderStatusSubscribe = this.http.put("userOrder/orderStatusUpdate/" + this.get_item.orderId + "/" + this.get_item.productId, orderStatusDetails).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitOrderExport start
  // onSubmitaccountStatusForm start
  onSubmitaccountStatusForm(form: NgForm) {
    this.validForm = false;
    // paymentDate
    if (form.value.payment_datetime == 'Invalid date') {
      this.errorList.paymentDate = 'Select a payment date';
      this.validForm = false;
    }else if (form.value.payment_datetime) {
      this.errorList.paymentDate = '';
      this.validForm = true;
    } else {
      this.errorList.paymentDate = 'Select a payment date';
      this.validForm = false;
    }

    // updatedDatetime
    if (form.value.updated_datetime == 'Invalid date') {
      this.errorList.updatedDatetime = 'Select a payment date';
      this.validForm = false;
    }else if (form.value.updated_datetime) {
      this.errorList.updatedDatetime = '';
      this.validForm = true;
    } else {
      this.errorList.updatedDatetime = 'Select a date';
      this.validForm = false;
    }

    // status
    if (form.value.status) {
      this.errorList.status = '';
      this.validForm = true;
    } else {
      this.errorList.status = 'Select a status';
      this.validForm = false;
    }

    this.get_item.designer_return_amount[0].status = form.value.status;
    this.get_item.designer_return_amount[0].remarks = form.value.remarks;
    this.get_item.designer_return_amount[0].payment_datetime = form.value.payment_datetime;
    this.get_item.designer_return_amount[0].updated_by = this.authData.uid;
    this.get_item.designer_return_amount[0].updated_datetime = this.currentDateTime;
    var data: any = {
      admin_details: {
        "address": this.authData?.city + ',' + this.authData?.state + ',' + this.authData?.country,
        "admin_id": this.authData?.uid,
        "gstIn": this.authData?.gstIn,
        "pan": this.authData?.pan,
        "pin": this.authData?.pin,
        "mobile": this.authData?.mobileNo,
        "name": this.authData?.firstName + ' ' + this.authData?.lastName,
        "gender": this.authData?.gender
      },
      designer_details: this.get_item.designer_details,
      datetime: this.get_item.datetime,
      filter_date: this.get_item.filter_date,
      order_details: this.get_item.order_details,
      designer_return_amount: this.get_item.designer_return_amount,
      service_charge: this.get_item.service_charge,
      govt_charge: this.get_item.govt_charge,
      "_id": this.get_item?._id,
      "id": this.get_item.id
    };
    console.log('form.value.payment_datetime', form.value.payment_datetime);
    console.log('form.value.updated_datetime', form.value.updated_datetime);
    console.log('form.value.status', form.value.status);
    
    // console.log("submitaccountStatusSubscribe",form.value,data,this.get_item,this.get_item.designer_return_amount[0]);
    if (form.value.payment_datetime != 'Invalid date' || !form.value.payment_datetime && form.value.updated_datetime != 'Invalid date' || !form.value.updated_datetime && form.value.status ) {
      this.submitaccountStatusSubscribe = this.http.put("account/update/" + this.get_item.id, data).subscribe(
        (res: any) => {
          this.commonUtils.presentToast("success", res.message);
          this.closeModal();
        },
        (error) => {
          this.commonUtils.presentToast("success", error.error.message);
        }
      );
    }
  }
  // onSubmitaccountStatusForm end
  // onSubmitaccountStatusForm start
  onSubmitserviceStatusForm(form: NgForm) {
    this.get_item.service_charge.status = form.value.status;
    this.get_item.service_charge.remarks = form.value.remarks;
    this.get_item.service_charge.date = form.value.servicedate;
    this.get_item.service_charge.updated_by = this.authData.uid;
    this.get_item.service_charge.updated_datetime = this.currentDateTime;
    var data: any = {
      admin_details: {
        "address": this.authData?.city + ',' + this.authData?.state + ',' + this.authData?.country,
        "admin_id": this.authData?.uid,
        "gstIn": this.authData?.gstIn,
        "pan": this.authData?.pan,
        "pin": this.authData?.pin,
        "mobile": this.authData?.mobileNo,
        "name": this.authData?.firstName + ' ' + this.authData?.lastName,
        "gender": this.authData?.gender
      },
      designer_details: this.get_item?.designer_details,
      datetime: this.get_item?.datetime,
      filter_date: this.get_item.filter_date,
      order_details: this.get_item?.order_details,
      designer_return_amount: this.get_item?.designer_return_amount,
      service_charge: this.get_item?.service_charge,
      govt_charge: this.get_item?.govt_charge,
      "_id": this.get_item?._id,
      "id": this.get_item?.id
    };
    this.submitaccountStatusSubscribe = this.http.put("account/update/" + this.get_item.id, data).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitaccountStatusForm end
  // onSubmitgovStatusForm start
  onSubmitgovStatusForm(form: NgForm) {
    this.get_item.govt_charge[0].status = form.value.status;
    this.get_item.govt_charge[0].remarks = form.value.remarks;
    this.get_item.govt_charge[0].datetime = form.value.govdate;
    this.get_item.govt_charge[0].updated_by = this.authData.uid;
    this.get_item.govt_charge[0].updated_datetime = this.currentDateTime;
    var data: any = {
      admin_details: {
        "address": this.authData?.city + ',' + this.authData?.state + ',' + this.authData?.country,
        "admin_id": this.authData?.uid,
        "gstIn": this.authData?.gstIn,
        "pan": this.authData?.pan,
        "pin": this.authData?.pin,
        "mobile": this.authData?.mobileNo,
        "name": this.authData?.firstName + ' ' + this.authData?.lastName,
        "gender": this.authData?.gender
      },
      designer_details: this.get_item?.designer_details,
      datetime: this.get_item?.datetime,
      filter_date: this.get_item.filter_date,
      order_details: this.get_item?.order_details,
      designer_return_amount: this.get_item?.designer_return_amount,
      service_charge: this.get_item?.service_charge,
      govt_charge: this.get_item?.govt_charge,
      "_id": this.get_item?._id,
      "id": this.get_item?.id
    };
    this.submitaccountStatusSubscribe = this.http.put("account/update/" + this.get_item.id, data).subscribe(
      (res: any) => {
        this.commonUtils.presentToast("success", res.message);
        this.closeModal();
      },
      (error) => {
        this.commonUtils.presentToast("success", error.error.message);
      }
    );
  }
  // onSubmitgovStatusForm end
  ExportType;
  getExportType(type) {
    this.ExportType = type;
  }
  onSubmitOrderExport(form: NgForm) {
    let api
    // console.log(form.value);
    if (this.ExportType == 'pdf') {
      api = "userOrder/exelSheet" + "?startDate=" + form.value.startDate + "&endDate=" + form.value.endDate;
    } else if (this.ExportType == 'doc') {
      api = "userOrder/exelSheet" + "?startDate=" + form.value.startDate + "&endDate=" + form.value.endDate;
    }
    this.ExportOrderSubscribe = this.http.get(api).subscribe(
      (res: any) => { },
      (error) => { });
    window.open(environment.apiUrl + '/' + api);
    this.closeModal();
  }
  // onSubmitOrderExport end
  ngsel(e) {

  }
  selectState(id) {

  }
  // getLebellist start
  getLebellist() {
    this.LebellistDataSubcribe = this.http.get("adminMData/getDesignerCategory").subscribe((res: any) => {
      this.Lebellist = res.data;
    }, error => {
      console.log(error);
      this.commonUtils.presentToast('error', error.error.message);
    })
  }
  // getLebellist end
  ngOnDestroy() {
    if (this.ExportOrderSubscribe !== undefined) {
      this.ExportOrderSubscribe.unsubscribe();
    }
    if (this.getStateData !== undefined) {
      this.getStateData.unsubscribe();
    }
    if (this.getDesignerSubscribe !== undefined) {
      this.getDesignerSubscribe.unsubscribe();
    }
  }

}
