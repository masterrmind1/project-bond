import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  pollutionData; cityId; cityName; city; citiesName;cityState;areaName;
  pollutionDetail; detail; a; cityFromRoute; states;
  constructor(private dataService: GetDataService, private database: AngularFireDatabase,private spinner: NgxSpinnerService,
    private router: Router, private route: ActivatedRoute,
    private http: HttpClient) {
      this.spinner.show();
      this.cityId = dataService.sendCityId();
    console.log(this.cityId)
      this.cityState=dataService.sendStateOfCity();
      console.log(this.cityState)
    if (this.cityId>=0) {
      this.http.get<any>('https://project-bond-e6798-default-rtdb.asia-southeast1.firebasedatabase.app/pollutionData/'+this.cityState +'.json')
      .subscribe(data=>{
      console.log(data);
      if(data){
        this.citiesName=Object.keys(data);
        console.log(this.citiesName)
      }else{
        this.citiesName=['no city added'];
      }
    })
    }else{
      this.router.navigate(['../','location']);
    }
    this.spinner.hide();
  }
  ngOnInit() {
  }
  getDetails(item) {
  this.dataService.getNameOfArea(item);
    this.states = this.dataService.sendStateArrey();
    console.log(this.states)
    this.router.navigate(['location/', this.states[this.cityId], 'areas'])
  }

}
