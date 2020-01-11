import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Mensagem } from '../../../shared/interfaces/mensagem';
import { User } from '../../../core/user/user';

@Component({
  selector: 'app-chat-mensagens',
  templateUrl: './chat-mensagens.component.html',
  styleUrls: ['./chat-mensagens.component.scss']
})
export class ChatMensagensComponent implements OnInit, OnChanges {
  @Input() mensagens?: Mensagem[] = [];
  @Input() loggedUser?: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.mensagens) {
      
    }
  }
}
