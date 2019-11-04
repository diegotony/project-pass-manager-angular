import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeAccountComponent } from './account/home-account/home-account.component';
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'accounts', component:HomeAccountComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
