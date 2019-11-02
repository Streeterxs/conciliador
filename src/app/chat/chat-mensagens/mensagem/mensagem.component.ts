import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Mensagem } from '../../../shared/interfaces/mensagem';
import { UserService } from '../../../core/user/user.service';
import { User } from '../../../core/user/user';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit, OnChanges {
  @Input() mensagem?: Mensagem;
  @Input() loggedUser?;

  usuarioCriador: User;

  isTheOwner = false;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserById(this.mensagem.owner).subscribe(usuario => {
      this.usuarioCriador = usuario;
    });
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (changes.loggedUser) {
      if (this.loggedUser) {
        this.isTheOwner = this.loggedUser.id === this.mensagem.owner ? true : false;
      }
    }
  }

}
