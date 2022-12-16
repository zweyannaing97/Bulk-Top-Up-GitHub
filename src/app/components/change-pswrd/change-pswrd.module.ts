import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePswrdRoutingModule } from './change-pswrd-routing.module';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChangePswrdRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChangePswrdModule { }
