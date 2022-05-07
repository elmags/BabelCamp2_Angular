import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/Alumno';
import { Curso } from 'src/app/model/Curso';
import { FormacionService } from 'src/app/service/formacion.service';

@Component({
  selector: 'app-matricular',
  templateUrl: './matricular.component.html',
  styleUrls: ['./matricular.component.css']
})
export class MatricularComponent implements OnInit {

  cursos : Curso[];
  alumnos : Alumno[];

  usuario : string;
  idCurso : number;
  
  constructor(private _formacionService : FormacionService, private _router: Router) {
    this.mostrarAlumnos();
  }

  ngOnInit(): void {
  }

  public mostrarAlumnos() {
    this._formacionService.alumnos().subscribe(data => this.alumnos = data);
  }

  public mostrarCursos() {
    this._formacionService.cursosNoMatriculados(this.usuario).subscribe(data => this.cursos = data);
  }

  public matricular() {
    console.log(this.usuario)
    console.log(this.idCurso)
    this._formacionService.matricular(this.usuario, this.idCurso);
  }
}
