import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from '../../service/jarwis.service';

declare let jQuery: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  details = true;
  mypost = false;
  profile = false;
  events= false;
  location = false;
  artifact = false;
  commercial = false;
  news = false;
  people = false;
  firstname: any;
  family: any;
  email: any;
  lastname: any;
public res:any;
response: any;
  image: string;
  middlename: any;
  url:any;
  appUrl:any;
  constructor( private Jarwis: JarwisService,
    private router: Router
  ) { }

  ngOnInit() {
    this.Jarwis.geturl().subscribe(
      data=>{
       
       this.url= data;
      let y:any = this.url.url;
       this.appUrl = y[0].url;
    //  console.log("url",this.appUrl);
      }
    )
    this.Jarwis.profile().subscribe(
      data=>{
      
      this.response = data;
     this.firstname=this.response.firstname,
      this.lastname=this.response.lastname,
      this.email=this.response.email,
  this.family=this.response.family,
  this.middlename=this.response.middlename,
      this.image=this.appUrl+this.response.image
     
    });

    (function($) {
      "use strict";
      // lightbox
      $('[data-lightbox]').lightbox({
        disqus: 'gameforestyakuzieu'
      });
    })(jQuery);
    
  }
  
 
  menu(take) { 
    var result = (take=='details')?this.details=true:this.details=false;
    var result = (take=='mypost')?this.mypost=true:this.mypost=false;
    var result = (take == 'profile')?this.profile=true:this.profile=false;
    var result = (take == 'location')?this.location=true:this.location=false;
    var result = (take == 'events')?this.events=true:this.events=false;
    var result = (take == 'artifact')?this.artifact=true:this.artifact=false;
    var result = (take == 'commercial')?this.commercial=true:this.commercial=false;
    var result = (take == 'news')?this.news=true:this.news=false;
    var result = (take == 'people')?this.people=true:this.people=false;

}
}
