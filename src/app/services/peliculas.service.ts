import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(public http: HttpClient) { }


  getpeliculas(): Observable<any>{
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/movies', {headers: header});
  }

  crearPelicula(pelicula): Observable<any>{
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/movies', pelicula, {headers: header});
  }

  reservarPelicula(pelicula): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/reservations', pelicula, {headers: header});
  }

  getReservas(): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/reservar', {headers: header});
  }

  getReservasByPeliculas(idPelicula): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/reservas/' + idPelicula, {headers: header});
  }
}
