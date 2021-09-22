import { Component, EventEmitter, Inject, OnChanges, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { userInfo } from '../user.module';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { Theme } from '../side-nav/side-nav.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 index;isOpenFromPollutionComponent;isMobile;
 theme: Theme = 'light-theme';

  constructor(public auth: AngularFireAuth,private spinner: NgxSpinnerService,
    private route: ActivatedRoute, private router: Router, private getDataService:GetDataService,
    @Inject(DOCUMENT) private document: Document) {
    this.spinner.show();
    this.isMobile=this.getDataService.sendDeviceInfo();
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['pollutionInfo'];
        console.log(this.index)
      });
     this.isOpenFromPollutionComponent= this.route.snapshot.params['number'];
     console.log(this.isOpenFromPollutionComponent)
    this.spinner.hide();

  }

  ngOnInit() {

  }
  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

}
