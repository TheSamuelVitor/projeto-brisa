import { DeleteWarningComponent } from "./delete-warning/delete-warning.component";
import { CreateEquipesService } from "src/app/services/equipes.service";
import { EquipecomInfo } from "src/app/models/equipe.model";
import { Projeto } from "src/app/models/projeto.model";
import { Membro } from "src/app/models/membro.model";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pagina-equipe",
  templateUrl: "./pagina-equipe.component.html",
  styleUrls: ["./pagina-equipe.component.css"],
})
export class PaginaEquipeComponent implements OnInit {
  membros: Membro[] = [];
  projetos: Projeto[] = [];

  equipe: EquipecomInfo = {
    nome_equipe: "",
    membros: [],
    projetos: [],
  };
  primeiraLetra: string = "";

  constructor(
    private route: ActivatedRoute,
    private equipeService: CreateEquipesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.equipeService.getById({ id: `${id}` }).subscribe((resposta) => {
      this.equipe = resposta;
      this.primeiraLetra = this.equipe.nome_equipe[0]
      this.membros = resposta.membros;
      this.projetos = resposta.projetos;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id_equipe: any
  ): void {
    this.dialog.open(DeleteWarningComponent, {
      data: id_equipe,
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  goBack(): void {
    history.back();
  }
}
