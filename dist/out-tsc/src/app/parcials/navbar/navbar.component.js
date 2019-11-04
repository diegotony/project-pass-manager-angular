import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor(authService, afsAuth) {
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.isLogged = false;
    }
    ngOnInit() {
        this.getCurrentAccount();
    }
    getCurrentAccount() {
        this.authService.isAuth().subscribe(auth => {
            if (auth) {
                this.isLogged = true;
            }
            else {
                this.isLogged = false;
            }
        });
    }
    test1() {
        this.authService.test();
    }
    onlogout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map