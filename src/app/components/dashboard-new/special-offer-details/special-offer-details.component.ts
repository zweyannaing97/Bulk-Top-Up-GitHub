import { Component, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexGrid,
  ApexFill,
  ApexPlotOptions,
  ApexMarkers,
  ApexAnnotations,
} from "ng-apexcharts";

export type topupBaseAmount = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  stroke: any; 
  colors: any[];
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-special-offer-details',
  templateUrl: './special-offer-details.component.html',
  styleUrls: ['./special-offer-details.component.scss']
})
export class SpecialOfferDetailsComponent implements OnInit {

  public specialofferBase:topupBaseAmount = {
     
    series: [{
      data: [720, 600,700,500,300]
    }],
      chart: {
      type: 'bar',
      height: 200,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        columnWidth:'35%',
        barHeight: '65%',
        distributed: true,
        horizontal: false,
        dataLabels: {
          position: 'none'
        },
      }
    },
    colors: ['#f5b80f','#1529a6','#ed1b24','#f0620e','#3a7eed'],
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories:  [
        'MPT', 'Telenor', 'Ooredoo', 'Mytel','MEC'
      ],
    },
    yaxis: {
      title: {
        text: 'Amount'
      },
      labels: {
        show: false
      }
    },
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        let labelName = w.globals.labels[dataPointIndex];
        return (
          
          `<div class=${labelName}_bgColor>` +
          "<span>" +
          labelName +
          " : " +
          series[seriesIndex][dataPointIndex].toLocaleString() +
          "</span>" +
          "</div>"
        );
      }
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
