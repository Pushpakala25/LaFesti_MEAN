import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogregService } from '../logreg.service';

@Component({
  selector: 'app-loginheader',
  templateUrl: './loginheader.component.html',
  styleUrls: ['./loginheader.component.css']
})
export class LoginheaderComponent implements OnInit {

  constructor(public fb: FormBuilder, public lr: LogregService,
    public router:Router) { }
  addressform: any;
  status = false;
  ngOnInit(): void {
    this.addressform = this.fb.group({
      address: ['',Validators.required],
    })
  }
  get address() {
    return this.addressform.controls['address'];
  }
  addadd() {
    if(this.address.value!='') {
      if(!this.addressform.invalid) {
        this.lr.addaddress(this.addressform.value).subscribe((data) => { });
        this.status = true;
        sessionStorage.setItem('location', this.address.value)
      }
    }
    else {
      this.status = false;
    }
  }
}
