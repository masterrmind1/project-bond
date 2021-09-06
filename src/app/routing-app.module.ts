import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { AreasInCityComponent } from './areas-in-city/areas-in-city.component';
import { PollutionDataComponent } from './pollution-data/pollution-data.component';

const appRoute:Routes=[
  // {path:' ', component:SideNavComponent},
  {path:'login', component: LoginPageComponent},
  {path:'location', component:GetLocationComponent},
  {path:'city-detail', component:ShowDetailsComponent},
  {path:':id', component:WeatherDetailComponent},
  {path:'location/:city', component:CitiesListComponent},
  {path:'location/:city/areas', component:AreasInCityComponent},
  {path:'location/:city/areas/:number', component:PollutionDataComponent},


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
