import { Component } from '@angular/core';
import { Movimiento } from './model/Movimiento';
import { CajeroService } from './service/cajero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Datos que se recogen
  saldo : number;
  movimientos : Movimiento[];
  fechaInicio : string;
  fechaFin : string;

  constructor(private _cajeroService : CajeroService) { this.getSaldo() }

  public getSaldo() {
    this._cajeroService.mostrarSaldo().subscribe(data => this.saldo = data);
  }

  public getMovimientos() {
    this._cajeroService.mostrarMovimientos(this.fechaInicio, this.fechaFin).subscribe(data => this.movimientos = data);
  }
}
