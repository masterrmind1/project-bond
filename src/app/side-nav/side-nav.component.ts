import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AngularFireAuth } from '@angular/fire/auth';
import { DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import firebase from 'firebase/app';
import { userInfo } from '../user.module';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  color: ThemePalette = 'primary';
  theme: Theme = 'light-theme';
  email: string;
  name: string;
  password: string;
  user: userInfo;
  authentication: boolean;
  isVerified: string;
  isMenuOpen = true;
  sideNavClass: string;
  device;
  menu;
  isMobile: boolean;
  buttonSpecifications=[
    {matTooltip:   'List1',
    routerLink:'/city-detail' },
    {matTooltip: "List2",
    routerLink:'/location' },
    {matTooltip: "List3",
    routerLink:'/login' }
  ];
  addData=false;

  buttonforDevice=[
    { routerLink:'/city-detail',icon:'home'}, { routerLink:'/location',icon:'search'}, 
    { routerLink:'/login',icon:'forum'}  ]
  constructor(private deviceService: DeviceDetectorService, private auth: AngularFireAuth, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,private spinner: NgxSpinnerService,
    private authService:AuthenticateService) {
    this.device = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.device = this.isMobile;
    console.log(this.isMobile);
    this.spinner.show();
    this.user=JSON.parse(localStorage.getItem('user'));
    this.authentication = Boolean(localStorage.getItem('email' || 'name'));
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.spinner.hide();
    console.log(this.authentication);
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

  googleLogin() {
    this.spinner.show();
   this.authService.loginGoogle();
    this.spinner.hide();
  }
  facebookLogin() {
    this.spinner.show();
    this.authService.loginFacebook();
    this.spinner.hide();
  }
  loggedIn() {
    this.addData=true;
    this.spinner.show();
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userInformation) => {

      });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.user=JSON.parse(localStorage.getItem('user'));
        this.authentication = !!this.user.email || !!this.user.displayName;
        console.log(this.authentication);
        localStorage.setItem('name', this.user.displayName);
        localStorage.setItem('email', this.user.email);

        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        console.log(this.name);
      }
    });
    this.spinner.hide();
  }

  
  logout() {
    this.spinner.show();
 
    this.authentication = false;
    this.spinner.hide();

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

