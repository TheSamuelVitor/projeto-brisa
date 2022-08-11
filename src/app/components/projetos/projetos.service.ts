import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from './projeto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateProjetosService {

  baseUrl = 'https://api-go-projects.herokuapp.com/projetos/'

  constructor( private http: HttpClient ) { }

  create(projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(this.baseUrl, projeto)
  }

  read(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.baseUrl)
  }

  getById(id: string): Observable<Projeto> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<Projeto>(url)
  }

  update(projeto: Projeto): Observable<Projeto> {
    const url = `${this.baseUrl}${projeto.id_projeto}`
    return this.http.put<Projeto>(url, projeto)
  }
}
