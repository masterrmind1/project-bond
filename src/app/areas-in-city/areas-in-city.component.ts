import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-areas-in-city',
  templateUrl: './areas-in-city.component.html',
  styleUrls: ['./areas-in-city.component.css']
})
export class AreasInCityComponent implements OnInit {
  cityId; cityName; city; cities;
  pollutionDetail; states;
  constructor(private dataService: GetDataService, private database: AngularFireDatabase,private spinner: NgxSpinnerService,
    private route: Router) {
      this.spinner.show();
    this.cityId = dataService.sendCityId();
    this.database.list('pollutionData').valueChanges().subscribe(data => {
      this.pollutionDetail = data
      console.log(data)
      if(this.cityId>=0){
      console.log(Object.keys(this.pollutionDetail[this.cityId]));
      this.cityName = Object.keys(this.pollutionDetail[this.cityId])[0]
      console.log(data[this.cityId], this.cityName)
      this.states = this.dataService.sendStateArrey();
      console.log(this.states)
      if (this.cityName == 'Guwahati') {
        console.log(this.pollutionDetail)
        this.city = this.pollutionDetail[0];
        this.cities = Object.values(this.city)
        this.cities = Object.keys(this.cities[0])

      }
      if (this.cityName == 'Gandhinagar') {
        console.log(this.pollutionDetail);
        this.city = this.pollutionDetail[2];
        this.cities = Object.values(this.city)
        this.cities = Object.keys(this.cities[0])
      }
      console.log(this.city);
    }else{
      this.route.navigate(['location/'])
    }
    this.spinner.hide();

    })
  }

  ngOnInit(): void {
  }
  goToDetailsOfPollution(i) {
    this.route.navigate(['location/', this.states[this.cityId], 'areas', i])

  }

}