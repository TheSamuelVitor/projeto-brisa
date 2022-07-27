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

  constructor(
    private equipeService: CreateEquipesService
  ) { }

  ngOnInit(): void {
    this.equipeService.read().subscribe( equipes => {
      this.equipes = this.equipes
      console.log(equipes)
    }
    )
  }

}
