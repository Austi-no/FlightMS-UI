import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { CreateBookingComponent } from './components/booking/create-booking/create-booking.component';
import { UpdateBookingComponent } from './components/booking/update-booking/update-booking.component';
import { BookingDetailsComponent } from './components/booking/booking-details/booking-details.component';
import { LogoutComponent } from './security/logout/logout.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { CreateAirportComponent } from './components/airport/create-airport/create-airport.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { StartComponent } from './layout/start/start.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'create-airport', component: CreateAirportComponent },

  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: StartComponent },
      { path: 'flight/create', loadChildren: () => import('./components/flight/create-flight/create-flight.module').then(m => m.CreateFlightModule) },
      
      { path: 'airport/create', loadChildren: () => import('./components/airport/create-airport/create-airport.module').then(m => m.CreateAirportModule) },
      { path: 'airport/list', loadChildren: () => import('./components/airport/airport-list/airport-list.module').then(m => m.AirportListModule) },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
