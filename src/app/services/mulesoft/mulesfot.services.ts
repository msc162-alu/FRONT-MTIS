import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuleService {

  constructor(private http: HttpClient) { }

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

  consultarEstudiante(nifnie: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = `http://localhost:8081/estudiantes/${encodeURIComponent(nifnie)}`;
    return this.http.get(url, { headers, responseType: 'text' });
  }

  crearSolicitudTitulo(idEstudianteTitulacion: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = `http://localhost:8081/solicitudes?idEstudianteTitulacion=${encodeURIComponent(idEstudianteTitulacion)}`;
    return this.http.get(url, { headers, responseType: 'text' });
  }

  listarSolicitudes(nifnie?: string, estado?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let url = `http://localhost:8081/solicitudes/listar`;

    if (nifnie || estado) {
      url += '?';
      if (nifnie) {
        url += `nifnie=${encodeURIComponent(nifnie)}`;
      }
      if (estado) {
        url += nifnie ? `&estado=${encodeURIComponent(estado)}` : `estado=${encodeURIComponent(estado)}`;
      }
    }

    return this.http.get(url, { headers, responseType: 'text' });
  }

  expedirTitulo(idSolicitud: number, numeroRegistro: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = `http://localhost:8081/titulos?idSolicitud=${encodeURIComponent(idSolicitud)}&numeroRegistro=${encodeURIComponent(numeroRegistro)}`;
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
