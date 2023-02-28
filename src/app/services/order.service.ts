import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './auth/auth.service';
import { CommonUtils } from './common-utils/common-utils';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  designerid: any;
  tableListSubscribe: any;
  allCounts:any =  { };
  toastrService: any;
  loginDataSubscribe: any;

  constructor(private authService:LoginService,private http:HttpClient,private CommonUtils:CommonUtils) { 
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.designerid = res.uid;
        // user details set
        // this.getOrderList();
        // this.designerid = this.get_user_dtls.uid;
       
      }
    });
    this.tableListSubscribe = this.http.get('userOrder/list/'+this.designerid+'?orderItemStatus=Orders'+'&page=1'+'&limit=12'+'&sortName=productId&sortDateType=New'+'&keyword=').subscribe(
      (res:any) => {
        this.allCounts = res;
      },
      (errRes:any) => {
        this.toastrService.error(errRes.error.message);
      }
    );
  }
  orderList()
  {
    
  }
  getOrderList() : any
  {
    var allCount
    this.tableListSubscribe = this.http.get('userOrder/list/'+this.designerid+'?orderItemStatus=Orders'+'&page=1'+'&limit=12'+'&sortName=productId&sortDateType=New'+'&keyword=').subscribe(
      (res:any) => {
        allCount = res;
        console.log(res);
    return allCount;
        
      },
      (errRes:any) => {
        this.toastrService.error(errRes.error.message);
      }
    );
    console.log("allCount",allCount);
    
    return allCount;
    
  }
}
