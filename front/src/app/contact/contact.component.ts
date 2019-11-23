import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { MapServiceService } from '../map-service.service';

declare let jQuery: any;
declare let $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  result: any;

  constructor(private Jarwis: JarwisService,public snackBar: MatSnackBar,private router: Router, public actRoute: ActivatedRoute, private coordGet: MapServiceService) { }

  ngOnInit() {
    this.Jarwis.getact().subscribe(
      data=>{
      
      this.result = data;
      console.log(this.result)  

      // select2
    $('.select2').select2();

    function initMap() {
      var uluru = {
        lat: -12.043333,
        lng: -77.028333
      };
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        scrollwheel: false,
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
      
      }
    )
  }

  naviga (id){
    this.router.navigate(['Category/'+id+''])
   
  }

}
