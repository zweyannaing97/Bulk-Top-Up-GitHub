import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import $ from "jquery";
@Component({
  selector: 'app-otp-request',
  templateUrl: './otp-request.component.html',
  styleUrls: ['./otp-request.component.scss']
})
export class OtpRequestComponent implements OnInit {

  @Output() otp_cancelEvent = new EventEmitter<any>();
  @Output() otp_submitEvent = new EventEmitter<any>();
  @Input() coutDownSecounds!: number;
  timeLeft: number = 10;
  interval: any;
  isTimeUp: boolean = false;




  otpCancel() {
    this.otp_cancelEvent.emit({});
  }

  otpSubmit(){
    this.otp_submitEvent.emit({});
  }

  resentOtp(){
    this.isTimeUp = !this.isTimeUp;
    this.startTimer();
  }

  startTimer() {
    var time = this.coutDownSecounds;
    var initialOffset = 440;
    var i = 1
    var j = this.coutDownSecounds;

    /* Need initial run as interval hasn't yet occured... */
    $('.circle_animation').css('stroke-dashoffset', (initialOffset)-(1*(initialOffset/time)));

    var interval = setInterval(() => {
      $('text').text(j - 1);
      if (i == time) {
        this.isTimeUp = !this.isTimeUp;
        clearInterval(interval);
        return;
      }

      $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
      i++;
      j--;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }



  otp_form_valid: boolean = false;
  form!:FormGroup
  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.startTimer();
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