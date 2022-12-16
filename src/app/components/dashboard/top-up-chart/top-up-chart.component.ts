import { Component } from '@angular/core';
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
  selector: 'app-top-up-chart',
  templateUrl: './top-up-chart.component.html',
  styleUrls: ['./top-up-chart.component.scss']
})
export class TopUpChartComponent  {
  constructor(public dialog: MatDialog,private router: Router) {Object.assign(this, { shareCost }),this.view = [innerWidth / 1.3, 600];}

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


  view: [number, number] = [100, 100];

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
    if (event.name=="Bulk Top Up"){
      this.router.navigate(['/dashboard/transaction-detail']);
    }
    else if (event.name=="Multiple Top Up"){
      this.router.navigate(['/dashboard/multi-transactionDetail']);
    }
    else if (event.name=="Single Top Up"){
      this.router.navigate(['/dashboard/single-transactionDetail']);
    }
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 600];
  }
}
export var shareCost = [
  {
    "name": "Bulk Top Up",
    "value": 80000
  },
  {
    "name": "Multiple Top Up",
    "value": 50000
  },
  {
    "name": "Single Top Up",
    "value": 18000
  },
];
