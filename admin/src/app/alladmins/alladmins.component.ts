import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { EdituserComponent } from '../edituser/edituser.component';
@Component({
  selector: 'app-alladmins',
  templateUrl: './alladmins.component.html',
  styleUrls: ['./alladmins.component.css']
})
export class AlladminsComponent implements OnInit {
  p:any;
  res: any;
  length: any;
  isPopupOpened = true;
  constructor(private Jarwis: JarwisService,public snackBar: MatSnackBar,private dialog?: MatDialog,) { }
  editusers(id){
    this.isPopupOpened = true;
  //  console.log(id)
   this.Jarwis.getadmins().subscribe(
    data=>{
    
    this.res = data;  
  
    }
  )   
  let user = this.res.filter(c => c.id == id);
    // console.log(id);
    console.log(user[0])
   const dialogRef = this.dialog.open(EdituserComponent, {
     minWidth: '50%',
     data: {user: user[0]}
     
   });

   dialogRef.afterClosed().subscribe(result => {
    this.isPopupOpened = false;
    if(result == 'undefined'){

    }else{
     this.Jarwis.userupdate(result).subscribe(
       data =>  {
         let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
           duration: 2000
         }) 
       }
       
       );
      // console.log(result)
      this.ngOnInit()
    }
    // this.ngOnInit()
   });
 
  }
  ngOnInit() {

    this.Jarwis.getadmins().subscribe(
      data=>{
      
      this.res = data;  
      // this.roleid=this.res[0]
      this.length= this.res.length  
      console.log(this.res);

      }
    ) 
  }
  usertrash(id){
    this.Jarwis.usertrash(id).subscribe(
     data => this.handleResponse(data),
       error => this.handleErr(error)
  );
   }
 
   handleErr(error: any): void {
   
   }
   handleResponse(data) { 
     console.log(data) 
    let snackBarRef = this.snackBar.open("Successfully move to trash", 'Dismiss', {
     duration: 2000
   })  
  
   this.ngOnInit()
   
   }
}
