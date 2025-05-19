import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MuleService } from '../services/mulesoft/mulesfot.services';

@Component({
  selector: 'app-sensor-filtros',
  imports: [NgIf],
  templateUrl: './sensor-filtros.component.html',
  styleUrl: './sensor-filtros.component.css'
})
export class SensorFiltrosComponent {

  constructor(private muleService: MuleService) {}

  datos: any = '';
  error: any = '';

  comprobar() {
    this.muleService.comprobarFiltro().subscribe({
      next: (res) => {
        if (res.Error) {
          this.datos = res.Error;
        } else {
          this.datos = res;
        }
        console.log('Respuesta de la notificación:', res);
      },
      error: (err) => {
        if (err.Error) {
          this.datos = err.Error;
        } else {
          this.datos = err;
        }
        console.log('Respuesta de la notificación:', err);
      },
    });    
  }
}
