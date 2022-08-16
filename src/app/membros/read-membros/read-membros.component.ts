import { DeleteWarningComponent } from "./delete-warning/delete-warning.component";
import { CreateMembrosService } from "../../components/membros/membros.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Membro } from "./../../components/membros/membro.model";
import { AvisoService } from "./../../components/aviso.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-read-membros",
  templateUrl: "./read-membros.component.html",
  styleUrls: ["./read-membros.component.css"],
})
export class ReadMembrosComponent implements OnInit {
  membros: Membro[] = [];

  constructor(
    private membrosService: CreateMembrosService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.membrosService.read().subscribe((membros) => {
      this.membros = membros;
    });
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
