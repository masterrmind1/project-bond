import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthoriseUserService {
authorise=false;
user:any;
  constructor(public auth: AngularFireAuth) { }
 isAllow(bool:boolean)
 {
   this.authorise=bool;
 }
 returnMe(){
   return this.authorise;
 }
}
