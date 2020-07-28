import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { MatSnackBar } from '@angular/material';

declare let jQuery: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public role;
  public form = {
    email: null,
    password: null,
    status:'Y'
  };

  disabled= false;
  sav= 'Login'
  public error = null;
  message: string;
  res: Object;
  selectedValue: string;
  selectedCar: string;
  constructor( 
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    public snackBar: MatSnackBar, 
  ) { }
 
  onSubmit() {
    this.disabled= true;
   this.sav= 'Processing'
  this.Jarwis.login(this.form).subscribe(
    data => this.handleResponse(data),
    error => this.handleError(error)
    );
  
}
handleResponse(data) {
  let snackBarRef = this.snackBar.open("Login successfully", 'Dismiss', {
    duration: 2000
  })   
//  alert(data.access_token);
  this.Token.handle(data.access_token);
   
    this.Auth.changeAuthStatus(true);  
   this.router.navigateByUrl('/User/(side:Details)'); 
   this.disabled= false;
   this.sav= 'Submited'
   this.ngOnInit();


}

handleError(error) {

  this.error = error.error.error;
  let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
    duration: 2000

  })
  this.disabled= false;
  this.sav= 'Login'


}

  ngOnInit() {

    (function($) {
      "use strict";
      $(".player").mb_YTPlayer();
    })(jQuery);  
    
  }


}
