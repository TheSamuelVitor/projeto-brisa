import { environment } from './../../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Membro } from "./membro.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CreateMembrosService {
  membroUrl = `${environment.baseApiUrl}membros/`;

  constructor(private http: HttpClient) {}

  create(membro: Membro): Observable<Membro> {
    return this.http.post<Membro>(this.membroUrl, membro);
  }

  read(): Observable<Membro[]> {
    return this.http.get<Membro[]>(this.membroUrl);
  }

  getById({ id }: { id: string }): Observable<Membro> {
    const url = `${this.membroUrl}${id}`;
    return this.http.get<Membro>(url);
  }

  update({ membro }: { membro: Membro }): Observable<Membro> {
    const url = `${this.membroUrl}${membro.id_membro}`;
    return this.http.put<Membro>(url, membro);
  }
}
