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
import { TopUpDetailsComponent } from './top-up-details/top-up-details.component';
import { DataPlanDetailsComponent } from './data-plan-details/data-plan-details.component';
import { SpecialOfferDetailsComponent } from './special-offer-details/special-offer-details.component';
import { OperatorBaseTelenorComponent } from './operator-base-telenor/operator-base-telenor.component';
import { OperatorBaseOoredooComponent } from './operator-base-ooredoo/operator-base-ooredoo.component';
import { OperatorBaseMytelComponent } from './operator-base-mytel/operator-base-mytel.component';
import { OperatorBaseMecComponent } from './operator-base-mec/operator-base-mec.component';

@NgModule({
  declarations: [
    DashboardIndexComponent,
    TopUpBaseAmountComponent,
    ServiceTypeBaseAmountComponent,
    OperatorBaseAmountComponent,
    SingleTopUpDetailsComponent,
    MultipleTopUpDetailsComponent,
    BulkTopUpDetailsComponent,
    TopUpDetailsComponent,
    DataPlanDetailsComponent,
    SpecialOfferDetailsComponent,
    OperatorBaseTelenorComponent,
    OperatorBaseOoredooComponent,
    OperatorBaseMytelComponent,
    OperatorBaseMecComponent
  ],
  imports: [
    CommonModule,
    DashboardNewRoutingModule,
    NgApexchartsModule
  ]
})
export class DashboardNewModule { }
