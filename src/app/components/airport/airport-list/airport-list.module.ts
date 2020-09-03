import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportListRoutingModule } from './airport-list-routing.module';
import { AirportListComponent } from './airport-list.component';


@NgModule({
  declarations: [AirportListComponent],
  imports: [
    CommonModule,
    AirportListRoutingModule
  ]
})
export class AirportListModule { }
