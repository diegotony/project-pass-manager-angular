import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isLogged: boolean = false;
  constructor( private authService: AuthService, private afsAuth: AngularFireAuth) { }

  ngOnInit() {
    this.getCurrentAccount();
  }

  private getCurrentAccount() {
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        console.log("user logged");
        this.isLogged= true;
      } else {
        console.log("Not user logged");
        this.isLogged= false;
      }
    });
  }

  onlogout() {
    this.authService.logout();
  }
}
