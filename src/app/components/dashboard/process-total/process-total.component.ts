import { Component, OnInit } from '@angular/core';
import {DashboardFilterComponent} from "../../../modals/dashboard-filter/dashboard-filter.component";
import {MatDialog} from "@angular/material/dialog";
import {ScaleType} from "@swimlane/ngx-charts";
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
  selector: 'app-process-total',
  templateUrl: './process-total.component.html',
  styleUrls: ['./process-total.component.scss']
})
export class ProcessTotalComponent implements OnInit {

  constructor(public dialog: MatDialog) { Object.assign(this, { single }) }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DashboardFilterComponent, {
      width: '850px',
      data: {}
    });
  }
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

  food3s: Food[] = [
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


  view1: [number, number] = [0,0];

  onSelect(event: any) {
    console.log(event);
  }

}
export var single = [
  {
    "name": "Ooredoo",
    "value": 5000
  },
  {
    "name": "MPT",
    "value": 2000
  },
  {
    "name": "Mytel",
    "value": 4000
  },
  {
    "name": "Telenor",
    "value": 10000
  },
  {
    "name": "MEC",
    "value": 8000
  },
  {
    "name": "MEC",
    "value": 3000
  },
];
