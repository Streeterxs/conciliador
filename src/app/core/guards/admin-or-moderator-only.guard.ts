import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';
import { AlertType } from '../../shared/enum/alert-type.enum';
import { Role } from '../user/role.enum';

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
      if (this._userService.isUserStaff()) {
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
      const message: Message = {
        strongText: '',
        messageText: 'Faça seu login para entrar nesta página.',
        messageType: AlertType.WARNING,
        isToShow: true
      };
      this._messageService.newMessage = message;
      this._router.navigate(['conciliador', 'autenticacao', 'login']);
      return false;
    }
  }
}
