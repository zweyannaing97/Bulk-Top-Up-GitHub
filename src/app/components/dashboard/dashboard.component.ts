import { Component, OnInit} from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import {MatDialog} from "@angular/material/dialog";
import {DashboardFilterComponent} from "../../modals/dashboard-filter/dashboard-filter.component";
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog) { Object.assign(this, { single }),Object.assign(this, { dataPlan }),Object.assign(this, { shareCost }) }

  ngOnInit(): void {
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
  food1s: Food[] = [
    {value: 'Monthly Wise Amount', viewValue: 'Monthly Wise Amount'},
    {value: 'Daily Wise Amount', viewValue: 'Daily Wise Amount '},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Quarterly Wise Amount', viewValue: 'Quarterly Wise Amount'},
    {value: 'Half Yearly Wise Amount', viewValue: 'Half Yearly Wise Amount'},
    {value: 'Yearly Wise Amount', viewValue: 'Yearly Wise Amount'},
  ];
  food2s: Food[] = [
    {value: 'Monthly Wise Amount', viewValue: 'Monthly Wise Amount'},
    {value: 'Daily Wise Amount', viewValue: 'Daily Wise Amount '},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Weekly Wise Amount', viewValue: 'Weekly Wise Amount'},
    {value: 'Quarterly Wise Amount', viewValue: 'Quarterly Wise Amount'},
    {value: 'Half Yearly Wise Amount', viewValue: 'Half Yearly Wise Amount'},
    {value: 'Yearly Wise Amount', viewValue: 'Yearly Wise Amount'},
  ];
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
  selectedValue2: string |any;
  selectedValue3: string |any;
  domain: string[] | undefined;
  single: any[] | undefined;
  multi: any[] | undefined;
  shareCost: any[] | undefined;
  dataPlan: any[] | undefined;


  view: [number, number] = [500, 500];
  view1: [number, number] = [600, 500];

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

  displayedColumns2: string[] = ['position', 'name'];
  dataSource2 = ELEMENT_DATA2;

}
export interface PeriodicElement2 {
  name: string;
  position: string;
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
        "value": null,
      },
      {
        "name": "4th Quarter 2022",
        "value": null,
      },
    ]
  },

];

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


