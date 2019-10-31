import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../core/user/user';

@Component({
  selector: 'app-chat-integrantes',
  templateUrl: './chat-integrantes.component.html',
  styleUrls: ['./chat-integrantes.component.scss']
})
export class ChatIntegrantesComponent implements OnInit {
  @Input() integrantes?: User[];

  moderadores: User[];
  usuariosComuns: User[];
  constructor() { }

  ngOnInit() {
    this.moderadores = this.integrantes.filter(user => user.is_moderador || user.is_admin);
    this.usuariosComuns = this.integrantes.filter(user => !user.is_moderador && !user.is_admin);
    console.log(this.integrantes);
  }

}
