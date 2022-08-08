import { CreateEquipesService } from "./../../components/equipes/create-equipes.service";
import { CreateMembrosService } from "./../../components/membros/create-membros.service";
import { Equipe } from "./../../components/equipes/equipe.model";
import { Membro } from "./../../components/membros/membro.model";
import { AvisoService } from "./../../components/aviso.service";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-create-membros",
  templateUrl: "./create-membros.component.html",
  styleUrls: ["./create-membros.component.css"],
})
export class CreateMembrosComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: [null, Validators.required],
    funcao: [null, Validators.required],
    equipe: [null, Validators.required]
  })

  membro: Membro = {
    nome_membro: "",
    funcao: "",
    id_equipe: 0,
  };

  equipes: Observable<Equipe[]> | undefined;

  constructor(
    private createMembroService: CreateMembrosService,
    private equipesService: CreateEquipesService,
    private formBuilder: FormBuilder,
    private avisoMsg: AvisoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipes = this.equipesService.read();
  }

  goBack(): void {
    this.router.navigate(["membros"]);
  }

  salvar(): void {
    this.createMembroService.create(this.membro).subscribe(() => {
      this.goBack();
      this.avisoMsg.showMsg({ msg: " Membro criado com sucesso " });
    });
  }

  onSubmit(): void {

  }
}
