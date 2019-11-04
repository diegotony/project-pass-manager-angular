import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actionCodeSettings } from "../../../environments/environment";

import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs-compat/operator/map';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginLinkEmail(){
    
  }

  isAuth() {
    return this.afAuth.authState;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }



}
