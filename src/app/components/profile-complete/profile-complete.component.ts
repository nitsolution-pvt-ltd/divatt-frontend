import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile-complete',
  templateUrl: './profile-complete.component.html',
  styleUrls: ['./profile-complete.component.scss']
})
export class ProfileCompleteComponent implements OnInit {
  designerId: any;
  loginDataSubscribe: any;
  get_user_dtls: any;
  profileStatus: any;
  private getProfileData: Subscription | undefined;
  isProfileCompleted: any;

  constructor(private activatedRoute: ActivatedRoute,private authService:LoginService,private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.designerId = this.activatedRoute.snapshot.params['orderId'];
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('UserData', res);
      if(res != null || res != undefined){
        // this.get_user_dtls = res.logininfo;
        // console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.designerId = res.uid;
        console.log('UserData', res,this.designerId);

        // this.commonUtils.onClicksigninCheck(res);
      }
    });
      // getDesignerProfiledata start
  
  this.http.get("designer/"+this.designerId).subscribe(
      (res:any) => {
        this.profileStatus = res.profileStatus;
        this.isProfileCompleted = res.isProfileCompleted;
        // if(res.isProfileCompleted == true && res.profileStatus == 'COMPLETED' || res.isProfileCompleted == true && res.profileStatus == 'SUBMITTED' || res.isProfileCompleted == true &&  res.profileStatus == 'SAVED' || res.isDeleted == false)
        if(res.isProfileCompleted == true && res.profileStatus!= 'REJECTED')
        {
          this.router.navigateByUrl('/home').then(() => {
            window.location.reload();
          });;
        }
        if(res.isDeleted){
          this.authService.logout();
        }
        else{
          // this.router.navigateByUrl('/profile-complete');
        }
      },
      (error:any) =>{
      })
  // getDesignerProfiledata end
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
    }
    // ----------- destroy unsubscription end ---------
}
