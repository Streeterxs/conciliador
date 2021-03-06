import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

import { environment } from '../../../environments/environment';

const API_URL = environment.ApiLocal;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authUrl = `${API_URL}/auth`;

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(cpf: string, password: string) {
    return this.http
      .post(
        this.authUrl + '/signin',
        { cpf, password },
        { observe: 'response'}
      )
      .pipe(tap(res => {
        console.log(res);
        const authToken = JSON.stringify(res.body.valueOf());
        this.userService.setToken(JSON.parse(authToken).accessToken);
      }));
  }
}

