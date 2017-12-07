import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';


@Injectable()
export class AccessGuardService implements CanActivate{


  private jwtHelper:JwtHelper=new JwtHelper();
  constructor(private route:Router) {
  }


  canActivate(){
    var idToken=localStorage.getItem('id_token');
    if(idToken){
      var date1=this.jwtHelper.getTokenExpirationDate(idToken).getTime();
      var date2=(new Date()).getTime();
      if(date1>=date2){
        return true;
      }
    }
    this.route.navigate(['/login']);
    return false;

  }

}
