import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { EditcontributeComponent } from '../editcontribute/editcontribute.component';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  res: any;
  isPopupOpened = true;
  resp: any;
  leng: any;
  lengt: any;
  resimg: any;
  lengimg: any;
  url:any;
  appUrl:any;
  constructor(private Jarwis: JarwisService, public snackBar: MatSnackBar,private dialog?: MatDialog, ) { }
  editcontribute(id){
    this.isPopupOpened = true;
    this.Jarwis.getContribute().subscribe(
      data=>{
      
      this.res = data;  
      
      }
    )
    let category = this.res.filter(c => c.id == id);
    
    const dialogRef = this.dialog.open(EditcontributeComponent, {
      minWidth: '50%',
      data: {category: category[0]}
      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      if(result == 'undefined'){
 
      }else{
       this.Jarwis.editcontribute(result).subscribe(
         data =>  {
           let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
             duration: 2000
           }) 
         }
         );
      //  console.log(result)
        this.ngOnInit()
      }
     });
   
  }
  editlivecontribute(id){
    this.isPopupOpened = true;
    this.Jarwis.livecontribute().subscribe(
      data=>{
      
      this.resp = data;  
      
      }
    )
    let category = this.resp.filter(c => c.id == id);
    
    const dialogRef = this.dialog.open(EditcontributeComponent, {
      minWidth: '50%',
      data: {category: category[0]}
      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      if(result == 'undefined'){
 
      }else{
       this.Jarwis.editcontribute(result).subscribe(
         data =>  {
           let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
             duration: 2000
           }) 
         }
         );
       console.log(result)
        this.ngOnInit()
      }
     });
   
  }
  editimgcontribute(id){
    this.Jarwis.editimgcontribute(id).subscribe(
      data =>  {
        let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
          duration: 2000
        }) 
      }
      );
    
   this.ngOnInit()
  }
  ngOnInit() {
    this.Jarwis.geturl().subscribe(
      data=>{
       
       this.url= data;
      let y:any = this.url.url;
       this.appUrl = y[0].url;
    //  console.log("url",this.appUrl);
      }
    )
    this.Jarwis.livecontribute().subscribe(
      data =>  {
       this.resp=data;
       this.lengt=this.resp.length;
      }
      );
    this.Jarwis.getContribute().subscribe(
      data=>{
      
      this.res = data;  
      this.leng=this.res.length;
      }
    )
    this.Jarwis.getimgContribute().subscribe(
      data=>{
      
      this.resimg = data;  
      this.lengimg=this.resimg.length;
      // console.log(this.resimg)
      }
    )
  }

}
