import { Component, OnInit,ViewChild } from '@angular/core';
import { FlightDetailsCardComponent } from '../flight-details-card/flight-details-card.component';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  @ViewChild(FlightDetailsCardComponent, {static : true}) child! : FlightDetailsCardComponent; 
  public num:any;
  callMyChild(type:any){
    this.num = type;
    this.child.sortJson(type);
}
  constructor() { }

  ngOnInit(): void {
  }

}
