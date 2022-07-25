import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-projetos',
  templateUrl: './create-projetos.component.html',
  styleUrls: ['./create-projetos.component.css']
})
export class CreateProjetosComponent implements OnInit {

  constructor(private router: Router,
    private avisoMsg: AvisoService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['projetos'])
  }

  salvar(): void {
    this.goBack()
    this.avisoMsg.showMsg({ msg: 'Projeto criado com sucesso' })
  }

}
