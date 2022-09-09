import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { environment } from "src/environments/environment.prod";
import { AvisoService } from "src/app/services/aviso.service";
import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-delete-warning",
  templateUrl: "./delete-warning.component.html",
  styleUrls: ["./delete-warning.component.css"],
})
export class DeleteWarningComponentMembros {
  url = `${environment.apiUrl}membros/`;

  constructor(
    public dialogRef: MatDialogRef<DeleteWarningComponentMembros>,
    @Inject(MAT_DIALOG_DATA) public data: { id_membro: number },
    private http: HttpClient,
    private Aviso: AvisoService,
    private route: Router
  ) {}

  fecha() {
    this.dialogRef.close();
  }

  deletaMembro(id_membro: any) {
    this.http.delete(`${this.url}${id_membro}`).subscribe(() => {
      this.Aviso.showMsg({
        msg: "Membro deletado com sucesso",
      });
    });
    this.route.navigate(["membros"]);
    this.fecha();
  }
}
