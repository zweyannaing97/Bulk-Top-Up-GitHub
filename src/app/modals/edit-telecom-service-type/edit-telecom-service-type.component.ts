import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-telecom-service-type',
  templateUrl: './edit-telecom-service-type.component.html',
  styleUrls: ['./edit-telecom-service-type.component.scss']
})
export class EditTelecomServiceTypeComponent implements OnInit {
  myModel = true;
  constructor(public dialogRef: MatDialogRef<EditTelecomServiceTypeComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
