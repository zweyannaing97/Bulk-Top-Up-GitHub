import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ReportDetailsComponent implements OnInit {
  isShown: boolean | undefined;
  toggleShow() {
    this.isShown = true;
  }
  otp_form_valid: boolean = false;
  form!:FormGroup
  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      mobileNumber: ['', Validators.required],
    });
  }
  formValidation(){
    if (this.form.invalid) {
      this.otp_form_valid = false;
    }
    else{
      this.otp_form_valid = true;
    }
  }
  selectedCar: any|string;
  companynames = [
    {value:'OK$ Transaction By ID', viewValue: 'OK$ Transaction By ID'},
    {value:'Top Up Ref Number', viewValue: 'Top Up Ref Number'},
    {value:'Top Up API Ref Number', viewValue: 'Top Up API Ref Number'},
    {value:'Bulk Top Up By Reference', viewValue: 'Bulk Top Up By Reference'},
    {value:'Top Up Mobile Number', viewValue: 'Top Up Mobile Number'},
    {value:'Data Plan Recharge Mobile Number', viewValue: 'Data Plan Recharge Mobile Number'},
    {value:'Special Offer Recharge Mobile Number', viewValue: 'Special Offer Recharge Mobile Number'},
  ];
  
  displayedColumns: string[] = ['no', 'telecomName', 'fileName', 'bulkReferenceNo','status',
    'totalTopUp','fail','success','totalRequest','failPrice','successPrice','denomanationAmt',
    'transactionAmt','mobileCount','refundStatus','dateTime','view'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

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
  {no: '2', telecomName: 'Telenor', fileName:'2022984555',bulkReferenceNo:'185647857',status:'Top Up Success',totalTopUp:'200,000',fail:'-',success:'200,000',totalRequest:'200,000',failPrice:'200,000',successPrice:'0',denomanationAmt:'200,000',transactionAmt:'200,000',mobileCount:'20',refundStatus:'-',dateTime:'Fri, 12-March-2021 12:10:20',  view:'assets/icons/View.svg'},
  {no: '3', telecomName: 'Ooredoo', fileName:'20225489965',bulkReferenceNo:'187899554',status:'Top Up Success',totalTopUp:'300,000',fail:'-',success:'300,000',totalRequest:'300,000',failPrice:'300,000',successPrice:'0',denomanationAmt:'300,000',transactionAmt:'300,000',mobileCount:'30',refundStatus:'-',dateTime:'Fri, 12-March-2021 12:10:20',  view:'assets/icons/View.svg'},
];
