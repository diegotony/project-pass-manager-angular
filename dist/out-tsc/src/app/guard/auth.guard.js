import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { take, map, tap } from "rxjs/operators";
let AuthGuard = class AuthGuard {
    constructor(afsAuth, router) {
        this.afsAuth = afsAuth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.afsAuth.authState
            .pipe(take(1))
            .pipe(map(authState => !!authState))
            .pipe(tap(auth => {
            if (!auth) {
                this.router.navigate(['/login']);
            }
        }));
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map