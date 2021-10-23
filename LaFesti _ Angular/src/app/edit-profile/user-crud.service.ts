import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(public http:HttpClient) { }
  getListOne(id:any){
    return this.http.get(`http://localhost:2555/profile/data/${id}`)
  }
  getUpdate(user:any, id:any){
    return this.http.put(`http://localhost:2555/profile/update/${id}`,user)
  }
 getFoodOne(id:any){
  return this.http.get(`http://localhost:2555/profile/food/${id._id}`)
}
}
