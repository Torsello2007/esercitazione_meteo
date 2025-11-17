import { Routes } from '@angular/router';
import { CurrentMeteo } from './current-meteo/current-meteo';
import { PrevisioniFuture } from './previsioni-future/previsioni-future';
export const routes: Routes = [
//se l’URL è vuoto, vai su /pagina1
{ path: '', redirectTo: 'pagina1', pathMatch: 'full' },
//se l'URL è /pagina1 mostra il componente Pagina1
{ path: 'pagina1', component: CurrentMeteo },
{ path: 'pagina2', component: PrevisioniFuture },
]