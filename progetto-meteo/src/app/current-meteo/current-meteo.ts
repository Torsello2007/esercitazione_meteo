import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeteoService } from '../services/meteo-service';

@Component({
  selector: 'app-current-meteo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './current-meteo.html',
  styleUrl: './current-meteo.css',
})
export class CurrentMeteo {
  city = 'Milano';       // puoi mettere una città di default
  dati: any = null;
  loading = false;
  errorMsg = '';

  constructor(private meteoService: MeteoService) {}

  // chiamata solo quando l’utente preme "Cerca"
  caricaMeteo() {
    if (!this.city.trim()) return;

    this.loading = true;
    this.errorMsg = '';
    this.dati = null;

    this.meteoService.getCurrentWeather(this.city).subscribe({
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