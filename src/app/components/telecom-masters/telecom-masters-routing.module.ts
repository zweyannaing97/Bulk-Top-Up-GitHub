import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelecomListingComponent } from "./telecom-listing/telecom-listing.component";
import { TelecomServiceTypeComponent } from "./telecom-service-type/telecom-service-type.component";
import { ServiceTypeConfigurationComponent } from "./service-type-configuration/service-type-configuration.component";
import { TelecomPriceComponent } from "./telecom-price/telecom-price.component";
import { EditServiceTypeConfigurationComponent } from "../../modals/edit-service-type-configuration/edit-service-type-configuration.component";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'telecom-listing',
      component: TelecomListingComponent
    },
    {
      path: 'telecom-service-type',
      component: TelecomServiceTypeComponent
    },
    {
      path: 'service-type-configuration',
      component: ServiceTypeConfigurationComponent
    },
    {
      path: 'edit-service-type-configuration',
      component: EditServiceTypeConfigurationComponent
    },
    {
      path: 'telecom-price',
      component: TelecomPriceComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecomMastersRoutingModule { }
