import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import type { product } from 'src/app/models/product';
import { orderInfo } from 'src/app/models/orderInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  fullName!: string;
  address!: string;
  cardNumber!: string;
  orderInfo!: orderInfo;
  constructor(private cartService: CartService,private router: Router
  ) { }



  cart: {
    product: product,
    quantity: number
  }[] = [];
  total_price: number = 0;


  ngOnInit(): void {
    this.cart = this.cartService.GetCart();
    this.cart.forEach((product_in_cart: { quantity: number; product: product; }) => {
      this.total_price += product_in_cart.quantity * product_in_cart.product.price;
    });

  }


  onSubmit(): void {
    const orderInfo: orderInfo = {
      fullName: this.fullName,
      total_price: this.total_price,
      address: this.address,
      cardNumber: this.cardNumber
}

this.cartService.setOrderInformation(orderInfo);
this.cartService.clearCart();
this.cart=[]
this.router.navigate(['/confirmation']);
// this.fullName = '';
// this.total_price =0;
// this.address = '';
// this.cardNumber ='';

  }

}