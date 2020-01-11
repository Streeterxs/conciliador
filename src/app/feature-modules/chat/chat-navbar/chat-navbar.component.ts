import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../core/user/user';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.scss']
})
export class ChatNavbarComponent implements OnInit {
  @Input() loggedUser?: User;

  @Output() ativacaoEmitter: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  emitAtivacaoSala() {
    this.ativacaoEmitter.emit();
  }
}
