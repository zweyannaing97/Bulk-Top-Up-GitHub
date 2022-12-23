import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import {CreateTelecomDetailsComponent} from "../../../modals/create-telecom-details/create-telecom-details.component";
import {EditTelecomDetailsComponent} from "../../../modals/edit-telecom-details/edit-telecom-details.component";

@Component({
  selector: 'app-telecom-listing',
  templateUrl: './telecom-listing.component.html',
  styleUrls: ['./telecom-listing.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TelecomListingComponent implements OnInit {
  openDialog() {
    this.dialog.open(CreateTelecomDetailsComponent, {
      width: '40%',
      data: {}
    });
  }
  openDialog1() {
    this.dialog.open(EditTelecomDetailsComponent, {
      width: '40%',
      data: {}
    });
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.favoriteSeason = 'All';
  }

  displayedColumns: string[] = ['numberId','companyName', 'isActive', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  favoriteSeason: any;
  seasons: string[] = ['All', 'Active', 'Is Active'];

}
export interface PeriodicElement {
  numberId:string;
  companyName: string;
  isActive: string;
  action: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {numberId:'1',companyName: 'Airtel',  isActive:'No',  action:'assets/icons/Edit.svg'},

  {numberId:'2',companyName: 'Mec Tel',  isActive:'Yes', action:'assets/icons/Edit.svg'},

  {numberId:'3',companyName: 'MPT',  isActive:'Yes',  action:'assets/icons/Edit.svg'},

  {numberId:'4',companyName: 'Mytel',  isActive:'Yes',  action:'assets/icons/Edit.svg'},
];

export interface PeriodicElement1 {
  numberId:string;
  companyName: string;
  isActive: string;
  action: string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [

  {numberId:'1',companyName: 'Mec Tel',  isActive:'Yes', action:'assets/icons/Edit.svg'},

  {numberId:'2',companyName: 'MPT',  isActive:'Yes',  action:'assets/icons/Edit.svg'},

  {numberId:'3',companyName: 'Mytel',  isActive:'Yes',  action:'assets/icons/Edit.svg'},

];

export interface PeriodicElement2 {
  numberId:string;
  companyName: string;
  isActive: string;
  action: string;

}
const ELEMENT_DATA2: PeriodicElement2[] = [
  {numberId:'1',companyName: 'Airtel',  isActive:'No',  action:'assets/icons/Edit.svg'},

];

