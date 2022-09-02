import { AuthService } from './../../login/auth.service';
import { LoginComponent } from './../../login/login.component';
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";

import { CreateEquipesService } from "../../components/equipes/equipes.service";
import { Equipe } from "./../../components/equipes/equipe.model";

@Component({
  selector: "app-read-equipe",
  templateUrl: "./read-equipe.component.html",
  styleUrls: ["./read-equipe.component.css"],
})
export class ReadEquipeComponent implements OnInit {
  equipes: Equipe[] = [];

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
