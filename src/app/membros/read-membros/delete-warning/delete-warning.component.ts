import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent{

  constructor(
    public dialogRef: MatDialogRef<DeleteWarningComponent>
    ) {}

  fecha() {
    this.dialogRef.close();
  }
}
