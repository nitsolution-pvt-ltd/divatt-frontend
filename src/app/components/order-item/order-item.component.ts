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
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  private getOrderItemData: Subscription | undefined;
  orderItem: any = {};
  orderId: any;
  invoiceurl: string = '';
  productId: any;
  orderView: any;
  private statusChangeSubscribe: Subscription = new Subscription;
  isListLoading: boolean = false;
  designerId: any;
  orderItemStatus: string = '';
  get_user_dtls: any;
  loginDataSubscribe: any;
  extraSpeacfetion: any = {};
  colour: string = '';
  private getColorListSubscribe: Subscription |undefined;
  private tableListSubscribe: Subscription | undefined;
  maxDate: any;
  designerData: any = {};
  GenarateInvoiceSubscribe: Subscription | undefined;
  dateRange: any;
  cancelMessages: any = {};
  cancelmessageTitle: string = '';
  shippingDate: any;
  filter_date: string = '';
  currentDate: string = '';
  currentDateTime: string = '';
  private GenarateAccountDataSubscribe: Subscription | undefined;
  mesorementData: any = {};
  mindateRange: any;
  paymentData: any;
  returnFromAdmindate: string = '';
  constructor(private modalService: NgbModal,private authService:LoginService,private activatedRoute: ActivatedRoute,private http:HttpClient,
    private toastrService: ToastrService,private commonUtils: CommonUtils,private router:Router) { }
  
  packed_done = false;
  shipped_done = false;
  delivered_done = false;
  orders_done = false;
  model: any = {};
  progressbar_1: boolean = false;
  cancellation: boolean = false;
  orderStatus: any;
  ngOnInit(): void {
    const date = new Date();
    this.filter_date =  moment(date.setDate(date.getDate() + 7)).format('YYYY-MM-DD')
    console.log("date",date.setDate(date.getDate() + 7),date.getDate() + 7,this.filter_date);

    let currentDate = Date.now()
    this.currentDate = moment(currentDate).format('YYYY/MM/DD');
    this.currentDateTime = moment(currentDate).format('YYYY-MM-DD hh:mm:ss');
    this.model.packedCovered = false;
    this.model.packingVideo = false;
    this.model.withDesignCustomization = false;
    this.model.withCustomization = false;
    this.orderId = this.activatedRoute.snapshot.params['orderId'];
    this.productId = this.activatedRoute.snapshot.params['productId'];
    console.log("productId....",this.productId);
    this.loginDataSubscribe = this.authService.globalparamsData.subscribe((res:any) => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.designerId = this.get_user_dtls.uid;
        this.http.get("designer/"+this.designerId).subscribe(
          (res:any) => {
            this.designerData = res;
            console.log('this.designerData',this.designerData);
            
        if(res.isProfileCompleted == true && res.profileStatus!= 'REJECTED')
            // if(res.isProfileCompleted == true && res.profileStatus == 'COMPLETED' || res.isProfileCompleted == true && res.profileStatus == 'SUBMITTED' || res.isProfileCompleted == true &&  res.profileStatus == 'SAVED')
            {
    
            }
            else{
              this.router.navigateByUrl('/profile-complete');
            }
            if(res.isDeleted)
            {
              this.authService.logout()
            }
            // var date = new Date();
            
            
          },
          (error:any) =>{
          })
        this.commonUtils.onClicksigninCheck(res);
      }
    });
   
    this.invoiceurl = environment.apiUrl+"/"+"userOrder/getOrderSummary/";
    this.getOrderItemdetailsdata();
  }
  
  
  orders_modal(content: any){
    this.modalService.open(content, { size: 'sm' });
    console.log("orderView",this.orderView,this.orderItem);
    
  }
  message_modal(content: any,data:any){
    this.extraSpeacfetion = data;
    this.modalService.open(content, { size: 'md' });
  }
  // all comments modal
  orders_Cancel(content: any,data:any,identifier:any){
    console.log(data);
    
    if(identifier == 'requestCancel')
    {
      this.cancelmessageTitle = 'Reason of request for cancelation';
      this.cancelMessages = {
        message:data?.cancelOrderDetails?.cancelComment,
        date:moment(data?.cancelOrderDetails?.cancelationTime,'DD/MM/YYYY hh:mm:ss').format('DD MMM YYYY')
      };
    }else if(identifier == 'requestResult')
    {
      this.cancelmessageTitle = 'Admin reply for cancelation request';
      if(data?.cancelRequestDetails?.adminCancellationComment)
      {
        this.cancelMessages = {
          message: data?.cancelRequestDetails?.adminCancellationComment,
          date:  moment(data?.cancelRequestDetails?.cancellationTime,'DD/MM/YYYY hh:mm:ss').format('DD MMM YYYY'),
        };
      }else{
        this.cancelMessages = {
          message: data?.cancelRequestDetails?.adminRejectionComment,
          date: moment(data?.cancelRequestDetails?.rejectionTime,'DD/MM/YYYY hh:mm:ss').format('DD MMM YYYY'),
        };
      }
      
    }else if(identifier == 'returnRequest')
    {
      this.cancelmessageTitle = 'Return request';
      if(data?.cancelRequestDetails?.adminCancellationComment)
      {
        this.cancelMessages = {
          message: data?.cancelRequestDetails?.adminCancellationComment,
          date: data?.cancelRequestDetails?.cancellationTime
        };
      }else{
        this.cancelMessages = {
          message: data?.cancelRequestDetails?.adminRejectionComment,
          date: data?.cancelRequestDetails?.rejectionTime
        };
      }
      
    }else if(identifier == 'returnRefund')
    {
      this.cancelmessageTitle = 'Return refund comment';
      if(data?.cancelRequestDetails?.adminCancellationComment)
      {
        this.cancelMessages = {
          message: data?.cancelRequestDetails?.adminCancellationComment,
          date: moment(data?.cancelRequestDetails?.dateTime,'DD/MM/YYYY hh:mm:ss').format('DD MMM YYYY'),
          
        };
      }
    }else if(identifier == 'cancelFromUser')
    {
      this.cancelmessageTitle = 'Cancel from user';
      if(data?.cancelFromUser)
      {
        this.cancelMessages = {
          message: data?.cancelFromUser?.comment,
          reason: data?.cancelFromUser?.reason,
          date: moment(data?.cancelFromUser?.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY'),
        };
      }
      
    }else if(identifier == 'returnFromUser') {
      this.cancelmessageTitle = 'Return request from user';
      if(data?.returnFromUser)
      {
        this.cancelMessages = {
          message: data?.returnFromUser?.comment,
          reason: data?.returnFromUser?.reason,
          date:  moment(data?.returnFromUser?.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY'),
        };
      }
      
    }else if(identifier == 'returnFromAdmin') {
      this.cancelmessageTitle = 'Return approve by admin';
      if(data?.returnFromAdmin)
      {
        this.cancelMessages = {
          message: data?.returnFromAdmin?.comment,
          reason: data?.returnFromAdmin?.reason,
          date: moment(data?.returnFromAdmin?.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY'),
        };
      }
      
    }
    console.log(data,this.cancelMessages);

    this.modalService.open(content, { size: 'md' });
  }
  // getOrderItemdata start
  getOrderItemdetailsdata()
  {
    
    this.getOrderItemData = this.http.get("userOrder/getOrder/"+this.orderId).subscribe(
      (res:any) => {
        this.orderItem = res;
        console.log("Order Item....",this.orderItem);
        
        
        this.mindateRange = moment(this.orderItem.orderDate , 'DD/MM/YYYY hh:mm:ss').format('YYYY-MM-DD');
        let currentDate2, currentDate = Date.now()
        currentDate2 = moment(currentDate).format('YYYY-MM-DD');
        this.model.date = currentDate2;
        this.model.deliveredDate = currentDate2;
        this.orderItem.orderDate = moment(this.orderItem.orderDate , 'DD/MM/YYYY hh:mm:ss').format('DD MMM YYYY');
        for (let i = 0; i < this.orderItem.OrderSKUDetails.length; i++) {
            // console.log("product Id....",this.orderItem.OrderSKUDetails[i].productId);
            
            if (this.productId == this.orderItem.OrderSKUDetails[i].productId) {
              this.orderView = this.orderItem.OrderSKUDetails[i];
              this.paymentData = this.orderItem?.paymentData;
              // if(this.orderView?.orderStatusDetails?.deliveryDetails?.deliveredDate)
              // { 
              //   this.orderView.orderStatusDetails.deliveryDetails.deliveredDate = moment(this.orderView?.orderStatusDetails?.deliveryDetails?.deliveredDate , 'DD/MM/YYYY').format('DD/MM/YYYY');
              // }
              this.returnFromAdmindate =  moment(this.orderView?.orderStatusDetails?.returnFromAdmin?.dateTime,'YYYY/MM/DD hh:mm:ss').format('DD MMM YYYY');
              let shippingDate = this.orderItem?.OrderSKUDetails[i]?.shippingDate.split(" ");
              this.shippingDate = shippingDate[0];
              var dateArray:any = [],day:any=[],month:any=[],year:any=[],final:any;
              dateArray = shippingDate[0];
              for (let index = 0; index < dateArray.length; index++) 
              {
              if(index == 0 || index == 1)
                {
                  day.push(dateArray[index]);
                }else if(index == 3 || index == 4)
                {
                  month.push(dateArray[index]);
                }else if(index == 6 || index == 7 || index == 8 || index == 9)
                {
                  year.push(dateArray[index]);
                }
              }
              year = year.toString();
              year = year.replaceAll(',', '');
              month = month.toString();
              month = month.replaceAll(',', '');
              day = day.toString();
              day = day.replaceAll(',', ''); 
              console.log('dateRange',day,month,year,final);
              // this.dateRange = year.toString()+'-'+month+'-'+day;
              this.dateRange =  moment(new Date()).format('YYYY-MM-DD');

            }          
            console.log('dateRange',day,month,year,final);
        }
       this.getColorList();
        
        console.log("order View.....",this.orderView,this.maxDate,this.dateRange);
        
      },
      (error:any) =>{
      })
      var api = 'userOrder/list/'+this.designerId+'?orderItemStatus=New'+'&page=1'+'&limit=12'+'&sortName=productId&sortDateType=new'+'&keyword=';
      this.tableListSubscribe = this.http.get(api).subscribe(
        (res:any) => {
          this.commonUtils.getOrdersDataService(res.New);
        },(error)=>{});
  }
  // getDesignerProfiledata end
  ordersSubmit(form: NgForm, identifier: any){
    console.log("orders form...", form.value);
    this.orderItemStatus = identifier;
    var body:any = {};
    if(identifier == 'Orders')
    {
      body = {OrdersDTO:{
        withCustomization:form.value.withCustomization,
        withDesignCustomization:form.value.withDesignCustomization,
      }}
     
    }else if(identifier == 'Packed')
    {
      body = {
        PackedDTO:{
          packedCovered:form.value.packedCovered,
          packingVideo:form.value.packingVideo,
        }
        
      }
    }else if(identifier == 'Shipped')
    {
      body = {
        ShippedDTO:{
          courierName:form.value.courierName,
          awbNumber:form.value.awbNumber
        }
      }
    }else if(identifier == 'Delivered')
    {
      var total_amount = 0,total_amount_received = 0,total_tax_amount = 0,
      total_tax = 0,fee:any=0,igst:any=0,cgst:any=0,sgst:any=0,data:any,accountData:any = {},
      invoiceId: any,hsn_amount:any = 0,tcs:any = 0,basic_amount:any = 0,hsn_cgst:any = 0,hsn_igst:any = 0,hsn_rate:any = 0,hsn_sgst:any = 0,net_payable_designer= 0;
    
    if(this.orderView.hsnData && this.orderView.salesPrice !=0)
    {
      console.log("SALEPRICE");
      hsn_rate =  this.orderView.hsnData?.cgst + this.orderView.hsnData?.sgst + this.orderView.hsnData?.igst;
      basic_amount =  parseInt((( 100 * this.orderView?.mrp) / ( 100 + hsn_rate)).toFixed(0))
      tcs = parseFloat(((basic_amount * 1) / 100).toFixed(2))
      total_amount =  parseFloat((((this.orderView.salesPrice  * 12) / 100) + ((((this.orderView.salesPrice  * 12) / 100 ) * 0.18) + ((this.orderView.mrp * 1) / 100))).toFixed(2));
      total_tax = parseFloat(((basic_amount  * 12) / 100).toFixed(2));
      fee = parseFloat(((basic_amount  * 12) / 100).toFixed(2));
      igst = parseFloat((((basic_amount  * 12) / 100 ) * 0.18).toFixed(2));
      cgst = parseFloat((((basic_amount  * 12) / 100 ) * 0.09).toFixed(2));
      sgst = parseFloat((((basic_amount  * 12) / 100 ) * 0.09).toFixed(2));
      total_amount_received = this.orderView.salesPrice;
      net_payable_designer =  this.orderView.salesPrice - (tcs + igst + fee)
      total_tax_amount = fee + igst + tcs;
    }else{
      console.log();
      console.log("MRP");
      
      hsn_rate =  this.orderView.hsnData?.cgst + this.orderView.hsnData?.sgst + this.orderView.hsnData?.igst;
      basic_amount =  parseInt((( 100 * this.orderView?.mrp) / ( 100 + hsn_rate)).toFixed(0))
      tcs = parseFloat(((basic_amount * 1) / 100).toFixed(2))
      total_amount =  parseFloat((((this.orderView.mrp  * 12) / 100) + ((((this.orderView.mrp  * 12) / 100 ) * 0.18) + ((this.orderView.mrp * 1) / 100))).toFixed(2));
      total_tax = parseFloat(((basic_amount  * 12) / 100).toFixed(2));
      fee = parseFloat(((basic_amount  * 12) / 100).toFixed(2));
      igst = parseFloat((((basic_amount  * 12) / 100 ) * 0.18).toFixed(2));
      cgst = parseFloat((((basic_amount  * 12) / 100 ) * 0.09).toFixed(2));
      sgst = parseFloat((((basic_amount  * 12) / 100 ) * 0.09).toFixed(2));
      net_payable_designer =  this.orderView.mrp - (tcs + igst + fee)
      total_amount_received = this.orderView.mrp;
      total_tax_amount = fee + igst + tcs;

    }
    let total_tax2 = parseInt(hsn_cgst) +parseInt(hsn_igst) +parseInt(hsn_sgst);
    console.log("hsn_cgst",hsn_cgst,hsn_igst,hsn_sgst,total_tax2);
    if(this.orderView?.hsnData?.igst)
      {
        hsn_amount = this.orderView?.taxAmount;
        hsn_igst = parseFloat((this.orderView?.taxAmount).toFixed(2));
        hsn_cgst = 0;
        hsn_sgst = 0;

      }else{
        hsn_amount = this.orderView?.taxAmount;
        hsn_igst = 0;
        hsn_cgst = parseFloat((this.orderView?.taxAmount / 2).toFixed(2));
        hsn_sgst = parseFloat((this.orderView?.taxAmount / 2).toFixed(2));
      }
        body = {
          DeliveryDTO:{
            deliveredDate:form.value.deliveredDate
          }
        }
        var data:any = {
          designerDetails:{
            GSTIN:this.designerData.boutiqueProfile.gstin,
            "PAN":this.designerData?.designerPersonalInfoEntity?.designerDocuments?.panCard,
            name:this.designerData?.designerProfile?.designerName,
            mobile:this.designerData?.designerProfile?.mobileNo,
            "boutiqueName": this.designerData?.boutiqueProfile?.boutiqueName,
            address:this.designerData?.socialProfile?.address,
            "designer_id": this.designerData?.designerId,
            "designer_name": this.designerData?.designerName,
            "display_name": this.designerData?.designerProfile?.designerName,
            "gst_in": this.designerData?.boutiqueProfile?.gstin,
            "email": this.designerData?.designerProfile?.email,
            "city": this.designerData?.designerProfile?.city,
            "state": this.designerData?.designerProfile?.state,
            "country": this.designerData?.designerProfile?.country,
            "pan":this.designerData?.designerProfile?.pan,
            "pin":this.designerData?.designerProfile?.pinCode,

          },
          invoiceDatetime:'',
          invoiceId:'',
          orderDatetime:this.orderItem?.orderDate,
          orderId:this.orderItem?.orderId,
          productDetails:{
            colour:this.orderView?.colour,
            createdOn:this.orderView?.createdOn,
            designerId:this.orderView?.designerId,
            discount:this.orderView?.discount,
            id:this.orderView?.id,
            images:this.orderView?.images,
            mrp:this.orderView?.mrp,
            orderId:this.orderView?.orderId,
            orderItemStatus:this.orderView?.orderItemStatus,
            productId:this.orderView?.productId,
            productName:this.orderView?.productName,
            productSku:this.orderView?.productSku,
            reachedCentralHub:this.orderView?.reachedCentralHub,
            salesPrice:this.orderView?.salesPrice,
            size:this.orderView?.size,
            taxAmount:this.orderView?.taxAmount,
            taxType:this.orderView?.taxType,
            units:this.orderView?.units,
            updatedOn:this.orderView?.updatedOn,
            userId:this.orderView?.userId,
          },
          userDetails:{
            userId:this.orderItem?.userId,
            shipping_address:this.orderItem?.shippingAddress,
            billing_address:this.orderItem?.billingAddress,
            mobile:this.orderItem?.billingAddress?.mobile,
          },
        }
          this.GenarateInvoiceSubscribe = this.http.post("userOrder/invoices/add",data).subscribe(
            (res: any) => {
            invoiceId = res.invoiceId;

              console.log("GenarateInvoiceSubscribe");
              
              let salesPrice = 0;
               if(this.orderView.salesPrice == 0)
                {
                  salesPrice = this.orderView?.mrp
                }
                else{
                  salesPrice = this.orderView?.salesPrice
                }
                
              accountData = {
                "admin_details": {
                  "address": '',
                  "admin_id": '',
                  "gstIn": '',
                  "pan": '',
                  "pin":'',
                  "mobile": '',
                  "name":  '',
                  "gender": '',
                  "city": '',
                  "country": '',
                  'state':''
                },
                "datetime": this.currentDateTime,
                "designer_details": {
                  "uid":this.designerData?.uid,
                  "address": this.designerData?.socialProfile?.address,
                  "designer_id": this.designerData?.designerId,
                  "designer_name": this.designerData?.designerName,
                  "boutiqueName": this.designerData?.boutiqueProfile?.boutiqueName,
                  "gst_in": this.designerData?.boutiqueProfile?.gstin,
                  "mobile": this.designerData?.designerProfile?.mobileNo,
                  "pan":this.designerData?.designerPersonalInfoEntity?.designerDocuments?.panCard,
                  "display_name": this.designerData?.designerProfile?.displayName,
                  "email": this.designerData?.designerProfile?.email,
                  "city": this.designerData?.designerProfile?.city,
                  "state": this.designerData?.designerProfile?.state,
                  "country": this.designerData?.designerProfile?.country,
                  "pin":this.designerData?.designerProfile?.pinCode,
                },
                "filter_date":this.filter_date,
                "designer_return_amount": [
                  {
                    "basic_amount":basic_amount,
                    "datetime": this.currentDateTime,
                    "designer_id": this.orderView.designerId,
                    "discount": this.orderView.discount,
                    "hsn_amount": parseFloat(hsn_amount),
                    "hsn_cgst": parseFloat(hsn_cgst),
                    "hsn_igst": parseFloat(hsn_igst),
                    "hsn_rate": parseFloat(hsn_rate),
                    "hsn_sgst": parseFloat(hsn_sgst),
                    "net_payable_designer":net_payable_designer,
                    "payment_datetime": moment(this.orderItem?.paymentData?.createdOn).format('YYYY-MM-DD hh:mm:ss'),
                    "mrp": this.orderView?.mrp,
                    "order_id": this.orderView?.orderId,
                    "status": "NOT RETURN",
                    "product_id": this.orderView?.productId,
                    "product_sku": this.orderView?.productSku,
                    "remarks": '',
                    "sales_price": salesPrice,
                    "size": this.orderView?.size,
                    "tax_type": this.orderView?.taxType,
                    "units": this.orderView?.units,
                    "user_id": this.orderView?.userId,
                    "tcs": tcs,
                    "total_amount_received": total_amount_received,
                    "total_tax_amount": total_tax_amount,
                    "updated_by": this.designerData?.uid,
                    "updated_datetime": this.currentDateTime
                  }
                ],
                "govt_charge": [
                  {
                    "cgst": 0,
                    "datetime": this.currentDateTime,
                    "fee": fee,
                    "igst": igst,
                    "rate": 12,
                    "remarks": "",
                    "sgst": 0,
                    "status": 'NOT PAID',
                    "tcs": tcs,
                    "tcs_rate": 1,
                    "total_amount":fee + igst + tcs,
                    "total_tax": igst + tcs,
                    "units":this.orderView?.units,
                    "updated_by": this.designerData?.uid,
                    "updated_datetime": this.currentDateTime
                  }
                ],
                "order_details": [
                  {
                    "basic_amount": basic_amount,
                    "datetime": this.currentDateTime,
                    "delivery_datetime": moment(form.value.date).format('YYYY-MM-DD hh:mm:ss'),
                    "designer_id": this.orderView?.designerId,
                    "discount": this.orderView?.discount,
                    "hsn_cgst": parseFloat(hsn_cgst),
                    "hsn_igst": parseFloat(hsn_igst),
                    "hsn_rate": parseFloat(hsn_rate),
                    "hsn_sgst": parseFloat(hsn_sgst),
                    "hsn_amount": parseFloat(hsn_amount),
                    "image": this.orderView?.images,
                    "giftWrapAmount": this.orderView?.giftWrapAmount,
                    "invoice_id": invoiceId,
                    "paymentMode": this.orderItem?.paymentData?.paymentMode,
                    "mrp": this.orderView?.mrp,
                    "order_id": this.orderView?.orderId,
                    "order_date":moment(this.orderView?.createdOn,"DD/MM/YYYY hh:mm:ss").format('DD/MM/YYYY'),
                    "order_status": "DELIVERED",
                    "product_id": this.orderView?.productId,
                    "product_sku": this.orderView?.productSku,
                    "remarks": '',
                    "sales_price": salesPrice,
                    "size": this.orderView?.size,
                    "tax_type": this.orderView?.taxType,
                    "total_tax": total_tax,
                    "units": this.orderView?.units,
                    "user_id": this.orderView?.userId
                  }
                ],
                "service_charge": {
                  "cgst": 0,
                  "date": this.currentDateTime,
                  "fee": fee,
                  "igst": igst,
                  "rate": 12,
                  "remarks": "",
                  "sgst": 0,
                  "status": 'NOT PAID',
                  "tcs": tcs,
                  "tcs_rate": 1,
                  "total_amount":fee + igst + tcs,
                "total_tax": igst + tcs,
                  "units":this.orderView.units
                }
              }
              // this.accountAdd(accountData);
              this.GenarateAccountDataSubscribe = this.http.post("account/add",accountData).subscribe(
                (res: any) => {
              console.log("GenarateAccountDataSubscribe");

                },
                (error) => {
                });  
            },
            (error) => {
            }
          ); 

    }
    
    this.isListLoading = true;
    var api = 'userOrder/itemStatusChange?orderId='+this.orderId+'&productId='+this.productId+'&orderItemStatus='+this.orderItemStatus;
    this.statusChangeSubscribe = this.http.post(api,body).subscribe(
      (res:any) => {
        this.toastrService.success(res.message);
        this.getOrderItemdetailsdata();
        this.modalService.dismissAll();
      },
      (errRes:any) => {
        this.toastrService.error(errRes.error.message);
        this.getOrderItemdetailsdata();
      }
    );
    
  }
  cancelOrder(form: NgForm)
  {
  var  body = {
    comment: form.value.comment,
    orderStatus: "Request for cancelation"
  }
    this.statusChangeSubscribe = this.http.post("userOrder/cancelOrder/?orderId="+this.orderId+"&productId="+this.productId,body).subscribe(
      (res:any) => {
        this.toastrService.success(res.message);
        this.getOrderItemdetailsdata();
        this.modalService.dismissAll();
      },
      (errRes:any) => {
        this.toastrService.error(errRes.error.message);
        this.getOrderItemdetailsdata();
      }
    );
  }
  getColorList()
    {
      this.getColorListSubscribe = this.http.get("adminMData/coloreList").subscribe(
        (res:any) => {
          var colourlist:any[] = res;
          for (let index = 0; index < colourlist.length; index++) {
            if(this.orderView.colour == colourlist[index].colorName)
            {
              this.colour = colourlist[index].colorValue
            }
            
          }
          console.log("color list.....",this.colour);

        },
        (error) =>{
          this.toastrService.error(error.message);
        })
    }
   // changeDateFormat start
   changeDateFormat(date: any)
   {
    console.log(date);
    
      // this.model.deliveredDate= moment(date).format('YYYY/MM/DD');
      this.model.deliveredDate= moment(date).format('YYYY-MM-DD');
       console.log(this.model.deliveredDate);
    
   }
   // changeDateFormat end
   custom_modal(content: any,orderView:any){
    console.log(orderView.measurementObject);
    
    this.modalService.open(content, { size: 'xl' });
    this.mesorementData = {
      measurementObject:orderView?.measurementObject.measurementJSON,
      displyName:orderView?.measurementObject?.displyName,
      id:orderView?.measurementObject?.id,
      gender:orderView?.measurementObject?.gender,
      sizeType:orderView?.measurementObject?.sizeType,

    };
    console.log(orderView,this.mesorementData);

  }
    // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if(this.getOrderItemData !== undefined){
      this.getOrderItemData.unsubscribe();
    }
    if(this.getColorListSubscribe !== undefined){
      this.getColorListSubscribe.unsubscribe();
    }
    if(this.tableListSubscribe !== undefined){
      this.tableListSubscribe.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------
}
