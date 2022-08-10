import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Equipe } from "src/app/components/equipes/equipe.model";
import { CreateEquipesService } from "src/app/components/equipes/equipes.service";

@Component({
  selector: "app-update-equipe",
  templateUrl: "./update-equipe.component.html",
  styleUrls: ["./update-equipe.component.css"],
})
export class UpdateEquipeComponent implements OnInit {
  constructor(
    private equipeService: CreateEquipesService,
    private route: ActivatedRoute,
    private form: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.equipeService.getById({ id: `${id}` }).subscribe((equipe) => {
      this.equipe = equipe;
      console.log(equipe);
    });
  }

  formulario = this.form.group({
    nome: [null, Validators.required],
  });

  equipe: Equipe | undefined;

  onSubmit(): void {}

  goBack(): void {
    this.router.navigate(["/equipes"]);
  }

  limpar(): void {
    this.formulario.reset();
  }
}
