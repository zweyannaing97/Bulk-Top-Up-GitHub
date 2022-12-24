import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DesignationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['designation', 'remark', 'isActive','createDateTime','updateDateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  designation: string;

  remark: string;
  isActive: string;
  createDateTime: string;
  updateDateTime: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {designation: 'Accountant', remark: 'Account Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,  action:'assets/icons/Edit.svg'},

  {designation: 'Branch Manager', remark: 'Admin Department', isActive:'Yes', createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,  action:'assets/icons/Edit.svg'},

  {designation: 'Sales Person', remark: 'Sales Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,  action:'assets/icons/Edit.svg'},

  {designation: 'Sales Person', remark: 'Sales Department', isActive:'Yes', createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,  action:'assets/icons/Edit.svg'},

  {designation: 'Branch Manager', remark: 'Sales Department', isActive:'No',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,  action:'assets/icons/Edit.svg'},

];
