import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  public _catForm: FormGroup;
  c_image: any;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<ContributeComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    console.log(this.data);
  this._catForm = this._formBuilder.group({
      content_id: [this.data.contribute.id],
      header: [ this.data.contribute.header],
      content: [this.data.contribute.content],
     quote:[this.data.contribute.quote],
     title_id:[this.data.contribute.name_id]
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
