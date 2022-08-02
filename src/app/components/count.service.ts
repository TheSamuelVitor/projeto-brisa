import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor(
    private http: HttpClient
    ) { }

  baseUrl = 'https://api-go-projects.herokuapp.com/'
  membrosUrl = 'https://api-go-projects.herokuapp.com/membros/count'
  equipesUrl = 'https://api-go-projects.herokuapp.com/equipes/count'
  projetosUrl = 'https://api-go-projects.herokuapp.com/projetos/count'
  tarefasUrl = 'https://api-go-projects.herokuapp.com/tarefas/count'


  countMembros(): void {
    this.http.get(this.membrosUrl).subscribe( (response) => {
      console.log(response)
    } )
  }

  countEquipes(): void {
    this.http.get(this.equipesUrl).subscribe( (response) => {
      console.log(response)
    })
  }

  countProjetos(): void {
    this.http.get(this.projetosUrl).subscribe( (response) => {
      console.log(response)
    })
  }

  countTarefas(): void {
    this.http.get(this.tarefasUrl).subscribe( (response) => {
      console.log(response)
    })
  }

}

