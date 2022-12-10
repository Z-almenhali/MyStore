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
    let found_in_cart = false;
    this.cart.forEach(item => {
      if (item.product.id == product.id) {
        item.quantity += quantity;
        found_in_cart = true;
      }
    });

    if (!found_in_cart) {
      this.cart.push({
        "product": product,
        "quantity": quantity
      });
    }
  }

  RemoveFromCart(product_id: number){
    const product_index = this.cart.findIndex(item => {
      return item.product.id === product_id;
    });
    this.cart.splice(product_index, 1);
  }

  GetCart() {
    return this.cart;
  }
  setOrderInformation(orderInfo: orderInfo): void {
    this.orderInfo = orderInfo;
  }

  clearCart() {
    return this.cart = [];
  }

  getOrderInformation(): orderInfo {
    return this.orderInfo;
  }
}


