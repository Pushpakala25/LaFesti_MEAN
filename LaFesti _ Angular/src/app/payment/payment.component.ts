import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayservService } from './payserv.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  pay :any ;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public lr:PayservService, public router:Router) { }

  ngOnInit(): void {
    this.pay = this.formBuilder.group({
      Name: ['', Validators.required],
      card: ['', [Validators.required, Validators.minLength(16)]],
        exp: ['',[Validators.required, Validators.minLength(4)]],
        expm: ['',[Validators.required, Validators.minLength(2)]],
        password: ['',[Validators.required, Validators.minLength(3)]]
        
    });
    
  }

  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.pay.invalid) {
        return;
    }
    

    this.lr.addpay(this.pay.value).subscribe((data) => { });
    alert(" Payment Successful")
    this.router.navigate(["/hurray"])


  
}

get f() { return this.pay.controls; }

}
