import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MeteoService } from '../services/meteo-service';

@Component({
  selector: 'app-previsioni-future',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './previsioni-future.html',
  styleUrls: ['./previsioni-future.css'],
})
export class PrevisioniFuture {
  city = '';
  dati: any;
  loading = false;
  errorMsg = '';

  constructor(private meteo: MeteoService, private route: ActivatedRoute) {}

  ngOnInit() {
    // se arriva la città dalla query string
    this.route.queryParams.subscribe(params => {
      if (params['city']) {
        this.city = params['city'];
        this.caricaPrevisioni();
      }
    });
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
