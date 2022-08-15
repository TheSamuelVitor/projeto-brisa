import { DeleteWarningComponent } from './delete-warning/delete-warning.component';
import { MatDialog } from "@angular/material/dialog";
import { CreateEquipesService } from "../../components/equipes/equipes.service";
import { Equipe } from "./../../components/equipes/equipe.model";
import { AvisoService } from "./../../components/aviso.service";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "./../../../environments/environment.prod";

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

  deletaEquipe(id_equipe: any) {
    this.http.delete(`${this.baseUrl}${id_equipe}`).subscribe(() => {
      this.message.showMsg({ msg: `Equipe deletada com sucesso` });
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DeleteWarningComponent, {
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

