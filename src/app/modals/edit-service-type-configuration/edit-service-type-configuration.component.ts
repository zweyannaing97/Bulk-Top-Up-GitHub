import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-service-type-configuration',
  templateUrl: './edit-service-type-configuration.component.html',
  styleUrls: ['./edit-service-type-configuration.component.scss']
})
export class EditServiceTypeConfigurationComponent implements OnInit {
  myModel = true;

  constructor(public dialogRef: MatDialogRef<EditServiceTypeConfigurationComponent>) { }


  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
  telecomNames = [
    { viewValue: 'MEC Tel'},
    { viewValue: 'Mpt'},
    { viewValue: 'Ooredoo'},
    { viewValue: 'Mytel'},
    { viewValue: 'Telenor'},
  ];
  dataPlans = [
    { viewValue: 'Data Plan'},
    { viewValue: 'Special'},
    { viewValue: 'Top Up'},
    { viewValue: 'Fb Pack'},
  ];
}
