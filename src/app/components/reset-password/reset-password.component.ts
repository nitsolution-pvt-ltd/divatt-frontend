import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  formloader: boolean = false;
  private onSubmitForgetPSWSubcribe: Subscription | undefined;
  link: any;
  linktime: any;
  errormsg: any;
  hide2:boolean = true;
  hide:boolean = true;
  modal:any = {};
  constructor(private http:HttpClient, private router:Router,
    private toastrService: ToastrService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.linktime = this.activatedRoute.snapshot.params['linktime'];
    this.link = this.activatedRoute.snapshot.params['link'];
  }
  onSubmitResetPSW(form:NgForm)
  {
    this.formloader = true; 
    this.onSubmitForgetPSWSubcribe =  this.http.post("auth/resetPassword/"+this.link+'/'+this.linktime,{'newPass':form.value.newPass}).subscribe(
      (res:any) =>{
      this.formloader = false; 
        this.toastrService.success(res.message);
        this.router.navigateByUrl("/login");
        },(error:any) =>{
          this.formloader = false;
          this.toastrService.error(error.error.message);
          // this.router.navigateByUrl("/login");
          // recall category list
      })
  }
  passwordvalid(new_password: any,conform_password: any)
  {
    console.log(new_password,conform_password);
    if (conform_password == undefined) {
      this.errormsg = false;
        
    }else if (new_password!=conform_password) {
        this.errormsg = "Password and confirm password  not match.";
        setTimeout(()=>{                           // <<<---using ()=> syntax
          // this.errormsg = "";
      }, 3000);
    }else  if (new_password==conform_password)
    {
      this.errormsg = false;
    }
    else
    {
      this.errormsg = false;
    }
    
  }
}
