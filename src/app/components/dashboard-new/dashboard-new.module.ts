import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardNewRoutingModule } from './dashboard-new-routing.module';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TopUpBaseAmountComponent } from './top-up-base-amount/top-up-base-amount.component';
import { ServiceTypeBaseAmountComponent } from './service-type-base-amount/service-type-base-amount.component';
import { OperatorBaseAmountComponent } from './operator-base-amount/operator-base-amount.component';
import { SingleTopUpDetailsComponent } from './single-top-up-details/single-top-up-details.component';
import { MultipleTopUpDetailsComponent } from './multiple-top-up-details/multiple-top-up-details.component';
import { BulkTopUpDetailsComponent } from './bulk-top-up-details/bulk-top-up-details.component';

@NgModule({
  declarations: [
    DashboardIndexComponent,
    TopUpBaseAmountComponent,
    ServiceTypeBaseAmountComponent,
    OperatorBaseAmountComponent,
    SingleTopUpDetailsComponent,
    MultipleTopUpDetailsComponent,
    BulkTopUpDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardNewRoutingModule,
    NgApexchartsModule
  ]
})
export class DashboardNewModule { }
