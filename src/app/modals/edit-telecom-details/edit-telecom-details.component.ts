import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-telecom-details',
  templateUrl: './edit-telecom-details.component.html',
  styleUrls: ['./edit-telecom-details.component.scss']
})
export class EditTelecomDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTelecomDetailsComponent>) { }

  myModel = true;

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
}
