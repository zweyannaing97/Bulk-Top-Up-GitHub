import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserTypeConstant } from 'src/app/core/constants/userType.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required]);
  emailFormControl1 = new FormControl('', [Validators.required]);

  hide = true;


  doctorType = UserTypeConstant.DOCTOR;
  patientType = UserTypeConstant.PATIENT;
  selectedUserType = this.patientType;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeUserType(userType: any) {
    this.selectedUserType = userType;
  }

}
