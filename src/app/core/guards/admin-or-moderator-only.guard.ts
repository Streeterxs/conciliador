import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';
import { AlertType } from '../../shared/enum/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AdminOrModeratorOnlyGuard implements CanActivate  {

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _messageService: MessageService
  ) {}

  canActivate() {
    if (this._userService.isLogged()) {
      if (this._userService.getUser() !== null) {
        if (this._userService.getUser().is_moderator || this._userService.getUser().is_admin) {
          return true;
        } else {
          const message: Message = {
            strongText: '',
            messageText: 'Você não tem permissão para entrar nesta página.',
            messageType: AlertType.WARNING,
            isToShow: true
          };
          this._messageService.newMessage = message;
          this._router.navigate(['conciliador']);
          return false;
        }
      } else {
        this._router.navigate(['conciliador']);
      }
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
