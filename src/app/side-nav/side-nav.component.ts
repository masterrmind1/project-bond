import { Component, Input, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() authentication:boolean;
  isMenuOpen = true;
  classs: string;
  device;
  isMobile: boolean;
  buttonSpecifications=[
    {matTooltip:   'List1',
    routerLink:'/city-detail' },
    {matTooltip: "List2",
    routerLink:'/location' },
    {matTooltip: "List3",
    routerLink:'/login' }
  ];

  buttonforDevice=[
    { routerLink:'/city-detail',icon:'home'}, { routerLink:'/location',icon:'search'}, 
    { routerLink:'/login',icon:'forum'}  ]
  constructor(private deviceService: DeviceDetectorService, public auth: AngularFireAuth) {
    this.device = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.device = this.isMobile;
    console.log(this.isMobile);
  }
  ngOnInit() {
    if (this.device) {
      this.classs = "sidenavContainer1";
    } else {
      this.classs = "sidenavContainer";
    }
    console.log(this.isMobile);

  }
  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen)
  }
  toggleBar() {

  }
  logout(){
    this.auth.signOut();

  }
  
  

}
