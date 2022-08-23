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
    private equipeService: CreateEquipesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.membrosService.read().subscribe((membros) => {
      this.membros = membros;
    });
    this.equipeService.read().subscribe((equipe) => {
      this.equipes = equipe;
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

  procurar(id_equipe: any) {
    // this.equipeService.getMembrosbyEquipeId(id_equipe).subscribe(res => {
    //   this.membros = res;
    // });
    console.log(id_equipe)
  }
}
