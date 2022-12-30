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

@Component({
  selector: 'app-top-up-base-amount',
  templateUrl: './top-up-base-amount.component.html',
  styleUrls: ['./top-up-base-amount.component.scss']
})
export class TopUpBaseAmountComponent implements OnInit {

  public TotalCountChartOpt:ChartOptions2 = { 
    colors: [
      '#7758bf',
      '#2b33af',
      '#bc63d1'
      ],
      series: [890,1068,1602],
        chart: {
          type: "donut",
          height: 500 ,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: false
          }
         
        },
        labels: [
        'Single',
        'Multiple',
        'Bulk'
      
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
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

  public singleAmtBase:topupBaseAmount = {
     
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

  public multipleAmtBase:topupBaseAmount = {
     
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

  public bulkAmtBase:topupBaseAmount = {
     
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
