import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrentMeteo } from './current-meteo/current-meteo';
import { PrevisioniFuture } from './previsioni-future/previsioni-future';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CurrentMeteo, PrevisioniFuture],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // <-- correggi da styleUrl
})
export class App {
  protected readonly title = signal('progetto-meteo');
}
