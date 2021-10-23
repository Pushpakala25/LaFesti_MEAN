import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public mS:MenuService,public cS:CartService) { }
  menus: any[] = [];

  ngOnInit(): void {
    this.mS.getAllMenu().subscribe((data: any) => {
      this.menus = data;
    });
  }

  menu:any[]=[]
  itemsCart:any = [];
  addToCart(p:any) {
    const user_id = sessionStorage.getItem("_id");
    this.cS.addMenuToCart(p);
    console.log(user_id);
    this.menu.push(p._id);
    console.log(this.menu);
    this.mS.cart_list = this.menu;
    
    // this.mS.AddCart(user_id,this.menu).subscribe((data:any)=>{
    //   console.log(data);
      
    // });
  }
  

}
