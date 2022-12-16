import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import {MatDialog} from "@angular/material/dialog";
import {DashboardFilterComponent} from "../../../modals/dashboard-filter/dashboard-filter.component";
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
  selector: 'app-dataplan',
  templateUrl: './dataplan.component.html',
  styleUrls: ['./dataplan.component.scss']
})
export class DataplanComponent implements OnInit {

  constructor(public dialog: MatDialog) {Object.assign(this, { dataPlan }) }

  ngOnInit(): void {
  }
  food1s: Food[] = [
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
  selectedValue2: string |any;
  selectedValue3: string |any;
  domain: string[] | undefined;
  single: any[] | undefined;
  multi: any[] | undefined;
  shareCost: any[] | undefined;
  dataPlan: any[] | undefined;

  view: [number, number] = [0, 0];

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

  openDialog() {
    this.dialog.open(DashboardFilterComponent, {
      width: '850px',
      data: {}
    });
  }

  onSelect(event: any) {
    console.log(event);
  }
/// line chart

  // options
  legend: boolean = true;
  showLabels1: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel1: boolean = false;
  showXAxisLabel1: boolean = false;
  xAxisLabel1: string = 'Year';
  yAxisLabel1: string = 'Population';
  timeline1: boolean = true;


  /// line chart

}
export var dataPlan =[
  {
    "name": "Data Plan Amount",
    "series": [
      {
        "name": "1st Quarter 2021",
        "value": 1000,
      },
      {
        "name": "2nd Quarter 2021",
        "value": 3000,
      },
      {
        "name": "3rd Quarter 2021",
        "value": 4000,
      },
      {
        "name": "4th Quarter 2021",
        "value": 6000,
      },
      {
        "name": "1st Quarter 2022",
        "value":5800,
      },
      {
        "name": "2nd Quarter 2022",
        "value": 5000,
      },
      {
        "name": "3rd Quarter 2022",
        "value": 5500,
      },
      {
        "name": "4th Quarter 2022",
        "value": 6000,
      },
    ]
  },

];
