import { AvisoService } from "src/app/components/aviso.service";
import { User } from "./../components/user/user.model";

import { HttpClient } from "@angular/common/http";
import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private aviso: AvisoService,
    private http: HttpClient
  ) {}

  loginUrl = "https://api-go-projects.herokuapp.com/login"

  token = window.localStorage.getItem("token");
  fazerLogin({ usuario }: { usuario: User }) {
    this.http.post<string>(this.loginUrl, usuario).subscribe(
      data => {
        this.usuarioAutenticado = true;
        this.router.navigate([""]);
        this.mostrarMenuEmmiter.emit(true);
      },
      err => {
        console.log("Error: " + err.message);
      }
    );
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
