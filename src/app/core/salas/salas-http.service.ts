import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Sala } from '../../shared/interfaces/sala';

const API_URL = environment.ApiLocal;
@Injectable({
  providedIn: 'root'
})
export class SalasHttpService {
  salasUrl = `${API_URL}/api/salas`;

  constructor(private http: HttpClient) { }

  getAllSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.salasUrl + `/get-salas/`);
  }

  getSalaById(id: number): Observable<Sala> {
    return this.http.get<Sala>(this.salasUrl + `/get-salas/${id}/`);
  }

  criarSala(newSala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.salasUrl + `/criar-sala/`, newSala);
  }

  ativarSala(idSala): Observable<Sala> {
    return this.http.patch<Sala>(this.salasUrl + `/salas-chat/${idSala}/`, {is_active: true});
  }
}
