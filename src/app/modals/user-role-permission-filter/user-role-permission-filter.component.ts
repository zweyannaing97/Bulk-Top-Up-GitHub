import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-user-role-permission-filter',
  templateUrl: './user-role-permission-filter.component.html',
  styleUrls: ['./user-role-permission-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class UserRolePermissionFilterComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UserRolePermissionFilterComponent>) { }
  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
  maxDate = new Date();
  usernames = [
    { viewValue: 'Aye Aye'},
    { viewValue: 'Tun Tun'},
    { viewValue: 'Hla Hla'},
    { viewValue: 'Kyaw Kyaw'},
    { viewValue: 'Mya Mya'},
  ];

  dpmntnames: string[] = ['Account Department', 'Admin Department','Sales Department'];
  dpmntlists = new FormControl;

  designationnames: string[] = ['Accountant', 'Branch Manager','Sales Person'];
  designationlists = new FormControl;

  mobilenumbers: string[] = ['+959454125877', '+959750125697','+95988652358','+959534758','+959975885569'];
  mobilenumberlists = new FormControl;

  usertypes = [
    { viewValue: 'User'},
    { viewValue: 'Admin'},
  ];

  transactions: string[] = ['Dashboard', 'User Role Master', 'User Role Permission', 'Telecom Masters', 'Process', 'Report','Change Password'];
  transactionlists = new FormControl;

  descriptions: string[] = ['Aye Aye', 'Tun Tun', 'Hla Hla', 'Kyaw Kyaw', 'Mya Mya'];
  descriptionlists = new FormControl;

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
}

