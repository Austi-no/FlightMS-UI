import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFlightComponent } from './create-flight.component'

const routes: Routes = [
  { path: '', component: CreateFlightComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateFlightRoutingModule { }
