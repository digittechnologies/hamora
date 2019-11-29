import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapServiceService } from '../map-service.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
declare let jQuery: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  control = new FormControl();
  filteredStreets: Observable<string[]>;
   @ViewChild('map') mapElement: any;
   map: google.maps.Map;

  constructor(private Jarwis: JarwisService, private router: Router,private mapserver: MapServiceService, private coordGet: MapServiceService) { }

  public valToSearch;

  public localGovt = [
   ['Abeokuta-North', 7.2114, 3.1378],
   ['Abeokuta-South', 7.1561, 3.3490],
   ['Ado Ota', 6.6117, 3.0576],
   ['Ewekoro', 6.9333296, 3.2166658],
   ['Ifo',6.8149, 3.1952],
   ['Ijebu North', 7.0333, 3.9470],
   ['Ijebu Ode', 6.8300, 3.9165],
   ['Ijebu East', 6.8159, 4.3154],
   ['Ikenne', 6.8717, 3.7105],
   ['Imwko Afon', 7.4477, 2.8380],
   ['Ipokia', 6.5250, 2.8403],
   ['Obafemi Owode', 6.9483, 3.5079],
   ['Odeda', 7.2328, 3.5281],
   ['Odogbolu',6.8365, 3.7689],
   ['Ogun Water Side',6.5169, 4.3565],
   ['Remo North',7.0137, 3.7232],
   ['Sagamu',6.8322, 3.6319],
   ['Yewa North',7.1702, 2.8577],
   ['Yewa South',6.7832, 2.9776],
   ['State Capital',7.1475, 3.3619],
 ]

 title: any;
  searchdata: any;
  searchs:any;
  response: any;

  public lat;
  data: any;
  newArr = [];
  public beach;
  public marker;
  public fakerIt = [];

  ngOnInit() {
    this.fakerIt = this.mapserver.localGovt();

    this.initMap();

    
  }
  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 6.9075, lng: 3.5813 }
    });
    // var image = {
    //   url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    //   // This marker is 20 pixels wide by 32 pixels high.
    //   size: new google.maps.Size(20, 32),
    //   // The origin for this image is (0, 0).
    //   origin: new google.maps.Point(0, 0),
    //   //The anchor for this image is the base of the flagpole at (0, 32).
    //   anchor: new google.maps.Point(0, 32)
    // };
    // // Shapes define the clickable region of the icon. The type defines an HTML
    // // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // // The final coordinate closes the poly by connecting to the first coordinate.
    // // var shape = {
    // //   coords: [1, 1, 1, 20, 18, 20, 18, 1],
    // //   type: 'poly'
    // // };
    
    //   let capital = new google.maps.Marker({
    //   map: map,
    //   icon: image,
    //   draggable: true,
    //   animation: google.maps.Animation.DROP,
    //   position: {lat: 7.1475, lng: 3.3619}
    // });

    // let cap = this.mapserver.capital
    // google.maps.event.addListener(capital,'click', (function(marker,content,infowindow,){ 
    //   return function() {
    //     infowindow.setContent(cap);
    //     infowindow.open(map,marker);
    // };
    // })(this.marker,cap,infowindow)); 
    
    for (var i = 0; i < this.localGovt.length; i++) {
      this.beach = this.localGovt[i];
      this.marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: this.beach[1], lng: this.beach[2]},
      title: this.beach[0]+' Local Govt.',
    });
    // this.marker.addListener('click', toggleBounce);

    // map.setCenter(this.marker.getPosition())
  
    var content = this.fakerIt[i];
    var infowindow = new google.maps.InfoWindow()
    
    google.maps.event.addListener(this.marker,'click', (function(marker,content,infowindow,){ 
      return function() {
        infowindow.setContent(content);
        infowindow.open(map,marker);
    };
    })(this.marker,content,infowindow)); 
  } }

  locateMe(event: any) {
    this.valToSearch = event.target.value;
    // alert(this.valToSearch.category)
    //map Init
    this.coordGet.getLocality(this.valToSearch).subscribe(data=>{console.log(data)
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

  public search(): void {alert()
   
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

  streets: string[] = this.newArr ;
  private _filter(value: string): string[] {
    console.log(this.newArr)
    
    console.log(Array.isArray(this.streets));
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }


  navigat(id){
    // console.log(id)
   this.router.navigate(['Category/'+id+''])
  }
  navigate(id){
    this.router.navigate(['Content/'+id+''])
  }
}