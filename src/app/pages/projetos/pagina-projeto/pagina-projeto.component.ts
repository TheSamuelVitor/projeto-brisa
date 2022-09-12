import { DeleteWarningComponentProjeto } from './delete-warning/delete-warning.component';
import { CreateProjetosService } from "src/app/services/projetos.service";
import { ProjetoComInfo } from "./../../../models/projeto.model";
import { Tarefa } from "src/app/models/tarefa.model";

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagina-projeto",
  templateUrl: "./pagina-projeto.component.html",
  styleUrls: ["./pagina-projeto.component.css"],
})
export class PaginaProjetoComponent implements OnInit {
  tarefas: Tarefa[] = [];

  projeto: ProjetoComInfo = {
    id_projeto: 0,
    nome_projeto: "",
    descricao: "",
    id_equipe: 0,
    nome_equipe: "",
    tarefas: [],
  };

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private projetoService: CreateProjetosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.projetoService.getById(`${id}`).subscribe((data) => {
      this.projeto = data;
      this.tarefas = data.tarefas;
    });
  }

  goBack() {
    history.back();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id_projeto: any
  ): void {
    this.dialog.open(DeleteWarningComponentProjeto, {
      data: id_projeto,
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
