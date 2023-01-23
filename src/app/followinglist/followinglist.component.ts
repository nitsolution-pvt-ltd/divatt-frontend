import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/auth/auth.service';
import { CommonUtils } from '../services/common-utils/common-utils';
import { LoginNavService } from '../services/login-nav.service';

@Component({
  selector: 'app-followinglist',
  templateUrl: './followinglist.component.html',
  styleUrls: ['./followinglist.component.css']
})
export class FollowinglistComponent implements OnInit {
  errorMsg;
  api_url: string;
  private designerListSubscribe: Subscription;
  loader: boolean;
  gridMode: boolean;
  type: any;
  logoutDataSubscribe: Subscription;
  followapi_url: string;
  get_user_dtls: any;
  getUserDetailsList_api: string;
  designerFollowSubscribe: Subscription;
  model:any = {};
  constructor( private authService: LoginService,private toastrService:ToastrService,
    private http:HttpClient,private loginNav: LoginNavService,private commonUtils: CommonUtils,) { }

  ngOnInit() {
    this.commonFunction();
  }
  commonFunction()
  {
    this.gridMode = true;
    console.log("Page Name",this.type);
    
    // this.api_url = "designer/getDesignerDetails/"+this.type;
    this.followapi_url = 'user/followDesigner'
    
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.getDesignerList();
      }
    });


    this.getUserDetailsList_api = 'auth/info/'+ this.get_user_dtls.authority+'/'+this.get_user_dtls.email;
    // this.getUserDetailsList();
  }
  designerlist=[];
 getDesignerList()
  {
    this.loader = true;
    this.designerlist=[];
    this.api_url = 'user/followedDesigner/'+this.get_user_dtls.username;
    this.designerListSubscribe = this.http.get(this.api_url).subscribe(
      (response:any) => {
        this.loader = false;
        console.log("Designerlist",response);
        this.designerlist = response;
        // for (let index = 0; index < response.length; index++) {
        //   if(response[index].productCount > 0)
        //   {
        //     this.designerlist.push(response[index]);
        //   }
          
        // }
        // if(response.)
        console.log("Designerlist",this.designerlist);
        if(response.status === 200){
          this.toastrService.success(response.message);
        }else {
          // this.toastrService.error(response.message);
        }
      },
      errRes => {
        console.log("error handeller >>@@",errRes );
        if(errRes.error.message){
          this.errorMsg = errRes.error.message;
        }else if(errRes.error.messagee){
          this.errorMsg = errRes.error.messagee;
        } else {
          this.errorMsg = errRes.message
        }
        this.toastrService.error(this.errorMsg);
        this.loader = false;

      }
    );
  }
  // openfollowModal start
  openfollowModal(_identifier,followmodal,designer:any) {
    console.log("_identifier", _identifier,designer);
    // this.model = designer;
      this.model = {
        designerId:designer.designerId,
        userId:this.get_user_dtls.uid,
        isFollowing:true,
      }
    if(_identifier == 'follow')
    {
    }else if(_identifier == 'unfollow')
    {
      this.model.isFollowing=false;
      
    }
    this.designerFollowSubscribe = this.http.post(this.followapi_url,this.model).subscribe(
        (response:any) => {
          console.log("response",response);
          if(response.status === 200){
            this.toastrService.success(response.message);
            // this.modalService.dismissAll();
          }else {
          }
          this.getDesignerList();
        },
        errRes => {
          console.log("error handeller >>@@",errRes );
          if(errRes.error.message){
            this.errorMsg = errRes.error.message;
          }else if(errRes.error.messagee){
            this.errorMsg = errRes.error.messagee;
          } else {
            this.errorMsg = errRes.message
          }
          this.toastrService.error(this.errorMsg);
        }
      ); 
  }
  // openfollowModal end
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if (this.designerListSubscribe !== undefined) {
      this.designerListSubscribe.unsubscribe();
    }
    
  }
  // ----------- destroy unsubscription end ---------  
}
