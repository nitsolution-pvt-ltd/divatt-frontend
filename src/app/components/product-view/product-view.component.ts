import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productId: any;
  afterDiscount:any;
  showAmountdtl = false;
  taxAmount:any = '';
  basicAmount:any = '';
  designCustomizationFeatures = false;
  productDataSubscribe: any;
  productDetail: any = {};
  private getProfileData: Subscription | undefined;
  designerid:number  | undefined;
  loginDataSubscribe: any;
  get_user_dtls: any;
  designerprofiledata: any = {};
  sizeactive: any;
  coloractive: any;
  showHSNcode = false;
  private getColorListSubscribe: Subscription | undefined;
  colourlist: any;
  discount: any;
  constructor( private activatedRoute: ActivatedRoute,private http:HttpClient,private router:Router,
    private authService: LoginService,private toastrService: ToastrService,private commonUtils: CommonUtils) { }
  
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.designerid = this.get_user_dtls.uid;
        this.getDesignerProfiledata();
        this.commonUtils.onClicksigninCheck(res);
      }
    });
  }

  // getProductdetails start
  getProductdetails()
  {
    this.productDataSubscribe = this.http.get('designerProducts/productList/'+this.productId).subscribe(
      (response:any) => {
        console.log("response",response);
        this.productDetail = response;
        var discountAmount:any,taxAmount:number,amount:number;
        amount = parseInt((( 100 * response?.mrp) / ( 100 + response?.deal?.taxAmount?.taxValue)).toFixed(0))
        this.basicAmount = parseInt((( 100 * response?.mrp) / ( 100 + response?.deal?.taxAmount?.taxValue)).toFixed(0))
        discountAmount = parseInt((( 100 *response?.deal?.salePrice) / ( 100 +response?.deal?.taxAmount?.taxValue)).toFixed(0))
        this.afterDiscount = parseInt((( 100 *response?.deal?.salePrice) / ( 100 +response?.deal?.taxAmount?.taxValue)).toFixed(0));
        this.discount = this.basicAmount - this.afterDiscount;
        if(response?.deal?.dealType != 'None')
        {
          if(response?.deal?.salePrice < discountAmount)
          {
            this.taxAmount = parseInt((discountAmount - response?.deal?.salePrice).toFixed(0))
          }
          else
          {
            this.taxAmount = parseInt((response?.deal?.salePrice - discountAmount).toFixed(0))
          }
        }
        else{
          this.taxAmount = (response?.mrp - amount);
        }
        this.getColorList();
      },
      errRes => {
        console.log("error handeller >>@@",errRes );
        this.router.navigateByUrl('/error');
      }
    );
  }
  // getProductdetails end
    //getColorList start 
    productColors:any = [];
    getColorList()
    {
      this.getColorListSubscribe = this.http.get("adminMData/coloreList").subscribe(
        (res:any) => {
          this.colourlist = res;
          this.productColors = [];
          for (let index = 0; index < this.colourlist.length; index++) {
            if(this.productDetail.colour == this.colourlist[index].colorName)
            {
              this.productColors.push(this.colourlist[index].colorValue)
            }
            
          }
          console.log("color list.....",this.productColors);

        },
        (error) =>{
          this.toastrService.error(error.message);
        })
    }
    //getColorList end
  // activeSize start
  activeSize(type:any,name:any)
  {
    if(type == 'size')
    {
      this.sizeactive = name;
    }
    else if(type == 'color')
    {
      this.coloractive = name;
    }
  }
  // activeSize end
   // getDesignerProfiledata start
   getDesignerProfiledata()
   {
     
     this.getProfileData = this.http.get("designer/"+this.designerid).subscribe(
       (res:any) => {
         this.designerprofiledata = res;
         this.http.get("designer/"+this.designerid).subscribe(
          (res:any) => {
          if(res.isProfileCompleted == true && res.profileStatus!= 'REJECTED')
            // if(res.isProfileCompleted == true && res.profileStatus == 'COMPLETED' || res.isProfileCompleted == true && res.profileStatus == 'SUBMITTED' || res.isProfileCompleted == true &&  res.profileStatus == 'SAVED')
            {
              this.getProductdetails();
            }
            else
            {
              this.router.navigateByUrl('/profile-complete');
            }
            if(res.isDeleted)
            {
              this.authService.logout()
            }
          },
          (error:any) =>{
          })
       },
       (error:any) =>{
       })
   }
   // getDesignerProfiledata end
   // ngOnDestroy start
  ngOnDestroy() {
    if(this.getProfileData !== undefined){
      this.getProfileData.unsubscribe();
    }
    if(this.getColorListSubscribe !== undefined){
      this.getColorListSubscribe.unsubscribe();
    }
    if(this.productDataSubscribe !== undefined){
      this.productDataSubscribe.unsubscribe();
    }
  }
}