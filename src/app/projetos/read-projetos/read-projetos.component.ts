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

  constructor(
    private projetoService: CreateProjetosService
  ) { }

  ngOnInit(): void {
    this.projetoService.read().subscribe( projetos => {
      this.projetos = this.projetos
      console.log(projetos)
    } )
  }

}
