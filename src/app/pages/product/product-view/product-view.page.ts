import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { ModalPage } from '../../modal/modal.page';
declare var $: any;
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductViewPage implements OnInit {
  showAmountdtl = false;
  productDataSubscribe: any;
  api_url: any;
  productDetail: any = {};
  afterDiscount: any;
  taxAmount: any = '';
  basicAmount: any = '';
  productId: string;
  permissionDataSubscribe: any;
  pagePermission: any;
  getColorListSubscribe: any;
  colourlist = [];
  designCustomizationFeatures = false;
  showHSNcode = false;
  discount: any;
  constructor(private http: HttpClient, private modalController: ModalController,
    private router: Router,
    private commonUtils: CommonUtils,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    private authService: AuthService,) { }

  ngOnInit() {
    this.commonFunction();
  }
  commonFunction() {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.getProductdetails();
    $.getScript('assets/js/sticky-kit.js');
    $.getScript('assets/js/menu.js');
    /*Check permission status start*/
    this.authService.globalparamsData.subscribe(res => {
      // console.log('res>>', res);
      if (res.authority == 'ADMIN') {
        this.permissionDataSubscribe = this.commonUtils.menuPermissionObservable.subscribe(data => {
          if (data) {
            // console.log('menu>>', data);
            // console.log('this.router.url>>', this.router.url);

            let pageUrl = this.router.url.split("/");
            // console.log('pageUrl', pageUrl);

            for (let item of data) {
              if (item.modDetails.url == 'product-list') {
                if (item.modPrivs.list == true) {
                  // console.log('-----Permission Granted-----');
                  this.pagePermission = item;
                  // console.log('this.pagePermission', this.pagePermission);
                  this.api_url = 'user/viewAdmin/' + this.productId;
                  this.getProductdetails();
                  break;
                } else {
                  // console.log('-------No Permission--------');
                  this.router.navigateByUrl('/error');
                }

              }
            }
          }
        })
      } else if (res.authority == 'DESIGNER') {
        this.api_url = 'user/viewAdmin/' + this.productId;
        this.getProductdetails();
      }
      // else  {
      //   this.router.navigateByUrl('/error');
      // }
    })
    /*Check permission status end*/
  }
  getProductdetails() {
    // console.log("response----",this.productDetail);

    this.productDataSubscribe = this.http.get(this.api_url).subscribe(
      (response: any) => {
        // console.log("response----",response);

        this.productDetail = response;
        if (response.productId == null) {
          this.router.navigateByUrl('/error');
        }
        // console.log("response----",this.productDetail);


        var discountAmount: any, taxAmount: number, amount: number;
        amount = parseInt(((100 * response?.mrp) / (100 + response?.deal?.taxAmount?.taxValue)).toFixed(0))
        this.basicAmount = parseInt(((100 * response?.mrp) / (100 + response?.deal?.taxAmount?.taxValue)).toFixed(0))
        discountAmount = parseInt(((100 * response?.deal?.salePrice) / (100 + response?.deal?.taxAmount?.taxValue)).toFixed(0))
        this.afterDiscount = parseInt(((100 * response?.deal?.salePrice) / (100 + response?.deal?.taxAmount?.taxValue)).toFixed(0))
        this.discount = response?.deal?.dealValue;
        // if(response?.deal?.dealType == "Flat")
        // {
        //   this.discount = response?.deal?.dealValue;
        // }else if(response?.deal?.dealType == "Percentage")
        // {
        //   this.discount =parseInt(((response?.mrp * response?.deal?.dealValue) / 100).toFixed(0));          
        // }
        if (this.afterDiscount > this.basicAmount) {
          this.discount = this.afterDiscount - this.basicAmount;

        }
        else {
          this.discount = this.basicAmount - this.afterDiscount;
        }
        if (response?.deal?.dealType != 'None') {
          if (response?.deal?.salePrice < discountAmount) {
            this.taxAmount = parseInt((discountAmount - response?.deal?.salePrice).toFixed(0))
          }
          else {
            this.taxAmount = parseInt((response?.deal?.salePrice - discountAmount).toFixed(0))
          }
        }
        else {
          this.taxAmount = (response?.mrp - amount);
        }
        this.getColorList();

      },
      errRes => {
        // console.log("error handeller >>@@",errRes );
        if (errRes.status == 400) {
          this.router.navigateByUrl('/error');
        }

      }
    );
  }
  productColors: any = [];
  getColorList() {
    this.getColorListSubscribe = this.http.get("adminMData/coloreList").subscribe(
      (res: any) => {
        this.colourlist = res;
        this.productColors = [];
        for (let index = 0; index < this.colourlist.length; index++) {
          if (this.productDetail.colour == this.colourlist[index].colorName) {
            this.productColors.push(this.colourlist[index].colorValue)
          }

        }
        // console.log("color list.....",this.productColors);

      },
      (error) => {
      })
  }
  //getColorList end
  // openRejectemodal start
  async openRejectemodal(_identifier, _item, _items) {
    // console.log('openRejectemodal ...........>>', _identifier,_item);

    let profile_modal;
    profile_modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'mymodalClass small rejectemodal',
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
        if (getdata.data == 'submitClose') {

        }

      });

    return await profile_modal.present();
  }
  // openRejectemodal end
  public slideRightConfig: any = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
  };
}
