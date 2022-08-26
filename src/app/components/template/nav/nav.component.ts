import { AuthService } from './../../../login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostraMenu: boolean = false;

  constructor(
    private AuthService: AuthService
  ) { }

  ngOnInit(): void {
    this.AuthService.mostrarMenuEmmiter.subscribe(
      mostrar => this.mostraMenu = mostrar
    );
  }

}
