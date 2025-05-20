import { Component } from '@angular/core';
import { ReservaService } from '../services/reserva/reserva.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Aula {
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
  aulasDisponibles: Aula[] = [];

  constructor(private reservaService: ReservaService) {}

  onSubmit() {
    this.mensajeExito = '';
    this.mensajeError = '';
    this.aulasDisponibles = [];

    this.reservaService.reservarAula(this.idAula, this.inicio, this.fin, this.email)
      .subscribe({
        next: (response) => {
          if (response.aulas) {
            this.mensajeError = response.mensaje;
            this.aulasDisponibles = response.aulas;
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