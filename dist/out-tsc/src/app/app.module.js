import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './parcials/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { ListAccountsComponent } from './account/list-accounts/list-accounts.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './parcials/footer/footer.component';
import { HomeComponent } from './parcials/home/home.component';
import { HomeAccountComponent } from './account/home-account/home-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ConstantsService } from './services/constants.service';
import { DataPipe } from './pipes/data.pipe';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavbarComponent,
            NewAccountComponent,
            EditAccountComponent,
            ListAccountsComponent,
            NewUserComponent,
            LoginComponent,
            FooterComponent,
            HomeComponent,
            HomeAccountComponent,
            DataPipe,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            AngularFireModule.initializeApp(environment.firebase),
            BrowserAnimationsModule,
            AlertModule.forRoot(),
            ModalModule.forRoot(),
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [AngularFirestore, AngularFireAuth, ConstantsService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map