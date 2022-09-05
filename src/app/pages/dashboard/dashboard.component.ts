import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Equipe } from "src/app/models/equipe.model";
import { Membro } from "src/app/models/membro.model";
import { Projeto } from "src/app/models/projeto.model";
import { Tarefa } from "src/app/models/tarefa.model";
import { CreateEquipesService } from "src/app/services/equipes.service";
import { CreateMembrosService } from "src/app/services/membros.service";
import { CreateProjetosService } from "src/app/services/projetos.service";
import { CreateTarefasService } from "src/app/services/tarefas.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  equipes: Equipe[] = [];
  membros: Membro[] = [];
  projetos: Projeto[] = [];
  tarefas: Tarefa[] = [];

  constructor(
    private http: HttpClient,
    private equipeService: CreateEquipesService,
    private membroService: CreateMembrosService,
    private projetoService: CreateProjetosService,
    private tarefaService: CreateTarefasService
  ) {}

  ngOnInit(): void {
    this.equipeService.read().subscribe((equipe) => {
      this.equipes = equipe;
    });
    this.membroService.read().subscribe((membros) => {
      this.membros = membros;
    });
    this.projetoService.read().subscribe((projetos) => {
      this.projetos = projetos;
    });
    this.tarefaService.read().subscribe((tarefas) => {
      this.tarefas = tarefas;
    });
  }
}
