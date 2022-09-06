import { environment } from "src/environments/environment.prod";
import { Projeto } from "../models/projeto.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CreateProjetosService {
  projetoUrl = `${environment.apiUrl}projetos/`;

  constructor(private http: HttpClient) {}

  create(projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(this.projetoUrl, projeto);
  }

  read(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.projetoUrl);
  }

  getById(id: string): Observable<Projeto> {
    const url = `${this.projetoUrl}${id}`;
    return this.http.get<Projeto>(url);
  }

  update(projeto: Projeto): Observable<Projeto> {
    const url = `${this.projetoUrl}${projeto.id_projeto}`;
    return this.http.put<Projeto>(url, projeto);
  }
}
