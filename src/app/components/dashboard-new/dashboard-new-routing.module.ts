import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkTopUpDetailsComponent } from './bulk-top-up-details/bulk-top-up-details.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { MultipleTopUpDetailsComponent } from './multiple-top-up-details/multiple-top-up-details.component';
import { OperatorBaseAmountComponent } from './operator-base-amount/operator-base-amount.component';
import { ServiceTypeBaseAmountComponent } from './service-type-base-amount/service-type-base-amount.component';
import { SingleTopUpDetailsComponent } from './single-top-up-details/single-top-up-details.component';
import { TopUpBaseAmountComponent } from './top-up-base-amount/top-up-base-amount.component';

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
    path:'operator-base',
    component: OperatorBaseAmountComponent
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



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardNewRoutingModule { }
