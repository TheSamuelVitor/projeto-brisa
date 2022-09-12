import { MatDialog } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { Projeto } from "src/app/models/projeto.model";
import { AvisoService } from "src/app/services/aviso.service";
import { CreateProjetosService } from "src/app/services/projetos.service";
import { DeleteWarningComponentProjeto } from "../pagina-projeto/delete-warning/delete-warning.component";

@Component({
  selector: "app-read-projetos",
  templateUrl: "./read-projetos.component.html",
  styleUrls: ["./read-projetos.component.css"],
})
export class ReadProjetosComponent implements OnInit {
  projetos: Projeto[] = [];

  constructor(
    private projetoService: CreateProjetosService,
    private message: AvisoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.projetoService.read().subscribe((projetos) => {
      this.projetos = projetos;
    });
  }

  atualizaProjeto() {
    this.message.showMsg({ msg: "Função em construção" });
  }
}
