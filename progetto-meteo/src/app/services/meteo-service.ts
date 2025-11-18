import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private apiKey = '1fe29b692a828699c077c6123333551d'; // inserisci la tua chiave OpenWeatherMap
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  // Meteo attuale
  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);
  }

  // Previsioni ogni 3 ore
  getForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);
  }
}
