import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.css']
})
export class CreateEquipeComponent implements OnInit {

  constructor(private router: Router,
    private aviso: AvisoService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['equipes'])
  }

  salvar(): void {
    this.goBack()
    this.aviso.showMsg({msg: 'Equipe criada com sucesso'})
  }

}
