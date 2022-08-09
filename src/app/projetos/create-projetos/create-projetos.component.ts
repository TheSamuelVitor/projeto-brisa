import { CreateProjetosService } from 'src/app/components/projetos/projetos.service';
import { CreateEquipesService } from '../../components/equipes/equipes.service';
import { Projeto } from './../../components/projetos/projeto.model';
import { Equipe } from './../../components/equipes/equipe.model';
import { AvisoService } from './../../components/aviso.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-projetos',
  templateUrl: './create-projetos.component.html',
  styleUrls: ['./create-projetos.component.css']
})
export class CreateProjetosComponent implements OnInit {

  equipes: Observable<Equipe[]> | undefined

  formulario = this.formBuilder.group({
    nome: [null, Validators.required],
    descricao: [null, Validators.required],
    equipe: [null, Validators.required]
  })

  projeto: Projeto = {
    nome_projeto: "",
    descricao: "",
    id_equipe: 0
  }

  constructor(private router: Router,
    private avisoMsg: AvisoService,
    private createProjeto: CreateProjetosService,
    private equipesService: CreateEquipesService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.equipes = this.equipesService.read()
  }

  goBack(): void {
    this.router.navigate(['projetos'])
  }

  onSubmit(): void {
    this.createProjeto.create(this.projeto).subscribe( () => {
      this.goBack()
      this.avisoMsg.showMsg({ msg: 'Projeto criado com sucesso' })
    })
  }

}
