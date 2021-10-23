import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogregService } from '../logreg.service';

@Component({
  selector: 'app-signarea',
  templateUrl: './signarea.component.html',
  styleUrls: ['./signarea.component.css']
})
export class SignareaComponent implements OnInit {

  constructor(public fb: FormBuilder, public lr: LogregService,
    public router:Router) { }
  signinform: any;
  users: any;
  status = false;
  unmatch = false;
  success = false;
    ngOnInit(): void {
      this.signinform = this.fb.group({
        firstname: ['',Validators.required],
        lastname: ['',Validators.required],
        username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(15)],],
        phoneno: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]{10}')],],
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)],],
        confirmpassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)],]
      })
      this.users="";
      this.lr.getusers().subscribe((data) => {
        this.users = data;
      });
     }
     get firstname() {
      return this.signinform.controls['firstname'];
    }
    get lastname() {
      return this.signinform.controls['lastname'];
    }
    get email() {
      return this.signinform.controls['email'];
    }
    get phoneno() {
      return this.signinform.controls['phoneno'];
    }
    get password() {
      return this.signinform.controls['password'];
    }
    get confirmpassword() {
      return this.signinform.controls['confirmpassword'];
    }
    reguser() {
      for(var i of this.users) {
        if(i.email === this.email.value || i.phoneno === this.phoneno.value){
          this.status = true;
          break;
        }
        else {
          this.status = false;
        }
      }
      if(this.password.value === this.confirmpassword.value) {
       if(this.status===true){
        this.success = false;
        this.unmatch = false;
      }
      else {
        if(!this.signinform.invalid) {
          this.lr.adduser(this.signinform.value).subscribe((data) => { });
          this.success = true;
        }
     }
      }
      else {
        this.unmatch = true;
        this.success = false;
      }
    }
}
