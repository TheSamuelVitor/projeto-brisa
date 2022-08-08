import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from './equipe.model';
import { Observable } from 'rxjs';

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
