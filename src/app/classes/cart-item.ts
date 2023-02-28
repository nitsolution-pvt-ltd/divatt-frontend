import { Product } from './product';

// cart items
export interface CartItem {
    product?: Product;
    quantity?: number;
    selectedSize?:any;
    customization?: boolean;
    productDetails?:{
        productName:string;
    };
    slug?:string;

}