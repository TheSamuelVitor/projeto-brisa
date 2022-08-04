import { CreateProjetosService } from 'src/app/components/projetos/create-projetos.service';
import { CreateTarefasService } from 'src/app/components/tarefas/create-tarefas.service';
import { CreateMembrosService } from './../../components/membros/create-membros.service';
import { Projeto } from './../../components/projetos/projeto.model';
import { Membro } from './../../components/membros/membro.model';
import { Tarefa } from './../../components/tarefas/tarefa.model';
import { AvisoService } from './../../components/aviso.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-tarefas',
  templateUrl: './create-tarefas.component.html',
  styleUrls: ['./create-tarefas.component.css']
})
export class CreateTarefasComponent implements OnInit {

  tarefa: Tarefa = {
    nome_tarefa: "",
    descricao: "",
    id_membro: 0,
    id_projeto: 0
  }

  membros: Observable<Membro[]> | undefined
  projetos: Observable<Projeto[]> | undefined

  constructor( private router: Router,
    private avisoMsg: AvisoService,
    private createTarefa: CreateTarefasService,
    private membroService: CreateMembrosService,
    private projetoService: CreateProjetosService
  ) { }

  ngOnInit(): void {
    this.membros = this.membroService.read()
    this.projetos = this.projetoService.read()
  }

  goBack(): void {
    this.router.navigate(['tarefas'])
  }

  salvar(): void {
    this.createTarefa.create(this.tarefa).subscribe( () => {
      this.goBack()
      this.avisoMsg.showMsg( { msg : 'Tarefa criada com sucesso' } )
    })
  }

}
