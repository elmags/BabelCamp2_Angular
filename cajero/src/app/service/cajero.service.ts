import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Movimiento } from '../model/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class CajeroService {

  urlSaldo : string = "Saldo";
  urlMovs : string = "Movimientos";

  // urlSaldo : string = "http://localhost:8080/16_cajero/Saldo";
  // urlMovs : string = "http://localhost:8080/16_cajero/Movimientos";

  constructor(private _httpClient : HttpClient) { }

  public mostrarSaldo() {
    return this._httpClient.get<number>(this.urlSaldo);
  }

  public mostrarMovimientos(fechaInicio : string, fechaFin : string) {
    return this._httpClient.get<Movimiento[]>(this.urlMovs, {params : {"fechaInicio" : fechaInicio, "fechaFin" : fechaFin}})
  }
}
