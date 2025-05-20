import { NgIf, NgFor, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MuleService } from '../services/mulesoft/mulesfot.services';

@Component({
  selector: 'app-expedicion-titulo',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, JsonPipe],
  templateUrl: './expedicion-titulo.component.html',
  styleUrl: './expedicion-titulo.component.css'
})
export class ExpedicionTituloComponent {
  
  // Parámetros para la creación de solicitud
  idEstudianteTitulacion: number = 1;
  
  // Parámetros para la expedición de título
  idSolicitud: number = 1;
  numeroRegistro: string = 'REG-2025-001';
  
  // Parámetros para listar solicitudes
  filtroNifNie: string = '';
  filtroEstado: string = '';
  estadosPosibles: string[] = ['pendiente', 'validacion', 'aprobada', 'emitida', 'entregada', 'rechazada'];
  
  datos: any = null;
  error: any = null;

  constructor(private muleService: MuleService) {}

  // Helper method to get stringified data
  getDatosString(): string {
    return this.datos ? JSON.stringify(this.datos, null, 2) : '';
  }
  
  // Helper method to get stringified error
  getErrorString(): string {
    return this.error ? JSON.stringify(this.error, null, 2) : '';
  }

  crearSolicitud() {
    // Limpiar respuestas anteriores
    this.datos = null;
    this.error = null;
    
    this.muleService.crearSolicitudTitulo(this.idEstudianteTitulacion).subscribe({
      next: (res) => {
        this.datos = res;
        console.log('Respuesta de creación de solicitud:', res);
      },
      error: (err) => {
        this.error = err;
        console.error('Error en creación de solicitud:', err);
      },
    });    
  }

  expedirTitulo() {
    // Limpiar respuestas anteriores
    this.datos = null;
    this.error = null;
    
    this.muleService.expedirTitulo(this.idSolicitud, this.numeroRegistro).subscribe({
      next: (res) => {
        this.datos = res;
        console.log('Respuesta de expedición:', res);
      },
      error: (err) => {
        this.error = err;
        console.error('Error en expedición:', err);
      },
    });    
  }
  
  listarSolicitudes() {
    // Limpiar respuestas anteriores
    this.datos = null;
    this.error = null;
    
    const nifnie = this.filtroNifNie.trim() || undefined;
    const estado = this.filtroEstado || undefined;
    
    this.muleService.listarSolicitudes(nifnie, estado).subscribe({
      next: (res) => {
        this.datos = res;
        console.log('Respuesta de listado de solicitudes:', res);
      },
      error: (err) => {
        this.error = err;
        console.error('Error en listado de solicitudes:', err);
      },
    });
  }
}