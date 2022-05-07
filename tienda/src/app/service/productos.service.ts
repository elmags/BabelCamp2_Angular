import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // url : string = "http://localhost:8080/06_tienda_ajax/Buscador";
  url : string = "Buscador";

  constructor(private _httpClient : HttpClient) { }

  public buscar(seccion : string) {
    return this._httpClient.get<Producto[]>(this.url, {params : {"seccion" : seccion}});
  }
}