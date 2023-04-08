import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { CartItem } from '../classes/cart-item';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subscriber, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { LoginService } from './auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonUtils } from './common-utils/common-utils';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;
// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("cartItem")) || [];

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  // Array
  public cartItems  :  BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  public observer   :  Subscriber<{}>;
  get_user_dtls: any;
  addToCartlistSubscribe: Subscription;
  removefromCartSubscribe: Subscription;
  removeItem;
  pageNo: number = 0;
  limit=12;
  cartlistapi: string;
  getCartlistSubscribe: Subscription;
  shoppingCartItems: any;
  
  constructor(private toastrService: ToastrService,private authService:LoginService,
    private commonUtils: CommonUtils,
    private http:HttpClient,private router : Router) { 
      this.cartItems.subscribe(products => products = products);
      this.authService.globalparamsData.subscribe(res => {
        console.log('(header)  globalparamsData res ssss >>>>>>>>>>>', res);
        if(res != null || res != undefined){
          this.get_user_dtls = res.logininfo;
          console.log('this.get_user_dtls************', this.get_user_dtls);
          // user details set
          this.getCartListData();
        }
      });
  }
  
  // Get Products
  public getItems(): Observable<CartItem[]> {
    const itemsStream = new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
    return <Observable<CartItem[]>>itemsStream;
  }
 
  
  // Add to cart
  selectedSize
  public addToCart(product: Product, quantity: number): CartItem | boolean {
    console.log("get_user_dtls",this.get_user_dtls);
    this.selectedSize = product.selectedSize;
    console.log("Products----",products);
    console.log("product",product);
    
    if(this.get_user_dtls)
    {
      
      console.log("get_user_dtls",this.get_user_dtls);
      var data:any = [];
      if(products.length > 0){
        for (let index = 0; index < products.length; index++) {
          console.log("products-if",products[index].product.productId);
          
          data.push({
            productId: products[index].product.productId,
            selectedSize:products[index].product.selectedSize,
            userId: this.get_user_dtls.uid,
            qty:quantity,
            customization: products[index].product.customization,
            measurementObject : products[index].measurementObject,

          });
          console.log("data",data);
          
        }
        // start 
        
      }else {
        
        console.log("products-else",products);
        data.push({
          productId: product.productId,
          selectedSize:product.selectedSize,
          userId: this.get_user_dtls.uid,
          customization: product.customization,
          qty:quantity,
          measurementObject:product.measurementObject,
        });
      }
      console.log('data >>>', data);
      this.addToCartlistSubscribe = this.http.post(API_URL+'user/cart/add',data).subscribe(
        (response:any) => {
          console.log('response', response);
          if(response.status == 200){
            this.toastrService.success(response.message); // toasr services
            this.getCartListData();
            localStorage.removeItem('cartItem');
            products = [];
          }else {
            this.toastrService.error(response.message); // toasr services
            this.getCartListData();
          }
          localStorage.removeItem('cartItem');
        },
        errRes => {
          this.toastrService.success(errRes.error.message); // toasr services
          this.getCartListData();
        });
      
    }
    else{
      console.log("product12345678...",product);
      var item: CartItem | boolean = false;
      // If Products exist
      let hasItem = products.find((items, index) => {
        console.log('items----', items,'/n','product----',product);
        let oldSize = items.product.selectedSize;
        items.selectedSize = product.selectedSize;
        items.customization =  product.customization;
        console.log('Cart items---', items);
        // localStorage.removeItem('wishlistItem');
      console.log("get_user_dtls",this.get_user_dtls);
        console.log('product.selectedSize---',product.selectedSize,oldSize);
        if(items.product.productId == product.productId && oldSize == product.selectedSize) {
          // if(oldSize == product.selectedSize){
            let qty = products[index].quantity + quantity;
            let stock = this.calculateStockCounts(products[index], quantity);
            if (qty != 0 && stock) {
              products[index]['quantity'] = qty;
              console.log("Add to cart quantity",products);
              localStorage.setItem("cartItem", JSON.stringify(products));
              this.toastrService.success('Cart added succesfully');
              
              
            }
            
            // localStorage.setItem("cartItem", JSON.stringify(products));
            
            return true;
          // }
          // else{
          //   return false;
          // }
        }
        // old
        // if(items.product.productId == product.productId && oldSize == product.selectedSize) {
        //   let qty = products[index].quantity + quantity;
        //     let stock = this.calculateStockCounts(products[index], quantity);
        //     if (qty != 0 && stock) {
        //       products[index]['quantity'] = qty;
        //       this.toastrService.success('Cart added succesfully');
        //     }
        //     return true;
        // }
        // old end
        else{
          
        }
      });
      // If Products does not exist (Add New Products)
      if(!hasItem) {
          let item = { product: product, selectedSize:this.selectedSize, quantity: quantity,customization: product.customization, };
          products.push(item);
          
          this.toastrService.success('Cart added succesfully');
      }
  
      localStorage.setItem("cartItem", JSON.stringify(products));
      var totalProduct= JSON.parse(localStorage.getItem("cartItem")) || [];
      this.commonUtils.getCartDataService(totalProduct);
      console.log('totalProduct',totalProduct);
      // localStorage.removeItem('wishlistItem');
      // // products = [];
      // this.router.navigateByUrl('cart');
      
      return item;
    }
   
  }
  
  // Update Cart Value
  public updateCartQuantity(product: Product, quantity: number): CartItem | boolean {
    console.log("updateCartQuantity product...",product);
    return products.find((items, index) => {
      console.log("Product Quantity...",items);
      console.log("products....",products);
      
      if(items.product.productId == product.productId && items.product.selectedSize == product.selectedSize) {
       let qty = products[index].quantity + quantity;
        let stock = this.calculateStockCounts(products[index], quantity);
        if (qty != 0 && stock) 
          products[index]['quantity'] = qty;
        localStorage.setItem("cartItem", JSON.stringify(products));
        return true;
      }
    });
  }
  
  // Calculate Product stock Counts
  public calculateStockCounts(product: CartItem, quantity): CartItem | Boolean {
    let qty   = product.quantity + quantity;
    let stock = product.product.stock;
    if(stock < qty) {
      this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.');
      return false
    }
    return true
  }
  // Removed in cart
  public removeFromCart(item: CartItem) {
    console.log("item",item);
    this.removeItem = item;
    if(this.get_user_dtls)
    {
      const data = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        body: {
          id: this.removeItem.cartData[0].id,
          userId: this.get_user_dtls.uid
        }
      }
      this.removefromCartSubscribe = this.http.delete(API_URL+'user/cart/delete',data).subscribe(
        (response:any) => {
          console.log('response', response);
          if(response.status == 200){
            this.toastrService.success(response.message); // toasr services
            this.getCartListData();
          }else {
            this.toastrService.error(response.message); // toasr services
          }
        },
        errRes => {
          this.toastrService.error(errRes.error.message); // toasr services
        });
    }else{
      if (item === undefined) return false; 
      // const index = products.indexOf(item);
      let size=item.selectedSize;
      console.log("selectedSize...AAAA",size);
      
      let product_id= this.removeItem.productId;
      console.log("index......",products);
      products.forEach((element)=>{
        if(element.product.productId == product_id && element.product.selectedSize == size){
          console.log("Inside if");
          let data = products.indexOf(element);
          products.splice(data,1);
        } 
        });
        console.log("Products ............",products);
        
      // products=products.filter(item1 => item1.product.productId !== product_id && item1.product.selectedSize !== size)
      // this.products = this.myArray.filter(item => item !== obj);
      // products.splice(index, 1);
      localStorage.setItem("cartItem", JSON.stringify(products));
      var totalProduct= JSON.parse(localStorage.getItem("cartItem")) || [];
      this.commonUtils.getCartDataService(totalProduct);
    }
   
  }
  // Total amount 
  public getTotalAmount(): Observable<number> {
    return this.cartItems.pipe(map((product: CartItem[]) => {
      return products.reduce((prev, curr: CartItem) => {
        // return prev + curr.product.price * curr.quantity;
      }, 0);
    }));
  }

  // Cart List
  public getCartListData() {
    console.log("getCartListData",this.cartlistapi);
    this.cartlistapi = "user/cart/getUserCart?userId="+this.get_user_dtls.uid+"&page=0&limit=0";
    this.getCartlistSubscribe = this.http.get(API_URL+this.cartlistapi).subscribe(
      (response: any) => {
        console.log('Cart list-----', response);
        if(response.status == 400){
          let cart = []
          this.commonUtils.getCartDataService(cart);
        }else {
          this.commonUtils.getCartDataService(response);
        }
       
      },
      errRes => {
        this.toastrService.error(errRes.error.message); 
      }
    );
  }


}