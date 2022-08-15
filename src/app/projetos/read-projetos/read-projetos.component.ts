import { DeleteWarningComponent } from "./delete-warning/delete-warning.component";
import { MatDialog } from "@angular/material/dialog";
import { CreateProjetosService } from "src/app/components/projetos/projetos.service";
import { Projeto } from "./../../components/projetos/projeto.model";
import { AvisoService } from "./../../components/aviso.service";

import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-read-projetos",
  templateUrl: "./read-projetos.component.html",
  styleUrls: ["./read-projetos.component.css"],
})
export class ReadProjetosComponent implements OnInit {
  projetos: Projeto[] = [];
  urlProjeto = "https://api-go-projects.herokuapp.com/projetos/";

  constructor(
    private projetoService: CreateProjetosService,
    private http: HttpClient,
    private message: AvisoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.projetoService.read().subscribe((projetos) => {
      this.projetos = projetos;
    });
  }

  atualizaProjeto() {
    this.message.showMsg({ msg: "Função em construção" });
  }

  deletaProjeto(id_projeto: any) {
    this.http.delete(`${this.urlProjeto}${id_projeto}`).subscribe(() => {
      this.message.showMsg({ msg: `Projeto deletado com sucesso` });
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DeleteWarningComponent, {
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
