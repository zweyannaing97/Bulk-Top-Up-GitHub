import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {FormControl} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import {TelecomPriceFilterComponent} from "../../../modals/telecom-price-filter/telecom-price-filter.component";

@Component({
  selector: 'app-telecom-price',
  templateUrl: './telecom-price.component.html',
  styleUrls: ['./telecom-price.component.scss']
})
export class TelecomPriceComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog1() {
    this.dialog.open(TelecomPriceFilterComponent, {
      width: '850px',
      data: {}
    });
  }
  selected: string | undefined;
  isShown: boolean | undefined;
  isShown1: boolean | undefined;
  ngOnInit():void{
    this.favoriteSeason = 'All';
    this.isShown = false; //hidden every time subscribe detects change
    this.isShown1 = false; //hidden every time subscribe detects change
  }
  toggleShow() {
    this.isShown1 = false;
    this.isShown = true;
  }
  toggleShow1() {
    this.isShown= false;
    this.isShown1= true;
  }
  telecomNames: string[] = ['MEC Tel', 'MPT','Mytel','Ooredoo','Telenor'];
  telecomNamelists = new FormControl;


  serviceTypes: string[] = ['Top Up', 'Data','Special Offer'];
  serviceTypelists = new FormControl;

  activeTypes = [
    { value:'Active',viewValue: 'Active'},
    { value:'Is Active',viewValue: 'Is Active'},
  ];

  displayedColumns: string[] = ['numberId','telecomServiceName','telecomServiceType','amount','remarks','descriptionOne','descriptionTwo', 'isActive'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  selectedCar: any|string;
  favoriteSeason: any;
  seasons: string[] = ['All', 'Active', 'Is Active'];
}
export interface PeriodicElement {
  numberId:string;
  telecomServiceName: string;
  telecomServiceType: string;
  isActive: string;
  amount:string;
  remarks:string;
  descriptionOne:string;
  descriptionTwo:string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {numberId:'1',telecomServiceName: 'Ooredoo',telecomServiceType:'Fb Pack',  isActive:'Yes',amount:'5000',remarks:'-',descriptionOne:'Top up',descriptionTwo:'-'},

  {numberId:'2',telecomServiceName: 'Mec Tel',telecomServiceType:'Special Offer',  isActive:'No',amount:'5000',remarks:'-',descriptionOne:'Top up',descriptionTwo:'-'},

  {numberId:'3',telecomServiceName: 'MPT',telecomServiceType:'Top Up',  isActive:'No',amount:'5000',remarks:'-',descriptionOne:'Top up',descriptionTwo:'-'},

  {numberId:'4',telecomServiceName: 'Mytel',telecomServiceType:'Special Offer',  isActive:'Yes',amount:'5000',remarks:'-',descriptionOne:'Top up',descriptionTwo:'-'},
];

export interface PeriodicElement1 {
  numberId:string;
  telecomServiceName: string;
  telecomServiceType: string;
  isActive: string;
  amount:string;
  remarks:string;
  descriptionOne:string;
  descriptionTwo:string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {numberId:'1',telecomServiceName: 'Ooredoo',telecomServiceType:'Fb Pack',  isActive:'No',amount:'5000',remarks:'-',descriptionOne:'Top up',descriptionTwo:'-'},
];
