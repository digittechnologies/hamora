import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import {} from 'googlemaps';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MapServiceService } from '../map-service.service';
import { MatSnackBar } from '@angular/material';
import { ContributeComponent } from '../contribute/contribute.component';
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
  public orderForm: FormGroup;
  img:any;
  images: any;
  ftitle: any;
  footer: any;
  post=true;
  mapv=false;
  imgs=false;
  video=false;
  contribute=false;
  stream=false
  isPopupOpened = true;
  gallery: any;
constructor(private Jarwis: JarwisService, private formBuilder: FormBuilder,public snackBar: MatSnackBar,private router: Router, public actRoute: ActivatedRoute, private coordGet: MapServiceService,private dialog?: MatDialog,) { }
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
    this.orderForm =  this.formBuilder.group({
     
      gcontents: this.formBuilder.array([
        // {
        //   header:'',
        //   content: ''
        // }
      ])
      // list: '',
      // c_image:''
    });
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
                    this.gallery=this.response.gallery;
                    console.log(this.gallery);
                   
                    //map Init
                    // this.coordGet.getLocality(this.response.content[0].location).subscribe(data=>{
                    //   this.data = data;
                
                    //   let lat = this.data.results[0].geometry.location.lat;
                    //   let long = this.data.results[0].geometry.location.lng;
                   
                    //   var map = new google.maps.Map(document.getElementById('map'), {
                    //     center: {lat: lat, lng:  long},
                    //     zoom: 15,
                    //     panControl: true,
                    //     mapTypeControl: false,
                    //     scaleControl: true,
                    //     streetViewControl: false,
                        
                    //     rotateControl: true,
                       
                    //   })
                    //   this.marker = new google.maps.Marker({
                    //     map: map,
                    //     draggable: true,
                    //     animation: google.maps.Animation.DROP,
                    //     position: {lat: lat, lng:  long},
                        
                    //   });
                    // })
                    
                    this.images='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                    this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                     
                    })
                
              }));   
   
  }
  swip (show){
    var view = (show == 'post')?this.post=true:this.post=false;
    if (show == 'mapv'){this.mapv=true;
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
    }else{this.mapv=false;}
    var view = (show == 'image')?this.imgs=true:this.imgs=false;
    var view = (show == 'video')?this.video=true:this.video=false;
    var view = (show == 'stream')?this.stream=true:this.stream=false;
    if (show == 'contribute'){this.contribute=true;

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
                    this.gallery=this.response.gallery;
                    console.log(this.gallery)
                      this.images='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                      this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                       
                      })
                  
                }));

    } else{this.contribute=false;}  
  }
  onContribute(id){
    // console.log(id)
    // console.log(this.contents)
    this.isPopupOpened = true;
    // this.Jarwis.getact().subscribe(
    //   data=>{
      
    //   this.cress = data;       

    //   }
    // ) 
    
    // console.log(this.cress)
    let contribute = this.contents.filter(c => c.id == id);
    
   const dialogRef = this.dialog.open(ContributeComponent, {
     minWidth: '50%',
     data: {contribute: contribute[0]}
     
   });
  
   

    dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
     if(result == 'undefined'){

     }else{
      this.Jarwis.contribute(result).subscribe(
        data =>  {
          let snackBarRef = this.snackBar.open("Thank you for your contribution, our Editorial team will like to confirm your contribution before it goes live.", 'Dismiss', {
            duration: 8000
          }) 
        }
        );
      console.log(result)
       this.ngOnInit()
     }
    });
  
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
