import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class TokenService {

  constructor(){
      if(this.hasToken("accessToken") && this.hasToken("refreshToken")){
          this._accessToken.next(
                  this.getToken("accessToken")
          )
      } else {
          this._accessToken.next(
              null
          )
      }
  }

  private _accessToken: BehaviorSubject<string> = new BehaviorSubject("");

  accessToken$ = this._accessToken.asObservable();
  
  hasToken(key) {
      return !!this.getToken(key);
  }

  setToken(key, token) {
      window.localStorage.setItem(key, token);
      if(key === "accessToken"){
          console.log("entrando set token");
          this._accessToken.next(token);
      }
  }

  getToken(key) {
      return window.localStorage.getItem(key);
  }

  removeToken(key) {
      window.localStorage.removeItem(key);
  }

  nullifyTokensObject(){
      this._accessToken.next(null)
  }
}