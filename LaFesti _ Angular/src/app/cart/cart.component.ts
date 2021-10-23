import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuService } from '../menu/menu.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  promos: any;
  submitted = false;
  dis: any; //discount promo 

  c_list : any;
  price:any;
  total:any;
  clicked =false;
  status = false;
  constructor( public fb: FormBuilder,public cS:CartService,public mS:MenuService) { }

carts:any;
  ngOnInit(): void {
    this.c_list = this.mS.cart_list;
    console.log(this.c_list);
    this.mS.getcartitems(this.c_list).subscribe((data) => {
      console.log(data);
      this.carts = data
    },
    (err)=>{
      console.log(err);
      
    });

    //promo
    this.promos = this.fb.group({
        name: ['',Validators.required]       
      })
    
      this.dis="";
      this.cS.getdis().subscribe((data) => {
        this.dis = data;
        console.log(this.dis)
      });


  }


  get name() {
    return this.promos.controls['name'];
  }

  // discount ----
  discountval() 
  {
    for(var i of this.dis) {
      console.log(this.dis);
      
      if(i.name === this.name.value){
      
        // console.log("discountttt", this.grandtotal)

        alert("Discount Coupon Applied");
        this.carts.Price = this.carts.Price - 50;
        break;

    }
    else {
      console.log("discount",this.name);
      
     alert("Invalid Coupon Code");
    }
   }
  }

  dicsount1(): any{
    this.carts.Price = Number(this.carts.Price) / 2 ;
    return Math.abs(this.carts.Price);
    
    this.status=true;
    alert("50% Offer Applied");
  }

 

  


}
