import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Equipe } from "src/app/models/equipe.model";
import { Membro } from "src/app/models/membro.model";
import { AvisoService } from "src/app/services/aviso.service";
import { CreateEquipesService } from "src/app/services/equipes.service";
import { CreateMembrosService } from "src/app/services/membros.service";

@Component({
  selector: "app-create-membros",
  templateUrl: "./create-membros.component.html",
  styleUrls: ["./create-membros.component.css"],
})
export class CreateMembrosComponent implements OnInit {
  formulario = this.formBuilder.group({
    nome: [null, Validators.required],
    funcao: [null],
    equipe: [null, Validators.required],
  });

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
    private avisoMsg: AvisoService
  ) {}

  ngOnInit(): void {
    this.equipes = this.equipesService.read();
  }

  goBack(): void {
    history.back();
  }

  onSubmit(): void {
    this.createMembroService.create({ membro: this.membro }).subscribe(() => {
      this.goBack();
      this.avisoMsg.showMsg({ msg: " Membro criado com sucesso " });
    });
  }
}
