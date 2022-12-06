export class orderInfo {
    
    fullName: string;
    total_price: number;
    address!: string;
    cardNumber!: string;
  
    constructor() {
 
      this.fullName = '';
      this. total_price = 0;
      this.address='';
      this.cardNumber= '';
  }}