import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeteoService } from '../services/meteo-service';

@Component({
  selector: 'app-previsioni-future',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './previsioni-future.html',
  styleUrls: ['./previsioni-future.css'],
})
export class PrevisioniFuture implements OnChanges {
  @Input() city: string = '';
  dati: any = null;
  loading = false;
  errorMsg = '';

  constructor(private meteo: MeteoService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['city'] && this.city.trim()) {
      this.caricaPrevisioni();
    }
  }

  caricaPrevisioni() {
    if (!this.city.trim()) return;

    this.loading = true;
    this.errorMsg = '';
    this.dati = null;

    this.meteo.getForecast(this.city).subscribe({
      next: (risposta) => {
        this.dati = risposta;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Non ho trovato nessuna città con questo nome.';
        this.loading = false;
      }
    });
  }
}
