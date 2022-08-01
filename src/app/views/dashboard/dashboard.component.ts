import { CountService } from './../../components/count.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor( 
    private countService: CountService 
  ) { }

  ngOnInit(): void {
    this.countService.countEquipes()
    this.countService.countMembros()
    this.countService.countProjetos()
    this.countService.countTarefas()
  }

}
