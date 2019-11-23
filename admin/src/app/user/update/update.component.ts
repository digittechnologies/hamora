import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/service/jarwis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public form = {
    category_id: null,
    name_title:'',
    location:null,
    about: 'Content',
    t_image:null,
    contents:null,
    }
      disabled=false;
      sav= 'Update';
      id: any;
      data: any;
      public orderForm: FormGroup;
      public items = [];
      image: any;


      res: any;
      response: any;
      contents: any;
      actname: any;
      catname: any;
      name: any;
      public detail;
      public loggedIn: boolean;

      comment: any;
      title: any;
      dates: any;
      about: any;
      uimage: any;
      marker: google.maps.Marker;
      error: any;
      cat: any;
      result: Object;
  bio: any;
  location: any;

  constructor(private Jarwis: JarwisService, private router: Router, public actRoute: ActivatedRoute,  private formBuilder: FormBuilder,public snackBar: MatSnackBar ) { }

  getLength(): Number{
    return this.items.length
  }
  addItem(): void{
    let header = this.orderForm.value.header;
    let content = this.orderForm.value.content;

    let existingItem = this.items.filter(i => i.header==header && i.content == content)
    if(existingItem.length == 0){
      let id = this.items.length;
      this.items.push({id: id,header: header, content: content})      
      
    }else{
      let snackBarRef = this.snackBar.open('Information already exist', 'Dismiss', {
        duration: 2000
      })
    }
  }

 

  deleteItem(id): void{
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].id == id){
        this.items.splice(0,1)
      }
      
    }
  }

  ngOnInit() {
    this.orderForm =  this.formBuilder.group({
      header: '',
      content: '',
      // list: '',
      // c_image:''
    });
    

    this.actRoute.paramMap.subscribe((params => {  
      
      var id= this.actRoute.snapshot.params['id'];
      // id = data[x].id;  

      if(typeof params.get('id') == 'string') {         
        
        this.Jarwis.getalltitle().subscribe(data=>{
            for(let x in data){
              data[x]              
              if(data[x].name_title==params.get('id') || data[x].location==params.get('id')){
                this.detail = data[x];                
                id = data[x].id;
                
                    this.Jarwis.getcontent(id).subscribe(data=>{
                    this.response = data;
                   
                    this.res=this.response.name[0];
                    this.actname=this.res.actname;
                    this.catname=this.res.catname;                    
                    this.title=this.res.name_title;
                    this.about=this.res.about;
                    this.dates=this.res.created_at;
                    this.bio=this.res.familybackground;
                    this.name=this.res.firstname+" "+this.res.lastname+" "+this.res.middlename
                   
                    this.contents=this.response.content
                    this.comment=this.response.comment                    
                    
                    this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                    this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                     
                    })
                
              }

              else {            
              
          
                // var id = params.get('id');
                this.Jarwis.getcontent(id).subscribe(data=>{
                  this.response = data;
                  console.log(this.response)
                  this.res=this.response.name[0];
                  this.actname=this.res.actname;
                  this.catname=this.res.catname;
                  this.location=this.res.location;                  
                  this.title=this.res.name_title;
                  this.about=this.res.about;
                  this.dates=this.res.created_at;
                  // this.cat=this.response.name
                  this.name=this.res.firstname+" "+this.res.lastname+" "+this.res.middlename
                  // console.log(this.cat)
                  this.contents=this.response.content
                  console.log(this.contents);
                  this.comment=this.response.comment
                
                  this.image='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.t_image
                  this.uimage='https://sabiogun.jtcheck.com/sce-ogun/backend/public/upload/uploads/'+this.res.image;
                   
                  })
              }

            }
          })
          
        }

        
    // this.Jarwis.productdetail2(id).subscribe(data=>{
    //   this.response2 = data;
     

   }));
    
  }

  onSubmit() {
    this.form.contents=this.items  
    this.Jarwis.content(this.form).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
   );
   this.disabled=true;
    this.sav= 'Updating';
  }
  handleError(error: any): void {
    this.disabled=false;
    this.sav= 'Update';
  }

  
  
  handleResponse(data) {    
    let snackBarRef = this.snackBar.open('Save Successfully', 'Dismiss', {
      duration: 2000
    })
   this.disabled=true;
    this.router.navigateByUrl('/User/(side:Details)');
  }

}
