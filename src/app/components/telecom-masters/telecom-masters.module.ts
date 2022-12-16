import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelecomMastersRoutingModule } from './telecom-masters-routing.module';
import { TelecomListingComponent } from './telecom-listing/telecom-listing.component';
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TelecomServiceTypeComponent } from './telecom-service-type/telecom-service-type.component';
import { ServiceTypeConfigurationComponent } from './service-type-configuration/service-type-configuration.component';
import {MatSelectModule} from "@angular/material/select";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { TelecomPriceComponent } from './telecom-price/telecom-price.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    TelecomListingComponent,
    TelecomServiceTypeComponent,
    ServiceTypeConfigurationComponent,
    TelecomPriceComponent
  ],
    imports: [
        CommonModule,
        TelecomMastersRoutingModule,
        MatTableModule,
        MatTooltipModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatRadioModule,
        FormsModule,
        MatSelectModule,
        FlexModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,ReactiveFormsModule,
    ]
})
export class TelecomMastersModule { }
