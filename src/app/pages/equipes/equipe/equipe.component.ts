import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-equipe",
  templateUrl: "./equipe.component.html",
  styleUrls: ["./equipe.component.css"],
})
export class EquipeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateEquipe(): void {
    this.router.navigate(["equipes/create"]);
  }
}
