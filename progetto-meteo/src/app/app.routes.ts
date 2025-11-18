import { Routes } from '@angular/router';
import { CurrentMeteo } from './current-meteo/current-meteo';
import { PrevisioniFuture } from './previsioni-future/previsioni-future';

export const routes: Routes = [
//se l’URL è vuoto, vai su /current_meteo
{ path: '', redirectTo: 'current_meteo', pathMatch: 'full' },
//se l'URL è /current_meteo mostra il componente current_meteo
{ path: 'current_meteo', component: CurrentMeteo },
{ path: 'previsioni_future', component: PrevisioniFuture },
]