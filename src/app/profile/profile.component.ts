import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/auth/auth.service';
import { CommonUtils } from '../services/common-utils/common-utils';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { LoginNavService } from '../services/login-nav.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  /* Variable start */
  private getUserDetailss: Subscription;
  private logoutDataSubscribe: Subscription;
  viewLoading = false;
  getUserDetailsList_api;
  get_user_dtls;
  userDetailsFromApi: any = {};
  model: any = {};
  isLoading: boolean;
  errorMsg: string;
  private formSubmitSubscribe: Subscription;
  api_url;
  formdata: any = {};
  dateofbirth;
  modalDate: string;
  dob: string;
  imageLoader: boolean;
  mesormentList: any;
  private mencustomchartListSubscribe: Subscription;
  designerMencustomchartSubscribe: Subscription;
  measurementObject: any = {};
  gender: any;
  sizeType: any;
  mesormentId: string;
  sizeTypee: string;
  mesorment: any;
  private mencustomchartDeleteSubscribe: Subscription;
  type: string;
  dateRange: any;
  
  constructor(
    private http: HttpClient,
    private authService: LoginService,
    private commonUtils: CommonUtils,
    private toastrService: ToastrService,
    private modalService: NgbModal, private loginNav: LoginNavService
    // private datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.commonFunction();

  }
  commonFunction() {
    this.sizeTypee = "inch";
    this.dateRange = moment(new Date()).format('YYYY-MM-DD');
    this.api_url = 'user/update';
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.commonUtils.onClicksigninCheck(res);
      }
    });


    this.getUserDetailsList_api = 'auth/info/' + this.get_user_dtls.authority + '/' + this.get_user_dtls.email;
    this.getUserDetailsList();
    this.getMencustomchart();
  }
  /* -------------Get modules start------------- */
  getUserDetailsList() {
    this.viewLoading = true;
    this.getUserDetailss = this.http.get(API_URL + this.getUserDetailsList_api).subscribe(
      (res: any) => {

        this.userDetailsFromApi = res;
        this.model = res;
        console.log("this.modalDate", this.model.dob);
        this.model.dob = moment(res.dob).format('YYYY-MM-DD');
        this.model.dateofbirth = moment(res.dob).format('YYYY-MM-DD');
        console.log("this.modalDate", this.model.dob);

        this.viewLoading = false;
      },
      errRes => {
        console.log("Get moduleList >", errRes);
        this.viewLoading = false;
      }
    );
  }
  // changeDateFormat start
  // dateFormatChange(_date) {
  //   console.log("this.model.senddob", this.model.senddob, _date);
  //   this.model.senddob = moment(_date).format('YYYY/MM/DD');
  //   console.log("this.model.senddob", this.model.senddob, _date);
  // }

  dateFormatChange(_identifier, event: MatDatepickerInputEvent<Date>){
    console.log('_identifier', _identifier);
    console.log('_data', event);
    
    this.model.dob = moment(event.value).format('YYYY/MM/DD');
    console.log('this.model.dob ', this.model.dob );
    
  }
  // changeDateFormat end

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

    if (fieldNAme == 'firstName') {
      // firstName
      if (this.model.firstName) {
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if (this.model.firstName.match(onlyAB) == null) {
          this.errorList.firstName = 'Please enter only alphabet';
        } else if(this.model.firstName.match(emptySpace) !== null){
          this.errorList.firstName = 'Empty Space not allowed';
        } else {
          this.errorList.firstName = '';
        }
      } else {
        this.errorList.firstName = 'Enter first name';
      }
    }
    if (fieldNAme == 'lastName') {
      // lastName
      if (this.model.lastName) {
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if (this.model.lastName.match(onlyAB) == null) {
          this.errorList.lastName = 'Please enter only alphabet';
        } else if(this.model.lastName.match(emptySpace) !== null){
          this.errorList.lastName = 'Empty Space not allowed';
        } else {
          this.errorList.lastName = '';
        }
      } else {
        this.errorList.lastName = 'Enter last name';
      }
    }

  }
  /* Validation check end */
  
  // ======================== on submit update user data start ===================
  onSubmitUserAccount(form: NgForm) {
    this.isLoading = true;
    this.errorMsg = '';
    console.log('form >>', form.value);
    // get form value
    let fd = new FormData();

    for (let val in form.value) {
      if (form.value[val] == undefined) {
        form.value[val] = '';
      }
      fd.append(val, form.value[val]);
    };

    if (!form.valid) {
      return;
    }
    var dob;
    if (form.value.senddob) {
      console.log("form.value.senddob if", form.value.senddob);
      dob = form.value.senddob;

    } else {
      console.log("form.value.senddob else", form.value.senddob);
      dob = moment(this.model.dob).format('YYYY/MM/DD')


    }
    this.formdata = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      mobileNo: form.value.mobileNo,
      dob: dob,
      email: form.value.email,
      id: this.userDetailsFromApi.uId,
      password: this.userDetailsFromApi.password,
      username: this.userDetailsFromApi.username,
      profilePic: this.userDetailsFromApi.profilePic,
    }
    this.formSubmitSubscribe = this.http.put(API_URL + this.api_url, this.formdata).subscribe(
      (response: any) => {
        console.log('response', response);

        if (response.status === 200) {
          this.isLoading = false;

          this.modalService.dismissAll();
          this.getUserDetailsList();
          form.reset();
          this.toastrService.success(response.message);

        } else {
          this.toastrService.error(response.message);
          this.isLoading = false;
        }
      },
      errRes => {
        this.isLoading = false;
        console.log("error handeller >>@@", errRes);
        if (errRes.error.message) {
          this.errorMsg = errRes.error.message;
        } else if (errRes.error.messagee) {
          this.errorMsg = errRes.error.messagee;
        } else {
          this.toastrService.error(errRes.message);
        }

      }
    );

  }
  // CreateAccount form submit end
  // on submit update user data end
  filePath;
  chooseFile(image) {
    var file = image.dataTransfer ? image.dataTransfer.files[0] : image.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      // alert('invalid format');
      this.toastrService.error('invalid file format');

      return;
    }
    else
      console.log('image', image);

    // console.log('image',image.target.files[0]);
    if (image.target.files[0] != undefined) {
      this.imageLoader = true;
      var fd = new FormData();
      fd.append("file", image.target.files[0]);
      this.http.post(API_URL + "admin/profile/s3/upload", fd).subscribe(
        (res: any) => {
          this.filePath = res.path;
          this.updateProfile();
        },
        (error) => {
          console.log("error", error);
          this.toastrService.error(error.error.message);

          this.imageLoader = false;
        })
    }
  }
  // chooseFile
  //  updateProfile start to choose profile pic
  updateProfile() {
    this.formdata = {
      firstName: this.userDetailsFromApi.firstName,
      lastName: this.userDetailsFromApi.lastName,
      mobileNo: this.userDetailsFromApi.mobileNo,
      dob: this.userDetailsFromApi.dob,
      email: this.userDetailsFromApi.email,
      id: this.userDetailsFromApi.uId,
      password: this.userDetailsFromApi.password,
      username: this.userDetailsFromApi.username,
      profilePic: this.filePath,
    }
    this.formSubmitSubscribe = this.http.put(API_URL + this.api_url, this.formdata).subscribe(
      (response: any) => {
        console.log('response', response);
        this.imageLoader = false;
        this.getUserDetailsList();
        this.toastrService.success(response.message);
      },
      errRes => {
        this.imageLoader = false;
        this.toastrService.error(errRes.error.message);


      }
    );
  }
  // updateProfile end
  openModal(updatemodal) {
    this.modalService.open(updatemodal, { size: 'md' });
  }
  getMencustomchart() {
    this.mencustomchartListSubscribe = this.http.get(API_URL + "userMeasurement/getMeasurementlist/all").subscribe(
      (response: any) => {
        this.mesormentList = response;
      },
      (error) => {
        this.toastrService.error(error.message);
      });
  }
  custom_modal(content, mesorment) {
    this.type = 'update'
    this.mesorment = mesorment;
    console.log(mesorment);
    this.gender = mesorment.gender;
    this.mesormentId = mesorment.id;
    if (mesorment.sizeType == 'CMS') {
      this.sizeType = true;
    } else {
      this.sizeType = false;
    }
    if (this.gender == "women") {
      this.model = {
        displyName: mesorment.displyName,
        sizeType: mesorment.sizeType,
        neck: mesorment.measurementJSON.neck,
        crotchLength: mesorment.measurementJSON.crotchLength,
        shoulder: mesorment.measurementJSON.shoulder,
        waist: mesorment.measurementJSON.waist,
        bust: mesorment.measurementJSON.bust,
        hip: mesorment.measurementJSON.hip,
        ribCage: mesorment.measurementJSON.ribCage,
        topHip: mesorment.measurementJSON.topHip,
        sideNeck: mesorment.measurementJSON.sideNeck,
        waistToHip: mesorment.measurementJSON.waistToHip,
        backSide: mesorment.measurementJSON.backSide,
        frontSide: mesorment.measurementJSON.frontSide,
        backWidth: mesorment.measurementJSON.backWidth,
        waistToKnee: mesorment.measurementJSON.waistToKnee,
        armscyeDepth: mesorment.measurementJSON.armscyeDepth,
        kneeToAnkle: mesorment.measurementJSON.kneeToAnkle,
        armhole: mesorment.measurementJSON.armhole,
        thigh: mesorment.measurementJSON.thigh,
        topArm: mesorment.measurementJSON.topArm,
        knee: mesorment.measurementJSON.knee,
        elbow: mesorment.measurementJSON.elbow,
        calfCircumference: mesorment.measurementJSON.calfCircumference,
        wrist: mesorment.measurementJSON.wrist,
        highAnkle: mesorment.measurementJSON.highAnkle,
        sleeveLength: mesorment.measurementJSON.sleeveLength,
        ankle: mesorment.measurementJSON.ankle,
        crotchDepth: mesorment.measurementJSON.crotchDepth,
        waistToFloor: mesorment.measurementJSON.waistToFloor,
        gender: mesorment.gender,
      }
    }
    else if (this.gender == "men") {
      this.model = {
        displyName: mesorment.displyName,
        sizeType: mesorment.sizeType,
        napeNaist: mesorment.measurementJSON.napeNaist,
        neck: mesorment.measurementJSON.neck,
        waistToknee: mesorment.measurementJSON.waistToknee,
        waistToAnkle: mesorment.measurementJSON.waistToAnkle,
        chest: mesorment.measurementJSON.chest,
        crotchLength: mesorment.measurementJSON.crotchLength,
        shoulder: mesorment.measurementJSON.shoulder,
        waist: mesorment.measurementJSON.waist,
        bust: mesorment.measurementJSON.bust,
        hip: mesorment.measurementJSON.hip,
        ribCage: mesorment.measurementJSON.ribCage,
        topHip: mesorment.measurementJSON.topHip,
        sideNeck: mesorment.measurementJSON.sideNeck,
        waistToHip: mesorment.measurementJSON.waistToHip,
        backSide: mesorment.measurementJSON.backSide,
        frontSide: mesorment.measurementJSON.frontSide,
        backWidth: mesorment.measurementJSON.backWidth,
        waistToKnee: mesorment.measurementJSON.waistToKnee,
        armscyeDepth: mesorment.measurementJSON.armscyeDepth,
        kneeToAnkle: mesorment.measurementJSON.kneeToAnkle,
        armhole: mesorment.measurementJSON.armhole,
        thigh: mesorment.measurementJSON.thigh,
        topArm: mesorment.measurementJSON.topArm,
        knee: mesorment.measurementJSON.knee,
        elbow: mesorment.measurementJSON.elbow,
        calfCircumference: mesorment.measurementJSON.calfCircumference,
        wrist: mesorment.measurementJSON.wrist,
        highAnkle: mesorment.measurementJSON.highAnkle,
        sleeveLength: mesorment.measurementJSON.sleeveLength,
        ankle: mesorment.measurementJSON.ankle,
        crotchDepth: mesorment.measurementJSON.crotchDepth,
        waistToFloor: mesorment.measurementJSON.waistToFloor,
        gender: mesorment.gender,
      }
    }
    this.modalService.open(content, { size: 'xl' });
  }
  convartValue(form: NgForm, identifire) {
    console.log(identifire, form.value, this.sizeType);
    if (identifire == 'women' && this.sizeType == true) {
      this.sizeTypee = "CMS";
      this.model.neck = parseFloat((form.value.neck * 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength * 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder * 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist * 2.54).toFixed(2));
      this.model.bust = parseFloat((form.value.bust * 2.54).toFixed(2));
      this.model.hip = parseFloat((form.value.hip * 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage * 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip * 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck * 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip * 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide * 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide * 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth * 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth * 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee * 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle * 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole * 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh * 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm * 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee * 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow * 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference * 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist * 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle * 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength * 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle * 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth * 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor * 2.54).toFixed(2));
    }
    if (identifire == 'women' && this.sizeType == false) {
      this.sizeTypee = "inch";
      this.model.neck = parseFloat((form.value.neck / 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength / 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder / 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist / 2.54).toFixed(2));
      this.model.bust = parseFloat((form.value.bust / 2.54).toFixed(2));
      this.model.hip = parseFloat((form.value.hip / 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage / 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip / 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck / 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip / 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide / 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide / 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth / 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth / 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee / 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle / 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole / 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh / 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm / 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee / 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow / 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference / 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist / 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle / 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength / 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle / 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth / 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor / 2.54).toFixed(2));
    }
    if (identifire == 'men' && this.sizeType == true) {
      this.sizeTypee = "CMS";
      this.model.neck = parseFloat((form.value.neck * 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength * 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder * 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist * 2.54).toFixed(2));
      this.model.chest = parseFloat((form.value.chest * 2.54).toFixed(2));
      this.model.waistToAnkle = parseFloat((form.value.waistToAnkle * 2.54).toFixed(2));
      this.model.waistToknee = parseFloat((form.value.waistToknee * 2.54).toFixed(2));
      this.model.napeNaist = parseFloat((form.value.napeNaist * 2.54).toFixed(2)),
        this.model.bust = parseFloat((form.value.bust * 2.54).toFixed(2));
      this.model.hip = parseFloat((form.value.hip * 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage * 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip * 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck * 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip * 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide * 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide * 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth * 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth * 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee * 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle * 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole * 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh * 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm * 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee * 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow * 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference * 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist * 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle * 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength * 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle * 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth * 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor * 2.54).toFixed(2));
    }
    if (identifire == 'men' && this.sizeType == false) {
      this.sizeTypee = "inch";
      this.model.neck = parseFloat((form.value.neck / 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength / 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder / 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist / 2.54).toFixed(2));
      this.model.waistToAnkle = parseFloat((form.value.waistToAnkle / 2.54).toFixed(2));
      this.model.waistToknee = parseFloat((form.value.waistToknee / 2.54).toFixed(2));
      this.model.chest = parseFloat((form.value.chest / 2.54).toFixed(2));
      this.model.bust = parseFloat((form.value.bust / 2.54).toFixed(2));
      this.model.napeNaist = parseFloat((form.value.napeNaist / 2.54).toFixed(2)),
        this.model.hip = parseFloat((form.value.hip / 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage / 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip / 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck / 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip / 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide / 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide / 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth / 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth / 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee / 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle / 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole / 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh / 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm / 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee / 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow / 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference / 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist / 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle / 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength / 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle / 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth / 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor / 2.54).toFixed(2));
    }
  }
  addChart(identifire, content) {
    this.gender = identifire;
    this.type = "add";
    this.model = {};
    this.modalService.open(content, { size: 'xl' });
  }
  onSubmitcustomchartform(form: NgForm) {
    var measurementJSON: any = {};
    if (this.gender == "women") {
      measurementJSON = {
        neck: form.value.neck,
        crotchLength: form.value.crotchLength,
        shoulder: form.value.shoulder,
        waist: form.value.waist,
        bust: form.value.bust,
        hip: form.value.hip,
        ribCage: form.value.ribCage,
        topHip: form.value.topHip,
        sideNeck: form.value.sideNeck,
        waistToHip: form.value.waistToHip,
        backSide: form.value.backSide,
        frontSide: form.value.frontSide,
        backWidth: form.value.backWidth,
        waistToKnee: form.value.waistToKnee,
        armscyeDepth: form.value.armscyeDepth,
        kneeToAnkle: form.value.kneeToAnkle,
        armhole: form.value.armhole,
        thigh: form.value.thigh,
        topArm: form.value.topArm,
        knee: form.value.knee,
        elbow: form.value.elbow,
        calfCircumference: form.value.calfCircumference,
        wrist: form.value.wrist,
        highAnkle: form.value.highAnkle,
        sleeveLength: form.value.sleeveLength,
        ankle: form.value.ankle,
        crotchDepth: form.value.crotchDepth,
        waistToFloor: form.value.waistToFloor
      }
    } else if (this.gender == "men") {
      measurementJSON = {
        waistToAnkle: form.value.waistToAnkle,
        waistToknee: form.value.waistToknee,
        neck: form.value.neck,
        crotchLength: form.value.crotchLength,
        shoulder: form.value.shoulder,
        waist: form.value.waist,
        chest: form.value.chest,
        napeNaist: form.value.napeNaist,
        bust: form.value.bust,
        hip: form.value.hip,
        ribCage: form.value.ribCage,
        topHip: form.value.topHip,
        sideNeck: form.value.sideNeck,
        waistToHip: form.value.waistToHip,
        backSide: form.value.backSide,
        frontSide: form.value.frontSide,
        backWidth: form.value.backWidth,
        waistToKnee: form.value.waistToKnee,
        armscyeDepth: form.value.armscyeDepth,
        kneeToAnkle: form.value.kneeToAnkle,
        armhole: form.value.armhole,
        thigh: form.value.thigh,
        topArm: form.value.topArm,
        knee: form.value.knee,
        elbow: form.value.elbow,
        calfCircumference: form.value.calfCircumference,
        wrist: form.value.wrist,
        highAnkle: form.value.highAnkle,
        sleeveLength: form.value.sleeveLength,
        ankle: form.value.ankle,
        crotchDepth: form.value.crotchDepth,
        waistToFloor: form.value.waistToFloor
      }
    }
    this.measurementObject = {
      displyName: form.value.displyName,
      measurementJSON: measurementJSON,
      sizeType: this.sizeTypee,
      gender: this.gender,
    }
    if (this.type == 'update') {
      this.designerMencustomchartSubscribe = this.http.put(API_URL + "userMeasurement/updateMeasurement?measurementId=" + this.mesormentId, this.measurementObject).subscribe(
        (response: any) => {
          this.toastrService.success(response.message);
          form.reset();
          this.modalService.dismissAll();
          this.getMencustomchart();
        },
        (error) => {
          this.toastrService.error(error.error.message);

        });
    } else {
      this.designerMencustomchartSubscribe = this.http.post(API_URL + "userMeasurement/addMeasurement", this.measurementObject).subscribe(
        (response: any) => {
          this.toastrService.success(response.message);
          form.reset();
          this.getMencustomchart();
          this.modalService.dismissAll();
        },
        (error) => {
          this.toastrService.error(error.error.message);
        });
    }




  }
  openchangepasswordNav() {
    // this.showScreen = 'login';
    this.loginNav.addNavchangepassword();
  }

  async deleteMsment() {


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-default'
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons.fire(
      {
        showCloseButton: true,
        title: 'Delete',
        text: 'Are you went to Delete this Mesorment ?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        reverseButtons: false
      }
    ).then((result) => {
      if (result.value) {
        this.mencustomchartDeleteSubscribe = this.http.delete(API_URL + "userMeasurement/delete/" + this.mesormentId).subscribe(
          (response: any) => {
            this.toastrService.success(response.message);
            this.getMencustomchart();
            this.modalService.dismissAll();
          },
          (error) => {
            this.toastrService.error(error.message);
          }
        );
      }
      console.log('cancel');
    });
  }
  onScrollDown() {
    console.log('onScrollDown');

  }
  onUp() {
    console.log('onUp');

  }
  throttle = 300;
  scrollDistance = 0.1;
  scrollUpDistance = 2;
  direction = "";
  // Logout user start
  logOutUser() {
    this.authService.logout();
  }
  ngOnDestroy() {
    if (this.getUserDetailss !== undefined) {
      this.getUserDetailss.unsubscribe();
    } if (this.formSubmitSubscribe !== undefined) {
      this.formSubmitSubscribe.unsubscribe();
    }
    if (this.mencustomchartListSubscribe !== undefined) {
      this.mencustomchartListSubscribe.unsubscribe();
    }
    if (this.logoutDataSubscribe !== undefined) {
      this.logoutDataSubscribe.unsubscribe();
    }
  }
}
