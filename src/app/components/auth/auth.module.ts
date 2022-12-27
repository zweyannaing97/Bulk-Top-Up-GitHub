import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { DemoMaterialModule } from 'src/app/shared/modules/material-module';
import { ResendOtpComponent } from './resend-otp/resend-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnterOtpComponent } from './enter-otp/enter-otp.component';
import { RequestOtpComponent } from './request-otp/request-otp.component';
import { OtpRequestComponent } from './otp-request/otp-request.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent, ResendOtpComponent, EnterOtpComponent, RequestOtpComponent, OtpRequestComponent, ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    AuthRoutingModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,

  ]
})
export class AuthModule { }
