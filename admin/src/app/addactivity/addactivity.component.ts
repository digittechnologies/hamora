import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { EditactComponent } from '../editact/editact.component';
@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
  isPopupOpened = true;
  public form = {
    actname: null,
    destription:null,
    // activity_id:null,
  }
  p:any;
  public res:any;
  message: any;
  error: any;
  cress: any;
  constructor(private Jarwis: JarwisService,  public snackBar: MatSnackBar,private dialog?: MatDialog,  ) { }


  onSubmit() {
    console.log(this.form)
    this.Jarwis.activity(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      );
    
  }
  handleResponse(data) {
    // this.message='Save successfully'
    this.ngOnInit()
    
    let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
      duration: 2000
    }) 
  //  this.router.navigateByUrl('/User');
  }

  handleError(error) {
    // this.error = error.error.error;
  }

  acttrash(id){
    this.Jarwis.acttrash(id).subscribe(
     data => this.handleRespon(data),
       error => this.handleErr(error)
  );
   }
 
   handleErr(error: any): void {
   
   }
   handleRespon(data) { 
    //  console.log(data) 
    let snackBarRef = this.snackBar.open("Successfully move to trash", 'Dismiss', {
     duration: 2000
   })  
  
   this.ngOnInit()
   
   }
  editAct(id: number) {

    this.isPopupOpened = true;
    this.Jarwis.getact().subscribe(
      data=>{
      
      this.cress = data;       

      }
    ) 
    
    // console.log(this.cress)
    let category = this.cress.filter(c => c.id == id);
    
   const dialogRef = this.dialog.open(EditactComponent, {
     minWidth: '50%',
     data: {category: category[0]}
     
   });
  
   

    dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
     if(result == 'undefined'){

     }else{
      this.Jarwis.actupdate(result).subscribe(
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
   


  ngOnInit() {
    this.Jarwis.getact().subscribe(
      data=>{
      // console.log(data);
      this.res = data;  
      // this.roleid=this.res[0]
      console.log(this.res)
      }
    )
    
  }

}
