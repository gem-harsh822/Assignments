import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  TransactionDetails = [{
    Date:"7 Oct 2020",
    Time:"10:24 AM",
    Amount:"3000",
    TransactionType:"pay",
    TransactionId:"A342344366563464536456",
    IsRequested:false,
  },
  {
    Date:"10 Oct 2020",
    Time:"10:24 AM",
    Amount:"250",
    TransactionType:"pay",
    TransactionId:"A342344366563464536456",
    IsRequested:true,
  },
  {
    Date:"19 Oct 2020",
    Time:"10:24 AM",
    Amount:"250",
    TransactionType:"collect",
    TransactionId:"A342344366563464536456",
    IsRequested:false,
  },
  {
    Date:"19 Oct 2020",
    Time:"10:24 AM",
    Amount:"250",
    TransactionType:"collect",
    TransactionId:"A342344366563464536456",
    IsRequested:true,
  }
];
 public dates = new Set<string>();
 isAlreadyPresent(date:any) {
  if(this.dates.has(date)) {
    return true;
  }
  else {
    this.dates.add(date);
    return false;
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
