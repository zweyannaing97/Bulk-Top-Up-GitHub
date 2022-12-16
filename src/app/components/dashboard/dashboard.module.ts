import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TopUpChartComponent } from './top-up-chart/top-up-chart.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MatCardModule} from "@angular/material/card";
import { DataplanComponent } from './dataplan/dataplan.component';
import { TopupTotalComponent } from './topup-total/topup-total.component';
import {MatTableModule} from "@angular/material/table";
import { ProcessTotalComponent } from './process-total/process-total.component';
import { MobileNumberDetailComponent } from './mobile-number-detail/mobile-number-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { MultiTransactionDetailComponent } from './multi-transaction-detail/multi-transaction-detail.component';
import { MultiMobileDetailComponent } from './multi-mobile-detail/multi-mobile-detail.component';
import { SingleTransactionDetailComponent } from './single-transaction-detail/single-transaction-detail.component';
import { SingleMobileDetailComponent } from './single-mobile-detail/single-mobile-detail.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    TopUpChartComponent,
    DataplanComponent,
    TopupTotalComponent,
    ProcessTotalComponent,
    MobileNumberDetailComponent,
    TransactionDetailComponent,
    MultiTransactionDetailComponent,
    MultiMobileDetailComponent,
    SingleTransactionDetailComponent,
    SingleMobileDetailComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatSelectModule,
        NgxChartsModule,
        MatCardModule,
        MatTableModule,
        MatInputModule,
    ]
})
export class DashboardModule { }
