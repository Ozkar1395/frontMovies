import { FormPeliculasComponent } from './peliculas/form-peliculas/form-peliculas.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormReservasComponent } from './peliculas/form-reservas/form-reservas.component';


const routes: Routes = [
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'reservas', component: ReservasComponent},
  { path: 'form-peliculas', component: FormPeliculasComponent},
  { path: 'reservar', component: FormReservasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
