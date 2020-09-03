import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScheduleFlightComponent } from './show-schedule-flight.component';

describe('ShowScheduleFlightComponent', () => {
  let component: ShowScheduleFlightComponent;
  let fixture: ComponentFixture<ShowScheduleFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowScheduleFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScheduleFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
