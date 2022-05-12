import { Component, OnInit } from '@angular/core';
import { PayFlightFeeComponent } from '../pay-flight-fee/pay-flight-fee.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-flight-details-card',
  templateUrl: './flight-details-card.component.html',
  styleUrls: ['./flight-details-card.component.css'],
})
export class FlightDetailsCardComponent implements OnInit {
  flightDetails = [
    {
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
  modalRef: MdbModalRef<PayFlightFeeComponent> | null = null;
  
  // constructor(private modalService: MdbModalService) {}
  ngOnInit(): void {}
  // onClick(idx:any) {
  //   console.log(idx);
    
  // }
  openModal() {
    // this.modalRef = this.modalService.open(PayFlightFeeComponent)
  }
}
