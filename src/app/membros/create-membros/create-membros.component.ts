import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-membros',
  templateUrl: './create-membros.component.html',
  styleUrls: ['./create-membros.component.css']
})
export class CreateMembrosComponent implements OnInit {

  constructor(private router: Router,
    private avisoMsg: AvisoService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['membros'])
  }

  salvar(): void {
    this.goBack()
    this.avisoMsg.showMsg({msg: ' Membro criado com sucesso '})
  }

}
