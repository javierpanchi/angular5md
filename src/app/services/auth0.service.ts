import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {ConfigurationService} from './../services/configuration.service';
import {MatSnackBar} from '@angular/material';

declare var auth0:any;

@Injectable()
export class Auth0Service {

  webAuth:any;
  constructor(private router:Router,
  private configurationService:ConfigurationService,
  private snackBar:MatSnackBar) {
    this.configurationService.getVariables().subscribe(properties=>{
      this.webAuth=new auth0.WebAuth({
        domain:properties.domain,
        clientID:properties.clientId,
        redirectUri:properties.redirectUri
      })
    })


  }

  showSnackBar(message:string, action:string){
      this.snackBar.open(message,action,{duration:2000})
  }

  public login(username:string, password:string){
    this.webAuth.client.login({
        realm:'Username-Password-Authentication',
        username,
        password,
        scope:'openid profile'

    },(err,authResult)=>{
      if(err)
        return this.showSnackBar("Connection Error","Please check your credentials");
     if(authResult && authResult.accessToken && authResult.idToken){
        window.location.hash='';
        localStorage.setItem('access_token',authResult.accessToken);
        localStorage.setItem('id_token',authResult.idToken);
        this.router.navigate(['/home']);
     }
    })
  }

  public isAuthenticated():boolean{
      return tokenNotExpired('id_token');
  }

  public logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this.router.navigate(['/login'])
  }

}
