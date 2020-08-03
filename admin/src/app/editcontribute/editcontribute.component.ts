import { Component, OnInit , Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcontribute',
  templateUrl: './editcontribute.component.html',
  styleUrls: ['./editcontribute.component.css']
})
export class EditcontributeComponent implements OnInit {
  c_image: any;
  paramsid: any;
  constructor(public actRoute: ActivatedRoute,private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditcontributeComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
  public _catForm: FormGroup;
  
  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
      
  // this.actRoute.paramMap.subscribe((params => {  
      
  //   this.paramsid= this.actRoute.snapshot.params['id'];
  // }));
  
    console.log(this.data);
  this._catForm = this._formBuilder.group({
      id: [this.data.category.id],
      header: [ this.data.category.header],
      content: [this.data.category.content ],
      quote: [this.data.category.quote ],
      title_id:[this.data.category.title_id],
      content_id:[this.data.category.content_id]
    });
  }
  uploadFile(event){
    let files =event.target.files[0];
    let reader = new FileReader();
    let vm = this;
    reader.onloadend =()=> {
      // body...
      this.c_image = reader.result;
   
    }
    reader.readAsDataURL(files);
  }
  onSubmit(){
    this.dialogRef.close({formdata:this._catForm.value,c_image:this.c_image})
    // this.ngOnInit()
  }
  
}
