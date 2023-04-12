
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate, state } from "@angular/animations";
import { Product, ColorFilter, TagFilter } from '../../classes/product';
import { ProductsService } from '../../services/products.service';
import { LandingFixService } from '../../services/landing-fix.service';
import { HttpClient } from '@angular/common/http'
import * as _ from 'lodash'
import * as $ from 'jquery';
import { Filter } from 'src/app/widgets/filter/filter.model';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Options } from '@angular-slider/ngx-slider';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/services/auth/auth.service';
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCollectionComponent implements OnInit {
  value: number = 0;
  page: number = 0;
  highValue: number = 60000;
  options: Options = {
    floor: 0,
    ceil: 60000
  };
  sliderValue: any = 0;
  @Output() priceFilters = new EventEmitter();
  public products: Product[] = [];
  public items: Product[] = [];
  public allItems: Product[] = [];
  public colorFilters: ColorFilter[] = [];
  public tagsFilters: any[] = [];
  public tags: any[] = [];
  public sortByOrder: string = '';   // sorting
  public animation: any;   // Animation
  public collection_title: string;
  public productfilter: Filter;
  public category: string;
  config: any;
  collection = [];
  pageNo = 0;
  visiblefilter = false
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of data is reached
  allproducts = [];
  errorMsg: any;
  api_url: string;
  search = false;
  private productDataSubscribe: Subscription;
  subcategory: any = '';
  xyz
  public loader: boolean;
  private designerListSubscribe: Subscription;
  public logoutDataSubscribe: any;
  cod: string = '';
  customization: string = '';
  giftWrap: string = '';
  priceType: string = '';
  returnStatus: string = '';
  public minPrice: number = 0;
  public maxPrice: number = 60000;
  unchecked: any;
  sizes: any = [
    { name: 'XS', isSelected: false },
    { name: 'S', isSelected: false },
    { name: 'M', isSelected: false },
    { name: 'L', isSelected: false },
    { name: 'XL', isSelected: false },
    { name: 'XXL', isSelected: false },
    { name: '3XL', isSelected: false },
    { name: '4XL', isSelected: false },
    { name: '5XL', isSelected: false },
    { name: '6XL', isSelected: false },

  ];
  filter_api: string;
  private getCategoryList: Subscription;
  private getcolorsList: Subscription;
  private getsizeList: Subscription;
  catname: string;
  subcatname: string;
  subcategoryName: any;
  categoryName: any;
  public range: number[] = [0, 50000];
  designerId: string = '';
  categoryId: string = '';
  sizeName: string = '';
  colorName: string = '';
  designerftr = false;
  categoryftr = false;
  subcategoryftr = false;
  priceftr = false;
  colorftr = false;
  moreftr = false;
  sizeftr = false;
  sortDateType: string = '';
  sortPrice: string = '';
  countproducts: any = [];
  banner: any;
  pagination: any = {};
  subcategoris: any = [];
  subcategoryId: string;
  noProductfound: boolean;
  searchCategoryName: string;
  activatedRoutecategory: any;
  alldesigners = [];
  get_user_dtls: any;

  params_category;
  params_subcategory;
  params_keywords;
  params_subcategoryname;

  constructor(private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private productsService: ProductsService,
    private fix: LandingFixService,
    private activatedRoute: ActivatedRoute,
    private authService: LoginService,
    private _cdr: ChangeDetectorRef,
    private http: HttpClient, private wishlistService: WishlistService,) {
    this.route.params.subscribe(event => {
      this.category = event.category;
      // this.setCategoryName(event.category);
      let id = event.category;
      if (id == 'all' || id == 'category') {
        this.categoryName = 'All'
      } else {

        this.getCategoryList = this.http.get(API_URL + 'category/viewByCategoryName').subscribe(
          (res: any) => {
            let categoris: any = [] = res;
            for (let index = 0; index < res.length; index++) {
              if (id == categoris[index].id) {
                this.categoryName = categoris[index].categoryName;
              }
            }
          },
          (error: any) => { this.toastrService.error(error.error.message); }
        );
      }
      this.activatedRoutecategory = event.category;
      this.subcategory = event.subcategory;
      this.searchevent = event.keywords;
      this.subcategoryName = event.subcategoryname;
      console.log("Route event", event);
      this.commonFunction()

    });
    console.log("Route event", event);


  }
  ngOnInit() {
  }
  throttle = 300;
  scrollDistance = 0.1;
  scrollUpDistance = 2;
  direction = "";
  setCategoryName(id) {
    if (id == 'all' || id == 'category') {
      this.categoryName = 'All'
    } else {

      this.getCategoryList = this.http.get(API_URL + 'category/viewByCategoryName').subscribe(
        (res: any) => {
          let categoris: any = [] = res;
          for (let index = 0; index < res.length; index++) {
            if (id == categoris[index].id) {
              this.categoryName = categoris[index].categoryName;
            }
          }
        },
        (error: any) => { this.toastrService.error(error.error.message); }
      );
    }

  }
  commonFunction() {
    this.params_category = this.activatedRoute.snapshot.params.category;
    this.params_subcategory = this.activatedRoute.snapshot.params.subcategory;
    this.params_keywords = this.activatedRoute.snapshot.params.keywords;
    this.params_subcategoryname = this.activatedRoute.snapshot.params.subcategoryname;

    console.log('URL', this.params_category+','+this.params_subcategory+','+this.params_keywords+','+this.params_subcategoryname);
    

    this.subcategoris = [];
    console.log("URL", this.category, this.subcategory, this.searchevent);
    // category 
    if (this.searchevent == 'search' || this.searchevent == 'false') {
      this.searchevent = '';
    }
    this.searchkey = this.searchevent;
    this.getCategoryList = this.http.get(API_URL + 'category/viewByCategoryName').subscribe(
      (res: any) => {
        this.categoris = res;
        for (let index = 0; index < res.length; index++) {
          this.categoris[index].isActive = false;
          if (this.category == this.categoris[index].id) {
            this.categoris[index].isActive = true;
            console.log("TESTTEST", this.category, this.categoris[index].id, this.categoryName);

          } else {
          }



        }
      },
      (error: any) => { this.toastrService.error(error.error.message); }
    );
    if (this.subcategory == 'all' || this.subcategory == 'subcategory') {
      this.subcategory = '';
    }
    if (this.category == 'all' || this.category == 'category') {
      this.category = '';

    } else {
      // this.categoryId = this.category;
      this.category = this.activatedRoute.snapshot.params.category;
      if (this.category != 'category' && this.category != 'all') {
        this.getSubcategory(this.activatedRoute.snapshot.params.category)
      }
    }

    this.logoutDataSubscribe = this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
      }
    });

    this.getalldata();
    this.allproducts = [];
    this.getProductList();

  }

  choseCategory(catId, event) {
    if (event.target.checked) {
      this.subcategoris = [];
      for (let index = 0; index < this.categoris.length; index++) {
        if (this.categoris[index].id == catId) {
          this.category = catId.toString();
        } else {
          this.categoris[index].isActive = false;
        }

      }
      this.getSubcategory(catId)
    } else {
      this.subcategoris = [];
    }
    this.allproducts = [];
    this.getProductList();
  }
  count = 0;
  getSubcategory(id) {
    this.designerListSubscribe = this.http.get(API_URL + 'subcategory/getAllSubcategory/' + id).subscribe(
      (response: any) => {
        for (let index = 0; index < response.length; index++) {
          this.subcategoris.push({ categoryName: response[index].categoryName, id: response[index].id, isSelected: false })
        }
        // for (let index = 0; index < response.length; index++) {
        //   if(this.subcategoris.length && this.count == 1)
        //   {
        //     if(this.subcategoris[index].id == response[index].id)
        //     {
        //       this.subcategoris.splice(1,index) 
        //     }
        //   }

        // }
        this.count++;
        // this.subcategoris = response;
      },
      error => { this.toastrService.error(error.error.message); }
    );
  }
  designers = [];
  categoris = [];
  colors = [];
  getalldata() {
    // designerlist
    this.designerListSubscribe = this.http.get(API_URL + 'designer/userDesignerPopList').subscribe(
      (response: any) => {
        this.designers = [];
        console.log('this.designers', this.designers);

        for (let index = 0; index < response.length; index++) {
          this.designers.push({ dId: response[index].dId, designerName: response[index].designerProfileEntity.designerName, displayName: response[index].designerProfileEntity.designerProfile.displayName, isSelected: false })

        }
        // this.designers = response;
      },
      error => { this.toastrService.error(error.error.message); }
    );
    // end designerlist

    // colors
    this.getcolorsList = this.http.get(API_URL + 'adminMData/coloreList').subscribe(
      (res: any) => {
        this.colors = [];
        for (let index = 0; index < res.length; index++) {
          this.colors.push({ colorName: res[index].colorName, colorValue: res[index].colorValue, isSelected: false })

        }
        console.log("this.colors", this.colors);

        // this.colors = res;
      },
      (error: any) => { this.toastrService.error(error.error.message); }
    );
    // colors end
  }


  public pageChange(newPage: number) {
    this.router.navigate(['/collections/' + this.category + '/' + this.subcategory + '/' + 'false/' + this.subcategoryName], { queryParams: { page: newPage } });
  }

  // Infinite scroll
  // public onScroll() {
  //     this.lastKey = _.last(this.allItems)['id'];
  //     if (this.lastKey != _.last(this.items)['id']) {
  //        this.finished = false
  //     }
  //     // If data is identical, stop making queries
  //     if (this.lastKey == _.last(this.items)['id']) {
  //        this.finished = true
  //     }
  //     if(this.products.length < this.allItems.length){
  //        let len = this.products.length;
  //        for(var i = len; i < len+4; i++){
  //          if(this.allItems[i] == undefined) return true
  //            this.products.push(this.allItems[i]);
  //        }
  //     }
  // }
  // sortBy
  sortBy(identifire, sortType) {
    this.sortByOrder = sortType;
    console.log(identifire, sortType);

    if (identifire == 'price') {
      this.sortPrice = sortType;
    } else {
      this.sortDateType = sortType;
    }
    this.allproducts = [];
    this.getProductList();
  }
  // sortBy end
  // rangeChanged
  priceChanged(event: any) {
    console.log(event);

    this.minPrice = event[0];
    this.maxPrice = event[1];
    this.allproducts = [];
    this.getProductList();
  }
  sliderEvent() {
    console.log("eve", this.sliderValue);

  }
  scrollToTop() {
    // window.scrollTo(0,0);
    //or document.body.scrollTop = 0;
    //  delay(10000)
    // document.querySelector('body').animate({ transform: 'translateY(0px)' },{  // timing options
    //   duration: 2000
    // })
    document.querySelector('body').scrollTo(0, 0)
    console.log("window.scroll", window.scroll,);

  }
  searchevent;
  searchkey;
  searchText(keyword) {
    this.page = 0
    if (keyword) {
      this.router.navigateByUrl('/collections/' + this.activatedRoute.snapshot.params.category + '/subcategory/' + keyword + '/subcategoryName').then(() => {
        this.allproducts = [];
        this.getProductList();
        this.visiblefilter = false;
        // window.location.reload();
      });
    } else {
      this.router.navigateByUrl('/collections/' + this.activatedRoute.snapshot.params.category + '/subcategory/' + 'search' + '/subcategoryName').then(() => {
        this.allproducts = [];
        this.getProductList();
        this.visiblefilter = false;
        // window.location.reload();
      });
    }
    console.log("keyword", keyword);

  }
  toggleFilter(event, title) {
    console.log(event);
    let eve;
    if (event == false) {
      eve = '';
    } else {
      eve = event;
    }
    if (title == 'COD') {
      this.cod = eve;
    } else if (title == 'customization') {
      this.customization = eve;
    } else if (title == 'returnStatus') {
      this.returnStatus = eve;
    } else if (title == 'giftwrap') {
      this.giftWrap = eve;
    }
    this.page = 0;
    this.allproducts = [];
    this.getProductList();
  }
  public designerTagsArray: any[] = [];
  public categoryTagsArray: any[] = [];
  public subcategoryTagsArray: any[] = [];
  public colorTagsArray: any[] = [];
  public sizeTagsArray: any[] = [];
  // checkedFilter start
  checkedFilter(filtertitle, event) {
    console.log(filtertitle, event);
    this.allproducts = [];
    let designerindex = this.designerTagsArray.indexOf(event.target.value);  // checked and unchecked value
    let categoryindex = this.categoryTagsArray.indexOf(event.target.value);  // checked and unchecked value
    let subcategoryindex = this.subcategoryTagsArray.indexOf(event.target.value);  // checked and unchecked value
    let colorindex = this.colorTagsArray.indexOf((event.target.value).replace('#', ''));  // checked and unchecked value
    let sizeindex = this.sizeTagsArray.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked) {
      if (filtertitle == 'designername') {
        this.designerTagsArray.push(event.target.value); // push in array cheked value
      } else if (filtertitle == 'categoryName') {
        this.categoryTagsArray.push(event.target.value); // push in array cheked value
      } else if (filtertitle == 'subcategoryName') {
        this.subcategoryTagsArray.push(event.target.value); // push in array cheked value
      } else if (filtertitle == 'colorName') {
        this.colorTagsArray.push((event.target.value).replace('#', '')); // push in array cheked value
      } else if (filtertitle == 'sizeName') {
        this.sizeTagsArray.push(event.target.value); // push in array cheked value
      }
      console.log(event.target.value);

    }
    else {
      if (filtertitle == 'designername') {
        this.designerTagsArray.splice(designerindex, 1);  // removed in array unchecked value 
      } else if (filtertitle == 'categoryName') {
        this.categoryTagsArray = [];  // removed in array unchecked value 
        this.subcategory = '';
        this.subcategoryTagsArray = [];
      } else if (filtertitle == 'subcategoryName') {
        this.subcategoryTagsArray.splice(subcategoryindex, 1);  // removed in array unchecked value 
      } else if (filtertitle == 'colorName') {
        this.colorTagsArray.splice(colorindex, 1); // push in array cheked value
      } else if (filtertitle == 'sizeName') {
        this.sizeTagsArray.splice(sizeindex, 1); // push in array cheked value
      }
    }
    this.designerId = this.designerTagsArray.toString();
    this.colorName = this.colorTagsArray.toString();
    this.sizeName = this.sizeTagsArray.toString();
    this.categoryId = this.categoryTagsArray.toString();
    // this.category =     this.categoryTagsArray.toString();
    this.subcategoryId = this.subcategoryTagsArray.toString();
    this.subcategory = this.subcategoryTagsArray.toString();
    this.page = 0;
    console.log("event.target.value", event.target.value, this.colorTagsArray, this.colorName);

    console.log('this.subcategory', this.subcategory);
    console.log('subcategoris', this.subcategoris);
    console.log('designers', this.designers);
    this.allproducts = [];
    this.getProductList();



  }
  // checkedFilter end
  // clearFilter start
  clearFilter() {
    if (this.activatedRoute.snapshot.params.category == 'category' || this.activatedRoute.snapshot.params.category == 'all') {
      for (var i = 0; i < this.categoris.length; i++) {
        this.categoris[i].isActive = false;
      }
    }

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
    this.unchecked = '';
    this.designerId = '';
    if (this.activatedRoute.snapshot.params.category == 'category' || this.activatedRoute.snapshot.params.category == 'all') {
      this.category = '';
      this.searchCategoryName = 'category'
    } else {
      this.category = this.activatedRoute.snapshot.params.category;
      this.searchCategoryName = this.activatedRoute.snapshot.params.category;
    }

    this.subcategory = '';
    // this.category  = '';
    this.searchevent = ''
    this.searchkey = ''
    this.router.navigateByUrl('/collections/' + this.searchCategoryName + '/subcategory/' + 'search' + '/subcategoryName').then(() => {
      this.allproducts = [];
      this.visiblefilter = false;
      // window.location.reload();
    });
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
    this.sliderValue = [0, 60000];
    this.colorTagsArray = [];
    this.sizeTagsArray = [];
    this.categoryTagsArray = [];
    this.subcategoryTagsArray = [];
    this.allproducts = [];

    this.page = 0;
    this.getProductList();
    console.log(this.designerTagsArray);

  }
  // clearFilter end
  collapes() {

  }
  // appllyFilter start
  appllyFilter() {
    this.allproducts = [];
    this.visiblefilter = false;
    this.page = 0;
    this.getProductList();
  }
  // appllyFilter end
  loadData() {
    this.page = this.page + 1;
    this.getProductList();
  }
  public getProductList() {
    this.loader = true;
    this.searchkey = this.searchevent;
    this.filter_api = 'designerProducts/searching?searchKey=' + this.searchevent + '&page=' + this.page + '&limit=' + 48 + '&sortBy=Id' + '&designerId=' + this.designerId + '&categoryId=' + this.category + '&subCategoryId=' + this.subcategory + '&colour=' + this.colorName + '&cod=' + this.cod + '&customization=' + this.customization + '&priceType=' + this.priceType + '&returnStatus=' + this.returnStatus + '&giftWrap=' + this.giftWrap + '&maxPrice=' + this.maxPrice + '&minPrice=' + this.minPrice + '&size=' + this.sizeName + '&sortDateType=' + this.sortDateType + '&sortPrice=' + this.sortPrice + '&isFilter=' + true;

    this.productDataSubscribe = this.http.get(API_URL + this.filter_api).subscribe(
      (response: any) => {
        this.loader = false;
        // console.log('this.allproducts',this.allproducts,response);
        this.countproducts = response.data;
        this.alldesigners = response.designerProfile;
        console.log('DesignerProfile', this.alldesigners);

        if (this.allproducts.length != 0) {
          for (let index = 0; index < response.data.length; index++) {
            if (this.allproducts[index].productId != response.data[index].productId) {
              this.allproducts.push(response.data[index]);
            }
          }

        } else {
          this.allproducts = response.data;
        }
        // for (let index = 0; index < response.data.length; index++) {
        //   this.allproducts.push(response.data[index]);
        //   if(this.allproducts.length !=0)
        //   {

        //     if(this.allproducts[index].productId != response.data[index].productId)
        //     {
        //       this.allproducts.push(response.data[index]);
        //     }
        // console.log('this.allproducts',this.allproducts[index],response.data[index]);

        // }else{
        //   this.allproducts.push(response.data[index]);
        // }
        // console.log('this.allproducts',this.allproducts,response);
        // this.allproducts.push(response.data[index]);
        // }
        // console.log('this.allproducts',this.allproducts,response);

        this.pagination = response;
        if (this.allproducts.length && this.pagination.currentPage == this.pagination.totalPage) {
          this.noProductfound = true;
        }
        else {
          this.noProductfound = false;
        }
        console.log(this.allproducts.length, this.countproducts.length);

        console.log("this.allproducts", this.loader, this.allproducts);
        this._cdr.detectChanges()
        // this.route.queryParamMap.map(params => params.get('page')).subscribe(page => this.config.currentPage = 1);

      },
      errRes => {
        this.loader = false;
        console.log("this.allproducts", this.loader, this.allproducts);

        this.toastrService.error(errRes.error.message);
      }
    );
    // this.config = {
    //   currentPage: 1,
    //   itemsPerPage: 12
    // };
    // console.log("this.allproducts",this.loader,this.allproducts);

  }
  public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }
  ngOnDestroy() {
    if (this.designerListSubscribe !== undefined) {
      this.designerListSubscribe.unsubscribe();
    }
    if (this.productDataSubscribe !== undefined) {
      this.productDataSubscribe.unsubscribe();
    }
    if (this.getCategoryList !== undefined) {
      this.getCategoryList.unsubscribe();
    }
    if (this.getcolorsList !== undefined) {
      this.getcolorsList.unsubscribe();
    }
    if (this.getsizeList !== undefined) {
      this.getsizeList.unsubscribe();
    }

  }
  // ngOnDestroy end
}
