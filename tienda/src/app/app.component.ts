import { Component } from '@angular/core';
import { Producto } from './model/Producto';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  seccion : string;
  productos : Producto[];

  constructor(private _productosService : ProductosService) {

  }

  public busqueda() {
    this._productosService.buscar(this.seccion).subscribe(data => this.productos = data);
  }
}
