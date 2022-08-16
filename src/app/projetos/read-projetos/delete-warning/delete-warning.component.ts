import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AvisoService } from 'src/app/components/aviso.service';
import { HttpClient } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent{
  
  urlProjeto = "https://api-go-projects.herokuapp.com/projetos/";
  constructor(
    private dialog: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: {id_projeto: number},
    private http: HttpClient,
    private message: AvisoService
  ) { }

  fechaDialog() {
    this.dialog.close();
  }

  deletaProjeto(id_projeto: any) {    
    this.http.delete(`${this.urlProjeto}${id_projeto}`).subscribe(() => {
      this.message.showMsg({ msg: `Projeto deletado com sucesso\nFavor recarregar a página` });
    });
    this.fechaDialog();
  }

}
