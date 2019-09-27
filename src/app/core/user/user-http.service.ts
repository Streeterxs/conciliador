import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from './user';

const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) { }

  getUser(id): Observable<User>{
    return this.http.get<User>(API_URL + `/users/${id}/`,)
  }

  registerUser(cpf: string, nome: string, email: string, password: string): Observable<User>{
    return this.http.post<User>(
      API_URL + `/users/`,
      {
        cpf: cpf,
        nome: nome,
        email: email,
        password: password
      },
    )
  }

  userActivation(uidb64, token): Observable<User>{
    return this.http.get<User>(
      API_URL + `/auth/activate?uidb64=${uidb64}&token=${token}`
    )
  }

  forgottenPassword(email): Observable<User>{
    return this.http.post<User>(
      API_URL + `/auth/forgotten-password`,
      {email: email},
    )
  }

  passwordReset(password, uidb64, token): Observable<User>{
    return this.http.post<User>(
      API_URL + `/auth/password-reset?uidb64=${uidb64}&token=${token}`,
      {password: password}
    )
  }
}

