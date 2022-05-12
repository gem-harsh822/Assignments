import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-pay-flight-fee',
  templateUrl: './pay-flight-fee.component.html',
  styleUrls: ['./pay-flight-fee.component.css']
})
export class PayFlightFeeComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<PayFlightFeeComponent>) { }

  ngOnInit(): void {
  }

}
