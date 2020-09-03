import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './security/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { CreateBookingComponent } from './components/booking/create-booking/create-booking.component';
import { UpdateBookingComponent } from './components/booking/update-booking/update-booking.component';
import { BookingDetailsComponent } from './components/booking/booking-details/booking-details.component';
import { LogoutComponent } from './security/logout/logout.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { UpdateAirportComponent } from './components/airport/update-airport/update-airport.component';
import { AirportDetailsComponent } from './components/airport/airport-details/airport-details.component';
import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import { UpdateFlightComponent } from './components/flight/update-flight/update-flight.component';
import { FlightDetailsComponent } from './components/flight/flight-details/flight-details.component';
import { AddScheduledFlightComponent } from './components/flight-schedule/add-scheduled-flight/add-scheduled-flight.component';
import { ShowScheduleFlightComponent } from './components/flight-schedule/show-schedule-flight/show-schedule-flight.component';
import { SearchScheduledFlightComponent } from './components/flight-schedule/search-scheduled-flight/search-scheduled-flight.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { StartComponent } from './layout/start/start.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    BookingListComponent,
    CreateBookingComponent,
    UpdateBookingComponent,
    BookingDetailsComponent,
    LogoutComponent,
    SignUpComponent,
    UpdateAirportComponent,
    AirportDetailsComponent,
    FlightListComponent,
    UpdateFlightComponent,
    FlightDetailsComponent,
    AddScheduledFlightComponent,
    ShowScheduleFlightComponent,
    SearchScheduledFlightComponent,
    DashboardComponent,
    SidebarComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
