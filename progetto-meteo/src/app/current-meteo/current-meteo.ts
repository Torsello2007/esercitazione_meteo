import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MeteoService } from '../services/meteo-service';

@Component({
  selector: 'app-current-meteo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './current-meteo.html',
  styleUrls: ['./current-meteo.css'],
})
export class CurrentMeteo {
  city = '';
  dati: any = null;
  loading = false;
  errorMsg = '';

  constructor(private meteoService: MeteoService, private router: Router) {}

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

  vaiPrevisioni() {
    // naviga al componente Previsioni Future passando la città
    if (!this.city.trim()) return;
    this.router.navigate(['/five_days'], { queryParams: { city: this.city } });
  }
}
