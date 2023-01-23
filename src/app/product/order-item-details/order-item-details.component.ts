import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';
import { OrderService } from 'src/app/services/order.service';

import * as html2pdf from 'html2pdf.js'
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-item-details',
  templateUrl: './order-item-details.component.html',
  styleUrls: ['./order-item-details.component.css']
})
export class OrderItemDetailsComponent implements OnInit {
  main_url = environment.apiUrl;
  file_url = environment.fileUrl;
  othersOrder = false;
  returnFromAdmin = false;
  designerCancel = false;
  returnRequest = false;
  userCancelled = false;
  parms_order_id: any;
  parms_designer_id: any;
  parms_product_id: any;
  logoutDataSubscribe: any;
  get_user_dtls: any;
  api_url: string;
  private getOrderDataSubscribe: Subscription;
  public orderDetails: any = {};
  private getInvoiceDataSubscribe: Subscription;
  private getTrackingDetailsDataSubscribe: Subscription;
  invoiceId: any;
  loader: boolean;
  orderItemStatus: any;
  giftWrapAmount: number = 0;
  returnFromAdmindate: string;

  constructor(private activatedRoute: ActivatedRoute,private orderService: OrderService,
    private authService:LoginService,private toastrService:ToastrService,
    private http:HttpClient) { }

  ngOnInit() {
    this.commonFunction();
  }
  commonFunction()
  {
    this.parms_order_id = this.activatedRoute.snapshot.paramMap.get('orderid');
    this.parms_designer_id = this.activatedRoute.snapshot.paramMap.get('designerid');
    this.parms_product_id = this.activatedRoute.snapshot.paramMap.get('productid');
    console.log(this.parms_order_id, this.parms_designer_id, this.parms_product_id);
    

    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // this.parms_order_id = this.orderService.getOrderId();    
        console.log("ORDER ID",this.parms_order_id);
        this.api_url = 'userOrder/getOrder/'+ this.parms_order_id;
        this.getorderDetails();
        // this.getInvoice()
        // this.getTrackingDetails();
      }
    });

  }
  path:any;
    // orderDetails start
    orderdate;
    invoiceLink;
    shippingDate
    getorderDetails()
    {
      this.loader = true;
      this.getOrderDataSubscribe = this.http.get(this.api_url).subscribe(
        (response:any) => {
          this.orderDetails = response;
          console.log("ABCD",this.orderDetails.OrderSKUDetails.length);
          if(this.orderDetails.OrderSKUDetails.length > 1)
          {
            this.othersOrder = true;
          }
          for (let index = 0; index < this.orderDetails.OrderSKUDetails.length; index++) {
           console.log("ABCD",this.orderDetails.OrderSKUDetails.length);
           if(this.orderDetails.OrderSKUDetails[index].giftWrapAmount != 0 && this.orderDetails.OrderSKUDetails[index].giftWrapAmount != null)
           {
              this.giftWrapAmount = this.giftWrapAmount + this.orderDetails.OrderSKUDetails[index].giftWrapAmount;
           }
           
           if(this.orderDetails.OrderSKUDetails[index].productId == this.parms_product_id)
           {
              this.trackingDetails = this.orderDetails.OrderSKUDetails[index].orderStatusDetails;
              
              if(this.orderDetails.OrderSKUDetails[index].invoiceId != null)
              {
                this.invoiceId = this.orderDetails.OrderSKUDetails[index].invoiceId;
              }

              console.log('invoiceId',this.invoiceId,this.orderDetails.OrderSKUDetails[index].invoiceId);

              if(this.trackingDetails)
              {
                if(this.trackingDetails.cancelFromUser)
                {
                  if(this.trackingDetails.cancelFromUser.dateTime)
                  {
                    this.trackingDetails.cancelFromUser.dateTime =  moment(this.trackingDetails.cancelFromUser.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY')
                  }
                }
                if(this.trackingDetails.returnFromUser)
                {
                  if(this.trackingDetails.returnFromUser.dateTime)
                  {
                    this.trackingDetails.returnFromUser.dateTime =  moment(this.trackingDetails.returnFromUser.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY')
                  }
                }
                if(this.trackingDetails.returnFromAdmin)
                {
                  if(this.trackingDetails.returnFromAdmin.dateTime)
                  {
                    // this.returnFromAdmindate =  moment(this.trackingDetails?.returnFromAdmin?.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY');
                    this.trackingDetails.returnFromAdmin.dateTime =  moment(this.trackingDetails.returnFromAdmin.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY')
                  }
                }
                if(this.trackingDetails.cancelOrderDetails)
                {
                  if(this.trackingDetails.cancelOrderDetails.cancelationTime)
                  {
                    this.trackingDetails.cancelOrderDetails.cancelationTime =  moment(this.trackingDetails.cancelOrderDetails.cancelationTime,'DD/MM/YYYY hh:mm:ss').format('DD MMM YYYY')
                  }
                }
              }
              this.orderItemStatus = this.orderDetails.OrderSKUDetails[index].orderItemStatus;
              if(!this.orderDetails.OrderSKUDetails[index].orderStatusDetails)
              {
                  let shippingDate = this.orderDetails.OrderSKUDetails[index].shippingDate.split(" ");
                  this.shippingDate = shippingDate[0];
              }else{
                if(this.orderDetails.OrderSKUDetails[index].orderStatusDetails.deliveryDetails)
                {
                    let shippingDate = this.orderDetails.OrderSKUDetails[index].orderStatusDetails.deliveryDetails.deliveredDate.split(" ");
                    this.shippingDate = shippingDate[0];
                }
                else{
                  let shippingDate = this.orderDetails.OrderSKUDetails[index].shippingDate.split(" ");
                  this.shippingDate = shippingDate[0];
                }
              }
             this.orderDetails.orderDate =  moment(this.orderDetails.orderDate,'DD/MM/YYYY hh:mm:ss').format('DD MMM YYYY');
              
              // this.shippingDate = moment(this.orderDetails.OrderSKUDetails[index].shippingDate)
           }
          }
          console.log("this.trackingDetails",this.trackingDetails);
          
          this.loader = false;
          this.invoiceLink = this.main_url+'/userOrder/getOrderSummary/'+this.parms_order_id;
          console.log('invoiceLink',this.invoiceLink);
          
          this.path=response;
         this.orderdate =  moment(response.orderDate).format('YYYY-MM-DD');         
          if(response.status === 200){
            this.toastrService.success(response.message);
            
          }else {
         }
        },
        errRes => {
          this.loader = false;
          console.log("error handeller >>@@",errRes );
         
          this.toastrService.error(errRes.error.message);
        }
      );
    }
    // orderDetails end

    //  Get tracking details start
    trackingDetails:any ={};
    trackingStatus;
    getTrackingDetails()
    {
      this.parms_order_id, this.parms_designer_id, this.parms_product_id
      this.getTrackingDetailsDataSubscribe = this.http.get('userOrder/getTracking/'+this.parms_order_id+'?userId='+this.get_user_dtls.uid+'&designerId='+ this.parms_designer_id).subscribe(
        (response:any) => {
          
          console.log("getTrackingDetails",response);
          this.trackingDetails = response.data;
          console.log('this.trackingDetails', this.trackingDetails);
          
          this.trackingStatus = response.data[0].deliveryStatus;
          console.log('trackingStatus', this.trackingStatus);
          
        },
        errRes => {
          console.log("error handeller >>@@",errRes );
          
          this.toastrService.error(errRes.error.message);
        }
      );
    }
    //  Get tracking details end

    // getInvoice start
    
    getInvoice()
    {
      console.log("getInvoice()",this.orderDetails);
      
      this.getInvoiceDataSubscribe = this.http.get('userOrder/getOrderByInvoiceId/'+this.orderDetails.invoiceId).subscribe(
        (response:any) => {
          
          console.log("orderDetails",response);
        },
        errRes => {
          console.log("error handeller >>@@",errRes );
          
          this.toastrService.error(errRes.error.message);
        }
      );
    }
    // getInvoice end
    // async  getBase64ImageFromUrl(imageUrl) {
    //   var res = await fetch(imageUrl);
    //   var blob = await res.blob();
    
    //   return new Promise((resolve, reject) => {
    //     var reader  = new FileReader();
    //     reader.addEventListener("load", function () {
    //         resolve(reader.result);
    //     }, false);
    
    //     reader.onerror = () => {
    //       return reject(this);
    //     };
    //     reader.readAsDataURL(blob);
    //   })
    // }
    // /* PdF genarate start */
    onExportClick(){
      const options = {
        pagespilt: true,
        filename: 'order.pdf',
        image : {type: 'jpg', quality: 0.99},
        html2canvas: {
          scale: 2,
          letterRendering: true,
          useCORS: true,
        },
        jsPDF: {orientation: 'portrait', unit: 'in', format: 'A4',}
      };

      const content: Element = document.getElementById('element-to-export');
      html2pdf()
        .from(content)
        .set(options)
        .save();
    }
    /* PdF genarate end */
    ngOnDestroy() {
      if (this.getOrderDataSubscribe !== undefined) {
        this.getOrderDataSubscribe.unsubscribe();
      }
      if (this.getInvoiceDataSubscribe !== undefined) {
        this.getInvoiceDataSubscribe.unsubscribe();
      }
      if (this.getTrackingDetailsDataSubscribe !== undefined) {
        this.getTrackingDetailsDataSubscribe.unsubscribe();
      }
    }
}
