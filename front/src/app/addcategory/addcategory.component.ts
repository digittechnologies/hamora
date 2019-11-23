import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../service/jarwis.service';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  public form = {
    catname: null,
    destription:null,
    activity_id:null,
  }
  public res:any;
  message: any;
  error: any;
  constructor(private Jarwis: JarwisService,) { }


  onSubmit() {
    console.log(this.form)
    this.Jarwis.cate(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
      );
    
  }
  handleResponse(data) {
    this.message='Save successfully'
  //  this.router.navigateByUrl('/User');
  }

  handleError(error) {
    this.error = error.error.error;
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
