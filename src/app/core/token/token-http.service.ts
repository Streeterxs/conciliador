import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';

import { TokenService } from './token.service';

import { environment } from '../../../environments/environment';

const API_URL = environment.ApiLocal;

@Injectable({
  providedIn: 'root'
})
export class TokenHttpService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  refreshToken(): Observable<any>{
    const refreshToken = this.tokenService.getToken();
    return this.http.post(
      API_URL + '/token/refresh/',
      { refresh: refreshToken },
      { observe: 'response' }
    ).pipe(share(), tap(res => {
      const authToken = JSON.stringify(res.body.valueOf());
      this.tokenService.setToken(JSON.parse(authToken).access);
      this.tokenService.setToken(JSON.parse(authToken).refresh);
    }));
  }

  tokenVerify(){
    const accessToken = this.tokenService.getToken();
    return this.http.post(
      API_URL + '/token/verify/',
      { token: accessToken },
      { observe: 'response'}
    );
  }
}
