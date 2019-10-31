import { PeliculasService } from './services/peliculas.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ReservasComponent } from './reservas/reservas.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormPeliculasComponent } from './peliculas/form-peliculas/form-peliculas.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormReservasComponent } from './peliculas/form-reservas/form-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PeliculasComponent,
    ReservasComponent,
    FormPeliculasComponent,
    FormReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
