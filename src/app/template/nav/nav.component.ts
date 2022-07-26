import { Router } from "@angular/router";
import { Component, OnInit, } from "@angular/core";
import { AuthGuard } from "src/app/guards/auth-guard.guard";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  mostraMenu: boolean = false;
  menuResp: string = "none";

  constructor(private authGuard: AuthGuard, private router: Router) {}

  ngOnInit(): void {
    this.authGuard.mostrarMenuEmmiter.subscribe(
      (mostrar) => (this.mostraMenu = mostrar)
    );
  }

  logout(): void {
    window.localStorage.setItem("token", "");
    window.location.pathname = "/";
  }

  menuResponsivo() {
    this.menuResp = "flex";
  }
}
