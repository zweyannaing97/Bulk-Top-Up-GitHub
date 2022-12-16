import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-telecom-service-type',
  templateUrl: './create-telecom-service-type.component.html',
  styleUrls: ['./create-telecom-service-type.component.scss']
})
export class CreateTelecomServiceTypeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateTelecomServiceTypeComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
}
