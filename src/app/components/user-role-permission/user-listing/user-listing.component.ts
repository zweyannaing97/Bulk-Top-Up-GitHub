import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import {UserRolePermissionFilterComponent} from "../../../modals/user-role-permission-filter/user-role-permission-filter.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class UserListingComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UserRolePermissionFilterComponent, {
      width: '1000px',
      data: {}
    });
  }

  displayedColumns: string[] = ['profile', 'name', 'mobile', 'operator','type', 'companyName', 'department', 'designation', 'transaction', 'rolePermission', 'description', 'isActive', 'dateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

export interface PeriodicElement {
  profile: string;
  name: string;
  companyName: string;
  department: string;
  designation: string;
  mobile: string;
  operator:string;
  type: string;
  transaction: string;
  rolePermission: string;
  description: string;
  isActive: string;
  dateTime: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {profile: 'assets/avatars/1.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator :"MPT", type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:'Yes', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/2.jpg', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator :"Telenor",type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:'Yes', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/3.jpg', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585',operator :"Ooredoo", type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:'Yes', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/4.jpg', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555',operator :"Telenor", type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:'Yes', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/5.jpg', name: 'Maung Maung', companyName: 'CGM', department: 'Sales Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator :"Mytel",type:'Admin', transaction:'1', rolePermission:'2', description:'Maung Maung', isActive:'No', dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/1.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929',operator :"MECTel", type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:'Yes', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/2.jpg', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator :"MPT", type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:'Yes', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/3.jpg', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', operator :"MPT", type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:'Yes', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/4.jpg', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator :"MPT", type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:'Yes', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/5.jpg', name: 'Maung Maung', companyName: 'CGM', department: 'Sales Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator :"MPT", type:'Admin', transaction:'1', rolePermission:'2', description:'Maung Maung', isActive:'No', dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/1.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', operator :"MPT", type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:'Yes', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/2.jpg', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586',  operator :"MPT", type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:'Yes', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/3.jpg', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585',  operator :"MPT", type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:'Yes', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/4.jpg', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555',  operator :"MPT",type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:'Yes', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/5.jpg', name: 'Maung Maung', companyName: 'CGM', department: 'Sales Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator :"MPT", type:'Admin', transaction:'1', rolePermission:'2', description:'Maung Maung', isActive:'No', dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/1.jpg', name: 'Aye Aye', companyName: 'CGM', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929',  operator :"MPT",type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:'Yes', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/2.jpg', name: 'Hla Hla', companyName: 'CGM', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', operator :"MPT", type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:'Yes', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/3.jpg', name: 'Aung Aung', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585',  operator :"MPT",type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:'Yes', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/4.jpg', name: 'Mya Mya', companyName: 'CGM', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', operator :"MPT", type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:'Yes', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/icons/Edit.svg'},

  {profile: 'assets/avatars/5.jpg', name: 'Maung Maung', companyName: 'CGM', department: 'Sales Department', designation: 'Branch Manager', mobile: '+95 09251576586',  operator :"MPT",type:'Admin', transaction:'1', rolePermission:'2', description:'Maung Maung', isActive:'No', dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/icons/Edit.svg'},

];
