import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeliculasComponent } from '../peliculas.component';

@Component({
  selector: 'app-form-peliculas',
  templateUrl: './form-peliculas.component.html',
  styleUrls: ['./form-peliculas.component.scss']
})
export class FormPeliculasComponent implements OnInit {

  formPelicula: FormGroup;
  constructor(public formBuild: FormBuilder, public peliculaService: PeliculasService, public router: Router,
              public dialogRef: MatDialogRef<PeliculasComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {


  }

  ngOnInit() {

    this.formPelicula = this.formBuild.group({
      titulo: [''],
      descripcion: [''],
      urlimg: [''],
      fecha: ['']
    });
  }


  crearPelicula() {
    const pelicula = {
      nombre: this.formPelicula.get('titulo').value,
      descripcion: this.formPelicula.get('descripcion').value,
      img_url: this.formPelicula.get('urlimg').value,
      dias_presentacion: this.formPelicula.get('fecha').value
    }

    console.log(pelicula);

    this.peliculaService.crearPelicula(pelicula).subscribe(res => {
      console.log(res);
      this.dialogRef.close(res);
      this.router.navigate(['/peliculas']);

    }, err => {
      console.log(err);
      this.dialogRef.close();
      this.router.navigate(['/peliculas']);
    });

  }


}
