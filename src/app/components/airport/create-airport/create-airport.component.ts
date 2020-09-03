import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
  styleUrls: ['./create-airport.component.css']
})
export class CreateAirportComponent implements OnInit {
  airportFormGroup: FormGroup;
  airportList: any = [];

  constructor(private service: AirportService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllAirports();

    this.airportFormGroup = this.fb.group({
      airportCode: ['', [Validators.required, Validators.pattern("((^[A-Z]{1,5}$))")]],
      airportName: ['', [Validators.required]],
      airportLocation: ['', [Validators.required]]

    })

  }

  get f() {
    return this.airportFormGroup.controls;
  }

  saveAirport(): any {

    this.service.addAirport(this.airportFormGroup.value).subscribe(res => {
      console.log(res)
      this.toastr.success('', 'Airport Saved Successfully')
      this.airportFormGroup.reset();
      this.getAllAirports();
    })
  }

  getAllAirports(): any {

    this.service.getAllAirports().subscribe(res => {
      this.airportList = res
      console.log(res)
    })

  }



}
