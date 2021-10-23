import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  cartCount = new BehaviorSubject(0);
  cartMenus:any = [];

  addMenuToCart(menu:any) {
    this.cartMenus.push(menu);
    this.cartCount.next(this.cartMenus.length);
    
  }

  getdis() {
    return this.http.get('http://localhost:2555/getCart/testingall' );
  }

 


}
