import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-tarefas',
  templateUrl: './create-tarefas.component.html',
  styleUrls: ['./create-tarefas.component.css']
})
export class CreateTarefasComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['tarefas'])
  }

}
