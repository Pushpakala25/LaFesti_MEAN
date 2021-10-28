import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogregService } from '../logreg.service';
@Component({
  selector: 'app-loginarea',
  templateUrl: './loginarea.component.html',
  styleUrls: ['./loginarea.component.css']
})
export class LoginareaComponent implements OnInit {
  constructor(public fb: FormBuilder, public lr:LogregService, public router: Router) { }
  loginform: any;
  users: any;
  _id: any;
  pass = false;
  status = false;
  login = false;
  username: any;
  message:any;
    ngOnInit(): void {
      this.users="";
      this.lr.getusers().subscribe((data) => {
        this.users = data;
      });
      this.loginform = this.fb.group({
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)],]
      })
     }
     get email() {
      return this.loginform.controls['email'];
    }
    get password() {
      return this.loginform.controls['password'];
    }
     loguser() {
      for(var i of this.users) {
        if(i.email === this.email.value && i.password === this.password.value){
          this.status = true;
          this._id = i._id;
          this.username = i.username
          break;
      }
      else {
        this.status = false;
      }
     }
       if(this.status===true){
        if(!this.loginform.invalid) {
          this.pass=false;
          sessionStorage.setItem('_id',this._id)
          sessionStorage.setItem('username',this.username)
        }
      }
      else {
        this.pass = true;
     }
      }
    }

