import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {ToastController,ModalController,AlertController,MenuController,} from "@ionic/angular";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import { CommonUtils } from "src/app/services/common-utils/common-utils";
import { ModalPage } from "../../modal/modal.page";


@Component({
  selector: 'app-designer-view',
  templateUrl: './designer-view.page.html',
  styleUrls: ['./designer-view.page.scss'],
})
export class DesignerViewPage implements OnInit {
  private getProfileData: Subscription;
  parms_actionId;
  showInfo = false;
  showInfo2 = false;
  designerData: any={};
  pagePermission: any;
  permissionDataSubscribe: Subscription;
  btnloader: boolean;
  onSubmitAdminSubscribe: Subscription;
  model:any={};
  private LebellistDataSubcribe: Subscription;
  Lebellist=[];
  chart:any = {};
  approveDesignerSubscribe: Subscription;
  hide_data: boolean;
  profileStatus: any;
  isProfileCompleted: any;
  aadhar_loader: boolean;
  pan_loader: boolean;
  digital_loader: boolean;

  constructor( public menuCtrl: MenuController,private http:HttpClient,
    private modalController : ModalController,
    private alertController:AlertController,
    private commonUtils: CommonUtils,
    private router:Router,private activatedRoute: ActivatedRoute,private authService: AuthService) { }
  edit = false;
  show = false;
  ngOnInit() {
    this.commonFunction();
    
  }
  commonFunction()
  {
    this.parms_actionId = this.activatedRoute.snapshot.paramMap.get('id');
    
    /*Check permission status start*/
    this.authService.globalparamsData.subscribe(res => {
      console.log('res>>', res);
      if(res.authority == 'ADMIN'){
        this.permissionDataSubscribe = this.commonUtils.menuPermissionObservable.subscribe(data => {
          if(data){
            console.log('menu>>', data);
            console.log('this.router.url>>', this.router.url);
    
            let pageUrl = this.router.url.split("/");
            console.log('pageUrl', pageUrl);
    
            for(let item of data) {
              if(item.modDetails.url == 'designer-list'){
                if(item.modPrivs.list == true){
                  console.log('-----Permission Granted-----');
                  this.pagePermission = item;
                  console.log('this.pagePermission', this.pagePermission);
                  this.getDesignerProfiledata();
                  break;
                }else {
                  console.log('-------No Permission--------');
                  this.router.navigateByUrl('/error');
                }
                
              }
            }
          }
        })
      }else {
        this.router.navigateByUrl('/error');
      }
    })
    /*Check permission status end*/
  }
  handleInputChange(e,identifier) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    if(identifier == 'aadhar')
        {
          this.aadhar_loader = true;
        }else if(identifier == 'panCard')
        {
          this.pan_loader = true;

        }else if(identifier == 'digitalSignature')
        {
          this.digital_loader = true;

        }
    var fd = new FormData();  
    fd.append("file", e.target.files[0]);
    this.http.post("admin/profile/s3/upload",fd).subscribe(
      (res:any) => {
        if(identifier == 'aadhar')
        {
          this.aadhar_loader = false;
          this.designerData.aadharCard = res.path;
        }else if(identifier == 'panCard')
        {
          this.pan_loader = false;
          this.designerData.panCard = res.path;
        }else if(identifier == 'digitalSignature')
        {
          this.digital_loader = false;
          this.designerData.digitalSignature = res.path;
        }
        // this.commonUtils.presentToast('success', res.message);
      },
      (error) =>{
        console.log("error",error);
        this.commonUtils.presentToast('error', error.error.message);
      })
    }
  // getDesignerProfiledata start
  getDesignerProfiledata()
  {
    this.hide_data = true;
    this.getLebellist();
    this.getProfileData = this.http.get("designer/"+this.parms_actionId).subscribe(
      (res:any) => {
        this.designerData = res;
        this.designerData.isProfileCompleted = res.isProfileCompleted;
        this.designerData.designerCategory = res.designerProfile.designerCategory;
        this.designerData.displayName = res.designerProfile.displayName;
        this.designerData.bankName = res.designerPersonalInfoEntity?.bankDetails?.bankName;
        this.designerData.accountNumber = res.designerPersonalInfoEntity?.bankDetails?.accountNumber;
        this.designerData.ifscCode = res.designerPersonalInfoEntity?.bankDetails?.ifscCode;
        this.designerData.gstin = res?.boutiqueProfile?.gstin;
        this.designerData.aadharCard = res?.designerPersonalInfoEntity?.designerDocuments?.aadharCard;
        this.designerData.panCard = res?.designerPersonalInfoEntity?.designerDocuments?.panCard;
        this.designerData.digitalSignature = res?.designerProfile?.digitalSignature;
        this.chart = {
          womenSizeType:res?.womenChartData?.sizeType,
          menSizeType:res?.menChartData?.sizeType,
          women_XS_uk:res?.womenChartData?.measurementsWomen?.xs?.uk,
          women_XS_bust:res?.womenChartData?.measurementsWomen?.xs?.bust,
          women_XS_waist:res?.womenChartData?.measurementsWomen?.xs?.waist,
          women_XS_hip:res?.womenChartData?.measurementsWomen?.xs?.hip,
          women_S_uk:res?.womenChartData?.measurementsWomen?.s?.uk,
          women_S_bust:res?.womenChartData?.measurementsWomen?.s?.bust,
          women_S_waist:res?.womenChartData?.measurementsWomen?.s?.waist,
          women_S_hip:res?.womenChartData?.measurementsWomen?.s?.hip,
          women_M_uk:res?.womenChartData?.measurementsWomen?.m?.uk,
          women_M_bust:res?.womenChartData?.measurementsWomen?.m?.bust,
          women_M_waist:res?.womenChartData?.measurementsWomen?.m?.waist,
          women_M_hip:res?.womenChartData?.measurementsWomen?.m?.hip,  
          women_L_uk:res?.womenChartData?.measurementsWomen?.l?.uk,
          women_L_bust:res?.womenChartData?.measurementsWomen?.l?.bust,
          women_L_waist:res?.womenChartData?.measurementsWomen?.l?.waist,
          women_L_hip:res?.womenChartData?.measurementsWomen?.l?.hip, 
          women_XL_uk:res?.womenChartData?.measurementsWomen?.xl?.uk,
          women_XL_bust:res?.womenChartData?.measurementsWomen?.xl?.bust,
          women_XL_waist:res?.womenChartData?.measurementsWomen?.xl?.waist,
          women_XL_hip:res?.womenChartData?.measurementsWomen?.xl?.hip,    
          women_XXL_uk:res?.womenChartData?.measurementsWomen?.xxl?.uk,
          women_XXL_bust:res?.womenChartData?.measurementsWomen?.xxl?.bust,
          women_XXL_waist:res?.womenChartData?.measurementsWomen?.xxl?.waist,
          women_XXL_hip:res?.womenChartData?.measurementsWomen?.xxl?.hip,  
          women_3XL_uk:res?.womenChartData?.measurementsWomen?.xl3?.uk,
          women_3XL_bust:res?.womenChartData?.measurementsWomen?.xl3?.bust,
          women_3XL_waist:res?.womenChartData?.measurementsWomen?.xl3?.waist,
          women_3XL_hip:res?.womenChartData?.measurementsWomen?.xl3?.hip,    
          women_4XL_uk:res?.womenChartData?.measurementsWomen?.xl4?.uk,
          women_4XL_bust:res?.womenChartData?.measurementsWomen?.xl4?.bust,
          women_4XL_waist:res?.womenChartData?.measurementsWomen?.xl4?.waist,
          women_4XL_hip:res?.womenChartData?.measurementsWomen?.xl4?.hip,       
          women_5XL_uk:res?.womenChartData?.measurementsWomen?.xl5?.uk,
          women_5XL_bust:res?.womenChartData?.measurementsWomen?.xl5?.bust,
          women_5XL_waist:res?.womenChartData?.measurementsWomen?.xl5?.waist,
          women_5XL_hip:res?.womenChartData?.measurementsWomen?.xl5?.hip, 
          women_6XL_uk:res?.womenChartData?.measurementsWomen?.xl6?.uk,
          women_6XL_bust:res?.womenChartData?.measurementsWomen?.xl6?.bust,
          women_6XL_waist:res?.womenChartData?.measurementsWomen?.xl6?.waist,
          women_6XL_hip:res?.womenChartData?.measurementsWomen?.xl6?.hip,  


          // men start

          men_XS_Chest:res?.menChartData?.measurementsMen?.xs?.chest,
          men_XS_waist_min:res?.menChartData?.measurementsMen?.xs?.waist.min,
          men_XS_waist_max:res?.menChartData?.measurementsMen?.xs?.waist.max,
          men_XS_Neck:res?.menChartData?.measurementsMen?.xs?.neck,
          men_XS_hip_min:res?.menChartData?.measurementsMen?.xs?.hip?.min,
          men_XS_hip_max:res?.menChartData?.measurementsMen?.xs?.hip?.max,
          men_S_Chest:res?.menChartData?.measurementsMen?.s?.chest,
          men_S_waist_min:res?.menChartData?.measurementsMen?.s?.waist.min,
          men_S_waist_max:res?.menChartData?.measurementsMen?.s?.waist.max,
          men_S_Neck:res?.menChartData?.measurementsMen?.s?.neck,
          men_S_hip_min:res?.menChartData?.measurementsMen?.s?.hip?.min,
          men_S_hip_max:res?.menChartData?.measurementsMen?.s?.hip?.max,
          men_M_Chest:res?.menChartData?.measurementsMen?.m?.chest,
          men_M_waist_min:res?.menChartData?.measurementsMen?.m?.waist.min,
          men_M_waist_max:res?.menChartData?.measurementsMen?.m?.waist.max,
          men_M_Neck:res?.menChartData?.measurementsMen?.m?.neck,
          men_M_hip_min:res?.menChartData?.measurementsMen?.m?.hip?.min,
          men_M_hip_max:res?.menChartData?.measurementsMen?.m?.hip?.max,
          men_L_Chest:res?.menChartData?.measurementsMen?.l?.chest,
          men_L_waist_min:res?.menChartData?.measurementsMen?.l?.waist.min,
          men_L_waist_max:res?.menChartData?.measurementsMen?.l?.waist.max,
          men_L_Neck:res?.menChartData?.measurementsMen?.l?.neck,
          men_L_hip_min:res?.menChartData?.measurementsMen?.l?.hip?.min,
          men_L_hip_max:res?.menChartData?.measurementsMen?.l?.hip?.max,
          men_XL_Chest:res?.menChartData?.measurementsMen?.xl?.chest,
          men_XL_waist_min:res?.menChartData?.measurementsMen?.xl?.waist.min,
          men_XL_waist_max:res?.menChartData?.measurementsMen?.xl?.waist.max,
          men_XL_Neck:res?.menChartData?.measurementsMen?.xl?.neck,
          men_XL_hip_min:res?.menChartData?.measurementsMen?.xl?.hip?.min,
          men_XL_hip_max:res?.menChartData?.measurementsMen?.xl?.hip?.max,
          men_XXL_Chest:res?.menChartData?.measurementsMen?.xxl?.chest,
          men_XXL_waist_min:res?.menChartData?.measurementsMen?.xxl?.waist.min,
          men_XXL_waist_max:res?.menChartData?.measurementsMen?.xxl?.waist.max,
          men_XXL_Neck:res?.menChartData?.measurementsMen?.xxl?.neck,
          men_XXL_hip_min:res?.menChartData?.measurementsMen?.xxl?.hip?.min,
          men_XXL_hip_max:res?.menChartData?.measurementsMen?.xxl?.hip?.max,
          men_3XL_Chest:res?.menChartData?.measurementsMen?.xl3?.chest,
          men_3XL_waist_min:res?.menChartData?.measurementsMen?.xl3?.waist.min,
          men_3XL_waist_max:res?.menChartData?.measurementsMen?.xl3?.waist.max,
          men_3XL_Neck:res?.menChartData?.measurementsMen?.xl3?.neck,
          men_3XL_hip_min:res?.menChartData?.measurementsMen?.xl3?.hip?.min,
          men_3XL_hip_max:res?.menChartData?.measurementsMen?.xl3?.hip?.max,
          men_4XL_Chest:res?.menChartData?.measurementsMen?.xl4?.chest,
          men_4XL_waist_min:res?.menChartData?.measurementsMen?.xl4?.waist.min,
          men_4XL_waist_max:res?.menChartData?.measurementsMen?.xl4?.waist.max,
          men_4XL_Neck:res?.menChartData?.measurementsMen?.xl4?.neck,
          men_4XL_hip_min:res?.menChartData?.measurementsMen?.xl4?.hip?.min,
          men_4XL_hip_max:res?.menChartData?.measurementsMen?.xl4?.hip?.max,
          men_5XL_Chest:res?.menChartData?.measurementsMen?.xl5?.chest,
          men_5XL_waist_min:res?.menChartData?.measurementsMen?.xl5?.waist.min,
          men_5XL_waist_max:res?.menChartData?.measurementsMen?.xl5?.waist.max,
          men_5XL_Neck:res?.menChartData?.measurementsMen?.xl5?.neck,
          men_5XL_hip_min:res?.menChartData?.measurementsMen?.xl5?.hip?.min,
          men_5XL_hip_max:res?.menChartData?.measurementsMen?.xl5?.hip?.max,
          men_6XL_Chest:res?.menChartData?.measurementsMen?.xl6?.chest,
          men_6XL_waist_min:res?.menChartData?.measurementsMen?.xl6?.waist.min,
          men_6XL_waist_max:res?.menChartData?.measurementsMen?.xl6?.waist.max,
          men_6XL_Neck:res?.menChartData?.measurementsMen?.xl6?.neck,
          men_6XL_hip_min:res?.menChartData?.measurementsMen?.xl6?.hip?.min,
          men_6XL_hip_max:res?.menChartData?.measurementsMen?.xl6?.hip?.max,
          
        }
        if(res.profileStatus == 'waitForApprove')
        {
          this.profileStatus = "APPROVE"
        }
        if(res.profileStatus == 'APPROVE')
        {
          this.profileStatus = "APPROVE"
        }
        else if(res.profileStatus == 'SUBMITTED')
        {
          this.profileStatus = "SUBMITTED"
        }
        else if(res.profileStatus == 'COMPLETED')
        {
          this.profileStatus = "COMPLETED"
        }
        else if(res.profileStatus == 'SAVED')
        {
          this.profileStatus = "SAVED"
        }
        console.log("this.profileStatus",this.profileStatus,res.profileStatus);
        
      },
      (error) =>{
        // this.formBtn = true;
        console.log("error",error);
      })
  }
  // getDesignerProfiledata end
  // onSubmitdesignerApproveForm start
  onSubmitAdminUpdateForm(form: NgForm)
  {
    console.log("this.profileStatus",this.profileStatus);
    var formData:any = {};
    if(this.profileStatus == "APPROVE" || this.profileStatus == "waitForApprove")
    {
       formData = {
        uid:this.designerData.uid,
        // uid:'819610',
        designerCategory:form.value.designerCategory,
        displayName:form.value.displayName,
        dId:this.designerData.designerId,
        isActive:this.designerData.isActive,
        profileStatus:this.profileStatus,
        isDeleted:this.designerData.isDeleted,
        isProfileCompleted:this.designerData.isProfileCompleted,
        isProfileSubmitted:this.designerData.isProfileSubmitted,
      }
    }else{
      formData = {
        designerCategory:form.value.designerCategory,
        displayName:form.value.displayName,
        dId:this.designerData.designerId,
        isActive:this.designerData.isActive,
        profileStatus:this.profileStatus,
        isDeleted:this.designerData.isDeleted,
        isProfileCompleted:this.designerData.isProfileCompleted,
        isProfileSubmitted:this.designerData.isProfileSubmitted,
        uid:this.designerData.uid,
        // uid:'819610',
        designerProfileEntity:{
        designerPersonalInfoEntity:{
          bankDetails:{
            accountNumber:form.value.accountNumber,
            bankName:form.value.bankName,
            ifscCode:form.value.ifscCode
            
          },
          designerDocuments:{
            aadharCard:form.value.aadharCard,
            digitalSignature:form.value.digitalSignature,
            panCard:form.value.panCard,
          }
        },
       
        designerProfile:{
          digitalSignature:form.value.digitalSignature,
        },
        boutiqueProfile:{
          gstin:form.value.gstin
        },
      }
      }
    }
    
    this.btnloader = true;
    this.approveDesignerSubscribe =this.http.put('designer/update',formData).subscribe(
      (res:any) => {
        this.commonUtils.presentToast('success', res.message);
        this.btnloader = false;
        this.getDesignerProfiledata();
        this.router.navigateByUrl('/designer-list');
        
      },
      (error) =>{
        console.log("errorerror",error);
          this.btnloader = false;
        this.commonUtils.presentToast('error', error.error.message);
        
      })
    
  }
  // onSubmitdesignerApproveForm end
  // getLebellist start
  getLebellist()
  {
    this.LebellistDataSubcribe = this.http.get("adminMData/getDesignerCategory").subscribe((res:any) =>{
      this.Lebellist = res.data;
      },error =>{
        console.log(error);
        this.commonUtils.presentToast('error', error.error.message);
    })
  }
  // getLebellist end
  labelValue;
  selectLabel(value)
  {
    this.labelValue = value;
    console.log("this.Lebellist",value,this.labelValue);
    
  }
  openImg(url)
  {
    window.open(url, "_blank");
  }
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if (this.getProfileData !== undefined) {
      this.getProfileData.unsubscribe();
    }
    if (this.LebellistDataSubcribe !== undefined) {
      this.LebellistDataSubcribe.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------
}
