import { CreateMembrosService } from '../../components/membros/membros.service';
import { Membro } from './../../components/membros/membro.model';
import { AvisoService } from './../../components/aviso.service';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-membros',
  templateUrl: './read-membros.component.html',
  styleUrls: ['./read-membros.component.css']
})
export class ReadMembrosComponent implements OnInit {

  membros: Membro[] = []
  url = "https://api-go-projects.herokuapp.com/membros/"
  
  constructor(
    private membrosService: CreateMembrosService,
    private Aviso: AvisoService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.membrosService.read().subscribe( membros => {
      this.membros = membros
      console.log(membros)
    } ) 
  }

  atualizaMembro() {
    this.Aviso.showMsg({ msg: "Função em construção"})
  }

  deletaMembro (id: any) {
    this.http.delete(`${this.url}${id}`).subscribe( 
      resultado =>  {
        this.Aviso.showMsg( { msg: "Membro deletado com sucesso" } )
      }
    )
  }

}
