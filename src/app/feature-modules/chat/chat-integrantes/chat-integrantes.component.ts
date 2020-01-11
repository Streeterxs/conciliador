import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../core/user/user';
import { Integrante } from '../../../shared/interfaces/integrante';

@Component({
  selector: 'app-chat-integrantes',
  templateUrl: './chat-integrantes.component.html',
  styleUrls: ['./chat-integrantes.component.scss']
})
export class ChatIntegrantesComponent implements OnInit, OnChanges {
  @Input() integrantes?: Integrante[] = [];

  faUser = faUser;
  moderadores: User[] = [];
  usuariosComuns: User[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (changes.integrantes) {
      if (this.integrantes !== null) {
        this.moderadores = this.integrantes.map(integrante => {
          return integrante.integrante;
        }).filter(user => user.is_admin || user.is_moderator);
        this.usuariosComuns = this.integrantes.map(integrante => {
          return integrante.integrante;
        }).filter(user => !user.is_admin && !user.is_moderator);
      }
    }
  }

}
