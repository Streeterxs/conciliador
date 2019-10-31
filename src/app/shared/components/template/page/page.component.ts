import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../../../core/user/user.service';
import { MessageService } from '../../../../core/message/message.service';
import { Message } from '../../../../core/message/message';
import { AlertType } from '../../../../shared/enum/alert-type.enum';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  userIsLogged = false;
  userName;
  constructor(
    private _userService: UserService,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _messageService: MessageService
    ) { }

  ngOnInit() {
    this._userService.userSubject$.subscribe(user => {
      console.log('[Page Component], usuario atual: ', user);
      if (user) {
        this.userName = user.nome;
        this.userIsLogged = this._userService.isLogged();
      } else {
        this.userIsLogged = false;
      }
    });
    console.log(this._activeRoute.snapshot.url);
  }

  logout() {
    this._userService.logout(() => {
      this._router.navigate(['conciliador', 'autenticacao', 'login']);
      const message: Message = {
        strongText: '',
        messageText: 'Usuário foi deslogado.',
        messageType: AlertType.WARNING,
        isToShow: true
      };
      this._messageService.newMessage = message;
    });
  }

}
