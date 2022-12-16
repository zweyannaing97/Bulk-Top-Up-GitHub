import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-single-top-up',
  templateUrl: './create-single-top-up.component.html',
  styleUrls: ['./create-single-top-up.component.scss']
})

export class CreateSingleTopUpComponent implements OnInit {

  ngOnInit(): void {
  }
  selectedCar: any|string;

  telecomNames = [
    { viewValue: 'MEC Tel'},
    { viewValue: 'Mpt'},
    { viewValue: 'Ooredoo'},
    { viewValue: 'Mytel'},
    { viewValue: 'Telenor'},
  ];
  serverTypes = [
    { value:'Data Plan', viewValue: 'Data Plan'},
    { value:'Special Offer', viewValue: 'Special Offer'},
    { value:'Top Up', viewValue: 'Top Up'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement['name']>();

  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = ELEMENT_DATA1;
  clickedRows1 = new Set<PeriodicElement1['name']>();

  displayedColumns2: string[] = ['position', 'name'];
  dataSource2 = ELEMENT_DATA2;
  clickedRows2 = new Set<PeriodicElement2['name']>();


  @Input() question : PeriodicElement2 | undefined;
  public selectedQuestion = this.dataSource2[ 0 ];
  public getQuestion(question : PeriodicElement2) {
    this.removeSelection();
    this.selectedQuestion = question;
    this.selectedQuestion.selected = true;
  }
  private removeSelection() {
    this.dataSource2.map( (question : PeriodicElement2) => {
      return question.selected = false;
    } );
    this.dataSource1.map( (question : PeriodicElement1) => {
      return question.selected = false;
    } );
    this.dataSource.map( (question : PeriodicElement) => {
      return question.selected = false;
    } );
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  selected:boolean;
}
export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  selected:boolean;
}
export interface PeriodicElement2 {
  name: string;
  position: number;
  selected:boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '699 MMK', weight: 'Internet Pack-Data Carry Plus- 415MB', symbol: '415MB',selected:false},
  {position: 2, name: '799 MMK', weight: 'Internet Pack-Data Carry Plus- 630MB', symbol: '630MB',selected:false},
  {position: 3, name: '1,299 MMK', weight: 'Internet Pack-Data Carry Plus- 1180MB', symbol: '1180MB',selected:false},
  {position: 4, name: '1,799 MMK', weight: 'Internet Pack-Data Carry Plus- 1630MB', symbol: '1630MB',selected:false},
  {position: 5, name: '2,699 MMK', weight: 'Internet Pack-Data Carry Plus- 2450MB', symbol: '2450MB',selected:false},
  {position: 6, name: '4,499 MMK', weight: 'Internet Pack-Data Carry Plus- 4100MB', symbol: '4100MB',selected:false},
  {position: 7, name: '8,999 MMK', weight: 'Internet Pack-Data Carry Plus- 8200MB', symbol: '8200MB',selected:false},
  {position: 8, name: '17,999 MMK', weight: 'Internet Pack-Data Carry Plus- 16400MB', symbol: '16400MB',selected:false},
  {position: 9, name: '26,999 MMK', weight: 'Internet Pack-Data Carry Plus- 24500MB', symbol: '24500MB',selected:false},
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {position: 1, name: '850 MMK', weight: '7 days A Kyite Pyaw Plus Onnet Voice Pack', symbol: '-',selected:false},
  {position: 2, name: '899  MMK', weight: 'Night Time - 7 Nights', symbol: '-',selected:false},
  {position: 3, name: '1,000  MMK', weight: '1,000 Ks = 5000 Ks Htaw B(15 Days)', symbol: '-',selected:false},
  {position: 4, name: '1,500 MMK', weight: '1,111 Ks = 7777 Ks Htaw B(15 Days)', symbol: '-',selected:false},
  {position: 5, name: '2,000 MMK', weight: '30 days A Kyite Pyaw Plus Onnet Voice Pack', symbol: '-',selected:false},
  {position: 6, name: '2,222 MMK', weight: '2000 Ks= 15554 Ks 7X Htaw B(30 Days)', symbol: '-',selected:false},
  {position: 7, name: '3,499 MMK', weight: 'Night Time - 30 Nights', symbol: '-',selected:false},
  {position: 8, name: '3,900 MMK', weight: '90 days A Kyite Pyaw Plus Onnet Voice Pack', symbol: '-',selected:false},
  {position: 9, name: '5,000 MMK', weight: '5000 Ks= 25000 Ks Htaw B(60 Days)', symbol: '-',selected:false},
  {position: 10, name: '5,555 MMK', weight: '5555 Ks= 38885 Ks 7X Htaw B(60 Days)', symbol: '-',selected:false},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 1, name: '500 MMK', selected:false},
  {position: 2, name: '1,000 MMK', selected:false},
  {position: 3, name: '2,000 MMK', selected:false},
  {position: 4, name: '3,000 MMK', selected:false},
  {position: 5, name: '4,000 MMK', selected:false},
  {position: 6, name: '5,000 MMK', selected:false},
  {position: 7, name: '6,000 MMK', selected:false},
  {position: 8, name: '7,000 MMK', selected:false},
  {position: 9, name: '8,000 MMK', selected:false},
  {position: 10, name: '9,000 MMK', selected:false},
  {position: 11, name: '10 ,000 MMK', selected:false},
];
