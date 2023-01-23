import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.page.html',
  styleUrls: ['./accounts-view.page.scss'],
})
export class AccountsViewPage implements OnInit {
 private  tableListSubscribe: Subscription;
  id: any;
  accountData: any = {};
  taxValue:any;
  constructor(private http: HttpClient,
    public toastController: ToastController,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonUtils: CommonUtils,
    private authService: AuthService,private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getAccountDataById();
  }
  getAccountDataById()
  {
    this.tableListSubscribe = this.http.get('account/view/'+this.id).subscribe(
      (res: any) => {
        this.accountData = res;
        this.accountData = {
          designer_return_amount:res.designer_return_amount[0],
          order_details:res.order_details[0],
          service_charge:res.service_charge,
          govt_charge:res.govt_charge[0],
          admin_details:res.admin_details,
          designer_details:res.designer_details,
          _id:res._id,
        }
        this.accountData.order_details.datetime = moment(this.accountData?.order_details?.datetime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
        this.accountData.order_details.delivery_datetime = moment(this.accountData?.order_details?.delivery_datetime,"YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
        if(res?.order_details[0]?.sales_price != 0)
        {
          this.taxValue = res?.order_details[0]?.sales_price - res?.order_details[0]?.hsn_amount;

        }else{
          this.taxValue = res?.order_details[0]?.mrp - res?.order_details[0]?.hsn_amount;
        }
      },
      (error: any) => {

      });
  }
  genaratePDF(order,identifier)
  {
    console.log('Data',order,identifier);
    
    if(identifier == 'orderinvoice')
    {
      let url = environment.apiUrl+"/userOrder/getOrderSummary/"+order
      window.open(url, "_blank");
    }else{
      let url = environment.apiUrl+"/account/getDesignerInvoice/"+order?.designer_return_amount?.order_id+"/"+order?.designer_details?.designer_id
      window.open(url, "_blank");
    }
    
  }
    // ----------- destroy unsubscription start ---------
    ngOnDestroy() {
      if (this.tableListSubscribe !== undefined) {
        this.tableListSubscribe.unsubscribe();
      }
    }
}
