import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  WeatherData: any; local; lat; long;temp_celcius;temp_min;temp_max;temp_feels_like;name;
  cityData = []; index: number; humidity; id;
  constructor(private dbService: NgxIndexedDBService,
    private route: ActivatedRoute, private router: Router, private dataService: GetDataService) {


    this.dbService.getAll('people').subscribe((peoples) => {
      this.cityData = peoples;
      console.log(this.cityData);
      this.route.params.subscribe(
        (params: Params) => {
          this.index = +params['id'];
          console.log(this.index)
          this.getWeatherData(this.cityData, this.index)
        })

      console.log(this.index)
      if(this.index<13){
      this.WeatherData = JSON.parse(localStorage.getItem('Weather'));
      }else{
        this.WeatherData = JSON.parse(localStorage.getItem('current'));

      }
    });



  }

  ngOnInit(): void {

  }
  getWeatherData(data, i) {
    // console.log(data[i].cityName)
    if (i < 13) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + data[i].cityName + '&appid=9ce2eb4084172fcd1a624bcf954f8222')
        .then(response => response.json())
        .then(Totaldata => {
          console.log(Totaldata)
          localStorage.setItem('Weather', JSON.stringify(Totaldata))

          this.setWeatherData(i);
        })
    }
    if (i == 13) {
      let id = navigator.geolocation.watchPosition((position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log(
          `lat:${position.coords.latitude}, lon: ${position.coords.longitude}`);
      
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.long + '&appid=9ce2eb4084172fcd1a624bcf954f8222')
        .then(response => response.json())
        .then(Totaldata => {
          console.log(Totaldata)
          localStorage.setItem('current', JSON.stringify(Totaldata))

          this.setWeatherData(i);
        })})
    }
  }
  setWeatherData(i) {
    if(i<13){
    this.WeatherData = JSON.parse(localStorage.getItem('Weather'));
    this.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.humidity = (this.WeatherData.main.humidity);
    this.name=this.WeatherData.name;}
    else{
      this.WeatherData = JSON.parse(localStorage.getItem('current'));

      this.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(0);
    this.temp_min = (this.WeatherData.current.temp  - 273.15).toFixed(0);
    this.temp_max = (this.WeatherData.current.temp  - 273.15).toFixed(0);
    this.temp_feels_like = (this.WeatherData.current.feels_like - 273.15).toFixed(0);
    this.humidity = (this.WeatherData.current.humidity);
    this.name="cityName"
  }
    
  }
  watchPosition() {
    let userLatitude = 0;
    let userLongitude = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      console.log(
        `lat:${position.coords.latitude}, lon: ${position.coords.longitude}`);
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000, maximumAge: 0
    })
  }



}
