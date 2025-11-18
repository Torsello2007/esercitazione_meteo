import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private apiKey = '1fe29b692a828699c077c6123333551d';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  private currentCitySource = new BehaviorSubject<string>('');
  currentCity$ = this.currentCitySource.asObservable();

  constructor(private http: HttpClient) {}

  setCurrentCity(city: string) {
    this.currentCitySource.next(city);
  }

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);
  }

  getForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&lang=it`;
    return this.http.get(url);
  }
}
