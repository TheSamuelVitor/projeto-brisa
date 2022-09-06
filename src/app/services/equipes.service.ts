import { environment } from "src/environments/environment.prod";
import { Equipe, EquipecomInfo } from "../models/equipe.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CreateEquipesService {
  equipeUrl = `${environment.apiUrl}equipes/`;

  constructor(private http: HttpClient) {}

  create({ equipe }: { equipe: Equipe }): Observable<Equipe> {
    return this.http.post<Equipe>(this.equipeUrl, equipe);
  }

  read(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.equipeUrl);
  }

  getById({ id }: { id: string }): Observable<EquipecomInfo> {
    const url = `${this.equipeUrl}${id}`;
    return this.http.get<EquipecomInfo>(url);
  }

  update({ equipe }: { equipe: Equipe }): Observable<Equipe> {
    const url = `${this.equipeUrl}${equipe.id_equipe}`;
    return this.http.put<Equipe>(url, equipe);
  }
}
