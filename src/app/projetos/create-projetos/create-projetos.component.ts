import { Projeto } from './../../components/projetos/projeto.model';
import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CreateProjetosService } from 'src/app/components/projetos/create-projetos.service';

@Component({
  selector: 'app-create-projetos',
  templateUrl: './create-projetos.component.html',
  styleUrls: ['./create-projetos.component.css']
})
export class CreateProjetosComponent implements OnInit {

  projeto: Projeto = {
    name_project: "",
    description: "",
    id_team: 1
  }

  constructor(private router: Router,
    private avisoMsg: AvisoService,
    private createProjeto: CreateProjetosService
    ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['projetos'])
  }

  salvar(): void {
    this.createProjeto.create(this.projeto).subscribe( () => {
      this.goBack()
      this.avisoMsg.showMsg({ msg: 'Projeto criado com sucesso' })
    })
  }

}
