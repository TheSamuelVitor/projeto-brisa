import { CreateEquipesService } from 'src/app/components/equipes/equipes.service';
import { CreateMembrosService } from './../../components/membros/membros.service';
import { CreateProjetosService } from 'src/app/components/projetos/projetos.service';
import { CreateTarefasService } from 'src/app/components/tarefas/tarefas.service';
import { Projeto } from './../../components/projetos/projeto.model';
import { Tarefa } from 'src/app/components/tarefas/tarefa.model';
import { Membro } from './../../components/membros/membro.model';
import { Equipe } from 'src/app/components/equipes/equipe.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  equipes: Equipe[] = [];
  membros: Membro[] = [];
  projetos: Projeto[] = [];
  tarefas: Tarefa[] = [];

  constructor( 
    private http: HttpClient,
    private equipeService: CreateEquipesService,
    private membroService: CreateMembrosService,
    private projetoService: CreateProjetosService,
    private tarefaService: CreateTarefasService
  ) { }

  ngOnInit(): void {
    this.equipeService.read().subscribe((equipe) => {
      this.equipes = equipe;
    })
    this.membroService.read().subscribe((membros) => {
      this.membros = membros;
    })
    this.projetoService.read().subscribe((projetos) => {
      this.projetos = projetos;
    })
    this.tarefaService.read().subscribe((tarefas) => {
      this.tarefas = tarefas;
    })
  }

}
