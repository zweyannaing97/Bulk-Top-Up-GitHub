import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListingComponent } from "./user-listing/user-listing.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

const routes: Routes = [
  {
    path: '',
    component: UserListingComponent},
  {
    path: 'user-add',
    component: UserAddComponent},
  {
    path: 'user-edit',
    component: UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRolePermissionRoutingModule { }
