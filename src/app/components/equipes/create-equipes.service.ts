import { Observable } from 'rxjs';
import { Equipe } from './equipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateEquipesService {

  baseUrl = 'https://api-go-projects.herokuapp.com/equipes/'

  constructor(private http: HttpClient) { }

  create(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.baseUrl, equipe)
  }

  read(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.baseUrl)
  }
}
