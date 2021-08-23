import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Comp2Component } from './comp2/comp2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

const appRoute:Routes=[
  // {path:' ', component:SideNavComponent},
  {path: 'comp2', component:Comp2Component},
  {path:'login', component: LoginPageComponent},
  {path:'location', component:GetLocationComponent},
  {path:'city-detail', component:ShowDetailsComponent},
  {path:':id', component:WeatherDetailComponent}
  // {path:'**',redirectTo:'login'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule]

})
export class RoutingAppModule { }
