

import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Equipe } from "src/app/models/equipe.model";
import { CreateEquipesService } from "src/app/services/equipes.service";
import { AvisoService } from "src/app/services/aviso.service";

@Component({
  selector: "app-create-equipe",
  templateUrl: "./create-equipe.component.html",
  styleUrls: ["./create-equipe.component.css"],
})
export class CreateEquipeComponent implements OnInit {
  formulario = this.formBuilder.group({
    nome: [null, Validators.required],
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

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(["equipes"]);
  }

  onSubmit(): void {
    this.createEquipeService.create({ equipe: this.equipe }).subscribe(() => {
      this.aviso.showMsg({ msg: "Equipe criada com sucesso" });
      this.goBack();
    });
  }

  limpar(): void {
    this.formulario.reset();
  }
}
