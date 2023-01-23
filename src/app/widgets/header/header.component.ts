import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  designerid: any;
  userName:string = '';
  modal:any ={};
  disabled: boolean = true;
  hide3:boolean = true;
  hide2:boolean = true;
  hide:boolean = true;
  ChangePSWFormLoading:boolean = false;
  loginDataSubscribe: any;
  get_user_dtls: any;
  errormsg: any = '';
  onSubmitForgetPSWSubcribe: Subscription | undefined;
  formloader: boolean = false;
  ordercount = 0;
  cartDataSubscribe: Subscription | undefined;
  shoppingCartItems: any;

  constructor(
    private commonUtils: CommonUtils,
    private router: Router, private toastrService: ToastrService,
    private authService: LoginService,private http:HttpClient,private modalService:NgbModal,private orderService:OrderService
  ) { }
  openleftnav: boolean = false;
  ngOnInit() {
    console.log("this.ordercount",this.ordercount);
    
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.get_user_dtls = res;
        this.designerid = this.get_user_dtls.uid;
        this.http.get("designer/"+res.uid).subscribe(
          (res:any) => {
            this.userName = res?.designerProfile?.email;
            // if(res.isProfileCompleted == true  && res.profileStatus == 'COMPLETED' || res.isProfileCompleted == true && res.profileStatus == 'SUBMITTED' || res.isProfileCompleted == true && res.profileStatus == 'SAVED' || res.isDeleted == false)
        if(res.isProfileCompleted == true && res.profileStatus!= 'REJECTED')
            
            {
              this.disabled = false;
              // this.ordercount =  this.orderService.getOrderList();
              this.http.get('userOrder/list/'+this.designerid+'?orderItemStatus=Orders'+'&page=1'+'&limit=12'+'&sortName=productId&sortDateType=New'+'&keyword=').subscribe(
                (res:any) => {
                  this.ordercount = res.New;
                  console.log('res!!!!!!!', res);
                  
                },
                (errRes:any) => {
                  this.toastrService.error(errRes.error.message);
                }
              );
            }
            else
            {
              this.disabled = true;
            }
            if(res.isDeleted)
            {
              this.authService.logout()
            }
          },
          (error:any) =>{
            this.toastrService.success(error.error.message);

          })
      }
    });
    this.cartDataSubscribe = this.commonUtils.onChangeCartList.subscribe((res:any) => {
      console.log(' =========== Cart data  >>>>>>>>>>>', res);
      if(this.get_user_dtls) {
        this.ordercount = res;
      }
      
    });
  }
 
  clickUrl(url:any){
    this.router.navigate([url]);
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
  openNav(){
    this.openleftnav = !this.openleftnav;
  }
  closeNav(){
    
  }
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
  changePsw_modal(content: any){
    this.modalService.open(content, { size: 'sm' });
  }
  logOutUser(){
    this.authService.logout();
  }
}
