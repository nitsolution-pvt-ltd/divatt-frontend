import { Options } from '@angular-slider/ngx-slider';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColorFilter, Product } from '../classes/product';
import { LoginService } from '../services/auth/auth.service';
import { LoginNavService } from '../services/login-nav.service';
import { ProductsService } from '../services/products.service';
import { WishlistService } from '../services/wishlist.service';
import { Filter } from '../widgets/filter/filter.model';
import { Meta } from '@angular/platform-browser';
const API_URL = environment.apiUrl;
const FILE_URL = environment.fileUrl;
// import * as html2canvas from 'html2canvas';
import html2canvas from 'html2canvas';
import { NgNavigatorShareService } from 'ng-navigator-share';
@Component({
  selector: 'app-designer-profile',
  templateUrl: './designer-profile.component.html',
  styleUrls: ['./designer-profile.component.css']
})
export class DesignerProfileComponent implements OnInit {
  value: number = 0;
  subcategoris:any =[]
  subcategoryftr = false;
  highValue: number = 60000;
  options: Options = {
    floor: 0,
    ceil: 60000
  };
  sliderValue:any = 0;
  show:boolean = false;
  designerId: string = '';
  categoryId: string = '';
  sizeName: string = '';
  filtterItemsdata: any={};
  colorName: string = '';
  designerftr = false;
  categoryftr = false;
  priceftr = false;
  colorftr = false;
  moreftr = false;
  sizeftr = false;
  giftWrap: any = '';
  sortDateType: string = '';
  sortPrice: string = '';
  public products: Product[] = [];
  private getDesignerSubscribe: Subscription;
  private getProductSubscribe: Subscription;
  private designerFollowSubscribe: Subscription;
  private ngNavigatorShareService: NgNavigatorShareService;
  designer: any={};
  errorMsg: any;
  api_url: string;
  parms_action_id: string;
  productlist: any;
  productapi_url: string;
  noproducts: boolean = false;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  userdata: any;
  followapi_url: string;
  get_user_dtls: any;
  getUserDetailsList_api: string;
  private getUserDetailss: Subscription;
  model: any={};
  private logoutDataSubscribe: Subscription;
  public items        :   Product[] = [];
  public allItems     :   Product[] = [];
  public colorFilters :   ColorFilter[] = [];
  public tagsFilters  :   any[] = [];
  public tags         :   any[] = [];
  public colors       :   any[] = [];
  public sortByOrder  :   string = '';   // sorting
  public animation    :   any;   // Animation
  public collection_title: string;
  public productfilter : Filter;
  public category : string = '';
  config: any; 
  collection = [];
  cod: string = '';
  customization: string = '';
  priceType: string = '';
  returnStatus: string = '';
  public minPrice : number = 0;
  public maxPrice : number = 60000;
  visiblefilter=false
  sizes:any = [
    { name:'XS',isSelected:false },
    { name:'S',isSelected:false },
    { name:'M',isSelected:false },
    { name:'L',isSelected:false },
    { name:'XL',isSelected:false },
    { name:'XXL',isSelected:false },
    { name:'3XL',isSelected:false },
    { name:'4XL',isSelected:false },
    { name:'5XL',isSelected:false },
    { name:'6XL',isSelected:false },
   
  ];
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of data is reached
  allproducts = [];
  filter_api: string;
  subcategory: string = '';
  designerListSubscribe: Subscription;
  getcolorsList: Subscription;
  getCategoryList: Subscription;
  viewdesignerId: any;
  subcategoryTagsArray: any[] = [];
  page: number = 0;
  countproducts: any = [];
  pagination: any = {};
  noProductfound: boolean;
  loader: boolean;
  href;
  pageurl;
  @ViewChild('screen', {static: false}) screen: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;
  @ViewChild('downloadLink', {static: false}) downloadLink: ElementRef;
  
  
  constructor(private http:HttpClient,
    private route: ActivatedRoute, 
    private toastrService: ToastrService,
    private activatedRoute : ActivatedRoute,
    private loginNav: LoginNavService,
    private wishlistService: WishlistService,
    private router: Router,private modalService: NgbModal,
    private authService:LoginService,
    private metaService: Meta,
    ngNavigatorShareService: NgNavigatorShareService,
    @Inject(DOCUMENT) private _document: HTMLDocument,) {
      this.ngNavigatorShareService = ngNavigatorShareService;
    }

  ngOnInit() {
  	// this.productsService.getProducts().subscribe(product => this.products = product);
    this.commonFunction();
    this.pageurl = 'https://dev.divatt.com/divatt'+this.router.url
  }

  // Share profile start
  share() {
    
    if (!this.ngNavigatorShareService.canShare()) {
      alert(`This service/api is not supported in your Browser`);
      return;
    }
 
    this.ngNavigatorShareService.share({
      title: this.designer.designerProfileEntity.designerProfile.displayName,
      text: 'Hey check out'+this.designer.designerProfileEntity.designerProfile.displayName+'Profile',
      url: this.pageurl
    }).then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
    
  }
  copyText(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.success('Link Copied!');
  }
  // Share profile end

  // Download designer card
  downloadImage(){
    html2canvas(this.screen.nativeElement, {logging: true, allowTaint: false, useCORS: true }).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
    console.log('this.canvas.nativeElement.src ', this.canvas.nativeElement.src );
    console.log('this.downloadLink.nativeElement.href', this.downloadLink.nativeElement.href);
    
    
  }

  // commonFunction start
  commonFunction()
  {
    this.parms_action_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.href = 'whatsapp://send?text=https://dev.divatt.com/divatt';
    console.log('this.router.url', this.href);
    this.api_url = 'user/designerProfile';
    this.productapi_url = 'designerProduct/UserDesignerProductList';
    this.followapi_url = 'user/followDesigner';
    this.config = {
      currentPage: 1,
      itemsPerPage:20,
    };
    this.route.queryParamMap
    .map(params => params.get('page'))
    .subscribe(page => this.config.currentPage = page);
    this.getDesignerById();
    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if(res != null || res != undefined){
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        this.getUserDetailsList_api = 'auth/info/'+ this.get_user_dtls.authority+'/'+this.get_user_dtls.email;
        this.getUserDetailsList();
      }
    });

this.getalldata();
   
  }
  // commonFunction end 
  designers;
  categoris;
    getalldata()
  {
    // designerlist
    this.designerListSubscribe = this.http.get(API_URL+'user/designer/list').subscribe(
      (response:any) => {this.designers = response;},
      error => {this.toastrService.error(error.error.message);}
    );
    // end designerlist
    
      // colors
      this.getcolorsList =  this.http.get(API_URL+'adminMData/coloreList').subscribe(
        (res:any) => {
          // this.colors = res;
          for (let index = 0; index < res.length; index++) {
            this.colors.push({colorName:res[index].colorName,colorValue:res[index].colorValue,isSelected:false})
            
          }
        },
        (error:any) => {this.toastrService.error(error.error.message);}
      );
        // colors end
        this.getCategoryList =  this.http.get(API_URL+'category/viewByCategoryName').subscribe(
          (res:any) => {
            this.categoris = res;
            
          },
          (error:any) => {this.toastrService.error(error.error.message);}
        );
  }
  choseCategory(catId,event){
    if(event.target.checked)
    {
      this.subcategoris = [];
      for (let index = 0; index < this.categoris.length; index++) {
        if(this.categoris[index].id == catId)
        {
          this.category = catId.toString();
        }else{
          this.categoris[index].isActive = false;
        }
        
      }
      this.getSubcategory(catId)
    }else{
      this.subcategoris = [];
    }
    this.page = 0;
    this.allproducts = []; 
    this.getDesignerProducts(this.viewdesignerId);
  }
  getSubcategory(id)
  {
    this.designerListSubscribe = this.http.get(API_URL+'subcategory/getAllSubcategory/'+id).subscribe(
      (response:any) => {
        for (let index = 0; index < response.length; index++) {
          this.subcategoris.push({categoryName:response[index].categoryName,id:response[index].id,isSelected:false}) 
          
        }
        for (let index = 0; index < this.subcategoris.length; index++) {
          if(this.subcategoris[index].categoryName == response[index].categoryName) 
          {

          }
          
        }
        // this.subcategoris = response;
      },
      error => {this.toastrService.error(error.error.message);}
    );
  }
  getUserDetailsList(){
    this.getUserDetailss = this.http.get(API_URL+this.getUserDetailsList_api).subscribe(
        (res:any) => {
          this.userdata = res;
          console.log("User Data",res,this.userdata);
          
        },
        errRes => {
           console.log("Get moduleList >", errRes); 
        }
      );
  }
   // getDesignerList start
   getDesignerById()
   {
     this.getDesignerSubscribe = this.http.get(API_URL+this.api_url+'/'+this.parms_action_id).subscribe(
       (response:any) => {
        this.designer = response;
         
        //  for meta start
        this.metaService.updateTag({ property: 'og:title', content: response.designerProfileEntity.designerProfile.displayName });
        this.metaService.updateTag({ property: 'og:type', content: 'website' });
        this.metaService.updateTag({ property: 'og:url', content: this.pageurl });
        this.metaService.updateTag({ property: 'og:image', content: response.designerProfileEntity.designerProfile.profilePic });
        this.metaService.updateTag({ property: 'og:description', content: response.designerProfileEntity.socialProfile.description });

        this.metaService.updateTag({ name: 'description', content: response.designerProfileEntity.socialProfile.description });
        this.metaService.updateTag({ property: 'og:site_name', content: response.designerProfileEntity.designerProfile.displayName });
        this.metaService.updateTag({ name: 'twitter:title', content: response.designerProfileEntity.designerProfile.displayName });
        this.metaService.updateTag({ name: 'twitter:description', content: response.designerProfileEntity.socialProfile.description });
        this.metaService.updateTag({ name: 'twitter:image', content: response.designerProfileEntity.designerProfile.profilePic });
        this.metaService.updateTag({ name: 'twitter:site', content: 'Divatt' });
        this.metaService.updateTag({ name: 'twitter:creator', content: 'Divatt' });
        this.metaService.updateTag({ name: 'category', content: 'E-Commerce' });


        this._document.getElementById('pageTitle').innerHTML = this.designer.designerProfileEntity.designerProfile.displayName ;

        //  console.log("Designer",this.designer.UserDesigner.length);
         if(response.status === 200){
          //  this.toastrService.success(response.message);
           
         }
         
         this.viewdesignerId = this.designer.designerProfileEntity.designerId;
         this.getDesignerProducts(this.designer.designerProfileEntity.designerId);

       },
       errRes => {
         console.log("error handeller >>@@",errRes );
        }
     );
     
   }
   // getDesignerList end
appllyFilter()
{
  this.visiblefilter = false;
  this.page = 0;
  this.allproducts = []; 
  this.getDesignerProducts(this.viewdesignerId);
}
searchevent = '';
searchText(keyword)
{
  if(keyword)
  {
    this.router.navigateByUrl("/collections/all/all/"+keyword+'/all').then(() => {
      // window.location.reload();
      this.page = 0;
      this.getDesignerProducts(this.viewdesignerId);
      this.visiblefilter = false;
      window.location.reload();
    });
  }else{
    this.router.navigateByUrl("/collections/all/all/"+'false'+'/all').then(() => {
      // window.location.reload();
        this.allproducts = []; 
      this.getDesignerProducts(this.viewdesignerId);
      this.visiblefilter = false;
      window.location.reload();
    });
  }
  console.log("keyword",keyword);
   
}
toggleFilter(event,title)
{
  
  console.log(event);
  let eve;
  if(event == false)
  {
    eve = '';
  }else{
    eve = event;
  }
  if(title == 'COD')
  {
    this.cod = eve;
  }else if(title == 'customization')
  {
    this.customization = eve;
  }else if(title == 'returnStatus')
  {
    this.returnStatus = eve;
  }else if(title == 'giftwrap')
  {
    this.giftWrap = eve;
  }
  this.page = 0;
  this.allproducts = []; 
  this.getDesignerProducts(this.viewdesignerId);
}
  // rangeChanged
  priceChanged(event:any) 
  {
    this.minPrice = event[0];
    this.maxPrice = event[1];
    this.page = 0;
    this.allproducts = []; 
    this.getDesignerProducts(this.viewdesignerId);
    console.log('event',event);
  }
public designerTagsArray: any[] = [];
public categoryTagsArray: any[] = [];
public colorTagsArray: any[] = [];
public sizeTagsArray: any[] = [];
// checkedFilter start
checkedFilter(filtertitle,event){
  this.allproducts = []; 
  let designerindex = this.designerTagsArray.indexOf(event.target.value);  // checked and unchecked value
  let categoryindex = this.categoryTagsArray.indexOf(event.target.value);  // checked and unchecked value
  let subcategoryindex = this.subcategoryTagsArray.indexOf(event.target.value);  // checked and unchecked value
  let colorindex = this.colorTagsArray.indexOf((event.target.value).replace('#', ''));  // checked and unchecked value
  let sizeindex = this.sizeTagsArray.indexOf(event.target.value);  // checked and unchecked value
  this.categoryId = this.category;
   if (event.target.checked)   
   {
    if(filtertitle == 'designername')
    {
      this.designerTagsArray.push(event.target.value); // push in array cheked value
    }else if(filtertitle == 'categoryName')
    {
      // this.categoryTagsArray.push(event.target.value); // push in array cheked value
      this.categoryId = event.target.value;
    }else if(filtertitle == 'subcategoryName')
    {
      this.subcategoryTagsArray.push(event.target.value); // push in array cheked value
    }else if(filtertitle == 'colorName')
    {
      this.colorTagsArray.push((event.target.value).replace('#', '')); // push in array cheked value
    }else if(filtertitle == 'sizeName')
    {
      this.sizeTagsArray.push(event.target.value); // push in array cheked value
    }
    console.log(event.target.value);
    
   }
    else
    {
      if(filtertitle == 'designername'){
        this.designerTagsArray.splice(designerindex,1);  // removed in array unchecked value 
      }else if(filtertitle == 'categoryName')
      {
      this.categoryId = '';
      this.subcategory = '';
      this.subcategoryTagsArray = [];
        // this.categoryTagsArray.splice(categoryindex,1);  // removed in array unchecked value 
      }else if(filtertitle == 'subcategoryName')
      {
        this.subcategoryTagsArray.splice(subcategoryindex,1);  // removed in array unchecked value 
      }else if(filtertitle == 'colorName')
      {
        this.colorTagsArray.splice(colorindex,1); // push in array cheked value
      }else if(filtertitle == 'sizeName')
      {
        this.sizeTagsArray.splice(sizeindex,1); // push in array cheked value
      }
    } 
    this.designerId = this.designerTagsArray.toString();
    this.colorName =  this.colorTagsArray.toString();
    this.sizeName =  this.sizeTagsArray.toString();
    // this.categoryId =     this.categoryTagsArray.toString()
    // this.subcategoryId =     this.subcategoryTagsArray.toString();
      this.subcategory =     this.subcategoryTagsArray.toString();
    this.filtterItemsdata = {
      designerId:this.designerId,
    }
    console.log("event.target.value",event.target.value,this.colorTagsArray,this.colorName);
    // this.filter_api = 'designerProduct/searching?searchKey='+this.searchevent+'&designerId='+this.designerId+'&categoryId='+this.categoryId+'&subCategoryId='+this.subcategory+'&colour='+this.colorName+'&cod='+this.cod+'&customization='+this.customization+'&priceType='+this.priceType+'&returnStatus='+this.returnStatus+'&maxPrice='+this.maxPrice+'&minPrice='+this.minPrice+'&sizes='+this.sizeName+'&isFilter='+true;
    this.page = 0;
    this.allproducts = []; 
    this.getDesignerProducts(this.viewdesignerId);
                 
}
// checkedFilter end
clearFilter()
{
  for (var i = 0; i < this.colors.length; i++) {
    this.colors[i].isSelected = false;
  }
  for (var i = 0; i < this.subcategoris.length; i++) {
    this.subcategoris[i].isSelected = false;
  }
  for (var i = 0; i < this.designers.length; i++) {
    this.designers[i].isSelected = false;
  }
  for (var i = 0; i < this.sizes.length; i++) {
    this.sizes[i].isSelected = false;
  }
  this.designerTagsArray = [];
  this.designerId = '';
  this.subcategory = '';
  // this.category  = '';
  this.subcategory = '';
  this.colorName = '';
  this.cod = '';
  this.customization = '';
  this.giftWrap = '';
  this.sizeName = '';
  this.sortDateType = '';
  this.sortPrice = '';
  this.minPrice = 0;
  this.maxPrice = 60000;
  this.sliderValue = [0 , 60000];
  this.colorTagsArray = [];
  this.sizeTagsArray = [];
  this.categoryTagsArray = [];
  this.subcategoryTagsArray = [];
  this.allproducts = [];
  this.page = 0;
  this.getDesignerProducts(this.viewdesignerId);
  console.log(this.designerTagsArray);

}
loadData() 
{
  this.page = this.page + 1;
  this.getDesignerProducts(this.viewdesignerId);
}
// clearFilter end
public addToWishlist(product: Product) {
  this.wishlistService.addToWishlist(product);
}
  //  getDesignerProducts start
  getDesignerProducts(designerId)
  {
    this.loader = true;
  this.filter_api = 'designerProducts/productSearching?searchKey='+this.searchevent+'&page='+this.page+'&limit=30'+'&sortBy=Id'+'&designerId='+designerId+'&labelType=all'+'&categoryId='+this.categoryId+'&subCategoryId='+this.subcategory+'&colour='+this.colorName+'&cod='+this.cod+'&customization='+this.customization+'&priceType='+this.priceType+'&returnStatus='+this.returnStatus+'&giftWrap='+this.giftWrap+'&maxPrice='+this.maxPrice+'&minPrice='+this.minPrice+'&size='+this.sizeName+'&sortDateType='+this.sortDateType+'&sortPrice='+this.sortPrice+'&isFilter='+true;
    
    this.getProductSubscribe = this.http.get(API_URL+this.filter_api).subscribe(
      // this.getProductSubscribe = this.http.get(this.productapi_url+'/'+designerId).subscribe(
      (response:any) => {
      this.loader = false;

        // this.products = response;
        // this.allproducts = response.data;
        // console.log("Designer Products",this.allproducts);
        // if(!response.data.length)
        // {
        //   this.noproducts = true;
        // }else{
        //   this.noproducts = false;
        // }
        this.countproducts = response.data;
        if(this.allproducts.length !=0)
          {
            for (let index = 0; index < response.data.length; index++) {
              if(this.allproducts[index].productId != response.data[index].productId)
              {
                this.allproducts.push(response.data[index]);
              }
            }
            
        }else{
         this.allproducts = response.data;
        }
        this.pagination = response;
        if(this.allproducts.length && this.pagination.currentPage == this.pagination.totalPage)
        {
          this.noProductfound = true;
        }
        else
        {
          this.noProductfound = false;
        }
      },
      errRes => {
        this.noproducts = true;
        this.loader = true;

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
  // getDesignerProducts end
  public pageChange(newPage: number) {
		this.router.navigate(['/designer/'+this.parms_action_id+'/'], { queryParams: { page: newPage } });
	}

public setFilter(event){
  this.productfilter = event


  this.products = this.allItems.filter(function(ele){
    return ele.price <= event.to_price && ele.price>=event.from_price
  })
}
   // for follow designer start
  //  rating start
  countStar(star) {
    this.selectedValue = star;
    this.model.raiting = star;
    console.log('Value of star', star,this.model);


  }
  //  rating end
  // openfollowModal start
  // openfollowModal start
  openfollowModal(_identifier,designer) {
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
          this.getDesignerById();
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
  // openfollowModal end
   
  // onFollow submit start
  onSubmitFollowform(form:NgForm)
  {
    console.log(this.userdata);
    
    console.log("form.value",form.value);
    // var data ={
    //   comment:form.value.
    // }
    this.designerFollowSubscribe = this.http.post(API_URL+this.followapi_url,form.value).subscribe(
      (response:any) => {
        console.log("response",response);
        if(response.status === 200){
          this.toastrService.success(response.message);
          this.modalService.dismissAll();
          form.reset();
          this.selectedValue = 0;
          this.model.raiting = 0;
        }else {
        }
        this.getDesignerById();
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
  // onFollow submit end
  // for follow designer end
  public productSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    nextArrow:"<div class='nav-btn next-slide ti-angle-right'></div>",
    prevArrow:"<div class='nav-btn prev-slide ti-angle-left'></div>",
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots:false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          dots:false,
        }
      }
    ]
  };
  openLoginNav()
  {
    // this.showScreen = 'login';
    this.loginNav.addNavLogin();
  }
     // ngOnDestroy start
     ngOnDestroy() {
      if(this.getDesignerSubscribe !== undefined){
        this.getDesignerSubscribe.unsubscribe();
      }else if(this.getProductSubscribe !== undefined){
        this.getProductSubscribe.unsubscribe();
      }else if(this.designerFollowSubscribe !== undefined){
        this.designerFollowSubscribe.unsubscribe();
      }else if(this.logoutDataSubscribe !== undefined){
        this.logoutDataSubscribe.unsubscribe();
      }else if(this.getUserDetailss !== undefined){
        this.getUserDetailss.unsubscribe();
      }
    }  
    // ngOnDestroy end
}
