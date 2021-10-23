import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCrudService } from './user-crud.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public iS: UserCrudService,public http: HttpClient,public aR: ActivatedRoute,
    public fb: FormBuilder,public router: Router) { }

    usersForm:any;
    id:any;
    upd=false;
    loc:any;
   // profilepic:ImageData
    userData:any;

  ngOnInit(): void {
    this.usersForm = this.fb.group({
      firstname:[
        '',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(7),]
      ],
      lastname:[
        '',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(7),]
      ],
      username:[
        '',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(7),]
      ],
      password:[
        '',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(7),]
      ],                                
      email: [
        '',
       [Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        Validators.minLength(1)
      ]],
      phoneno: [
        '',
        [Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.minLength(1)
      ]],
      address: ['', [Validators.required, Validators.minLength(1)]],
      //bio: ['', [Validators.required, Validators.minLength(1)]],
      //profilepic:[''],
      _id: [], //model for student details
    }); //also u can use form builder to build the forms
     this.aR.params.subscribe((x)=>{
       console.log(x)
     this.id = sessionStorage.getItem('_id')
     this.loc = sessionStorage.getItem('location')
     console.log("UserId is:",this.id);
     console.log(this.loc);
     
     this.iS.getListOne(this.id).subscribe((data:any) => {
       console.log("data", data);
      this.userData=data;
      // this.usersForm.setValue(data);
      this.usersForm.get('username').setValue(data.username),
      this.usersForm.get('phoneno').setValue(data.phoneno),
      this.usersForm.get('password').setValue(data.password),
      this.usersForm.get('email').setValue(data.email),
      this.usersForm.get('address').setValue(this.loc)
       })
    })
  }

  update(){
    if(this.upd==false){
      this.iS.getUpdate(this.usersForm.value, this.id).subscribe((data)=>{
        //this.router.navigate(['/'])
        console.log(data);
       // alert('updated successfully');
      })
      this.upd=true;
    }
   else{
     this.upd=false;
   }
  }
  onSubmit(){
    this.router.navigate(['/Profile']);
  }
  get first_name() {
    return this.usersForm.controls['firstname'];
  }
  get last_name() {
    return this.usersForm.controls['lastname'];
  }
  get username() {
    return this.usersForm.controls['username'];
  }
  get password() {
    return this.usersForm.controls['password'];
  }
  get email() {
    return this.usersForm.controls['email'];
  }
  get phoneno() {
    return this.usersForm.controls['phoneno'];
  }
  get address() {
    return this.usersForm.controls['address'];
  }
 



}


