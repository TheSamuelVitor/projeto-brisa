import { User } from "./../components/user/user.model";
import { UserService } from "./../components/user/user.service";
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
    private loginService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.user);
  }
}
