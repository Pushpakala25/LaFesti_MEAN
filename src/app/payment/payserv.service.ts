import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayservService {

  constructor(public http:HttpClient) { }
  


  addpay(paymentdet:any) {
    return this.http.post('http://localhost:2555/pay/payment', paymentdet);
  }

  

  chk(dis:any) {
    return this.http.post('http://localhost:7050/chk', dis);
  }
}