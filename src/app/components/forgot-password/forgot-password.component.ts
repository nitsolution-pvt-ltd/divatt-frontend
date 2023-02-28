import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  hide = true;
  onSubmitForgetPSWSubcribe: any;
  formloader: boolean = false;
  modal:any={}
  constructor(private http:HttpClient,
    private toastrService: ToastrService,private router:Router,) { }

  ngOnInit(): void {
    
  }
  onSubmitForgetPSW(form:NgForm)
  {
    this.formloader = true; 
    this.onSubmitForgetPSWSubcribe =  this.http.get("auth/mailForgotPasswordLink/Designer/"+form.value.email).subscribe((res:any) =>{
      this.formloader = false; 
      console.log(res.message);
      
        this.toastrService.success(res.message);
        this.router.navigateByUrl('/login');
        },(error:any) =>{
          this.formloader = false;
          console.log("error",error);
          this.toastrService.error(error.error.message);
          
          // recall category list
      })
  }
}
