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
  public form = {
    'name': null,
    'email': null,
    'subject':null,
    'message': null
  };
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

  contactUs(){
    // console.log("form",this.form);
    this.Jarwis.contactus(this.form).subscribe(
        data=>{
          this.form = {
            'name': null,
            'email': null,
            'subject':null,
            'message': null
          };
          let snackBarRef = this.snackBar.open("Sent successfully", 'Dismiss', {
            duration: 2000
          })  
          // console.log("contact",data)
        },
        error =>{
          if(error.error.message == "Connection could not be established with host mail.hamorah.com [php_network_getaddresses: getaddrinfo failed: No such host is known.  #0]"){

          let snackBarRef = this.snackBar.open("Failed, Check your Internet Connection", 'Dismiss', {
            duration: 2000
          })  
        } else if(error.error.message == undefined){

          let snackBarRef = this.snackBar.open("Failed", 'Dismiss', {
            duration: 2000
          })
        } else {
          let snackBarRef = this.snackBar.open("Fill all fields", 'Dismiss', {
            duration: 2000
        })
        }
      }
    );
}
}
