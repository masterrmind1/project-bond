import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pollution-data',
  templateUrl: './pollution-data.component.html',
  styleUrls: ['./pollution-data.component.css']
})
export class PollutionDataComponent implements OnInit {
  pollutionData; cityId; cityName; city; cities; areaName;stateName;
  pollutionDetail; detail; pollutionOfArea; states; cityArea; index
  constructor(private dataService: GetDataService, private database: AngularFireDatabase,private spinner: NgxSpinnerService,
    private route: ActivatedRoute, private router: Router,
    private http: HttpClient) {
      this.spinner.show();
    this.states = this.dataService.sendStateArrey();
    this.cityId = dataService.sendCityId();
      this.areaName=dataService.sendAreaName()
     this.stateName=dataService.sendStateOfCity();
     this.cityName=dataService.sendCityName()
     console.log(this.cityName)
     if(this.areaName){
     console.log(this.areaName.split(' ').join('%20'))
     
    this.http.get<any>('https://project-bond-e6798-default-rtdb.asia-southeast1.firebasedatabase.app/pollutionData/'+this.stateName + '/'+ this.cityName+'/'+ this.areaName.split(' ').join('%20')  + '/.json')
    .subscribe(data=>{
    console.log(data.Ammonia);
    console.log(data.Ammonia.pollutant_avg);

          if (data) {
            this.pollutionOfArea=data;
          } else {
            this.router.navigate(['location/'])

          }
        });
      }
      this.spinner.hide();

}


  ngOnInit() {
  }

}
