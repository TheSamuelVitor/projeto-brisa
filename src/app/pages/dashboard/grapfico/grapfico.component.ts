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

  constructor() {}

  ngOnInit(): void {
    console.log(this.diaAtual);
    Chart.register(...registerables);
    new Chart(this.elemento.nativeElement, {
      // definindo o tipo do gráfico
      type: "line",
      options: {
        borderColor: "#000000",
      },
      data: {
        labels: [
          // um rotulo para cada dado
          "Segunda",
          "Terça",
          "Quarta",
          "Quinta",
          "Sexta",
          "Sábado",
          "Domingo",
        ],
        datasets: [
          {
            // elementos que serão exibidos no gráfico
            data: [250, 200, 375, 300, 4, 40, 150],
          },
        ],
      },
    });
  }
}
