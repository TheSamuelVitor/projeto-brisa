import { CreateEquipesService } from "src/app/components/equipes/equipes.service";
import { Equipe } from "src/app/components/equipes/equipe.model";
import { AvisoService } from './../../components/aviso.service';

import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-equipe",
  templateUrl: "./update-equipe.component.html",
  styleUrls: ["./update-equipe.component.css"],
})
export class UpdateEquipeComponent implements OnInit {
  constructor(
    private equipeService: CreateEquipesService,
    private route: ActivatedRoute,
    private aviso: AvisoService,
    private form: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.equipeService.getById({ id: `${id}` }).subscribe((equipe) => {
      this.equipe = equipe;
    });
  }

  formulario = this.form.group({
    nome: [null, Validators.required],
  });

  equipe: Equipe = {
    nome_equipe: ''
  };

  onSubmit(): void {
    this.equipeService.update(this.equipe).subscribe(
      () => {
        this.aviso.showMsg({ msg: 'Equipe atualizada com sucesso' })
        this.goBack()
      }
    )
  }

  goBack(): void {
    this.router.navigate(["/equipes"]);
  }

  limpar(): void {
    this.formulario.reset();
  }
}
