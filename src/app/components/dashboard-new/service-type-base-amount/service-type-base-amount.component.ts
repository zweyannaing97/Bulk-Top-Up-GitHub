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

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
};

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
  selector: 'app-service-type-base-amount',
  templateUrl: './service-type-base-amount.component.html',
  styleUrls: ['./service-type-base-amount.component.scss']
})
export class ServiceTypeBaseAmountComponent implements OnInit {

  public serviceTypeAmtOptions:ChartOptions2 = { 
    colors: [ '#725aec','#ea940b','#c21214'],
    series: [420000, 250000,120200],
      chart: {
        type: "pie",
        height: 500 
      },
      labels: ["Top Up", "Data Plan","Special Offer"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 300,
            },
            legend: {
              position: "bottom"
            },
          }
        }
      ],
      dataLabels: {
        enabled: true
     },
     legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%'
        }
      }
    },
    tooltip: {
      y: {
        formatter: function(value) {
          return value.toLocaleString();
        }
      }
    }
  };

  public topupBase:topupBaseAmount = {
     
    series: [{
      data: [720, 600,700,500,300]
    }],
      chart: {
      type: 'bar',
      height: 170,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        columnWidth:'30%',
        barHeight: '60%',
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

  public dataplanBase:topupBaseAmount = {
     
    series: [{
      data: [720, 600,700,500,300]
    }],
      chart: {
      type: 'bar',
      height: 170,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        columnWidth:'30%',
        barHeight: '60%',
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

  public specialofferBase:topupBaseAmount = {
     
    series: [{
      data: [720, 600,700,500,300]
    }],
      chart: {
      type: 'bar',
      height: 170,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        columnWidth:'30%',
        barHeight: '60%',
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
