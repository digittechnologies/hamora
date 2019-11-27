import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { MapServiceService } from '../map-service.service';
import { MatSnackBar } from '@angular/material';

declare let jQuery: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  res: any;
  response: any;
  contents: any;
  actname: any;
  catname: any;
  image: any;
  name: any;
public detail;
public data;
public loggedIn: boolean;
map: google.maps.Map;
id: any;
  bio: any;
  disable= false;
    sav= 'Comment';
  public form = {
    comment: null,
    title_id: null,
   
  };
  comment: any;
  title: any;
  dates: any;
  about: any;
  uimage: any;
  marker: google.maps.Marker;
  error: any;
  cat: any;
  result: any;
  view: any;
 public tid;
  location: any;

  img:any;
  images: any;
  ftitle: any;
  footer: any;
  post=true;
  mapv=false;
  imgs=false;
  video=false;
  contribute=false;
  stream=false;
  active1='active';
  active2='';
  active6= '';

constructor(private Jarwis: JarwisService,public snackBar: MatSnackBar,private router: Router, public actRoute: ActivatedRoute, private coordGet: MapServiceService) { }
@ViewChild('map') mapElement: any;



onSubmit() {

  this.disable= true;
    this.sav= 'Comment';
  let token=localStorage.getItem('token')

  if (token==null){
    let snackBarRef = this.snackBar.open('Please, Login to proceed', 'Dismiss', {
      duration: 4000
    })
  this.router.navigateByUrl('/Login');
  }
  else{  
    
     this.Jarwis.comment(this.form).subscribe(
    
    data => this.handleResponse(data),
    error => this.handleError(error)
  );
  }
 
 
}
handleResponse(data) {
  let snackBarRef = this.snackBar.open('Comment Successfully', 'Dismiss', {
    duration: 2000
  });
  this.disable= false;
    this.sav= 'Comment';
  this.ngOnInit()
}

handleError(error) {
  this.disable= false;
    this.sav= 'Comment';
  this.error = error.error.errors;
}
  ngOnInit() {

    (function($) {
      "use strict";
      // select2
      $('.select2').select2({
        minimumResultsForSearch: -1
      });

      // easyPieChart
      $('.chart').easyPieChart({
        barColor: '#5eb404',
        trackColor: '#e3e3e3',
        easing: 'easeOutBounce',
        onStep: function(from, to, percent) {
          $(this.el).find('span').text(Math.round(percent));
        }
      });
      // lightbox
      // $('[data-lightbox]').lightbox();
      $('[data-lightbox]').lightbox({
        disqus: 'gameforestyakuzieu'
      });
      $('.owl-logos').owlCarousel({
        margin: 100,
        nav: false,
        autoplay: true,
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
            items: 5
          }
        }
      });

      $('.owl-videos').owlCarousel({
        margin: 15,
        loop: true,
        dots: false,
        autoplay: true,
        responsive: {
          0: {
            items: 1
          },
          700: {
            items: 2
          },
          800: {
            items: 3
          },
          1000: {
            items: 4
          },
          1200: {
            items: 6
          }
        }
      });
      // Background Player
      $(".player").mb_YTPlayer();
    })(jQuery);

    this.Jarwis.getfootertitle().subscribe(
      data=>{
      this.ftitle = data; 
      this.footer=this.ftitle[0] 
      console.log(this.footer)      
      
      }
    )

    this.Jarwis.getact().subscribe(
      data=>{
      
      this.result = data;
      console.log(this.result)  
      
      }
    )


    this.actRoute.paramMap.subscribe(( params => {  
      
      var id= this.actRoute.snapshot.params['id'];
     
      this.tid= this.actRoute.snapshot.params['id'];
      this.viewig();
                       
                    this.Jarwis.getcontent(id).subscribe(data=>{
                    this.response = data;
                    console.log(this.response);
                    this.res=this.response.name[0];
                    this.actname=this.res.actname;
                    this.view=this.res.views;
                    this.catname=this.res.catname;
                    this.form.title_id=this.res.id;
                    this.title=this.res.name_title;
                    this.about=this.res.about;
                    this.dates=this.res.created_at;
                    this.bio=this.res.familybackground;
                    this.name=this.res.firstname+" "+this.res.lastname+" "+this.res.middlename;
                    this.location= this.response.content[0].location;
                   this.img=this.res.t_image;

                    this.contents=this.response.content;
                    this.comment=this.response.comment;  
                    
                    console.log(this.response);                  
                    
                    this.images='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                    this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                     
                    })
                
              }));   
   
  }
  swip (show){
    if(show == 'post'){this.post=true; this.active1='active';
    this.actRoute.paramMap.subscribe(( params => {  
      
      var id= this.actRoute.snapshot.params['id'];
     
      this.tid= this.actRoute.snapshot.params['id'];
      this.viewig();
                       
                    this.Jarwis.getcontent(id).subscribe(data=>{
                    this.response = data;
                    console.log(this.response);
                    this.res=this.response.name[0];
                    this.actname=this.res.actname;
                    this.view=this.res.views;
                    this.catname=this.res.catname;
                    this.form.title_id=this.res.id;
                    this.title=this.res.name_title;
                    this.about=this.res.about;
                    this.dates=this.res.created_at;
                    this.bio=this.res.familybackground;
                    this.name=this.res.firstname+" "+this.res.lastname+" "+this.res.middlename;
                    this.location= this.response.content[0].location;
                   this.img=this.res.t_image;

                    this.contents=this.response.content;
                    this.comment=this.response.comment;  
                    
                    console.log(this.response);                 
                    
                    this.images='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                    this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                     
                    })
                
              }));   

    }{this.post=false; this.active1='';}
    if (show == 'mapv'){this.mapv=true; this.active2='active';
      this.coordGet.getLocality(this.response.content[0].location).subscribe(data=>{
        this.data = data;
  
        let lat = this.data.results[0].geometry.location.lat;
        let long = this.data.results[0].geometry.location.lng;
     
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng:  long},
          zoom: 17,
          panControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          
          rotateControl: true,
         
        })
        this.marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: lat, lng:  long},
          
        });
      })
    }else{this.mapv=false; this.active2='';}
    var view = (show == 'image')?this.imgs=true:this.imgs=false;
    var view = (show == 'video')?this.video=true:this.video=false;
    var view = (show == 'stream')?this.stream=true:this.stream=false;
    if (show == 'contribute'){this.contribute=true; this.active6='active';

      this.actRoute.paramMap.subscribe(( params => {  
      
        var id= this.actRoute.snapshot.params['id'];
       
        this.tid= this.actRoute.snapshot.params['id'];
        this.viewig();
                         
                      this.Jarwis.getcontent(id).subscribe(data=>{
                      this.response = data;                      
                      this.res=this.response.name[0];
                      this.actname=this.res.actname;                     
                      this.catname=this.res.catname;
                      this.form.title_id=this.res.id;
                      this.title=this.res.name_title;
                      this.about=this.res.about;
                      this.dates=this.res.created_at;
                      this.bio=this.res.familybackground;
                      this.name=this.res.firstname+" "+this.res.lastname+" "+this.res.middlename;
                      this.location= this.response.content[0].location;
                     this.img=this.res.t_image;
  
                      this.contents=this.response.content;
                      this.comment=this.response.comment;  
                    
                      this.images='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                      this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                       
                      })
                  
                }));

    } else{this.contribute=false; this.active6='';}  
  }

 navigate (id){
    this.router.navigate(['Content/'+id+''])
   
  }
  naviga (id){
    this.router.navigate(['Category/'+id+''])
   
  }
  viewig(){
    this.Jarwis.updateView({id:this.tid}).subscribe(
   );
   
  }
}
