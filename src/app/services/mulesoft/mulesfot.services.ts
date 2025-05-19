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

  
}
