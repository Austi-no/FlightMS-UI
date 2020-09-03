import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAirportComponent } from './create-airport.component';

import { CreateAirportRoutingModule } from './create-airport-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateAirportComponent],
  imports: [
    CommonModule,
    CreateAirportRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateAirportModule { }
