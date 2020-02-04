import { Injectable } from '@angular/core';

import * as jtw_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { Token } from './token';
import { TokenDecoded } from './token-decoded';

@Injectable({ providedIn: 'root'})
export class TokenService {

    private _token: BehaviorSubject<Token> = new BehaviorSubject(null);
    token$ = this._token.asObservable();

    constructor() {
        if (this.hasToken()) {
            this._token.next(
                    this.getToken()
            );
        } else {
            this._token.next(
                null
            );
        }
    }


  hasToken() {
      console.log('[Token Service] usuário está logado? ', !!this.getToken());
      return !!this.getToken();
  }

  setToken(token: Token) {
        window.localStorage.setItem('token', JSON.stringify(token));
        this._token.next(token);
  }

  getToken(): Token {
      return JSON.parse(window.localStorage.getItem('token'));
  }

  removeToken() {
      window.localStorage.removeItem('token');
      this._token.next(null);
  }

  decodeToken(accessToken: string): TokenDecoded {
      return jtw_decode(accessToken);
  }

  tokenIsExpired() {
      const time = new Date().getTime();
      return time > this._token.value.expiration * 1000;
  }
}
