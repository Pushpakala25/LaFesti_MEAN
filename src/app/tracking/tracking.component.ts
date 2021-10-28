import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrackingService } from './tracking.service';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  feedbackForm: any;
  displayMessage: string;  
  // record: any;

  constructor(private fB: FormBuilder, public tS: TrackingService ) { }

  

  ngOnInit(): void {
    this.feedbackForm = this.fB.group({
      rating: [''],
      comt: []
    })
    
  }
  // onSubmit() {
  //  this.submitForm();
    
  // }
  submitForm() {
    this.displayMessage = 'Thank you for your feedback..!!!';
  }

  fun() {
    console.log(this.feedbackForm.value);

    this.tS.addComment(this.feedbackForm.value).subscribe((data) => {
      console.log(data);
      this.submitForm();

      // this.record = data;
    });
  }
}
