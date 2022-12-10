import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor(private client: HttpClient) {}

  getProducts = (): Observable<product[]> => {
    return this.client.get<[product]>('assets/data.json');
  };

}  
