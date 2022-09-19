import { Equipecomdata } from "./../../../models/equipe.model";
import { CreateEquipesService } from "src/app/services/equipes.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, registerables } from "chart.js";

@Component({
  selector: "app-grapfico",
  templateUrl: "./grapfico.component.html",
  styleUrls: ["./grapfico.component.css"],
})
export class GrapficoComponent implements OnInit {
  @ViewChild("meuCanvas", { static: true }) elemento!: ElementRef;
  now = new Date();
  diaAtual = this.now.getDay();
  equipes: Equipecomdata[] = [];
  membros1 = 0;
  membros2 = 0;
  membros3 = 0;
  membros4 = 0;
  membros5 = 0;
  membros6 = 0;
  membros7 = 0;
  dataCriacao = 0;

  constructor(private equipeService: CreateEquipesService) {}

  lerEquipes() {
    this.equipeService.read().subscribe((resposta) => {
      this.equipes = resposta;
      resposta.forEach((element) => {
        this.dataCriacao = parseInt(element.createdAt.slice(8, 10));
        if (this.dataCriacao == this.now.getDate()) {
          this.membros1 += 1;
        } else if (this.dataCriacao == this.now.getDate() - 1) {
          this.membros2 += 1;
        } else if (this.dataCriacao == this.now.getDate() - 2) {
          this.membros3 += 1;
        } else if (this.dataCriacao == this.now.getDate() - 3) {
          this.membros4 += 1;
        } else if (this.dataCriacao == this.now.getDate() - 4) {
          this.membros5 += 1;
        } else if (this.dataCriacao == this.now.getDate() - 5) {
          this.membros6 += 1;
        } else if (this.dataCriacao == this.now.getDate() - 6) {
          this.membros7 += 1;
        }
      });

      this.mostraGrafico()

    });
  }
  
  ngOnInit(): void {
    this.lerEquipes()
  }

  mostraGrafico () {
    this.lerEquipes()
    Chart.register(...registerables);

    new Chart(this.elemento.nativeElement, {
      // definindo o tipo do gráfico
      type: "line",
      options: {
        borderColor: "#000000",
        plugins: {
          title: {
            display: true,
            text: "Quantidade de equipes adicionada por dia",
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Dia da semana",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Quantidade de equipes adicionadas",
            },
          },
        },
      },
      data: {
        labels: [
          // o nome de cada coluna
          this.now.getDate() - 6,
          this.now.getDate() - 5,
          this.now.getDate() - 4,
          this.now.getDate() - 3,
          this.now.getDate() - 2,
          this.now.getDate() - 1,
          this.now.getDate(),
        ],
        datasets: [
          {
            label: "Quantidade de equipes adicionadas",
            // elementos que serão exibidos no gráfico
            data: [
              this.membros7,
              this.membros6,
              this.membros5,
              this.membros4,
              this.membros3,
              this.membros2,
              this.membros1,
            ],
          },
        ],
      },
    });
  }
}
