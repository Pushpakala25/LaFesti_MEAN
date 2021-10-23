import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cS:CartService) { }
  cartCount = 0;
  ngOnInit(): void {
    this.cS.cartCount.subscribe((c) => {
      this.cartCount = c;
    });
  }

  logout() {
    sessionStorage.clear();
  }
  

}
