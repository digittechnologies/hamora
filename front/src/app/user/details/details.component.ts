import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  profres: any;
  image: any;
  ftitle: any;
  article: any;
  gallery: any;

  constructor(private Jarwis: JarwisService,) { }

  ngOnInit() {

    this.Jarwis.profile().subscribe(
      data=>{
      
      this.profres = data;
      this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.profres.image
     
    });

    this.Jarwis.getArticle().subscribe(
      data=>{
      this.ftitle = data; 

      this.article=this.ftitle.name
      this.gallery=this.ftitle.gallery
          console.log(this.gallery);
      }
    )
  }

}
