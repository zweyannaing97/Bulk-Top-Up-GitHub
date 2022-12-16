import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-service-type-filter',
  templateUrl: './service-type-filter.component.html',
  styleUrls: ['./service-type-filter.component.scss']
})
export class ServiceTypeFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ServiceTypeFilterComponent>) { }
  ngOnInit(): void {
  }
  myModel = true;

  onDismiss(){
    this.dialogRef.close();
  }

  telecomNames: string[] = ['MEC Tel', 'MPT','Mytel','Ooredoo','Telenor'];
  telecomNamelists = new FormControl;


  serviceTypes: string[] = ['Top Up', 'Data','Special Offer'];
  serviceTypelists = new FormControl;

}
