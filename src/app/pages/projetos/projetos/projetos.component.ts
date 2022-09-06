import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-projetos",
  templateUrl: "./projetos.component.html",
  styleUrls: ["./projetos.component.css"],
})
export class ProjetosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateProjeto(): void {
    this.router.navigate(["projetos/create"]);
  }
}
