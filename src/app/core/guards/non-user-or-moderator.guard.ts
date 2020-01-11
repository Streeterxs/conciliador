import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';
import { AlertType } from '../../shared/enum/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NonUserOrModeratorGuard implements CanActivate {
  constructor(
    private _userService: UserService,
    private _router: Router,
    private _messageService: MessageService
    ) { }

  canActivate() {
    if (!this._userService.isLogged() ||
    ((this._userService.getUser() !== null) ?
    (this._userService.isLogged() && (this._userService.getUser().is_admin || this._userService.getUser().is_moderator)
    && this._userService.getUser() !== null) : false)) {
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
