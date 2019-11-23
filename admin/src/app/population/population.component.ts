import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  response: any;
  cat: any;
  actname: any;
  title: any;
  id: '';
  contentres: any;
res:any;
  lenght: any;
  p:any;

  N= true;
  Y= true;
  status3= 'E';
  show: any;
  paramsid: any;

  constructor(
              private Auth: AuthService,
              private router: Router,
              private Jarwis: JarwisService,
              public actRoute: ActivatedRoute,
              private Token: TokenService,
              public snackBar: MatSnackBar, 
              private formBuilder: FormBuilder) { }

 
 
  ngOnInit() {

    this.actRoute.paramMap.subscribe((params => {
      this.paramsid = params.get('id');
      
      this.Jarwis.gettitlesforadmin(this.paramsid).subscribe(data=>{
        this.response = data;
        this.actname=this.response.acti[0].actname
        this.title=this.response.title
        this.cat=this.response.cat

        this.show=this.title.status
        // this.id4=this.resnh.id
        this.lenght= this.title.length
        console.log(this.title[0].status)
        // console.log(this.response)

        // var view = (this.show == 'N')?this.status=true:this.status=false;
   
      })
    
        }));


    // this.Jarwis.getUtitles().subscribe(data=>{
    //   this.response = data;
    //   console.log("resp", this.response);
    //   this.actname=this.response.title[0]
    //   this.title=this.response.title
    //   this.cat=this.response.cat
    //   // this.id4=this.resnh.id
    //   // console.log(this.title)
    //   // console.log(this.response)
   
    // })
  
    this.Jarwis.getUcontent().subscribe(data=>{
      this.res = data;
      this.contentres =this.res.ucontents
      
    })
  
  }

  navigates(id){
    
    this.router.navigate(['edit/'+id+'']);
    this.ngOnInit()
  }
  navigate(id){
    // [routerLink]="['/User', {outlets: {side: ['Details']}}]"
    this.router.navigate(['Content/'+id+'']);
    this.ngOnInit()
  }
  trash(id){
   this.Jarwis.trash(id).subscribe(
    data => this.handleResponse(data),
      error => this.handleError(error)
 );
  }

  handleError(error: any): void {
   // this.disabled=false;
   // this.sav= 'Update';
  }
  
  
  
  handleResponse(data) { 
    console.log(data) 
   let snackBarRef = this.snackBar.open("Successfully move to trash", 'Dismiss', {
    duration: 2000
  })  
 //  this.disabled=true;
  // this.router.navigateByUrl('/population/'+this.paramsid+'');
  this.ngOnInit()
  //  this.router.navigateByUrl('/User/(side:Details)');
  }

  
}
