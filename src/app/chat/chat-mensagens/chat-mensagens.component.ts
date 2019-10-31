import { Component, OnInit, Input } from '@angular/core';

import { Mensagem } from '../../shared/interfaces/mensagem';

@Component({
  selector: 'app-chat-mensagens',
  templateUrl: './chat-mensagens.component.html',
  styleUrls: ['./chat-mensagens.component.scss']
})
export class ChatMensagensComponent implements OnInit {
  @Input() mensagens?: Mensagem[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.mensagens);
  }

}
