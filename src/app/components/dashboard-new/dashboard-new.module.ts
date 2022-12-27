import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardNewRoutingModule } from './dashboard-new-routing.module';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';


@NgModule({
  declarations: [
    DashboardIndexComponent
  ],
  imports: [
    CommonModule,
    DashboardNewRoutingModule
  ]
})
export class DashboardNewModule { }
