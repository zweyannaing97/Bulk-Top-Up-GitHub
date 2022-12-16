import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTopUpComponent } from "./single-top-up/single-top-up.component";
import { CreateSingleTopUpComponent } from "./create-single-top-up/create-single-top-up.component";
import { CreateSuccessErrorComponent } from "./create-success-error/create-success-error.component";
import { MultipleTopUpComponent } from "./multiple-top-up/multiple-top-up.component";
import { CreateMultipleTopUpComponent } from "./create-multiple-top-up/create-multiple-top-up.component";
import { CreateMultipleSuccessErrorComponent } from "./create-multiple-success-error/create-multiple-success-error.component";
import { BulkTopUpComponent } from "./bulk-top-up/bulk-top-up.component";
import { CreateBulkTopUpComponent } from "./create-bulk-top-up/create-bulk-top-up.component";
import { CreateBulkSuccessErrorComponent } from "./create-bulk-success-error/create-bulk-success-error.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'single-top-up',
        component: SingleTopUpComponent
      },
      {
        path: 'create-single',
        component: CreateSingleTopUpComponent
      },
      {
        path: 'create-success-error',
        component: CreateSuccessErrorComponent
      },
      {
        path: 'multiple-top-up',
        component: MultipleTopUpComponent
      },
      {
        path: 'create-multiple-top-up',
        component: CreateMultipleTopUpComponent
      },
      {
        path: 'create-multiple-success-error',
        component: CreateMultipleSuccessErrorComponent
      },
      {
        path: 'bulk-top-up',
        component: BulkTopUpComponent
      },
      {
        path: 'create-bulk-top-up',
        component: CreateBulkTopUpComponent
      },
      {
        path: 'create-bulk-success-error',
        component: CreateBulkSuccessErrorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
