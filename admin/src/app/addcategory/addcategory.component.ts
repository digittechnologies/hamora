import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { EditcatComponent } from '../editcat/editcat.component';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  isPopupOpened = true;
  public form = {
    catname: null,
    destription:null,
    activity_id:null,
  }
  public res:any;
  public result;
  p:any;
  message: any;
  error: any;
  catres: any;
  detail: any;
  aid: any;
  response: any;
  cat: any;
  tres: any;
  cres: any;
  cress: any;
  constructor(private Jarwis: JarwisService, public snackBar: MatSnackBar,private dialog?: MatDialog, ) { }


  onSubmit() {
    // console.log(this.form)
    this.Jarwis.cate(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      );
    
  }
  handleResponse(data) {
    // this.message='Save successfully'
  //  this.router.navigateByUrl('/User');
  this.ngOnInit()
    
    let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
      duration: 2000
    }) 
  }

  handleError(error) {
    this.error = error.error.error;
  }

  catetrash(id){
    this.Jarwis.catetrash(id).subscribe(
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
  editCategory(id: number) {

    this.isPopupOpened = true;
    this.Jarwis.getcat().subscribe(
      data=>{
      
      this.cress = data;  
      // this.roleid=this.res[0]

    //  console.log(this.cress);

      }
    ) 
    
    // console.log(this.cress)
    let category = this.cress.filter(c => c.id == id);
    // console.log(id);
    console.log(category[0])
   const dialogRef = this.dialog.open(EditcatComponent, {
     minWidth: '50%',
     data: {category: category[0]}
     
   });
  
   

    dialogRef.afterClosed().subscribe(result => {
     this.isPopupOpened = false;
     if(result == 'undefined'){

     }else{
      this.Jarwis.cateupdate(result).subscribe(
        data =>  {
          let snackBarRef = this.snackBar.open("Save successfully", 'Dismiss', {
            duration: 2000
          }) 
        }
        
        );
      // console.log(result)
       this.ngOnInit()
     }
     this.ngOnInit()
    });
  
  
  }
   

  ngOnInit() {
    this.Jarwis.getact().subscribe(
      data=>{
      
      this.res = data;  
      // this.roleid=this.res[0]

      // console.log(this.res);

      }
    )   
    
    this.Jarwis.getcat().subscribe(
      data=>{
      
      this.cres = data;  
      // this.roleid=this.res[0]

      // console.log(this.cres);

      }
    )   
    
  }
  
}
