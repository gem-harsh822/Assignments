import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FlightDetailsCardComponent } from './flight-details-card/flight-details-card.component';
import { FlightDetailsPopupComponent } from './flight-details-popup/flight-details-popup.component';
import { MDBBootstrapModulesPro, MDBModalRef } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { MdbModalRef, MdbModalModule  } from 'mdb-angular-ui-kit/modal';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainViewComponent,
    routingComponents,
    FlightDetailsCardComponent,
    FlightDetailsPopupComponent,
    ThankYouPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,MdbModalModule,MDBBootstrapModulesPro.forRoot() ],
  entryComponents: [ FlightDetailsPopupComponent ],
  providers: [MDBSpinningPreloader,MDBModalRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
