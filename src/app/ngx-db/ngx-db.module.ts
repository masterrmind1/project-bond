import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

// const dbConfig: DBConfig = {
//   name: 'MyDb',
//   version: 3,
//   objectStoresMeta: [
//     {
//       store: 'people',
//       storeConfig: { keyPath: 'sr no', autoIncrement: true },
//       storeSchema: [
//         { name: 'cityName', keypath: 'cityName', options: { unique: false } },
//         { name: 'latitude', keypath: 'latitude', options: { unique: false } },
//         { name: 'longitude', keypath: 'longitude', options: { unique: false } },
//         { name: 'state', keypath: 'state', options: { unique: false } }
//       ]
//     },
//     {
//       store: 'cities',
//       storeConfig: { keyPath: 'sr no', autoIncrement: true },
//       storeSchema: [
//         { name: 'cityName', keypath: 'cityName', options: { unique: false } }
//       ]

//     }
//   ]
// }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class NgxDbModule { }
