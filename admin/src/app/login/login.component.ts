import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

import { MatSnackBar } from '@angular/material';

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
    role_id:2,
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

  ngOnInit() {  
    
  }
 
  onSubmit() {
      this.disabled= true;
     this.sav= 'Processing'
    this.Jarwis.adminLogin(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      );
      this.ngOnInit()
    
  }
  handleResponse(data) {

    this.ngOnInit()
    
    let snackBarRef = this.snackBar.open("Login successfully", 'Dismiss', {
      duration: 2000
    })   
    this.Token.handle(data.access_token);
   
    this.Auth.changeAuthStatus(true);
   this.router.navigateByUrl('');
  
   
  //  this.disabled= false;
  //  this.sav= 'Submited'
   
  }

  handleError(error) {

    this.error = error.error.error;
    let snackBarRef = this.snackBar.open(this.error, 'Dismiss', {
      duration: 2000

    })
    this.disabled= false;
    this.sav= 'Login'


  }

  


}
