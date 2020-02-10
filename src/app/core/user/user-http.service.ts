import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from './user';

const API_URL = environment.ApiLocal;

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  userUrl = `${API_URL}/auth`;

  constructor(private http: HttpClient) { }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.userUrl + `/users/${id}/`);
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + `/get-users/`);
  }

  registerUser(newUser): Observable<User> {
    return this.http.post<User>(
      this.userUrl + `/create-user`,
      newUser,
    );
  }

  userActivation(uidb64, token): Observable<User> {
    return this.http.get<User>(
      this.userUrl + `/auth/activate?uidb64=${uidb64}&token=${token}`
    );
  }

  forgottenPassword(email): Observable<User> {
    return this.http.post<User>(
      API_URL + `/auth/forgotten-password`,
      {email},
    );
  }

  passwordReset(password, uidb64, token): Observable<User> {
    return this.http.post<User>(
      this.userUrl + `/auth/password-reset?uidb64=${uidb64}&token=${token}`,
      {password}
    );
  }

  createUserComRole(user: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}/create-user`, user);
  }

  createUserSemRole(user: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}/signup`, user);
  }

  signin(loginObj): Observable<any> {
    return this.http.post(`${this.userUrl}/signin`, loginObj);
  }
}

