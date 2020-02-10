import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../../../../../core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {
  @Input() cadastroForm?: FormGroup;
  @Input() loggedUser?: User;

  roleList = ['ROLE_USER'];
  isUserAdmin: boolean;

  @Output() emitForm = new EventEmitter();
  @Output() concatRoleValue: EventEmitter<string[]> = new EventEmitter();
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.isUserAdmin = this._userService.userIsAdmin();
  }

  formSubmit() {
    this.emitForm.emit('');
  }

  concatToRoleList(event) {
    this.roleList = this.roleList.includes(event) ? this.roleList.filter(role => role !== event) : this.roleList.concat(event);
    this.concatRoleValue.emit(this.roleList);
  }

}
