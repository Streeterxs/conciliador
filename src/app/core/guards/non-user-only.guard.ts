import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';
import { AlertType } from '../../shared/enum/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NonUserOnlyGuard implements CanActivate {
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _messageService: MessageService
    ) { }

  canActivate() {
    if (!this._userService.isLogged()) {
      return true;
    } else {
      const message: Message = {
        strongText: '',
        messageText: 'Você já está logado.',
        messageType: AlertType.WARNING,
        isToShow: true
      };
      this._messageService.newMessage = message;
      this._router.navigate(['conciliador']);
      return false;
    }
  }
}
