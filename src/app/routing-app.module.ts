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
import { FineParticulateMatterComponent } from './fine-particulate-matter/fine-particulate-matter.component';
import { PollutantNO2Component } from './pollutant-no2/pollutant-no2.component';
import { PollutantNH3Component } from './pollutant-nh3/pollutant-nh3.component';
import { PollutantCOComponent } from './pollutant-co/pollutant-co.component';
import { PollutantOZONEComponent } from './pollutant-ozone/pollutant-ozone.component';
import { PollutantSO2Component } from './pollutant-so2/pollutant-so2.component';

const appRoute:Routes=[
  // {path:' ', component:SideNavComponent},
  { path: '', redirectTo: 'city-detail', pathMatch: 'full' },
  {path:'pollution_components', component: LoginPageComponent},
  {path:'location', component:GetLocationComponent},
  {path:'city-detail', component:ShowDetailsComponent},
  {path:':id', component:WeatherDetailComponent},
  {path:'location/:state', component:CitiesListComponent},
  {path:'location/:city/areas', component:AreasInCityComponent},
  {path:'location/:city/areas/:number', component:PollutionDataComponent},
  {path:'pollution_components/fine-particles', component:FineParticulateMatterComponent},
  {path: 'pollution_components/NO2',component:PollutantNO2Component},
  {path: 'pollution_components/NH3',component:PollutantNH3Component},
  {path: 'pollution_components/CO',component:PollutantCOComponent},
  {path: 'pollution_components/OZONE',component:PollutantOZONEComponent},
  {path: 'pollution_components/SO2',component:PollutantSO2Component},
  {path:'location/:city/areas/:number/pollutionInfo', component:LoginPageComponent}





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
