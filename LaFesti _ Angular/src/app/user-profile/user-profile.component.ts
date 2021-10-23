import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCrudService } from '../edit-profile/user-crud.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public iS: UserCrudService,
    public http: HttpClient,
    public aR: ActivatedRoute) { }


    id:any;
    userData:any;
  //  foodData:any;

  ngOnInit(): void {
    this.id = sessionStorage.getItem('_id')
    this.iS.getListOne(this.id).subscribe((value: any) => {
      console.log(value);
      this.userData=value;
    })
  }

}
