import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-projetos',
  templateUrl: './create-projetos.component.html',
  styleUrls: ['./create-projetos.component.css']
})
export class CreateProjetosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['projetos'])
  }

}
