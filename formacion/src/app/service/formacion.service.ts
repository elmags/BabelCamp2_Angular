import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Alumno } from '../model/Alumno';
import { Curso } from '../model/Curso';
import { Matricula } from '../model/Matricula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  // urlA : string = "Alumnos";
  // urlC : string = "Cursos";
  // urlAC : string = "AlumnosCurso";
  // urlCA : string = "CursosAlumno";
  // urlAlumno : string = "Alumno";
  // urlCurso : string = "Curso";
  // urlMatricular : string = "Matricular";
  // urlAltaCurso : string = "AltaCurso";
  // urlAltaAlumno : string = "AltaAlumno";
  // urlMatriculas : string = "Matriculas";
  // urlCursosNoMatriculados : string = "CursosNoMatriculados";

  urlA : string = 'http://localhost:8080/15_formacion_matriculas/Alumnos';
  urlC : string = 'http://localhost:8080/15_formacion_matriculas/Cursos';
  urlAC : string = 'http://localhost:8080/15_formacion_matriculas/AlumnosCurso';
  urlCA : string = 'http://localhost:8080/15_formacion_matriculas/CursosAlumno';
  urlAlumno : string = 'http://localhost:8080/15_formacion_matriculas/Alumno';
  urlCurso : string = 'http://localhost:8080/15_formacion_matriculas/Curso';
  urlMatricular : string = 'http://localhost:8080/15_formacion_matriculas/Matricular';
  urlMatriculas : string = 'http://localhost:8080/15_formacion_matriculas/Matriculas';
  urlCursosNoMatriculados : string = 'http://localhost:8080/15_formacion_matriculas/CursosNoMatriculados';

  constructor(private _httpClient : HttpClient) { }

  public alumnos() {
    return this._httpClient.get<Alumno[]>(this.urlA);
  }

  public cursos() {
    return this._httpClient.get<Curso[]>(this.urlC);
  }

  public alumnosCurso(nombre : string) {
    return this._httpClient.get<Alumno[]>(this.urlAC, {params : {"nombre" : nombre}});
  }

  public cursosAlumno(usuario : string) {
    return this._httpClient.get<Curso[]>(this.urlCA, {params : {"usuario" : usuario}})
  }

  public alumno(nombre : string) {
    return this._httpClient.get<Alumno>(this.urlAlumno, {params : {"nombre" : nombre}});
  }

  public curso(nombre : string) {
    return this._httpClient.get<Curso>(this.urlCurso, {params : {"nombre" : nombre}});
  }
  
  public matricular(usuario : string, idCurso : number) : Observable<any>  {
    let body = "usuario=" + usuario + "&idCurso=" + idCurso;
    console.log(body);
    console.log(this.urlMatricular)
    return this._httpClient.post<any>(this.urlMatricular, body);
  }

  public mostrarMatriculas(fechaInicio : string, fechaFin : string) {
    return this._httpClient.get<Matricula[]>(this.urlMatriculas, {params : {"fechaInicio" : fechaInicio, "fechaFin" : fechaFin}});
  }

  public cursosNoMatriculados(usuario : string) {
    return this._httpClient.get<Curso[]>(this.urlCursosNoMatriculados, {params : {"usuario" : usuario}});
  }
}
