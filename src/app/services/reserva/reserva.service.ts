import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  reservarAula(idAula: number, inicio: string, fin: string, email: string): Observable<any> {
    const url = `${this.baseUrl}/reserva/${idAula}`;
    const body = {
      inicio: inicio,
      fin: fin,
      email: email
    };
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(url, body, { headers });
  }
}