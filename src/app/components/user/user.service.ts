import { Observable } from "rxjs";
import { User, Token } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  login({ user }: { user: User }): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}login`, user);
  }
}
