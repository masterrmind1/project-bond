import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AngularFireAuth } from '@angular/fire/auth';
import { DOCUMENT } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import firebase from 'firebase/app';
import { userInfo } from '../user.module';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticateService } from '../services/authenticate.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  color: ThemePalette = 'primary';wantToLogIn=false;
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
    {matTooltip:   'Weather',
    routerLink:'/city-detail',
  button:'wb_cloudy' },
    {matTooltip: "Pollution",
    routerLink:'/location',
    button:'location_city' },
    {matTooltip: "List3",
    routerLink:'/pollution_components',
    button:'local_florist' }
  ];
  addData=false;

  buttonforDevice=[
    { routerLink:'/city-detail',icon:'home'}, { routerLink:'/location',icon:'search'}, 
    { routerLink:'/pollution_components',icon:'forum'}  ]
  constructor(private deviceService: DeviceDetectorService, private auth: AngularFireAuth, private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,private spinner: NgxSpinnerService, private getDataService:GetDataService,
    private authService:AuthenticateService) {
    this.device = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    this.device = this.isMobile;
      this.getDataService.knowIfDevice(this.isMobile);
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
  loggedIn(){
    this.wantToLogIn=true;
  }
  logInWithEmailPassword() {
    this.addData=true;
    
    this.spinner.show();

    
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userInformation) => {
        console.log('You are Successfully signed up!', userInformation);

      }).catch(error => {
        console.log('Something is wrong:', error.message);
        });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authentication = true;

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
    this.wantToLogIn=false;

    this.spinner.hide();
  }
  logInCancel(){
        this.wantToLogIn=false;
        this.authentication = false;

  }
  
  logout() {
    this.spinner.show();
   this.authService.logOut();
    this.authentication = false;

    // firebase.auth().signOut().then(function() {
    //   console.log("sign out");
      
    //  }).catch(function(error) {
    //   console.log(error);
    //  });
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

