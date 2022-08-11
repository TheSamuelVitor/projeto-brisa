import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateTarefasService {

  baseUrl = 'https://api-go-projects.herokuapp.com/tarefas/'

  constructor(private http: HttpClient) { }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, tarefa)
  }
  
  read(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl)
  }

  getById(id: string): Observable<Tarefa> { 
    const url = `${this.baseUrl}${id}`
    return this.http.get<Tarefa>(url)
  }

  update(tarefa: Tarefa): Observable<Tarefa> { 
    const url = `${this.baseUrl}${tarefa.id_tarefa}`
    return this.http.put<Tarefa>(url, tarefa)
  }
}
