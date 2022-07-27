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

  constructor(
    private tarefaService: CreateTarefasService
  ) { }

  ngOnInit(): void {
    this.tarefaService.read().subscribe( tarefas => {
      this.tarefas = tarefas
      console.log(tarefas)
    })
  }

}
