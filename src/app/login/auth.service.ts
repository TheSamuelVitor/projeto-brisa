import { EventEmitter } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { User } from "./../components/user/user.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  token = window.localStorage.getItem("token");
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.token) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmmiter.emit(true);
      this.router.navigate([""]);
      return true;
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmmiter.emit(false);
      return false;
    }
  }

  fazerLogin(usuario: User) {
    if (usuario.email === "usuario@email.com" && usuario.password == "1234") {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmmiter.emit(true);
      this.router.navigate([""]);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmmiter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
