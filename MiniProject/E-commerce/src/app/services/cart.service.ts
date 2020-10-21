import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
    
  }
  addToCart1(laptop) {
    this.items.push(laptop);    
  }

  addToCart2(television) {
    this.items.push(television);    
  }

  addToCart3(washingMachine) {
    this.items.push(washingMachine);    
  }

  addToCart4(topDeal) {
    this.items.push(topDeal);    
  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }


}