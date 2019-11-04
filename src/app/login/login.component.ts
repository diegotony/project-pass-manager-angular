import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth/auth.service";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

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

  test1(){
    this.authService.test();
  }
  onredirect() {
    this.router.navigate(['/accounts']);
  }
}
