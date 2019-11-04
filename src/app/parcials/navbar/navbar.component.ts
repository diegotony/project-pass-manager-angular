import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean = false;
  constructor(private authService: AuthService, private afsAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.getCurrentAccount();
  }

  private getCurrentAccount() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
  }

  test1(){
    this.authService.test();
  }
  onlogout() {
    this.authService.logout();
    this.getCurrentAccount();
  }
}
