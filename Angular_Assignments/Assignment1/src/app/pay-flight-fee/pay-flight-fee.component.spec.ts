import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFlightFeeComponent } from './pay-flight-fee.component';

describe('PayFlightFeeComponent', () => {
  let component: PayFlightFeeComponent;
  let fixture: ComponentFixture<PayFlightFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayFlightFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFlightFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
