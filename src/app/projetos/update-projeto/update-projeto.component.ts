import { CreateProjetosService } from "src/app/components/projetos/projetos.service";
import { CreateEquipesService } from "src/app/components/equipes/equipes.service";
import { Projeto } from "./../../components/projetos/projeto.model";
import { Equipe } from "src/app/components/equipes/equipe.model";
import { AvisoService } from "./../../components/aviso.service";
import { Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-update-projeto",
  templateUrl: "./update-projeto.component.html",
  styleUrls: ["./update-projeto.component.css"],
})
export class UpdateProjetoComponent implements OnInit {
  equipes: Observable<Equipe[]> | undefined;

  formulario = this.formBuilder.group({
    nome: [null, Validators.required],
    descricao: [null],
    equipe: [null, Validators.required],
  });

  projeto: Projeto = {
    nome_projeto: "",
    descricao: "",
    id_equipe: 0,
  };

  constructor(
    private createProjeto: CreateProjetosService,
    private equipesService: CreateEquipesService,
    private formBuilder: FormBuilder,
    private avisoMsg: AvisoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipes = this.equipesService.read();
    const id = this.route.snapshot.paramMap.get("id");
    this.createProjeto.getById(`${id}`).subscribe((resposta) => {
      this.projeto = resposta;
    });
  }

  goBack(): void {
    this.router.navigate(["projetos"]);
  }

  onSubmit(): void {
    this.createProjeto.update(this.projeto).subscribe(() => {
      this.avisoMsg.showMsg({ msg: "Projeto atualizado com sucesso" });
      this.goBack();
    });
  }
}
