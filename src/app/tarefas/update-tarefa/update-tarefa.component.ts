import { CreateProjetosService } from "src/app/components/projetos/projetos.service";
import { CreateTarefasService } from "src/app/components/tarefas/tarefas.service";
import { CreateMembrosService } from "./../../components/membros/membros.service";
import { CreateEquipesService } from "src/app/components/equipes/equipes.service";
import { Projeto } from "./../../components/projetos/projeto.model";
import { Membro } from "./../../components/membros/membro.model";
import { Tarefa } from "src/app/components/tarefas/tarefa.model";
import { AvisoService } from "./../../components/aviso.service";

import { Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-update-tarefa",
  templateUrl: "./update-tarefa.component.html",
  styleUrls: ["./update-tarefa.component.css"],
})
export class UpdateTarefaComponent implements OnInit {
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
    private projetoService: CreateProjetosService,
    private equipeService: CreateEquipesService,
    private membroService: CreateMembrosService,
    private createTarefa: CreateTarefasService,
    private formBuilder: FormBuilder,
    private avisoMsg: AvisoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.membros = this.membroService.read();
    this.projetos = this.projetoService.read();
    const id = this.route.snapshot.paramMap.get("id");
    this.createTarefa.getById(`${id}`).subscribe((tarefa) => {
      this.tarefa = tarefa;
    });
  }

  goBack(): void {
    this.router.navigate(["tarefas"]);
  }

  onSubmit(): void {
    this.createTarefa.update(this.tarefa).subscribe(() => {
      this.avisoMsg.showMsg({ msg: "Tarefa atualizada com sucesso" });
      this.goBack();
    });
  }
}
