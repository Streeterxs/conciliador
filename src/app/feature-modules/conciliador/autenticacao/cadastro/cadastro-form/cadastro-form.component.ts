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

  @Output() emitForm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    this.emitForm.emit("");
  }

}
