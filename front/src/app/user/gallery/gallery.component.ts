import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../service/jarwis.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  res: any;
  gallery: any;
  url:any;
  appUrl:any;

  constructor(private Jarwis: JarwisService,) { }

  ngOnInit() {
    this.Jarwis.geturl().subscribe(
      data=>{
       
       this.url= data;
      let y:any = this.url.url;
       this.appUrl = y[0].url;
     console.log("url",this.appUrl);
      }
    )
    this.Jarwis.displaygallery().subscribe(
      data=>{
     
      this.res = data;  
      this.gallery=this.res.gallery
      console.log(this.gallery)
      }
    )
  }

}
