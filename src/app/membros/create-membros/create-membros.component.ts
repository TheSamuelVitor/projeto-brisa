import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-membros',
  templateUrl: './create-membros.component.html',
  styleUrls: ['./create-membros.component.css']
})
export class CreateMembrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['membros'])
  }

}
