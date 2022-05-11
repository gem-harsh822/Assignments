import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsCardComponent } from './flight-details-card.component';

describe('FlightDetailsCardComponent', () => {
  let component: FlightDetailsCardComponent;
  let fixture: ComponentFixture<FlightDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
