import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actionCodeSettings } from "../../../environments/environment";

import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs-compat/operator/map';
import { auth } from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((credential)=> {
      console.log(credential.user);
      this.updateUserData(credential.user);
    })
  }

  loginLinkEmail(){

  }

  isAuth() {
    return this.afAuth.authState;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data = {
      id: user.uid,
      email: user.email
    }
    return userRef.set(data, { merge: true })
  }

}
