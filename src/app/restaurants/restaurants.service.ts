import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http:HttpClient) { }
  
  getData()
  {
    let url="http://localhost:2555/rest/restaurant";
    return this.http.get(url);
  }

  getDataByDeliveryTime () {
    let url="http://localhost:2555/rest/restaurant/deliveryTime";
    return this.http.get(url);
  }

  getDataByCuisines() {
    let url="http://localhost:2555/rest/restaurant/Cuisines";
    return this.http.get(url);
  }

  getDataByReviews() {
    let url="http://localhost:2555/rest/restaurant/Reviews";
    return this.http.get(url);
  }

  getDataByRating() {
    let url="http://localhost:2555/rest/restaurant/Rating";
    return this.http.get(url);
  }

  filterByVegOnly(){
    let url="http://localhost:2555/rest/restaurant/VegOnly";
    return this.http.get(url);
  }

}
