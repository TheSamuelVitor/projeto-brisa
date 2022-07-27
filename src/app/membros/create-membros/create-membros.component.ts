import { CreateMembrosService } from './../../components/membros/create-membros.service';
import { Membro } from './../../components/membros/membro.model';
import { AvisoService } from './../../components/aviso.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-membros',
  templateUrl: './create-membros.component.html',
  styleUrls: ['./create-membros.component.css']
})
export class CreateMembrosComponent implements OnInit {

  membro: Membro = {
    name_member: "Dayanne Bugarim",
    function: "FrontEnd Developer",
    id_equipe: 1
  }

  constructor(private router: Router,
    private avisoMsg: AvisoService,
    private createMembroService: CreateMembrosService
    ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['membros'])
  }

  salvar(): void {
    this.createMembroService.create(this.membro).subscribe( () => {
      this.goBack()
      this.avisoMsg.showMsg({msg: ' Membro criado com sucesso '})
    })

  }

}
