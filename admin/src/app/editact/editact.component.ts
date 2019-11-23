import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editact',
  templateUrl: './editact.component.html',
  styleUrls: ['./editact.component.css']
})
export class EditactComponent implements OnInit {
  public _catForm: FormGroup;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EditactComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }


  onNoClick(): void {
      this.dialogRef.close();
     }
  
    ngOnInit() {
      console.log(this.data);
    this._catForm = this._formBuilder.group({
        id: [this.data.category.id],
        actname: [ this.data.category.actname],
        destription: [this.data.category.destription ]
       
      });
    }
  
    onSubmit(){
      this.dialogRef.close(this._catForm.value)
      // this.ngOnInit()
    }
}
