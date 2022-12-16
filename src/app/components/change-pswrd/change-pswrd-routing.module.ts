import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChangePswrdComponent} from "./change-pswrd.component";

const routes: Routes = [
  {
    path: '',
    component: ChangePswrdComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePswrdRoutingModule { }
