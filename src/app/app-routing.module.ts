import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './parcials/home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAccountComponent } from './account/home-account/home-account.component';
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'accounts', component:HomeAccountComponent, canActivate: [AuthGuard]},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
