import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkTopUpDetailsComponent } from './bulk-top-up-details/bulk-top-up-details.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DataPlanDetailsComponent } from './data-plan-details/data-plan-details.component';
import { MultipleTopUpDetailsComponent } from './multiple-top-up-details/multiple-top-up-details.component';
import { OperatorBaseAmountComponent } from './operator-base-amount/operator-base-amount.component';
import { OperatorBaseMecComponent } from './operator-base-mec/operator-base-mec.component';
import { OperatorBaseMytelComponent } from './operator-base-mytel/operator-base-mytel.component';
import { OperatorBaseOoredooComponent } from './operator-base-ooredoo/operator-base-ooredoo.component';
import { OperatorBaseTelenorComponent } from './operator-base-telenor/operator-base-telenor.component';
import { ServiceTypeBaseAmountComponent } from './service-type-base-amount/service-type-base-amount.component';
import { SingleTopUpDetailsComponent } from './single-top-up-details/single-top-up-details.component';
import { SpecialOfferDetailsComponent } from './special-offer-details/special-offer-details.component';
import { TopUpBaseAmountComponent } from './top-up-base-amount/top-up-base-amount.component';
import { TopUpDetailsComponent } from './top-up-details/top-up-details.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardIndexComponent
  },

  {
    path:'top-up-base',
    component: TopUpBaseAmountComponent
  },

  {
    path:'service-type-base',
    component: ServiceTypeBaseAmountComponent
  },

  {
    path:'single-top-up-details',
    component: SingleTopUpDetailsComponent
  },

  {
    path:'multiple-top-up-details',
    component: MultipleTopUpDetailsComponent
  },

  {
    path:'bulk-top-up-details',
    component: BulkTopUpDetailsComponent
  },

  {
    path:'top-up-details',
    component: TopUpDetailsComponent
  },

  {
    path:'data-plan-details',
    component: DataPlanDetailsComponent
  },

  {
    path:'special-offer-details',
    component: SpecialOfferDetailsComponent
  },
  {
    path:'operator-base-mpt',
    component: OperatorBaseAmountComponent
  },

  {
    path:'operator-base-telenor',
    component: OperatorBaseTelenorComponent
  },
  {
    path:'operator-base-ooredoo',
    component: OperatorBaseOoredooComponent
  },
  {
    path:'operator-base-mytel',
    component: OperatorBaseMytelComponent
  },
  {
    path:'operator-base-mec',
    component: OperatorBaseMecComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardNewRoutingModule { }
