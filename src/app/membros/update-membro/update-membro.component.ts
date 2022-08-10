import { CreateMembrosService } from "./../../components/membros/membros.service";
import { CreateEquipesService } from "src/app/components/equipes/equipes.service";
import { Equipe } from "./../../components/equipes/equipe.model";
import { Membro } from "./../../components/membros/membro.model";

import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-update-membro",
  templateUrl: "./update-membro.component.html",
  styleUrls: ["./update-membro.component.css"],
})
export class UpdateMembroComponent implements OnInit {
  formulario = this.formBuilder.group({
    nome: [null, Validators.required],
    equipe: [null, Validators.required],
  });

  membro: Membro = {
    nome_membro: "",
    funcao: "",
    id_equipe: 0,
  };

  equipes: Observable<Equipe[]> | undefined;

  constructor(
    private membroService: CreateMembrosService,
    private equipesService: CreateEquipesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.equipes = this.equipesService.read();
    const id = this.route.snapshot.paramMap.get("id");
    this.membroService.getById({ id: `${id}` }).subscribe(
      membro => {
        this.membro = membro
      }
    );
  }

  goBack(): void {
    this.router.navigate(["membros"]);
  }

  onSubmit(): void {}
}
