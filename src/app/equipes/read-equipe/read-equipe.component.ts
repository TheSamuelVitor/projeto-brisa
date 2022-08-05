import { AvisoService } from './../../components/aviso.service';
import { HttpClient } from '@angular/common/http';
import { CreateEquipesService } from './../../components/equipes/create-equipes.service';
import { Equipe } from './../../components/equipes/equipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-equipe',
  templateUrl: './read-equipe.component.html',
  styleUrls: ['./read-equipe.component.css']
})
export class ReadEquipeComponent implements OnInit {

  equipes: Equipe[] = []
  equipeUrl = 'https://api-go-projects.herokuapp.com/equipes/'

  constructor(
    private equipeService: CreateEquipesService,
    private http: HttpClient,
    private message: AvisoService
  ) { }

  ngOnInit(): void {
    this.equipeService.read().subscribe( equipes => {
      this.equipes = equipes
    }
    )
  }

  deletaEquipe(id_equipe: any) {
    this.http.delete(`${this.equipeUrl}${id_equipe}`).subscribe( 
      resultado => {
        this.message.showMsg({ msg: `Equipe deletada com sucesso` })
      }
    )
  }

  atualizaEquipe() {
    this.message.showMsg({ msg: "Função em construção"})
  }

}
