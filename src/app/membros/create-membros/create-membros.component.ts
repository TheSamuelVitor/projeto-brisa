import { Observable } from 'rxjs';
import { CreateEquipesService } from './../../components/equipes/create-equipes.service';
import { Equipe } from './../../components/equipes/equipe.model';
import { CreateMembrosService } from './../../components/membros/create-membros.service';
import { Membro } from './../../components/membros/membro.model';
import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-membros',
  templateUrl: './create-membros.component.html',
  styleUrls: ['./create-membros.component.css']
})
export class CreateMembrosComponent implements OnInit {
  membro: Membro = {
    name_member: "",
    function: "",
    id_equipe: 1
  }

  // equipe: Equipe[] = []; 

  equipes: Observable<Equipe[]> | undefined


  constructor(private router: Router,
    private avisoMsg: AvisoService,
    private createMembroService: CreateMembrosService,
    private equipesService: CreateEquipesService
  ) { }

  ngOnInit(): void {

    this.equipes = this.equipesService.read();
    // uma forma de fazer o select

    // equipe: Equipe[] = []; 
    // this.equipesService.read().subscribe( equipes => {
    //   this.equipe = equipes
    //   console.log(equipes)
    // })
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
