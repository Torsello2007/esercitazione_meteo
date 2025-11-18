import { Component } from '@angular/core';
import { MeteoService } from '../services/meteo-service';

@Component({
  selector: 'app-current-meteo',
  imports: [],
  templateUrl: './current-meteo.html',
  styleUrl: './current-meteo.css',
})
export class CurrentMeteo {
  dati: any;
  city = '';
  constructor(private MeteoService: MeteoService) {}

  ngOnInit() {
    this.caricaMeteo();
  }

  caricaMeteo() {
    this.MeteoService.getCurrentWeather("Milano").subscribe((risposta: any) => {
      this.dati = risposta;
    });
  }
}