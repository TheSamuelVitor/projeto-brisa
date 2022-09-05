import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { Membro } from "src/app/models/membro.model";
import { Projeto } from "src/app/models/projeto.model";
import { Tarefa } from "src/app/models/tarefa.model";
import { AvisoService } from "src/app/services/aviso.service";
import { CreateEquipesService } from "src/app/services/equipes.service";
import { CreateMembrosService } from "src/app/services/membros.service";
import { CreateProjetosService } from "src/app/services/projetos.service";
import { CreateTarefasService } from "src/app/services/tarefas.service";

@Component({
  selector: "app-create-tarefas",
  templateUrl: "./create-tarefas.component.html",
  styleUrls: ["./create-tarefas.component.css"],
})
export class CreateTarefasComponent implements OnInit {
  formulario = this.formBuilder.group({
    nome: [null, Validators.required],
    descricao: [null],
    membro: [null, Validators.required],
    projeto: [null, Validators.required],
  });

  tarefa: Tarefa = {
    nome_tarefa: "",
    descricao: "",
    id_membro: 0,
    id_projeto: 0,
  };

  membros: Observable<Membro[]> | undefined;
  projetos: Observable<Projeto[]> | undefined;

  constructor(
    private router: Router,
    private projetoService: CreateProjetosService,
    private equipeService: CreateEquipesService,
    private membroService: CreateMembrosService,
    private createTarefa: CreateTarefasService,
    private formBuilder: FormBuilder,
    private avisoMsg: AvisoService
  ) {}

  ngOnInit(): void {
    this.membros = this.membroService.read();
    this.projetos = this.projetoService.read();
  }

  goBack(): void {
    this.router.navigate(["tarefas"]);
  }

  onSubmit(): void {
    this.createTarefa.create(this.tarefa).subscribe(() => {
      this.goBack();
      this.avisoMsg.showMsg({ msg: "Tarefa criada com sucesso" });
    });
  }
}
