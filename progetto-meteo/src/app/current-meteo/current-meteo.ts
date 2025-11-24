// Importo tutto ciò che serve al componente
import { Component } from '@angular/core';        // Permette di creare un componente Angular
import { FormsModule } from '@angular/forms';     // Serve per usare ngModel negli input
import { CommonModule } from '@angular/common';   // Serve per usare *ngIf, *ngFor, ecc.
import { Router } from '@angular/router';         // Serve per cambiare pagina
import { MeteoService } from '../services/meteo-service'; // Servizio che fa le chiamate API

// Dichiarazione del componente
@Component({
  selector: 'app-current-meteo',                  // Nome usato nell'HTML
  standalone: true,                               // Indica che non usa un modulo, è indipendente
  imports: [FormsModule, CommonModule],           // Moduli che questo componente può usare
  templateUrl: './current-meteo.html',            // File HTML collegato
  styleUrls: ['./current-meteo.css'],             // File CSS collegato
})
export class CurrentMeteo {

  // Variabile che contiene il nome della città inserita dall'utente
  city = '';

  // Variabile che conterrà i dati meteo restituiti dall'API
  dati: any = null;

  // Variabile che indica se stiamo ancora caricando i dati
  loading = false;

  // Variabile che contiene un eventuale messaggio di errore
  errorMsg = '';

  // Inietto il servizio MeteoService e il Router per navigare tra le pagine
  constructor(private meteoService: MeteoService, private router: Router) {}

  // Funzione chiamata quando l'utente preme "Cerca"
  caricaMeteo() {

    // Se l'utente non ha scritto nulla, esce dalla funzione
    if (!this.city.trim()) return;

    // Attivo il caricamento e resetto eventuali errori o dati vecchi
    this.loading = true;
    this.errorMsg = '';
    this.dati = null;

    // Faccio la chiamata API usando il servizio
    this.meteoService.getCurrentWeather(this.city).subscribe({

      // Se la chiamata ha successo
      next: (risposta) => {
        this.dati = risposta;        // Salvo i dati restituiti dall'API
        this.loading = false;        // Tolgo il caricamento
      },

      // Se c'è un errore (es. città non trovata)
      error: (err) => {
        console.error(err);          // Stampo l'errore in console
        this.errorMsg = 'Non ho trovato nessuna città con questo nome.'; // Mostro messaggio all'utente
        this.loading = false;        // Tolgo il caricamento
      }
    });
  }

  // Funzione che porta l'utente alla pagina "Previsioni future"
  vaiPrevisioni() {

    // Se non è stata inserita una città, non continua
    if (!this.city.trim()) return;

    // Naviga alla pagina /five_days e passa la città come parametro nell'URL
    this.router.navigate(['/five_days'], { queryParams: { city: this.city } });
  }
}
