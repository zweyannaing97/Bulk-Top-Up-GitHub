import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  url = '../../../assets/img/profile-pic.jpg';

  onSelectFile(e:any){
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  companynames: string[] = ['Consumer Goods Myanmar limited', 'CGM Company Limited'];
  companylists = new FormControl;


  dpmntnames: string[] = ['Account Department', 'Admin Department','Sales Department'];
  dpmntlists = new FormControl;

  designationnames: string[] = ['Accountant', 'Branch Manager','Sales Person'];
  designationlists = new FormControl;

  usertypes = [
    { viewValue: 'User'},
    { viewValue: 'Admin'},
  ];

  transactions: string[] = ['Dashboard', 'User Role Master', 'User Role Permission', 'Telecom Masters', 'Process', 'Report','Change Password'];
  transactionlists = new FormControl;

  rolepermissiongroups = [
    {
      name: 'Dashboard',
      rolepermission: [
        { viewValue: 'View'},
        {viewValue: 'View & Download'},
        { viewValue: 'Create & Upload'},
        { viewValue: 'Update'},
      ],
    },
    {
      name: 'User Role Master',
      rolepermission: [
        { viewValue: 'View'},
        {viewValue: 'View & Download'},
        { viewValue: 'Create & Upload'},
        { viewValue: 'Update'},
      ],
    },
    {
      name: 'User Role Permission',
      rolepermission: [
        { viewValue: 'View'},
        {viewValue: 'View & Download'},
        { viewValue: 'Create & Upload'},
        { viewValue: 'Update'},
      ],
    },
    {
      name: 'Telecom Masters',
      rolepermission: [
        { viewValue: 'View'},
        {viewValue: 'View & Download'},
        { viewValue: 'Create & Upload'},
        { viewValue: 'Update'},
      ],
    },
    {
      name: 'Process',
      rolepermission: [
        { viewValue: 'View'},
        {viewValue: 'View & Download'},
        { viewValue: 'Create & Upload'},
        { viewValue: 'Update'},
      ],
    },
    {
      name: 'Report',
      rolepermission: [
        { viewValue: 'View'},
        {viewValue: 'View & Download'},
        { viewValue: 'Create & Upload'},
        { viewValue: 'Update'},
      ],
    },
    {
      name: 'Change Password',
      rolepermission: [
        { viewValue: 'View'},
        {viewValue: 'View & Download'},
        { viewValue: 'Create & Upload'},
        { viewValue: 'Update'},
      ],
    },
  ];
  rolepermissionlists = new FormControl;
}
