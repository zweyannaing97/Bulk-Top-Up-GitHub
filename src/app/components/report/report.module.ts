import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportDetailsComponent } from './report-details/report-details.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ReportDetailViewComponent } from './report-detail-view/report-detail-view.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { TransactionDetailViewComponent } from './transaction-detail-view/transaction-detail-view.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReportDetailsComponent,
    ReportDetailViewComponent,
    TransactionDetailComponent,
    TransactionDetailViewComponent
  ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        FlexModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatToolbarModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatDatepickerModule,
        BsDatepickerModule,
        FormsModule,ReactiveFormsModule,
    ]
})
export class ReportModule { }
