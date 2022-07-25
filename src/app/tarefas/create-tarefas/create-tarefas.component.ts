import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-tarefas',
  templateUrl: './create-tarefas.component.html',
  styleUrls: ['./create-tarefas.component.css']
})
export class CreateTarefasComponent implements OnInit {

  constructor( private router: Router,
    private avisoMsg: AvisoService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['tarefas'])
  }

  salvar(): void {
    this.goBack()
    this.avisoMsg.showMsg( { msg : 'Tarefa criada com sucesso' } )
  }

}
