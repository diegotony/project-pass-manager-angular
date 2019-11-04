import { Injectable } from '@angular/core';
import { actionCodeSettings } from "../../../environments/environment";

import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: any;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }


  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((credential) => {
        this.updateUserData(credential.user);
      })
  }

  async loginLinkEmail(email) {
    return await this.afAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {

      window.localStorage.setItem('emailForSignIn', email);
    }).catch(err => console.log('err send LinkEmail', err.message));

  }

  async confirmSignIn() {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(window.location.href)) {

        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');

        }
        // Signin user and remove the email localStorage
        await this.afAuth.auth.signInWithEmailLink(email, window.location.href)
          .then((credential) => {
            this.updateUserData(credential.user);
          });
        window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  isAuth() {
    return this.afAuth.authState;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  test() {
    console.log(this.data);
    
    return this.data;
  }
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    this.data = {
      id: user.uid,
      email: user.email
    };
    return userRef.set(this.data, { merge: true })
  }

}
