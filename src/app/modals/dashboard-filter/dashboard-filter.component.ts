import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.scss']
})
export class DashboardFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DashboardFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
  maxDate = new Date();
  operators = [
    { viewValue: 'MPT'},
    { viewValue: 'Mytel'},
    { viewValue: 'Ooredoo'},
    { viewValue: 'Telenor'},
    { viewValue: 'MEC Tel'},
  ];
  processes = [
    { viewValue: 'Single Top Up'},
    { viewValue: 'Multiple Top Up'},
    { viewValue: 'Bulk Top Up'},
  ];
  typeofplans = [
    { viewValue: 'Top Up'},
    { viewValue: 'Data Plan'},
    { viewValue: 'Special Offer'},
  ];
}
