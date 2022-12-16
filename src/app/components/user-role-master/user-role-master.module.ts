import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoleMasterRoutingModule } from './user-role-master-routing.module';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { DepartmentComponent } from './department/department.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CompanyEditComponent } from './company-edit/company-edit.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DesignationComponent } from './designation/designation.component';
import { DesignationAddComponent } from './designation-add/designation-add.component';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';


@NgModule({
  declarations: [CompanyListingComponent, CompanyAddComponent, DepartmentComponent, CompanyEditComponent, DepartmentAddComponent, DepartmentEditComponent, DesignationComponent, DesignationAddComponent, DesignationEditComponent],
  imports: [
    CommonModule,
    UserRoleMasterRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,

  ]
})
export class UserRoleMasterModule { }
