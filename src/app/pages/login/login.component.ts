import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { User } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: User = {
    email: "",
    password: "",
  };

  formLogin = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    senha: ["", [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.fazerLogin({ usuario: this.user });
  }
}
