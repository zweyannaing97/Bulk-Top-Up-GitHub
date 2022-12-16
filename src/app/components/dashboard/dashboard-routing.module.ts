import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { TopUpChartComponent } from "./top-up-chart/top-up-chart.component";
import { DataplanComponent } from "./dataplan/dataplan.component";
import { TopupTotalComponent } from "./topup-total/topup-total.component";
import { ProcessTotalComponent } from "./process-total/process-total.component";
import { MobileNumberDetailComponent } from "./mobile-number-detail/mobile-number-detail.component";
import { TransactionDetailComponent } from "./transaction-detail/transaction-detail.component";
import { MultiTransactionDetailComponent } from "./multi-transaction-detail/multi-transaction-detail.component";
import { MultiMobileDetailComponent } from "./multi-mobile-detail/multi-mobile-detail.component";
import { SingleTransactionDetailComponent } from "./single-transaction-detail/single-transaction-detail.component";
import { SingleMobileDetailComponent } from "./single-mobile-detail/single-mobile-detail.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'top-up-chart',
    component: TopUpChartComponent
  },
  {
    path: 'dataplan-chart',
    component: DataplanComponent
  },
  {
    path: 'topuptotal-chart',
    component: TopupTotalComponent
  },
  {
    path: 'processtotal-chart',
    component: ProcessTotalComponent
  },
  {
    path: 'mobileNo-detail',
    component: MobileNumberDetailComponent
  },
  {
    path: 'transaction-detail',
    component: TransactionDetailComponent
  }
  ,{
    path: 'multi-transactionDetail',
    component: MultiTransactionDetailComponent
  },
  {
    path: 'multi-mobileDetail',
    component: MultiMobileDetailComponent
  },
  {
    path: 'single-transactionDetail',
    component: SingleTransactionDetailComponent
  },
  {
    path: 'single-mobileDetail',
    component: SingleMobileDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
