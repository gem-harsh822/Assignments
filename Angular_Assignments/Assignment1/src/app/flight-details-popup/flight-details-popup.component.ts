import { Component, Input} from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flight-details-popup',
  templateUrl: './flight-details-popup.component.html',
  styleUrls: ['./flight-details-popup.component.css']
})
export class FlightDetailsPopupComponent {
  @Input() public selectedFlightDetails:any;
  constructor(public modalRef: MDBModalRef,public activeModal: NgbActiveModal,private router:Router) {}
  openThankYouPage() {
    this.router.navigate(['/app-thank-you-page']);
    // alert("Opened");
  }
}
