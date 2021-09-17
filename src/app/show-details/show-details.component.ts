import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { GetDataService } from '../services/get-data.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit{
  b=['a', 'c','d']
  cityData;
  cityBasicInfo;
  constructor(private db: AngularFireDatabase,
    private dbService: NgxIndexedDBService, private getData: GetDataService,private spinner: NgxSpinnerService,
    private database: AngularFireDatabase, private route: Router) {
      this.spinner.show();
    this.dbService.getAll('cities').subscribe((cities) => {
      this.cityData = cities;
      console.log(cities)
      if (cities.length != 0) {
        this.database.list('cityData').valueChanges().subscribe(data => {
          this.cityBasicInfo = data;
          console.log(this.cityBasicInfo);

          for (let i = 0; i < 15; i++) {
            this.dbService
              .update('cities', {
                id: i,
                latitude: this.cityBasicInfo[i].latitude,
                longitude: this.cityBasicInfo[i].longitude,
                state: this.cityBasicInfo[i].state,
                cityName: this.cityBasicInfo[i].cityName,

              })

          }
        })
      }
      else {
        this.database.list('cityData').valueChanges().subscribe(data => {
          this.cityBasicInfo = data;
          console.log(this.cityBasicInfo)
          for (let i = 0; i < 15; i++) {
            this.dbService
              .add('cities', {
                id: i,
                latitude: this.cityBasicInfo[i].latitude,
                longitude: this.cityBasicInfo[i].longitude,
                state: this.cityBasicInfo[i].state,
                cityName: this.cityBasicInfo[i].cityName,

              })
              .subscribe((storeData) => {
                console.log('storeData: ', storeData);
              });
          }
        })
      }
      console.log(this.cityData);
      this.spinner.hide();

    });

  }
  ngOnInit() { }
  onClick(i) {
    this.route.navigate(['../', i])
  }
}
