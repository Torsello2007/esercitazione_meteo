import { Routes } from '@angular/router';
import { CurrentMeteo } from './current-meteo/current-meteo';
import { PrevisioniFuture } from './previsioni-future/previsioni-future';

export const routes: Routes = [
//se l’URL è vuoto, vai su /pagina1
{ path: '', redirectTo: 'meteo_attuale', pathMatch: 'full' },
//se l'URL è /pagina1 mostra il componente Pagina1
{ path: 'meteo_attuale', component: CurrentMeteo },
{ path: 'five_days', component: PrevisioniFuture },
]