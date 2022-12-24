import { Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['departmentName', 'remark', 'isActive','createDateTime','updateDateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  departmentName: string;

  remark: string;
  isActive: string;
  createDateTime: string;
  updateDateTime: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {departmentName: 'Account Department', remark: 'Account Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {departmentName: 'Admin Department', remark: 'Admin Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {departmentName: 'Sales Department', remark: 'Sales Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {departmentName: 'Sales Department', remark: 'Sales Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {departmentName: 'Sales Department', remark: 'Sales Department', isActive:'No',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

];

