import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, Subscription } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { LoginService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {


  public product: Observable<Product[]> = of([]);
  public OrderlistItems: any = {};
  logoutDataSubscribe: any;
  get_user_dtls: any;
  userId: string;
  private OrderDataSubscribe: Subscription;
  OrderDetails: any;
  emptyOrderList: boolean;
  private cancelOrderDataSubscribe: Subscription;
  private stockRecorverSubscribe: Subscription;
  loader: boolean;
  currentPage: any = 0;
  limit: any = 10;
  sortBy: any = '';
  sort: string = 'DESC';
  orderId: any;
  selectedProduct: any = {};
  model: any = {};
  returnReasonList: any = [
    { reason: 'Product Did not Match The Catalog' },
    { reason: 'Does not match product size or color' },
    { reason: 'Due to product quality issue' },
    { reason: 'Product damaged, but shipping box OK' },
    { reason: 'Both product and shipping box damaged' },
    { reason: 'Items or parts missing' },

  ]
  cancelReasonList: any = [
    { reason: 'Incorrect size ordered' },
    { reason: 'Product not required anymore' },
    { reason: 'Ordered By Mistake' },
    { reason: 'Wants to change style/color' },
    { reason: 'Delayed Delivery Cancellation' },
    { reason: 'Duplicate Order' },

  ]
  currentDate: string;
  currentDateTime: string;
  userData: any = {};
  constructor(private orderService: OrderService, private router: Router, private toastrService: ToastrService, private authService: LoginService,
    private http: HttpClient, private modalService: NgbModal) {
    // this.product.subscribe(products => this.OrderlistItems = products);
  }

  ngOnInit() {

    this.commonFunction();
  }
  commonFunction() {
    let currentDate = Date.now()
    this.currentDate = moment(currentDate).format('YYYY/MM/DD');
    this.currentDateTime = moment(currentDate).format('YYYY-MM-DD hh:mm:ss');
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.userId = this.get_user_dtls.uid;
      }
    });
    this.getOrderList();
    // this.OrderlistItems = this.orderService.getOrderItems(this.get_user_dtls.uid);
    console.log("this.OrderlistItems", this.OrderlistItems);

    this.OrderDataSubscribe = this.http.get(API_URL + 'auth/info/' + this.get_user_dtls.authority + '/' + this.get_user_dtls.email).subscribe(
      (response: any) => {
        this.userData = response;
        console.log("response", this.userData);

      },
      errRes => {
        console.log("error handeller >>@@", errRes);
        // this.toastrService.show(errRes.error.message);
        this.loader = false;
      }
    );
  }
  getOrderList() {
    // this.currentPage = 0;
    this.loader = true;
    // getProductList start
    this.OrderDataSubscribe = this.http.get(API_URL + 'userOrder/getUserOrder/' + this.userId + '?page=' + this.currentPage + '&limit=' + this.limit + "&sort=" + this.sort + '&sortBy=id').subscribe(
      (response: any) => {
        console.log("response", response);
        this.OrderlistItems = response.data;
        console.log("this.products", this.OrderlistItems);
        if (response.status === 200) {
          this.toastrService.success(response.message);
        } else {
          // this.toastrService.error(response.message);
        }
        this.loader = false;
      },
      errRes => {
        console.log("error handeller >>@@", errRes);
        // this.toastrService.show(errRes.error.message);
        this.loader = false;
      }
    );
    // getProductList end
  }
  askCancleOrder(orderId, product, content) {

    this.modalService.open(content, { size: 'md' });
    this.orderId = orderId;
    this.selectedProduct = product;
    console.log(this.selectedProduct, this.get_user_dtls, this.userData);

  }

  /* Validation start */
  errorList: any = {};
  checkValidtion(fieldNAme: any) {
    console.log('fieldNAme');
    const onlyAB = /^[A-Z]+$/i;
    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const numberRegex = '^[0-9]*$';
    const noSpacalchar = "^[a-zA-Z0-9 ]+$";
    const onlyAlpha = /\d+/g;
    const emptySpace = /^ *$/;

    if (fieldNAme == 'comment') {
      // address
      if (this.model.comment) {
        console.log('this.model.comment.match(emptySpace)', this.model.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comment.match(emptySpace) !== null){
          this.errorList.comment = 'Empty Space not allowed';
        } else {
          this.errorList.comment = '';
        }
      } else {
        this.errorList.comment = 'Please write cancelation reason..';
      }
    }
    //returnComment
    if (fieldNAme == 'returnComment') {
      // address
      if (this.model.comment) {
        console.log('this.model.comment.match(emptySpace)', this.model.comment.match(emptySpace));
        // pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
        if(this.model.comment.match(emptySpace) !== null){
          this.errorList.returnComment = 'Empty Space not allowed';
        } else {
          this.errorList.returnComment = '';
        }
      } else {
        this.errorList.returnComment = 'Please write return reason.';
      }
    }
  }
  /* Validation end */

  cancleOrder(form: NgForm) {
    console.log("item", this.orderId, this.selectedProduct.productId, this.selectedProduct);
    var data: any = {}, orderStatusDetails: any = {};
    if (this.selectedProduct.orderStatusDetails) {

      orderStatusDetails = {
        orderItemStatus: "Request for cancelation",
        orderStatusDetails: {
          cancelOrderDetails: this.selectedProduct.orderStatusDetails.cancelOrderDetails,
          cancelRequestDetails: this.selectedProduct.orderStatusDetails.cancelRequestDetails,
          command: this.selectedProduct.orderStatusDetails.command,
          deliveryDetails: this.selectedProduct.orderStatusDetails.deliveryDetails,
          ordersDetails: this.selectedProduct.orderStatusDetails.ordersDetails,
          packedDetails: this.selectedProduct.orderStatusDetails.packedDetails,
          shippedDetails: this.selectedProduct.orderStatusDetails.shippedDetails,
          cancelFromUser: {
            comment: form.value.comment,
            reason: form.value.cancelReason,
            dateTime: this.currentDateTime,
            canceledBy: 'USER',
            updatedBy: {
              firstName: this.userData.firstName,
              lastName: this.userData.lastName,
              email: this.userData.email,
              mobileNo: this.userData.mobileNo,
              uId: this.userData.uId,
            }
          }
        }
      }

    }
    else {
      orderStatusDetails = {
        orderItemStatus: "Request for cancelation",
        orderStatusDetails: {
          cancelFromUser: {
            comment: form.value.comment,
            reason: form.value.cancelReason,
            dateTime: this.currentDateTime,
            canceledBy: 'USER',
            updatedBy: {
              firstName: this.userData.firstName,
              lastName: this.userData.lastName,
              email: this.userData.email,
              mobileNo: this.userData.mobileNo,
              uId: this.userData.uId,
            }
          }
        }
      }
    }
    console.log(orderStatusDetails);

    this.cancelOrderDataSubscribe = this.http.put(API_URL + 'userOrder/orderStatusUpdate/' + this.orderId + '/' + this.selectedProduct.productId, orderStatusDetails).subscribe(
      (response: any) => {
        // this.stockRecorver(this.selectedProduct)
        this.toastrService.success(response.message);
        form.reset();
        this.modalService.dismissAll();
      },
      errRes => {
        console.log("error handeller >>@@", errRes);

        this.toastrService.error(errRes.error.message);
      }
    );
    setTimeout(() => {
      this.getOrderList();
    }, 1000);

  }
  // cancel order end
  // returnOrder
  returnOrder(form: NgForm) {
    console.log("item", this.orderId, this.selectedProduct.productId, this.selectedProduct);
    var data: any = {}, orderStatusDetails: any = {};
    orderStatusDetails = {
      orderItemStatus: "returnRequest",
      orderStatusDetails: {
        cancelOrderDetails: this.selectedProduct.orderStatusDetails.cancelOrderDetails,
        cancelRequestDetails: this.selectedProduct.orderStatusDetails.cancelRequestDetails,
        command: this.selectedProduct.orderStatusDetails.command,
        deliveryDetails: this.selectedProduct.orderStatusDetails.deliveryDetails,
        ordersDetails: this.selectedProduct.orderStatusDetails.ordersDetails,
        packedDetails: this.selectedProduct.orderStatusDetails.packedDetails,
        shippedDetails: this.selectedProduct.orderStatusDetails.shippedDetails,
        cancelFromUser: this.selectedProduct.orderStatusDetails.cancelFromUser,
        returnFromUser: {
          comment: form.value.comment,
          reason: form.value.returnReason,
          dateTime: this.currentDateTime,
        }
      }
    }
    console.log(orderStatusDetails);

    this.cancelOrderDataSubscribe = this.http.put(API_URL + 'userOrder/orderStatusUpdate/' + this.orderId + '/' + this.selectedProduct.productId, orderStatusDetails).subscribe(
      (response: any) => {
        this.stockRecorver(this.selectedProduct)
        this.toastrService.success(response.message);
        form.reset();
        this.modalService.dismissAll();
      },
      errRes => {
        console.log("error handeller >>@@", errRes);

        this.toastrService.error(errRes.error.message);
      }
    );
    setTimeout(() => {
      this.getOrderList();
    }, 1000);

  }
  // returnOrder end
  stockRecorver(data) {
    this.stockRecorverSubscribe = this.http.put(API_URL + 'designerProduct/stockRecoverService', data).subscribe((response: any) => { },
      errRes => { this.toastrService.error(errRes.error.message); });
  }
  ngOnDestroy() {
    if (this.OrderDataSubscribe !== undefined) {
      this.OrderDataSubscribe.unsubscribe();
    }
    if (this.cancelOrderDataSubscribe !== undefined) {
      this.cancelOrderDataSubscribe.unsubscribe();
    }
  }
}
