import { CountService } from './../../components/count.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private count: CountService ) { }

  ngOnInit(): void {
    this.count.countMembros()
    this.count.countEquipes()
    this.count.countProjetos()
    this.count.countTarefas()
  }

}
