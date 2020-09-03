import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAirportComponent } from './create-airport.component';

const routes: Routes = [
  {path:'', component:CreateAirportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAirportRoutingModule { }
