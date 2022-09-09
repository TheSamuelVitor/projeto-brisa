import { AvisoService } from 'src/app/services/aviso.service';
import { Tarefa } from "./../../../models/tarefa.model";
import { CreateMembrosService } from "src/app/services/membros.service";
import { MembrocomInfo } from "./../../../models/membro.model";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagina-membro",
  templateUrl: "./pagina-membro.component.html",
  styleUrls: ["./pagina-membro.component.css"],
})
export class PaginaMembroComponent implements OnInit {
  tarefas: Tarefa[] = [];

  membro: MembrocomInfo = {
    id_membro: 0,
    nome_membro: "",
    id_equipe: 0,
    nome_equipe: "",
    funcao: "",
    tarefas: [],
  };

  constructor(
    private route: ActivatedRoute,
    private aviso: AvisoService,
    private membroService: CreateMembrosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.membroService.getById({ id: `${id}` }).subscribe((res) => {
      this.membro.nome_membro = res.nome_membro
      this.membro.id_membro = res.id_membro
      this.membro.id_equipe = res.id_equipe
      this.membro.nome_equipe = res.nome_equipe
      this.membro.funcao = res.funcao
      this.tarefas = res.tarefas
    });
  }


  deletaMembro() {
    this.aviso.showMsg({ msg: "Função em construcao"})
  }

  goBack() {
    history.back();
  }
}
