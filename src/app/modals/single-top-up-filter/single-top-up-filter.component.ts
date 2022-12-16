import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-single-top-up-filter',
  templateUrl: './single-top-up-filter.component.html',
  styleUrls: ['./single-top-up-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SingleTopUpFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SingleTopUpFilterComponent>) { }
  maxDate = new Date();

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
  telecomNames = [
    { viewValue: 'MEC Tel'},
    { viewValue: 'Mpt'},
    { viewValue: 'Ooredoo'},
    { viewValue: 'Mytel'},
    { viewValue: 'Telenor'},
  ];
  dataPlans = [
    { viewValue: 'Data Plan'},
    { viewValue: 'Special'},
    { viewValue: 'Top Up'},
  ];
  transactionIdNos = [
    { viewValue: '1912543144'},
    { viewValue: '1022543144'},
    { viewValue: '1152543144'},
  ];
  mobilenumbers = [
    { viewValue: '+959454125877'},
    { viewValue: '+959750125697'},
    { viewValue: '+95988652358'},
    { viewValue: '+959534758'},
    { viewValue: '+959975885569'},
  ];
  statuses = [
    { viewValue: 'Proceed'},
    { viewValue: 'Success'},
  ];

  rolepermissiongroups = [
    {
      name: 'Data Plan',
      rolepermission: [
        { viewValue: 'Internet Pack-Data Carry Plus- 415MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 630MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 1180MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 1630MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 2450MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 4100MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 8200MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 16400MB'},
        { viewValue: 'Internet Pack-Data Carry Plus- 24500MB'},
      ],
    },
    {
      name: 'Special Offer',
      rolepermission: [
        { viewValue: '7 days A Kyite Pyaw Plus Onnet Voice Pack'},
        {viewValue: 'Night Time - 7 Nights'},
        { viewValue: '1,000 Ks = 5000 Ks Htaw B(15 Days)'},
        { viewValue: '1,111 Ks = 7777 Ks Htaw B(15 Days)'},
        { viewValue: '30 days A Kyite Pyaw Plus Onnet Voice Pack)'},
        { viewValue: '2000 Ks= 15554 Ks 7X Htaw B(30 Days)'},
        { viewValue: 'Night Time - 30 Nights'},
        { viewValue: '90 days A Kyite Pyaw Plus Onnet Voice Pack'},
        { viewValue: '5000 Ks= 25000 Ks Htaw B(60 Days)'},
        { viewValue: '5555 Ks= 38885 Ks 7X Htaw B(60 Days)'},
      ],
    },
    {
      name: 'Top Up',
      rolepermission: [
        { viewValue: '500 MMK'},
        { viewValue: '1,000 MMK'},
        { viewValue: '2,000 MMK'},
        { viewValue: '3,000 MMK'},
        { viewValue: '4,000 MMK'},
        { viewValue: '5,000 MMK'},
        { viewValue: '6,000 MMK'},
        { viewValue: '7,000 MMK'},
        { viewValue: '8,000 MMK'},
        { viewValue: '9,000 MMK'},
        { viewValue: '10,000 MMK'},
      ],
    },
  ];
}
