import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { AlertType } from '../../shared/enum/alert-type.enum';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _messageService: MessageService
    ) { }

  canActivate() {
    if (this._userService.isLogged()) {
      return true;
    } else {
      const message: Message = {
        strongText: '',
        messageText: 'Faça seu login para entrar nesta página.',
        messageType: AlertType.WARNING,
        isToShow: true
      };
      this._messageService.newMessage = message;
      this._router.navigate(['conciliador', 'login']);
      return false;
    }
  }
}
