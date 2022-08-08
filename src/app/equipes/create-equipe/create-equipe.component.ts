import { CreateEquipesService } from "./../../components/equipes/create-equipes.service";
import { Equipe } from "./../../components/equipes/equipe.model";
import { AvisoService } from "./../../components/aviso.service";

import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-equipe",
  templateUrl: "./create-equipe.component.html",
  styleUrls: ["./create-equipe.component.css"],
})
export class CreateEquipeComponent implements OnInit {
  formulario = this.formBuilder.group({
    nome: [null, Validators.required]
  });

  equipe: Equipe = {
    nome_equipe: "",
  };

  constructor(
    private createEquipeService: CreateEquipesService,
    private formBuilder: FormBuilder,
    private aviso: AvisoService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(["equipes"]);
  }

  salvar(): void {
    this.createEquipeService.create(this.equipe).subscribe(() => {
      this.aviso.showMsg({ msg: "Equipe criada com sucesso" });
      this.goBack();
    });
  }

  limpar(): void {
    this.formulario.reset()
  }

  onSubmit(): void {
    console.log(this.formulario.controls)
    this.formulario.reset()
  }
}
