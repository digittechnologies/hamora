import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalComponent>,) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  deletea(id){
    this.dialogRef.close(id)
  }
}
