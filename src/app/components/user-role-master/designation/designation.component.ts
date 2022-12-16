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


  displayedColumns: string[] = ['designation', 'remark', 'isActive', 'action'];
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
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {designation: 'Accountant', remark: 'Account Department', isActive:'Yes',  action:'assets/icons/Edit.svg'},

  {designation: 'Branch Manager', remark: 'Admin Department', isActive:'Yes', action:'assets/icons/Edit.svg'},

  {designation: 'Sales Person', remark: 'Sales Department', isActive:'Yes',  action:'assets/icons/Edit.svg'},

  {designation: 'Sales Person', remark: 'Sales Department', isActive:'Yes', action:'assets/icons/Edit.svg'},

  {designation: 'Branch Manager', remark: 'Sales Department', isActive:'No',  action:'assets/icons/Edit.svg'},

];
