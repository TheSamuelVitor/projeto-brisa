import { HttpClient } from '@angular/common/http';
import { AvisoService } from './../../components/aviso.service';
import { Tarefa } from './../../components/tarefas/tarefa.model';
import { Component, OnInit } from '@angular/core';
import { CreateTarefasService } from 'src/app/components/tarefas/create-tarefas.service';

@Component({
  selector: 'app-read-tarefas',
  templateUrl: './read-tarefas.component.html',
  styleUrls: ['./read-tarefas.component.css']
})
export class ReadTarefasComponent implements OnInit {

  tarefas: Tarefa[] = []
  tarefasUrl = 'https://api-go-postgres.herokuapp.com/tarefas/'

  constructor(
    private tarefaService: CreateTarefasService,
    private message: AvisoService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.tarefaService.read().subscribe( tarefas => {
      this.tarefas = tarefas
    })
  }

  atualizaTarefa() {

  }

  deletaTarefa(id_tarefa: any) {
    this.http.delete(`${this.tarefasUrl}${id_tarefa}`).subscribe(
      resultado => {
        this.message.showMsg( { msg : `Tarefa deletada com Sucesso` })
      }
    )
  }

}
