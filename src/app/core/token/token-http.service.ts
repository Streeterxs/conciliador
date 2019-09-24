import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TokenService } from './token.service';

import { environment } from '../../../environments/environment';
import { share, tap } from 'rxjs/operators';
const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class TokenHttpService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  refreshToken(): Observable<any>{
    const refreshToken = this.tokenService.getToken("refreshToken");
    console.log("entrou nessa bagaça")
    return this.http.post(
      API_URL + '/api/token/refresh/', 
      { refresh: refreshToken },
      { observe: 'response' }
    ).pipe(share(),tap(res => {
      const authToken = JSON.stringify(res.body.valueOf());
      this.tokenService.setToken("accessToken", JSON.parse(authToken).access);
      this.tokenService.setToken("refreshToken", JSON.parse(authToken).refresh);
    }))
  }

  tokenVerify(){
    const accessToken = this.tokenService.getToken("accessToken");
    return this.http.post(
      API_URL + '/api/token/verify/',
      { token: accessToken },
      { observe: 'response'} 
    )
  }
}
