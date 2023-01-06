import { Component, NgZone, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Router } from '@angular/router';


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
import { DashboardFilterComponent } from 'src/app/modals/dashboard-filter/dashboard-filter.component';

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
export type operatorBaseAmount = {
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
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  constructor(public dialog: MatDialog,private router: Router,private zone: NgZone) { }

  handleClick(e: any, chart: any, opts: any){
    if (opts.dataPointIndex === 0){
      this.zone.run(() => {
        this.router.navigate(['/dashboard/operator-base-mpt']);
      });
      
    }else if (opts.dataPointIndex === 1){
      this.zone.run(() => {
        this.router.navigate(['/dashboard/operator-base-telenor']);
      });

    }else if (opts.dataPointIndex === 2){
      this.zone.run(() => {
        this.router.navigate(['/dashboard/operator-base-ooredoo']);
      });
    }else if (opts.dataPointIndex === 3){
      this.zone.run(() => {
        this.router.navigate(['/dashboard/operator-base-mytel']);
      });
      console.log('Mytel');

    }else if (opts.dataPointIndex === 4){
      this.zone.run(() => {
        this.router.navigate(['/dashboard/operator-base-mec']);
      });
    }
    
  }

  public operatorAmtBase:operatorBaseAmount = {
     
    series: [{
      data: [720, 600,700,500,300]
    }],
    chart: {
    type: 'bar',
    height: 240,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    events: {
      dataPointSelection: (e, chart, opts) => { this.handleClick(e, chart, opts); }
      // click(event, chartContext, config) {
      //   let ID = config.config.xaxis.categories[config.dataPointIndex];
      //   handleClick("Category Name" + ID);
      // },
    }
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

  public TotalCountChartOpt:ChartOptions2 = { 
    colors: [
      '#7758bf',
      '#2b33af',
      '#bc63d1'
      ],
      series: [890,1068,1602],
        chart: {
          type: "donut",
          height: 250 ,
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

  
  public serviceTypeAmtOptions:ChartOptions2 = { 
    colors: [ '#725aec','#ea940b','#c21214'],
    series: [420000, 250000,120200],
      chart: {
        type: "pie",
        height: 560 
      },
      labels: ["Top Up", "Data Plan","Special Offer"],
      responsive: [
        {
          breakpoint: 380,
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


 
  openDialog() {
    this.dialog.open(DashboardFilterComponent, {
      width: '900px',
      data: {}
    });
  }

  ngOnInit(): void {
  }

}
