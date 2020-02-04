import { Injectable, Injector } from '@angular/core';
import {
    HttpInterceptor, HttpRequest, HttpHandler,
    HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpEvent } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from '../token/token.service';
import { TokenHttpService } from '../token/token-http.service';
import { RequestQueueService } from './request-queue.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private _injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

            const tokenHttpService = this._injector.get(TokenHttpService);
            const tokenService = this._injector.get(TokenService);
            const requestQueueServiceObj = this._injector.get(RequestQueueService);

            if (tokenService.hasToken() && !tokenService.tokenIsExpired()) {
                const token = tokenService.getToken().accessToken;
                req = req.clone({
                    setHeaders: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            } else if (tokenService.hasToken()) {
                tokenService.removeToken();
            }

            return next.handle(req);
    }
}
