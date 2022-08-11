import { CreateTarefasService } from 'src/app/components/tarefas/tarefas.service';
import { AvisoService } from './../../components/aviso.service';
import { Tarefa } from './../../components/tarefas/tarefa.model';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  deletaTarefa() {
    this.message.showMsg({ msg: "Função em construção"});
  };
  
};