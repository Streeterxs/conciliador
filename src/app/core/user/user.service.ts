import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import * as jtw_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { UserHttpService } from './user-http.service';
import { User } from './user';

@Injectable({ providedIn: 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userIsLoggedSubject = new BehaviorSubject<boolean>(false);
    private userName: string;

    readonly userIsLoggedSubject$ = this.userIsLoggedSubject.asObservable();
    readonly userSubject$ = this.userSubject.asObservable();

    constructor(private tokenService: TokenService, private _userHttpService: UserHttpService) {
        this.tokenService.accessToken$.subscribe(accessToken => {
            if (this.tokenService.hasToken('accessToken')) {
                this.decodeAndNotify(accessToken);
            }
            this.userIsLoggedSubject.next(!!accessToken);
        });
    }

    setToken(key, token: string) {
        this.tokenService.setToken(key, token);
        if (key === 'accessToken') {
            this.decodeAndNotify(token);
        }
    }

    getUser(): User {
        return this.userSubject.value;
    }

    getUserById(id: number): Observable<User> {
        return this._userHttpService.getUser(id);
    }

    private decodeAndNotify(accessToken) {
        const tokenDecodedInDecodeAndNotify = jtw_decode(accessToken);
        this._userHttpService.getUser(tokenDecodedInDecodeAndNotify.user_id).subscribe(user => {
            this.userSubject.next(user);
            this.userName = user.nome;
        });
    }

    logout(callback?) {
        this.tokenService.removeToken('refreshToken');
        this.tokenService.removeToken('accessToken');
        this.tokenService.nullifyTokensObject();
        this.userSubject.next(null);
        callback();
    }

    isLogged() {
        return this.tokenService.hasToken('accessToken');
    }

    getUserName() {
        return this.userName;
    }

    returnAllRegisteredUsers(): Observable<User[]> {
        return this._userHttpService.getAllUser();
    }
}
