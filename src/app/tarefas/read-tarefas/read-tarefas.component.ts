import { DeleteWarningComponent } from './delete-warning/delete-warning.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from './../../../environments/environment';
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
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tarefaService.read().subscribe( tarefas => {
      this.tarefas = tarefas
    })
  }

  deletaTarefa(id_tarefa: any) {
    this.http.delete(`${environment.baseApiUrl}tarefas/${id_tarefa}`).subscribe(
      () => {
        this.message.showMsg({ msg: "Tarefa deletada com sucesso"});
      }
    )
  };

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DeleteWarningComponent, {
      width: "250px",
      enterAnimationDuration,
      exitAnimationDuration
    })
  }
  
};