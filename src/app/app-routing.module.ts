import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './shared/layout/simple-layout/simple-layout.component';

const routes: Routes = [

  {
    path: '', redirectTo:'/dashboard', pathMatch:'full'
  },

  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [{
      path: 'dashboard',
      loadChildren: () => import('./components/dashboard-new/dashboard-new.module').then(m => m.DashboardNewModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
    },
    {
      path: 'user-role-master',
      loadChildren: () => import('./components/user-role-master/user-role-master.module').then(m => m.UserRoleMasterModule)
    },
    {
      path: 'user-role-permission',
      loadChildren: () => import('./components/user-role-permission/user-role-permission.module').then(m => m.UserRolePermissionModule)
    },
    {
      path: 'telecom-masters',
      loadChildren: () => import('./components/telecom-masters/telecom-masters.module').then(m => m.TelecomMastersModule)
    },
    {
      path: 'process',
      loadChildren: () => import('./components/process/process.module').then(m => m.ProcessModule)
    },
    {
      path: 'report',
      loadChildren: () => import('./components/report/report.module').then(m => m.ReportModule)
    },
    {
      path: 'change-pswrd',
      loadChildren: () => import('./components/change-pswrd/change-pswrd.module').then(m => m.ChangePswrdModule)
    },
    {
      path: 'logout',
      loadChildren: () => import('./components/logout/logout.module').then(m => m.LogoutModule)
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
