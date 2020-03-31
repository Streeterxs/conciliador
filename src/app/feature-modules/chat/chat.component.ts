import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { concatMap, catchError } from 'rxjs/operators';
import { Subscription, throwError, Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

import { SalasWebsocketService } from '../../core/salas/salas-websocket.service';
import { MessageService } from '../../core/message/message.service';
import { User } from '../../core/user/user';
import { UserService } from '../../core/user/user.service';
import { Message } from '../../core/message/message';

import { Sala } from '../../shared/interfaces/sala';
import { AlertType } from '../../shared/enum/alert-type.enum';
import { Mensagem } from '../../shared/interfaces/mensagem';
import { Role } from 'src/app/core/user/role.enum';
import { SalasFacadeService } from 'src/app/core/salas/salas-facade.service';
import { IMessage } from '@stomp/stompjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    trigger(
      'messageAnimation',
      [
        transition(
          ':leave', [
            style({transform: 'translateY(0)', 'opacity': 1}),
            animate('0.3s ease-out', style({transform: 'translateY(-20%)', 'opacity': 0})),
          ]
        ),
        transition(
          ':enter', [
            style({transform: 'translateY(-20%)', 'opacity': 0}),
            animate('0.3s ease-in', style({transform: 'translateY(0)', 'opacity': 1}))
          ]
        )
      ]
    )]
})
export class ChatComponent implements OnInit, OnDestroy {

  sala: Sala;
  loggedUser: User;
  messageObj: Message;

  websocketSubject: Observable<IMessage>;

  messageSubscription: Subscription;
  userSubscription: Subscription;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _salasFacadeService: SalasFacadeService,
    private _router: Router,
    private _messageService: MessageService,
    private _userService: UserService
    ) {}

  ngOnInit() {
    this.inicializarMensagensParaOChat();
    this.userSubscription = this._userService.userSubject$.pipe(concatMap(user => {
      this.loggedUser = user;
      return this._salasFacadeService.getSalaById(this._activatedRoute.snapshot.params.id);
    }), catchError(error => throwError(error))).subscribe(sala => {
      console.log(sala);
      this.sala = sala;
      this._salasFacadeService.conectarWebsocketPorSala();
      this.connectarCanalSala(sala);
    }, err => {
      if (err.status === 404) {
        const message: Message = {
          strongText: 'Aviso! ',
          messageText: 'Esta sala não existe, você foi redirecionado.',
          messageType: AlertType.WARNING,
          isToShow: true
        };
        this._messageService.newMessage = message;
        this._router.navigate(['conciliador']);
      } else if (err.status === 403) {
        const message: Message = {
          strongText: 'Aviso! ',
          messageText: 'Você não tem permissão para entrar nesta sala, você foi redirecionado.',
          messageType: AlertType.WARNING,
          isToShow: true
        };
        this._messageService.newMessage = message;
        this._router.navigate(['conciliador']);
      }
    }, () => {
      console.log('[Chat Component] concluiu inscrição no http');
    });
  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  inicializarMensagensParaOChat() {
    this.messageSubscription = this._messageService.messageObservable.subscribe(message => {
      this.messageObj = {...message};
      setTimeout(() => {
        this._messageService.clearMessage();
      }, 4000);
    });
  }

  checaSeSalaEstaAtivaERedirecionaCasoNao(sala: Sala) {
    if (sala.is_active) {
      return;
    } else if (!this.loggedUser.roles.includes(Role[Role.ROLE_ADMIN]) || !this.loggedUser.roles.includes(Role[Role.ROLE_MODERATOR])) {
      const message: Message = {
        strongText: 'Aviso! ',
        messageText: 'Esta sala ainda não está ativa.',
        messageType: AlertType.WARNING,
        isToShow: true
      };
      this._messageService.newMessage = message;
      this._router.navigate(['conciliador']);
    }
  }

  chamarAtivacaoSala() {
    this._salasFacadeService.ativarSala(this.sala);
  }

  enviarNovaMensagem(mensagem: Mensagem) {
    this._salasFacadeService.publicarMensagemChat(this.loggedUser, mensagem, this.sala);
  }

  connectarCanalSala(sala: Sala) {
    this._salasFacadeService.canalSalaMensagensWebsocket(sala).subscribe(mensagem => {
      console.log(mensagem);
      const parsedMessage = JSON.parse(mensagem.body);
      console.log(parsedMessage);
      this.switchMessageType(parsedMessage,
        () => {},
        () => {},
        () => {
          this.sala.mensagens = this.sala.mensagens.concat(parsedMessage.mensagem);
        });
    });
  }

  switchMessageType(message, callbackJoin, callbackLeave, callbackChat) {
    switch(message.type) {
      case 'JOIN':
        callbackJoin();
        break;
      case 'LEAVE':
        callbackLeave();
        break;
      case 'CHAT':
        callbackChat();
        break;
    }
  }
}
