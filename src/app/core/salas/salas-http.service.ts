import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Sala } from '../../shared/interfaces/sala';

const API_URL = environment.ApiLocal;
const mockSalasList: Sala[] = [
  {
    id: 1,
    descricao: 'string',
    integrantes: [
      {
        id: 1,
        cpf: 'string',
        nome: 'string',
        email: 'string',
        is_admin: false,
        is_active: false,
        is_moderator: false,
        is_connected: false
      },
      {
        id: 2,
        cpf: 'string',
        nome: 'string',
        email: 'string',
        is_admin: false,
        is_active: false,
        is_moderator: false,
        is_connected: false
      },
    ],
    data: new Date(),
    messages: [
      {
        id: 1,
        owner: 1,
        date: new Date(),
        texto: 'string'
      },
      {
        id: 2,
        owner: 1,
        date: new Date(),
        texto: 'string'
      },
      {
        id: 3,
        owner: 2,
        date: new Date(),
        texto: 'string'
      },
      {
        id: 4,
        owner: 2,
        date: new Date(),
        texto: 'string'
      },
    ],
    is_active: false
  },
  {
    id: 2,
    descricao: 'string',
    integrantes: [
      {
        id: 1,
        cpf: 'string',
        nome: 'string',
        email: 'string',
        is_admin: false,
        is_active: false,
        is_moderator: false,
        is_connected: false
      },
      {
        id: 2,
        cpf: 'string',
        nome: 'string',
        email: 'string',
        is_admin: false,
        is_active: false,
        is_moderator: false,
        is_connected: false
      },
    ],
    data: new Date(),
    messages: [
      {
        id: 1,
        owner: 1,
        date: new Date(),
        texto: 'string'
      },
      {
        id: 2,
        owner: 1,
        date: new Date(),
        texto: 'string'
      },
      {
        id: 3,
        owner: 2,
        date: new Date(),
        texto: 'string'
      },
      {
        id: 4,
        owner: 2,
        date: new Date(),
        texto: 'string'
      },
    ],
    is_active: false
  }
];
@Injectable({
  providedIn: 'root'
})
export class SalasHttpService {

  constructor(private http: HttpClient) { }

  getAllSalas(): Observable<Sala[]> {
    //return this.http.get<Sala[]>(API_URL + `/salas-chat/`);
    return of(mockSalasList);
  }

  getSalaById(id: number): Observable<Sala> {
    return this.http.get<Sala>(API_URL + `/salas-chat/${id}/`);
  }

  criarSala(newSala: Sala): Observable<Sala> {
    return this.http.post<Sala>(API_URL + `/salas-chat/`, newSala);
  }

  ativarSala(idSala): Observable<Sala> {
    return this.http.patch<Sala>(API_URL + `/salas-chat/${idSala}/`, {is_active: true});
  }

  receberTodasAsSalasDeUmIntegrante(idIntegrante): Observable<Sala[]> {
    return this.http.get<Sala[]>(API_URL + `/salas-chat-user/${idIntegrante}/`);
  }
}
