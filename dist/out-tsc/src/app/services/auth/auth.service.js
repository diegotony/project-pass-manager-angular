import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { actionCodeSettings } from "../../../environments/environment";
import { auth } from 'firebase/app';
let AuthService = class AuthService {
    constructor(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
    }
    loginGoogle() {
        return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
            .then((credential) => {
            this.updateUserData(credential.user);
        });
    }
    loginLinkEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
                window.localStorage.setItem('emailForSignIn', email);
            }).catch(err => console.log('err send LinkEmail', err.message));
        });
    }
    confirmSignIn() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                if (this.afAuth.auth.isSignInWithEmailLink(window.location.href)) {
                    let email = window.localStorage.getItem('emailForSignIn');
                    if (!email) {
                        email = window.prompt('Please provide your email for confirmation');
                    }
                    // Signin user and remove the email localStorage
                    yield this.afAuth.auth.signInWithEmailLink(email, window.location.href)
                        .then((credential) => {
                        this.updateUserData(credential.user);
                    });
                    window.localStorage.removeItem('emailForSignIn');
                }
            }
            catch (err) {
                console.log(err.message);
            }
        });
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
    updateUserData(user) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        this.data = {
            id: user.uid,
            email: user.email
        };
        return userRef.set(this.data, { merge: true });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map