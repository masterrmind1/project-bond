import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GetDataService } from '../services/get-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})
export class GetLocationComponent implements OnInit {
  myControl = new FormControl(''); array = []; pollutionData; states;
  allStates: string[] = []; stateKey = {}; 
  filteredOptions: Observable<string[]>; id;
  constructor(private dataService: GetDataService, private database: AngularFireDatabase,private spinner: NgxSpinnerService,
    private router: Router) {
    this.allStates = dataService.sendStateArrey();
    // this.callAPI();
  }

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allStates.filter(option => option.toLowerCase().includes(filterValue));
  }
  onStateClick(i) {
    this.spinner.show();
    this.id = this.stateKey[i];
    this.array = []
    for (let a = 0; a < Object.keys(this.id).length; a++) {
      this.array.push(this.id[a]);
    }
    console.log(this.array);
    this.spinner.hide();

  }
  // callAPI(){
  // fetch('https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd0000014603f9ebbec94dfd47badb0359240ce4&format=json&offset=0&limit=3734')
  // .then(response => response.json())
  //   // .then(Totaldata => {
  //     this.database.list('pollutionData').valueChanges().subscribe(data => {
  //       this.pollutionData = data;
  //       console.log(data)
  //       console.log(Object.keys(this.pollutionData));


  //      });

  // }
  showStates(i) {
    this.states = this.dataService.sendStateArrey();
    console.log(this.states[i])
    this.dataService.getCityId(i);
    this.router.navigate(['location', this.states[i]]);
  }

  // }
}
export interface Pollution {
  city: string;
  pollutant_avg: number;
  pollutant_id: string;
  pollutant_max: number;
}