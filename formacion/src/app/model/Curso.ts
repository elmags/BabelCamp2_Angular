import { Alumno } from "./Alumno";

export class Curso {
    idCurso!: number;
	nombre!: string;
	duracion!: number;
	fechaInicio!: Date;
	precio!: number;
	alumnos!:Alumno[];
}