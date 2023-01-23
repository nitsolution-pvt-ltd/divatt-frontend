import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  designerCurrentStatus:string = '';
  chooseFilepath:any;
  show = false;
  showInfo = false;
  showInfo2 = false;
  tabIndex = -1;
  hide = true;
  hide2 = true;
  hide3 = true;
  hide_data= true;
  ChangePSWFormLoading:boolean = false;
  designerid:number  | undefined ;
  designerprofiledata: any = {};
  loginDataSubscribe: any;
  get_user_dtls: any;
  profilestatusLoader: boolean = false;
  modal: any = {};
  chart:any = {};
  imageLoader: boolean = false;
  formloader: boolean = true;
  designerProfile: any;
  alldesignerProfiledata: any;
  profileupdateApi: any;
  previewimageSrc_aadher: any;
  previewimageSrc_pan: any;
  private getProfileData: Subscription | undefined;
  private changeProfileStatusSubscribe: Subscription | undefined;
  private profileupdateSubcribe: Subscription | undefined;
  errormsg: any = '';
  private onSubmitForgetPSWSubcribe: Subscription | undefined;
  userName: any;
  digitalSignature_loader: boolean = false;
  previewimageSrc_digitalSignature: any;
  stateData: any = [];
  countryData:any = [
    {name:'India'}
  ]
  profileStatus: any;
  isProfileCompleted: any;
  message: string = '';
  constructor(private authService:LoginService,private modalService: NgbModal,private http:HttpClient,
    private toastrService: ToastrService,private commonUtils: CommonUtils,private router: Router,) { }

  ngOnInit() {
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.designerid = this.get_user_dtls.uid;
        this.userName = this.get_user_dtls.username;
        this.getProfileData = this.http.get("user/getStateData").subscribe(
          (res:any) => {
            this.stateData = res;
          },(error:any) => {},)

        this.getDesignerProfiledata();
        this.getDesignerProfilepic()
        this.commonUtils.onClicksigninCheck(res);
        this.profileupdateApi = 'designer/profile/update';
      }
    });
  }
  hide_details(){
    this.hide_data = !this.hide_data;
    // console.log("submit.....");
    if(!this.hide_data)
    {
      this.tabIndex = 0;
      this.message = "If you fill up all field and after change profile picture without submit field than all field will reset.";
    }
      else{
      this.tabIndex = -1;
    }
  }
  // getDesignerProfiledata start
  getDesignerProfiledata()
  {
    this.getProfileData = this.http.get("designer/"+this.designerid).subscribe(
      (res:any) => {
        this.designerprofiledata = res;
        this.isProfileCompleted=res.isProfileCompleted;
        if(res.profileStatus == "REJECTED")
        {
          this.isProfileCompleted = false;
        }
        this.chart = {
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
          women_XL_hip:res?.womenChartData?.measurementsWomen.xl?.hip,    
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
        this.profileStatus = res.profileStatus;
        this.modal = {
          uid:res.uid,
          accountStatus:res?.accountStatus,
          password:res?.designerProfile?.password,
          pinCode:res?.designerProfile?.pinCode,
          firstName1:res?.designerProfile?.firstName1,
          firstName2:res?.designerProfile?.firstName2,
          lastName1:res?.designerProfile?.lastName1,
          lastName2:res?.designerProfile?.lastName2,
          email:res?.designerProfile?.email,
          gender:res?.designerProfile?.gender,
          mobileNo:res?.designerProfile?.mobileNo,
          displayName:res?.designerProfile?.displayName,
          country:res?.designerProfile?.country,
          state:res?.designerProfile?.state,
          city:res?.designerProfile.city,
          altMobileNo:res?.designerProfile?.altMobileNo,
          profilePic:res?.designerProfile?.profilePic,
          designerCategory:res?.designerProfile?.designerCategory,
          digitalSignature:res?.designerProfile?.digitalSignature,
          address:res?.socialProfile?.address,
          description:res?.socialProfile?.description,
          facebookLink:res?.socialProfile?.facebookLink,
          instagramLink:res?.socialProfile?.instagramLink,
          youtubeLink:res?.socialProfile?.youtubeLink,
          boutiqueName:res?.boutiqueProfile?.boutiqueName,
          experience:res?.boutiqueProfile?.experience,
          firmName:res?.boutiqueProfile?.firmName,
          gstin:res?.boutiqueProfile?.gstin,
          operatingCity:res?.boutiqueProfile?.operatingCity,
          professionalCategory:res?.boutiqueProfile?.professionalCategory,
          yearOfOperation:res?.boutiqueProfile?.yearOfOperation,
          accountNumber:res?.designerPersonalInfoEntity?.bankDetails?.accountNumber,
          bankName:res?.designerPersonalInfoEntity?.bankDetails?.bankName,
          ifscCode:res?.designerPersonalInfoEntity?.bankDetails?.ifscCode,
        }
        if(res?.menChartData?.sizeType == "CM")
        {
          this.menChartInCM = true
        }else{
          this.menChartInCM = false
        }
        if(res?.womenChartData?.sizeType == "CM")
        {
          this.womenChartInCM = true
        }else{
          this.womenChartInCM = false
        }
        this.modal.dob = res?.designerProfile?.dob;
        this.modal.dateOfbirth = moment(res?.designerProfile?.dob).format('YYYY-MM-DD');
        
        
        this.previewimageSrc_aadher = res?.designerPersonalInfoEntity?.designerDocuments?.aadharCard;
        this.previewimageSrc_pan = res?.designerPersonalInfoEntity?.designerDocuments?.panCard; 
        this.previewimageSrc_digitalSignature = res?.designerProfile?.digitalSignature; 
        this.modal.aadharCard = res?.designerPersonalInfoEntity?.designerDocuments?.aadharCard;
        this.modal.panCard = res?.designerPersonalInfoEntity?.designerDocuments?.panCard; 
        this.modal.digitalSignature = res?.designerProfile?.digitalSignature; 
        // console.log("designerPersonalInfoEntity.designerDocuments", res.designerPersonalInfoEntity.designerDocuments.aadharCard,this.chart);
        
        this.modal.dateOfbirth = moment(res.designerProfile.dob).format('YYYY-MM-DD');
        console.log("profiledata",this.modal);
        console.log("profiledata",this.designerprofiledata);
      },

      (error:any) =>{
      });
      this.getDataForActive();
  }
  // getDesignerProfiledata end

    // activeDesigner start
  activeDesigner(status:any)
  {
    this.profilestatusLoader = true;
    this.designerCurrentStatus = '';
    this.changeProfileStatusSubscribe =this.http.put('designer/designerCurrentStatus/'+status,'').subscribe(
      (res:any) => {
        // this.profilestatusLoader = false;
        this.toastrService.success(res.message);
        this.getDataForActive();
      },(error:any)=>{
        this.profilestatusLoader = false;
        this.toastrService.error(error.error.message);
        this.getDataForActive();
        
      }); 
  }
getDataForActive()
{
  // this.profilestatusLoader = true;
  this.getProfileData = this.http.get("designer/"+this.designerid).subscribe(
    (res:any) => {
    this.profilestatusLoader = false;
     this.designerCurrentStatus =  res.designerCurrentStatus;        
    //  this.toastrService.success(res.message);
    },(error)=>{        
    this.profilestatusLoader = false;
      this.toastrService.error(error.error.message);
    })
}
  // chooseFile
  profilePicLoader = false;
  chooseFile(image: any)
  {
    this.profilePicLoader = true;
    var data:any;
    console.log(image.target.files[0].type,image.type,image);
    
    var allowedExtensions = [{type:'image/jpeg'},{type:'image/jpg'},{type:'image/png'},{type:'image/webp'},{type:'image/jfif'}];
    for (let index = 0; index < allowedExtensions.length; index++) {
      if(image.target.files[0].type == allowedExtensions[index].type)
      {
        if(image.target.files[0] != undefined)
          {
            this.imageLoader = true;
            var fd = new FormData(); 
            fd.append("file", image.target.files[0]);
            this.http.post("admin/profile/s3/upload",fd).subscribe(
              (res:any) => {
                data = {
                  designerId:this.designerid,
                  image:res.path
                }
                this.chooseFilepath = '';
                this.http.post("designer/profilePicUpdate",data).subscribe(
                  (res:any) => {
                    this.toastrService.success(res.message);
                    this.imageLoader = false;
                    this.getDesignerProfilepic();
                  },
                  (error) =>{
                    this.toastrService.error(error.message.message);
                    this.imageLoader = false;
                    this.getDesignerProfilepic();
                    
                  })
              },
              (error) =>{
                this.chooseFilepath = '';
                this.imageLoader = false;
                this.toastrService.error("Something went's to wrong , please try again with another image.");
              });
        }
        
      }
      
    }
      
    
  }
  profilePic:any = null;
  
  getDesignerProfilepic()
  {
    console.log('this.designerid',this.designerid,this.designerprofiledata.designerId);
    
    this.http.get("designer/getProfileImage/"+this.designerid).subscribe(
      (res:any) => {this.profilePic = res.profilePic},
      (error)=>{});
  }
  // chooseFile
  aadhar_loader = false;
  pan_loader = false;
  selectFile(event:any,identifire:any){
    console.log("event",event.target.files[0].type);
    var filetype = event.target.files[0].type;
    // if(filetype == 'image/jpg' || filetype == 'image/jepg' || filetype == 'image/png' || filetype == 'image/webp')
    // {
      
    if(identifire == 'aadharCard')
      {
        this.aadhar_loader = true;
      }
      else if(identifire == 'panCard'){
        this.pan_loader = true;

      }else if(identifire == "digitalSignature")
      {
        this.digitalSignature_loader = true;
      }
    if(event.target.files[0] != undefined)
        {
          // this.imageLoader = true;
          var fd = new FormData(); 
          fd.append("file", event.target.files[0]);
          this.http.post("admin/profile/s3/upload",fd).subscribe(
            (res:any) => {
              console.log("file data.....", res);
              
              if(identifire == 'aadharCard')
              {
                this.modal.aadharCard = res.path;
                this.aadhar_loader = false;
                this.previewimageSrc_aadher = res.path;
                // this.designerprofiledata.aadharCard = res.path;
              }else  if(identifire == 'panCard'){
                this.pan_loader = false;
                this.modal.panCard = res.path;
                this.previewimageSrc_pan = res.path;
              }
              else  if(identifire == 'digitalSignature'){
                this.digitalSignature_loader = false;
                this.modal.digitalSignature = res.path;
                this.previewimageSrc_digitalSignature = res.path;
              }
              console.log('Aadhar card and pancard',this.modal.aadharCard,this.modal.panCard);
              
            },
            (error) =>{
              if(identifire == 'aadharCard')
              {
                this.aadhar_loader = false;
              }
              else{
                this.pan_loader = false;

              }
            })
        }
      // }
      // else{
      //   this.toastrService.error("Invalid file type use 'jpg, jpeg, png, webp'");
      // }
  }
  // changeFateFormat start
  changeFateFormat(date:Date)
  {
    console.log(date);
    this.modal.dob = moment(date).format('YYYY/MM/DD');
    console.log(this.modal.dob);
    
  }
  // changeFateFormat end
  onClick(_event: any, identifier: any,fromData:any){
    // console.log("Slide Toggle Value", _event.checked);
    // console.log("Slide Toggle Value....", identifier,fromData.value);
    if(identifier == 'womenChart' && _event.checked == true)
    {
      console.log("womenChart",'true');

        if(this.chart.women_XS_uk){ this.chart.women_XS_uk = (fromData.value.women_XS_uk * 2.54).toFixed(2)};
        if(this.chart.women_XS_bust){this.chart.women_XS_bust = (fromData.value.women_XS_bust * 2.54).toFixed(2);}
        if(this.chart.women_XS_waist){this.chart.women_XS_waist = (fromData.value.women_XS_waist * 2.54).toFixed(2);}
        if(this.chart.women_XS_hip){this.chart.women_XS_hip = (fromData.value.women_XS_hip * 2.54).toFixed(2);}
        if(this.chart.women_S_uk){this.chart.women_S_uk = (fromData.value.women_S_uk * 2.54).toFixed(2);}
        if(this.chart.women_S_bust){this.chart.women_S_bust = (fromData.value.women_S_bust * 2.54).toFixed(2);}
        if(this.chart.women_S_waist){this.chart.women_S_waist = (fromData.value.women_S_waist * 2.54).toFixed(2);}
        if(this.chart.women_S_hip){this.chart.women_S_hip = (fromData.value.women_S_hip * 2.54).toFixed(2);}
        if(this.chart.women_M_uk){this.chart.women_M_uk = (fromData.value.women_M_uk * 2.54).toFixed(2);}
        if(this.chart.women_M_bust){this.chart.women_M_bust = (fromData.value.women_M_bust * 2.54).toFixed(2);}
        if(this.chart.women_M_waist){this.chart.women_M_waist = (fromData.value.women_M_waist * 2.54).toFixed(2);}
        if(this.chart.women_M_hip){this.chart.women_M_hip = (fromData.value.women_M_hip * 2.54).toFixed(2);  }
        if(this.chart.women_L_uk){this.chart.women_L_uk = (fromData.value.women_L_uk * 2.54).toFixed(2);}
        if(this.chart.women_L_bust){this.chart.women_L_bust = (fromData.value.women_L_bust * 2.54).toFixed(2);}
        if(this.chart.women_L_waist){this.chart.women_L_waist = (fromData.value.women_L_waist * 2.54).toFixed(2);}
        if(this.chart.women_L_hip){this.chart.women_L_hip = (fromData.value.women_L_hip * 2.54).toFixed(2); }
        if(this.chart.women_XL_uk){this.chart.women_XL_uk = (fromData.value.women_XL_uk * 2.54).toFixed(2);}
        if(this.chart.women_XL_bust){this.chart.women_XL_bust = (fromData.value.women_XL_bust * 2.54).toFixed(2);}
        if(this.chart.women_XL_waist){this.chart.women_XL_waist = (fromData.value.women_XL_waist * 2.54).toFixed(2);}
        if(this.chart.women_XL_hip){ this.chart.women_XL_hip = (fromData.value.women_XL_hip * 2.54).toFixed(2);}
        if(this.chart.women_XXL_uk){this.chart.women_XXL_uk = (fromData.value.women_XXL_uk * 2.54).toFixed(2);}   
        if(this.chart.women_XXL_bust){this.chart.women_XXL_bust = (fromData.value.women_XXL_bust * 2.54).toFixed(2);}
        if(this.chart.women_XXL_waist){this.chart.women_XXL_waist = (fromData.value.women_XXL_waist * 2.54).toFixed(2);}
        if(this.chart.women_XXL_hip){this.chart.women_XXL_hip = (fromData.value.women_XXL_hip * 2.54).toFixed(2);  }
        if(this.chart.women_3XL_uk){this.chart.women_3XL_uk = (fromData.value.women_3XL_uk * 2.54).toFixed(2);}
        if(this.chart.women_3XL_bust){this.chart.women_3XL_bust = (fromData.value.women_3XL_bust * 2.54).toFixed(2);}
        if(this.chart.women_3XL_waist){this.chart.women_3XL_waist = (fromData.value.women_3XL_waist * 2.54).toFixed(2);}
        if(this.chart.women_3XL_hip){this.chart.women_3XL_hip = (fromData.value.women_3XL_hip * 2.54).toFixed(2);}
        if(this.chart.women_4XL_uk){this.chart.women_4XL_uk = (fromData.value.women_4XL_uk * 2.54).toFixed(2);}    
        if(this.chart.women_4XL_bust){this.chart.women_4XL_bust = (fromData.value.women_4XL_bust * 2.54).toFixed(2);}
        if(this.chart.women_4XL_waist){this.chart.women_4XL_waist = (fromData.value.women_4XL_waist * 2.54).toFixed(2);}
        if(this.chart.women_4XL_hip){this.chart.women_4XL_hip = (fromData.value.women_4XL_hip * 2.54).toFixed(2);}
        if(this.chart.women_5XL_uk){this.chart.women_5XL_uk = (fromData.value.women_5XL_uk * 2.54).toFixed(2);}       
        if(this.chart.women_5XL_bust){this.chart.women_5XL_bust = (fromData.value.women_5XL_bust * 2.54).toFixed(2);}
        if(this.chart.women_5XL_waist){this.chart.women_5XL_waist = (fromData.value.women_5XL_waist * 2.54).toFixed(2);}
        if(this.chart.women_5XL_hip){this.chart.women_5XL_hip = (fromData.value.women_5XL_hip * 2.54).toFixed(2);}
        if(this.chart.women_6XL_uk){this.chart.women_6XL_uk = (fromData.value.women_6XL_uk * 2.54).toFixed(2);}
        if(this.chart.women_6XL_bust){this.chart.women_6XL_bust = (fromData.value.women_6XL_bust * 2.54).toFixed(2);}
        if(this.chart.women_6XL_waist){this.chart.women_6XL_waist = (fromData.value.women_6XL_waist * 2.54).toFixed(2);}
        if(this.chart.women_6XL_hip){this.chart.women_6XL_hip = (fromData.value.women_6XL_hip * 2.54).toFixed(2);}
      
    }
    else if(identifier == 'womenChart' && _event.checked == false)
    {
      console.log("womenChart",'false');
      if(this.chart.women_XS_uk){ this.chart.women_XS_uk = (fromData.value.women_XS_uk / 2.54).toFixed(2)};
        if(this.chart.women_XS_bust){this.chart.women_XS_bust = (fromData.value.women_XS_bust / 2.54).toFixed(2);}
        if(this.chart.women_XS_waist){this.chart.women_XS_waist = (fromData.value.women_XS_waist / 2.54).toFixed(2);}
        if(this.chart.women_XS_hip){this.chart.women_XS_hip = (fromData.value.women_XS_hip / 2.54).toFixed(2);}
        if(this.chart.women_S_uk){this.chart.women_S_uk = (fromData.value.women_S_uk / 2.54).toFixed(2);}
        if(this.chart.women_S_bust){this.chart.women_S_bust = (fromData.value.women_S_bust / 2.54).toFixed(2);}
        if(this.chart.women_S_waist){this.chart.women_S_waist = (fromData.value.women_S_waist / 2.54).toFixed(2);}
        if(this.chart.women_S_hip){this.chart.women_S_hip = (fromData.value.women_S_hip / 2.54).toFixed(2);}
        if(this.chart.women_M_uk){this.chart.women_M_uk = (fromData.value.women_M_uk / 2.54).toFixed(2);}
        if(this.chart.women_M_bust){this.chart.women_M_bust = (fromData.value.women_M_bust / 2.54).toFixed(2);}
        if(this.chart.women_M_waist){this.chart.women_M_waist = (fromData.value.women_M_waist / 2.54).toFixed(2);}
        if(this.chart.women_M_hip){this.chart.women_M_hip = (fromData.value.women_M_hip / 2.54).toFixed(2);  }
        if(this.chart.women_L_uk){this.chart.women_L_uk = (fromData.value.women_L_uk / 2.54).toFixed(2);}
        if(this.chart.women_L_bust){this.chart.women_L_bust = (fromData.value.women_L_bust / 2.54).toFixed(2);}
        if(this.chart.women_L_waist){this.chart.women_L_waist = (fromData.value.women_L_waist / 2.54).toFixed(2);}
        if(this.chart.women_L_hip){this.chart.women_L_hip = (fromData.value.women_L_hip / 2.54).toFixed(2); }
        if(this.chart.women_XL_uk){this.chart.women_XL_uk = (fromData.value.women_XL_uk / 2.54).toFixed(2);}
        if(this.chart.women_XL_bust){this.chart.women_XL_bust = (fromData.value.women_XL_bust / 2.54).toFixed(2);}
        if(this.chart.women_XL_waist){this.chart.women_XL_waist = (fromData.value.women_XL_waist / 2.54).toFixed(2);}
        if(this.chart.women_XL_hip){ this.chart.women_XL_hip = (fromData.value.women_XL_hip / 2.54).toFixed(2);}
        if(this.chart.women_XXL_uk){this.chart.women_XXL_uk = (fromData.value.women_XXL_uk / 2.54).toFixed(2);}   
        if(this.chart.women_XXL_bust){this.chart.women_XXL_bust = (fromData.value.women_XXL_bust / 2.54).toFixed(2);}
        if(this.chart.women_XXL_waist){this.chart.women_XXL_waist = (fromData.value.women_XXL_waist / 2.54).toFixed(2);}
        if(this.chart.women_XXL_hip){this.chart.women_XXL_hip = (fromData.value.women_XXL_hip / 2.54).toFixed(2);  }
        if(this.chart.women_3XL_uk){this.chart.women_3XL_uk = (fromData.value.women_3XL_uk / 2.54).toFixed(2);}
        if(this.chart.women_3XL_bust){this.chart.women_3XL_bust = (fromData.value.women_3XL_bust / 2.54).toFixed(2);}
        if(this.chart.women_3XL_waist){this.chart.women_3XL_waist = (fromData.value.women_3XL_waist / 2.54).toFixed(2);}
        if(this.chart.women_3XL_hip){this.chart.women_3XL_hip = (fromData.value.women_3XL_hip / 2.54).toFixed(2);}
        if(this.chart.women_4XL_uk){this.chart.women_4XL_uk = (fromData.value.women_4XL_uk / 2.54).toFixed(2);}    
        if(this.chart.women_4XL_bust){this.chart.women_4XL_bust = (fromData.value.women_4XL_bust / 2.54).toFixed(2);}
        if(this.chart.women_4XL_waist){this.chart.women_4XL_waist = (fromData.value.women_4XL_waist / 2.54).toFixed(2);}
        if(this.chart.women_4XL_hip){this.chart.women_4XL_hip = (fromData.value.women_4XL_hip / 2.54).toFixed(2);}
        if(this.chart.women_5XL_uk){this.chart.women_5XL_uk = (fromData.value.women_5XL_uk / 2.54).toFixed(2);}       
        if(this.chart.women_5XL_bust){this.chart.women_5XL_bust = (fromData.value.women_5XL_bust / 2.54).toFixed(2);}
        if(this.chart.women_5XL_waist){this.chart.women_5XL_waist = (fromData.value.women_5XL_waist / 2.54).toFixed(2);}
        if(this.chart.women_5XL_hip){this.chart.women_5XL_hip = (fromData.value.women_5XL_hip / 2.54).toFixed(2);}
        if(this.chart.women_6XL_uk){this.chart.women_6XL_uk = (fromData.value.women_6XL_uk / 2.54).toFixed(2);}
        if(this.chart.women_6XL_bust){this.chart.women_6XL_bust = (fromData.value.women_6XL_bust / 2.54).toFixed(2);}
        if(this.chart.women_6XL_waist){this.chart.women_6XL_waist = (fromData.value.women_6XL_waist / 2.54).toFixed(2);}
        if(this.chart.women_6XL_hip){this.chart.women_6XL_hip = (fromData.value.women_6XL_hip / 2.54).toFixed(2);}
    }
    else if(identifier == 'mencms' && _event.checked == true)
    {
      console.log("mencms",'true');

        // men start
        if(this.chart.men_XS_Chest){this.chart.men_XS_Chest = (fromData.value.men_XS_Chest * 2.54).toFixed(2);}
        if(this.chart.men_XS_waist_min){this.chart.men_XS_waist_min = (fromData.value.men_XS_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_XS_waist_max){this.chart.men_XS_waist_max = (fromData.value.men_XS_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_XS_Neck){this.chart.men_XS_Neck = (fromData.value.men_XS_Neck * 2.54).toFixed(2);}
        if(this.chart.men_XS_hip_min){this.chart.men_XS_hip_min = (fromData.value.men_XS_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_XS_hip_max){this.chart.men_XS_hip_max = (fromData.value.men_XS_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_S_Chest){this.chart.men_S_Chest = (fromData.value.men_S_Chest * 2.54).toFixed(2);}
        if(this.chart.men_S_waist_min){this.chart.men_S_waist_min = (fromData.value.men_S_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_S_waist_max){this.chart.men_S_waist_max = (fromData.value.men_S_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_S_Neck){this.chart.men_S_Neck = (fromData.value.men_S_Neck * 2.54).toFixed(2);}
        if(this.chart.men_S_hip_min){this.chart.men_S_hip_min = (fromData.value.men_S_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_S_hip_max){this.chart.men_S_hip_max = (fromData.value.men_S_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_M_Chest){this.chart.men_M_Chest = (fromData.value.men_M_Chest * 2.54).toFixed(2);}
        if(this.chart.men_M_waist_min){this.chart.men_M_waist_min = (fromData.value.men_M_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_M_waist_max){this.chart.men_M_waist_max = (fromData.value.men_M_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_M_Neck){this.chart.men_M_Neck = (fromData.value.men_M_Neck * 2.54).toFixed(2);}
        if(this.chart.men_M_hip_min){this.chart.men_M_hip_min = (fromData.value.men_M_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_M_hip_max){this.chart.men_M_hip_max = (fromData.value.men_M_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_L_Chest){this.chart.men_L_Chest = (fromData.value.men_L_Chest * 2.54).toFixed(2);}
        if(this.chart.men_L_waist_min){this.chart.men_L_waist_min = (fromData.value.men_L_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_L_waist_max){this.chart.men_L_waist_max = (fromData.value.men_L_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_L_Neck){this.chart.men_L_Neck = (fromData.value.men_L_Neck * 2.54).toFixed(2);}
        if(this.chart.men_L_hip_min){this.chart.men_L_hip_min = (fromData.value.men_L_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_L_hip_max){this.chart.men_L_hip_max = (fromData.value.men_L_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_XL_Chest){this.chart.men_XL_Chest = (fromData.value.men_XL_Chest * 2.54).toFixed(2);}
        if(this.chart.men_XL_waist_min){this.chart.men_XL_waist_min = (fromData.value.men_XL_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_XL_waist_max){this.chart.men_XL_waist_max = (fromData.value.men_XL_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_XL_Neck){this.chart.men_XL_Neck = (fromData.value.men_XL_Neck * 2.54).toFixed(2);}
        if(this.chart.men_XL_hip_min){this.chart.men_XL_hip_min = (fromData.value.men_XL_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_XL_hip_max){this.chart.men_XL_hip_max = (fromData.value.men_XL_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_XXL_Chest){this.chart.men_XXL_Chest = (fromData.value.men_XXL_Chest * 2.54).toFixed(2);}
        if(this.chart.men_XXL_waist_min){this.chart.men_XXL_waist_min = (fromData.value.men_XXL_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_XXL_waist_max){this.chart.men_XXL_waist_max = (fromData.value.men_XXL_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_XXL_Neck){this.chart.men_XXL_Neck = (fromData.value.men_XXL_Neck * 2.54).toFixed(2);}
        if(this.chart.men_XXL_hip_min){this.chart.men_XXL_hip_min = (fromData.value.men_XXL_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_XXL_hip_max){this.chart.men_XXL_hip_max = (fromData.value.men_XXL_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_3XL_Chest){this.chart.men_3XL_Chest = (fromData.value.men_3XL_Chest * 2.54).toFixed(2);}
        if(this.chart.men_3XL_waist_min){this.chart.men_3XL_waist_min = (fromData.value.men_3XL_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_3XL_waist_max){this.chart.men_3XL_waist_max = (fromData.value.men_3XL_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_3XL_Neck){this.chart.men_3XL_Neck = (fromData.value.men_3XL_Neck * 2.54).toFixed(2);}
        if(this.chart.men_3XL_hip_min){this.chart.men_3XL_hip_min = (fromData.value.men_3XL_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_3XL_hip_max){this.chart.men_3XL_hip_max = (fromData.value.men_3XL_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_4XL_Chest){this.chart.men_4XL_Chest = (fromData.value.men_4XL_Chest * 2.54).toFixed(2);}
        if(this.chart.men_4XL_waist_min){this.chart.men_4XL_waist_min = (fromData.value.men_4XL_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_4XL_waist_max){this.chart.men_4XL_waist_max = (fromData.value.men_4XL_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_4XL_Neck){this.chart.men_4XL_Neck = (fromData.value.men_4XL_Neck * 2.54).toFixed(2);}
        if(this.chart.men_4XL_hip_min){this.chart.men_4XL_hip_min = (fromData.value.men_4XL_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_4XL_hip_max){this.chart.men_4XL_hip_max = (fromData.value.men_4XL_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_5XL_Chest){this.chart.men_5XL_Chest = (fromData.value.men_5XL_Chest * 2.54).toFixed(2);}
        if(this.chart.men_5XL_waist_min){this.chart.men_5XL_waist_min = (fromData.value.men_5XL_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_5XL_waist_max){this.chart.men_5XL_waist_max = (fromData.value.men_5XL_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_5XL_Neck){this.chart.men_5XL_Neck = (fromData.value.men_5XL_Neck * 2.54).toFixed(2);}
        if(this.chart.men_5XL_hip_min){this.chart.men_5XL_hip_min = (fromData.value.men_5XL_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_5XL_hip_max){this.chart.men_5XL_hip_max = (fromData.value.men_5XL_hip_max * 2.54).toFixed(2);}
        if(this.chart.men_6XL_Chest){this.chart.men_6XL_Chest = (fromData.value.men_6XL_Chest * 2.54).toFixed(2);}
        if(this.chart.men_6XL_waist_min){this.chart.men_6XL_waist_min = (fromData.value.men_6XL_waist_min * 2.54).toFixed(2);}
        if(this.chart.men_6XL_waist_max){this.chart.men_6XL_waist_max = (fromData.value.men_6XL_waist_max * 2.54).toFixed(2);}
        if(this.chart.men_6XL_Neck){this.chart.men_6XL_Neck = (fromData.value.men_6XL_Neck * 2.54).toFixed(2);}
        if(this.chart.men_6XL_hip_min){this.chart.men_6XL_hip_min = (fromData.value.men_6XL_hip_min * 2.54).toFixed(2);}
        if(this.chart.men_6XL_hip_max){this.chart.men_6XL_hip_max = (fromData.value.men_6XL_hip_max * 2.54).toFixed(2);}
        
        
      
    }
    else if(identifier == 'mencms' && _event.checked == false)
    {
      console.log("mencms",'false');
      
      if(this.chart.men_XS_Chest){this.chart.men_XS_Chest = (fromData.value.men_XS_Chest / 2.54).toFixed(2);}
      if(this.chart.men_XS_waist_min){this.chart.men_XS_waist_min = (fromData.value.men_XS_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_XS_waist_max){this.chart.men_XS_waist_max = (fromData.value.men_XS_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_XS_Neck){this.chart.men_XS_Neck = (fromData.value.men_XS_Neck / 2.54).toFixed(2);}
      if(this.chart.men_XS_hip_min){this.chart.men_XS_hip_min = (fromData.value.men_XS_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_XS_hip_max){this.chart.men_XS_hip_max = (fromData.value.men_XS_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_S_Chest){this.chart.men_S_Chest = (fromData.value.men_S_Chest / 2.54).toFixed(2);}
      if(this.chart.men_S_waist_min){this.chart.men_S_waist_min = (fromData.value.men_S_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_S_waist_max){this.chart.men_S_waist_max = (fromData.value.men_S_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_S_Neck){this.chart.men_S_Neck = (fromData.value.men_S_Neck / 2.54).toFixed(2);}
      if(this.chart.men_S_hip_min){this.chart.men_S_hip_min = (fromData.value.men_S_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_S_hip_max){this.chart.men_S_hip_max = (fromData.value.men_S_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_M_Chest){this.chart.men_M_Chest = (fromData.value.men_M_Chest / 2.54).toFixed(2);}
      if(this.chart.men_M_waist_min){this.chart.men_M_waist_min = (fromData.value.men_M_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_M_waist_max){this.chart.men_M_waist_max = (fromData.value.men_M_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_M_Neck){this.chart.men_M_Neck = (fromData.value.men_M_Neck / 2.54).toFixed(2);}
      if(this.chart.men_M_hip_min){this.chart.men_M_hip_min = (fromData.value.men_M_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_M_hip_max){this.chart.men_M_hip_max = (fromData.value.men_M_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_L_Chest){this.chart.men_L_Chest = (fromData.value.men_L_Chest / 2.54).toFixed(2);}
      if(this.chart.men_L_waist_min){this.chart.men_L_waist_min = (fromData.value.men_L_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_L_waist_max){this.chart.men_L_waist_max = (fromData.value.men_L_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_L_Neck){this.chart.men_L_Neck = (fromData.value.men_L_Neck / 2.54).toFixed(2);}
      if(this.chart.men_L_hip_min){this.chart.men_L_hip_min = (fromData.value.men_L_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_L_hip_max){this.chart.men_L_hip_max = (fromData.value.men_L_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_XL_Chest){this.chart.men_XL_Chest = (fromData.value.men_XL_Chest / 2.54).toFixed(2);}
      if(this.chart.men_XL_waist_min){this.chart.men_XL_waist_min = (fromData.value.men_XL_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_XL_waist_max){this.chart.men_XL_waist_max = (fromData.value.men_XL_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_XL_Neck){this.chart.men_XL_Neck = (fromData.value.men_XL_Neck / 2.54).toFixed(2);}
      if(this.chart.men_XL_hip_min){this.chart.men_XL_hip_min = (fromData.value.men_XL_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_XL_hip_max){this.chart.men_XL_hip_max = (fromData.value.men_XL_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_XXL_Chest){this.chart.men_XXL_Chest = (fromData.value.men_XXL_Chest / 2.54).toFixed(2);}
      if(this.chart.men_XXL_waist_min){this.chart.men_XXL_waist_min = (fromData.value.men_XXL_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_XXL_waist_max){this.chart.men_XXL_waist_max = (fromData.value.men_XXL_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_XXL_Neck){this.chart.men_XXL_Neck = (fromData.value.men_XXL_Neck / 2.54).toFixed(2);}
      if(this.chart.men_XXL_hip_min){this.chart.men_XXL_hip_min = (fromData.value.men_XXL_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_XXL_hip_max){this.chart.men_XXL_hip_max = (fromData.value.men_XXL_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_3XL_Chest){this.chart.men_3XL_Chest = (fromData.value.men_3XL_Chest / 2.54).toFixed(2);}
      if(this.chart.men_3XL_waist_min){this.chart.men_3XL_waist_min = (fromData.value.men_3XL_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_3XL_waist_max){this.chart.men_3XL_waist_max = (fromData.value.men_3XL_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_3XL_Neck){this.chart.men_3XL_Neck = (fromData.value.men_3XL_Neck / 2.54).toFixed(2);}
      if(this.chart.men_3XL_hip_min){this.chart.men_3XL_hip_min = (fromData.value.men_3XL_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_3XL_hip_max){this.chart.men_3XL_hip_max = (fromData.value.men_3XL_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_4XL_Chest){this.chart.men_4XL_Chest = (fromData.value.men_4XL_Chest / 2.54).toFixed(2);}
      if(this.chart.men_4XL_waist_min){this.chart.men_4XL_waist_min = (fromData.value.men_4XL_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_4XL_waist_max){this.chart.men_4XL_waist_max = (fromData.value.men_4XL_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_4XL_Neck){this.chart.men_4XL_Neck = (fromData.value.men_4XL_Neck / 2.54).toFixed(2);}
      if(this.chart.men_4XL_hip_min){this.chart.men_4XL_hip_min = (fromData.value.men_4XL_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_4XL_hip_max){this.chart.men_4XL_hip_max = (fromData.value.men_4XL_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_5XL_Chest){this.chart.men_5XL_Chest = (fromData.value.men_5XL_Chest / 2.54).toFixed(2);}
      if(this.chart.men_5XL_waist_min){this.chart.men_5XL_waist_min = (fromData.value.men_5XL_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_5XL_waist_max){this.chart.men_5XL_waist_max = (fromData.value.men_5XL_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_5XL_Neck){this.chart.men_5XL_Neck = (fromData.value.men_5XL_Neck / 2.54).toFixed(2);}
      if(this.chart.men_5XL_hip_min){this.chart.men_5XL_hip_min = (fromData.value.men_5XL_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_5XL_hip_max){this.chart.men_5XL_hip_max = (fromData.value.men_5XL_hip_max / 2.54).toFixed(2);}
      if(this.chart.men_6XL_Chest){this.chart.men_6XL_Chest = (fromData.value.men_6XL_Chest / 2.54).toFixed(2);}
      if(this.chart.men_6XL_waist_min){this.chart.men_6XL_waist_min = (fromData.value.men_6XL_waist_min / 2.54).toFixed(2);}
      if(this.chart.men_6XL_waist_max){this.chart.men_6XL_waist_max = (fromData.value.men_6XL_waist_max / 2.54).toFixed(2);}
      if(this.chart.men_6XL_Neck){this.chart.men_6XL_Neck = (fromData.value.men_6XL_Neck / 2.54).toFixed(2);}
      if(this.chart.men_6XL_hip_min){this.chart.men_6XL_hip_min = (fromData.value.men_6XL_hip_min / 2.54).toFixed(2);}
      if(this.chart.men_6XL_hip_max){this.chart.men_6XL_hip_max = (fromData.value.men_6XL_hip_max / 2.54).toFixed(2);}
        
      
    }

  }
  womenChartInCM = false;
  menChartInCM = false;

  onSubmitProfile(form:NgForm){
    console.log(form.value,this.chart,'SUBMITData');
    var womenChartData:any = {},womensizeType,menChartData:any = {},mensizeType;
    if(this.womenChartInCM == false)
    {
      womensizeType = 'IN';
    }else{
      womensizeType = 'CM';
    }
    if(this.menChartInCM == false)
    {
      mensizeType = 'IN';
    }else{
      mensizeType = 'CM';
    }
      womenChartData = {
        designerId:this.designerid,
        chartName: "women standard chart",
        sizeType:womensizeType,
        measurementsWomen:
          // XS
          {
            'xs':{
              uk:form.value.women_XS_uk,
              bust:form.value.women_XS_bust,
              hip:form.value.women_XS_hip,
              waist:form.value.women_XS_waist,
            },
            's':{
              uk:form.value.women_S_uk,
              bust:form.value.women_S_bust,
              hip:form.value.women_S_hip,
              waist:form.value.women_S_waist,
            },
            'm':{
              uk:form.value.women_M_uk,
              bust:form.value.women_M_bust,
              hip:form.value.women_M_hip,
              waist:form.value.women_M_waist,
            },
            'l':{
              uk:form.value.women_L_uk,
              bust:form.value.women_L_bust,
              hip:form.value.women_L_hip,
              waist:form.value.women_L_waist,
            },
            'xl':{
              uk:form.value.women_XL_uk,
              bust:form.value.women_XL_bust,
              hip:form.value.women_XL_hip,
              waist:form.value.women_XL_waist,
            },
            'xxl':{
              uk:form.value.women_XXL_uk,
              bust:form.value.women_XXL_bust,
              hip:form.value.women_XXL_hip,
              waist:form.value.women_XXL_waist,
            },
            'xl3':{
              uk:form.value.women_3XL_uk,
              bust:form.value.women_3XL_bust,
              hip:form.value.women_3XL_hip,
              waist:form.value.women_3XL_waist,
            },
            'xl4':{
              uk:form.value.women_4XL_uk,
              bust:form.value.women_4XL_bust,
              hip:form.value.women_4XL_hip,
              waist:form.value.women_4XL_waist,
            },
            'xl5':{
              uk:form.value.women_5XL_uk,
              bust:form.value.women_5XL_bust,
              hip:form.value.women_5XL_hip,
              waist:form.value.women_5XL_waist,
            },
            'xl6':{
              uk:form.value.women_6XL_uk,
              bust:form.value.women_6XL_bust,
              hip:form.value.women_6XL_hip,
              waist:form.value.women_6XL_waist,
            }
                         
          }
        
      }
      menChartData = {
        designerId:this.designerid,
        chartName: "Men/Kids standard chart",
        sizeType:mensizeType,
        measurementsMen:
        {
          // XS
          
            'xs':{
              "chest":form.value.men_XS_Chest,
              "neck":form.value.men_XS_Neck,
              "waist":{
                min:form.value.men_XS_waist_min,
                max:form.value.men_XS_waist_max,
              },
              "hip":{
                min:form.value.men_XS_hip_min,
                max:form.value.men_XS_hip_max,
              }
            },
          
          // XS end
          // S
            's':{
              "chest":form.value.men_S_Chest,
              "neck":form.value.men_S_Neck,
              "waist":{
                min:form.value.men_S_waist_min,
                max:form.value.men_S_waist_max,
              },
              "hip":{
                min:form.value.men_S_hip_min,
                max:form.value.men_S_hip_max,
              }
            },
          // S end
          // M 
            'm':{
              "chest":form.value.men_M_Chest,
              "neck":form.value.men_M_Neck,
              "waist":{
                min:form.value.men_M_waist_min,
                max:form.value.men_M_waist_max,
              },
              "hip":{
                min:form.value.men_M_hip_min,
                max:form.value.men_M_hip_max,
              }
            },
          // M end
          // L
            'l':{
              "chest":form.value.men_L_Chest,
              "neck":form.value.men_L_Neck,
              "waist":{
                min:form.value.men_L_waist_min,
                max:form.value.men_L_waist_max,
              },
              "hip":{
                min:form.value.men_L_hip_min,
                max:form.value.men_L_hip_max,
              }
            },
          // L end
          // XL
          
            'xl':{
              "chest":form.value.men_XL_Chest,
              "neck":form.value.men_XL_Neck,
              "waist":{
                min:form.value.men_XL_waist_min,
                max:form.value.men_XL_waist_max,
              },
              "hip":{
                min:form.value.men_XL_hip_min,
                max:form.value.men_XL_hip_max,
              }
            },
          // XL end
          // XXL
            'xxl':{
              "chest":form.value.men_XXL_Chest,
              "neck":form.value.men_XXL_Neck,
              "waist":{
                min:form.value.men_XXL_waist_min,
                max:form.value.men_XXL_waist_max,
              },
              "hip":{
                min:form.value.men_XXL_hip_min,
                max:form.value.men_XXL_hip_max,
              }
            },
          // XXL end
          // 3XL
            'xl3':{
              "chest":form.value.men_3XL_Chest,
              "neck":form.value.men_3XL_Neck,
              "waist":{
                min:form.value.men_3XL_waist_min,
                max:form.value.men_3XL_waist_max,
              },
              "hip":{
                min:form.value.men_3XL_hip_min,
                max:form.value.men_3XL_hip_max,
              }
            },
          // 3XL end
          // 4XL
            'xl4':{
              "chest":form.value.men_4XL_Chest,
              "neck":form.value.men_4XL_Neck,
              "waist":{
                min:form.value.men_4XL_waist_min,
                max:form.value.men_4XL_waist_max,
              },
              "hip":{
                min:form.value.men_4XL_hip_min,
                max:form.value.men_4XL_hip_max,
              }
            },
          // 4XL end
          // 5XL
            'xl5':{
              "chest":form.value.men_5XL_Chest,
              "neck":form.value.men_5XL_Neck,
              "waist":{
                min:form.value.men_5XL_waist_min,
                max:form.value.men_5XL_waist_max,
              },
              "hip":{
                min:form.value.men_5XL_hip_min,
                max:form.value.men_5XL_hip_max,
              }
            },
          // 5XL end
          // 6XL
            'xl6':{
              "chest":form.value.men_6XL_Chest,
              "neck":form.value.men_6XL_Neck,
              "waist":{
                min:form.value.men_6XL_waist_min,
                max:form.value.men_6XL_waist_max,
              },
              "hip":{
                min:form.value.men_6XL_hip_min,
                max:form.value.men_6XL_hip_max,
              }
            },
          // 6XL end
        }
      }
    console.log(womenChartData,menChartData);
    
    this.formloader = true;
    var boutiqueProfile = {
      boutiqueName:form.value.boutiqueName,
      experience:form.value.experience,
      firmName:this.modal.firmName,
      gstin:form.value.gstin,
      operatingCity:form.value.operatingCity,
      professionalCategory:form.value.professionalCategory,
      yearOfOperation:form.value.yearOfOperation,
      
    }
   
    if(form.value.dob == undefined)
    {
      // this.designerProfile = {
      //   dob:
      // }
      var dob =moment(this.designerprofiledata.dob).format('YYYY/MM/DD');
    }
    else
    {
      // this.designerProfile = {
      //   dob:form.value.dob,
        
      // }
      dob = form.value.dob;
    }
    this.designerProfile = {
      altMobileNo:this.modal.altMobileNo,
      profilePic:this.profilePic,
      displayName:this.modal.displayName,
      email:this.modal.email,
      password:this.modal.password,
      firstName1:form.value.firstName1,
      firstName2:form.value.firstName2,
      gender:form.value.gender,
      pinCode:form.value.pinCode,
      lastName1:form.value.lastName1,
      lastName2:form.value.lastName2,
      maritalStatus:this.modal.maritalStatus,
      mobileNo:this.modal.mobileNo,
      qualification:this.modal.qualification,
      dob:dob,
      country:this.modal.country,
      state:this.modal.state,
      city:this.modal.city,
      designerCategory:this.modal.designerCategory,
      digitalSignature:this.modal.digitalSignature,

  }
    var socialProfile= {
      achievements: this.modal.achievements,
      address: form.value.address,
      description: form.value.description,
      facebookLink: form.value.facebookLink,
      instagramLink: form.value.instagramLink,
      youtubeLink:form.value.youtubeLink,
    }
    
    var designerPersonalInfoEntity = {
      designerId:this.designerprofiledata.designerId,
      bankDetails : {
        accountNumber:form.value.accountNumber,
        bankName:form.value.bankName,
        ifscCode:form.value.ifscCode
      },
      designerDocuments:{
        aadharCard:this.previewimageSrc_aadher,
        panCard:this.previewimageSrc_pan,
        void_check:'',
      }
    }
    this.alldesignerProfiledata = {
      accountStatus:form.value.accountStatus,
      boutiqueProfile:boutiqueProfile,
      designerProfile:this.designerProfile,
      socialProfile:socialProfile,
      designerPersonalInfoEntity:designerPersonalInfoEntity,
      email:this.designerprofiledata.email,
      password:this.designerprofiledata.password,
      designerId:this.designerprofiledata.designerId,
      designerName:this.modal.firstName1 +' '+ this.modal.lastName1,
      menChartData:menChartData,
      womenChartData:womenChartData,
      designerCurrentStatus:null,
      designerLevel:null,
      profileStatus:"SUBMITTED",
      uid:this.designerprofiledata.uid,
      isProfileCompleted:this.isProfileCompleted,

    }
    
    // this.allProfiledata = form.value
    console.log("this.designerprofiledata",this.alldesignerProfiledata);
    
    // console.log(form.value);
   this.profileupdateSubcribe =  this.http.put(this.profileupdateApi,this.alldesignerProfiledata).subscribe((res:any) =>{
    this.formloader = false; 
      this.toastrService.success(res.message);
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload();
      });
      },error =>{
        this.formloader = false;
        console.log("error",error);
        this.toastrService.success(error.message);
        
        // recall profile
    })
    
  }
  SavingData(form:NgForm){
    console.log(form.value,this.chart,'SavingData');
    var womenChartData:any = {},womensizeType,menChartData:any = {},mensizeType;
    if(this.womenChartInCM == false)
    {
      womensizeType = 'IN';
    }else{
      womensizeType = 'CM';
    }
    if(this.menChartInCM == false)
    {
      mensizeType = 'IN';
    }else{
      mensizeType = 'CM';
    }
      womenChartData = {
        designerId:this.designerid,
        chartName: "women standard chart",
        sizeType:womensizeType,
        measurementsWomen:
          // XS
          {
            'xs':{
              uk:form.value.women_XS_uk,
              bust:form.value.women_XS_bust,
              hip:form.value.women_XS_hip,
              waist:form.value.women_XS_waist,
            },
            's':{
              uk:form.value.women_S_uk,
              bust:form.value.women_S_bust,
              hip:form.value.women_S_hip,
              waist:form.value.women_S_waist,
            },
            'm':{
              uk:form.value.women_M_uk,
              bust:form.value.women_M_bust,
              hip:form.value.women_M_hip,
              waist:form.value.women_M_waist,
            },
            'l':{
              uk:form.value.women_L_uk,
              bust:form.value.women_L_bust,
              hip:form.value.women_L_hip,
              waist:form.value.women_L_waist,
            },
            'xl':{
              uk:form.value.women_XL_uk,
              bust:form.value.women_XL_bust,
              hip:form.value.women_XL_hip,
              waist:form.value.women_XL_waist,
            },
            'xxl':{
              uk:form.value.women_XXL_uk,
              bust:form.value.women_XXL_bust,
              hip:form.value.women_XXL_hip,
              waist:form.value.women_XXL_waist,
            },
            'xl3':{
              uk:form.value.women_3XL_uk,
              bust:form.value.women_3XL_bust,
              hip:form.value.women_3XL_hip,
              waist:form.value.women_3XL_waist,
            },
            'xl4':{
              uk:form.value.women_4XL_uk,
              bust:form.value.women_4XL_bust,
              hip:form.value.women_4XL_hip,
              waist:form.value.women_4XL_waist,
            },
            'xl5':{
              uk:form.value.women_5XL_uk,
              bust:form.value.women_5XL_bust,
              hip:form.value.women_5XL_hip,
              waist:form.value.women_5XL_waist,
            },
            'xl6':{
              uk:form.value.women_6XL_uk,
              bust:form.value.women_6XL_bust,
              hip:form.value.women_6XL_hip,
              waist:form.value.women_6XL_waist,
            }
                         
          }
        
      }
      menChartData = {
        designerId:this.designerid,
        chartName: "Men/Kids standard chart",
        sizeType:mensizeType,
        measurementsMen:
        {
          // XS
          
            'xs':{
              "chest":form.value.men_XS_Chest,
              "neck":form.value.men_XS_Neck,
              "waist":{
                min:form.value.men_XS_waist_min,
                max:form.value.men_XS_waist_max,
              },
              "hip":{
                min:form.value.men_XS_hip_min,
                max:form.value.men_XS_hip_max,
              }
            },
          
          // XS end
          // S
            's':{
              "chest":form.value.men_S_Chest,
              "neck":form.value.men_S_Neck,
              "waist":{
                min:form.value.men_S_waist_min,
                max:form.value.men_S_waist_max,
              },
              "hip":{
                min:form.value.men_S_hip_min,
                max:form.value.men_S_hip_max,
              }
            },
          // S end
          // M 
            'm':{
              "chest":form.value.men_M_Chest,
              "neck":form.value.men_M_Neck,
              "waist":{
                min:form.value.men_M_waist_min,
                max:form.value.men_M_waist_max,
              },
              "hip":{
                min:form.value.men_M_hip_min,
                max:form.value.men_M_hip_max,
              }
            },
          // M end
          // L
            'l':{
              "chest":form.value.men_L_Chest,
              "neck":form.value.men_L_Neck,
              "waist":{
                min:form.value.men_L_waist_min,
                max:form.value.men_L_waist_max,
              },
              "hip":{
                min:form.value.men_L_hip_min,
                max:form.value.men_L_hip_max,
              }
            },
          // L end
          // XL
          
            'xl':{
              "chest":form.value.men_XL_Chest,
              "neck":form.value.men_XL_Neck,
              "waist":{
                min:form.value.men_XL_waist_min,
                max:form.value.men_XL_waist_max,
              },
              "hip":{
                min:form.value.men_XL_hip_min,
                max:form.value.men_XL_hip_max,
              }
            },
          // XL end
          // XXL
            'xxl':{
              "chest":form.value.men_XXL_Chest,
              "neck":form.value.men_XXL_Neck,
              "waist":{
                min:form.value.men_XXL_waist_min,
                max:form.value.men_XXL_waist_max,
              },
              "hip":{
                min:form.value.men_XXL_hip_min,
                max:form.value.men_XXL_hip_max,
              }
            },
          // XXL end
          // 3XL
            'xl3':{
              "chest":form.value.men_3XL_Chest,
              "neck":form.value.men_3XL_Neck,
              "waist":{
                min:form.value.men_3XL_waist_min,
                max:form.value.men_3XL_waist_max,
              },
              "hip":{
                min:form.value.men_3XL_hip_min,
                max:form.value.men_3XL_hip_max,
              }
            },
          // 3XL end
          // 4XL
            'xl4':{
              "chest":form.value.men_4XL_Chest,
              "neck":form.value.men_4XL_Neck,
              "waist":{
                min:form.value.men_4XL_waist_min,
                max:form.value.men_4XL_waist_max,
              },
              "hip":{
                min:form.value.men_4XL_hip_min,
                max:form.value.men_4XL_hip_max,
              }
            },
          // 4XL end
          // 5XL
            'xl5':{
              "chest":form.value.men_5XL_Chest,
              "neck":form.value.men_5XL_Neck,
              "waist":{
                min:form.value.men_5XL_waist_min,
                max:form.value.men_5XL_waist_max,
              },
              "hip":{
                min:form.value.men_5XL_hip_min,
                max:form.value.men_5XL_hip_max,
              }
            },
          // 5XL end
          // 6XL
            'xl6':{
              "chest":form.value.men_6XL_Chest,
              "neck":form.value.men_6XL_Neck,
              "waist":{
                min:form.value.men_6XL_waist_min,
                max:form.value.men_6XL_waist_max,
              },
              "hip":{
                min:form.value.men_6XL_hip_min,
                max:form.value.men_6XL_hip_max,
              }
            },
          // 6XL end
        }
      }
    console.log(womenChartData,menChartData);
    
    this.formloader = true;
    var boutiqueProfile = {
      boutiqueName:form.value.boutiqueName,
      experience:form.value.experience,
      firmName:this.modal.firmName,
      gstin:form.value.gstin,
      operatingCity:form.value.operatingCity,
      professionalCategory:form.value.professionalCategory,
      yearOfOperation:form.value.yearOfOperation,
      
    }
    this.designerProfile;
   
    if(form.value.dob == undefined)
    {
      // this.designerProfile = {
      //   dob:
      // }
      var dob =moment(this.designerprofiledata.dob).format('YYYY/MM/DD');
    }
    else
    {
      // this.designerProfile = {
      //   dob:form.value.dob,
        
      // }
      dob = form.value.dob;
    }
    this.designerProfile = {
      altMobileNo:this.modal.altMobileNo,
      profilePic:this.profilePic,
      displayName:this.modal.displayName,
      email:this.modal.email,
      password:this.modal.password,
      firstName1:form.value.firstName1,
      firstName2:form.value.firstName2,
      gender:form.value.gender,
      pinCode:form.value.pinCode,
      lastName1:form.value.lastName1,
      lastName2:form.value.lastName2,
      maritalStatus:this.modal.maritalStatus,
      mobileNo:this.modal.mobileNo,
      qualification:this.modal.qualification,
      dob:dob,
      country:this.modal.country,
      state:this.modal.state,
      city:this.modal.city,
      designerCategory:this.modal.designerCategory,
      digitalSignature:this.modal.digitalSignature,

  }
    var socialProfile= {
      achievements: this.modal.achievements,
      address: form.value.address,
      description: form.value.description,
      facebookLink: form.value.facebookLink,
      instagramLink: form.value.instagramLink,
      youtubeLink:form.value.youtubeLink,
    }
    
    var designerPersonalInfoEntity = {
      designerId:this.designerprofiledata.designerId,
      bankDetails : {
        accountNumber:form.value.accountNumber,
        bankName:form.value.bankName,
        ifscCode:form.value.ifscCode
      },
      designerDocuments:{
        aadharCard:this.previewimageSrc_aadher,
        panCard:this.previewimageSrc_pan,
        void_check:'',
      }
    }
    this.alldesignerProfiledata = {
      boutiqueProfile:boutiqueProfile,
      designerProfile:this.designerProfile,
      socialProfile:socialProfile,
      designerPersonalInfoEntity:designerPersonalInfoEntity,
      email:this.designerprofiledata.email,
      password:this.designerprofiledata.password,
      designerId:this.designerprofiledata.designerId,
      designerName:this.modal.firstName1 +' '+ this.modal.lastName1,
      menChartData:menChartData,
      womenChartData:womenChartData,
      designerCurrentStatus:null,
      designerLevel:null,
      profileStatus:"SAVED",
      isProfileCompleted:this.isProfileCompleted,
      uid:this.designerprofiledata.uid
    }
    
    // this.allProfiledata = form.value
    console.log("this.designerprofiledata",this.alldesignerProfiledata);
    
    // console.log(form.value);
   this.profileupdateSubcribe =  this.http.put(this.profileupdateApi,this.alldesignerProfiledata).subscribe((res:any) =>{
    this.formloader = false; 
      this.toastrService.success("Save successfully");
      this.router.navigateByUrl('/home').then(() => {
        window.location.reload();
      });;
      },error =>{
        this.formloader = false;
        this.toastrService.success(error.error.message);
        
        // recall category list
    })
    
  }
  // activeDesigner end
  passwordvalid(new_password: any,conform_password: any)
  {
    console.log(new_password,conform_password);
    if (conform_password == undefined || conform_password == '') {
      this.errormsg = '';
        
    }else if (new_password!=conform_password) {
        this.errormsg = "Password and conform password  not match.";
        setTimeout(()=>{                           // <<<---using ()=> syntax
          // this.errormsg = "";
      }, 3000);
    }else  if (new_password==conform_password)
    {
      this.errormsg =false;
    }
    else
    {
      this.errormsg = false;
    }
    
  }
  selectedCountry(e:any)
  {
    console.log(e);
    
  }
  onSubmitChangePSWForm(form:NgForm)
  {
    this.ChangePSWFormLoading = true; 
    let data = {
      newPass:form.value.newPass,
      oldPass:form.value.oldPass,
      userName:form.value.userName,
    }
    this.onSubmitForgetPSWSubcribe =  this.http.post("auth/changePassword",data).subscribe((res:any) =>{
      this.ChangePSWFormLoading = false; 
      console.log(res.message);
      
        this.toastrService.success(res.message);
        this.modalService.dismissAll();
        },(error:any) =>{
          this.ChangePSWFormLoading = false;
          console.log("error",error);
          this.toastrService.error(error.message);
          // recall category list
      })
  }
  changePsw_modal(content: any){
    this.modalService.open(content, { size: 'sm' });
  }
  logOutUser(){
    this.authService.logout();
  }
      // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if(this.loginDataSubscribe !== undefined){
      this.loginDataSubscribe.unsubscribe();
    }
    if(this.getProfileData !== undefined){
      this.getProfileData.unsubscribe();
    }
    if(this.changeProfileStatusSubscribe !== undefined){
      this.changeProfileStatusSubscribe.unsubscribe();
    }
    if(this.profileupdateSubcribe !== undefined){
      this.profileupdateSubcribe.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------
}
