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
index:number;arrayID=[];cityId;
states={'Andhra Pradesh':[1,8,15,22],'Arunachal Pradesh':[29], 'Assam':[36], 'Bihar':[50,62,69,81],
 'Chhattisgarh':[116],'Gujarat':[379,436,451],'Haryana':[458,465,480,500,540,551,557,576,577,616,618,625,642],
 'Karnataka':[658,662,723,737,744,750,758,794,807,834,846],
 'Kerala':[851,860,864,871,882,888,897], 
 'Madhya Pradesh':[908,918,928,937,945,975,983,997],
  'Maharashtra':[1003,1027,1148,1182,1210],
'Meghalaya':[1220],'Mizoram':[1225], 'Nagaland':[1233], 'Odisha':[1241,1247],
'Punjab':[1262,1268,1274,1281,1286,1296],'Rajasthan':[1311,1324,1334,1355,1361,1367,1375],'Tamil Nadu':[1384,1424,1430],'Telangana':[1433],
'Tripura':[1473],'Uttar Pradesh':[1480,1505,1510,1520,1530,1554,1564,1574,1594,1648,1660,1670,1690,1712,1735],'West Bengal':[1740,1748,1751,1756,1783,1826],
'Delhi':[130],'Jammu and Kashmir':[652],'Puducherry':[1254]
};
state=['Assam','Bihar', 'Gujarat','Maharashtra'];
cityState;cityName;areaOfCity;
  constructor( private http: HttpClient, private db: AngularFireDatabase) { }
  getData(id){
this.index=id;
  }
  sendData(){
     return Object.keys(this.states);
}
sendState(){
  return this.states;
}
getCityIdAndState(Id,state){
this.cityId=Id;
this.cityState=state;
}
sendCityId(){
  return this.cityId;
}
sendStateArrey(){
  // Object.keys(this.states)
  return this.state
}
sendStateOfCity(){
return this.cityState;
}
getNameOfArea(city){
this.cityName=city;
}
sendCityName(){
  return this.cityName
}
getAreaName(area){
this.areaOfCity=area;
}
sendAreaName(){
  return this.areaOfCity
}
}
