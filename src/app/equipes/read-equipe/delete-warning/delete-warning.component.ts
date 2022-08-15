import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteWarningComponent>
  ) {}

  fechaDialog() {
    this.dialogRef.close();
  }

}
