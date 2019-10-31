import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SalasStoreService } from '../core/salas/salas-store.service';
import { MessageService } from '../core/message/message.service';
import { Message } from '../core/message/message';
import { AlertType } from '../shared/enum/alert-type.enum';

import { Sala } from '../shared/interfaces/sala';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  sala: Sala;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _salasStoreService: SalasStoreService,
    private _router: Router,
    private _messageService: MessageService
    ) {}

  ngOnInit() {
    this._salasStoreService.getSala(this._activatedRoute.snapshot.params.id).subscribe(sala => {
      console.log(sala);
      this.sala = sala;
    }, err => {
      const message: Message = {
        strongText: 'Aviso! ',
        messageText: 'Esta sala não existe, você foi redirecionado.',
        messageType: AlertType.WARNING,
        isToShow: true
      };
      this._messageService.newMessage = message;
      this._router.navigate(['conciliador']);
    });
  }

}
