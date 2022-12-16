import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-report-detail-view',
  templateUrl: './report-detail-view.component.html',
  styleUrls: ['./report-detail-view.component.scss']
})
export class ReportDetailViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  companynames = [
    { viewValue: 'OK$ Transaction By ID'},
    { viewValue: 'Top Up Ref Number'},
    { viewValue: 'Top Up API Ref Number'},
    { viewValue: 'Bulk Top Up By Reference'},
    { viewValue: 'Top Up Mobile Number'},
    { viewValue: 'Data Plan Recharge Mobile Number'},
    { viewValue: 'Special Offer Recharge Mobile Number'},
  ];
  displayedColumns: string[] = ['no', 'telecomName', 'fileName', 'bulkReferenceNo','status',
    'totalTopUp','fail','success','totalRequest','failPrice','successPrice','denomanationAmt',
    'transactionAmt','mobileCount','refundStatus','dateTime','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = [ 'telecomName','plan','amount', 'mobileNumber','status',
    'rechargedMethod','refundReason','refundId','refundAmnt','dateTime'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  no: string;
  telecomName: string;
  fileName: string;
  bulkReferenceNo: string;
  status: string;
  totalTopUp: string;
  fail: string;
  success: string;
  totalRequest: string;
  failPrice: string;
  successPrice: string;
  denomanationAmt: string;
  transactionAmt: string;
  mobileCount: string;
  refundStatus: string;
  dateTime: string;
  view: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {no: '1', telecomName: 'Mpt', fileName:'20224848795',bulkReferenceNo:'1863010697',status:'Top Up Success',totalTopUp:'100,000',fail:'-',success:'100,000',totalRequest:'100,000',failPrice:'100,000',successPrice:'0',denomanationAmt:'100,000',transactionAmt:'100,000',mobileCount:'10',refundStatus:'-',dateTime:'Fri, 12-March-2021 12:10:20',  view:'assets/icons/View.svg'},
];

export interface PeriodicElement1 {
  telecomName: string;
  plan: string;
  amount: string;
  mobileNumber: string;
  status: string;
  rechargedMethod: string;
  refundReason: string;
  refundId: string;
  refundAmnt: string;
  dateTime: string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {telecomName: 'Mpt', plan:'Top Up',amount:'10,000',mobileNumber:'+95 9448460555',status:'Success',rechargedMethod:'API',refundReason:'-',refundId:'-',refundAmnt:'-',dateTime:'Fri, 12-March-2021 12:10:20'},
  {telecomName: 'Mpt', plan:'Top Up',amount:'10,000',mobileNumber:'+95 9448460555',status:'Success',rechargedMethod:'E-Load',refundReason:'Top Up Fail',refundId:'Rft 1863010697',refundAmnt:'9,500 MMK',dateTime:'Fri, 12-March-2021 12:10:20'},
  {telecomName: 'Mpt', plan:'Top Up',amount:'10,000',mobileNumber:'+95 9448460555',status:'Fail',rechargedMethod:'Balance',refundReason:'-',refundId:'-',refundAmnt:'-',dateTime:'Fri, 12-March-2021 12:10:20'},
];
