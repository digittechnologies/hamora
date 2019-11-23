import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

 
  public role;
  public form = {
    email: null,
    password: null
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
   
    this.Token.handle(data.access_token);
   
    this.Auth.changeAuthStatus(true);
  
   this.router.navigateByUrl('/User/(side:Profile)');
   this.disabled= false;
   this.sav= 'Submited'

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
  
    
  }


}
