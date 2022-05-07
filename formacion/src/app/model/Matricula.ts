import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

export class Matricula {
	nota!: number;
    alumno : Alumno = new Alumno();
    curso : Curso = new Curso();
}