import { Membro } from "./../membros/membro.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Equipe } from "./equipe.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.prod";

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

  getById({ id }: { id: string }): Observable<Equipe> {
    const url = `${this.equipeUrl}${id}`;
    return this.http.get<Equipe>(url);
  }

  update({ equipe }: { equipe: Equipe }): Observable<Equipe> {
    const url = `${this.equipeUrl}${equipe.id_equipe}`;
    return this.http.put<Equipe>(url, equipe);
  }

  getMembrosbyEquipeId({ id }: { id: string }): Observable<Membro> {
    const url = `${this.equipeUrl}membros/${id}`;
    return this.http.get<Membro>(url);
  }
}
