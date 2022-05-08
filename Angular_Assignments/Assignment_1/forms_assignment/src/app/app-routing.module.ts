import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveLoginFormComponent } from './reactive-login-form/reactive-login-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'',component:TemplateDrivenFormComponent},
  {path:'registration',component:TemplateDrivenFormComponent},
  {path:'signup',component:ReactiveFormComponent},
  {path:"login",component:ReactiveLoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TemplateDrivenFormComponent,ReactiveFormComponent,ReactiveLoginFormComponent];
