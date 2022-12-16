import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormControl} from "@angular/forms";
@Component({
  selector: 'app-telecom-price-filter',
  templateUrl: './telecom-price-filter.component.html',
  styleUrls: ['./telecom-price-filter.component.scss']
})
export class TelecomPriceFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TelecomPriceFilterComponent>) { }


  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

  telecomNames: string[] = ['MEC Tel', 'MPT','Mytel','Ooredoo','Telenor'];
  telecomNamelists = new FormControl;


  serviceTypes: string[] = ['Top Up', 'Data','Special Offer'];
  serviceTypelists = new FormControl;
}
