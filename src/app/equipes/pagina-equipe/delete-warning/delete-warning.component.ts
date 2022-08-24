import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { AvisoService } from "src/app/components/aviso.service";
import { environment } from "src/environments/environment.prod";

@Component({
  selector: "app-delete-warning",
  templateUrl: "./delete-warning.component.html",
  styleUrls: ["./delete-warning.component.css"],
})
export class DeleteWarningComponent {
  baseUrl = `${environment.apiUrl}equipes/`;

  constructor(
    public dialogRef: MatDialogRef<DeleteWarningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id_equipe: any },
    public message: AvisoService,
    public http: HttpClient,
    public route: Router
  ) {}

  fechaDialog() {
    this.dialogRef.close();
  }

  deletaEquipe(id_equipe: any) {
    this.http.delete(`${this.baseUrl}${id_equipe}`).subscribe(() => {
      this.message.showMsg({
        msg: `Equipe deletada com sucesso. Favor recarregar a página`,
      });
    });
    this.fechaDialog();
  }
}
