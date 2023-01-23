import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  selectedYear: any = '';
  matRippleRadius:number = 20;
  matRippleColor = '';
  yearList:any = [];
  model:any = {};
  pageNo: any = 0;
  lemit:any = 11;
  allmonthList:any = [
    {id: 1, name:'January'},
    {id: 2, name:'February'},
    {id: 3, name:'March'},
    {id: 4, name:'April'},
    {id: 5, name:'May'},
    {id: 6, name:'June'},
    {id: 7, name:'July'},
    {id: 8, name:'August'},
    {id: 9, name:'September'},
    {id: 10, name:'October'},
    {id: 11, name:'November'},
    {id: 12, name:'December'}
  ];
  monthList:any = [];
  startYear:any =  '2022';
  endYear:any ='';
  settlement: any = '';
  selectedMonth: any = '';
  isListLoading: boolean = false;
  noProductFound: boolean = false;
  productsList: any = [];
  sortDateType: string = '';
  tableListSubscribe: any;
  allCounts:any =  {};
  nomoreProductFound: boolean = false;
  currentMonth: any;
  orderDetails: any = [];
  loginDataSubscribe: any;
  get_user_dtls: any;
  designerid: any;
  designerReturn: string = '';
  serviceCharge: string = '';
  govtCharge: string = '';
  ReturnStatus: string = '';
  order_status: string = '';
  genarateExcleFile: any;
  currentDateTime: string = '';
  accountRes: any = [];
constructor(private modalService: NgbModal,private authService:LoginService,private http:HttpClient,
    private toastrService: ToastrService,private commonUtils: CommonUtils,private router:Router) { }
  ngOnInit(): void {
    this.orderDetails = [];
    var count = 0;
    this.endYear = moment().format('YYYY');
    this.currentMonth = moment().format('MMMM');
    this.model.year = parseInt(moment().format('YYYY'));
    console.log("this.endYear.......",this.endYear);
    
    console.log("this.model.year.....",this.model.year);
    this.selectedYear = this.model.year;
    if(this.model.year == this.endYear)
        {
          for (let index = 0; index < 12; index++) {
            console.log(this.currentMonth,this.allmonthList[index].id);
            
            if(this.currentMonth == this.allmonthList[index].id)
            {
              this.mounthCount = index;
              break;
            } else{
              // this.monthList.push(this.allmonthList[index]);
              this.mounthCount = index;
            }         
          }
          for (let index = 0; index < this.mounthCount + 1; index++) {
            this.monthList.push(this.allmonthList[index]);            
          }
        }else{
          this.monthList = this.allmonthList;
        }
    console.log("moment",this.endYear,this.currentMonth,this.model.year,moment().format('YYYY')); 
    if(this.endYear > this.startYear || this.endYear == this.startYear)
    {
      count = parseInt(this.endYear) - parseInt(this.startYear) + 1;
      for (let index = 0; index < count; index++) {
        console.log("moment",count);  
        this.yearList.push(parseInt(this.startYear) + index);

      }
    }else{
      this.yearList.push(this.startYear);
      // for (let index = 0; index < 100; index++) {
      //   console.log("moment",count);  
      //   this.yearList.push(parseInt(this.startYear) + index);

      // }
    }
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.designerid = this.get_user_dtls.uid;
        this.onListDate();
      }
    });
    // this.onListDate();
  }
  mounthCount:any
  selectFiltter(event:any,identifier:any)
  {
    this.orderDetails = [];
    this.pageNo = 0;
      console.log("selectFiltter......",event?.value,identifier);
      if(identifier == 'year')
      {
        this.monthList = [];
        this.model.month = null;

        this.selectedYear = event?.value;
        console.log(this.selectedYear,this.endYear);
        
        if(this.selectedYear == this.endYear)
        {
          for (let index = 0; index < 12; index++) {
            console.log(this.currentMonth,this.allmonthList[index].id);
            
            if(this.currentMonth == this.allmonthList[index].id)
            {
              this.mounthCount = index;
              break;
            } else{
              // this.monthList.push(this.allmonthList[index]);
              this.mounthCount = index;
            }         
          }
          for (let index = 0; index < this.mounthCount + 1; index++) {
            this.monthList.push(this.allmonthList[index]);            
          }
        }else{
          this.monthList = this.allmonthList;
        }
      }else if(identifier == 'month')
      {
        if (event?.value == undefined) {
          this.selectedMonth = '';
          this.settlement = '';
          this.model.settlement = '';
        }else {
          this.selectedMonth = event?.value;
        }
        
      }else if(identifier == 'settlement')
      {
        if (event?.value == undefined) {
          this.settlement = '';
        }else {
          this.settlement = event?.value;
        }
      }
      this.orderDetails = [];
      this.onListDate();
  }
  sortBy(sortType:any)
  {
    this.orderDetails = [];
    this.sortDateType = sortType;
    this.pageNo = 0;
    this.onListDate()
  }
  onListDate()
  {
    this.isListLoading = true;
    var api = 'designerAccount/list?year='+this.selectedYear+'&month='+this.selectedMonth+'&settlement='+this.settlement+'&sortName=productId&sortDateType='+this.sortDateType+'&page='+this.pageNo+'&limit='+this.lemit+'&sortBy='+this.designerid;
    this.tableListSubscribe = this.http.get(api).subscribe(
      (res:any) => {
        this.accountRes = res.data;
        this.allCounts = {
          basicAmount:res.basicAmount,
          designerGstAmount:res.designerGstAmount,
          govtGstAmount:res.govtGstAmount,
          gstAmount:res.gstAmount,
          payableAmount:res.payableAmount,
          pendingAmount:res.pendingAmount,
          totalAmount:res.totalAmount,
          totalServiceFee:res.totalServiceFee,
          totalTcs:res.totalTcs,
          servicGst:res.servicGst,
          giftWrapAmount:res.giftWrapAmount
        }
        
        for (let i = 0; i < res.data.length; i++) {
          for (let o = 0; o < res.data[i].order_details.length; o++) {
          console.log("res.data[i].order_details[o].datetime",res.data[i].order_details[o].datetime);
        
          let orderDetails = res.data[i].order_details;
          let designer_return_amount =  res.data[i].designer_return_amount;
          orderDetails[o].net_payable_designer = res.data[i].designer_return_amount[o]?.net_payable_designer;
          orderDetails[o].total_amount = res.data[i].service_charge?.total_amount;
          orderDetails[o].orderDate = moment(res.data[i].order_details[o].datetime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
          orderDetails[o].deliveryDate = moment(res.data[i].designer_return_amount[o].datetime, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
          orderDetails[o].account_id = res.data[i].id;
          // designer_return_amount[o].paymentdatetime = res.data[i].designer_return_amount[o].datetime;
          console.log("orderDetails >>>>>>",this.orderDetails);
          console.log("res.data[i].service_charge.total_amount >>>>>>",res.data[i].service_charge.total_amount);
          if(res.data[i].order_details[o].order_status == 'DELIVERED')
          this.orderDetails.push(orderDetails[o]);
          }
        }

        console.log('completed data',this.orderDetails);

        if(!this.orderDetails.length){ 
          this.noProductFound = true; 
        }else{
          this.noProductFound = false; 
        }
        if(this.orderDetails.length > 0){
          this.nomoreProductFound = true;
        }else{
          this.nomoreProductFound = false;
        }
        this.isListLoading = false;
      },
      (errRes:any) => {
        this.toastrService.error(errRes.error.message);
        this.isListLoading = false;
      }
    );
  }
  genarateExcle()
  {
    let currentDate = Date.now()
    this.currentDateTime = moment(currentDate).format('YYYY-MM-DD hh:mm:ss');
    var url = '/account/excelReportDesigner?designerReturn='+this.designerReturn+'&serviceCharge='+this.serviceCharge+'&govtCharge='+this.govtCharge+'&order_status='+this.order_status+'&ReturnStatus='+this.ReturnStatus+'&settlement='+this.settlement+'&year='+this.selectedYear+'&month='+this.selectedMonth;
    // window.open(url, "_blank");
    // console.log("url",url);
    this.genarateExcleFile = this.http.get(url, { responseType: 'blob' }).subscribe(
      (res:any) => {
        console.log('res',res);
        // this.excleUrl = res;
        const blob = new File([res], "Designer-payments-report-" + this.currentDateTime + '.xlsx', { type: 'application/octet-stream' });
        FileSaver.saveAs(blob)
      },(error:any) => {
        this.toastrService.error('Sorry! Something went wrong.')
      },)
  }
  // posts:any = ' '.repeat(100).split('').map((s, i) => i + 1)
  
  onScroll() {
    // const length = this.posts.length
    // const p = ' '.repeat(100).split('').map((s, i) => i + 1 + length)
    if(this.accountRes.length)
    {
      this.pageNo = this.pageNo  + 1;
      this.onListDate();
    }
      // This approach should be used to avoid creating another memory address to the array
      // while(p.length) this.posts.push(p.shift())    
  }
  pdf_modal(content: any) {
    this.modalService.open(content, { size: 'md' });
  }
  reportDetails(id: any){
    console.log("id.......",id);
    
    this.router.navigateByUrl('/report-details/'+id);
  }
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if(this.tableListSubscribe !== undefined){
      this.tableListSubscribe.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------
}
