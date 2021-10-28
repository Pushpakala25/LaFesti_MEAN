import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogregService } from '../logreg.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(public fb: FormBuilder, public lr: LogregService,
    public router:Router) { }
    forgotpasswordform:any;
    users: any;
    status = true;
    unmatch = false;
    success = false;
  ngOnInit(): void {
    this.forgotpasswordform = this.fb.group({
      phoneno: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}')],],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)],],
      confirmpassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)],],
      _id: ['']
    })
    this.users="";
    this.lr.getusers().subscribe((data) => {
      this.users = data;
    });
  }
  get email() {
    return this.forgotpasswordform.controls['email'];
  }
  get phoneno() {
    return this.forgotpasswordform.controls['phoneno'];
  }
  get password() {
    return this.forgotpasswordform.controls['password'];
  }
  get confirmpassword() {
    return this.forgotpasswordform.controls['confirmpassword'];
  }
  get _id() {
    return this.forgotpasswordform.controls['_id'];
  }
  resetpassword() {
    for(var i of this.users) {
      if(i.email === this.email.value && i.phoneno === this.phoneno.value){
        this.status = true;
        this._id.value = i._id;
        break;
      }
      else {
        this.status = false;
      }
    }
    if(this.password.value === this.confirmpassword.value) {
     if(this.status===true) {
      if(!this.forgotpasswordform.invalid) {
        this.lr.forgotpassword(this.forgotpasswordform.value).subscribe((data) =>{ });
        this.success = true;
      }
    }
    else {
      this.success = false;
      this.unmatch = false;
   }
    }
    else {
      this.unmatch = true;
      this.success = false;
    }
  }
}
