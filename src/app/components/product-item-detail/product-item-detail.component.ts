import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { CartService } from 'src/app/service/cart.service';
import { product } from 'src/app/models/product';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  constructor(private productService: ProductServiceService, private cartService: CartService,
    private route: ActivatedRoute,
  ) { }

  product: product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  }
  //^  TODO fix type
  quantity = '1';
  available_quantites = ['1', '2', '3', '4', '5'];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService.getProducts().subscribe((data) => {
        data.forEach(product => {
          if (product["id"] == params["id"]) {
            this.product = product;
          }
        });
      })
    });
  }

  AddToCart() {
    this.cartService.AddToCart(this.product, Number(this.quantity));
    alert(`${this.product.name} has been added to your cart.`);
  }

}


