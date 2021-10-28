import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  cart_list : any;
  constructor(public http:HttpClient) { }
  getAllMenu() {
    return this.http.get('http://localhost:2555/menu/view');
  }

  AddCart(a:any,c:any[]){
    return this.http.post('http://localhost:2555/cart/InsertCart',({user_id:a,
    menu:c}))
  }

  getCart(){
    const id=sessionStorage.getItem("_id");
    return this.http.get(`http://localhost:2555/cart/viewCart/${id}`);
  }

  getcartitems(x){
    return this.http.post("http://localhost:2555/cart/viewCartItems",x)
  }
}
