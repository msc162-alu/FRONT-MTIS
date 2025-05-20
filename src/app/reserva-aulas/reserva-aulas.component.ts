import { Component } from '@angular/core';
import { MuleService } from '../services/mulesoft/mulesfot.services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AulaDisponible {
  id: string;
  edificio: string;
  numero: string;
  capacidad: string;
  tieneProyector: string;
  tieneWifi: string;
}

@Component({
  selector: 'app-reserva-aulas',
  templateUrl: './reserva-aulas.component.html',
  styleUrls: ['./reserva-aulas.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ReservaAulasComponent {
  idAula: number = 0;
  inicio: string = '';
  fin: string = '';
  email: string = '';
  
  mensajeExito: string = '';
  mensajeError: string = '';
  aulasDisponibles: AulaDisponible[] = [];

  constructor(private muleService: MuleService) {}
  onSubmit() {
    this.mensajeExito = '';
    this.mensajeError = '';
    this.aulasDisponibles = [];
  
    this.muleService.reservarAula(this.idAula, this.inicio, this.fin, this.email)
      .subscribe({
        next: (response) => {
          if (response.aulas && response.aulas.length > 0) {
            this.mensajeError = response.mensaje;
  
            const aulasArray: AulaDisponible[] = [];
  
            // Recorremos TODAS las propiedades del objeto de response.aulas[0]
            const rawAulas = response.aulas[0];
  
            for (const key in rawAulas) {
              const aula = rawAulas[key];
              // Evitar añadir cosas no válidas
              if (aula && typeof aula === 'object' && 'id' in aula && 'numero' in aula) {
                aulasArray.push({
                  id: aula.id,
                  edificio: aula.edificio,
                  numero: aula.numero,
                  capacidad: aula.capacidad,
                  tieneProyector: aula.tieneProyector,
                  tieneWifi: aula.tieneWifi
                });
              }
            }
  
            // Aquí actualizas el array que la tabla va a mostrar
            this.aulasDisponibles = aulasArray;
  
          } else {
            this.mensajeExito = '✅ Reserva confirmada';
          }
        },
        error: (error) => {
          this.mensajeError = 'Error al realizar la reserva: ' + error.message;
        }
      });
  }
  
}