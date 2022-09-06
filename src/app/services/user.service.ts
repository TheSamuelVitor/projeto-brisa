import { environment } from "src/environments/environment.prod";
import { User, Token } from "../models/user.model";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  login({ user }: { user: User }): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}login`, user);
  }
}
