import { ReservasComponent } from './../reservas/reservas.component';
import { PeliculasService } from './../services/peliculas.service';
import { FormPeliculasComponent } from './form-peliculas/form-peliculas.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormReservasComponent } from './form-reservas/form-reservas.component';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  peliculas: Array<any>;

  constructor(public dialog: MatDialog, public pelicula: PeliculasService,
              ) {

    this.pelicula.getpeliculas().subscribe(res => {
      console.log(res);
      this.peliculas = res;
    })
  }

  ngOnInit() {
  }

  crearPelicula() {
    const dialogRef = this.dialog.open(FormPeliculasComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.peliculas.push(result);
    });
  }

  reservarPelucila(value){
    console.log(value);

    const dialogRef = this.dialog.open(FormReservasComponent, {
      height: '400px',
      width: '600px',
      data: value.id
    });
  }

}
