import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeAccountComponent } from './account/home-account/home-account.component';
import { AuthGuard } from "./guard/auth.guard";
const routes = [
    { path: '', component: LoginComponent },
    { path: 'accounts', component: HomeAccountComponent, canActivate: [AuthGuard] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map