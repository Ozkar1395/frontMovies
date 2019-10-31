import { PeliculasService } from './../../services/peliculas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-reservas',
  templateUrl: './form-reservas.component.html',
  styleUrls: ['./form-reservas.component.scss']
})
export class FormReservasComponent implements OnInit {

  formReservas: FormGroup;
  mensaje: string;
  verm: boolean = false;
  constructor(
    public formBuild: FormBuilder,
    public peliculasService: PeliculasService,
    public dialogRef: MatDialogRef<FormReservasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(this.data);

    this.peliculasService.getReservasByPeliculas(this.data).subscribe(res => {
      console.log(res);
      if (res.length >= 10) {
this.verm = true;
this.mensaje = "Lo sentimos esta pelicula no puede ser reservada"
      }
    });

    this.formReservas = formBuild.group({
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
    });
  }

  ngOnInit() {

  }


  reservarPelicula() {
    const reserva = {
      nombre_reservador: this.formReservas.get('nombre').value,
      cedula: this.formReservas.get('cedula').value,
      correo: this.formReservas.get('correo').value,
      celular: this.formReservas.get('celular').value,
      movie_id: this.data
    };

    console.log(reserva);
    this.peliculasService.reservarPelicula(reserva).subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    }, err => {
      console.log(err);
      this.dialogRef.close();
    });
  }

}
