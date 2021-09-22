import { Component, OnChanges, OnInit } from '@angular/core';
import { AngularFireDatabase, stateChanges } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-areas-in-city',
  templateUrl: './areas-in-city.component.html',
  styleUrls: ['./areas-in-city.component.css']
})
export class AreasInCityComponent implements OnInit, OnChanges {
  cityId; areaName; city; citiesArea; areaNames; ok; isBookmarked = false; bookmarkdataFromTable; cityArea; stateName; bookmarkedArea = [];
  pollutionDetail; area; states; stateid; nameOfCity; bookmarkData; detail; pollutionOfArea; areaInCities; nameOfAreasInTable = [];
  allowed = true; boolianForAreas = {}; setItemName; perticularAreaData;
  constructor(private dataService: GetDataService, private database: AngularFireDatabase, private spinner: NgxSpinnerService,
    private router: Router, private route: ActivatedRoute,
    private dbService: NgxIndexedDBService, private http: HttpClient) {

    this.spinner.show();
    this.nameOfCity = dataService.sendCityName();


    this.cityId = dataService.sendCityId();
    console.log(this.cityId)
    this.stateName = dataService.sendStateOfCity();
    console.log(this.nameOfCity);
    console.log(this.stateName);

    this.http.get<any>('https://project-bond-e6798-default-rtdb.asia-southeast1.firebasedatabase.app/pollutionData/' + this.stateName + '/' + this.nameOfCity + '/.json')
      .subscribe(data => {
        this.pollutionDetail = data
        console.log(data)

        if (this.pollutionDetail = data) {
          this.areaName = Object.keys(this.pollutionDetail)
          console.log(this.areaName);

        } else {
          this.router.navigate(['location/'])
        }


        this.dbService.getAllByIndex('bookmarkData', 'city_name', this.nameOfCity).subscribe((bookmarkData) => {
          console.log(bookmarkData);
          this.bookmarkData = bookmarkData;

        });
      
      this.dbService.getAllByIndex('bookmarkData', 'city_name', this.nameOfCity).subscribe((bookmarkData) => {
        console.log(bookmarkData);

        //  this.bookmarkedAreas = Object.keys(Object.values(bookmarkData))

        for (let i = 0; i < bookmarkData.length; i++) {
          if (!this.bookmarkedArea.includes(bookmarkData[i].area_name)) {
            this.bookmarkedArea.push(bookmarkData[i].area_name)
            console.log(bookmarkData[i].area_name)

          }
        }
        
        if (this.areaName) {

          this.areaName.map((val, idx) => { this.boolianForAreas[val] = this.bookmarkedArea.includes(this.areaName[idx]) });
        }
        //  this.boolianForAreas
        //  keys.forEach((key, i) => result[key] = values[i]);
        console.log(this.boolianForAreas);

      });
      this.spinner.hide();

    })
  }
  ngOnChanges() {

  }

  ngOnInit() {
    this.stateid = this.route.snapshot.paramMap.get('city');
    console.log(this.stateid)

  }
  getIndexAndId() {

  }
  goToDetailsOfPollution(i, item) {
    this.dataService.getAreaName(item);
    if (this.allowed) {

      this.router.navigate(['location/', this.nameOfCity, 'areas', i])
    }

  }
 
  bookmarkPollutionData(i, item) {
    // this.allowed = false;
    this.area = item;
    //this.isBookmarked = true;
    console.log(item)
    this.http.get<any>('https://project-bond-e6798-default-rtdb.asia-southeast1.firebasedatabase.app/pollutionData/' + this.stateName + '/' + this.nameOfCity + '/.json')
      .subscribe(data => {
        console.log(data)
        this.pollutionOfArea = data
        this.areaName = Object.keys(this.pollutionOfArea)
        console.log(this.nameOfCity);

        this.dbService.getAllByIndex('bookmarkData', 'city_name', this.nameOfCity).subscribe((bookmarkData) => {
          console.log(bookmarkData);

          //  this.bookmarkedAreas = Object.keys(Object.values(bookmarkData))

          for (let i = 0; i < bookmarkData.length; i++) {
            if (!this.bookmarkedArea.includes(bookmarkData[i].area_name)) {
              this.bookmarkedArea.push(bookmarkData[i].area_name)
              console.log(bookmarkData[i].area_name)

            }
          }
          console.log(this.bookmarkedArea)
          this.dbService.getAll('bookmarkData').subscribe((bookmarkAll) => {
         
            console.log(bookmarkAll)
          if (!this.bookmarkedArea.includes(item) && bookmarkAll.length<=5) {
            this.dbService
              .add('bookmarkData', {
                state_name: this.stateName,
                city_name: this.nameOfCity,
                area_name: this.areaName[i],
                area_id: i,
                isBookmarked: true
              })
              .subscribe((storeData) => {
                console.log(storeData);
              }, error => {
                console.log(error);
              });

          }else{
            alert('You can add only five places as Bookmark');

          }
          console.log(this.bookmarkedArea);
          console.log(this.bookmarkedArea.includes(item));

          if (this.bookmarkedArea) {

            this.areaName.map((val, idx) => { this.boolianForAreas[val] = this.bookmarkedArea.includes(this.areaName[idx]) });
          }
          //  this.boolianForAreas
          //  keys.forEach((key, i) => result[key] = values[i]);
          console.log(this.boolianForAreas[item]);

  
          for (let i = 0; i < bookmarkData.length; i++) {
            if (!this.bookmarkedArea.includes(bookmarkData[i].area_name)) {
              this.bookmarkedArea.push(bookmarkData[i].area_name)
              console.log(bookmarkData[i].area_name)
              
  
            }
          }
          
          if (this.areaName) {
  
            this.areaName.map((val, idx) => { this.boolianForAreas[val] = this.bookmarkedArea.includes(this.areaName[idx]) });
          }
          //  this.boolianForAreas
          //  keys.forEach((key, i) => result[key] = values[i]);
          console.log(this.boolianForAreas);
  
        });
      });
      });

  }
  removeBookmark(i, item) {
    // this.allowed = false;
    this.dbService.getAllByIndex('bookmarkData', 'city_name', this.nameOfCity).subscribe((bookmarkData) => {
      console.log(bookmarkData);
      this.boolianForAreas = bookmarkData.find(obj => {
        return obj.area_name === item
      })
      console.log(this.boolianForAreas)

      console.log(this.boolianForAreas['id'])

      this.dbService.delete('bookmarkData', this.boolianForAreas['id']).subscribe((remainingBookmarkData) => {
        console.log(remainingBookmarkData);
      });
    })
  }

}
