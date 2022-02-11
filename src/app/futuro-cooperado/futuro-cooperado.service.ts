import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cooperado } from '../model/cooperado';

@Injectable({
  providedIn: 'root'
})
export class FuturoCooperadoService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  verificarFuturoCooperado(cpf: string): Observable<Cooperado[]> {
    return this.http.get<Cooperado[]>(`${environment.url}/cooperados?cpf=${cpf}`, { headers: this.headers }).pipe(first())
  }
}
