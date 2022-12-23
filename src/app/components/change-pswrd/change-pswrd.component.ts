import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-change-pswrd',
  templateUrl: './change-pswrd.component.html',
  styleUrls: ['./change-pswrd.component.scss']
})
export class ChangePswrdComponent implements OnInit {

  showPassword = false;
  login_form!: FormGroup;
  hide = true;
  hide1 = true;
  hide2 = true;

  email = new FormControl('', [Validators.required]);
  email1 = new FormControl('', [Validators.required]);
  email2 = new FormControl('', [Validators.required]);
  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your current password';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessage1() {
    if (this.email.hasError('required')) {
      return 'You must enter the new password';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessage2() {
    if (this.email.hasError('required')) {
      return 'You must enter your new password again';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
