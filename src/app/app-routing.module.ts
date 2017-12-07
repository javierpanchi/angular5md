import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AccessGuardService} from './services/access-guard.service';


const routes: Routes = [
  {
      path:'login',
      component:LoginComponent
  },
  {
      path:'**',
      component:HomeComponent,
      canActivate:[AccessGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
