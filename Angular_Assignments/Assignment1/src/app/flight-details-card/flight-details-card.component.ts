import { Component } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FlightDetailsPopupComponent } from '../flight-details-popup/flight-details-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-flight-details-card',
  templateUrl: './flight-details-card.component.html',
  styleUrls: ['./flight-details-card.component.css'],
})
export class FlightDetailsCardComponent {
  
  flightDetails = [
    {
      id: '1',
      FlightLogo: 'vistaraLogo.png',
      FlightName: 'Vistara',
      FromShort: 'DEL ',
      FromLong: 'New Delhi,India',
      ToShort: 'BOM ',
      ToLong: 'Mumbai, India',
      DepartureTime: '17:45',
      TimeTaken: '2h 20m',
      ArrivalTime: '20:05',
      TicketPrice: '6253',
      EmiPrice: '2085',
    },
    {
      id: '2',
      FlightLogo: 'spicejetLogo.png',
      FlightName: 'Spicejet',
      FromShort: 'DEL ',
      FromLong: 'New Delhi,India',
      ToShort: 'BOM ',
      ToLong: 'Mumbai, India',
      DepartureTime: '18:35',
      TimeTaken: '2h 15m',
      ArrivalTime: '20:50',
      TicketPrice: '7776',
      EmiPrice: '2592',
    },
    {
      id: '3',
      FlightLogo: 'spicejetLogo.png',
      FlightName: 'Spicejet',
      FromShort: 'DEL ',
      FromLong: 'New Delhi,India',
      ToShort: 'BOM ',
      ToLong: 'Mumbai, India',
      DepartureTime: '19:45',
      TimeTaken: '2h 20m',
      ArrivalTime: '22:05',
      TicketPrice: '7776',
      EmiPrice: '2592',
    },
  ];
  modalRef: MDBModalRef | null = null;
  constructor(private modalService: NgbModal) {}
  openModal(idx:any) {
    const modalRef = this.modalService.open(FlightDetailsPopupComponent);
    modalRef.componentInstance.selectedFlightDetails = this.flightDetails[idx-1];
    }
}
