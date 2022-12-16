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

  displayedColumns: string[] = ['departmentName', 'remark', 'isActive', 'action'];
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
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {departmentName: 'Account Department', remark: 'Account Department', isActive:'Yes',  action:'assets/icons/Edit.svg'},

  {departmentName: 'Admin Department', remark: 'Admin Department', isActive:'Yes', action:'assets/icons/Edit.svg'},

  {departmentName: 'Sales Department', remark: 'Sales Department', isActive:'Yes',  action:'assets/icons/Edit.svg'},

  {departmentName: 'Sales Department', remark: 'Sales Department', isActive:'Yes', action:'assets/icons/Edit.svg'},

  {departmentName: 'Sales Department', remark: 'Sales Department', isActive:'No',  action:'assets/icons/Edit.svg'},

];

