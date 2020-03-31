import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('mensagensContainer', {static: false}) mensagensContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.mensagens) {
      console.log(this.mensagensContainer);
      setTimeout(() => {
        this.mensagensContainer.nativeElement.scrollTop = this.mensagensContainer.nativeElement.scrollHeight;
      }, 10);
    }
  }
}
