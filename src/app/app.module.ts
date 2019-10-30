import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './parcials/navbar/navbar.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule  } from "@angular/fire/firestore";
import {environment} from './../environments/environment';
import { NewAccountComponent } from './account/new-account/new-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { ListAccountsComponent } from './account/list-accounts/list-accounts.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './parcials/footer/footer.component';
import { HomeComponent } from './parcials/home/home.component';
import { HomeAccountComponent } from './account/home-account/home-account.component'
import { FirebaseService } from './services/firebase.service';

@NgModule({
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
    HomeAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
