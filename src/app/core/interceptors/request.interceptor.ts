import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEvent } from "@angular/common/http";

import { Observable, throwError, of } from "rxjs";
import { catchError } from "rxjs/operators"

import { TokenService } from "../token/token.service";
import { TokenHttpService } from '../token/token-http.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    private _isTokenBeingRefreshed = false;

    constructor(private _injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent 
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

            const tokenHttpService = this._injector.get(TokenHttpService)
            const tokenService = this._injector.get(TokenService)
       
            if(tokenService.hasToken("accessToken")) {
                const token = tokenService.getToken("accessToken");
                req = req.clone({
                    setHeaders: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            }
            console.log(req);
            return next.handle(req).pipe(catchError(response => {
                console.log(response);
                if((!!response.error) && (response.error.code === "token_not_valid")){
                    if(!this._isTokenBeingRefreshed){
                        this._isTokenBeingRefreshed = true;
                        tokenHttpService.refreshToken().subscribe(teste => {}, err=> {
                            if(err.status === 401){
                                tokenService.removeToken("refreshToken");
                                tokenService.removeToken("accessToken");
                                tokenService.nullifyTokensObject();
                            }
                        }, () => {
                            this._isTokenBeingRefreshed = false;
                        });
                        const newtoken = tokenService.getToken("accessToken");
                        const newreq = req.clone({
                            setHeaders: {
                                'Authorization': `Bearer ${newtoken}`
                            }
                        });
                        return next.handle(newreq);
                    } else {
                        return throwError(response)
                    }
                } else{
                    return throwError(response)
                }               
            }))
    }
}
