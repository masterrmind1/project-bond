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
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';

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
    PollutionDataComponent,DarkModeToggleComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgxIndexedDBModule.forRoot(dbConfig), MatAutocompleteModule, ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),MatExpansionModule,
    BrowserAnimationsModule, HttpClientModule,    NgDarkmodeModule,
    MatToolbarModule,
    MatTooltipModule,NgxSpinnerModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }


