import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Sala } from '../../shared/interfaces/sala';

const API_URL = environment.ApiUrl;
@Injectable({
  providedIn: 'root'
})
export class SalasHttpService {

  constructor(private http: HttpClient) { }

  getAllSalas(): Observable<Sala[]>{
    return this.http.get<Sala[]>(API_URL + `/salas-chat/`)
  }
}
