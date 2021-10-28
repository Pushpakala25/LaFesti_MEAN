import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(public http : HttpClient) { }
  addComment(x: any) {
    return this.http.post<any>('http://localhost:2555/track/addFeedback', x);
    console.log(x);
  }
}
