import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {SingleTopUpFilterComponent} from "../../../modals/single-top-up-filter/single-top-up-filter.component";
@Component({
  selector: 'app-single-top-up',
  templateUrl: './single-top-up.component.html',
  styleUrls: ['./single-top-up.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SingleTopUpComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(SingleTopUpFilterComponent, {
      width: '850px',
      data: {}
    });
  }

  displayedColumns: string[] = ['telecomName', 'serviceType', 'transactionIdNo','mobileNo','amount','descriptionPackage','selectPackage','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  telecomName: string;
  serviceType: string;
  transactionIdNo: string;
  mobileNo: string;
  amount: string;
  descriptionPackage: string;
  selectPackage: string;
  status: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  { telecomName: 'MPT', serviceType: 'Top Up', transactionIdNo: '1912543144', amount: '80,000',  mobileNo: '+95 09421056929', descriptionPackage:'-', selectPackage:'-', status:'Proceed'},

  { telecomName: 'Ooredoo', serviceType: 'Data Plan', transactionIdNo: '1022543144', amount: '75,000',  mobileNo: '+95 09251576586', descriptionPackage:'Internet Pack - Data Carry Plus 4100 MB',  selectPackage:'4100 MB', status:'Success'},

  { telecomName: 'Telenor', serviceType: 'Special Offer', transactionIdNo: '1152543144', amount: '899',  mobileNo: '+95 09798845585', descriptionPackage:'Night Time - 7 Nights', selectPackage:'-', status:'Success'},

  { telecomName: 'MEC Tel', serviceType: 'Data Plan', transactionIdNo: '1912543144', amount: '80,000',  mobileNo: '+95 09915765555', descriptionPackage:'Internet Pack - Data Carry Plus 4100 MB', selectPackage:'4100 MB', status:'Proceed'},

];
