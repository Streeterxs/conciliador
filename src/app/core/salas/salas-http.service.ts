import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Sala } from '../../shared/interfaces/sala';
import { SalasQueryStoreService } from './salas-query-store.service';

const API_URL = environment.ApiLocal;
@Injectable({
  providedIn: 'root'
})
export class SalasHttpService {
  salasUrl = `${API_URL}/salas`;

  salasQueries;
  constructor(
    private http: HttpClient,
    private _salasQueryStoreService: SalasQueryStoreService
    ) {
      this._salasQueryStoreService.salasQueries$.subscribe(salasQueriesParams => {
        this.salasQueries = salasQueriesParams;
      });
  }

  getAllSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.salasUrl + `/get-salas/`);
  }

  getAllSalasComFiltro(): Observable<HttpResponse<Sala[]>> {
    return this.http.get<Sala[]>(this.salasUrl + `/get-page-salas/`, {params: this.salasQueries, observe: 'response'});
  }

  getSalaById(id: number): Observable<Sala> {
    return this.http.get<Sala>(this.salasUrl + `/get-sala/${id}/`);
  }

  criarSala(newSala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.salasUrl + `/criar-sala/`, newSala);
  }

  ativarSala(idSala): Observable<Sala> {
    return this.http.post<Sala>(this.salasUrl + `/ativar-sala`, idSala);
  }
}
