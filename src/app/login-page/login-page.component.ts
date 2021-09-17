import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { userInfo } from '../user.module';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 index;isOpenFromPollutionComponent;
  constructor(public auth: AngularFireAuth,private spinner: NgxSpinnerService,
    private route: ActivatedRoute, private router: Router) {
    this.spinner.show();
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

}
