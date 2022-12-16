import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {MultipleTopUpFilterComponent} from "../../../modals/multiple-top-up-filter/multiple-top-up-filter.component";
@Component({
  selector: 'app-multiple-top-up',
  templateUrl: './multiple-top-up.component.html',
  styleUrls: ['./multiple-top-up.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class MultipleTopUpComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(MultipleTopUpFilterComponent, {
      width: '850px',
      data: {}
    });
  }
  displayedColumns: string[] = ['fileName','telecomName', 'serviceType', 'transactionIdNo','mobileNo','amount','descriptionPackage','selectPackage','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  fileName: string;
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
  { fileName:'Jan-22-Top Up',telecomName: 'MPT', serviceType: 'Top Up', transactionIdNo: '1912543144', amount: '10000',  mobileNo: '+95 09421056929', descriptionPackage:'-', selectPackage:'-', status:'Proceed'},

  { fileName:'Jan-22-Data Plan',telecomName: 'Ooredoo', serviceType: 'Data Plan', transactionIdNo: '1022543144', amount: '4,499',  mobileNo: '+95 09251576586', descriptionPackage:'Internet Pack - Data Carry Plus 4100 MB',  selectPackage:'4100 MB', status:'Success'},

  { fileName:'Jan-22-Special Offer',telecomName: 'Telenor', serviceType: 'Special Offer', transactionIdNo: '1152543144', amount: '899',  mobileNo: '+95 09798845585', descriptionPackage:'Night Time - 7 Nights', selectPackage:'-', status:'Success'},

  { fileName:'Jan-22-Top Up',telecomName: 'MEC Tel', serviceType: 'Data Plan', transactionIdNo: '1912543144', amount: '4,499',  mobileNo: '+95 09915765555', descriptionPackage:'Internet Pack - Data Carry Plus 4100 MB', selectPackage:'4100 MB', status:'Proceed'},

];
