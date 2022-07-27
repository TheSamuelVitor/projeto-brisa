import { Tarefa } from './../../components/tarefas/tarefa.model';
import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CreateTarefasService } from 'src/app/components/tarefas/create-tarefas.service';

@Component({
  selector: 'app-create-tarefas',
  templateUrl: './create-tarefas.component.html',
  styleUrls: ['./create-tarefas.component.css']
})
export class CreateTarefasComponent implements OnInit {

  tarefa: Tarefa = {
    name_task: 'Modelagem do Banco',
    description: 'Se torna necessário para facilitar o entendemento das relações',
    id_membro: 1,
    id_project: 1
  }

  constructor( private router: Router,
    private avisoMsg: AvisoService,
    private createTarefa: CreateTarefasService
  ) { }

  ngOnInit(): void {
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
