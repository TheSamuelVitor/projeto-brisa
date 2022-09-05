import { DeleteWarningComponent } from "./delete-warning/delete-warning.component";
import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { Equipe } from "src/app/models/equipe.model";
import { Membro } from "src/app/models/membro.model";
import { CreateMembrosService } from "src/app/services/membros.service";

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
