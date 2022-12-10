import { Component, OnInit, Input } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList: product[]= [];


constructor( private productService: ProductServiceService){}

ngOnInit(): void{
  this.productService.getProducts().subscribe((data) => {
    this.productList = data;
  });
  
}

}