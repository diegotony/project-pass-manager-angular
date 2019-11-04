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
  }

  onloginGoogle() {
    this.authService.loginGoogle().then((res) => {
      this.onredirect();
    }).catch(err => console.log('err :D', err.message));
  }

  onredirect() {
    this.router.navigate(['/accounts']);
  }
}
