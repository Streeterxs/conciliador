import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../../../../../core/user/user';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss']
})
export class CadastroFormComponent implements OnInit {
  @Input() cadastroForm?: FormGroup;
  @Input() loggedUser?: User;

  roleList = ['ROLE_USER'];

  @Output() emitForm = new EventEmitter();
  @Output() concatRoleValue: EventEmitter<string[]> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    this.emitForm.emit('');
  }

  concatToRoleList(event) {
    this.roleList = this.roleList.includes(event) ? this.roleList.filter(role => role !== event) : this.roleList.concat(event);
    this.concatRoleValue.emit(this.roleList);
  }

}
