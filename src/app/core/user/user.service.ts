import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import * as jtw_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { UserHttpService } from './user-http.service';
import { User } from './user';
import { Role } from './role.enum';
import { Token } from '../token/token';

@Injectable({ providedIn: 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userIsLoggedSubject = new BehaviorSubject<boolean>(false);
    private userName: string;

    readonly userIsLoggedSubject$ = this.userIsLoggedSubject.asObservable();
    readonly userSubject$ = this.userSubject.asObservable();

    constructor(private tokenService: TokenService, private _userHttpService: UserHttpService) {
        this.tokenService.token$.subscribe(token => {
            if (this.tokenService.hasToken()) {
                this.decodeAndNotify(token.accessToken);
            }
            this.userIsLoggedSubject.next(!!token);
        });
    }

    setToken(accessToken: string) {
        const tokenDecoded = this.tokenService.decodeToken(accessToken);
        this.tokenService.setToken({accessToken, expiration: tokenDecoded.exp, creation: tokenDecoded.iat});
        this.decodeAndNotify(accessToken);
    }

    getUser(): User {
        return this.userSubject.value;
    }

    getUserById(id: number): Observable<User> {
        return this._userHttpService.getUser(id);
    }

    private decodeAndNotify(accessToken) {
        const tokenDecodedInDecodeAndNotify = this.tokenService.decodeToken(accessToken);
        const newUser: User = {
            cpf: tokenDecodedInDecodeAndNotify.sub,
            nome: tokenDecodedInDecodeAndNotify.nome,
            email: tokenDecodedInDecodeAndNotify.email,
            id: tokenDecodedInDecodeAndNotify.id,
            roles: tokenDecodedInDecodeAndNotify.role,
            ativo: tokenDecodedInDecodeAndNotify.ativo
        };
        console.log(newUser);
        this.userSubject.next(newUser);
    }

    logout(callback?) {
        this.tokenService.removeToken();
        this.userSubject.next(null);
        callback();
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    userIsModerator() {
        return this.userSubject.value.roles.includes(Role[Role.ROLE_MODERATOR]);
    }

    userIsAdmin() {
        return this.userSubject.value.roles.includes(Role[Role.ROLE_ADMIN]);
    }
}
