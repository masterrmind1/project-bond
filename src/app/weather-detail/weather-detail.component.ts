import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  WeatherData:any;
  allCitiesFromTable = []; index; current: weather_detail; old: weather_detail;
  second_old: weather_detail; lat; long;
  constructor(private dbService: NgxIndexedDBService, private spinner: NgxSpinnerService,
    private route: ActivatedRoute, private router: Router, private dataService: GetDataService) {
    this.spinner.show();
    this.dbService.getAll('cities').subscribe((cities) => {
      this.allCitiesFromTable = cities;
      this.route.params.subscribe(
        (params: Params) => {
          this.index = +params['id'];
          console.log(this.index)
          this.getWeatherData(this.allCitiesFromTable, this.index)
        })
    });
    this.spinner.hide();

    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'));
  }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    console.log(this.WeatherData);
   }
  getWeatherData(cityData, i) {
    this.spinner.show();
    if (i < 15) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityData[i].cityName + '&appid=9ce2eb4084172fcd1a624bcf954f8222')
        .then(response => response.json())
        .then(Totaldata => {
          var time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
          this.dbService.getAllByIndex('citiesData', 'cityID', IDBKeyRange.only(i)).subscribe((weatherDetail) => {
            if (weatherDetail.length < 3) {
              this.dbService
                .add('citiesData', {
                  cityName: Totaldata.name,
                  feels_like: Totaldata.main.feels_like,
                  humidity: Totaldata.main.humidity,
                  pressure: Totaldata.main.pressure,
                  temp: Totaldata.main.temp,
                  temp_min: Totaldata.main.temp_min,
                  temp_max: Totaldata.main.temp_max,
                  cityID: i,
                  time: time
                })
                .subscribe((storeData) => {
                  console.log('storeData: ', storeData);
                }, error => {
                  console.log(error);
                });
            } else {
              let id = weatherDetail[0].id;
              if (id) {
                this.dbService.delete('citiesData', id).subscribe((newCityData) => {
                  console.log('deleted:', newCityData);
                });
              }
              this.dbService
                .add('citiesData', {
                  cityName: Totaldata.name,
                  feels_like: Totaldata.main.feels_like,
                  humidity: Totaldata.main.humidity,
                  pressure: Totaldata.main.pressure,
                  temp: Totaldata.main.temp,
                  temp_min: Totaldata.main.temp_min,
                  temp_max: Totaldata.main.temp_max,
                  cityID: i,
                  time: time
                })
                .subscribe((storeData) => {
                  console.log('storeData: ', storeData);
                }, error => {
                  console.log(error);
                });
            }
          });
          this.setWeatherData(i, Totaldata);

        });

    }
    if (i == 15) {
      console.log('abc')
      let id = navigator.geolocation.watchPosition((position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        console.log(`lat:${position.coords.latitude}, lon: ${position.coords.longitude}`);

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.long + '&appid=9ce2eb4084172fcd1a624bcf954f8222')
          .then(response => response.json())
          .then(Totaldata => {
            console.log(Totaldata);
            var time = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.dbService.getAllByIndex('citiesData', 'cityID', IDBKeyRange.only(i)).subscribe((weatherDetail) => {
              if (weatherDetail.length < 3) {
                this.dbService
                  .add('citiesData', {
                    cityName: "Current Location",
                    feels_like: Totaldata.current.feels_like,
                    humidity: Totaldata.current.humidity,
                    pressure: Totaldata.current.pressure,
                    temp: Totaldata.current.temp,
                    temp_min: Totaldata.current.temp_min,
                    temp_max: Totaldata.current.temp_max,
                    cityID: i,
                    time: time
                  })
                  .subscribe((storeData) => {
                    console.log('storeData: ', storeData);
                  }, error => {
                    console.log(error);
                  });
              }
              else {
                let id = weatherDetail[0].id;
                if (id) {
                  this.dbService.delete('citiesData', id).subscribe((newCityData) => {
                    console.log('deleted:', newCityData);
                  });
                }
                this.dbService
                  .add('citiesData', {
                    cityName: "Current Location",
                    feels_like: Totaldata.current.feels_like,
                    humidity: Totaldata.current.humidity,
                    pressure: Totaldata.current.pressure,
                    temp: Totaldata.current.temp,
                    temp_min: Totaldata.current.temp_min,
                    temp_max: Totaldata.current.temp_max,
                    cityID: i,
                    time: time
                  })
                  .subscribe((storeData) => {
                    console.log('storeData: ', storeData);
                  }, error => {
                    console.log(error);
                  });
              }
            });
            this.setWeatherData(i, Totaldata);

          })

      })
      this.spinner.hide();

    }
  }


  setWeatherData(i, data) {
    this.spinner.show();
this.WeatherData=data
console.log(this.WeatherData);

 let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
 this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
 console.log(this.WeatherData.sunset_time)
 let currentDate = new Date();
 console.log(currentDate)
 this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());

    this.dbService.getAllByIndex('citiesData', 'cityID', i).subscribe((weatherDetail) => {
      let a: any = weatherDetail;
      this.current = weatherDetail[0];
      this.old = weatherDetail[1];
      this.second_old = weatherDetail[2];
      this.spinner.hide();

    });
  }


}
export interface weather_detail {
  cityName: 'citiesData',
  cityID: number,
  id: number;
  feels_like: number,
  humidity: number,
  pressure: number,
  temp: number,
  temp_min: number,
  temp_max: number,
  time: any
}




