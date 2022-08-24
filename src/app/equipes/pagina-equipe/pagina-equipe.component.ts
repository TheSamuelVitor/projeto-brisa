import { Projeto } from './../../components/projetos/projeto.model';
import { Membro } from "./../../components/membros/membro.model";
import { Equipe, EquipecomInfo } from "src/app/components/equipes/equipe.model";
import { CreateEquipesService } from "src/app/components/equipes/equipes.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

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
  
  constructor(
    private route: ActivatedRoute,
    private equipeService: CreateEquipesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.equipeService.getById({ id: `${id}` }).subscribe((equipe) => {
      this.equipe = equipe;
      this.membros = this.equipe.membros;
      this.projetos = this.equipe.projetos
    });
  }

}
