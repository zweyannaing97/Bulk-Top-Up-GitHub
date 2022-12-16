import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-telecom-details',
  templateUrl: './create-telecom-details.component.html',
  styleUrls: ['./create-telecom-details.component.scss']
})
export class CreateTelecomDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateTelecomDetailsComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
}
