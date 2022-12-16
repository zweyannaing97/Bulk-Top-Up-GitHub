import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-request-otp',
  templateUrl: './request-otp.component.html',
  styleUrls: ['./request-otp.component.scss']
})
export class RequestOtpComponent implements OnInit {

  otp_form_valid: boolean = false;
  form!:FormGroup
  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      mobileNumber: ['', Validators.required],
    });
  }

  formValidation(){
    if (this.form.invalid) {
      this.otp_form_valid = false;
    }
    else{
      this.otp_form_valid = true;
    }
  }
  progress = 0;
  progressBar = document.querySelector('.progress-bar');
  intervalId:any;
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
