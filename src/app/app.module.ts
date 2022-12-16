import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReqInterceptor } from './core/interceptor/req-interceptor.service';
import { UserRolePermissionFilterComponent } from './modals/user-role-permission-filter/user-role-permission-filter.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { CreateTelecomDetailsComponent } from './modals/create-telecom-details/create-telecom-details.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { EditTelecomDetailsComponent } from './modals/edit-telecom-details/edit-telecom-details.component';
import { CreateTelecomServiceTypeComponent } from './modals/create-telecom-service-type/create-telecom-service-type.component';
import { EditTelecomServiceTypeComponent } from './modals/edit-telecom-service-type/edit-telecom-service-type.component';
import { SingleTopUpFilterComponent } from './modals/single-top-up-filter/single-top-up-filter.component';
import { MultipleTopUpFilterComponent } from './modals/multiple-top-up-filter/multiple-top-up-filter.component';
import { BulkTopUpFilterComponent } from './modals/bulk-top-up-filter/bulk-top-up-filter.component';
import { ChangePswrdComponent } from './components/change-pswrd/change-pswrd.component';
import {MatCardModule} from "@angular/material/card";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditServiceTypeConfigurationComponent } from './modals/edit-service-type-configuration/edit-service-type-configuration.component';
import { ConfirmAlertComponent } from './modals/confirm-alert/confirm-alert.component';
import { LogoutLayoutComponent } from './components/logout/logout-layout/logout-layout.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import { DashboardFilterComponent } from './modals/dashboard-filter/dashboard-filter.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceTypeFilterComponent } from './modals/service-type-filter/service-type-filter.component';
import { TelecomPriceFilterComponent } from './modals/telecom-price-filter/telecom-price-filter.component';
const MY_FORMATS = {
  parse: {
    dateInput: 'ddd,DD-MMM-YYYY',
  },
  display: {
    dateInput: 'ddd,DD-MMM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    UserRolePermissionFilterComponent,
    CreateTelecomDetailsComponent,
    EditTelecomDetailsComponent,
    CreateTelecomServiceTypeComponent,
    EditTelecomServiceTypeComponent,
    SingleTopUpFilterComponent,
    MultipleTopUpFilterComponent,
    BulkTopUpFilterComponent,
    ChangePswrdComponent,
    DashboardComponent,
    EditServiceTypeConfigurationComponent,
    ConfirmAlertComponent,
    LogoutLayoutComponent,
    DashboardFilterComponent,
    ProfileComponent,
    ServiceTypeFilterComponent,
    TelecomPriceFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    FlexModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    BsDatepickerModule.forRoot(),
    NgxChartsModule,
    MatTooltipModule,
    MatTableModule,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor, multi: true,

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
