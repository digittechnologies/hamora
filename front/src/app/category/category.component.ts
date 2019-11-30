import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../service/token.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  response: any;
  cat: any;
  actname: any;
  title: any;
  lenght: void;
  p:any;
  ftitle: any;
  footer: any;
  res: any;
  article: any;
  loading=true;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Jarwis: JarwisService,
    public actRoute: ActivatedRoute,
    private Token: TokenService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {

    
    this.Jarwis.getact().subscribe(
      data=>{        
      this.res = data;          
      }
    )


    this.actRoute.paramMap.subscribe((params => {
      let id = params.get('id');
      
      this.Jarwis.gettitles(id).subscribe(data=>{
        this.response = data;
        this.loading=false;
        this.actname=this.response.acti[0].actname
        this.title=this.response.title
        this.cat=this.response.cat
        // this.id4=this.resnh.id
        this.lenght= this.title.length
        // console.log(this.lenght)
        // console.log(this.response)
     
      })
    
        }));

        this.Jarwis.getfootertitle().subscribe(
          data=>{
          this.ftitle = data; 
          this.footer=this.ftitle[0] 
          console.log(this.footer)      
          
          }
        )
  }
  navigates(id){
    this.router.navigate(['Category/'+id+'']);
    this.ngOnInit()
  }
  navigate(id){
    this.router.navigate(['Content/'+id+'']);
    this.ngOnInit()
  }

  likes(id){
    // console.log(id)
    this.Jarwis.like(id).subscribe(
      data =>  {
        let snackBarRef = this.snackBar.open("like", 'Dismiss', {
          duration: 2000
        }) 
        this.ngOnInit()
      }
      
      );
      }
      follow(id){
        // this.follows=this.article
        let follows = this.article.filter(c => c.id == id);
        let follow=follows[0]
        let follow_id=follow.user_id
         console.log(follow_id)
        this.Jarwis.follow({title_id:id,followed_user_id:follow_id}).subscribe(
          data =>  {
            let snackBarRef = this.snackBar.open("follow", 'Dismiss', {
              duration: 2000
            }) 
            console.log(data)
            this.ngOnInit()
          }
          
          );
          }

          refresh(){          
            this.ngOnInit()
          }

}
