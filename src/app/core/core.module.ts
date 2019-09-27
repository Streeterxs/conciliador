import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestInterceptor } from './interceptors/request.interceptor';
import { AuthenticationService } from './auth/authentication.service';
import { UserService } from './user/user.service';
import { UserHttpService } from './user/user-http.service';
import { MessageService } from './message/message.service';
import { SalasHttpService } from './salas/salas-http.service';
import { SalasStoreService } from './salas/salas-store.service';
import { TokenHttpService } from './token/token-http.service';
import { TokenService } from './token/token.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthenticationService,
    UserService,
    UserHttpService,
    MessageService,
    SalasHttpService,
    SalasStoreService,
    TokenHttpService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }    
  ]
})
export class CoreModule { }
