import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/auth/auth.service';
import { LoginNavService } from 'src/app/services/login-nav.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-designer-card',
  templateUrl: './designer-card.component.html',
  styleUrls: ['./designer-card.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class DesignerCardComponent implements OnInit {
  private designerListSubscribe: Subscription;
  private designerFollowSubscribe: Subscription;
  showToggle = true;
  api_url: string;
  designerlist: any = [];
  errorMsg: any;
  followapi_url: string;
  model: any = {};
  logoutDataSubscribe: any;
  get_user_dtls: any;
  getUserDetailsList_api: string;
  private getUserDetailss: Subscription;
  userDetailsFromApi: any;
  userdata: any;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  gridMode: boolean = true;
  type;
  loader: boolean;
  designerType: string;
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  innerWidth: number;
  innerheight: any;
  designerList_api: string;
  currentLatLng;
  constructor(private http: HttpClient,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private authService: LoginService,
    private loginNav: LoginNavService,) {
    this.activatedRoute.params.subscribe(event => {
      this.type = event.type
      console.log("Route event", event);
      this.ngOnInit()

    });
    this.getPosition().then(pos => {
      console.log(pos);
      this.currentLatLng = pos;
    });
  }

  ngOnInit() {
    
    
    this.commonFunction();
    this.getPosition().then(pos => {
      this.currentLatLng = pos;
      console.log('currentLatLng', this.currentLatLng);

      this.commonFunction();
    });
  }
  // commonFunction start
  commonFunction() {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.getDesignerList();

    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt: any) => {
      // this.onResize(event)
      this.innerWidth = window.innerWidth;
      // console.log('event: ',evt.target.innerHeight, this.innerWidth)
      this.innerheight = evt.target.innerHeight;
      console.log(this.innerWidth);
      if (this.innerWidth <= 510) {
        this.showToggle = false;
        this.gridMode = true;
      } else {
        this.showToggle = true;
        // this.gridMode = true;
      }
    });
    this.gridMode = true;
    // this.type = this.activatedRoute.snapshot.params.type;
    if (this.activatedRoute.snapshot.params.type == 'all') {
      this.designerType = 'Pop'
    }
    else {
      this.designerType = this.activatedRoute.snapshot.params.type;
    }
    console.log("Page Name", this.type);

    // this.api_url = "designer/getDesignerDetails/"+this.type;


    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        console.log('this.designerList_api ', this.designerList_api);
        this.getUserDetailsList_api = 'auth/info/' + this.get_user_dtls.authority + '/' + this.get_user_dtls.email;
      }
    });
    // this.getUserDetailsList();
  }
  // commonFunction end

  // user location start
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resp => {
          resolve({
            lng: resp.coords.longitude.toFixed(7),
            lat: resp.coords.latitude.toFixed(7)
          });
        },
        err => {
          reject(err);
        }
      );
    });
  }
  // user location end

  getUserDetailsList() {

    this.getUserDetailss = this.http.get(API_URL + this.getUserDetailsList_api).subscribe(
      (res: any) => {
        this.userdata = res;
        console.log("User Data", res, this.userdata);

      },
      errRes => {
        console.log("Get moduleList >", errRes);
      }
    );
  }
  // changeType start
  changeType(_type) {
    this.designerType = _type;
    this.getDesignerList();
  }
  // changeType end
  // getDesignerList start
  getDesignerList() {
    console.log('currentLatLng', this.currentLatLng);
    if (!this.currentLatLng) {
      this.currentLatLng = {
        lat : "",
        lng : ""
      }
    }
    if (this.get_user_dtls) {
      this.designerList_api = "designer/getDesignerDetails/" + this.designerType + '?usermail=' + this.get_user_dtls.email+"&longitude=" + this.currentLatLng.lng + "&latitude=" + this.currentLatLng.lat;
    }
    else {
      this.designerList_api = "designer/getDesignerDetails/" + this.designerType+"?longitude=" + this.currentLatLng.lng + "&latitude=" + this.currentLatLng.lat
    }
    this.designerlist = [];
    this.loader = true;
    this.designerListSubscribe = this.http.get(API_URL + this.designerList_api).subscribe(
      (response: any) => {
        console.log("response", response);
        this.designerlist = [];
        for (let index = 0; index < response.length; index++) {
          if (response[index].productCount > 0) {
            this.designerlist.push(response[index]);
          }

        }
        // }
        this.loader = false;
        // this.toastrService.success(response.message);

      },
      errRes => {
        this.loader = false;
        this.toastrService.error(errRes.error.message);
      }
    );
  }

  // changeDisplay start
  changeDisplay(_identifier) {


    if (_identifier == 'grid') {
      this.gridMode = true;
    } else if (_identifier == 'list') {
      this.gridMode = false;
    }
    console.log('_identifier', _identifier + this.gridMode);
  }
  // for follow designer start
  //  rating start
  countStar(star) {
    this.selectedValue = star;
    this.model.raiting = star;
    console.log('Value of star', star, this.model);


  }
  //  rating end
  // openfollowModal start
  // openfollowModal start
  openfollowModal(_identifier, followmodal, designer) {
    console.log("_identifier", _identifier, designer);

    console.log("User", this.get_user_dtls, this.selectedValue);
    this.model = {
      designerId: designer.dId,
      userId: this.get_user_dtls.uid,
      isFollowing: true,
    }
    if (_identifier == 'follow') {
    } else if (_identifier == 'unfollow') {
      this.model.isFollowing = false;

    }

    this.designerFollowSubscribe = this.http.post(API_URL + 'user/followDesigner', this.model).subscribe(
      (response: any) => {
        this.toastrService.success(response.message);
        this.getDesignerList();
      },
      errRes => {
        this.toastrService.error(errRes.error.message);
      }
    );
  }
  // onfollow end
  // onFollow submit start
  onSubmitFollowform(form: NgForm) {
    console.log(this.userdata);

    console.log("form.value", form.value);
    // var data ={
    //   comment:form.value.
    // }
    this.designerFollowSubscribe = this.http.post(API_URL + this.followapi_url, form.value).subscribe(
      (response: any) => {
        console.log("response", response);
        if (response.status === 200) {
          this.toastrService.success(response.message);
          this.modalService.dismissAll();
          form.reset();
          this.selectedValue = 0;
          this.model.raiting = 0;
        } else {
        }
        this.getDesignerList();
      },
      errRes => {
        console.log("error handeller >>@@", errRes);
        if (errRes.error.message) {
          this.errorMsg = errRes.error.message;
        } else if (errRes.error.messagee) {
          this.errorMsg = errRes.error.messagee;
        } else {
          this.errorMsg = errRes.message
        }
        this.toastrService.error(this.errorMsg);
      }
    );
  }
  // onFollow submit end

  openLoginNav() {
    // this.showScreen = 'login';
    this.loginNav.addNavLogin();
  }

  ngOnDestroy() {
    if (this.designerListSubscribe !== undefined) {
      this.designerListSubscribe.unsubscribe();
    } else if (this.designerFollowSubscribe !== undefined) {
      this.designerFollowSubscribe.unsubscribe();
    } else if (this.getUserDetailss !== undefined) {
      this.getUserDetailss.unsubscribe();
    }

  }
  // ngOnDestroy end
}
