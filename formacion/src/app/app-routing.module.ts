import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosAlumnoComponent } from './componentes/cursos-alumno/cursos-alumno.component';
import { AlumnosCursoComponent } from './componentes/alumnos-curso/alumnos-curso.component';
import { MatricularComponent } from './componentes/matricular/matricular.component';
import { ConsultarMatriculasComponent } from './componentes/consultar-matriculas/consultar-matriculas.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : 'cursosAlumno', component : CursosAlumnoComponent},
  {path : 'alumnosCurso', component : AlumnosCursoComponent},
  {path : 'matricular', component : MatricularComponent},
  {path : 'matriculas', component : ConsultarMatriculasComponent},
  {path : '/', component : AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }