import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  res: any;
  response: any;
 

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService
  ) { }

  ngOnInit() {

    this.Jarwis.getact().subscribe(
      data=>{
      
      this.res = data;  
      
      }
    )

    // this.Jarwis.getfootertitle().subscribe(
    //   data=>{
    //   this.ftitle = data; 
    //   this.footer=this.ftitle[0] 
      
     
      
    //   }
    // )

    this.Jarwis.profile().subscribe(
      data=>{
      this.response = data;
   
    })


  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
  }

  navigate(){
   
    this.router.navigate(['']);
    this.ngOnInit();
  }

  navigates(id){
    this.ngOnInit();
    this.router.navigate(['population/'+id+'']);
  }

  navigatestrash(){
    this.ngOnInit();
    this.router.navigate(['trash/']);
  }


}
