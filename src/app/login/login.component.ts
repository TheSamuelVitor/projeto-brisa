import { HttpClient } from '@angular/common/http';
import { AuthService } from "./auth.service";
import { User } from "./../components/user/user.model";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

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
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.fazerLogin({ usuario: this.user });
    this.formLogin.reset();
  }

  login() {
    this.http.post('http://localhost:3000/login', this.user).subscribe(
      (data) => {
        console.log(data)
      })
  }
}
