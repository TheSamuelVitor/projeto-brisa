import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTarefasService {

  tarefaUrl = `${environment.apiUrl}tarefas/`

  constructor(private http: HttpClient) { }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.tarefaUrl, tarefa)
  }
  
  read(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.tarefaUrl)
  }

  getById(id: string): Observable<Tarefa> { 
    const url = `${this.tarefaUrl}${id}`
    return this.http.get<Tarefa>(url)
  }

  update(tarefa: Tarefa): Observable<Tarefa> { 
    const url = `${this.tarefaUrl}${tarefa.id_tarefa}`
    return this.http.put<Tarefa>(url, tarefa)
  }
}
