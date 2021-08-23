import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { CityData } from '../city-data';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class IndexDbService {
  cityData:CityData[];
  private db:IDBPDatabase<CityData>;

  constructor(private getData:GetDataService) {
   
  }

  
 
}

