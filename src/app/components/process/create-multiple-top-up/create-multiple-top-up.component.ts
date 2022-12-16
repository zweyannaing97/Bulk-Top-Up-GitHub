import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-multiple-top-up',
  templateUrl: './create-multiple-top-up.component.html',
  styleUrls: ['./create-multiple-top-up.component.scss']
})
export class CreateMultipleTopUpComponent implements OnInit {
  selectedCar: any|string;

  constructor() { }

  ngOnInit(): void {
  }
  telecomNames = [
    { viewValue: 'MEC Tel'},
    { viewValue: 'Mpt'},
    { viewValue: 'Ooredoo'},
    { viewValue: 'Mytel'},
    { viewValue: 'Telenor'},
  ];
  serverTypes = [
    { viewValue: 'Data Plan'},
    { viewValue: 'Special'},
    { viewValue: 'Top Up'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement['name']>();

  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = ELEMENT_DATA1;
  clickedRows1 = new Set<PeriodicElement['name']>();

  displayedColumns2: string[] = ['position', 'name'];
  dataSource2 = ELEMENT_DATA2;
  clickedRows2 = new Set<PeriodicElement['name']>();
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
export interface PeriodicElement2 {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '699 MMK', weight: 'Internet Pack-Data Carry Plus- 415MB', symbol: '415MB'},
  {position: 2, name: '799 MMK', weight: 'Internet Pack-Data Carry Plus- 630MB', symbol: '630MB'},
  {position: 3, name: '1,299 MMK', weight: 'Internet Pack-Data Carry Plus- 1180MB', symbol: '1180MB'},
  {position: 4, name: '1,799 MMK', weight: 'Internet Pack-Data Carry Plus- 1630MB', symbol: '1630MB'},
  {position: 5, name: '2,699 MMK', weight: 'Internet Pack-Data Carry Plus- 2450MB', symbol: '2450MB'},
  {position: 6, name: '4,499 MMK', weight: 'Internet Pack-Data Carry Plus- 4100MB', symbol: '4100MB'},
  {position: 7, name: '8,999 MMK', weight: 'Internet Pack-Data Carry Plus- 8200MB', symbol: '8200MB'},
  {position: 8, name: '17,999 MMK', weight: 'Internet Pack-Data Carry Plus- 16400MB', symbol: '16400MB'},
  {position: 9, name: '26,999 MMK', weight: 'Internet Pack-Data Carry Plus- 24500MB', symbol: '24500MB'},
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {position: 1, name: '699 MMK', weight: 'Internet Pack-Data Carry Plus- 415MB', symbol: '-'},
  {position: 2, name: '799 MMK', weight: 'Internet Pack-Data Carry Plus- 630MB', symbol: '-'},
  {position: 3, name: '1,299 MMK', weight: 'Internet Pack-Data Carry Plus- 1180MB', symbol: '-'},
  {position: 4, name: '1,799 MMK', weight: 'Internet Pack-Data Carry Plus- 1630MB', symbol: '-'},
  {position: 5, name: '2,699 MMK', weight: 'Internet Pack-Data Carry Plus- 2450MB', symbol: '-'},
  {position: 6, name: '4,499 MMK', weight: 'Internet Pack-Data Carry Plus- 4100MB', symbol: '-'},
  {position: 7, name: '8,999 MMK', weight: 'Internet Pack-Data Carry Plus- 8200MB', symbol: '-'},
  {position: 8, name: '17,999 MMK', weight: 'Internet Pack-Data Carry Plus- 16400MB', symbol: '-'},
  {position: 9, name: '26,999 MMK', weight: 'Internet Pack-Data Carry Plus- 24500MB', symbol: '-'},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 1, name: '699 MMK'},
  {position: 2, name: '799 MMK'},
  {position: 3, name: '1,299 MMK'},
  {position: 4, name: '1,799 MMK'},
  {position: 5, name: '2,699 MMK'},
  {position: 6, name: '4,499 MMK'},
  {position: 7, name: '8,999 MMK'},
  {position: 8, name: '17,999 MMK'},
  {position: 9, name: '26,999 MMK'},
];
