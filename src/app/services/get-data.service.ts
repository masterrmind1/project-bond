import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Observable, pipe } from 'rxjs';
import { CityData } from '../city-data';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  items: Observable<CityData[]>;
index:number;
states=['Andhra Pradesh','Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh','Goa','Gujarat',	'Haryana',
'Himachal Pradesh','Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra','Manipur',
'Meghalaya','Mizoram', 'Nagaland', 'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
'Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Andaman and Nicobar','Chandigarh','Dadra and Nagar Haveli',
'Delhi','Ladakh','Lakshadweep',	'Jammu and Kashmir','Puducherry'
];
  constructor( private http: HttpClient, private db: AngularFireDatabase) { }
  getData(id){
this.index=id;
  }
  sendData(){
    return this.states;
}
}
