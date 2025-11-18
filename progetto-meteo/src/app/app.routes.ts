import { Routes } from '@angular/router';
import { CurrentMeteo } from './current-meteo/current-meteo';
import { PrevisioniFuture } from './previsioni-future/previsioni-future';

export const routes: Routes = [
  { path: '', redirectTo: 'current_meteo', pathMatch: 'full' },
  { path: 'current_meteo', component: CurrentMeteo },
  { path: 'previsioni_future', component: PrevisioniFuture },
];
