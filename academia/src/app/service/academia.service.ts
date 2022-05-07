import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AcademiaService {

  urlB : string = "Buscador";
  urlC : string = "Cursos"

  constructor(private _httpClient : HttpClient) { }

  
  public buscar(curso : string) {
    return this._httpClient.get<Alumno[]>(this.urlB, {params : {"curso" : curso}});
  }

  public cursos() {
    return this._httpClient.get<String[]>(this.urlC);
  }
}
