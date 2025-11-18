import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeteoService } from '../services/meteo-service';

@Component({
  selector: 'app-previsioni-future',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './previsioni-future.html',
  styleUrl: './previsioni-future.css',
})
export class PrevisioniFuture {
  city = 'Milano';   // esempio
  dati: any;        

  constructor(private meteo: MeteoService) {}

  ngOnInit() {
    // come nel PDF: all’avvio carico i dati
    this.caricaPrevisioni();
  }

  caricaPrevisioni() {
    // 1) chiamo il service (come caricaFatto → getRandomFact)
    this.meteo.getForecast(this.city).subscribe(risposta => {
      // 2) quando l’Observable risponde, salvo i dati in una variabile
      this.dati = risposta;
      // 3) il template userà this.dati per mostrare le info
    });
  }
}