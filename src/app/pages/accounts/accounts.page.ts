import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { ModalPage } from '../modal/modal.page';
import { environment } from 'src/environments/environment';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  designerList: any;
  noFiltter: boolean = false;
  showFilter = true;
  selectedYear: any = '';
  month: string;
  year: string;
  yearList: any = [];

  allmonthList: any = [
    { id: 1, name: 'January' },
    { id: 2, name: 'February' },
    { id: 3, name: 'March' },
    { id: 4, name: 'April' },
    { id: 5, name: 'May' },
    { id: 6, name: 'June' },
    { id: 7, name: 'July' },
    { id: 8, name: 'August' },
    { id: 9, name: 'September' },
    { id: 10, name: 'October' },
    { id: 11, name: 'November' },
    { id: 12, name: 'December' }
  ];
  monthList: any = [];
  startYear: any = '2022';
  endYear: any = '';
  settlement: any = '';
  selectedMonth: any = '';
  currentMonth: any;
  mounthCount: number;
  model: any = {};
  serviceCharge: string = '';
  designerReturn: string = '';
  govtCharge: string = '';
  order_status: string = '';
  ReturnStatus: string = '';
  designerId: string = '';
  currentDateTime: string;
  constructor(private http: HttpClient,
    public toastController: ToastController,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonUtils: CommonUtils,
    private authService: AuthService,
    private router: Router) { }
  Employees2 = 40;
  tableListData = [];
  allselectModel;
  itemcheckClick = false;
  checkedList = [];
  tableHeaderData = [
    {
      column_name: "order_details.order_id",
      display_name: "Order Id",
      sortingButtonName: ""
    },

    {
      column_name: "order_details.invoice_id",
      display_name: "User Invoice Id",
      sortingButtonName: ""
    },
    {
      column_name: "service_charge.designer_invoice_id",
      display_name: "Designer Invoice Id",
      sortingButtonName: ""
    },
    {
      column_name: "designer_details.display_name",
      display_name: "Display Name",
      sortingButtonName: ""
    },
    {
      column_name: "order_details.mrp",
      display_name: "Basic Amount",
      sortingButtonName: ""
    },
    {
      column_name: "order_details.discount",
      display_name: "discount",
      sortingButtonName: ""
    },
    {
      column_name: "order_details.hsn_amount",
      display_name: "GST  Amount",
      sortingButtonName: ""
    },
    {
      column_name: "order_details.giftWrapAmount",
      display_name: "GiftWrap Amount",
      sortingButtonName: ""
    },
    {
      column_name: "order_details.sales_price",
      display_name: "TOTAL Amount",
      sortingButtonName: ""
    },
    {
      column_name: "service_charge.total_tax",
      display_name: "DIVATT Charges",
      sortingButtonName: ""
    },
    {
      column_name: "designer_return_amount.hsn_amount",
      display_name: "GST Amount",
      sortingButtonName: ""
    },
    {
      column_name: "service_charge.tcs",
      display_name: "TCS",
      sortingButtonName: ""
    },
    {
      column_name: "designer_return_amount.net_payable_designer",
      display_name: "PAYABLE Amount",
      sortingButtonName: ""
    },
  ];
  isListLoading = false;
  listing_url;
  tableData
  pageNo;
  sortColumnName = '_id';
  sortOrderName = '';
  deleteApi;
  deleteLoading = false;
  restoreApi;
  restoreLoading = false;
  tableValueType;
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

    let currentDate = Date.now()
    this.currentDateTime = moment(currentDate).format('YYYY-MM-DD hh:mm:ss');

    /*Check permission status start*/
    this.authService.globalparamsData.subscribe(res => {
      // // console.log('res>>', res);
      if (res.authority == 'ADMIN') {
        this.permissionDataSubscribe = this.commonUtils.menuPermissionObservable.subscribe(data => {
          if (data) {
            // // console.log('menu>>', data);
            // console.log('this.router.url>>', this.router.url);

            let pageUrl = this.router.url.split("/");
            // // console.log('pageUrl', pageUrl);

            for (let item of data) {
              if (item.modDetails.url == pageUrl[1]) {
                if (item.modPrivs.list == true) {
                  // // console.log('-----Permission Granted-----');
                  this.pagePermission = item;
                  // // console.log('this.pagePermission', this.pagePermission);
                  this.setPageData();
                  break;
                } else {
                  // console.log('-------No Permission--------');
                  this.router.navigateByUrl('/error');
                }

              }
            }
          }
        })
      } else {
        this.router.navigateByUrl('/error');
      }
    })


  }
  setPageData() {
    /*Check permission status end*/
    this.allselectModel = false;
    this.model.filter = true;
    // // console.log('this.model.filter', this.model.filter);
    this.getDesignerList();
    this.checkedList = [];
    this.endYear = moment().format('YYYY');
    this.currentMonth = moment().format('MMMM');
    this.model.year = parseInt(moment().format('YYYY'));
    this.model.month = parseInt(moment().format('MM'));
    this.selectedMonth = parseInt(moment().format('MM'));
    let day = parseInt(moment().format('DD'));
    console.log("this.day.......", day);
    if (day < 16) {
      this.model.settlement = 'firstSettlement';
      this.settlement = 'firstSettlement';
    }else {
      this.model.settlement = 'secondSettlement';
      this.settlement = 'secondSettlement';
    }

    // // console.log("this.model.year.....", this.model.year);
    this.selectedYear = this.model.year;
    if (this.model.year == this.endYear) {
      for (let index = 0; index < 12; index++) {
        // // console.log(this.currentMonth, this.allmonthList[index].id);

        if (this.currentMonth == this.allmonthList[index].id) {
          this.mounthCount = index;
          break;
        } else {
          // this.monthList.push(this.allmonthList[index]);
          this.mounthCount = index;
        }
      }
      for (let index = 0; index < this.mounthCount + 1; index++) {
        this.monthList.push(this.allmonthList[index]);
      }
    } else {
      this.monthList = this.allmonthList;
    }
    // // console.log("moment", this.endYear, this.currentMonth, this.model.year, moment().format('YYYY'));
    var count;
    if (this.endYear > this.startYear || this.endYear == this.startYear) {
      count = parseInt(this.endYear) - parseInt(this.startYear) + 1;
      for (let index = 0; index < count; index++) {
        // // console.log("moment", count);
        this.yearList.push(parseInt(this.startYear) + index);

      }
    } else {
      this.yearList.push(this.startYear);
      // for (let index = 0; index < 100; index++) {
      //   // console.log("moment",count);  
      //   this.yearList.push(parseInt(this.startYear) + index);

      // }
    }
    this.listing_url = 'account/list';
    this.onRefresh();
    // delete api
    this.deleteApi = 'category/delete';
    /*Check permission status end*/
  }
  /*----------------Table list data start----------------*/

  // Display records start
  displayRecord = 10;
  displayRecords = [
    { id: '1', displayValue: 10 },
    { id: '2', displayValue: 25 },
    { id: '3', displayValue: 50 },
    { id: '4', displayValue: 100 },
  ];
  displayRecordChange(_record) {
    // // console.log('_record', _record);
    this.tableListData = [];
    this.displayRecord = _record;
    this.pageNo = 0;
    this.onListDate(this.listing_url, this.pageNo, _record, this.sortColumnName, this.sortOrderName, this.searchTerm);
  }
  // Display records end
  applyFilter(event) {
    // // console.log(event);
    this.onRefresh();
  }
  // List data start
  onListDate(_listUrl, _pageNo, _displayRecord, _sortColumnName, _sortOrderName, _searchTerm) {
    var item: any = { orderId: '', basicAmount: '', gstAmount: '', totalAmount: '', divattCharges: '', tcs: '', payableAmount: '', pendingAmount: '' };
    this.isListLoading = true;
    let api;
    this.tableListData = [];
    if (this.model.filter) {
      api = _listUrl + '?page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm + '&designerReturn=' + this.designerReturn + '&designerId=' + this.designerId + '&serviceCharge=' + this.serviceCharge + '&govtCharge=' + this.govtCharge + '&ReturnStatus=' + this.ReturnStatus + '&year=' + this.selectedYear + '&month=' + this.selectedMonth + '&settlement=' + this.settlement;

    }
    else {
      api = _listUrl + '?page=' + _pageNo + '&limit=' + _displayRecord + '&sortName=' + _sortColumnName + '&sort=' + _sortOrderName + '&keyword=' + _searchTerm;
    }
    this.tableListSubscribe = this.http.get(api).subscribe(
      (res: any) => {
        this.isListLoading = false;
        // // console.log('res', res);
        this.tableData = res;
        // this.tableListData = res.data;
        for (let i = 0; i < res.data.length; i++) {
          // item =;
          if (res.data[i]?.order_details[0]?.order_status == 'DELIVERED') {
            var designer_return_amount = {
              'orderId': res.data[i]?.order_details[0]?.order_id,
              'basicAmount': res.data[i]?.order_details[0]?.mrp,
              'basic_amount': res.data[i]?.designer_return_amount[0]?.basic_amount,
              'hsn_amount': res.data[i]?.order_details[0]?.hsn_amount,
              'hsn_sgst': res.data[i]?.order_details[0]?.hsn_sgst,
              'hsn_igst': res.data[i]?.order_details[0]?.hsn_igst,
              'totalAmount': res.data[i]?.order_details[0]?.sales_price,
              'divattCharges': res.data[i]?.service_charge.total_tax,
              'tcs': res.data[i]?.service_charge.tcs,
              'discount': res.data[i]?.order_details[0]?.discount,
              'net_payable_designer': res.data[i]?.designer_return_amount[0]?.net_payable_designer,
              'status': res.data[i]?.designer_return_amount[0]?.status,
            }
            var govt_charge = {
              'designer_invoice_id': res.data[i]?.govt_charge[0]?.designer_invoice_id,
              'cgst': res.data[i]?.govt_charge[0]?.cgst,
              'datetime': res.data[i]?.govt_charge[0]?.datetime,
              'fee': res.data[i]?.govt_charge[0]?.fee,
              'igst': res.data[i]?.govt_charge[0]?.igst,
              'rate': res.data[i]?.govt_charge[0]?.rate,
              'sgst': res.data[i]?.govt_charge[0]?.sgst,
              'total_amount': res.data[i]?.govt_charge[0]?.total_amount,
              'remarks': res.data[i]?.govt_charge[0]?.remarks,
              'tcs': res.data[i]?.govt_charge[0]?.tcs,
              'tcs_rate': res.data[i]?.govt_charge[0]?.tcs_rate,
              'status': res.data[i]?.govt_charge[0]?.status,
              'total_tax': res.data[i]?.govt_charge[0]?.total_tax,
              'units': res.data[i]?.govt_charge[0]?.units,
              'updated_by': res.data[i]?.govt_charge[0]?.updated_by,
              'updated_datetime': res.data[i]?.govt_charge[0]?.updated_datetime,
            }
            var service_charge = {
              'designer_invoice_id': res.data[i]?.service_charge?.designer_invoice_id,
              'cgst': res.data[i]?.service_charge?.cgst,
              'datetime': res.data[i]?.service_charge?.datetime,
              'fee': res.data[i]?.service_charge?.fee,
              'igst': res.data[i]?.service_charge?.igst,
              'rate': res.data[i]?.service_charge?.rate,
              'sgst': res.data[i]?.service_charge?.sgst,
              'total_amount': res.data[i]?.service_charge?.total_amount,
              'remarks': res.data[i]?.service_charge?.remarks,
              'tcs': res.data[i]?.service_charge?.tcs,
              'tcs_rate': res.data[i]?.service_charge?.tcs_rate,
              'status': res.data[i]?.service_charge?.status,
              'total_tax': res.data[i]?.service_charge?.total_tax,
              'units': res.data[i]?.service_charge?.units,
              'updated_by': res.data[i]?.service_charge?.updated_by,
              'updated_datetime': res.data[i]?.service_charge?.updated_datetime,
            }
            var order_details = {
              'order_invoice_id': res.data[i]?.order_details[0]?.invoice_id,
              'hsn_cgst': res.data[i]?.order_details[0]?.hsn_cgst,
              'datetime': res.data[i]?.order_details[0]?.datetime,
              'delivery_datetime': res.data[i]?.order_details[0]?.delivery_datetime,
              'hsn_amount': res.data[i]?.order_details[0]?.hsn_amount,
              'giftWrapAmount': res.data[i]?.order_details[0]?.giftWrapAmount,
              'hsn_igst': res.data[i]?.order_details[0]?.hsn_igst,
              'hsn_rate': res.data[i]?.order_details[0]?.hsn_rate,
              'hsn_sgst': res.data[i]?.order_details[0]?.hsn_sgst,
              'mrp': res.data[i]?.order_details[0]?.mrp,
              'remarks': res.data[i]?.order_details[0]?.remarks,
              'order_id': res.data[i]?.order_details[0]?.order_id,
              'tcs_rate': res.data[i]?.order_details[0]?.tcs_rate,
              'order_status': res.data[i]?.order_details[0]?.order_status,
              'total_tax': res.data[i]?.order_details[0]?.total_tax,
              'units': res.data[i]?.order_details[0]?.units,
              'payment_mode': res.data[i]?.order_details[0]?.payment_mode,
              'product_id': res.data[i]?.order_details[0]?.product_id,
              'product_sku': res.data[i]?.order_details[0]?.product_sku,
              'sales_price': res.data[i]?.order_details[0]?.sales_price,
              'size': res.data[i]?.order_details[0]?.size,
              'tax_type': res.data[i]?.order_details[0]?.tax_type,
              'user_id': res.data[i]?.order_details[0]?.user_id,
              'discount': res.data[i]?.order_details[0]?.discount,
              'designer_id': res.data[i]?.order_details[0]?.designer_id,
              'image': res.data[i]?.order_details[0]?.image,

            }
            var designer_details = {
              designerName: res.data[i]?.designer_details?.designer_name,
              display_name: res.data[i]?.designer_details?.display_name,
              designer_id: res.data[i]?.designer_details?.designer_id,
            }
            // // console.log("res.data[i]", res.data[i]);

            let _id, id;
            if (res.data[i]?._id) {
              id = res.data[i]?._id;
              _id = res.data[i]?._id;
            } else {
              id = res.data[i]?.id;
              _id = res.data[i]?.id;
            }
            this.tableListData.push({ _id, id, designer_return_amount, govt_charge, service_charge, order_details, designer_details })
          }

        }
        // // console.log("tableListData", this.tableListData);

        //---------  check item show start ----------
        // if (this.tableListData && this.checkedList) {
        //   for (let i = 0; i < this.tableListData.length; i++) {
        //     for (let j = 0; j < this.checkedList.length; j++) {
        //       if (this.checkedList[j].id == this.tableListData[i].id) {
        //         this.tableListData[i].isSelected = true;
        //       }
        //     }
        //   }
        // }
      },
      errRes => {
        // this.selectLoadingDepend = false;
        this.isListLoading = false;
      },
      () => {
        // // console.log("In complete");

      }
    );
  }
  // List data end
  // Pagination start
  setPage(page: number) {
    // // console.log('page', page);
    // // console.log("page");
    this.tableListData = [];
    this.pageNo = page;
    this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);

  }
  // Pagination end
  selectFiltter(event: any, identifier: any) {

    // // console.log("selectFiltter......", event?.value, identifier);
    if (identifier == 'year') {
      this.monthList = [];
      this.model.month = '';

      this.selectedYear = event?.value;
      // console.log(this.selectedYear, this.endYear);

      if (this.selectedYear == this.endYear) {
        for (let index = 0; index < 12; index++) {
          // console.log(this.currentMonth, this.allmonthList[index].id);

          if (this.currentMonth == this.allmonthList[index].id) {
            this.mounthCount = index;
            break;
          } else {
            // this.monthList.push(this.allmonthList[index]);
            this.mounthCount = index;
          }
        }
        for (let index = 0; index < this.mounthCount + 1; index++) {
          this.monthList.push(this.allmonthList[index]);
        }
      } else {
        this.monthList = this.allmonthList;
      }
    } else if (identifier == 'month') {
      this.selectedMonth = event?.value;
      this.model.settlement = '';
    } else if (identifier == 'settlement') {
      this.settlement = event?.value;
    } else if (identifier == 'designerReturn') {
      this.designerReturn = event?.value;
    } else if (identifier == 'serviceCharge') {
      this.serviceCharge = event?.value;
    } else if (identifier == 'govtCharge') {
      this.govtCharge = event?.value;
    } else if (identifier == 'designerName') {
      if (event == null) {
        this.designerId = '';

      } else {
        this.designerId = event;
      }
    }
    // console.log(event);

    this.onRefresh();
  }
  // Sorting start
  isSortTableHeader(_tableHeaderData, _headerItem) {
    this.tableListData = [];
    // console.log('_tableHeaderData', _tableHeaderData);
    // console.log('_headerItem', _headerItem);

    // all field reset first
    _tableHeaderData.forEach((val) => {
      val.sortingButtonName = ''
    })

    _headerItem.orederShow = !_headerItem.orederShow;
    if (_headerItem.orederShow) {
      _headerItem.sortingButtonName = "ASC";
    } else {
      _headerItem.sortingButtonName = "DESC";
    }

    this.sortColumnName = _headerItem.column_name;
    this.sortOrderName = _headerItem.sortingButtonName;

    // console.log('this.sortColumnName', this.sortColumnName);
    // console.log('this.sortOrderName', this.sortOrderName);
    // console.log('_tableHeaderData>>', _tableHeaderData);

    this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
  }
  // Sorting end

  // Search start
  searchTerm: string = '';
  searchList(event) {
    this.tableListData = [];
    this.searchTerm = event.target.value;

    // console.log('this.searchTerm', this.searchTerm);

    this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
  }
  // Search end

  // Referesh start
  onRefresh() {
    this.tableListData = [];
    this.pageNo = 0;
    this.sortColumnName = '_id';
    this.sortOrderName = 'DESC';
    this.searchTerm = '';
    this.tableValueType = '0';
    // table data call
    this.onListDate(this.listing_url, this.pageNo, this.displayRecord, this.sortColumnName, this.sortOrderName, this.searchTerm);
  }
  // Referesh end

  // Delete start
  deleteData(_id) {
    // console.log('id>>', _id);
    let sentValues = { 'id': _id };
    this.deleteLoading = true;
    this.deleteDataSubscribe = this.http.put(this.deleteApi, sentValues).subscribe(
      (res: any) => {
        this.deleteLoading = false;
        // // console.log("Delete data  res >", res.return_data);
        if (res.status == 200) {
          this.commonUtils.presentToast('success', res.message);
          this.onRefresh();
        } else {
          this.commonUtils.presentToast('error', res.message);
        }
      },
      errRes => {
        // this.selectLoadingDepend = false;
        this.commonUtils.presentToast('error', errRes.error.message);
        this.deleteLoading = false;
      }
    );
  }
  // Delete end



  /*----------------Table list data end----------------*/

  // Delete aleart start
  async presentAlert(_identifier, _id) {

    let messages, headers;

    if (_identifier == 'delete') {
      headers = "Delete"
      messages = "Are you sure want to delete this category?";
    }
    const alert = await this.alertController.create({
      cssClass: 'aleart-popupBox',
      header: headers,
      message: messages,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'popup-cancel-btn',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          cssClass: 'popup-ok-btn',
          handler: () => {
            // console.log('Confirm Okay');
            // this.clickActionBtn('', 'delete');
            // this.deleteData(_id);
            if (_identifier == 'delete') {
              this.deleteData(_id);
            }
          }
        }
      ]
    });

    await alert.present();
  }
  // Delete aleart end

  async presentToast(_msg, _type) {
    const toast = await this.toastController.create({
      message: _msg,
      duration: 2000,
      cssClass: "my-tost-custom-class" + _type,
    });
    toast.present();
  }
  // changeStatus start
  changeStatus(_identifier, item) {
    // console.log(item, this.tableData.data);
    var _items;
    var data: any = {};
    for (let i = 0; i < this.tableData.data.length; i++) {
      if (this.tableData.data[i]?._id == item || this.tableData.data[i]?.id == item) {
        data = this.tableData.data[i];
      }
    }
    this.openAccountStatusModal(_identifier, data, _items);
  }
  async openAccountStatusModal(_identifier, _item, _items) {
    // console.log('openAccountStatusModal ...........>>', _identifier);

    let profile_modal;
    profile_modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'mymodalClass small openProductComment',
      componentProps: {
        identifier: _identifier,
        modalForm_item: _item,
        modalForm_array: _items
      }
    });

    // modal data back to Component
    profile_modal.onDidDismiss()
      .then((getdata) => {
        // console.log('getdata >>>>>>>>>>>', getdata);
        this.onRefresh();

      });

    return await profile_modal.present();
  }
  // changeStatus end
  // ---------------- Click Delete Item start ---------------------
  deleteLodershow = false;
  alldeleteLoaderShow = false;
  async onClickDeleteItem(_identifire, _item, _items, _index) {
    const alert = await this.alertController.create({
      cssClass: 'aleart-popupBox',
      header: 'Delete',
      message: 'Do you really want to delete selected category?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'popup-cancel-btn',
          handler: (blah) => {
            // // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          cssClass: 'popup-ok-btn',
          handler: () => {

            // ------------ single item delete start ------------
            if (_identifire == 'single') {
              // console.log('_item', _item);

              let sentValues = { 'id': _item.id };
              _item.deleteLodershow = true;
              this.deleteDataSubscribe = this.http.put("category/delete", sentValues).subscribe(
                (res: any) => {
                  _item.deleteLodershow = false;
                  // console.log("Edit data  res >", res.return_data);
                  if (res.status == 200) {
                    _items.splice(_index, 1);
                    this.commonUtils.presentToast('success', res.return_message);
                    if (_items.length == 0) {
                      this.allselectModel = false;
                    }
                    this.commonUtils.presentToast('success', res.message);
                    this.onRefresh();
                  } else {
                    this.commonUtils.presentToast('error', res.message);
                  }
                },
                errRes => {
                  // this.selectLoadingDepend = false;
                  this.commonUtils.presentToast('error', errRes.error.message);
                  _item.deleteLodershow = false;
                }
              );
              // ------------ single item delete end ------------
            } else {
              let checkItemIdArray = [];
              if (this.checkedList) {
                this.checkedList.forEach(element => {
                  checkItemIdArray.push(element.id);
                });
              }
              if (_items) {
                _items.forEach(element => {
                  this.checkedList.forEach(element1 => {
                    if (element.id == element1.id) {
                      element.deleteLodershow = true; //loader show
                      this.alldeleteLoaderShow = true;
                    }
                  });
                });
              }

              this.deleteDataSubscribe = this.http.put('category/muldelete', checkItemIdArray).subscribe(
                (res: any) => {
                  if (res.status == 200) {
                    if (_items) {
                      for (let i = 0; i < _items.length; i++) {
                        for (let j = 0; j < this.checkedList.length; j++) {
                          if (_items[i].id == this.checkedList[j].id) {
                            // _items.splice(i, i);

                            this.checkedList = [];
                            // _items.splice(_items.indexOf(_items[i]), 1);
                            this.deleteLodershow = false; //loader hide
                            this.alldeleteLoaderShow = false;
                            // // console.log('delete items >>', _items);
                            // // console.log('delete this.checkedList >>', this.checkedList);

                            this.allselectModel = false;
                          }
                        }
                      };
                      if (_items.length == 0) {
                        this.allselectModel = false;
                        this.checkedList = [];
                        checkItemIdArray = [];
                      }
                    }
                    this.commonUtils.presentToast('success', res.message);
                    this.onRefresh();
                  } else {
                    this.commonUtils.presentToast('error', res.message);
                    this.alldeleteLoaderShow = false;
                  }
                }, errRes => {
                  this.commonUtils.presentToast('error', errRes.error.message);
                  this.alldeleteLoaderShow = false;
                  _items.forEach(element => {
                    this.checkedList.forEach(element1 => {
                      if (element.id == element1.id) {
                        element.deleteLodershow = false;
                        this.alldeleteLoaderShow = false;
                      }
                    });
                  });
                });
            }


          }
        }
      ]
    });

    await alert.present();

  }
  // Click Delete Item end
  Check(e) {
    // console.log("Val", e);

  }
  getDesignerList() {
    var api = "designer/list?limit=0&profileStatus=COMPLETED", designerList = [];
    this.http.get(api).subscribe(
      (res: any) => {
        for (let i = 0; i < res.data.length; i++) {
          designerList.push({ "id": res?.data[i]?.dId, "name": res?.data[i]?.designerProfileEntity?.designerProfile?.displayName });
          // this.filteredDesignerList.push(res?.data[i]?.designerProfileEntity?.designerProfile?.displayName);

        }
        this.designerList = designerList;
        // console.log("designerList", this.designerList, designerList, res.data);

      },
      (error: any) => {

      });
    // console.log("designerList", this.designerList);

  }

  // public filteredDesignerList = this.designerList.slice();
  genarateExcle() {
    var url = 'account/excelReport?designerReturn=' + this.designerReturn + '&serviceCharge=' + this.serviceCharge + '&govtCharge=' + this.govtCharge + '&order_status=' + this.order_status + '&ReturnStatus=' + this.ReturnStatus + '&settlement=' + this.settlement + '&year=' + this.selectedYear + '&month=' + this.selectedMonth + '&designerId=' + this.designerId;

    this.http.get(url, { responseType: 'blob' }).subscribe(data => {

      const file = new File([data], "Divatt-payments-report-" + this.currentDateTime + '.xlsx', { type: 'application/vnd.ms-excel' });

      FileSaver.saveAs(file)
    },
      (error: any) => {

      });
  }
  genaratePDF(order, identifier) {
    if (identifier == 'orderinvoice') {
      let url = environment.apiUrl + "/userOrder/getOrderSummary/" + order
      window.open(url, "_blank");
    } else {
      let url = environment.apiUrl + "/account/getDesignerInvoice/" + order?.designer_return_amount?.orderId + "/" + order?.designer_details?.designer_id
      window.open(url, "_blank");
    }

  }
  // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if (this.tableListSubscribe !== undefined) {
      this.tableListSubscribe.unsubscribe();
    }
    if (this.deleteDataSubscribe !== undefined) {
      this.deleteDataSubscribe.unsubscribe();
    }
    if (this.changeStatusSubscribe !== undefined) {
      this.changeStatusSubscribe.unsubscribe();
    }
    if (this.permissionDataSubscribe !== undefined) {
      this.permissionDataSubscribe.unsubscribe();
    }
  }
  // ----------- destroy unsubscription end ---------
}
