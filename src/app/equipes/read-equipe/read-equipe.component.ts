import { CreateEquipesService } from '../../components/equipes/equipes.service';
import { Equipe } from './../../components/equipes/equipe.model';
import { AvisoService } from './../../components/aviso.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-read-equipe',
  templateUrl: './read-equipe.component.html',
  styleUrls: ['./read-equipe.component.css']
})
export class ReadEquipeComponent implements OnInit {

  equipes: Equipe[] = []

  baseUrl = `${environment.baseApiUrl}equipes/`

  constructor(
    private equipeService: CreateEquipesService,
    private http: HttpClient,
    private message: AvisoService
  ) { }

  ngOnInit(): void {
    this.equipeService.read().subscribe( 
      equipes => {
        this.equipes = equipes
      }
    )
    console.log(this.baseUrl)
  }

  deletaEquipe(id_equipe: any) {
    this.http.delete(`${this.baseUrl}${id_equipe}`).subscribe( 
      resultado => {
        this.message.showMsg({ msg: `Equipe deletada com sucesso` })
      }
    )
  }

  atualizaEquipe() {
    this.message.showMsg({ msg: "Função em construção"})
  }

}
