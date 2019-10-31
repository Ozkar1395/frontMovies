import { PeliculasService } from './../services/peliculas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  displayedColumns: string[] = ['pelicula', 'nombre', 'cedula', 'correo', 'celular', 'dia'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public reservas: PeliculasService) {

    this.reservas.getReservas().subscribe(res => {
      console.log(res.datos);
      this.dataSource = new MatTableDataSource(res.datos);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
