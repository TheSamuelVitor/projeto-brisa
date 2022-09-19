import { Equipecomdata } from './../../../models/equipe.model';
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { CreateEquipesService } from "src/app/services/equipes.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-read-equipe",
  templateUrl: "./read-equipe.component.html",
  styleUrls: ["./read-equipe.component.css"],
})
export class ReadEquipeComponent implements OnInit {
  equipes: Equipecomdata[] = [];

  constructor(
    private equipeService: CreateEquipesService,
    public dialog: MatDialog,
    public authService: AuthService
  ) {}

  mostraEquipes() {
    this.equipeService.read().subscribe((equipe) => {
      this.equipes = equipe;
    });
  }

  ngOnInit(): void {
    this.mostraEquipes();
  }
}
