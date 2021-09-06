import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { userInfo } from '../user.module';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email: string;
  name: string;
  password: string;
  user: userInfo;
  authentication: boolean;
  isVerified: string;
  constructor(public auth: AngularFireAuth,private spinner: NgxSpinnerService) {
    this.spinner.show();
    this.user=JSON.parse(localStorage.getItem('user'));
    this.authentication = Boolean(localStorage.getItem('email' || 'name'));
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.spinner.hide();

  }

  ngOnInit() {

  }

  googleLogin() {
    this.spinner.show();
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      firebase.auth().onAuthStateChanged(user => {
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.user=JSON.parse(localStorage.getItem('user'));
        this.authentication = !!this.user.email;
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
  facebookLogin() {
    this.spinner.show();
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
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
  loggedIn() {
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
    this.auth.signOut();
    firebase.auth().signOut().then(() => {
      console.log("sign out succesfull")
    }).catch((error) => {
      console.log(error.message);
    });
    this.authentication = false;
    localStorage.clear();
    this.spinner.hide();

  }
}
