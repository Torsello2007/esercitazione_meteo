// Importo tutto ciò che serve al componente
import { Component } from '@angular/core';             // Permette di creare un componente Angular
import { FormsModule } from '@angular/forms';         // Serve per usare ngModel negli input
import { CommonModule } from '@angular/common';       // Serve per usare *ngIf, *ngFor, ecc.
import { ActivatedRoute } from '@angular/router';     // Serve per leggere i parametri dell'URL
import { MeteoService } from '../services/meteo-service'; // Servizio che fa le chiamate API

// Dichiarazione del componente
@Component({
  selector: 'app-previsioni-future',                 // Nome usato nell'HTML
  standalone: true,                                  // Indica che non usa un modulo, è indipendente
  imports: [FormsModule, CommonModule],             // Moduli che questo componente può usare
  templateUrl: './previsioni-future.html',          // File HTML collegato
  styleUrls: ['./previsioni-future.css'],           // File CSS collegato
})
export class PrevisioniFuture {

  // Variabile che contiene il nome della città
  city = '';

  // Variabile che conterrà i dati delle previsioni restituiti dall'API
  dati: any;

  // Variabile che indica se stiamo ancora caricando i dati
  loading = false;

  // Variabile che contiene un eventuale messaggio di errore
  errorMsg = '';

  // Inietto il servizio MeteoService e ActivatedRoute per leggere i parametri della query string
  constructor(private meteo: MeteoService, private route: ActivatedRoute) {}

  // Metodo che viene eseguito all'inizializzazione del componente
  ngOnInit() {
    // Sottoscrivo i parametri della query string per ottenere la città
    this.route.queryParams.subscribe(params => {
      // Se nella query string è presente il parametro 'city', lo salvo e carico le previsioni
      if (params['city']) {
        this.city = params['city'];
        this.caricaPrevisioni();
      }
    });
  }

  // Funzione che carica le previsioni della città usando il servizio MeteoService
  caricaPrevisioni() {

    // Se l'utente non ha scritto nulla, esce dalla funzione
    if (!this.city.trim()) return;

    // Attivo il caricamento e resetto eventuali errori o dati vecchi
    this.loading = true;
    this.errorMsg = '';
    this.dati = null;

    // Faccio la chiamata API usando il servizio
    this.meteo.getForecast(this.city).subscribe({

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
}
