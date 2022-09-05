import { HttpClient } from "@angular/common/http";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, Inject, OnInit } from "@angular/core";
import { AvisoService } from "src/app/services/aviso.service";

@Component({
  selector: "app-delete-warning",
  templateUrl: "./delete-warning.component.html",
  styleUrls: ["./delete-warning.component.css"],
})
export class DeleteWarningComponentMembros {
  url = "https://api-go-projects.herokuapp.com/membros/";

  constructor(
    public dialogRef: MatDialogRef<DeleteWarningComponentMembros>,
    @Inject(MAT_DIALOG_DATA) public data: { id_membro: number },
    private http: HttpClient,
    private Aviso: AvisoService
  ) {}

  fecha() {
    this.dialogRef.close();
  }

  deletaMembro(id_membro: any) {
    this.http.delete(`${this.url}${id_membro}`).subscribe(() => {
      this.Aviso.showMsg({
        msg: "Membro deletado com sucesso\nFavor recarregar a pagina",
      });
    });
    this.fecha();
  }
}
