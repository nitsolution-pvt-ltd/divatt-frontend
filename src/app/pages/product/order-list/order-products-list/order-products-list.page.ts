import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-products-list',
  templateUrl: './order-products-list.page.html',
  styleUrls: ['./order-products-list.page.scss'],
})
export class OrderProductsListPage implements OnInit {
  parms_action_id: any;
  viewText:string;
  model:any = {};
  parms_action_productId: any;
  showreturnRequesttmsg = false;
  showRecivedtmsg = false;
  showreturnRefundtmsg = false;
  showcancelFromUsertmsg = false;
  showCancelRequestmsg = false;
  showCanceledtmsg = false;
  showreturnRefundmsg = false;
  showreturnRequestApprove =false;
  url: string;
  invoiceId: any;
  showCustomization = false;
  showGiftwrap = false;
  shippingDate: any;
  currentDateTime: string;
  trackingDetailsX: any ={};
  paymentData: any;
  forceReturnOnDTOTime: string;
  returnRequestApproveTime: string;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonUtils: CommonUtils,
    private authService: AuthService,
    private router: Router
  ) {}
  tableListData = [];
  allselectModel;
  itemcheckClick = false;
  checkedList = [];
  tableHeaderData = [
    {
      column_name: "orderId",
      display_name: "Order Id",
      sortingButtonName: "",
    },{
      column_name: "productName",
      display_name: "Product Name",
      sortingButtonName: "",
    },
    {
      column_name: "colour",
      display_name: "Colour",
      sortingButtonName: "",
    },
    {
      column_name: "mrp",
      display_name: "MRP",
      sortingButtonName: "",
    },
    {
      column_name: "salesPrice",
      display_name: "Sales Price",
      sortingButtonName: "",
    },
    {
      column_name: "taxAmount",
      display_name: "Tax Amount",
      sortingButtonName: "",
    },
    {
      column_name: "units",
      display_name: "Units",
      sortingButtonName: "",
    },
    {
      column_name: "size",
      display_name: "Size",
      sortingButtonName: "",
    },
    {
      column_name: "taxType",
      display_name: "Tax Type",
      sortingButtonName: "",
    }
  ];
  isListLoading = false;
  listing_url;
  tableData :any;
  pageNo;
  sortColumnName = "";
  sortOrderName = "";
  deleteApi;
  deleteLoading = false;
  restoreApi;
  restoreLoading = false;
  tableValueType;
  bilingData;
  packed_done = false;
  delivered_done = false;
  shipped_done = false;
  orders_done = false;
  progressbar_1 = false;
  private changeStatusSubscribe: Subscription;
  private tableListSubscribe: Subscription;
  private deleteDataSubscribe: Subscription;
  private permissionDataSubscribe: Subscription;
  pagePermission;
  // Variables end

  ngOnInit() {
    // this.commonFunction();
  }

  ionViewWillEnter() {
    this.commonFunction();
  }

  commonFunction() {
    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('orderId');
    this.parms_action_productId = this.activatedRoute.snapshot.paramMap.get('productId');

    this.allselectModel = false;
    this.checkedList = [];
    /*Check permission status start*/
    this.authService.globalparamsData.subscribe((res) => {
      // console.log("res>>", res);
      if (res.authority == "ADMIN") {
        this.permissionDataSubscribe =
          this.commonUtils.menuPermissionObservable.subscribe((data) => {
            if (data) {
              // console.log("menu>>", data);
              // console.log("this.router.url>>", this.router.url);

              let pageUrl = this.router.url.split("/");
              // console.log("pageUrl", pageUrl);

              for (let item of data) {
                if (item.modDetails.url == 'order-list') {
                  if (item.modPrivs.list == true) {
                    // console.log("-----Permission Granted-----");
                    this.pagePermission = item;
                    // console.log("this.pagePermission", this.pagePermission);
                    // this.listing_url = "userOrder/list";
                      this.listing_url = "userOrder/getOrder/"+this.parms_action_id;
                    this.onRefresh();
                    // delete api
                    break;
                  } else {
                    // console.log("-------No Permission--------");
                    this.router.navigateByUrl("/error");
                  }
                }
              }
            }
          });
      } else {
        this.router.navigateByUrl("/error");
      }
    });
    /*Check permission status end*/
    // this.onRefresh();
  }

  /*----------------Table list data start----------------*/

  // Display records start
  displayRecord = 10;
  displayRecords = [
    { id : '1', displayValue: 10},
    { id : '2', displayValue: 25},
    { id : '3', displayValue: 50},
    { id : '4', displayValue: 100},
    // { id : '5', displayValue: '0'}
  ];
  displayRecordChange(_record) {
    // console.log("_record", _record);

    this.displayRecord = _record;
    this.pageNo = 0;
    this.onListDate(this.listing_url,this.pageNo,_record,this.sortColumnName,this.sortOrderName,this.searchTerm);
  }
  // Display records end
  returnFromUserTime;
  designerReceivedProductTime;
  cancelFromUserTime;
  returnFromAdminTime;
  cancelOrderDetailsTime;
  cancelRequestDetailsrejectionTime = '';
  cancelRequestDetailscancellationTime = '';
  // List data start
  onListDate(_listUrl,_pageNo,_displayRecord,_sortColumnName,_sortOrderName,_searchTerm) {
    this.isListLoading = true;
    let currentDate = Date.now()
    this.currentDateTime = moment(currentDate).format('YYYY-MM-DD hh:mm:ss');
    let api = _listUrl;
    this.tableListSubscribe = this.http.get(api).subscribe(
      (res: any) => {
        this.isListLoading = false;
        // console.log("res", res);
        for (let i = 0; i < res.OrderSKUDetails.length; i++) {
          // // console.log("product Id....",this.orderItem.OrderSKUDetails[i].productId);
          this.paymentData = res.paymentData;
          if (this.parms_action_productId == res.OrderSKUDetails[i].productId) {
            this.tableData = res.OrderSKUDetails[i];
            this.model.returnAcceptable = res.OrderSKUDetails[i]?.returnAcceptable;
            this.tableData.orderDate = moment(res?.OrderSKUDetails[i]?.createdOn,"DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
            this.trackingDetailsX = res.OrderSKUDetails[i].orderStatusDetails;
            if(this.trackingDetailsX)
            {
              if(this.trackingDetailsX?.cancelOrderDetails)
              {
                this.cancelOrderDetailsTime = moment(this.trackingDetailsX?.cancelOrderDetails?.cancelationTime,"DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.cancelRequestDetails?.cancellationTime)
              {
                this.cancelRequestDetailscancellationTime = moment(this.trackingDetailsX?.cancelRequestDetails?.cancellationTime,"DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.cancelRequestDetails?.rejectionTime)
              {
                this.cancelRequestDetailsrejectionTime = moment(this.trackingDetailsX?.cancelRequestDetails?.rejectionTime,"DD/MM/YYYY HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.returnFromUser)
              {
                this.returnFromUserTime = moment(this.trackingDetailsX?.returnFromUser?.dateTime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.returnFromAdmin)
              {
               this.returnFromAdminTime = moment(this.trackingDetailsX?.returnFromAdmin?.dateTime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.cancelFromUser)
              {
                this.cancelFromUserTime = moment(this.trackingDetailsX?.cancelFromUser?.dateTime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.designerReceivedProduct)
              {
                this.designerReceivedProductTime = moment(this.trackingDetailsX?.designerReceivedProduct?.dateTime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.forceReturnOnDTO)
              {
                this.forceReturnOnDTOTime = moment(this.trackingDetailsX?.forceReturnOnDTO?.dateTime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
              }
              if(this.trackingDetailsX?.returnRequestApprove)
              {
                this.returnRequestApproveTime = moment(this.trackingDetailsX?.returnRequestApprove?.dateTime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
              }
            }
            // console.log("table back data.....",this.tableData);

            if(this.tableData?.orderStatusDetails?.deliveryDetails?.deliveredDate)
            { 
              this.tableData.orderStatusDetails.deliveryDetails.deliveredDate = moment(this.tableData?.orderStatusDetails?.deliveryDetails?.deliveredDate , 'YYYY-MM-DD').format('DD/MM/YYYY');
            }  
          // console.log("table back data.....",this.tableData);

          let shippingDate = this.tableData?.shippingDate.split(" ");
          this.shippingDate = shippingDate[0];
          } 
                
      }
      
        // this.tableData = res;
        // console.log("table back data.....",this.tableData);
        this.bilingData = res.billingAddress;
        this.tableListData = res;
        
        // console.log("this.tableListData....", res.billingAddress);
        
        // this.url = environment.apiUrl+"/"+"userOrder/getOrderByInvoiceId/"+res.invoiceId;
        this.url = environment.apiUrl+"/userOrder/getOrderSummary/"+this.tableData.orderId;
        this.invoiceId = res.invoiceId;
      },
      (errRes) => {
        // this.selectLoadingDepend = false;
        this.isListLoading = false;
      }
    );
  }
  // List data end
  // Pagination start
  setPage(page: number) {
    // console.log("page", page);
    // console.log("page");

    this.pageNo = page;
    this.onListDate(this.listing_url,this.pageNo,this.displayRecord,this.sortColumnName,this.sortOrderName,this.searchTerm);
  }
  // Pagination end

  // Sorting start
  isSortTableHeader(_tableHeaderData, _headerItem) {
    // console.log("_tableHeaderData", _tableHeaderData);
    // console.log("_headerItem", _headerItem);

    // all field reset first
    _tableHeaderData.forEach((val) => {
      val.sortingButtonName = "";
    });

    _headerItem.orederShow = !_headerItem.orederShow;
    if (_headerItem.orederShow) {
      _headerItem.sortingButtonName = "ASC";
    } else {
      _headerItem.sortingButtonName = "DESC";
    }

    this.sortColumnName = _headerItem.column_name;
    this.sortOrderName = _headerItem.sortingButtonName;

    // console.log("this.sortColumnName", this.sortColumnName);
    // console.log("this.sortOrderName", this.sortOrderName);
    // console.log("_tableHeaderData>>", _tableHeaderData);
    this.onListDate(this.listing_url,this.pageNo,this.displayRecord,this.sortColumnName,this.sortOrderName,this.searchTerm);
    
  }
  // Sorting end

  // Search start
  searchTerm: string = "";
  searchList(event) {
    this.searchTerm = event.target.value;

    // console.log("this.searchTerm", this.searchTerm);

    this.onListDate(this.listing_url,this.pageNo,this.displayRecord,this.sortColumnName,this.sortOrderName,this.searchTerm);

  }
  // Search end

  // Referesh start
  onRefresh() {
    this.pageNo = 0;
    this.sortColumnName = "id";
    this.sortOrderName = "DESC";
    this.searchTerm = "";
    this.tableValueType = "0";
    // table data call
    this.onListDate(this.listing_url,this.pageNo,this.displayRecord,this.sortColumnName,this.sortOrderName,this.searchTerm);

  }
  // Referesh end
  forceReturn(tableData:any,tableListData:any,returnAcceptable:any)
  {

  }
  // changeStatus end
  changeStatus(type,item:any={},moredata) {
    // console.log("item",type,item,moredata);
    var data:any={},time,todate;
    var trackingHistory:any = [];
    // item={
    //   moredata:moredata
    // };
    item.moredata= moredata;
    if(item.TrackingData)
    {
      trackingHistory = item.TrackingData.trackingHistory;
    }
    var day = new Date();
    // console.log(day,day.getMinutes());
    if(day.getSeconds() > 10)
    {
      time = day.getHours() + ':' + day.getMinutes() +':' + day.getSeconds();
    }
    else{
      time = day.getHours() + ':' + day.getMinutes() +':0' + day.getSeconds();
    }
    // console.log(day,time);
    todate = moment(day).format('YYYY/MM/DD');
    // [Dispatch:{time:00.00,date:00/00/0000,comment:"",},Shipment:{time:00.00,date:00/00/0000,comment:""},Out for Delivery:{time:00.00,date:00/00/0000,comment:""},Delivered:{time:00.00,date:00/00/0000,comment:""}]
    // 4 obj
   
    
      
    // console.log(todate,trackingHistory);
    
    data = 
    {
      deliveredDate: item.TrackingData.deliveredDate,
      deliveryExpectedDate: item.TrackingData.deliveryExpectedDate,
      deliveryMode:item.TrackingData.deliveryMode,
      deliveryStarted: item.TrackingData.deliveryStarted,
      deliveryStatus:moredata.deliveryStatus,
      deliveryType:"Admin to Dispatch",
      designerId:item.designerId,
      orderId:item.orderId,
      productSku:item.productSku,
      productId:item.productId,
      trackingHistory:trackingHistory,
      userId:item.userId,
      trackingId: item.TrackingData.trackingId,
      trackingUrl: item.TrackingData.trackingUrl
    }
    if(type == 'shipment')
    {
      this.openorderCommentmodal("orderCommentAdmin_modal", data, item);
    }else if(type == 'out_for')
    {
      this.openorderCommentmodal("orderDeliveryAdmin_modal", data, item);
    }else if(type == 'delivered')
    {
      this.openorderCommentmodal("DeliveredAdmin_modal", data, item);
    }else if(type == 'Cancel')
    {
      this.openorderCommentmodal("orderCancelAdmin_modal", data, item);
    }
    
  }
  // changeStatus start
  async openorderCommentmodal(_identifier, _item, _items) {
    // console.log('openProfilemodal ...........>>', _identifier);

    let orderCommentmodal;
    orderCommentmodal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'mymodalClass small profilemodal',
      componentProps: { 
        identifier: _identifier,
        modalForm_item: _item,
        modalForm_array: _items
      }
    });
    
    // modal data back to Component
    orderCommentmodal.onDidDismiss()
    .then((getdata) => {
      // console.log("getdata",getdata);
      this.onRefresh();
      
    });

    return await orderCommentmodal.present();
  }
  // orderpack start
  async orderStatus_modal(_identifier, _item, _items) {
    // console.log('openordermodal ...........>>', _identifier,_item);
    let size = 'small'
    if(_identifier == 'userCustomMesorment')
    {
      _item = _item.measurementObject;
      size = 'medium';
    }else if(_identifier == 'forceReturnModal')
    {
    }
    let orderCommentmodal;
    orderCommentmodal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'mymodalClass ' +size+ ' profilemodal',
      componentProps: { 
        identifier: _identifier,
        modalForm_item: _item,
        modalForm_array: _items
      }
    });
    
    // modal data back to Component
    orderCommentmodal.onDidDismiss()
    .then((getdata) => {
      // console.log("getdata........",getdata);
      // // console.log("getdata",getdata);
      this.packed_done = getdata.data;
      this.onRefresh();
      
    });

    return await orderCommentmodal.present();
  }
  // orderpack end
  // orders start
  async orders_modal(_identifier, _item, _items) {
    // console.log('openordermodal ...........>>', _identifier);
    // console.log('openordermodal _item ...........>>', _item,this.tableData);
    // if(_identifier == 'returnRequestConfirm')
    // {
    //   // console.log(_item);
       
    // }
    // if(_item == 'true'){
        let orderCommentmodal;
        orderCommentmodal = await this.modalController.create({
          component: ModalPage,
          cssClass: 'mymodalClass small profilemodal',
          componentProps: { 
            identifier: _identifier,
            modalForm_item: _item,
            modalForm_array: _items
          }
        });
        
        // modal data back to Component
        orderCommentmodal.onDidDismiss()
        .then((getdata) => {
          // console.log("getdata.......",getdata);
          // // console.log("getdata",getdata);
          this.orders_done = getdata.data;
          setTimeout(()=>{                           // <<<---using ()=> syntax
            this.progressbar_1 = true;
          }, 1000);
          this.onRefresh();
          
        });

        return await orderCommentmodal.present();
    
  }
  // orders end

  /*----------------Table list data end----------------*/
  createInvoice()
  {
    // console.log("tableData",this.tableData);
    var orders = this.tableData.OrderSKUDetails;
    var productIds:any=[],userId;
    userId = this.tableData.userId;
    let api ="/"+this.tableData.orderId+"/"+userId;
    // // console.log("tableData",this.tableData,orders,orders.designerId,orders.orderId,productIds,userId);
    this.tableListSubscribe = this.http.post(api,'').subscribe(
      (res: any) => {
        this.isListLoading = false;
      },
      (errRes) => {
      }
    );
  }
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if (this.tableListSubscribe !== undefined) {
      this.tableListSubscribe.unsubscribe();
    }
    if (this.permissionDataSubscribe !== undefined) {
      this.permissionDataSubscribe.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------

}
