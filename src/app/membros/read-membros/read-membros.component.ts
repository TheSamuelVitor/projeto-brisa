import { DeleteWarningComponent } from "./delete-warning/delete-warning.component";
import { CreateEquipesService } from "src/app/components/equipes/equipes.service";
import { CreateMembrosService } from "../../components/membros/membros.service";
import { Equipe } from "src/app/components/equipes/equipe.model";
import { Membro } from "./../../components/membros/membro.model";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-read-membros",
  templateUrl: "./read-membros.component.html",
  styleUrls: ["./read-membros.component.css"],
})
export class ReadMembrosComponent implements OnInit {
  equipeSelecionada: any;
  membros: Membro[] = [];
  equipes: Equipe[] = [];

  constructor(
    private membrosService: CreateMembrosService,
    private dialog: MatDialog
  ) {}

  lerMembros(): void {
    this.membrosService.read().subscribe((membros) => {
      this.membros = membros;
    });
  }

  ngOnInit(): void {
    this.lerMembros();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id_membro: any
  ): void {
    this.dialog.open(DeleteWarningComponent, {
      data: id_membro,
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
