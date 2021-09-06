import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AngularFireAuth } from '@angular/fire/auth';
import { DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  color: ThemePalette = 'primary';
  theme: Theme = 'light-theme';

  @Input() authentication:boolean;
  isMenuOpen = true;
  sideNavClass: string;
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
  constructor(private deviceService: DeviceDetectorService, public auth: AngularFireAuth, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) {
    this.device = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.device = this.isMobile;
    console.log(this.isMobile);
  }
  ngOnInit() {
    this.initializeTheme();

    if (this.device) {
      this.sideNavClass = "sidenavContainer1";
    } else {
      this.sideNavClass = "sidenavContainer";
    }
    console.log(this.isMobile);

  }
  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen)
  }

  logout(){
    this.auth.signOut();

  }
  
  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }
  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}
export type Theme = 'light-theme' | 'dark-theme';

