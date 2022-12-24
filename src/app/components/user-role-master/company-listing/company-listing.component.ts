import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CompanyListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['companyName', 'remark', 'isActive','createDateTime','updateDateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  companyName: string;

  remark: string;
  isActive: string;
  createDateTime: string;
  updateDateTime: string;
  action: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes', createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' , action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',  createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,action:'assets/icons/Edit.svg'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No',   createDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20' ,action:'assets/icons/Edit.svg'},
];
