import { HttpClient } from '@angular/common/http';
import { CreateMembrosService } from './../../components/membros/create-membros.service';
import { Membro } from './../../components/membros/membro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-membros',
  templateUrl: './read-membros.component.html',
  styleUrls: ['./read-membros.component.css']
})
export class ReadMembrosComponent implements OnInit {

  membros: Membro[] = []
  url = "https://api-go-projects.herokuapp.com/membros/"


  constructor(
    private http: HttpClient,
    private membrosService: CreateMembrosService
  ) { }

  ngOnInit(): void {
    this.membrosService.read().subscribe( membros => {
      this.membros = membros
      console.log(membros)
    } )
  }

  listaMembros() {
    this.http.get(this.url).subscribe( resultado => 
      console.log(resultado)
    )
  }

  listaMembro () {
    this.http.get(`${this.url}1`).subscribe( resultado =>
      console.log(resultado)
    )
  }

  adicionaMembro () {

  }

  atualizaMembro () {

  }

  deletaMembro (id: any) {
    this.http.delete(`${this.url}${id}`).subscribe( resultado =>
      console.log(resultado)
    )
  }

}
