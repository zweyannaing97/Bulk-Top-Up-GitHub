import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailsComponent } from "./report-details/report-details.component";
import { ReportDetailViewComponent } from "./report-detail-view/report-detail-view.component";
import { TransactionDetailComponent } from "./transaction-detail/transaction-detail.component";
import { TransactionDetailViewComponent } from "./transaction-detail-view/transaction-detail-view.component";

const routes: Routes = [
  {
    path:'',
    children:[
      {
      path:'report-details',
      component: ReportDetailsComponent
    },
      {
      path:'report-details-view',
      component: ReportDetailViewComponent
    },
      {
      path:'transaction-detail',
      component: TransactionDetailComponent
    },
      {
      path:'transaction-detail-view',
      component: TransactionDetailViewComponent
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
