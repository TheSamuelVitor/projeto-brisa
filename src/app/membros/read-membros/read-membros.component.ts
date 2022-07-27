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

  constructor(
    private membrosService: CreateMembrosService
  ) { }

  ngOnInit(): void {
    this.membrosService.read().subscribe( membros => {
      this.membros = this.membros
      console.log(membros)
    } )
  }

}
