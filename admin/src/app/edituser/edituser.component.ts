import { Component, OnInit , Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  public _userForm: FormGroup;
  constructor(private _formBuilder:FormBuilder,private dialogRef: MatDialogRef<EdituserComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }
 
  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
    console.log(this.data);
  this._userForm = this._formBuilder.group({
      id: [this.data.user.id],
      firstname: [ this.data.user.firstname],
      middlename: [this.data.user.middlename ],
     lastname: [ this.data.user.lastname],
     phone: [ this.data.user.phone  ],
     family:[this.data.user.family],
     role_id:[this.data.user.role_id],
     address:[this.data.user.address]
    });
  }
  onSubmit(){
    this.dialogRef.close(this._userForm.value)
    // this.ngOnInit()
  }
}
