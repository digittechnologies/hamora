import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../service/jarwis.service';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl,FormArray} from "@angular/forms";
import { MatSnackBar } from '@angular/material';

import { MapServiceService } from 'src/app/map-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
public res:any;
public response:any;
public selectedid:any;
public location:any;

public form = {
category_id: null,
name_title:'',
location:null,
about: 'Content',
t_image:null,
contents:null,
}
  disabled=false;
  sav= 'Contribute';
  id: any;
  data: any;
  public orderForm: FormGroup;
  public items = [];
  image: any;
  constructor(private Jarwis: JarwisService, private router: Router, private formBuilder: FormBuilder,public snackBar: MatSnackBar,private coordGet: MapServiceService ) { }
  dataChanged(event){
    this.form.category_id=event
   this.id=this.form.category_id
     this.Jarwis.post(this.id).subscribe(data=>{
        this.response = data;
     
     
      })
  }
 
  onSubmit() {
    this.form.contents=this.items  
    this.Jarwis.content(this.form).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
   );
   this.disabled=true;
    this.sav= 'Posting';
  }
  handleError(error: any): void {
    this.disabled=false;
    this.sav= 'Contribut';
  }

  
  
  handleResponse(data) {    
    let snackBarRef = this.snackBar.open('Save Successfully', 'Dismiss', {
      duration: 2000
    })
   this.disabled=true;
    this.router.navigateByUrl('/User/(side:Details)');
  }

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
  
  uploadFiles(event){
    let files =event.target.files[0];
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {
      // body...
      this.form.t_image = reader.result;
   
    }
    reader.readAsDataURL(files);
  }
  ngOnInit() {
    
    
      this.Jarwis.getact().subscribe(
        data=>{
       
        this.res = data;  
        
        console.log(this.res)
        }
      )
      this.orderForm =  this.formBuilder.group({
        header: '',
        content: '',
        // list: '',
        // c_image:''
      }); 
    } 
   
  
  getCoord(coord) {
    this.coordGet.getLocality(coord).subscribe(data=>{

      let lat = this.data.results[0].geometry.location.lat;
      let long = this.data.results[0].geometry.location.lng;
      console.log('lat= '+ lat +' and long= '+ long );
  })
}
}

