import { Component, OnInit, Input } from '@angular/core';

import { Mensagem } from '../../../shared/interfaces/mensagem';
import { UserService } from '../../../core/user/user.service';
import { User } from '../../../core/user/user';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent implements OnInit {
  @Input() mensagem?: Mensagem;

  usuarioCriador: User;
  currentUser: User;

  isTheOwner = false;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.currentUser = this._userService.getUser();
    this._userService.getUserById(this.mensagem.owner).subscribe(usuario => {
      this.usuarioCriador = usuario;
    });
    console.log(this.usuarioCriador);
    console.log(this.currentUser);
    console.log(this.mensagem);
    this.isTheOwner = this.currentUser.id === this.mensagem.owner? true : false;
  }

}
