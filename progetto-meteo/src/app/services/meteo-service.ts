// Importo tutto ciò che serve per il servizio
import { Injectable } from '@angular/core';          // Permette di creare un servizio Angular
import { HttpClient } from '@angular/common/http';   // Serve per fare chiamate HTTP
import { Observable, BehaviorSubject } from 'rxjs';  // Serve per lavorare con stream di dati

// Dichiarazione del servizio
@Injectable({
  providedIn: 'root',                               // Indica che il servizio è disponibile in tutta l'app
})
export class MeteoService {

  // Chiave API per accedere ai dati di OpenWeatherMap
  private apiKey = '1fe29b692a828699c077c6123333551d';

  // URL base dell'API di OpenWeatherMap
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  // BehaviorSubject per tenere traccia della città corrente
  private currentCitySource = new BehaviorSubject<string>('');  

  // Observable a cui i componenti possono sottoscriversi per ricevere aggiornamenti sulla città corrente
  currentCity$ = this.currentCitySource.asObservable();

  // Inietto HttpClient per fare richieste HTTP
  constructor(private http: HttpClient) {}

  // Metodo per aggiornare la città corrente
  setCurrentCity(city: string) {
    this.currentCitySource.next(city);  // Aggiorna il BehaviorSubject con la nuova città
  }

  // Metodo per ottenere il meteo attuale di una città
  getCurrentWeather(city: string): Observable<any> {
    // Costruisco l'URL della chiamata all'API con parametri: città, chiave API, unità metriche e lingua italiana
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);           // Restituisco un Observable della risposta HTTP
  }

  // Metodo per ottenere le previsioni a 5 giorni di una città
  getForecast(city: string): Observable<any> {
    // Costruisco l'URL della chiamata all'API con parametri: città, chiave API, unità metriche e lingua italiana
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);           // Restituisco un Observable della risposta HTTP
  }
}
