import { environment } from "src/environments/environment.prod";
import { Token, User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AvisoService } from "./aviso.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  private tokenSerie: string = "";

  constructor(
    private router: Router,
    private http: HttpClient,
    private aviso: AvisoService
  ) {}

  loginUrl = `${environment.apiUrl}login`;

  fazerLogin({ usuario }: { usuario: User }) {
    this.http.post<Token>(this.loginUrl, usuario).subscribe(
      (data) => {
        this.usuarioAutenticado = true;
        this.router.navigate(["dashboard"]);
        window.localStorage.setItem("token", data.token);
        this.tokenSerie = data.token;
      },
      (err) => {
        this.aviso.showMsg({ msg: 'Email ou senha digitados incorretamente' })
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
