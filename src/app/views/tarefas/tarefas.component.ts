import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})

export class TarefasComponent implements OnInit {

  constructor(private Route: Router) { }

  ngOnInit(): void {
  }

  goToCreateTarefa(): void {
    this.Route.navigate(['tarefas/create'])
  }

}
 