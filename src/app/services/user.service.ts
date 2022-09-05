import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { Token } from "@angular/compiler";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  login({ user }: { user: User }): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}login`, user);
  }
}
