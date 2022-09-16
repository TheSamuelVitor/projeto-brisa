import { MembrocomInfo } from "./../models/membro.model";
import { environment } from "src/environments/environment.prod";
import { Membro } from "../models/membro.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CreateMembrosService {
  membroUrl = `${environment.apiUrl}membros/`;

  constructor(private http: HttpClient) {}

  create({ membro }: { membro: Membro }): Observable<Membro> {
    return this.http.post<Membro>(this.membroUrl, membro);
  }

  read(): Observable<Membro[]> {
    return this.http.get<Membro[]>(this.membroUrl);
  }

  getById({ id }: { id: string }): Observable<MembrocomInfo> {
    const url = `${this.membroUrl}${id}`;
    return this.http.get<MembrocomInfo>(url);
  }

  update({ membro }: { membro: Membro }): Observable<Membro> {
    const url = `${this.membroUrl}${membro.id_membro}`;
    return this.http.put<Membro>(url, membro);
  }
}
