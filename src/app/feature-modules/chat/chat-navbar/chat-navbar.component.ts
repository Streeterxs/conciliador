import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.scss']
})
export class ChatNavbarComponent implements OnInit {
  isUserStaff = false;

  @Output() ativacaoEmitter: EventEmitter<any> = new EventEmitter;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.isUserStaff = this._userService.isUserStaff();
  }

  emitAtivacaoSala() {
    this.ativacaoEmitter.emit();
  }
}
