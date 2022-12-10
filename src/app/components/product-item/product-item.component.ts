import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { product } from 'src/app/models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product: product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  }
  // TODO fix type

  quantity = '1';
  available_quantites = ['1', '2', '3', '4', '5'];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  AddToCart() {
    this.cartService.AddToCart(this.product, Number(this.quantity));
    alert(`${this.product.name} has been added to your cart.`);
  }


}
