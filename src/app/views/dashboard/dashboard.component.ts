import { HttpClient } from '@angular/common/http';
import { CountService } from './../../components/count.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor( 
    // private countService: CountService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  //   this.countService.countEquipes()
  //   this.countService.countMembros()
  //   this.countService.countProjetos()
  //   this.countService.countTarefas()
  }

  qtdEquipes() {
    this.http.get('https://api-go-projects.herokuapp.com/membros/count').subscribe(
      resultado => {
        console.log(resultado)
      }
    )
  }

}
