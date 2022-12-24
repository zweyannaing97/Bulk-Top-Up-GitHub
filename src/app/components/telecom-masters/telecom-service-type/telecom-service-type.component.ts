import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import {CreateTelecomServiceTypeComponent} from "../../../modals/create-telecom-service-type/create-telecom-service-type.component";
import {EditTelecomServiceTypeComponent} from "../../../modals/edit-telecom-service-type/edit-telecom-service-type.component";

@Component({
  selector: 'app-telecom-service-type',
  templateUrl: './telecom-service-type.component.html',
  styleUrls: ['./telecom-service-type.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TelecomServiceTypeComponent implements OnInit {
  openDialog() {
    this.dialog.open(CreateTelecomServiceTypeComponent, {
      width: '40%',
      data: {}
    });
  }
  openDialog1() {
    this.dialog.open(EditTelecomServiceTypeComponent, {
      width: '40%',
      data: {}
    });
  }
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.favoriteSeason = 'All';

  }

  displayedColumns: string[] = ['numberId','companyName', 'isActive','createDateTime','updateDateTime', 'action'];
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
  createDateTime: string;
  updateDateTime: string;
  action: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {numberId:'1',companyName: 'Data Plan',  isActive:'Yes', createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,  action:'assets/icons/Edit.svg'},

  {numberId:'2',companyName: 'FB Pack',  isActive:'No',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,action:'assets/icons/Edit.svg'},

  {numberId:'3',companyName: 'Special Offer',  isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {numberId:'4',companyName: 'Top Up',  isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},
];

export interface PeriodicElement1 {
  numberId:string;
  companyName: string;
  isActive: string;
  createDateTime: string;
  updateDateTime: string;
  action: string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {numberId:'1',companyName: 'Data Plan',  isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {numberId:'2',companyName: 'Special Offer',  isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {numberId:'3',companyName: 'Top Up',  isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},
];

export interface PeriodicElement2 {
  numberId:string;
  companyName: string;
  isActive: string;
  createDateTime: string;
  updateDateTime: string;
  action: string;

}
const ELEMENT_DATA2: PeriodicElement2[] = [
  {numberId:'1',companyName: 'FB Pack',  isActive:'No', createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

];
