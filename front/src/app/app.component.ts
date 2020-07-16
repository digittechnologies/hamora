import { Component } from '@angular/core';
import { JarwisService } from './service/jarwis.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './service/token.service';
import {} from 'googlemaps';
import { MapServiceService } from './map-service.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { ViewChild } from '@angular/core';
import {startWith, map} from 'rxjs/operators';

declare let jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   
  control = new FormControl();
  filteredStreets: Observable<string[]>;
   @ViewChild('map') mapElement: any;
   map: google.maps.Map;

   uimage: string;
    defaultImage = 'assets/img/logo.png';
    image2 = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
    auto:any;

    public lat;
  data: any;
  newArr = [];
  public beach;
  public marker;
  public fakerIt = [];

  public valToSearch;
  url:any;
  appUrl:any;

  title = 'SC-Platform';
 
  public loggedIn: boolean;
  footer: any;
  image: any;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    private Token: TokenService,
    private mapserver: MapServiceService, 
    private coordGet: MapServiceService
  ) { }
  public response:any;
  public res:any;
  ftitle: any;
  ngOnInit() {
    this.Jarwis.geturl().subscribe(
      data=>{
       
       this.url= data;
      let y:any = this.url.url;
       this.appUrl = y[0].url;
     console.log("url",this.appUrl);
      }
    )
    this.Jarwis.getalltitle().subscribe(data=>{
      let y:any = data;
      for(let x=0; x<y.length; x++){
        let z = data[x].name_title;
        let w = data[x].location;
        if(!this.newArr.includes(z) || !this.newArr.includes(w)){
          this.newArr.push(z);
          this.newArr.push(w);
        };
      }
      })

    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))     
      
    );
    console.log(this.filteredStreets);

    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    this.Jarwis.getact().subscribe(
      data=>{
      
      this.res = data;  
      
      }
    )

    this.Jarwis.getfootertitle().subscribe(
      data=>{
      this.ftitle = data; 
      this.footer=this.ftitle[0] 
      console.log(this.footer)
     
      
      }
    )

    this.Jarwis.profile().subscribe(
      data=>{
      
      this.response = data;
      this.image=this.appUrl+this.response.image
     
    });
    
    (function($) {
      "use strict";

    // Popovers
  // ======================
  $("[data-toggle='popover']").popover();
  
  $(".player").mb_YTPlayer();

	// Sticky Sections
  // ======================
  if ($.fn.sticky) {
		$('section[data-fixed="true"]').sticky({ topSpacing: $('#header').outerHeight(), zIndex: 1039 }).on('sticky-start', function() { $('#header').addClass('no-shadow'); }).on('sticky-end', function() { $('#header').removeClass('no-shadow'); });
  }

	$(window).resize(function() {
    $('.sticky-wrapper').each(function() {
      $(this).css('min-height', $(this).children().outerHeight() );
    });
  });
// Fixed Navigation
  // ======================
	$(window).scroll(function(){
  	if ($(this).scrollTop() > 40) {
    	$('body').addClass('header-scroll');
    } else {
			$('body').removeClass('header-scroll');
    }
  });


	// Responsive Navbar
  // ======================
	// Toggle Navbar
	$(".navbar-toggle").click(function () {
		$('body').toggleClass('navbar-open');
		return false;
	});

	// Nav Responsive
	$('#header .navbar-left .nav').clone().prependTo("body").addClass('nav-responsive');

	// Nav Responsive
	$('.nav-responsive .has-dropdown > a').click(function() {
		$(this).parent().toggleClass('open');
		return false;
	});


	// Search Bar
  // ======================
	// Toggle Search
	$("[data-toggle='search']").click(function () {
		$('body').toggleClass('navbar-search-open');
		return false;
	});

	// Close Search
	$(".navbar-search .close").click(function () {
$('body').removeClass('navbar-search-open');
		return false;
	});


	// Nav Dropdown Open
	// ======================
	$('#header .has-dropdown').hover(function() {
		$(this).addClass('open');
	}, function() {
		$(this).removeClass('open');
  });
  
})(jQuery);

  }
  

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('');
    this.ngOnInit();
  }
  navigate(id){
    this.router.navigate(['Category/'+id+''])
    this.ngOnInit()
  }

  nav(id){
    this.router.navigate(['Content/'+id+'']);
    this.ngOnInit()
  }

  locateMe(event: any) {
    $('._card').removeClass('d-none');
    this.valToSearch = event.target.value;
    // alert(this.valToSearch.category)
    //map Init
    this.coordGet.getLocality(this.valToSearch).subscribe(data=>{
      // console.log(this.newArr);
      this.data = data;

      let lat = this.data.results[0].geometry.location.lat;
      let long = this.data.results[0].geometry.location.lng;
      console.log('lat= '+ lat +' and long= '+ long );

      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng:  long},
        zoom: 10,
        panControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        // overviewMapControl: true,
        rotateControl: true,
        //mapTypeId: google.maps.mapTypeId.ROADMAP
      })
      this.marker = new google.maps.Marker({
        map: map,
        
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: lat, lng:  long},
        
      });
    })
  }

  public search(): void {
    this.router.navigate(['map']);
   
    console.log(this.valToSearch);
    this.mapserver.getLocality(this.valToSearch.status).subscribe(data=>{
      if(this.data.results[0].address_components[1].short_name=='OG'){
        let lat = this.data.results[0].geometry.location.lat;
        let long = this.data.results[0].geometry.location.lng;
       
          this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lat, lng: long },
          zoom: 10,
          panControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          // overviewMapControl: true,
          rotateControl: true,
          //mapTypeId: google.maps.mapTypeId.ROADMAP
        })

      }
      else {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 6.9075, lng: 3.5813 },
          zoom: 10,
          panControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          // overviewMapControl: true,
          rotateControl: true,
          //mapTypeId: google.maps.mapTypeId.ROADMAP
        })
  
      }
    })
  }

  streets: string[] = this.newArr;
  private _filter(value: string): string[] {
    console.log(this.newArr)
    
    console.log(Array.isArray(this.streets));
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }



}
