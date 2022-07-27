import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class CreateTarefasService {

  baseUrl = 'https://api-go-projects.herokuapp.com/tarefas/'

  constructor(private http: HttpClient) { }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, tarefa)
  }
}
