import { Injectable } from '@angular/core';
import { product } from '../models/product';
import { orderInfo } from '../models/orderInfo';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: {
    product: product,
    quantity: number
  }[] = [];
  orderInfo!: orderInfo;

  constructor() { }
  AddToCart(product: product, quantity: number) {
    this.cart.push({
      "product": product,
      "quantity": quantity
    });
  }

  GetCart() {
    return this.cart;
  }
  setOrderInformation(orderInfo: orderInfo): void {
    this.orderInfo = orderInfo;
  }

  clearCart(){
     
    return this.cart=[];
  }

  getOrderInformation(): orderInfo {
    return this.orderInfo;
  }
}


