import { Component, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;
  constructor() {}

  ngOnInit(): void {
    this.isShown = false; //hidden every time subscribe detects change
    this.isShown1 = false; //hidden every time subscribe detects change
  }
  maxDate = new Date();

  selectedCar: any|string;
  transactionTypes = [
    {value:'Bulk Top Up By Date', viewValue: 'Bulk Top Up By Date'},
    {value:'Transaction By Date', viewValue: 'Transaction By Date'},
  ];
  operators = [
    { viewValue: 'MEC Tel'},
    { viewValue: 'Mpt'},
    { viewValue: 'Ooredoo'},
    { viewValue: 'Mytel'},
    { viewValue: 'Telenor'},
  ];
  processes = [
    { viewValue: 'Single Top Up'},
    { viewValue: 'Multiple Top Up'},
    { viewValue: 'Bulk Top Up'},
  ];
  statuses = [
    { viewValue: 'File Has Been Uploaded'},
    { viewValue: 'User Processed For Payment'},
    { viewValue: 'Payment Response Has Been Came - Success'},
    { viewValue: 'Payment Response Has Been Came - Fail'},
    { viewValue: 'Top Up Success'},
    { viewValue: 'Top Up Fail'},
    { viewValue: 'Top Up Partail Has Been Success'},
    { viewValue: 'No Records Found'},
  ];
  displayedColumns: string[] = ['no', 'transactionType','telecomName', 'process','fileName','transactionId','bulkReferenceNo','status',
    'fail','success','totalRequest','failPrice','successPrice','debitAccType',
    'debitNo','totalTransactionAmt','refundReason','refundId','refundStatus','dateTime','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns1: string[] = ['no', 'transactionType','telecomName','fileName','transactionId','totalRequest',
    'fail','success','topUpStatus','bulkReferenceNo','failPrice','debitAccType','debitNo','totalTransactionAmt','totalPrice',
    'refundReason','refundId','refundStatus','transactionDate','dateTime','description'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  isShown: boolean | undefined;
  isShown1: boolean | undefined;
  toggleShow() {
    this.isShown1 = false;
    this.isShown = true;
  }
  toggleShow1() {
    this.isShown= false;
    this.isShown1= true;
  }
}
export interface PeriodicElement {
  no: string;
  telecomName: string;
  transactionType: string;
  transactionId: string;
  fileName: string;
  process: string;
  bulkReferenceNo: string;
  status: string;
  fail: string;
  success: string;
  totalRequest: string;
  failPrice: string;
  successPrice: string;
  debitAccType: string;
  debitNo: string;
  totalTransactionAmt: string;
  refundReason: string;
  refundId: string;
  refundStatus: string;
  dateTime: string;
  view: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {no: '1', transactionType:'Bulk Top Up By Date',telecomName: 'Mpt', fileName:'20224848795',process:'Bulk Top Up',
    transactionId:'1863010697',bulkReferenceNo:'Bff-1863010',status:'Top Up Success',fail:'-',
    success:'100,000',totalRequest:'100,000',failPrice:'0',successPrice:'100,000',
    debitAccType:'Personal',debitNo:'0959421008562',totalTransactionAmt:'100,000',
    refundReason:'-',refundId:'-',refundStatus:'-',dateTime:'Fri, 12-March-2021 12:10:20', view:'assets/icons/View.svg'},
];

export interface PeriodicElement1 {
  no: string;
  telecomName: string;
  transactionType: string;
  transactionId: string;
  fileName: string;
  bulkReferenceNo: string;
  fail: string;
  success: string;
  totalRequest: string;
  topUpStatus: string;
  failPrice: string;
  debitAccType: string;
  debitNo: string;
  totalTransactionAmt: string;
  refundReason: string;
  refundId: string;
  refundStatus: string;
  totalPrice:string;
  transactionDate: string;
  dateTime: string;
  description: string;

}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {no: '1', transactionType:'Bulk Top Up By Date',telecomName: 'Mpt', fileName:'20224848795',
    transactionId:'1863010697',bulkReferenceNo:'Bff-1863010',fail:'-',totalPrice:'100,000 MMK',topUpStatus:'-',
    success:'100,000',totalRequest:'100,000',failPrice:'0',
    debitAccType:'Personal',debitNo:'0959421008562',totalTransactionAmt:'100,000',
    refundReason:'-',refundId:'-',refundStatus:'-',transactionDate:'-',dateTime:'Fri, 12-March-2021 12:10:20', description:'-'},{no: '1', transactionType:'Bulk Top Up By Date',telecomName: 'Mpt', fileName:'20224848795',
    transactionId:'1863010697',bulkReferenceNo:'Bff-1863010',fail:'-',totalPrice:'100,000 MMK',topUpStatus:'-',
    success:'100,000',totalRequest:'100,000',failPrice:'0',
    debitAccType:'Personal',debitNo:'0959421008562',totalTransactionAmt:'100,000',
    refundReason:'-',refundId:'-',refundStatus:'-',transactionDate:'-',dateTime:'Fri, 12-March-2021 12:10:20', description:'-'},
];
