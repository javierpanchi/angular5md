import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Auth0Service} from './../services/auth0.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router:Router;

  constructor(private _router:Router, private auth:Auth0Service) {
    this.router=_router;
  }


  ngOnInit() {
  }



}
