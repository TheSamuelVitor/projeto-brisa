import { CreateEquipesService } from './../../components/equipes/create-equipes.service';
import { Equipe } from './../../components/equipes/equipe.model';
import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.css']
})
export class CreateEquipeComponent implements OnInit {

  equipe: Equipe = {
    name_team: ""
  }

  constructor(private router: Router,
    private aviso: AvisoService,
    private createEquipeService: CreateEquipesService
    ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['equipes'])
  }

  salvar(): void {
    this.createEquipeService.create(this.equipe).subscribe( () => {
      this.goBack()
      this.aviso.showMsg({msg: 'Equipe criada com sucesso'})
    })
  }

}
