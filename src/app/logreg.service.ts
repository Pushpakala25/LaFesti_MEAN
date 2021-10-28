import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogregService {

  constructor(public http:HttpClient) { }
  adduser(newuser:any) {
    return this.http.post('http://localhost:2555/logreg/register', newuser);
  }

  getusers() {
    return this.http.get('http://localhost:2555/logreg/loginuser');
  }
  forgotpassword(info:any){
    return this.http.put(`http://localhost:2555/logreg/forgotpassword/${info._id}`, info);
  }
  addaddress(address:any) {
    return this.http.post('http://localhost:2555/logreg/address', address);
  }
}
