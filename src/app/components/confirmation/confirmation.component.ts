import { Component , OnInit} from '@angular/core';
 import { CartService } from 'src/app/service/cart.service';
 import { orderInfo } from 'src/app/models/orderInfo';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

   fullName: string | null = '';
  total_price:  number | null = 0;
  orderInfo!: orderInfo;

  constructor( private cartService: CartService) { }

  ngOnInit(): void {

    this.orderInfo = this.cartService.getOrderInformation();
    
  }

}
