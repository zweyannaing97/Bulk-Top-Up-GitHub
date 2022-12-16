import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import {EditServiceTypeConfigurationComponent} from "../../../modals/edit-service-type-configuration/edit-service-type-configuration.component";
import {FormControl} from "@angular/forms";
import {ServiceTypeFilterComponent} from "../../../modals/service-type-filter/service-type-filter.component";

@Component({
  selector: 'app-service-type-configuration',
  templateUrl: './service-type-configuration.component.html',
  styleUrls: ['./service-type-configuration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServiceTypeConfigurationComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditServiceTypeConfigurationComponent, {
      width: '850px',
      data: {}
    });
  }
  openDialog1() {
    this.dialog.open(ServiceTypeFilterComponent, {
      width: '850px',
      data: {}
    });
  }
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

  displayedColumns: string[] = ['numberId','telecomServiceName','telecomServiceType', 'isActive', 'action'];
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
  action: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {numberId:'1',telecomServiceName: 'Ooredoo',telecomServiceType:'Fb Pack',  isActive:'Yes',  action:'assets/icons/Edit.svg'},

  {numberId:'2',telecomServiceName: 'Mec Tel',telecomServiceType:'Special Offer',  isActive:'No', action:'assets/icons/Edit.svg'},

  {numberId:'3',telecomServiceName: 'MPT',telecomServiceType:'Top Up',  isActive:'No',  action:'assets/icons/Edit.svg'},

  {numberId:'4',telecomServiceName: 'Mytel',telecomServiceType:'Special Offer',  isActive:'Yes',  action:'assets/icons/Edit.svg'},
];

export interface PeriodicElement1 {
  numberId:string;
  telecomServiceName: string;
  telecomServiceType: string;
  isActive: string;
  action: string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {numberId:'1',telecomServiceName: 'Airtel',telecomServiceType:'Fb Pack',  isActive:'No',  action:'assets/icons/Edit.svg'},

];

