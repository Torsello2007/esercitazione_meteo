import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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

  @Output() cityChange = new EventEmitter<string>(); // invia la città selezionata

  constructor(private meteoService: MeteoService) {}

  caricaMeteo() {
    if (!this.city.trim()) return;

    this.loading = true;
    this.errorMsg = '';
    this.dati = null;

    this.meteoService.getCurrentWeather(this.city).subscribe({
      next: (risposta) => {
        this.dati = risposta;
        this.loading = false;
        this.cityChange.emit(this.city); // invio la città anche a PrevisioniFuture
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Non ho trovato nessuna città con questo nome.';
        this.loading = false;
      }
    });
  }
}
