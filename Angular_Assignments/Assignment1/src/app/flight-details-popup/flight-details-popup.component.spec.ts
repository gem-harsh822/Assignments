import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsPopupComponent } from './flight-details-popup.component';

describe('FlightDetailsPopupComponent', () => {
  let component: FlightDetailsPopupComponent;
  let fixture: ComponentFixture<FlightDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDetailsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
