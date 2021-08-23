import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';

declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 device;
 isMobile:boolean;
 constructor(private deviceService: DeviceDetectorService){
    this.device=this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();

    // console.log(this.isMobile);
  }
  ngOnInit(){

  }
  
  
}
