import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {



  baseUrl: string = '/flight/v1/api/airport/';

  constructor(private http: HttpClient) { }

  addAirport(airport: any) {
    return this.http.post(this.baseUrl + 'addAirport', airport);
  }

  getAllAirports(): any {
    return this.http.get(this.baseUrl + "allAirport");
  }


}
