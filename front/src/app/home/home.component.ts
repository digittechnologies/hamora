import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { AuthService } from '../service/auth.service';

declare let jQuery: any;




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('video') videoElement: any;
  
  control = new FormControl();
  

   uimage: string;
    defaultImage = 'assets/img/logo.png';
    image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  
  


  res: any; rese: any; resp: any; resl: any; resn: any; resb: any; resa: any ; resh: any;  reseh: any;  resph: any; reslh: any; resnh: any; resbh: any; resah: any; resc: any; resec: any; respc: any ; reslc: any; resnc: any; resbc: any; resac: any ; actname1: any; actname2: any; actname3: any; actname4: any; actname5: any; actname: any;
  searchdata: any;
  searchs:any;
  response: any;

  id: any;
  id1: any;
  id2: any;
  id3: any;
  id4: any;
  id5: any;
  act: any;
  actdata: any;
  acttitle: any;
  comment: any;
  restc: any;
  rest: any;
  resth: any;
  
  constructor(private Jarwis: JarwisService,  private Auth: AuthService, private router: Router) { }

  public lat;
  data: any;
  public loggedIn: boolean;

  ngOnInit() {
    var v = <HTMLVideoElement>document.getElementsByTagName('video')[0];
    v.muted = true;
    (function($) {
      "use strict";
      // Full Width Carousel
      $('.owl-slide').owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        items: 1
      });

      // Recent Reviews
      $('.owl-list').owlCarousel({
        margin: 25,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 2
          },
          701: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });

      // lightbox
      $('[data-lightbox]').lightbox();

      $(".player").mb_YTPlayer();
      
    })(jQuery);


    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    

      this.Jarwis.displayevent().subscribe(
        data=>{
          // All data which contain category and subcat
          
        this.rese = data;  
        //this is one category which is event
        this.reseh=this.rese.event[0]
        this.actname=this.reseh.actname

        // this.comment=this.rese.comment[0].length
        this.id=this.reseh.id
        //this is all subcat under event category
        this.resec=this.rese.subevent
         console.log(this.resec)
        
        }
      )

      this.Jarwis.displayartifact().subscribe(
        data=>{
        this.resa = data;  
        this.resah=this.resa.event[0]
        this.actname1=this.resah.actname
        this.id1=this.resah.id
        this.resac=this.resa.subevent
         console.log(this.resac)

        
        }
      )
      this.Jarwis.displaybusiness().subscribe(
        data=>{
        this.resb = data; 
        this.resbh=this.resb.event[0]
        this.actname2=this.resbh.actname
        this.id2=this.resbh.id
        this.resbc=this.resb.subevent 
        // console.log(this.id2)

        
        }
      )

      this.Jarwis.displaytourist().subscribe(
        data=>{
        this.rest= data;  
        this.resth=this.rest.event[0]
        this.actname3=this.resth.actname
        this.id4=this.resth.id
        this.restc=this.rest.subevent 
        // console.log(this.resnc)
        
        }
      )
      
      this.Jarwis.displaynews().subscribe(
        data=>{
        this.resn= data;  
        this.resnh=this.resn.event[0]
        this.actname4=this.resnh.actname
        this.id4=this.resnh.id
        this.resnc=this.resn.subevent 
        // console.log(this.resnc)
        
        }
      )
      this.Jarwis.displaypeople().subscribe(
        data=>{
        this.resp = data;  
        this.resph=this.resp.event[0]
        this.actname5=this.resph.actname
        this.id5=this.resph.id
        this.respc=this.resp.subevent 
        //  console.log(this.respc)
        
        }
      )
     
      // this.Jarwis.count(i).subscribe(
      //   data=>{
      //   this.title = data;
      //   }
      // )
     
  }


}
