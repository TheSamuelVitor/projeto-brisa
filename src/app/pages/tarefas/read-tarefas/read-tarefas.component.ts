import { DeleteWarningComponentTarefas } from "./delete-warning/delete-warning.component";
import { CreateTarefasService } from "src/app/services/tarefas.service";
import { environment } from 'src/environments/environment.prod';
import { AvisoService } from "src/app/services/aviso.service";
import { Tarefa } from "src/app/models/tarefa.model";

import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-read-tarefas",
  templateUrl: "./read-tarefas.component.html",
  styleUrls: ["./read-tarefas.component.css"],
})
export class ReadTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  tarefasUrl = `${environment.apiUrl}tarefas/`;

  constructor(
    private tarefaService: CreateTarefasService,
    private message: AvisoService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tarefaService.read().subscribe((tarefas) => {
      this.tarefas = tarefas;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id_tarefa: any
  ): void {
    this.dialog.open(DeleteWarningComponentTarefas, {
      data: id_tarefa,
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
