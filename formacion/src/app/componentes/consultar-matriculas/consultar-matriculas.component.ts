import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/model/Matricula';
import { Alumno } from 'src/app/model/Alumno';
import { Curso } from 'src/app/model/Curso';
import { FormacionService } from 'src/app/service/formacion.service';

@Component({
  selector: 'app-consultar-matriculas',
  templateUrl: './consultar-matriculas.component.html',
  styleUrls: ['./consultar-matriculas.component.css']
})
export class ConsultarMatriculasComponent implements OnInit {

  fechaInicio : string;
  fechaFin : string;
  listaMatriculas : Matricula[];

  constructor(private _formacionService : FormacionService) { }

  ngOnInit(): void {
  }

  public matriculas() {
    this._formacionService.mostrarMatriculas(this.fechaInicio, this.fechaFin).subscribe(data => this.listaMatriculas = data);
  }
}
