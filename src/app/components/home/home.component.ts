import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tab: any = 'live';
  show = false;
  active_class = false; 
  pageNo: any = 0;
  sortColumnName: string = '';
  sortOrderName: string = '';
  searchTerm: string = '';
  tableValueType: string = '';
  isListLoading: boolean  = false;
  productsList: any=[];
  private tableListSubscribe: Subscription | undefined;
  designerid: number | undefined ;
  loginDataSubscribe: any;
  get_user_dtls: any;
  sum: any;
  direction: string = '';
  private getProfileData: Subscription | undefined;
  designerprofiledata: any ={};
  private changeStatusSubscribe: Subscription | undefined;
  statusLoader: boolean = false;
  noProductFound: boolean = false;
  nomoreProductFound: boolean = false;
  limit:any = 11;
  allCounts:any= {};
  profilestatusLoader: boolean = false;
  private changeProfileStatusSubscribe: Subscription | undefined;
  private deleteProductSubscribe: Subscription | undefined;
  productId: any;
  sortName: string = 'productId';
  sortDateType:string = '';
  adminComments: any = [];
  productRes: any = [];
  constructor(private authService:LoginService,private modalService: NgbModal,private http:HttpClient,
    private toastrService: ToastrService,private commonUtils: CommonUtils,private router:Router) {  
    }
  ngOnInit(): void {
    this.tab = 'live'
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.designerid = this.get_user_dtls.uid;
        this.getDesignerProfiledata();
        this.getProfileData = this.http.get("designer/"+this.designerid).subscribe(
          (res:any) => {
            this.designerprofiledata = res;
            // if(res.isProfileCompleted == true || res.isProfileCompleted == true && res.profileStatus == 'COMPLETED' || res.isProfileCompleted == true && res.profileStatus == 'SUBMITTED' || res.isProfileCompleted == true && res.profileStatus == 'SAVED' || res.isDeleted == false)
            if(res.isProfileCompleted == true && res.profileStatus != 'REJECTED')
            {
              this.productsList = [];
              this.onListDate();
    
            }
            else{
              this.router.navigateByUrl('/profile-complete');
            }
            if(res.isDeleted)
            {
              this.authService.logout()
            }
            console.log("profiledata",this.designerprofiledata);
          },
          (error:any) =>{
          })
        this.commonUtils.onClicksigninCheck(res);
      }
    });
  }
  ngAfterViewInit() {
    this.tab = 'live';
    console.log("First call.....");
  }
  // sortBy start
  sortBy(sortname:any)
  {
    this.productsList = [];
    this.pageNo = 0;
    this.sortDateType = sortname;
    this.onListDate();
  }
  // sortBy end
  // on tab change
  onChangeTab(type:any,check: any) {
       console.log(check);
      this.productsList = [];
      this.pageNo = 0;
    if(type == 'dropdown')
    {
      this.tab = check.target.value;
    }else{
      this.tab = check;
    }
    if(this.tab == 'live')
    {
      this.getDesignerProfiledata();
    }
    this.onListDate();
  }
  // onListDate start
  // Searching start
  searchingData(e:any)
  {
    this.productsList = [];
    this.pageNo = 0;
    console.log(e.target.value);
    this.searchTerm = e.target.value;
    this.onListDate();
  }
  // Searching end
  onListDate()
  {
    this.isListLoading = true;
    
    var api = 'designerProducts/getDesignerProductByDesignerId/'+this.designerid+'?adminStatus='+this.tab+'&page='+this.pageNo+'&limit='+this.limit+'&sortName='+this.sortName+'&sortDateType='+this.sortDateType+'&sort=DESC&keyword='+this.searchTerm;
    // var api = "/designerProducts/productList";
    // var api = 'designerProduct/designerProductList/'+this.designerid+'?status='+this.tab+'&page='+ 0 +'&limit='+ 10 +'&sortName='+this.sortColumnName+'&sort='+this.sortOrderName+'&keyword='+this.searchTerm;
    this.tableListSubscribe = this.http.get(api).subscribe(
      (res:any) => {
        this.productRes = res.data;
        this.allCounts = {
          live:res.live,
          pending:res.pending,
          reject:res.reject,
          ls:res.ls,
          oos:res.oos,
        }
        for (let index = 0; index < res.data.length; index++) {
          
          if(this.productsList.length > 1)
          {
            if(this.productsList[index]?.productId != res.data[index]?.productId)
            {
              this.productsList.push(res.data[index])  
            }
          }else{
            this.productsList.push(res.data[index])  
          }
        }
        if(!this.productsList.length){ this.noProductFound = true; }
        else{ this.noProductFound = false; }
        
        if(this.productsList.length > 0 && res.data.length == 0)
        {
          this.nomoreProductFound = true;
        }
        else{
          this.nomoreProductFound = false;
        }
        this.isListLoading = false;
        console.log("this.productsList",this.productsList);
        
      },
      (errRes:any) => {
        this.toastrService.error(errRes.error.message);
        this.isListLoading = false;
      }
    );
  }
  // posts:any = ' '.repeat(100).split('').map((s, i) => i + 1)
  
  onScroll() {
    // const length = this.posts.length
    // const p = ' '.repeat(100).split('').map((s, i) => i + 1 + length)
    if(this.productRes.length)
    {
      this.pageNo = this.pageNo  + 1;
      this.onListDate();
    }
      this.pageNo = this.pageNo  + 1;
      this.onListDate();
      // This approach should be used to avoid creating another memory address to the array
      // while(p.length) this.posts.push(p.shift())    
  }
  // onListDate end
  delete_modal(content: any,productId:any) {
    this.productId = productId;
    this.modalService.open(content, { size: 'xs' });
  }
  count = 0;
  message_modal(content: any,comments:any){
    console.log("comments",comments);
    this.adminComments = [];
    for (let index = 0; index < comments.length; index++) {
      if(comments[index].Reason == "Rejected")
      {
        this.adminComments.push(comments[index]);
      }else
      {
        this.adminComments.splice(index,1);
      }
      
    }
    // this.adminComments = comments;
    this.modalService.open(content, { size: 'sm' });
  }

  active(){
    this.active_class = true;
  }
  clear(){
    this.active_class = false;
    this.searchTerm = '';
    this.pageNo = 0;
    this.productsList = [];
    this.onListDate();
  }
  // getDesignerProfiledata start
  getDesignerProfiledata()
  {
    
    this.getProfileData = this.http.get("designer/"+this.designerid).subscribe(
      (res:any) => {
        this.designerprofiledata = res;
        console.log("profiledata",this.designerprofiledata);
      },
      (error:any) =>{
      })
  }
  // getDesignerProfiledata end
  // activeDesigner start
  activeDesigner(status:any)
  {
    this.changeProfileStatusSubscribe =this.http.put('designer/designerCurrentStatus/'+status,'').subscribe(
      (res:any) => {
        this.profilestatusLoader = false;
        this.toastrService.success(res.message);
        this.getDesignerProfiledata();
      },(error:any)=>{
        this.profilestatusLoader = false;
        this.toastrService.error(error.error.message);
        this.getDesignerProfiledata();
      }); 
  }
  // activeDesigner end
  // statusChange product start
  statusChange(productid:any)
  {    
    this.productsList = [];
    this.statusLoader = true;
    this.pageNo = 0;
    this.changeStatusSubscribe =this.http.put('designerProducts/changeAdminStatus/'+productid,'').subscribe(
      (res:any) => {
        this.statusLoader = false;
        this.onListDate();
        this.getDesignerProfiledata();
      },(error:any)=>{
        this.statusLoader = false;
        this.onListDate();
        this.getDesignerProfiledata();
      });
  }
  // statusChange product end
  // deleteProduet start
  deleteProduet()
  {
    this.productsList = [];
    this.statusLoader = true;
    this.pageNo = 0;
    this.deleteProductSubscribe =this.http.put('designerProducts/delete/'+this.productId,'').subscribe(
      (res:any) => {
        this.toastrService.success(res.message);
        this.statusLoader = false;
        this.onListDate();
        this.modalService.dismissAll();
      },(error:any)=>{
        this.statusLoader = false;
        this.toastrService.error(error.error.message);
        this.onListDate();
      });
  }
  // deleteProduet end
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if(this.tableListSubscribe !== undefined){
      this.tableListSubscribe.unsubscribe();
    }
    if(this.getProfileData !== undefined){
      this.getProfileData.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------
}
