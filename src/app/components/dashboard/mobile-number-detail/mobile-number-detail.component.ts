import { Component, OnInit } from '@angular/core';
import {DashboardFilterComponent} from "../../../modals/dashboard-filter/dashboard-filter.component";
import {MatDialog} from "@angular/material/dialog";
import { ScaleType } from '@swimlane/ngx-charts';

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
  selector: 'app-mobile-number-detail',
  templateUrl: './mobile-number-detail.component.html',
  styleUrls: ['./mobile-number-detail.component.scss']
})
export class MobileNumberDetailComponent {

  constructor(public dialog: MatDialog) {Object.assign(this, { shareCost })}

  openDialog() {
    this.dialog.open(DashboardFilterComponent, {
      width: '850px',
      data: {}
    });
  }

  onSelect(event: any) {
    console.log(event);
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

}
export var shareCost = [
  {
    "name": "09448460545",
    "value": 8000
  },
  {
    "name": "09784921644",
    "value": 5000
  },
  {
    "name": "09657899545",
    "value": 1800
  },
  {
    "name": "09977849144",
    "value": 3000
  },
  {
    "name": "09875694916",
    "value": 3000
  },
  {
    "name": "09257575756",
    "value": 5500
  },
  {
    "name": "097955717171",
    "value": 1500
  },
  {
    "name": "096975677171",
    "value": 4500
  },
  {
    "name": "099757667676",
    "value": 3000
  },
  {
    "name": "09783727271",
    "value": 7000
  },
];
