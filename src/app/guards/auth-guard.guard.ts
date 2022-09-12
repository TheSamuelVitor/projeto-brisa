import { EventEmitter, Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  mostrarMenuEmmiter = new EventEmitter<boolean>();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const token = window.localStorage.getItem("token");
    if (token != "") {
      this.mostrarMenuEmmiter.emit(true);
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
