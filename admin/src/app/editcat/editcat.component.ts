import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { EditcatComponent } from '../editcat/editcat.component';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent implements OnInit {
public _catForm: FormGroup;

  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditcatComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }


onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    console.log(this.data);
  this._catForm = this._formBuilder.group({
      id: [this.data.category.id],
      catname: [ this.data.category.catname],
      destription: [this.data.category.destription ]
     // Contact: [ this.data.Contact,],
     // Email: [ this.data.Email , ],
    });
  }

  onSubmit(){
    this.dialogRef.close(this._catForm.value)
    // this.ngOnInit()
  }
}
