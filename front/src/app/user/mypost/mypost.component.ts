import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/service/auth.service';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

declare let jQuery: any;
 
@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
 
  response: any;
  cat: any;
  actname: any;
  title: any;
  id: '';
  contentres: any;
res:any;
p:any;
  constructor(
              private Auth: AuthService,
              private router: Router,
              private Jarwis: JarwisService,
              public actRoute: ActivatedRoute,
              private Token: TokenService,
              public snackBar: MatSnackBar, 
              private formBuilder: FormBuilder) { }

 
 
  ngOnInit() {

    (function($) {
      "use strict";
      // select2
      $('.select2').select2();

      // flatpickr
      $("#date").flatpickr();

      // easyPieChart
      $('.chart').easyPieChart({
        barColor: '#5eb404',
        trackColor: '#e3e3e3',
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
          $(this.el).find('span').text(Math.round(percent));
        }
      });
    })(jQuery);

    this.Jarwis.getUtitles().subscribe(data=>{
      this.response = data;
      console.log("resp", this.response);
      this.actname=this.response.title[0]
      this.title=this.response.title
      this.cat=this.response.cat
      // this.id4=this.resnh.id
      // console.log(this.title)
      // console.log(this.response)
   
    })
  
    this.Jarwis.getUcontent().subscribe(data=>{
      this.res = data;
      this.contentres =this.res.ucontents
      
    })
  
  }

  navigates(){
    
    this.router.navigate(['/User/(side:Update)']);
    this.ngOnInit()
  }
  navigate(id){
    // [routerLink]="['/User', {outlets: {side: ['Details']}}]"
    this.router.navigate(['Content/'+id+'']);
    this.ngOnInit()
  }

  
}
