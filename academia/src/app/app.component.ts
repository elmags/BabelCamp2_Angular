import { Component } from '@angular/core';
import { Alumno } from './model/Alumno';
import { AcademiaService } from './service/academia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  curso : string;
  alumnos : Alumno[];
  cursos : String[] ;
  
  constructor(private _academiaService : AcademiaService) { this.mostrarCursos(); }

  public busqueda() {
    this._academiaService.buscar(this.curso).subscribe(data => this.alumnos = data);
  }

  public mostrarCursos() {
    this._academiaService.cursos().subscribe(data => this.cursos = data);
  }
}
