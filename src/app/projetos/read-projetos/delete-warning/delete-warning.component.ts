import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent{

  constructor(
    private dialog: DialogRef
  ) { }

  fechaDialog() {
    this.dialog.close();
  }

}
