import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Product } from '../classes/product';
import { LoginService } from '../services/auth/auth.service';
import { ProductsService } from '../services/products.service';
import { LoginNavService } from 'src/app/services/login-nav.service';
import { CommonUtils } from '../services/common-utils/common-utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwiperConfigInterface, SwiperPaginationInterface, SwiperScrollbarInterface } from 'ngx-swiper-wrapper';
import { GeolocationService } from '../services/geolocation.service';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];
  public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 'auto',
    keyboard: false,
    mousewheel: true,
    scrollbar: true,
    navigation: false,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };
  public products: Product[] = [];
  public bestSellerproducts: Product[] = []
  public newProducts: Product[] = []
  public recentViewproducts: Product[] = []
  allcompareproduct: any;
  private productDataSubscribe: Subscription;
  api_url: string;
  errorMsg: any;
  model: any = {};
  get_user_dtls: any;
  userId: any;
  isLogin: boolean = false;
  followapi_url: any;
  designerloader: boolean = false;
  public variantImage  :  any = ''; 
  public selectedItem  :  any = '';
  private designerListSubscribe: Subscription;
  private logoutDataSubscribe: Subscription;
  private designerFollowSubscribe: Subscription;
  designerListapi_url: string;
  
  
  constructor(private productsService: ProductsService,private http : HttpClient,
    private toastrService: ToastrService,
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private loginNav: LoginNavService, 
    private authService:LoginService,
    private commonUtils: CommonUtils,
    private modalService: NgbModal,
    private geolocationService: GeolocationService) {   }

  ngOnInit() {
  	// this.productsService.getProducts().subscribe(product => this.products = product);
    
    // this.allcompareproduct= JSON.parse(localStorage.getItem("compareItem"));
    // product get api
    
    
    this.commonFunction();

    this.geolocationService.getLocation().subscribe((response) => {
      console.log('geolocationService', response);
      
    })
  }
  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }
  commonFunction()
  {
    this.api_url = 'user/product/list';
   
    this.followapi_url = 'user/followDesigner'
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        // referesh cart list
      }
    });
    if(this.get_user_dtls)
    {
      this.designerListapi_url = 'designer/getDesignerDetails/all'+'?usermail='+this.get_user_dtls.email;
    }else{
      this.designerListapi_url = 'designer/getDesignerDetails/all';
    }
    this.getDesignerList();
    this.getbestDesignerProductList();
    this.getnewProductList();
    this.getrecentProductList();

  }
  getbestDesignerProductList()
  {
    this.productDataSubscribe = this.http.get(API_URL+this.api_url).subscribe(
      (response:any) => {
        this.bestSellerproducts = response;
        console.log("this.products",this.bestSellerproducts);
        for (let index = 0; index < this.bestSellerproducts.length; index++) {
          if(!this.bestSellerproducts[index].slug)
          {
            let name = this.bestSellerproducts[index].productDetails.productName.toLowerCase( );
            this.bestSellerproducts[index].slug = name.replace(/ /g, "-");
          }
          
        }
        // this.toastrService.success(response.message);
      },
      errRes => {
        if(errRes.error.message){
          this.errorMsg = errRes.error.message;
        }else if(errRes.error.messagee){
          this.errorMsg = errRes.error.messagee;
        } else {
          this.errorMsg = errRes.message
        }
        this.toastrService.error(this.errorMsg);
      }
    );
  }
  getnewProductList()
  {
    this.productDataSubscribe = this.http.get(API_URL+this.api_url).subscribe(
      (response:any) => {
        this.newProducts = response;
        console.log("this.products",this.newProducts);
        for (let index = 0; index < this.newProducts.length; index++) {
          if(!this.newProducts[index].slug)
          {
            let name = this.newProducts[index].productDetails.productName.toLowerCase( );
            this.newProducts[index].slug = name.replace(/ /g, "-");
          }
        }
        // this.toastrService.success(response.message);
      },
      errRes => {
        if(errRes.error.message){
          this.errorMsg = errRes.error.message;
        }else if(errRes.error.messagee){
          this.errorMsg = errRes.error.messagee;
        } else {
          this.errorMsg = errRes.message
        }
        this.toastrService.error(this.errorMsg);
      }
    );
  }
  getrecentProductList()
  {
    this.productDataSubscribe = this.http.get(API_URL+this.api_url).subscribe(
      (response:any) => {
        this.recentViewproducts = response;
        console.log("this.products",this.recentViewproducts);
        for (let index = 0; index < this.recentViewproducts.length; index++) {
          if(!this.recentViewproducts[index].slug)
          {
            let name = this.recentViewproducts[index].productDetails.productName.toLowerCase( );
            this.recentViewproducts[index].slug = name.replace(/ /g, "-");
          }
        }
        // this.toastrService.success(response.message);
      },
      errRes => {
        if(errRes.error.message){
          this.errorMsg = errRes.error.message;
        }else if(errRes.error.messagee){
          this.errorMsg = errRes.error.messagee;
        } else {
          this.errorMsg = errRes.message
        }
        this.toastrService.error(this.errorMsg);
      }
    );
  }
// opfollow start
// onfollow end
  public bestDesignerproductSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    nextArrow:"<div class='nav-btn next-slide fa fa-angle-right'></div>",
    prevArrow:"<div class='nav-btn prev-slide fa fa-angle-left'></div>",
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots:false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:false,
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false,
          dots:false,
        }
      }
    ]
  };
  public newproductSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    nextArrow:"<div class='nav-btn next-slide fa fa-angle-right'></div>",
    prevArrow:"<div class='nav-btn prev-slide fa fa-angle-left'></div>",
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots:false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:false,
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false,
          dots:false,
        }
      }
    ]
  };
  public recentViewproductSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    nextArrow:"<div class='nav-btn next-slide fa fa-angle-right'></div>",
    prevArrow:"<div class='nav-btn prev-slide fa fa-angle-left'></div>",
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots:false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:false,
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false,
          dots:false,
        }
      }
    ]
  };
  public addToCompare(product: Product) {
    console.log(product);
    this.productsService.addToCompare(product);
    this.allcompareproduct= JSON.parse(localStorage.getItem("compareItem"));    
  }
  // Change variant images
  public changeVariantImage(image) {
    this.variantImage = image;
    this.selectedItem = image; 
  }
  designerlist=[];
  getDesignerList()
  {
    this.designerloader = true;
    this.designerlist=[];
    console.log("UserName",this.get_user_dtls);
    
    this.designerListSubscribe = this.http.get(API_URL+this.designerListapi_url).subscribe(
      (response:any) => {
        console.log("Designerlist",response);
        // this.designerlist = response;
        for (let index = 0; index < response.length; index++) {
          if(response[index].productCount > 0)
          {
            this.designerlist.push(response[index]);
          }
          
        }
        this.designerloader = false;
        // this.toastrService.success(response.message);

      },
      errRes => {
        console.log("error handeller >>@@",errRes );
        this.designerloader = false;
        this.toastrService.error(errRes.error.message);
      }
    );
  }
  // openfollowModal start
  openfollowModal(_identifier,followmodal,designer:any) {
    console.log("_identifier", _identifier,designer);
    // this.model = designer;
      this.model = {
        designerId:designer.dId,
        userId:this.get_user_dtls.uid,
        isFollowing:true,
      }
    if(_identifier == 'follow')
    {
    }else if(_identifier == 'unfollow')
    {
      this.model.isFollowing=false;
      
    }
    this.designerFollowSubscribe = this.http.post(API_URL+this.followapi_url,this.model).subscribe(
        (response:any) => {
          console.log("response",response);
          if(response.status === 200){
            this.toastrService.success(response.message);
            this.modalService.dismissAll();
          }else {
          }
          this.getDesignerList();
        },
        errRes => {
          console.log("error handeller >>@@",errRes );
          if(errRes.error.message){
            this.errorMsg = errRes.error.message;
          }else if(errRes.error.messagee){
            this.errorMsg = errRes.error.messagee;
          } else {
            this.errorMsg = errRes.message
          }
          this.toastrService.error(this.errorMsg);
        }
      ); 
  }
  // openfollowModal end
  openLoginNav()
  {
    this.loginNav.addNavLogin();
  }
   // ----------- destroy unsubscription start ---------
  ngOnDestroy() {
    if (this.productDataSubscribe !== undefined) {
      this.productDataSubscribe.unsubscribe();
    }
    if (this.designerListSubscribe !== undefined) {
      this.designerListSubscribe.unsubscribe();
    }
    if (this.logoutDataSubscribe !== undefined) {
      this.logoutDataSubscribe.unsubscribe();
    }
    if (this.designerFollowSubscribe !== undefined) {
      this.designerFollowSubscribe.unsubscribe();
    }
    
  }
  // ----------- destroy unsubscription end ---------  
}
