import { environment } from 'src/environments/environment.prod';
import { Token, User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  private tokenSerie: string = "";

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) {}

  loginUrl = `${environment.apiUrl}login`;

  fazerLogin({ usuario }: { usuario: User }) {
    this.http.post<Token>(this.loginUrl, usuario).subscribe(
      (data) => {
        this.usuarioAutenticado = true;
        this.router.navigate([""]);
        this.mostrarMenuEmmiter.emit(true);
        window.localStorage.setItem("token", data.token);
        this.tokenSerie = data.token;
      },
      (err) => {
        console.log("Error: " + err.message);
      }
    );
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  serieToken() {
    return this.tokenSerie;
  }
}
