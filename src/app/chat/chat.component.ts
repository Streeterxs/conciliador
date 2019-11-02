import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { concatMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { SalasStoreService } from '../core/salas/salas-store.service';
import { MessageService } from '../core/message/message.service';
import { Message } from '../core/message/message';
import { AlertType } from '../shared/enum/alert-type.enum';

import { Sala } from '../shared/interfaces/sala';
import { SalasWebsocketService } from '../core/salas/salas-websocket.service';
import { UserService } from '../core/user/user.service';
import { User } from '../core/user/user';


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

  messageSubscription: Subscription;
  userSubscription: Subscription;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _salasStoreService: SalasStoreService,
    private _router: Router,
    private _messageService: MessageService,
    private _salasWebsocketService: SalasWebsocketService,
    private _userService: UserService
    ) {}

  ngOnInit() {
    this.inicializarMensagensParaOChat();
    this.userSubscription = this._userService.userSubject$.pipe(concatMap(user => {
      this.loggedUser = user;
      return this._salasStoreService.getSala(this._activatedRoute.snapshot.params.id);
    })).subscribe(sala => {
      this.sala = sala;
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
      this._salasWebsocketService.recebeSalaIdERetornaWebsocketSubject(this.sala.id).subscribe(teste => console.log(teste));
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
    } else if (!this.loggedUser.is_admin || !this.loggedUser.is_moderator) {
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
    this._salasStoreService.enviarAtivacaoDeSala(this.sala).subscribe(sala => {
      this.sala = sala;
    }, err => {
      const message: Message = {
        strongText: 'Error! ',
        messageText: 'Não foi possível ativar esta sala.',
        messageType: AlertType.DANGER,
        isToShow: true
      };
      this._messageService.newMessage = message;
    }, () => {
      const message: Message = {
        strongText: '',
        messageText: 'Sala foi ativada.',
        messageType: AlertType.SUCCESS,
        isToShow: true
      };
      this._messageService.newMessage = message;
    });
  }
}
