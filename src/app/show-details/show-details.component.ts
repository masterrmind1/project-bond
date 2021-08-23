import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CityData } from '../city-data';
import { GetDataService } from '../services/get-data.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  cityData;
  user; userr;
  constructor(private db: AngularFireDatabase,
    private dbService: NgxIndexedDBService, private getData: GetDataService,
    private database: AngularFireDatabase, private route:Router) {
  
    this.dbService.getAll('people').subscribe((peoples) => {
      this.cityData = peoples;
      console.log(this.cityData);
    });
  }
  ngOnInit() { }
  buttn() {
    this.database.list('cityData').valueChanges().subscribe(data => {
      this.user = data;
      console.log(this.user[0]);
      for (let i = 1; i < 14; i++) {
    
        this.dbService
        .update('people', {
          id: i,
          latitude: this.user[i].latitude,
          longitude: this.user[i].longitude,
          state:  this.user[i].state,
          cityName:this.user[i].cityName
        })
        .subscribe((storeData) => {
          console.log('storeData: ', storeData);
        });
  

      }
    })

  }
  onClick(i){
    this.route.navigate(['../', i])
  }

ondelet(){
  this.dbService.clear('people').subscribe((successDeleted) => {
    console.log('success? ', successDeleted);
  });
  this.dbService.clear('cities').subscribe((successDeleted) => {
    console.log('success? ', successDeleted);
  });
}
  ngOnDestroy() {
    
  }


}
