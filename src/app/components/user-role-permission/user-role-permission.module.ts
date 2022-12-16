import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRolePermissionRoutingModule } from './user-role-permission-routing.module';
import { UserListingComponent } from './user-listing/user-listing.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

       UserListingComponent,
        UserAddComponent,
        UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRolePermissionRoutingModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    MatCheckboxModule,ReactiveFormsModule
  ]
})
export class UserRolePermissionModule { }
