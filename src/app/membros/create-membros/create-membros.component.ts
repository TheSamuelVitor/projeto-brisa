import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

import { CreateEquipesService } from './../../components/equipes/create-equipes.service';
import { CreateMembrosService } from './../../components/membros/create-membros.service';
import { Equipe } from './../../components/equipes/equipe.model';
import { Membro } from './../../components/membros/membro.model';
import { AvisoService } from './../../components/aviso.service';

@Component({
  selector: 'app-create-membros',
  templateUrl: './create-membros.component.html',
  styleUrls: ['./create-membros.component.css']
})
export class CreateMembrosComponent implements OnInit {

  membro: Membro = {
    name_member: "",
    funcao: "",
    id_equipe: ""
  }
  equipes: Observable<Equipe[]> | undefined


  constructor(
    private createMembroService: CreateMembrosService,
    private equipesService: CreateEquipesService,
    private avisoMsg: AvisoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.equipes = this.equipesService.read();
  }

  goBack(): void {
    this.router.navigate(['membros'])
  }

  salvar(): void {
    this.createMembroService.create(this.membro).subscribe( () => {
      this.goBack()
      this.avisoMsg.showMsg({msg: ' Membro criado com sucesso '})
    })
  }

}
