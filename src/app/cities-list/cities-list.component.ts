import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  pollutionData; cityId; cityName; city; cities;
  pollutionDetail; detail; a; cityFromRoute; states;
  constructor(private dataService: GetDataService, private database: AngularFireDatabase,private spinner: NgxSpinnerService,
    private router: Router, private route: ActivatedRoute) {
      this.spinner.show();
      this.cityId = dataService.sendCityId();
    console.log(this.cityId)
    if (this.cityId>=0) {
      this.database.list('pollutionData').valueChanges().subscribe(data => {
      this.pollutionData = data;
      console.log(data)
      if(data[this.cityId]){
      console.log(Object.keys(this.pollutionData[this.cityId]));
      this.cityName = Object.keys(this.pollutionData[this.cityId])[0]}else{
        this.cityName='Not added';
      }
      this.spinner.hide();

    })
    }else{
      this.router.navigate(['../','location']);

    }
  }
  ngOnInit() {
  }
  getDetails() {

    this.states = this.dataService.sendStateArrey();
    console.log(this.states)
    this.router.navigate(['location/', this.states[this.cityId], 'areas'])
  }

}
