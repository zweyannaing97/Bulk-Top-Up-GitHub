import { Component, OnInit } from '@angular/core';
import {DashboardFilterComponent} from "../../../modals/dashboard-filter/dashboard-filter.component";
import {MatDialog} from "@angular/material/dialog";
import {PeriodicElement2} from "../dashboard.component";
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-topup-total',
  templateUrl: './topup-total.component.html',
  styleUrls: ['./topup-total.component.scss']
})
export class TopupTotalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DashboardFilterComponent, {
      width: '850px',
      data: {}
    });
  }
  food2s: Food[] = [
    {value: 'Monthly Wise Amount', viewValue: 'Monthly Wise Amount'},
    {value: 'Daily Wise Amount', viewValue: 'Daily Wise Amount '},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Quarterly Wise Amount', viewValue: 'Quarterly Wise Amount'},
    {value: 'Half Yearly Wise Amount', viewValue: 'Half Yearly Wise Amount'},
    {value: 'Yearly Wise Amount', viewValue: 'Yearly Wise Amount'},
  ];

  displayedColumns2: string[] = ['position', 'name'];
  dataSource2 = ELEMENT_DATA2;
}
const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 'January', name: '2,000,000'},
  {position: 'February', name: '4,000,000'},
  {position: 'March', name: '5,000,000'},
  {position: 'April', name: '1,000,000'},
  {position: 'May', name: '6,000,000'},
  {position: 'June', name: '9,000,000'},
  {position: 'July', name: '1,000,000'},
  {position: 'August', name: '3,000,000'},
  {position: 'September', name: '21,000,000'},
  {position: 'October', name: '2,000,000'},
  {position: 'November', name: '7,000,000'},
  {position: 'December', name: '1,000,000'},
];
