import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CursosAlumnoComponent } from './componentes/cursos-alumno/cursos-alumno.component';
import { AlumnosCursoComponent } from './componentes/alumnos-curso/alumnos-curso.component';
import { FormsModule } from '@angular/forms';
import { MatricularComponent } from './componentes/matricular/matricular.component';
import { ConsultarMatriculasComponent } from './componentes/consultar-matriculas/consultar-matriculas.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosAlumnoComponent,
    AlumnosCursoComponent,
    MatricularComponent,
    ConsultarMatriculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
