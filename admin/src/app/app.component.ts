import { Component } from '@angular/core';
import { JarwisService } from './service/jarwis.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SC-Platform';
  login = true;
  home = false;
 
  public loggedIn: boolean;
  footer: any;
  image: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService
  ) { }
  public response:any;
  public res:any;
  ftitle: any;
  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
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

    // this.Jarwis.profile().subscribe(
    //   data=>{
      
    //   this.response = data;
    //   this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.response.image
     
    // })

  }
  

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.newMethod();
    // this.router.navigate(['']);
  }

  private newMethod() {
    this.ngOnInit();
  }
  // navigate(id){
  //   this.router.navigate(['Category/'+id+''])
  //   this.ngOnInit()
  // }

  // nav(id){
  //   this.router.navigate(['Content/'+id+'']);
  //   this.ngOnInit()
  // }


}
