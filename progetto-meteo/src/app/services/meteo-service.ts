import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private apiKey = 'LA_TUA_API_KEY';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  // Meteo attuale
  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);
  }

  // Previsioni 5 giorni / 3 ore
  getForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);
  }
}
}
