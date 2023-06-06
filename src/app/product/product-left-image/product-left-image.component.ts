import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../classes/product';
import { ProductsService } from '../../services/products.service';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';
import { Observable, of, Subscription } from 'rxjs';
import { SelectItem } from 'primeng/api';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { LoginNavService } from 'src/app/services/login-nav.service';
import { environment } from 'src/environments/environment';
declare var $: any;
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-product-left-image',
  templateUrl: './product-left-image.component.html',
  styleUrls: ['./product-left-image.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductLeftImageComponent implements OnInit {

  public products: Product[] = [];
  public counter: number = 1;
  selectedSize: any;
  public screenWidth
  public slideRightNavConfig
  productDetail: any = {}
  currentState: string;
  public productImages: String[] = [];
  colour: string;
  bigImg = "assets/images/fashion/product/10.jpg";
  smallImgs = [
    { url: "assets/images/fashion/product/17.jpg" },
    { url: "assets/images/fashion/product/16.jpg" },
    { url: "assets/images/fashion/product/10.jpg" }
  ]
  imageSrc: string | ArrayBuffer;
  imageurls = [];
  base64String: string;
  name: string;
  imagePath: string;
  private productDataSubscribe: Subscription;
  api_url: string;
  productId: string;
  errorMsg: any;
  listapi_url: string;
  product: any;
  private getDesignerSubscribe: Subscription;
  designer: any;
  save: boolean;
  designerapi_url: string;
  followapi_url: string;
  private designerFollowSubscribe: Subscription;
  model: any = {};
  private logoutDataSubscribe: Subscription;
  get_user_dtls: any;
  userdata: any;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  isFollowing: boolean;
  size;
  selectedColor: any;
  designerPic: string;
  follwerCount: any;
  productCount: any;
  customsize: string;
  designCustomizationFeatures: boolean = false;
  itemId: any;
  sizeType: any = false;
  private designerMencustomchartSubscribe: Subscription;
  customSize: boolean = false;
  customization: boolean;
  measurementObject: any = {};
  body: any = {};

  private mencustomchartListSubscribe: Subscription;
  mesormentList: any = [];
  actionType: string = 'add';
  mesormentId: any;
  sizeTypee: any = "inch";
  sizeTypeeWomen: any = "inch";
  mesormentFor: string = "";
  gender: any;
  designerMesormentChart: any = {};
  private getColorListSubscribe: Subscription;
  //Get Product By Id
  constructor(private route: ActivatedRoute, private router: Router,
    public productsService: ProductsService, private wishlistService: WishlistService,
    private cartService: CartService, private http: HttpClient,
    private toastrService: ToastrService, private loginNav: LoginNavService,
    private activatedRoute: ActivatedRoute, private modalService: NgbModal, private authService: LoginService) {
    // this.route.params.subscribe(params => {
    //   const id = +params['id'];
    //   this.productsService.getProduct(id).subscribe(product => this.productDetail = product )
    // });
    // this.onResize();
  }

  ngOnInit() {
    // this.productsService.getProducts().subscribe(product => this.products = product);
    this.commonFunction();
    $.getScript('assets/js/sticky-kit.js');
    $.getScript('assets/js/menu.js');
    this.scrollToTop();
  }
  isReadMore = true

  // commonFunction start
  commonFunction() {
    this.sizeTypee = "inch";
    this.productId = this.activatedRoute.snapshot.params.id;

    this.listapi_url = 'user/product/list';
    this.followapi_url = 'user/followDesigner'
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        console.log("this.get_user_dtls");
        this.getProductByid();

      }
    });
    if (!this.get_user_dtls) {
      this.getProductByid();
      console.log("!this.get_user_dtls");

    }
    this.getProductList();

  }
  // commonFunction end
  // getProductByid start
  ImageForSlider: any = [];
  getProductByid() {

    if (this.get_user_dtls) {
      this.api_url = 'user/view/' + this.productId + '?userId=' + this.get_user_dtls.uid
    } else {
      this.api_url = 'user/view/' + this.productId;
    }
    // this.api_url+'?userId='+this.get_user_dtls.uid
    this.productDataSubscribe = this.http.get(API_URL + this.api_url).subscribe(
      (response: any) => {
        this.productDetail = response;

        if (response.categoryName == 'Men' || response.categoryName == 'Kids') {
          this.mesormentFor = 'Men/Kids'
          this.gender = 'men';
        } else {
          this.mesormentFor = 'Women'
          this.gender = 'women';

        }
        if (this.get_user_dtls) {
          this.getMencustomchart();
        }
        this.getDesignerMencustomchart();
        // this.mesormentFor = 'Men/Kids';
        // this.gender = 'men';
        console.log("response.categoryName", response.categoryName);

        for (let i = 0; i < this.productDetail.images.length; i++) {
          if (this.productDetail.images[i].large != '') {
            this.ImageForSlider.push(this.productDetail.images[i].large);

          }

        }
        this.getColorListSubscribe = this.http.get(API_URL + "adminMData/coloreList").subscribe(
          (res: any) => {
            var colourlist: any[] = res;
            for (let index = 0; index < colourlist.length; index++) {
              if (this.productDetail.colour == colourlist[index].colorName) {
                this.colour = colourlist[index].colorValue
              }

            }
            console.log("color list.....", this.colour);

          },
          (error) => {
            this.toastrService.error(error.message);
          })
        this.getDesignerById();
        // this.toastrService.success(response.message);
        console.log('productDetail', this.productDetail);
      },
      errRes => {
        console.log("error handeller >>@@", errRes);
        this.toastrService.error(errRes.message);
        this.router.navigateByUrl('/error');
      }
    );
  }
  // getProductByid end
  // getProductList start
  getProductList() {

    this.productDataSubscribe = this.http.get(API_URL + this.listapi_url).subscribe(
      (response: any) => {
        console.log("response", response);
        this.products = response;
        console.log("this.products", this.products);
        // this.toastrService.success(response.message);
      },
      errRes => {
        console.log("error handeller >>@@", errRes);
        this.toastrService.success(errRes.message);
      }
    );
  }
  // getProductList end
  scrollToTop() {
    console.log('a');

  }

  changeImg(url) {
    this.bigImg = url;
  }
  public slideRightConfig: any = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
  };
  public reviewslidersconfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    dots: true,
    nextArrow: "<div class='nav-btn next-slide fa fa-angle-right'></div>",
    prevArrow: "<div class='nav-btn prev-slide fa fa-angle-left'></div>",
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrow: false,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrow: false,
        }
      }
    ]
  };
  public productSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    nextArrow: "<div class='nav-btn next-slide fa fa-angle-right'></div>",
    prevArrow: "<div class='nav-btn prev-slide fa fa-angle-left'></div>",
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
      }
    },
    {
      breakpoint: 427,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
      }
    }
    ]
  };
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 576) {
      return this.slideRightNavConfig = {
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-right-slick',
        arrows: false,
        infinite: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true
      }
    } else {
      return this.slideRightNavConfig = {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-right-slick',
        arrows: false,
        infinite: true,
        centerMode: false,
        dots: false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }



  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  // Change size variant
  public changeSizeVariant(variant) {
    this.selectedSize = variant;
    this.customSize = false;
    this.customization = false;
    this.measurementObject = {};
  }
  public changeColorVariant(variant) {
    this.selectedColor = variant;
    console.log(this.selectedColor);

  }
  // Add to cart
  public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    product.customization = this.customization;
    product.selectedSize = this.selectedSize;
    product.measurementObject = this.measurementObject;
    this.cartService.addToCart(product, parseInt(quantity));
  }

  // Add to cart
  public buyNow(product: Product, quantity) {
    if (quantity > 0)
      this.cartService.addToCart(product, parseInt(quantity));
    this.router.navigate(['/home/address']);
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }


  // scroll event detect
  // isFixedHeader;
  // onScrollHedearFix(event) {
  //   console.log('scroll onnnnnnnnn', event.detail.scrollTop);
  //   if (event.detail.scrollTop > 35) {
  //     // console.log("scrolling down, hiding footer...iffffffffffff");
  //     this.isFixedHeader = true;
  //   } else {
  //     // console.log("scrolling up, revealing footer...elseeeeeeeeeeeeeee");
  //     this.isFixedHeader = false;
  //   };
  // }
  //  readURL(e) {
  //   if (e.target.files && e.target.files[0]) {
  //       const file = e.target.files[0];

  //       const reader = new FileReader();
  //       reader.onload = e => this.imageSrc = reader.result;

  //       reader.readAsDataURL(file);
  //   }
  // }
  // getDesignerList start
  getDesignerById() {
    this.designerapi_url = 'user/designerProfile/' + this.productDetail.designerId;
    this.getDesignerSubscribe = this.http.get(API_URL + this.designerapi_url).subscribe(
      (response: any) => {
        this.designer = response;
        this.designerPic = response.designerProfileEntity.designerProfile.profilePic;
        this.follwerCount = response.follwerCount;
        this.productCount = response.productCount;
        console.log("DesignerisFollowing", this.designer.isFollowing);
        if (this.designer.isFollowing == true) {
          this.isFollowing = true
        } else if (this.designer.isFollowing == false) {
          this.isFollowing = false
        }
        if (response.status === 200) {
          //  this.toastrService.success(response.message);

        } else {
          // this.toastrService.error(response.message);
        }
      },
      errRes => {
        console.log("error handeller >>@@", errRes);

        this.toastrService.success(errRes.message);
      }
    );

  }
  // getDesignerList end
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageurls.push({ base64String: event.target.result, });
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  openModal(updatemodal) {
    this.modalService.open(updatemodal, { size: 'md' });
  }
  // to close modal   -> this.modalService.dismissAll()
  removeImage(i) {
    this.imageurls.splice(i, 1);
  }
  //  rating start
  countStar(star) {
    this.selectedValue = star;
    this.model.raiting = star;
    console.log('Value of star', star, this.model);


  }
  //  rating end
  // opfollow start
  openfollowModal(identifire, designer) {
    this.model = {
      designerId: designer,
      userId: this.get_user_dtls.uid,
      isFollowing: true
    }
    if (identifire == 'unfollow') {
      this.model.isFollowing = false;
    }
    this.designerFollowSubscribe = this.http.post(API_URL + 'user/followDesigner', this.model).subscribe(
      (response: any) => {
        this.toastrService.success(response.message);
        this.getDesignerById();
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
        this.getDesignerById();
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

  custom_modal(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  // convartValue(form:NgForm,identifire)
  // {
  //   console.log(identifire,form.value,this.sizeType);
  //   if(identifire == 'Women' && this.sizeType == true)
  //   {
  //     this.sizeTypee = "CMS";
  //     this.model.neck = form.value.neck * 2.54;
  //     this.model.crotchLength = form.value.crotchLength * 2.54;
  //     this.model.shoulder = form.value.shoulder * 2.54;
  //     this.model.waist = form.value.waist * 2.54;
  //     this.model.bust = form.value.bust * 2.54;
  //     this.model.hip = form.value.hip * 2.54;
  //     this.model.ribCage = form.value.ribCage * 2.54;
  //     this.model.topHip = form.value.topHip * 2.54;
  //     this.model.sideNeck = form.value.sideNeck * 2.54;
  //     this.model.waistToHip = form.value.waistToHip * 2.54;
  //     this.model.backSide = form.value.backSide * 2.54;
  //     this.model.frontSide = form.value.frontSide * 2.54;
  //     this.model.backWidth = form.value.backWidth * 2.54;
  //     this.model.armscyeDepth = form.value.armscyeDepth * 2.54;
  //     this.model.waistToKnee = form.value.waistToKnee * 2.54;
  //     this.model.kneeToAnkle = form.value.kneeToAnkle * 2.54;
  //     this.model.armhole = form.value.armhole * 2.54;
  //     this.model.thigh = form.value.thigh * 2.54;
  //     this.model.topArm = form.value.topArm * 2.54;
  //     this.model.knee = form.value.knee * 2.54;
  //     this.model.elbow = form.value.elbow * 2.54;
  //     this.model.calfCircumference = form.value.calfCircumference * 2.54;
  //     this.model.wrist = form.value.wrist * 2.54;
  //     this.model.highAnkle = form.value.highAnkle * 2.54;
  //     this.model.sleeveLength = form.value.sleeveLength * 2.54;
  //     this.model.ankle = form.value.ankle * 2.54;
  //     this.model.crotchDepth = form.value.crotchDepth * 2.54;
  //     this.model.waistToFloor = form.value.waistToFloor * 2.54;
  //   }
  //   if(identifire == 'Women' && this.sizeType == false)
  //   {
  //     this.sizeTypee = "inch";
  //     this.model.neck = form.value.neck / 2.54;
  //     this.model.crotchLength = form.value.crotchLength / 2.54;
  //     this.model.shoulder = form.value.shoulder / 2.54;
  //     this.model.waist = form.value.waist / 2.54;
  //     this.model.bust = form.value.bust / 2.54;
  //     this.model.hip = form.value.hip / 2.54;
  //     this.model.ribCage = form.value.ribCage / 2.54;
  //     this.model.topHip = form.value.topHip / 2.54;
  //     this.model.sideNeck = form.value.sideNeck / 2.54;
  //     this.model.waistToHip = form.value.waistToHip / 2.54;
  //     this.model.backSide = form.value.backSide / 2.54;
  //     this.model.frontSide = form.value.frontSide / 2.54;
  //     this.model.backWidth = form.value.backWidth / 2.54;
  //     this.model.armscyeDepth = form.value.armscyeDepth / 2.54;
  //     this.model.waistToKnee = form.value.waistToKnee / 2.54;
  //     this.model.kneeToAnkle = form.value.kneeToAnkle / 2.54;
  //     this.model.armhole = form.value.armhole / 2.54;
  //     this.model.thigh = form.value.thigh / 2.54;
  //     this.model.topArm = form.value.topArm / 2.54;
  //     this.model.knee = form.value.knee / 2.54;
  //     this.model.elbow = form.value.elbow / 2.54;
  //     this.model.calfCircumference = form.value.calfCircumference / 2.54;
  //     this.model.wrist = form.value.wrist / 2.54;
  //     this.model.highAnkle = form.value.highAnkle / 2.54;
  //     this.model.sleeveLength = form.value.sleeveLength / 2.54;
  //     this.model.ankle = form.value.ankle / 2.54;
  //     this.model.crotchDepth = form.value.crotchDepth / 2.54;
  //     this.model.waistToFloor = form.value.waistToFloor / 2.54;
  //   }
  //   if(identifire == 'Men/Kids' && this.sizeType == true)
  //   {
  //     this.sizeTypee = "CMS";
  //     this.model.neck = form.value.neck * 2.54;
  //     this.model.crotchLength = form.value.crotchLength * 2.54;
  //     this.model.shoulder = form.value.shoulder * 2.54;
  //     this.model.waist = form.value.waist * 2.54;
  //     this.model.waistToknee = form.value.waistToknee * 2.54;
  //     this.model.waistToAnkle = form.value.waistToAnkle * 2.54;
  //     this.model.chest = form.value.chest * 2.54;
  //     this.model.bust = form.value.bust * 2.54;
  //     this.model.hip = form.value.hip * 2.54;
  //     this.model.ribCage = form.value.ribCage * 2.54;
  //     this.model.topHip = form.value.topHip * 2.54;
  //     this.model.sideNeck = form.value.sideNeck * 2.54;
  //     this.model.waistToHip = form.value.waistToHip * 2.54;
  //     this.model.backSide = form.value.backSide * 2.54;
  //     this.model.frontSide = form.value.frontSide * 2.54;
  //     this.model.backWidth = form.value.backWidth * 2.54;
  //     this.model.armscyeDepth = form.value.armscyeDepth * 2.54;
  //     this.model.waistToKnee = form.value.waistToKnee * 2.54;
  //     this.model.kneeToAnkle = form.value.kneeToAnkle * 2.54;
  //     this.model.armhole = form.value.armhole * 2.54;
  //     this.model.thigh = form.value.thigh * 2.54;
  //     this.model.topArm = form.value.topArm * 2.54;
  //     this.model.knee = form.value.knee * 2.54;
  //     this.model.elbow = form.value.elbow * 2.54;
  //     this.model.calfCircumference = form.value.calfCircumference * 2.54;
  //     this.model.wrist = form.value.wrist * 2.54;
  //     this.model.highAnkle = form.value.highAnkle * 2.54;
  //     this.model.sleeveLength = form.value.sleeveLength * 2.54;
  //     this.model.ankle = form.value.ankle * 2.54;
  //     this.model.crotchDepth = form.value.crotchDepth * 2.54;
  //     this.model.waistToFloor = form.value.waistToFloor * 2.54;
  //     this.model.napeNaist = form.value.napeNaist * 2.54;

  //   }
  //   if(identifire == 'Men/Kids' && this.sizeType == false)
  //   {
  //     this.sizeTypee = "inch";
  //     this.model.neck = form.value.neck / 2.54;
  //     this.model.waistToknee = form.value.waistToknee / 2.54;
  //     this.model.waistToknee = form.value.waistToknee / 2.54;
  //     this.model.waistToAnkle = form.value.waistToAnkle / 2.54;
  //     this.model.crotchLength = form.value.crotchLength / 2.54;
  //     this.model.shoulder = form.value.shoulder / 2.54;
  //     this.model.waist = form.value.waist / 2.54;
  //     this.model.chest = form.value.chest / 2.54;
  //     this.model.bust = form.value.bust / 2.54;
  //     this.model.hip = form.value.hip / 2.54;
  //     this.model.ribCage = form.value.ribCage / 2.54;
  //     this.model.topHip = form.value.topHip / 2.54;
  //     this.model.sideNeck = form.value.sideNeck / 2.54;
  //     this.model.waistToHip = form.value.waistToHip / 2.54;
  //     this.model.backSide = form.value.backSide / 2.54;
  //     this.model.frontSide = form.value.frontSide / 2.54;
  //     this.model.backWidth = form.value.backWidth / 2.54;
  //     this.model.armscyeDepth = form.value.armscyeDepth / 2.54;
  //     this.model.waistToKnee = form.value.waistToKnee / 2.54;
  //     this.model.kneeToAnkle = form.value.kneeToAnkle / 2.54;
  //     this.model.armhole = form.value.armhole / 2.54;
  //     this.model.thigh = form.value.thigh / 2.54;
  //     this.model.topArm = form.value.topArm / 2.54;
  //     this.model.knee = form.value.knee / 2.54;
  //     this.model.elbow = form.value.elbow / 2.54;
  //     this.model.calfCircumference = form.value.calfCircumference / 2.54;
  //     this.model.wrist = form.value.wrist / 2.54;
  //     this.model.highAnkle = form.value.highAnkle / 2.54;
  //     this.model.sleeveLength = form.value.sleeveLength / 2.54;
  //     this.model.ankle = form.value.ankle / 2.54;
  //     this.model.crotchDepth = form.value.crotchDepth / 2.54;
  //     this.model.waistToFloor = form.value.waistToFloor / 2.54;
  //     this.model.napeNaist = form.value.napeNaist / 2.54;
  //   }
  // }
  convartValue(form: NgForm, identifire) {
    console.log(identifire, form.value, this.sizeType);
    if (identifire == 'Women' && this.sizeType == true) {
      this.sizeTypee = "CMS";
      this.model.neck = parseFloat((form.value.neck * 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength * 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder * 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist * 2.54).toFixed(2));
      this.model.bust = parseFloat((form.value.bust * 2.54).toFixed(2));
      this.model.hip = parseFloat((form.value.hip * 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage * 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip * 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck * 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip * 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide * 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide * 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth * 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth * 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee * 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle * 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole * 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh * 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm * 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee * 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow * 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference * 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist * 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle * 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength * 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle * 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth * 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor * 2.54).toFixed(2));
    }
    if (identifire == 'Women' && this.sizeType == false) {
      this.sizeTypee = "inch";
      this.model.neck = parseFloat((form.value.neck / 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength / 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder / 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist / 2.54).toFixed(2));
      this.model.bust = parseFloat((form.value.bust / 2.54).toFixed(2));
      this.model.hip = parseFloat((form.value.hip / 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage / 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip / 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck / 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip / 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide / 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide / 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth / 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth / 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee / 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle / 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole / 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh / 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm / 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee / 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow / 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference / 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist / 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle / 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength / 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle / 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth / 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor / 2.54).toFixed(2));
    }
    if (identifire == 'Men/Kids' && this.sizeType == true) {
      this.sizeTypee = "CMS";
      this.model.neck = parseFloat((form.value.neck * 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength * 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder * 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist * 2.54).toFixed(2));
      this.model.chest = parseFloat((form.value.chest * 2.54).toFixed(2));
      this.model.waistToAnkle = parseFloat((form.value.waistToAnkle * 2.54).toFixed(2));
      this.model.waistToknee = parseFloat((form.value.waistToknee * 2.54).toFixed(2));
      this.model.napeNaist = parseFloat((form.value.napeNaist * 2.54).toFixed(2)),
        this.model.bust = parseFloat((form.value.bust * 2.54).toFixed(2));
      this.model.hip = parseFloat((form.value.hip * 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage * 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip * 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck * 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip * 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide * 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide * 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth * 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth * 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee * 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle * 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole * 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh * 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm * 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee * 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow * 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference * 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist * 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle * 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength * 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle * 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth * 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor * 2.54).toFixed(2));
    }
    if (identifire == 'Men/Kids' && this.sizeType == false) {
      this.sizeTypee = "inch";
      this.model.neck = parseFloat((form.value.neck / 2.54).toFixed(2));
      this.model.crotchLength = parseFloat((form.value.crotchLength / 2.54).toFixed(2));
      this.model.shoulder = parseFloat((form.value.shoulder / 2.54).toFixed(2));
      this.model.waist = parseFloat((form.value.waist / 2.54).toFixed(2));
      this.model.waistToAnkle = parseFloat((form.value.waistToAnkle / 2.54).toFixed(2));
      this.model.waistToknee = parseFloat((form.value.waistToknee / 2.54).toFixed(2));
      this.model.chest = parseFloat((form.value.chest / 2.54).toFixed(2));
      this.model.bust = parseFloat((form.value.bust / 2.54).toFixed(2));
      this.model.napeNaist = parseFloat((form.value.napeNaist / 2.54).toFixed(2)),
        this.model.hip = parseFloat((form.value.hip / 2.54).toFixed(2));
      this.model.ribCage = parseFloat((form.value.ribCage / 2.54).toFixed(2));
      this.model.topHip = parseFloat((form.value.topHip / 2.54).toFixed(2));
      this.model.sideNeck = parseFloat((form.value.sideNeck / 2.54).toFixed(2));
      this.model.waistToHip = parseFloat((form.value.waistToHip / 2.54).toFixed(2));
      this.model.backSide = parseFloat((form.value.backSide / 2.54).toFixed(2));
      this.model.frontSide = parseFloat((form.value.frontSide / 2.54).toFixed(2));
      this.model.backWidth = parseFloat((form.value.backWidth / 2.54).toFixed(2));
      this.model.armscyeDepth = parseFloat((form.value.armscyeDepth / 2.54).toFixed(2));
      this.model.waistToKnee = parseFloat((form.value.waistToKnee / 2.54).toFixed(2));
      this.model.kneeToAnkle = parseFloat((form.value.kneeToAnkle / 2.54).toFixed(2));
      this.model.armhole = parseFloat((form.value.armhole / 2.54).toFixed(2));
      this.model.thigh = parseFloat((form.value.thigh / 2.54).toFixed(2));
      this.model.topArm = parseFloat((form.value.topArm / 2.54).toFixed(2));
      this.model.knee = parseFloat((form.value.knee / 2.54).toFixed(2));
      this.model.elbow = parseFloat((form.value.elbow / 2.54).toFixed(2));
      this.model.calfCircumference = parseFloat((form.value.calfCircumference / 2.54).toFixed(2));
      this.model.wrist = parseFloat((form.value.wrist / 2.54).toFixed(2));
      this.model.highAnkle = parseFloat((form.value.highAnkle / 2.54).toFixed(2));
      this.model.sleeveLength = parseFloat((form.value.sleeveLength / 2.54).toFixed(2));
      this.model.ankle = parseFloat((form.value.ankle / 2.54).toFixed(2));
      this.model.crotchDepth = parseFloat((form.value.crotchDepth / 2.54).toFixed(2));
      this.model.waistToFloor = parseFloat((form.value.waistToFloor / 2.54).toFixed(2));
    }
  }
  // onSubmitchart start
  onSubmitcustomchartform(form: NgForm) {
    this.customization = true;
    this.selectedSize = "Custom";
    var measurementJSON: any = {};
    if (this.gender == "women") {
      measurementJSON = {
        neck: form.value.neck,
        crotchLength: form.value.crotchLength,
        shoulder: form.value.shoulder,
        waist: form.value.waist,
        bust: form.value.bust,
        hip: form.value.hip,
        ribCage: form.value.ribCage,
        topHip: form.value.topHip,
        sideNeck: form.value.sideNeck,
        waistToHip: form.value.waistToHip,
        backSide: form.value.backSide,
        frontSide: form.value.frontSide,
        backWidth: form.value.backWidth,
        waistToKnee: form.value.waistToKnee,
        armscyeDepth: form.value.armscyeDepth,
        kneeToAnkle: form.value.kneeToAnkle,
        armhole: form.value.armhole,
        thigh: form.value.thigh,
        topArm: form.value.topArm,
        knee: form.value.knee,
        elbow: form.value.elbow,
        calfCircumference: form.value.calfCircumference,
        wrist: form.value.wrist,
        highAnkle: form.value.highAnkle,
        sleeveLength: form.value.sleeveLength,
        ankle: form.value.ankle,
        crotchDepth: form.value.crotchDepth,
        waistToFloor: form.value.waistToFloor
      }
    } else if (this.gender == "men") {
      measurementJSON = {
        waistToAnkle: form.value.waistToAnkle,
        waistToknee: form.value.waistToknee,
        neck: form.value.neck,
        crotchLength: form.value.crotchLength,
        shoulder: form.value.shoulder,
        waist: form.value.waist,
        chest: form.value.chest,
        napeNaist: form.value.napeNaist,
        hip: form.value.hip,
        topHip: form.value.topHip,
        sideNeck: form.value.sideNeck,
        waistToHip: form.value.waistToHip,
        backSide: form.value.backSide,
        backWidth: form.value.backWidth,
        waistToKnee: form.value.waistToKnee,
        armscyeDepth: form.value.armscyeDepth,
        kneeToAnkle: form.value.kneeToAnkle,
        armhole: form.value.armhole,
        thigh: form.value.thigh,
        topArm: form.value.topArm,
        knee: form.value.knee,
        elbow: form.value.elbow,
        calfCircumference: form.value.calfCircumference,
        wrist: form.value.wrist,
        highAnkle: form.value.highAnkle,
        sleeveLength: form.value.sleeveLength,
        ankle: form.value.ankle,
        crotchDepth: form.value.crotchDepth,
        waistToFloor: form.value.waistToFloor
      }
    }
    this.measurementObject = {
      displyName: form.value.displyName,
      id: form.value.id,
      measurementJSON: measurementJSON,
      sizeType: this.sizeTypee,
      gender: this.gender,
    }
    if (this.save == true) {
      if (this.actionType == 'add') {
        this.designerMencustomchartSubscribe = this.http.post(API_URL + "userMeasurement/addMeasurement", this.measurementObject).subscribe(
          (response: any) => {
            this.toastrService.success(response.message);
            this.customSize = true;
            form.reset();
            this.getMencustomchart();
            this.modalService.dismissAll();
          },
          (error) => {
            this.toastrService.error(error.error.message);
          });
      }
      else if (this.actionType == 'update') {
        this.designerMencustomchartSubscribe = this.http.put(API_URL + "userMeasurement/updateMeasurement?measurementId=" + this.mesormentId, this.measurementObject).subscribe(
          (response: any) => {
            this.toastrService.success(response.message);
            this.customSize = true;
            // form.reset();
            this.modalService.dismissAll();
            this.getMencustomchart();
          },
          (error) => {
            this.toastrService.error(error.error.message);

          });
      }

    }
    else {
      // this.measurementObject = this.measurementObject;
      this.customSize = true;
      this.modalService.dismissAll();
    }


  }
  UnsaveMesormenMen(form: NgForm) {
    console.log("form", this.gender, form.value, this.measurementObject);

    this.customSize = true;
    this.customization = true;
    this.selectedSize = "Custom";
    var measurementJSON: any = {};
    if (this.gender == "women") {
      measurementJSON = {
        neck: form.value.neck,
        crotchLength: form.value.crotchLength,
        shoulder: form.value.shoulder,
        waist: form.value.waist,
        bust: form.value.bust,
        hip: form.value.hip,
        ribCage: form.value.ribCage,
        topHip: form.value.topHip,
        sideNeck: form.value.sideNeck,
        waistToHip: form.value.waistToHip,
        backSide: form.value.backSide,
        frontSide: form.value.frontSide,
        backWidth: form.value.backWidth,
        waistToKnee: form.value.waistToKnee,
        armscyeDepth: form.value.armscyeDepth,
        kneeToAnkle: form.value.kneeToAnkle,
        armhole: form.value.armhole,
        thigh: form.value.thigh,
        topArm: form.value.topArm,
        knee: form.value.knee,
        elbow: form.value.elbow,
        calfCircumference: form.value.calfCircumference,
        wrist: form.value.wrist,
        highAnkle: form.value.highAnkle,
        sleeveLength: form.value.sleeveLength,
        ankle: form.value.ankle,
        crotchDepth: form.value.crotchDepth,
        waistToFloor: form.value.waistToFloor
      }
    } else if (this.gender == "men") {
      measurementJSON = {
        waistToAnkle: form.value.waistToAnkle,
        waistToknee: form.value.waistToknee,
        neck: form.value.neck,
        crotchLength: form.value.crotchLength,
        shoulder: form.value.shoulder,
        waist: form.value.waist,
        chest: form.value.chest,
        napeNaist: form.value.napeNaist,
        hip: form.value.hip,
        topHip: form.value.topHip,
        sideNeck: form.value.sideNeck,
        waistToHip: form.value.waistToHip,
        backSide: form.value.backSide,
        backWidth: form.value.backWidth,
        waistToKnee: form.value.waistToKnee,
        armscyeDepth: form.value.armscyeDepth,
        kneeToAnkle: form.value.kneeToAnkle,
        armhole: form.value.armhole,
        thigh: form.value.thigh,
        topArm: form.value.topArm,
        knee: form.value.knee,
        elbow: form.value.elbow,
        calfCircumference: form.value.calfCircumference,
        wrist: form.value.wrist,
        highAnkle: form.value.highAnkle,
        sleeveLength: form.value.sleeveLength,
        ankle: form.value.ankle,
        crotchDepth: form.value.crotchDepth,
        waistToFloor: form.value.waistToFloor
      }
    }
    this.measurementObject = {
      displyName: form.value.displyName,
      id: form.value.id,
      measurementJSON: measurementJSON,
      sizeType: this.sizeTypeeWomen,
      gender: this.gender
    }
    console.log("form", this.gender, form.value, this.measurementObject);
    this.modalService.dismissAll();
  }
  // onSubmitchart end 
  addChart() {
    this.selectedSize = '';
    this.measurementObject = {};
    this.model = {};
    this.size = '';
    this.actionType = 'add';
    this.mesormentId = 0;
  }
  onSelectCustomOld(mesorment) {
    console.log(mesorment);
    this.customSize = false;
    this.actionType = "update";
    this.mesormentId = mesorment.id;
    this.customization = true;
    this.selectedSize = "Custom";
    this.save = true;
    this.measurementObject = mesorment;
    for (let index = 0; index < this.mesormentList.length; index++) {
      if (mesorment.id == this.mesormentList[index].id) {
        if (this.gender == "women") {
          this.model = {
            id: this.mesormentList[index].id,
            displyName: this.mesormentList[index].displyName,
            sizeType: this.mesormentList[index].sizeType,
            neck: this.mesormentList[index].measurementJSON.neck,
            crotchLength: this.mesormentList[index].measurementJSON.crotchLength,
            shoulder: this.mesormentList[index].measurementJSON.shoulder,
            waist: this.mesormentList[index].measurementJSON.waist,
            bust: this.mesormentList[index].measurementJSON.bust,
            hip: this.mesormentList[index].measurementJSON.hip,
            ribCage: this.mesormentList[index].measurementJSON.ribCage,
            topHip: this.mesormentList[index].measurementJSON.topHip,
            sideNeck: this.mesormentList[index].measurementJSON.sideNeck,
            waistToHip: this.mesormentList[index].measurementJSON.waistToHip,
            backSide: this.mesormentList[index].measurementJSON.backSide,
            frontSide: this.mesormentList[index].measurementJSON.frontSide,
            backWidth: this.mesormentList[index].measurementJSON.backWidth,
            waistToKnee: this.mesormentList[index].measurementJSON.waistToKnee,
            armscyeDepth: this.mesormentList[index].measurementJSON.armscyeDepth,
            kneeToAnkle: this.mesormentList[index].measurementJSON.kneeToAnkle,
            armhole: this.mesormentList[index].measurementJSON.armhole,
            thigh: this.mesormentList[index].measurementJSON.thigh,
            topArm: this.mesormentList[index].measurementJSON.topArm,
            knee: this.mesormentList[index].measurementJSON.knee,
            elbow: this.mesormentList[index].measurementJSON.elbow,
            calfCircumference: this.mesormentList[index].measurementJSON.calfCircumference,
            wrist: this.mesormentList[index].measurementJSON.wrist,
            highAnkle: this.mesormentList[index].measurementJSON.highAnkle,
            sleeveLength: this.mesormentList[index].measurementJSON.sleeveLength,
            ankle: this.mesormentList[index].measurementJSON.ankle,
            crotchDepth: this.mesormentList[index].measurementJSON.crotchDepth,
            waistToFloor: this.mesormentList[index].measurementJSON.waistToFloor,
            gender: this.mesormentList[index].gender,
          }
        }
        else if (this.gender == "men") {
          this.model = {
            id: this.mesormentList[index].id,
            displyName: this.mesormentList[index].displyName,
            sizeType: this.mesormentList[index].sizeType,
            neck: this.mesormentList[index].measurementJSON.neck,
            chest: this.mesormentList[index].measurementJSON.chest,
            crotchLength: this.mesormentList[index].measurementJSON.crotchLength,
            shoulder: this.mesormentList[index].measurementJSON.shoulder,
            waist: this.mesormentList[index].measurementJSON.waist,
            bust: this.mesormentList[index].measurementJSON.bust,
            napeNaist: this.mesormentList[index].measurementJSON.napeNaist,
            hip: this.mesormentList[index].measurementJSON.hip,
            waistToknee: this.mesormentList[index].measurementJSON.waistToknee,
            waistToAnkle: this.mesormentList[index].measurementJSON.waistToAnkle,
            ribCage: this.mesormentList[index].measurementJSON.ribCage,
            topHip: this.mesormentList[index].measurementJSON.topHip,
            sideNeck: this.mesormentList[index].measurementJSON.sideNeck,
            waistToHip: this.mesormentList[index].measurementJSON.waistToHip,
            backSide: this.mesormentList[index].measurementJSON.backSide,
            frontSide: this.mesormentList[index].measurementJSON.frontSide,
            backWidth: this.mesormentList[index].measurementJSON.backWidth,
            waistToKnee: this.mesormentList[index].measurementJSON.waistToKnee,
            armscyeDepth: this.mesormentList[index].measurementJSON.armscyeDepth,
            kneeToAnkle: this.mesormentList[index].measurementJSON.kneeToAnkle,
            armhole: this.mesormentList[index].measurementJSON.armhole,
            thigh: this.mesormentList[index].measurementJSON.thigh,
            topArm: this.mesormentList[index].measurementJSON.topArm,
            knee: this.mesormentList[index].measurementJSON.knee,
            elbow: this.mesormentList[index].measurementJSON.elbow,
            calfCircumference: this.mesormentList[index].measurementJSON.calfCircumference,
            wrist: this.mesormentList[index].measurementJSON.wrist,
            highAnkle: this.mesormentList[index].measurementJSON.highAnkle,
            sleeveLength: this.mesormentList[index].measurementJSON.sleeveLength,
            ankle: this.mesormentList[index].measurementJSON.ankle,
            crotchDepth: this.mesormentList[index].measurementJSON.crotchDepth,
            waistToFloor: this.mesormentList[index].measurementJSON.waistToFloor,
            gender: this.mesormentList[index].gender,
          }
        }
        // this.size = this.mesormentList[index].sizeType;
        if (this.mesormentList[index].sizeType == 'CMS') {
          this.sizeType = true;
        }else {
          this.sizeType = false;
        }
      }

    }
  }
  getMencustomchart() {
    this.mencustomchartListSubscribe = this.http.get(API_URL + "userMeasurement/getMeasurementlist/" + this.gender).subscribe(
      (response: any) => {
        // this.mesormentList = [];
        // var data = []
        this.mesormentList = response;
        // if(this.mesormentFor == 'Men/Kids')
        // {
        //   for (let index = 0; index < data.length; index++) 
        //   {

        //     if(data[index].gender =="Men")
        //     {
        //       this.mesormentList.push(data[index]);
        //     }
        //   }
        // }else {
        //   for (let index = 0; index < data.length; index++) 
        //   {

        //     if(data[index].gender =="women")
        //     {
        //       this.mesormentList.push(data[index]);
        //     }
        //   }
        // }

        console.log("mesormentList", this.mesormentFor);
        // this.toastrService.success(response.message);
      },
      (error) => {
        this.toastrService.error(error.message);
      });
  }
  openLoginNav() {
    // this.showScreen = 'login';
    this.loginNav.addNavLogin();
  }
  getDesignerMencustomchart() {
    this.mencustomchartListSubscribe = this.http.get(API_URL + "designer/" + this.productDetail.designerId).subscribe(
      (response: any) => {
        this.designerMesormentChart = {
          menChartData: response.menChartData.measurementsMen,
          mensizeType: response.menChartData.sizeType,
          womensizeType: response.womenChartData.sizeType,

          womenChartData: response.womenChartData.measurementsWomen,
        }

        console.log("mesormentList", this.designerMesormentChart);
        // this.toastrService.success(response.message);
      },
      (error) => {
        this.toastrService.error(error.message);
      });
  }
  ngOnDestroy() {
    if (this.productDataSubscribe !== undefined) {
      this.productDataSubscribe.unsubscribe();
    } if (this.getDesignerSubscribe !== undefined) {
      this.getDesignerSubscribe.unsubscribe();
    } if (this.designerFollowSubscribe !== undefined) {
      this.designerFollowSubscribe.unsubscribe();
    }
    if (this.designerMencustomchartSubscribe !== undefined) {
      this.designerMencustomchartSubscribe.unsubscribe();
    }
    if (this.mencustomchartListSubscribe !== undefined) {
      this.mencustomchartListSubscribe.unsubscribe();
    }
    if (this.getColorListSubscribe !== undefined) {
      this.getColorListSubscribe.unsubscribe();
    }
    if (this.logoutDataSubscribe !== undefined) {
      this.logoutDataSubscribe.unsubscribe();
    }
  }




}
