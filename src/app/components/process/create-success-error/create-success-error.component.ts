import {Component,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-create-success-error',
  templateUrl: './create-success-error.component.html',
  styleUrls: ['./create-success-error.component.scss']
})
export class CreateSuccessErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  telecomNames = [
    { viewValue: 'MEC Tel'},
    { viewValue: 'Mpt'},
    { viewValue: 'Ooredoo'},
    { viewValue: 'Mytel'},
    { viewValue: 'Telenor'},
  ];
  serverTypes = [
    { viewValue: 'Data Plan'},
    { viewValue: 'Special'},
    { viewValue: 'Top Up'},
  ];

  displayedColumns: string[] = ['telecomName','uploadName','serviceType','price','beneficiaryNo','status','excelNo','error'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  telecomName:string;
  uploadName:string;
  serviceType:string;
  price:string;
  beneficiaryNo:string;
  status:string;
  excelNo:string;
  error:string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {telecomName:'Mpt',uploadName:'Mpt',serviceType:'Top Up',price:'10,000 MMK',beneficiaryNo:'0095942112559',status:'valid',excelNo:'2',error:'-'},
];
