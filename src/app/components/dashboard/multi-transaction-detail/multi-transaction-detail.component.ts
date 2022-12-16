import { Component, OnInit } from '@angular/core';
import {DashboardFilterComponent} from "../../../modals/dashboard-filter/dashboard-filter.component";
import {MatDialog} from "@angular/material/dialog";
import { ScaleType } from '@swimlane/ngx-charts';
import {Router} from "@angular/router";

export interface Color {
  name: string;
  selectable: boolean;
  group: ScaleType;
  domain: string[];
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-multi-transaction-detail',
  templateUrl: './multi-transaction-detail.component.html',
  styleUrls: ['./multi-transaction-detail.component.scss']
})
export class MultiTransactionDetailComponent {

  constructor(public dialog: MatDialog,private router: Router) {Object.assign(this, { shareCost })}

  openDialog() {
    this.dialog.open(DashboardFilterComponent, {
      width: '850px',
      data: {}
    });
  }

  foods: Food[] = [
    {value: 'Monthly Wise Amount', viewValue: 'Monthly Wise Amount'},
    {value: 'Daily Wise Amount', viewValue: 'Daily Wise Amount '},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Quarterly Wise Amount', viewValue: 'Quarterly Wise Amount'},
    {value: 'Half Yearly Wise Amount', viewValue: 'Half Yearly Wise Amount'},
    {value: 'Yearly Wise Amount', viewValue: 'Yearly Wise Amount'},
  ];

  selectedValue: string |any;
  selectedValue1: string |any;
  domain: string[] | undefined;
  single: any[] | undefined;
  multi: any[] | undefined;
  shareCost: any[] | undefined;
  dataPlan: any[] | undefined;


  view: [number, number] = [500, 500];

  colorScheme3: Color = { domain: [
      "#0c0f3a",
    ], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Mobile Number Count';
  showYAxisLabel = true;
  yAxisLabel = 'Amount';
  timeline = true;
  legendTitle = '';
  onSelect(event: any) {
    if (event.name=="1787872571"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="2457558755"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="112457575"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="1575767676"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="3575717474"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="112757575"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="1117575755"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="197575755"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="2457575717"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
    else if (event.name=="2378575747"){
      this.router.navigate(['/dashboard/mobileNo-detail']);
    }
  }
}
export var shareCost = [
  {
    "name": "1787872571",
    "value": 8000
  },
  {
    "name": "2457558755",
    "value": 5000
  },
  {
    "name": "112457575",
    "value": 1800
  },
  {
    "name": "1575767676",
    "value": 3000
  },
  {
    "name": "3575717474",
    "value": 3000
  },
  {
    "name": "112757575",
    "value": 5500
  },
  {
    "name": "1117575755",
    "value": 1500
  },
  {
    "name": "197575755",
    "value": 4500
  },
  {
    "name": "2457575717",
    "value": 3000
  },
  {
    "name": "2378575747",
    "value": 7000
  },
];
