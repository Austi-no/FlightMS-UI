import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirportListComponent } from './airport-list.component';

const routes: Routes = [
  {path:'', component:AirportListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportListRoutingModule { }
