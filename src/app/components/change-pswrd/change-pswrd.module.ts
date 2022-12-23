import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePswrdRoutingModule } from './change-pswrd-routing.module';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChangePswrdRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class ChangePswrdModule { }
