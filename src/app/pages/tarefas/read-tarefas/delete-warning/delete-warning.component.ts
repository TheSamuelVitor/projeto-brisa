import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AvisoService } from 'src/app/services/aviso.service';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent {

  constructor(
    private dialog: DialogRef,
    private http: HttpClient,
    private message: AvisoService,
    @Inject(MAT_DIALOG_DATA) public data: {id_tarefa: number },
  ) { }

  fechaDialog() {
    this.dialog.close();
  }

  deletaTarefa(id_tarefa: any) {
    this.http.delete(`${environment.apiUrl}tarefas/${id_tarefa}`).subscribe(
      () => {
        this.message.showMsg({ msg: "Tarefa deletada com sucesso\nFavor recarregar a página "});
      }
    )
    this.fechaDialog();
  };
}
