import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFlightRoutingModule } from './create-flight-routing.module';
import { CreateFlightComponent } from './create-flight.component';


@NgModule({
  declarations: [CreateFlightComponent],
  imports: [
    CommonModule,
    CreateFlightRoutingModule,

  ]
})
export class CreateFlightModule { }
