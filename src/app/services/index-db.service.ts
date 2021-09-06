import { Injectable } from '@angular/core';
import {IDBPDatabase } from 'idb';
import { CityData } from '../city-data';

@Injectable({
  providedIn: 'root'
})
export class IndexDbService {
  cityData:CityData[];
  private db:IDBPDatabase<CityData>;

  constructor() {
   
  }

  
 
}

