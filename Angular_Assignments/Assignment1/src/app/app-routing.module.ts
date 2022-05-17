import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'main-view',component:MainViewComponent},
  {path:'app-thank-you-page',component:ThankYouPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainViewComponent,LoginPageComponent]