import { HttpClient } from '@angular/common/http';
import { CreateProjetosService } from 'src/app/components/projetos/create-projetos.service';
import { Projeto } from './../../components/projetos/projeto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-projetos',
  templateUrl: './read-projetos.component.html',
  styleUrls: ['./read-projetos.component.css']
})
export class ReadProjetosComponent implements OnInit {

  projetos: Projeto[] = [];
  urlProjeto = 'https://api-go-projects.herokuapp.com/projetos/'

  constructor(
    private projetoService: CreateProjetosService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.projetoService.read().subscribe( projetos => {
      this.projetos = projetos
      console.log(projetos)
    } )
  }

  atualizaProjeto() {

  }

  deletaProjeto(id_projeto: any) {
    this.http.delete(`${this.urlProjeto}${id_projeto}`).subscribe( 
      resultado => {
        console.log(resultado)
      })
  }

}
