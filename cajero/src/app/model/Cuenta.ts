import { Movimiento } from "./Movimiento";

export class Cuenta {
    numeroCuenta : number;
    saldo : number;
    tipoCuenta : string;
    movimientos : Movimiento[];
}