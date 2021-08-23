import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BottomNavModule } from 'ngx-bottom-nav';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RoutingAppModule } from './routing-app.module';
import { Comp2Component } from './comp2/comp2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {AngularFireModule} from '@angular/fire';

import {AngularFireAuthModule} from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetLocationComponent } from './get-location/get-location.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {HttpClientModule} from '@angular/common/http';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 3,
  objectStoresMeta: [{
    store: 'people',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'cityName', keypath: 'cityName', options: { unique: false } },
      { name: 'latitude', keypath: 'latitude', options: { unique: false } },
      { name: 'longitude', keypath: 'longitude', options: { unique: false } },
      { name: 'state', keypath: 'state', options: { unique: false } }
    ]},
    {
    store:'cities',
    storeConfig:{keyPath:'id', autoIncrement:true},
    storeSchema:[
      {name:'cityName', keypath:'cityName',options:{unique:false}}
    ]
  }]
};



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    Comp2Component,
    LoginPageComponent,
    GetLocationComponent,
    ShowDetailsComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,NgxIndexedDBModule.forRoot(dbConfig), MatAutocompleteModule,ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,HttpClientModule,
    MatToolbarModule, 
    MatSidenavModule, MatDividerModule, 
    MatListModule, 
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,AngularFireAuthModule,
    MatRippleModule, MatSidenavModule, RoutingAppModule, FlexLayoutModule,
     BottomNavModule, RouterModule,AngularFireAuthModule,AngularFireModule.initializeApp(environment.firebase),
     MatCardModule,MatFormFieldModule,MatCardModule,
     MatTabsModule,
     MatInputModule,
     MatButtonModule,
     MatIconModule,
     FormsModule,
     MatSnackBarModule,
     MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


