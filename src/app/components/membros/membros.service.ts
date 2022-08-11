import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Membro } from "./membro.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CreateMembrosService {
  baseUrl = "https://api-go-projects.herokuapp.com/membros/";

  constructor(private http: HttpClient) {}

  create(membro: Membro): Observable<Membro> {
    return this.http.post<Membro>(this.baseUrl, membro);
  }

  read(): Observable<Membro[]> {
    return this.http.get<Membro[]>(this.baseUrl);
  }

  getById({ id }: { id: string }): Observable<Membro> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<Membro>(url);
  }

  update({ membro }: { membro: Membro }): Observable<Membro> {
    const url = `${this.baseUrl}${membro.id_membro}`;
    return this.http.put<Membro>(url, membro);
  }
}
