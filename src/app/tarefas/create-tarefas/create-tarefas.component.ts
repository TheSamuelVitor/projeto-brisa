import { CreateEquipesService } from "src/app/components/equipes/equipes.service";
import { CreateProjetosService } from "src/app/components/projetos/projetos.service";
import { CreateTarefasService } from "src/app/components/tarefas/tarefas.service";
import { CreateMembrosService } from "../../components/membros/membros.service";
import { Projeto } from "./../../components/projetos/projeto.model";
import { Membro } from "./../../components/membros/membro.model";
import { Tarefa } from "./../../components/tarefas/tarefa.model";
import { AvisoService } from "./../../components/aviso.service";

import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

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
