import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
declare var $: any;
export interface Gender {
  value: string;
  viewValue: string;
}
export interface Town {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  public form = {
    email: null,
    firstname: null,
    lastname: null,
    middlename: 'null',
    family: 'null',
    familybackground: 'null',
    gender: 'Male',
    address: 'null',
    town: 'Abeokuta',
    phone:'null',
    password: null,
    password_confirmation: null,
    role_id:null
  };

  disabled= false;
  sav= 'Register'
  public error: any;
  public gender;
  response: Object;
  roleid: any;
  public res;
  options: { name: string; value: number; }[];
  constructor( private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    public snackBar: MatSnackBar, 
    ) { }
    Genders: Gender[] = [
      {value: 'Miss', viewValue: 'Miss'},
      {value: 'Mr', viewValue: 'Mr'},
      {value: 'Mrs', viewValue: 'Mrs'}
    ];
    Towns: Town[] = [
      {value: 'Abeokuta', viewValue: 'Miss'},
      {value: 'Egba', viewValue: 'Egba'},
      {value: 'Ota', viewValue: 'Ota'}
    ];
    onSubmit() {
      this.disabled= true;
      this.sav= 'Registering'
      this.form.role_id=1
  //  console.log(this.form)
      this.Jarwis.signup(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
    handleResponse(data) {
      this.disabled=true; 
      this.Token.handle(data.access_token);
      this.router.navigateByUrl('/User/(side:Details)');
      this.ngOnInit();
      this.disabled= false;
      this.sav= 'Submited'
   
     }
   
     handleError(error) {
   
      this.error = error.error.errors;      
      this.disabled= false;   
     }

    displayroleuser(){
      this.Jarwis.roleuser().subscribe(
        data=>{
       
        this.res = data;
        
        this.roleid=this.res[0]
       
        }
      )
    }    
 
  ngOnInit() {   
    this.displayroleuser()
    
  
}


}
