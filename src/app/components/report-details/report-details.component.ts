import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {
  designerDetails: any = {};

  constructor(private modalService: NgbModal,private authService:LoginService,private activatedRoute: ActivatedRoute,private http:HttpClient,
    private toastrService: ToastrService,private commonUtils: CommonUtils,private router:Router, private datePipe: DatePipe) { }
  private getReportItemSubscribe: Subscription |undefined;

  accountId: any;
  reportDataLoading = false;
  reportDetails:any = [];
  designerReturn: any = [];
  serviceCharge: any;
  govtCharge: any;
  taxValue: any;
  orderDate: any;
  deliveryDate: any;
  ngOnInit(): void {
    this.accountId = this.activatedRoute.snapshot.params['accountId'];
    console.log("accountId.....",this.accountId);
    
    this.getReportDetails();
  }
  getReportDetails(){
    this.reportDataLoading = true;
    this.getReportItemSubscribe = this.http.get("account/view/"+this.accountId).subscribe(
      (res:any) => {
        this.reportDataLoading = false;
        console.log("Report Details Data....",res);
        this.reportDetails = res.order_details[0];
        this.designerDetails = res.designer_details;
        this.designerReturn = res.designer_return_amount[0];
        this.serviceCharge = res.service_charge;
        this.govtCharge = res.govt_charge[0];
        // this.taxValue = parseInt((( 100 * res?.order_details[0]?.mrp) / ( 100 + res?.order_details[0]?.hsn_rate)).toFixed(0));
        if(res?.order_details[0]?.sales_price != 0)
        {
          this.taxValue = res?.order_details[0]?.sales_price - res?.order_details[0]?.hsn_amount;

        }else{
          this.taxValue = res?.order_details[0]?.mrp - res?.order_details[0]?.hsn_amount;
        }
       console.log("this.reportDetails?.datetime",this.reportDetails?.datetime);
      //  this.addDate = this.datePipe.transform(this.reportDetails?.datetime, 'dd/MM/yyyy');
        this.orderDate = moment(this.reportDetails?.datetime, "DD-MM-YYYY HH:mm:ss").format('DD MMM YYYY');
        this.deliveryDate = moment(this.reportDetails?.delivery_datetime, "DD-MM-YYYY HH:mm:ss").format('DD MMM YYYY');
        
      },
      (error:any) =>{
        this.reportDataLoading = false;
      })
  }
  genaratePDF(order:any,identifier:any)
  {
    console.log('Data',order,identifier);
    
    if(identifier == 'orderinvoice')
    {
      let url = environment.apiUrl+"/userOrder/getOrderSummary/"+order
      window.open(url, "_blank");
    }else{
      let url = environment.apiUrl+"/account/getDesignerInvoice/"+this.designerReturn?.order_id+"/"+this.designerDetails?.designer_id
      window.open(url, "_blank");
    }
    
  }
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if(this.getReportItemSubscribe !== undefined){
      this.getReportItemSubscribe.unsubscribe();
    }
    
  }
  // ----------- destroy unsubscription end ---------
}
