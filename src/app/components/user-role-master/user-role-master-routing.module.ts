import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { DepartmentComponent } from "./department/department.component";
import { CompanyAddComponent } from "./company-add/company-add.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { DepartmentAddComponent } from "./department-add/department-add.component";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";
import { DesignationComponent } from "./designation/designation.component";
import { DesignationAddComponent } from "./designation-add/designation-add.component";
import { DesignationEditComponent } from "./designation-edit/designation-edit.component";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'company-listing',
      component: CompanyListingComponent
    },
    {
      path: 'company-add',
      component: CompanyAddComponent
    },
    {
      path: 'company-edit',
      component: CompanyEditComponent
    },
    {
      path: 'department',
      component: DepartmentComponent
    },
    {
      path: 'department-add',
      component: DepartmentAddComponent
    },
    {
      path: 'department-edit',
      component: DepartmentEditComponent
    },
    {
      path: 'designation',
      component: DesignationComponent
    },
    {
      path: 'designation-add',
      component: DesignationAddComponent
    },
    {
      path: 'designation-edit',
      component: DesignationEditComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoleMasterRoutingModule { }
