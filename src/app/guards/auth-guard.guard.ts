import { Injectable } from "@angular/core";
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const token = window.localStorage.getItem("token");
    if (this.authService.usuarioEstaAutenticado() && token) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}


// [{
// 	"resource": "/home/brisa/Documentos/GitHub/projeto-brisa/src/app/equipes/read-equipe/read-equipe.component.ts",
// 	"owner": "_generated_diagnostic_collection_name_#0",
// 	"code": "-992008",
// 	"severity": 8,
// 	"message": "Could not find template file './read-equipe.component.html'.",
// 	"startLineNumber": 9,
// 	"startColumn": 16,
// 	"endLineNumber": 9,
// 	"endColumn": 46
// }]