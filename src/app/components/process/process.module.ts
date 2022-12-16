import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { SingleTopUpComponent } from './single-top-up/single-top-up.component';
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateSingleTopUpComponent } from './create-single-top-up/create-single-top-up.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import { CreateSuccessErrorComponent } from './create-success-error/create-success-error.component';
import { MultipleTopUpComponent } from './multiple-top-up/multiple-top-up.component';
import { CreateMultipleTopUpComponent } from './create-multiple-top-up/create-multiple-top-up.component';
import { CreateMultipleSuccessErrorComponent } from './create-multiple-success-error/create-multiple-success-error.component';
import { BulkTopUpComponent } from './bulk-top-up/bulk-top-up.component';
import { CreateBulkTopUpComponent } from './create-bulk-top-up/create-bulk-top-up.component';
import { CreateBulkSuccessErrorComponent } from './create-bulk-success-error/create-bulk-success-error.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    SingleTopUpComponent,
    CreateSingleTopUpComponent,
    CreateSuccessErrorComponent,
    MultipleTopUpComponent,
    CreateMultipleTopUpComponent,
    CreateMultipleSuccessErrorComponent,
    BulkTopUpComponent,
    CreateBulkTopUpComponent,
    CreateBulkSuccessErrorComponent,
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    MatTableModule,
    MatTooltipModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule
  ]
})
export class ProcessModule { }
