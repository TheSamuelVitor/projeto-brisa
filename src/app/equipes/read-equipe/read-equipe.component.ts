import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateEquipesService } from "../../components/equipes/equipes.service";
import { Equipe } from "./../../components/equipes/equipe.model";
import { AvisoService } from "./../../components/aviso.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "./../../../environments/environment.prod";
import { DeleteWarningComponent } from "./delete-warning/delete-warning.component";

@Component({
  selector: "app-read-equipe",
  templateUrl: "./read-equipe.component.html",
  styleUrls: ["./read-equipe.component.css"],
})
export class ReadEquipeComponent implements OnInit {
  equipes: Equipe[] = [];

  baseUrl = `${environment.apiUrl}equipes/`;

  constructor(
    private equipeService: CreateEquipesService,
    private http: HttpClient,
    private message: AvisoService,
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