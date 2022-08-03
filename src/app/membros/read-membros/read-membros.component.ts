import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CreateMembrosService } from './../../components/membros/create-membros.service';
import { Membro } from './../../components/membros/membro.model';

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

  }

  listaMembros() {
    this.http.get(this.url).subscribe( resultado => 
      console.log(resultado)
    )
  }
  
  deletaMembro (id: any) {
    this.http.delete(`${this.url}${id}`).subscribe( 
      resultado =>  {
        console.log(resultado)
        this.Aviso.showMsg( { msg: "Membro deletado com sucesso" ,} )
      }
    )
  }

}
