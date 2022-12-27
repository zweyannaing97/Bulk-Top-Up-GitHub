import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResendOtpComponent } from './resend-otp/resend-otp.component';
import { EnterOtpComponent } from "./enter-otp/enter-otp.component";
import { RequestOtpComponent } from "./request-otp/request-otp.component";
import { OtpRequestComponent } from './otp-request/otp-request.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'forgot-password',
      component: ForgotPasswordComponent
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent
    },
    {
      path: 'resend-otp',
      component: ResendOtpComponent
    },
    {
      path: 'enter-otp',
      component: EnterOtpComponent
    },
    {
      path: 'request-otp',
      component: RequestOtpComponent
    },

    {
      path: 'otp-request',
      component:OtpRequestComponent 
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
