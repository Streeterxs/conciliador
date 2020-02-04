import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { User } from '../../../core/user/user';
import { Integrante } from '../../../shared/interfaces/integrante';
import { Role } from 'src/app/core/user/role.enum';

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
          return integrante.user;
        }).filter(user => user.roles.includes(Role[Role.ROLE_ADMIN]) || user.roles.includes(Role[Role.ROLE_MODERATOR]));
        this.usuariosComuns = this.integrantes.map(integrante => {
          return integrante.user;
        }).filter(user => !user.roles.includes(Role[Role.ROLE_ADMIN]) && !user.roles.includes(Role[Role.ROLE_MODERATOR]));
      }
    }
  }

}
