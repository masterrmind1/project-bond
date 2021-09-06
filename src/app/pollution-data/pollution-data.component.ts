import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pollution-data',
  templateUrl: './pollution-data.component.html',
  styleUrls: ['./pollution-data.component.css']
})
export class PollutionDataComponent implements OnInit {
  pollutionData; cityId; cityName; city; cities; areaName;
  pollutionDetail; detail; a; states; cityArea; index
  constructor(private dataService: GetDataService, private database: AngularFireDatabase,private spinner: NgxSpinnerService,
    private route: ActivatedRoute, private router: Router) {
      this.spinner.show();
    this.states = this.dataService.sendStateArrey();
    this.cityId = dataService.sendCityId();
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['number'];
        console.log(this.index)

        this.database.list('pollutionData').valueChanges().subscribe(data => {
          this.pollutionDetail = data
          if (this.cityId >= 0) {
            console.log(data[this.cityId])
            console.log(Object.keys(this.pollutionDetail[this.cityId]));
            this.cityName = Object.keys(this.pollutionDetail[this.cityId])[0]
            this.states = this.dataService.sendStateArrey();

            if (this.cityName == 'Guwahati') {
              console.log(this.pollutionDetail)
              this.city = this.pollutionDetail[0];
              this.cities = Object.values(this.city)
              this.cities = Object.keys(this.cities[0])
              this.detail = [Object.values((Object.values(this.city)))[0]];
              this.a = Object.values(this.detail[0])[0]
              console.log(typeof (this.a));

            }
            if (this.cityName == 'Gandhinagar') {
              console.log(this.pollutionDetail);
              this.city = this.pollutionDetail[2];
              this.cities = Object.values(this.city)
              this.cities = Object.keys(this.cities[0])
              this.detail = [Object.values((Object.values(this.city)))[0]];
              this.a = Object.values(this.detail[0])[0]
              console.log(this.a)
            }
            this.areaName = this.cities[this.index];
            console.log(this.cities);
          } else {
            this.router.navigate(['location/'])

          }
        });
      })
      this.spinner.hide();

  }


  ngOnInit() {
  }

}
