import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JarwisService } from '../../service/jarwis.service';
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

public res:any;
  constructor( private Jarwis: JarwisService,
    private router: Router
  ) { }

  ngOnInit() {
    
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
