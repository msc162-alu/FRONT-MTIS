import { Component } from '@angular/core';
import { MuleService } from '../services/mulesoft/mulesfot.services';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actas',
  imports: [NgIf, FormsModule],
  templateUrl: './actas.component.html',
  styleUrl: './actas.component.css'
})
export class ActasComponent {

  constructor(private muleService: MuleService) { }

  datos: any = '';
  error: any = '';
  asignatura: string = '';
  idProfesor: number = 0;
  idEstudiante: number = 0;
  nota: number = 0;

  actas(asignatura: string, idProfesor: number, idEstudiante: number, nota: number) {
    this.muleService.generarActa(asignatura, idProfesor, idEstudiante, nota).subscribe({
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
