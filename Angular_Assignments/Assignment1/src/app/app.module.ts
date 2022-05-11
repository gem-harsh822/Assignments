import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FlightDetailsCardComponent } from './flight-details-card/flight-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainViewComponent,
    routingComponents,
    FlightDetailsCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
