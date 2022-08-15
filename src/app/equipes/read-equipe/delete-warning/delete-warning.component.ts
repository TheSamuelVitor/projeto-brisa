import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AvisoService } from 'src/app/components/aviso.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent {

  baseUrl = `${environment.baseApiUrl}equipes/`
  constructor(
    public dialogRef: MatDialogRef<DeleteWarningComponent>,
    public message: AvisoService,
    public http: HttpClient
  ) {}

  fechaDialog() {
    this.dialogRef.close();
  }

  deletaEquipe() {
    console.log('é chamado')
    this.fechaDialog()
  }

}
