import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from '../../classes/product';
import { CartItem } from '../../classes/cart-item';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Observable, of, Subscription } from 'rxjs';
import { WishlistService } from 'src/app/services/wishlist.service';
import { LoginService } from 'src/app/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginNavService } from 'src/app/services/login-nav.service';
import { CommonUtils } from 'src/app/services/common-utils/common-utils';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class CartComponent implements OnInit {

  public cartItems          :   Observable<CartItem[]> = of([]);
  public shoppingCartItems  :   CartItem[] = [];
  get_user_dtls: any;
  userId: string;
  pageNo: number = 0;
  limit=12;
  cartlistapi: string;
  localstorage: boolean = true;
  pagination: boolean;
  private getCartlistSubscribe: Subscription;
  model:any = {};
  private setQtySubscribe: Subscription;
  setqtyapi: string;
  pageDisabled: boolean;
  total_price = 0;
  removefromCartSubscribe: Subscription;
  mulDelBtn: boolean;
  loader: boolean;
  noLoader: boolean;
  data: any = [];
  local_data: any =[];
  constructor(private productsService: ProductsService,
    private cartService: CartService,private wishlistService: WishlistService,
    private authService: LoginService,private toastrService:ToastrService,
    private http:HttpClient,private loginNav: LoginNavService,private commonUtils: CommonUtils,private changeDetector: ChangeDetectorRef,) { }

  ngOnInit() {
    this.mulDelBtn = true;
  	this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    // this.total_price = 0
    // var getitemTotal = 0
    // var allcart:any = {};
    // allcart = this.shoppingCartItems;
    // console.log("allcart",allcart);
    
    // for(let i = 0;i < this.shoppingCartItems.length; i++)
    // {
    //   getitemTotal =  allcart[i].quantity *  allcart[i].product.price.indPrice.dealPrice
    //   this.total_price = this.total_price + getitemTotal;
    // }
    // console.log('shoppingCartItems', getitemTotal,this.total_price);
    this.getTotal();
    this.commonFunction();
    
  }
  //  commonFunction start
  commonFunction()
  {
    this.authService.globalparamsData.subscribe(res => {
      console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
      if (res != null || res != undefined) {
        this.get_user_dtls = res.logininfo;
        console.log('this.get_user_dtls************', this.get_user_dtls);
        // user details set
        
        this.userId = this.get_user_dtls.uid
        this.model.quantity = 1;
        this.setqtyapi = "user/cart/update";
        this.cartlistapi = "user/cart/getUserCart?userId="+this.userId;
        // Call wish list data 
        this.getCartListData();
        this.localstorage = false;
      }else{
        this.data = [];
        this.local_data = JSON.parse(localStorage.getItem("cartItem")) || [];
        console.log("this.local_data ",this.local_data );
        
        for (let j = 0; j < this.local_data.length; j++) {
          this.data.push(
            {
            displayName:this.local_data[j].product.designerProfile.displayName,
            productName:this.local_data[j].product.productDetails.productName,
            images:this.local_data[j].product.images[0].large,
            productId:this.local_data[j].product.productId,
            slug:this.local_data[j].product.slug,
            selectedSize:this.local_data[j].product.selectedSize,
            purchaseMinQuantity:this.local_data[j].product.purchaseMinQuantity,
            quantity:this.local_data[j].quantity,
            purchaseMaxQuantity:this.local_data[j].product.purchaseMaxQuantity,
            salePrice:this.local_data[j].product.deal.salePrice,
            mrp:this.local_data[j].product.mrp,
            customization:this.local_data[j].customization,
          }
          )
          this.changeDetector.detectChanges();
        }
        console.log("Local Data Array...",this.data);
        this.total_price = 0
        var getitemTotal = 0
        for (let index = 0; index < this.data.length; index++) {
          
          
          if(!this.data[index].slug)
          {
            let name = this.data[index].productName.toLowerCase( );
            this.data[index].slug = name.replace(/ /g, "-");
          }
          
        }
        console.log('this.shoppingCartItems',this.shoppingCartItems);
        
        for(let i = 0;i < this.data.length; i++)
        {

          if(this.data[i].salePrice || this.data[i].salePrice == 0)
          {
            getitemTotal = this.data[i].quantity * this.data[i].salePrice;
          }else{
            getitemTotal = this.data[i].quantity * this.data[i].mrp;
          }
          this.total_price = this.total_price + getitemTotal;
        }
      }
    });
  }
  // commonFunction end
  //  get wish list after login start
  
  getCartListData() {
    console.log('getCartListData');
    
    if(this.noLoader == true)
    {
      this.loader = false;
      this.noLoader = false;
    }else{
      this.loader = true;
    }
    // this.loader = true;
    this.getCartlistSubscribe = this.http.get(API_URL+this.cartlistapi).subscribe(
      (response: any) => {
        this.loader = false;
        console.log('Cart list', response);
        this.shoppingCartItems = response;
        this.data = [];
        for (let index = 0; index < this.shoppingCartItems.length; index++) {
          let Data = response[index].cartData;
          for (let j = 0; j < Data.length; j++) {
            this.data.push(
              {
              displayName:response[index].designerProfile.displayName,
              productName:response[index].productDetails.productName,
              images:response[index].images[0].large,
              productId:response[index].productId,
              slug:response[index].slug,
              selectedSize:response[index].cartData[j].selectedSize,
              purchaseMinQuantity:response[index].purchaseMinQuantity,
              quantity:response[index].cartData[j].qty,
              purchaseMaxQuantity:response[index].purchaseMaxQuantity,
              salePrice:response[index].deal.salePrice,
              mrp:response[index].mrp,
              customization:response[index].cartData[j].customization,
              id:response[index].cartData[j].id
            }
            )
            this.changeDetector.detectChanges();
            // this.data = response[index].cartData[j];
            console.log("All Shopping Cart quantity...",this.data.quantity);
            console.log("All Shopping Cart Items length...",this.data);
          }
        }
        this.total_price = 0
        var getitemTotal = 0
        for (let index = 0; index < this.data.length; index++) {
          if(!this.data[index].slug)
          {
            let name = this.data[index].productName.toLowerCase( );
            this.data[index].slug = name.replace(/ /g, "-");
          }
          
        }
        console.log('this.shoppingCartItems',this.shoppingCartItems);
        
        for(let i = 0;i < this.data.length; i++)
        {

          if(this.data[i].salePrice || this.data[i].salePrice == 0)
          {
            getitemTotal = this.data[i].quantity * this.data[i].salePrice
          }else{
            getitemTotal = this.data[i].quantity * this.data[i].mrp
          }
          this.total_price = this.total_price + getitemTotal;
        }
        
        // console.log("shoppingCartItems",this.shoppingCartItems,this.shoppingCartItems.length);
       
        // this.toastrService.success(response.message); 
        if(response.status == 200)
        {
          this.pageDisabled = false
          
        }else if(response.status == 400){
          // this.toastrService.error(response.message); 
          console.log("Error1");
          this.mulDelBtn = false;
        }
        this.pagination = true;
      },
      errRes => {
        this.toastrService.error(errRes.error.message); 
        // console.log("Error");
        this.pageDisabled = false
        this.loader = false;
      }
    );
  }
  //  get wish list after login end
  setQuantity(identifire,product,current_qty)
  { 
    console.log("product",product);
    
    var qty;
    if(identifire == "increment")
    {
      if(current_qty != product.purchaseMaxQuantity && current_qty < product.purchaseMaxQuantity)
      {
        qty = current_qty + 1;
        var data = 
        {
          userId:this.get_user_dtls.uid,
          productId:product.productId,
          selectedSize:product.selectedSize,
          customization:product.customization,
          qty:qty,
        }
        this.setQuantityApiCall(data);
      }
      else{
        this.toastrService.warning('Maximum purchase quantity for this item is ' +product.purchaseMaxQuantity)
      }
    }
    else if(identifire == "decrement")
    {
      if(current_qty != product.purchaseMinQuantity && current_qty > product.purchaseMinQuantity)
      { 
        qty = current_qty - 1;
        var data = 
        {
          userId:this.get_user_dtls.uid,
          productId:product.productId,
          selectedSize:product.selectedSize,
          customization:product.customization,
          qty:qty
        }
        this.setQuantityApiCall(data);
      }
      else{
        this.toastrService.warning('Minimum purchase quantity for this item is ' +product.purchaseMinQuantity)
      }
    }
  }
  item: any ={};
  setQuantityApiCall(data)
  {
    this.pageDisabled = true;
    this.setQtySubscribe = this.http.put(API_URL+this.setqtyapi,data).subscribe(
      (response: any) => {
        console.log("setQuantityApiCall....",response);
        
      //  this.item = {
      //   quantity:response.qty
      //  }
      //  console.log("this.model.quantity",this.item.quantity );
       
       this.pageDisabled = false;
       this.noLoader = true;
        this.getCartListData()
      },
      errRes => {
        this.toastrService.error(errRes.error.message); 
        this.pageDisabled = false;
        this.noLoader = true;
        this.getCartListData()
      }
    );
  }
  // Add to wishlist

  public addToWishlist(product: Product) {
    let local_product:any= {} = product;
    // console.log('this.local_data[i]',this.local_data);

    if(this.get_user_dtls){
      this.wishlistService.addToWishlist(product);
    }else{
      for (let i = 0; i < this.local_data.length; i++) {
        console.log('this.local_product',local_product.productId);
        console.log('this.local_data[i]',this.local_data[i].product.productId);
        if(local_product.productId == this.local_data[i].product.productId)
        // console.log('this.local_data[i]',this.local_data[i]);
        
        product = this.local_data[i].product;
        console.log("product Data..",product);
      }
      this.wishlistService.addToWishlist(product);
      this.local_data = [];
    }
    
  }
  // Increase Product Quantity
  public increment(product: any, size:any, quantity: number) {
    let local_product:any= {} = product;
    console.log("size...",size);
    product.selectedSize = size;
    console.log("product...",product);
    
    if(quantity < product.purchaseMaxQuantity )
    {
      for (let i = 0; i < this.local_data.length; i++) {
        console.log('this.local_product12234567',local_product.productId,this.local_data[i].product.productId,local_product.selectedSize,this.local_data[i].product.selectedSize);
        // console.log('this.local_product',local_product.selectedSize);
        // console.log('this.local_data[i]',this.local_data[i]);
        if(local_product.productId == this.local_data[i].product.productId && local_product.selectedSize == this.local_data[i].product.selectedSize){
          console.log("hello");
          product = this.local_data[i].product;
        }
        // console.log('this.local_data[i]',this.local_data[i]);
       
      }
      console.log("product Data..",product);
      this.cartService.updateCartQuantity(product,1);
      this.getTotal()
      this.commonFunction();
    }
    else{
      this.toastrService.warning('Maximum purchase quantity for this item is ' + product.purchaseMaxQuantity)
    }
  }
  // public increment(product: any, quantity: number) {
  //   if(quantity < product.purchaseMaxQuantity )
  //   {
  //     this.cartService.updateCartQuantity(product,1);
  //     this.getTotal()
  //   }
  //   else{
  //     this.toastrService.warning('Maximum purchase quantity for this item is ' + product.purchaseMaxQuantity)
  //   }
  // } //old change
  
  // Decrease Product Quantity
  public decrement(product: any, size: any, quantity: number) {
    console.log(product);
    product.selectedSize = size;
    
    if(quantity > product.purchaseMinQuantity )
    {
      this.cartService.updateCartQuantity(product,-1);
      this.getTotal()
      this.data = [];
      this.local_data = JSON.parse(localStorage.getItem("cartItem")) || [];
      console.log("this.local_data ",this.local_data );
      
      for (let j = 0; j < this.local_data.length; j++) {
        this.data.push(
          {
          displayName:this.local_data[j].product.designerProfile.displayName,
          productName:this.local_data[j].product.productDetails.productName,
          images:this.local_data[j].product.images[0].large,
          productId:this.local_data[j].product.productId,
          slug:this.local_data[j].product.slug,
          selectedSize:this.local_data[j].product.selectedSize,
          purchaseMinQuantity:this.local_data[j].product.purchaseMinQuantity,
          quantity:this.local_data[j].quantity,
          purchaseMaxQuantity:this.local_data[j].product.purchaseMaxQuantity,
          salePrice:this.local_data[j].product.deal.salePrice,
          mrp:this.local_data[j].product.mrp,
          customization:this.local_data[j].customization,
        }
        )
      }
      console.log("Local Data Array...",this.data);
      this.total_price = 0
      var getitemTotal = 0
      // for (let index = 0; index < this.data.length; index++) {
        
        
      //   if(!this.data[index].slug)
      //   {
      //     let name = this.data[index].productName.toLowerCase( );
      //     this.data[index].slug = name.replace(/ /g, "-");
      //   }
        
      // }
      console.log('this.shoppingCartItems',this.shoppingCartItems);
      
      for(let i = 0;i < this.data.length; i++)
      {

        if(this.data[i].salePrice || this.data[i].salePrice == 0)
        {
          getitemTotal = this.data[i].quantity * this.data[i].salePrice
        }else{
          getitemTotal = this.data[i].quantity * this.data[i].mrp
        }
        this.total_price = this.total_price + getitemTotal;
      }
    
    }
    else{
      this.toastrService.warning('Minimum purchase quantity for this item is ' + product.purchaseMinQuantity)
    }
  }
  // public decrement(product: any, quantity: number) {
  //   console.log(product);
    
  //   if(quantity > product.purchaseMinQuantity )
  //   {
  //     this.cartService.updateCartQuantity(product,-1);
  //     this.getTotal()
  //   }
  //   else{
  //     this.toastrService.warning('Minimum purchase quantity for this item is ' + product.purchaseMinQuantity)
  //   }
  // } //old change
  
  // Get Total
  // public getTotal(): Observable<number> {
  //   return this.cartService.getTotalAmount();
  // }
  
  // Remove cart items
  public removeItem(item: CartItem) {
    
    let local_product:any = item;
    // console.log('this.local_data[i]',this.local_data);
    console.log("removeItem shoppingCartItems...",this.shoppingCartItems);
    

    if(this.get_user_dtls){
      var data: any = [] = this.shoppingCartItems;
      console.log("get_user_dtls Data..",data);
      
      for (let i = 0; i < data.length; i++) {
        console.log("product Data..",data[i].productId);
        console.log("local_product.productId..",local_product.productId);

        if(data[i].productId == local_product.productId){
        // console.log('this.local_data[i]',this.local_data[i]);
          item = data[i];
          console.log("product Data..this.data[i]",data[i]);
          console.log("product Data..",item);
        }
      }
      this.cartService.removeFromCart(item);
      this.getCartListData();
    }else{
      for (let i = 0; i < this.local_data.length; i++) {
        console.log('this.local_product',local_product.productId);
        console.log('this.local_data[i]',this.local_data[i].product.productId);
        if(local_product.productId == this.local_data[i].product.productId && local_product.selectedSize == this.local_data[i].product.selectedSize){
          item = this.local_data[i].product;
          console.log("product Data..",item);
        }
      }
      this.cartService.removeFromCart(item);
      this.data = [];
      this.local_data = JSON.parse(localStorage.getItem("cartItem")) || [];
      console.log("this.local_data1236563672467 ",this.local_data,JSON.parse(localStorage.getItem("cartItem")) );
      
      for (let j = 0; j < this.local_data.length; j++) {
        this.data.push(
          {
          displayName:this.local_data[j].product.designerProfile.displayName,
          productName:this.local_data[j].product.productDetails.productName,
          images:this.local_data[j].product.images[0].large,
          productId:this.local_data[j].product.productId,
          slug:this.local_data[j].product.slug,
          selectedSize:this.local_data[j].product.selectedSize,
          purchaseMinQuantity:this.local_data[j].product.purchaseMinQuantity,
          quantity:this.local_data[j].quantity,
          purchaseMaxQuantity:this.local_data[j].product.purchaseMaxQuantity,
          salePrice:this.local_data[j].product.deal.salePrice,
          mrp:this.local_data[j].product.mrp,
          customization:this.local_data[j].customization,
        }
        )
      }
      console.log("Local Data Array...",this.data);
      // this.data = this.shoppingCartItems;
      this.total_price = 0
      var getitemTotal = 0
      // console.log('this.shoppingCartItems',this.shoppingCartItems);
      
      for(let i = 0;i < this.data.length; i++)
      {
        console.log('this.local_data display name',this.data[i].displayName);

        if(this.data[i].salePrice || this.data[i].salePrice == 0)
        {
          getitemTotal = this.data[i].quantity * this.data[i].salePrice
        }else{
          getitemTotal = this.data[i].quantity * this.data[i].mrp
        }
        this.total_price = this.total_price + getitemTotal;
      }
    }
    this.noLoader = true;
    // this.getTotal();
  }
  // getTotal start
  getTotal()
  {
    // var allcart:any = {};
    this.total_price = 0
    var getitemTotal = 0;
    // allcart = this.shoppingCartItems;
    // this.data = [];
    for(let i = 0;i < this.data.length; i++)
    {
      if(this.data[i].salePrice || this.data[i].salePrice == 0)
      {
        getitemTotal =  this.data[i].quantity *  this.data[i].salePrice;
      }else{
        getitemTotal =  this.data[i].quantity *  this.data[i].mrp;
      }
      this.total_price = this.total_price + getitemTotal;
    }
  }
  // getTotal end
  async askToClearcart() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-default'
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons.fire(
    {
      showCloseButton: true,
      title: 'Delete',
      text: 'Are you went to Delete all cart items ?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: false
    }
    ).then((result) => {
      if (result.value) {
        this.removeAllcart();
        return;
      }
    });
  }
  public removeAllcart() {
    
   this.removefromCartSubscribe = this.http.delete(API_URL+'user/cart/multipleDelete/'+this.get_user_dtls.uid).subscribe(
        (response:any) => {
          console.log('response', response);
            // this.toastrService.success(response.message); 
            if(response.status == 400){
              let cart = []
              this.commonUtils.getCartDataService(cart);
            }else {
              this.commonUtils.getCartDataService(response);
            }
            this.getCartListData();
        },
        errRes => {
          
        });   
  }  
  openLoginNav()
  {
    // this.showScreen = 'login';
    this.loginNav.addNavLogin();
  }
  ngOnDestroy() {
    if (this.getCartlistSubscribe !== undefined) {
      this.getCartlistSubscribe.unsubscribe();
    }
  }
}
