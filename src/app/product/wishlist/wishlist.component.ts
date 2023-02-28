import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../classes/product';
import { ProductsService } from '../../services/products.service';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';
import { Observable, of, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  customization:any = [];
  model:any = {};
  productId;
  public product: Observable<Product[]> = of([]);
  public wishlistItems: any = [];
  variantImage: any;
  selectedItem: any;
  get_user_dtls;
  private getWishlistSubscribe: Subscription;
  pageNo: number = 0;
  wishlistapi;
  userId;
  limit=12;
  pagination: boolean=false;
  private deleteWishlistSubscribe: Subscription;
  wishlistdeleteapi: string;
  localstorage: boolean;
  continuebtns: boolean = false;
  nowishlistItem: boolean = false;
  pageDisabled: boolean;
  emptyWishlist: boolean = false;
  selectedColor: any=[];
  selectedSize: any=[];
  size: any;
  loader: boolean;
  color: any;
  itemId: any;
  private mencustomchartListSubscribe: Subscription;
  mesormentList: any[];
  mesormentFor: string;
  sizeType: boolean;
  sizeTypee: string;
  gender: string;
  measurementObject:any = {};
  save: boolean;
  actionType: string ='add';
  designerMencustomchartSubscribe: Subscription;
  customSize: boolean;
  mesormentId: string;
  sizeTypeeWomen: string;
  item: any = {};
  customproductId: number;
  i: any;
  // productSize:any;
  constructor(private router: Router, private wishlistService: WishlistService,
    private http: HttpClient,
    private authService: LoginService, private modalService:NgbModal,
    private productsService: ProductsService, private cartService: CartService,private toastrService:ToastrService) {
    this.product = this.wishlistService.getProducts();
    this.product.subscribe(products => this.wishlistItems = products);
  }

  ngOnInit() {
    console.log(' this.wishlistItems', this.wishlistItems);
    if(this.wishlistItems.length != 0)
    {
      this.continuebtns = true;
    }
    this.commonFunction();
  }

  // commonFunction start
  commonFunction() {
    this.wishlistdeleteapi = "user/wishlist/delete";
    this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.localstorage = false;
        this.userId = this.get_user_dtls.uid
        this.wishlistapi = "user/wishlist/getUserWishist?userId="+this.userId+"&page="+this.pageNo+"&limit="+this.limit;
        // Call wish list data 
        this.getMencustomchart();
        this.getWishListData();
      }
      else{
        this.localstorage = true;
      }
    });
  }
  // commonFunction end
  setPage(page: number) {
    console.log("page", page);
    console.log("page");

    this.pageNo = page;
    this.wishlistapi = "user/wishlist/getUserWishist?userId="+this.userId+"&page="+this.pageNo+"&limit="+this.limit;
    // user/wishlist/getUserWishist?userId='+96+'&page='+0+'&limit='+10
    this.getWishListData();
    // this.onListDate( this.listing_url,this.pageNo, this.displayRecord,this.sortColumnName,this.filttertype,this.sortOrderName, this.searchTerm, this.profileStatus);
  }
  //  get wish list after login start
  getWishListData() {
    this.loader = true;
    this.getWishlistSubscribe = this.http.get(this.wishlistapi).subscribe(
      (response: any) => {
        console.log('Wish list', response);
        this.wishlistItems = response;
        console.log('Wish list', this.wishlistItems);

        for (let index = 0; index < this.wishlistItems.data.length; index++) {
          if(!this.wishlistItems.data[index].slug)
          {
            let name = this.wishlistItems.data[index].productDetails.productName.toLowerCase( );
            this.wishlistItems.data[index].slug = name.replace(/ /g, "-");
          }
          
        }
        this.pagination = true;
        this.pageDisabled = false;
        this.loader = false;
        if(!response.data.length){
          this.emptyWishlist = true;
          this.pagination = false;
        }else {
          this.emptyWishlist = false;
          this.pagination = true;
        }
      },
      errRes => {
        this.pageDisabled = false;
        this.loader = false;
        this.toastrService.error(errRes.message); 
      }
    );
  }
  //  get wish list after login end
  // Add to cart
  public addToCart(product: Product, quantity: number = 1) {
    console.log("product",product,this.userId);
    if(this.get_user_dtls)
    {
      if(this.selectedSize[this.i] == 'Custom')
      {
        product.customization = this.customization[this.productId];
        product.selectedSize = this.selectedSize[this.i];
        product.measurementObject = this.measurementObject;
      }else{
        product.customization = false;
        product.selectedSize = this.size;
        product.measurementObject = {};
      }
      
    }else{
      
      product.selectedSize = this.size;
      product.customization = false;
    }
   
    console.log("product",product,this.userId);

    if (quantity > 0)
      this.cartService.addToCart(product, quantity);
        this.wishlistService.removeFromWishlist(product);
        // this.getWishListData()
        this.authService.globalparamsData.subscribe(res => {
          console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
          if (res != null || res != undefined) {
            this.get_user_dtls = res.logininfo;
            console.log('this.get_user_dtls************', this.get_user_dtls);
            // user details set
            this.localstorage = false;
            this.userId = this.get_user_dtls.uid
            this.wishlistapi = "user/wishlist/getUserWishist?userId="+this.userId+"&page="+this.pageNo+"&limit="+this.limit;
            this.removeItem(product, this.userId);
            // Call wish list data 
            this.getWishListData();
            this.localstorage = false;
          }
          else{
            this.localstorage = true;
          }
        });
    this.selectedSize = [];
  }
  // Add to compare
  public addToCompare(product: Product) {
    console.log(product);

    this.productsService.addToCompare(product);

    //  this.allcompareproduct= JSON.parse(localStorage.getItem("compareItem"));


  }
  // Remove from wishlist
  public removeItem(product: Product, userId) {
    
    if(this.get_user_dtls)
    {
      this.pageDisabled = true;
      console.log("IF_get_user_dtls");
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: {
          productId: product.productId,
          userId: this.get_user_dtls.uid
        }
      }
      
      this.deleteWishlistSubscribe = this.http.delete(this.wishlistdeleteapi,options).subscribe(
        (response: any) => {
          console.log('Wish list', response);
          this.wishlistItems = response;
          this.pagination = true;
          if(response.data.length == 0){
            this.emptyWishlist = true;
          }else {
            this.emptyWishlist = false;
          }
          // this.toastrService.success(response.message)
        },
        errRes => {
          this.toastrService.error(errRes.error.message)
        }
        
      );
      setTimeout(() => {
        this.getWishListData();
      }, 500);
      
    }else
    {
      this.wishlistService.removeFromWishlist(product);
      console.log("Else_removeFromWishlist");
    }
    console.log("product",product);
    
   
    // this.getWishListData();
  }
  // Change size variant
  public changeSizeVariant(variant,i,productId) {
    this.selectedSize[i] = variant;
    this.i = i;
    this.size = this.selectedSize[i];
    console.log(this.selectedSize[i]);
    this.customization[productId] = false;
    this.customproductId = 0;
 }
 custom_modal(content,item){
  this.item = item;
  this.productId = item.productId;
  // this.customproductId = item.productId;

  this.gender = item.categoryName;
  if(item.categoryName == 'Men' || item.categoryName == 'Kids')
  {
    this.mesormentFor = "Men/Kids";
    this.gender = 'men';
  }else
  {
    this.gender = 'women';
    this.mesormentFor = "Women";
  }
  this.getMencustomchart();
  // this.mesormentFor = 'Women';
  // this.gender = 'women';
  this.modalService.open(content, { size: 'xl' });
}
convartValue(form:NgForm,identifire)
{
  console.log(identifire,form.value,this.sizeType);
  if(identifire == 'Women' && this.sizeType == true)
  {
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
  if(identifire == 'Women' && this.sizeType == false)
  {
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
  if(identifire == 'Men/Kids' && this.sizeType == true)
  {
    this.sizeTypee = "CMS";
    this.model.neck = parseFloat((form.value.neck * 2.54).toFixed(2));
    this.model.crotchLength = parseFloat((form.value.crotchLength * 2.54).toFixed(2));
    this.model.shoulder = parseFloat((form.value.shoulder * 2.54).toFixed(2));
    this.model.waist = parseFloat((form.value.waist * 2.54).toFixed(2));
    this.model.chest = parseFloat((form.value.chest * 2.54).toFixed(2));
    this.model.waistToAnkle = parseFloat((form.value.waistToAnkle * 2.54).toFixed(2));
    this.model.waistToknee = parseFloat((form.value.waistToknee * 2.54).toFixed(2));
    this.model.napeNaist= parseFloat((form.value.napeNaist * 2.54).toFixed(2)),
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
  if(identifire == 'Men/Kids' && this.sizeType == false)
  {
    this.sizeTypee = "inch";
    this.model.neck = parseFloat((form.value.neck / 2.54).toFixed(2));
    this.model.crotchLength = parseFloat((form.value.crotchLength / 2.54).toFixed(2));
    this.model.shoulder = parseFloat((form.value.shoulder / 2.54).toFixed(2));
    this.model.waist = parseFloat((form.value.waist / 2.54).toFixed(2));
    this.model.waistToAnkle = parseFloat((form.value.waistToAnkle / 2.54).toFixed(2));
    this.model.waistToknee = parseFloat((form.value.waistToknee / 2.54).toFixed(2));
    this.model.chest = parseFloat((form.value.chest / 2.54).toFixed(2));
    this.model.bust = parseFloat((form.value.bust / 2.54).toFixed(2));
    this.model.napeNaist= parseFloat((form.value.napeNaist / 2.54).toFixed(2)),
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
  console.log('this.sizeTypee',this.sizeTypee);
  
}
// onSubmitchart start
onSubmitcustomchartform(form:NgForm){
  this.customization[this.productId] = true;
  this.customproductId = this.productId;
  this.selectedSize[this.i] = "Custom";
  var measurementJSON:any = {};
  if(this.gender == "women")
  {
    measurementJSON = {
      neck:form.value.neck,
      crotchLength:form.value.crotchLength,
      shoulder:form.value.shoulder,
      waist:form.value.waist,
      bust:form.value.bust,
      hip:form.value.hip,
      ribCage:form.value.ribCage,
      topHip:form.value.topHip,
      sideNeck:form.value.sideNeck,
      waistToHip:form.value.waistToHip,
      backSide:form.value.backSide,
      frontSide:form.value.frontSide,
      backWidth:form.value.backWidth,
      waistToKnee:form.value.waistToKnee,
      armscyeDepth:form.value.armscyeDepth,
      kneeToAnkle:form.value.kneeToAnkle,
      armhole:form.value.armhole,
      thigh:form.value.thigh,
      topArm:form.value.topArm,
      knee:form.value.knee,
      elbow:form.value.elbow,
      calfCircumference:form.value.calfCircumference,
      wrist:form.value.wrist,
      highAnkle:form.value.highAnkle,
      sleeveLength:form.value.sleeveLength,
      ankle:form.value.ankle,
      crotchDepth:form.value.crotchDepth,
      waistToFloor:form.value.waistToFloor
    }
  }else if(this.gender == "men")
  {
    measurementJSON = {
      waistToAnkle:form.value.waistToAnkle,
      waistToknee:form.value.waistToknee,
      neck:form.value.neck,
      crotchLength:form.value.crotchLength,
      shoulder:form.value.shoulder,
      waist:form.value.waist,
      chest:form.value.chest,
      napeNaist:form.value.napeNaist,
      bust:form.value.bust,
      hip:form.value.hip,
      ribCage:form.value.ribCage,
      topHip:form.value.topHip,
      sideNeck:form.value.sideNeck,
      waistToHip:form.value.waistToHip,
      backSide:form.value.backSide,
      frontSide:form.value.frontSide,
      backWidth:form.value.backWidth,
      waistToKnee:form.value.waistToKnee,
      armscyeDepth:form.value.armscyeDepth,
      kneeToAnkle:form.value.kneeToAnkle,
      armhole:form.value.armhole,
      thigh:form.value.thigh,
      topArm:form.value.topArm,
      knee:form.value.knee,
      elbow:form.value.elbow,
      calfCircumference:form.value.calfCircumference,
      wrist:form.value.wrist,
      highAnkle:form.value.highAnkle,
      sleeveLength:form.value.sleeveLength,
      ankle:form.value.ankle,
      crotchDepth:form.value.crotchDepth,
      waistToFloor:form.value.waistToFloor
    }
  }
  this.measurementObject = {
    displyName:form.value.displyName,
    measurementJSON:measurementJSON,
    sizeType:this.sizeTypee,
    gender: this.gender,
  }
  if(this.save == true)
  {
    if(this.actionType == 'add')
    {
      this.designerMencustomchartSubscribe = this.http.post("userMeasurement/addMeasurement",this.measurementObject).subscribe(
        (response:any) => {
          this.toastrService.success(response.message);
          form.reset();
          this.getMencustomchart();
          this.modalService.dismissAll();
        },
        (error)=>{
          this.toastrService.error(error.error.message);
        });
    }
    else if(this.actionType == 'update')
    {
      this.designerMencustomchartSubscribe = this.http.put("userMeasurement/updateMeasurement?measurementId="+this.mesormentId,this.measurementObject).subscribe(
        (response:any) => {
          this.toastrService.success(response.message);
          this.customSize = true;
          // form.reset();
          this.modalService.dismissAll();
          this.getMencustomchart();
        },
        (error)=>{
          this.toastrService.error(error.error.message);

        });
    }
    
  }
  else
  {
    // this.measurementObject = this.measurementObject;
    this.customSize = true;
    this.modalService.dismissAll();
  }
  

}
UnsaveMesormenMen(form:NgForm)
{

  this.customSize = true;
  this.customization[this.productId] = true;
  this.customproductId = this.productId;
  
  // this.selectedSize = "Custom";
  this.selectedSize[this.i] = "Custom";
  this.measurementObject = {
    displyName:form.value.displyName,
    measurementJSON:form.value,
    sizeType:this.sizeTypee,
    gender: this.gender
  }
  this.modalService.dismissAll();
}
// onSubmitchart end 
addChart()
{
  this.selectedSize[this.i] = '';
  this.measurementObject = {};
  this.model = {};
  this.size = '';
  this.actionType = 'add';
}
onSelectCustomOld(mesorment)
{ 
  this.actionType  = "update";

  this.mesormentId = mesorment.id;
  this.customization[this.productId] = true;
  this.selectedSize[this.i] = "Custom";
  this.save = true;
  this.measurementObject = mesorment;
  for (let index = 0; index < this.mesormentList.length; index++) {
    if(mesorment.id == this.mesormentList[index].id)
    {
      if(this.gender == "women")
        {
          this.model = {
            id:this.mesormentList[index].id,
            displyName:this.mesormentList[index].displyName,
            sizeType:this.mesormentList[index].sizeType,
            neck:this.mesormentList[index].measurementJSON.neck,
            crotchLength:this.mesormentList[index].measurementJSON.crotchLength,
            shoulder:this.mesormentList[index].measurementJSON.shoulder,
            waist:this.mesormentList[index].measurementJSON.waist,
            bust:this.mesormentList[index].measurementJSON.bust,
            hip:this.mesormentList[index].measurementJSON.hip,
            ribCage:this.mesormentList[index].measurementJSON.ribCage,
            topHip:this.mesormentList[index].measurementJSON.topHip,
            sideNeck:this.mesormentList[index].measurementJSON.sideNeck,
            waistToHip:this.mesormentList[index].measurementJSON.waistToHip,
            backSide:this.mesormentList[index].measurementJSON.backSide,
            frontSide:this.mesormentList[index].measurementJSON.frontSide,
            backWidth:this.mesormentList[index].measurementJSON.backWidth,
            waistToKnee:this.mesormentList[index].measurementJSON.waistToKnee,
            armscyeDepth:this.mesormentList[index].measurementJSON.armscyeDepth,
            kneeToAnkle:this.mesormentList[index].measurementJSON.kneeToAnkle,
            armhole:this.mesormentList[index].measurementJSON.armhole,
            thigh:this.mesormentList[index].measurementJSON.thigh,
            topArm:this.mesormentList[index].measurementJSON.topArm,
            knee:this.mesormentList[index].measurementJSON.knee,
            elbow:this.mesormentList[index].measurementJSON.elbow,
            calfCircumference:this.mesormentList[index].measurementJSON.calfCircumference,
            wrist:this.mesormentList[index].measurementJSON.wrist,
            highAnkle:this.mesormentList[index].measurementJSON.highAnkle,
            sleeveLength:this.mesormentList[index].measurementJSON.sleeveLength,
            ankle:this.mesormentList[index].measurementJSON.ankle,
            crotchDepth:this.mesormentList[index].measurementJSON.crotchDepth,
            waistToFloor:this.mesormentList[index].measurementJSON.waistToFloor,
            gender:this.mesormentList[index].gender,
        }
        }
      else if(this.gender == "men")
        {
          this.model = {
            id:this.mesormentList[index].id,
            displyName:this.mesormentList[index].displyName,
            sizeType:this.mesormentList[index].sizeType,
            neck:this.mesormentList[index].measurementJSON.neck,
            chest:this.mesormentList[index].measurementJSON.chest,
            crotchLength:this.mesormentList[index].measurementJSON.crotchLength,
            shoulder:this.mesormentList[index].measurementJSON.shoulder,
            waist:this.mesormentList[index].measurementJSON.waist,
            bust:this.mesormentList[index].measurementJSON.bust,
            napeNaist:this.mesormentList[index].measurementJSON.napeNaist,
            hip:this.mesormentList[index].measurementJSON.hip,
            waistToknee:this.mesormentList[index].measurementJSON.waistToknee,
            waistToAnkle:this.mesormentList[index].measurementJSON.waistToAnkle,
            ribCage:this.mesormentList[index].measurementJSON.ribCage,
            topHip:this.mesormentList[index].measurementJSON.topHip,
            sideNeck:this.mesormentList[index].measurementJSON.sideNeck,
            waistToHip:this.mesormentList[index].measurementJSON.waistToHip,
            backSide:this.mesormentList[index].measurementJSON.backSide,
            frontSide:this.mesormentList[index].measurementJSON.frontSide,
            backWidth:this.mesormentList[index].measurementJSON.backWidth,
            waistToKnee:this.mesormentList[index].measurementJSON.waistToKnee,
            armscyeDepth:this.mesormentList[index].measurementJSON.armscyeDepth,
            kneeToAnkle:this.mesormentList[index].measurementJSON.kneeToAnkle,
            armhole:this.mesormentList[index].measurementJSON.armhole,
            thigh:this.mesormentList[index].measurementJSON.thigh,
            topArm:this.mesormentList[index].measurementJSON.topArm,
            knee:this.mesormentList[index].measurementJSON.knee,
            elbow:this.mesormentList[index].measurementJSON.elbow,
            calfCircumference:this.mesormentList[index].measurementJSON.calfCircumference,
            wrist:this.mesormentList[index].measurementJSON.wrist,
            highAnkle:this.mesormentList[index].measurementJSON.highAnkle,
            sleeveLength:this.mesormentList[index].measurementJSON.sleeveLength,
            ankle:this.mesormentList[index].measurementJSON.ankle,
            crotchDepth:this.mesormentList[index].measurementJSON.crotchDepth,
            waistToFloor:this.mesormentList[index].measurementJSON.waistToFloor,
            gender:this.mesormentList[index].gender,
        }
        }
      this.size = this.mesormentList[index].sizeType;
    }
    
  }
}
getMencustomchart()
{
  this.mencustomchartListSubscribe = this.http.get("userMeasurement/getMeasurementlist/"+this.gender).subscribe(
    (response:any) => {
      // this.mesormentList = [];
      // var data = []
      this.mesormentList = response;

      // if(this.mesormentFor == 'Men/Kids')
      // {
      //   for (let index = 0; index < data.length; index++) 
      //   {
      
      //     if(data[index].gender =="men")
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
      
      // console.log("mesormentList",data.length,this.mesormentFor);
      // this.toastrService.success(response.message);
    },
    (error)=>{
      this.toastrService.error(error.message);
    });
}
  ngOnDestroy() {
    if (this.getWishlistSubscribe !== undefined) {
      this.getWishlistSubscribe.unsubscribe();
    }
  }
}
