import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuleService {

  constructor(private http: HttpClient) {}

  comprobarFiltro(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Especificamos que estamos enviando JSON
    });

    const url = 'http://localhost:8081/sensor';
    return this.http.get(url, { headers, responseType: 'text' }); 
  }

  generarActa(asignatura: string, idProfesor: number, idEstudiante: number, nota: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Especificamos que estamos enviando JSON
    });

    const url = `http://localhost:8081/actas?asignatura=${encodeURIComponent(asignatura)}&idProfesor=${encodeURIComponent(idProfesor)}&idEstudiante=${encodeURIComponent(idEstudiante)}&nota=${encodeURIComponent(nota)}`;
    return this.http.get(url, { headers, responseType: 'text' });
  }

  reservarAula(idAula: number, inicio: string, fin: string, email: string): Observable<any> {
    const url = `http://localhost:8081/reserva/${idAula}`;
    
    // Formatear las fechas para que Mule pueda procesarlas correctamente
    const formattedInicio = new Date(inicio).toISOString().split('.')[0];
    const formattedFin = new Date(fin).toISOString().split('.')[0];
    
    const body = {
      inicio: formattedInicio,
      fin: formattedFin,
      email: email
    };
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, body, { headers });
  }
}
