import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateEquipesService } from "../../components/equipes/equipes.service";
import { Equipe } from "./../../components/equipes/equipe.model";
import { Component, OnInit } from "@angular/core";
import { DeleteWarningComponent } from "./delete-warning/delete-warning.component";

@Component({
  selector: "app-read-equipe",
  templateUrl: "./read-equipe.component.html",
  styleUrls: ["./read-equipe.component.css"],
})
export class ReadEquipeComponent implements OnInit {
  equipes: Equipe[] = [];

  constructor(
    private equipeService: CreateEquipesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.equipeService.read().subscribe((equipes) => {
      this.equipes = equipes;
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
}