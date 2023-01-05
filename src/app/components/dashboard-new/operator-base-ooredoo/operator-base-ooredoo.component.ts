import { Component, OnInit,ViewChild,AfterViewInit, ElementRef } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexPlotOptions,
  ApexMarkers
} from "ng-apexcharts";
export type BulkcashbackChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  labels: string[];
  grid: ApexGrid;
  colors: string[];
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  responsive: ApexResponsive[];
  markers: any;

};

@Component({
  selector: 'app-operator-base-ooredoo',
  templateUrl: './operator-base-ooredoo.component.html',
  styleUrls: ['./operator-base-ooredoo.component.scss']
})
export class OperatorBaseOoredooComponent implements OnInit {

  public toptentopUplineChartOpt:BulkcashbackChartOptions = {
    colors: ["#0c0f3a"],
    series: [
      {
        name: "Amount",
        data: [5000, 5000, 6000,	7500, 6000,8000,7400,6800,8000,7300]
      },
    ],
    chart: {
      type: "line",
      height: 300,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      
    },
    dataLabels: {
      enabled: false
    },
    labels: [
      "094256849263",
      "096532952356",
      "097958643165",
      "097966988844",
      "096985492531",
      "092504896862",
      "096998465921",
      "097952652326",
      "095235656963",
      "095235656963",],
    xaxis: {
      labels: {
        show: true,
        rotate: -90,
        rotateAlways: true,
        minHeight: 70,
        maxHeight: 100,
      },
      tooltip: {
        enabled: false
      },
      tickPlacement: 'on'
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (value) {
          return value.toLocaleString();
        }
      },
      min: 0,
      max:  10000,
    },
    grid: {
      show: true, 
    },
    
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    tooltip: {
    },
    markers: {
      size: [5,5 ]
    },
    responsive: [
    ],  
  };

  constructor() { }

  ngOnInit(): void {
  }

}
