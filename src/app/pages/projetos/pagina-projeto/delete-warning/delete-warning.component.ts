import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { DialogRef } from "@angular/cdk/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import { AvisoService } from "src/app/services/aviso.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-delete-warning",
  templateUrl: "./delete-warning.component.html",
  styleUrls: ["./delete-warning.component.css"],
})
export class DeleteWarningComponentProjeto {
  urlProjeto = `${environment.apiUrl}projetos/`;
  constructor(
    private dialog: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: { id_projeto: number },
    private http: HttpClient,
    private message: AvisoService,
    private router: Router
  ) {}

  fechaDialog() {
    this.dialog.close();
  }

  deletaProjeto(id_projeto: any) {
    this.http.delete(`${this.urlProjeto}${id_projeto}`).subscribe(() => {
      this.message.showMsg({
        msg: `Projeto deletado com sucesso\nFavor recarregar a página`,
      });
    });
    this.fechaDialog();
    this.router.navigate(['/projetos']);
  }
}
