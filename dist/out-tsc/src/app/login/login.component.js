import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.confirmSignIn().then(() => {
            this.onredirect();
        }).catch(err => console.log('err auth confirmSingIn: ', err.message));
    }
    onloginGoogle() {
        this.authService.loginGoogle().then((res) => {
            this.onredirect();
        }).catch(err => console.log('err :D', err.message));
    }
    onloginEmail() {
        console.log("entre");
        this.authService.loginLinkEmail(this.email).catch(err => console.log('err :D', err.message));
    }
    test1() {
        this.authService.test();
    }
    onredirect() {
        this.router.navigate(['/accounts']);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map