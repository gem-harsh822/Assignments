import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details-card',
  templateUrl: './flight-details-card.component.html',
  styleUrls: ['./flight-details-card.component.css']
})
export class FlightDetailsCardComponent implements OnInit {
  flightDetails = [{
    "FlightLogo":"'Angular_Assignments\Assignment1\src\assets\vistara_logo.png'",
    "FlightName":"Vistara",
    "From":"DEL New Delhi,India",
    "To":"BOM Mumbai, India",
    "DepartureTime":"17:45",
    "TimeTaken":"2h 20m",
    "ArrivalTime":"20:05",
    "TicketPrice":"6,253",
    "EmiPrice":"2,085"
  },{
    "FlightLogo":"'assets/vistara_logo.png'",
    "FlightName":"Vistara",
    "From":"DEL New Delhi,India",
    "To":"BOM Mumbai, India",
    "DepartureTime":"17:45",
    "TimeTaken":"2h 20m",
    "ArrivalTime":"20:05",
    "TicketPrice":"6,253",
    "EmiPrice":"2,085"
  },
  {
    "FlightLogo":"'assets/vistara_logo.png'",
    "FlightName":"Vistara",
    "From":"DEL New Delhi,India",
    "To":"BOM Mumbai, India",
    "DepartureTime":"17:45",
    "TimeTaken":"2h 20m",
    "ArrivalTime":"20:05",
    "TicketPrice":"6,253",
    "EmiPrice":"2,085"
  }]
  constructor() { }
  
  ngOnInit(): void {
  }

}
