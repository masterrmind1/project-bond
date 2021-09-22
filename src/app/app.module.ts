import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BottomNavModule } from 'ngx-bottom-nav';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RoutingAppModule } from './routing-app.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GetLocationComponent } from './get-location/get-location.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { AreasInCityComponent } from './areas-in-city/areas-in-city.component';
import { PollutionDataComponent } from './pollution-data/pollution-data.component';
import { NgxSpinnerModule } from "ngx-spinner";  
import { NgDarkmodeModule } from 'ng-darkmode';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PollutantCOComponent } from './pollutant-co/pollutant-co.component';
import { PollutantNO2Component } from './pollutant-no2/pollutant-no2.component';
import { FineParticulateMatterComponent } from './fine-particulate-matter/fine-particulate-matter.component';
import { PollutantNH3Component } from './pollutant-nh3/pollutant-nh3.component';
import { PollutantSO2Component } from './pollutant-so2/pollutant-so2.component';
import { PollutantOZONEComponent } from './pollutant-ozone/pollutant-ozone.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 3,
  objectStoresMeta: [{
    store: 'cities',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'cityName', keypath: 'cityName', options: { unique: true } },
      { name: 'latitude', keypath: 'latitude', options: { unique: false } },
      { name: 'longitude', keypath: 'longitude', options: { unique: false } },
      { name: 'state', keypath: 'state', options: { unique: false } }
     
    ]

  },
    {
    store: 'citiesData',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'cityName', keypath: 'cityName', options: { unique: false } },
      { name: 'feels_like', keypath: 'feels_like', options: { unique: false } },
      { name: 'humidity', keypath: 'humidity', options: { unique: false } },
      { name: 'pressure', keypath: 'pressure', options: { unique: false } },
      { name: 'temp', keypath: 'temp', options: { unique: false } },
      { name: 'temp_min', keypath: 'temp_min', options: { unique: false } },
      { name: 'temp_max', keypath: 'temp_max', options: { unique: false } },
      { name: 'cityID', keypath: 'cityID', options: { unique: false } },
      { name: 'time', keypath: 'time', options: { unique:true} }

    ]
  },
  {
    store: 'bookmarkData',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'state_name', keypath: 'state_name', options: { unique: false } },
      { name: 'city_name', keypath: 'city_name', options: { unique: false } },
      { name: 'area_name', keypath: 'area_name', options: { unique: false } },
      { name: 'area_id', keypath: 'area_id', options: { unique: false } },
      {name: 'isBookmarked', keypath: 'isBookmarked', options: {unique: false}}
    ]
    
  }
  ]
};



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    LoginPageComponent,
    GetLocationComponent,
    ShowDetailsComponent,
    WeatherDetailComponent,
    CitiesListComponent,
    AreasInCityComponent,
    PollutionDataComponent, PollutantCOComponent,
     PollutantNO2Component, FineParticulateMatterComponent
     ,PollutantNH3Component, PollutantSO2Component, PollutantOZONEComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgxIndexedDBModule.forRoot(dbConfig), MatAutocompleteModule, ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),MatExpansionModule,
    BrowserAnimationsModule, HttpClientModule,    NgDarkmodeModule,MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,NgxSpinnerModule,AngularFireStorageModule,MatMenuModule,
    MatInputModule,
    MatSidenavModule, RoutingAppModule, FlexLayoutModule,
     RouterModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebase),
    MatCardModule, MatFormFieldModule,MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatListModule,BottomNavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents:[dialogConfig]

})
export class AppModule { }


