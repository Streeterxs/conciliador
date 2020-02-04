import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { passwordRepeatValidator } from '../password-repeat.directive';
import { User } from '../../../../core/user/user';
import { UserHttpService } from '../../../../core/user/user-http.service';
import { MessageService } from '../../../../core/message/message.service';
import { UserService } from '../../../../core/user/user.service';
import { SalasStoreService } from '../../../../core/salas/salas-store.service';
import { AlertType } from '../../../../shared/enum/alert-type.enum';
import { Message } from '../../../../core/message/message';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  loggedUser: User;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userHttpService: UserHttpService,
    private _messageService: MessageService,
    private _userService: UserService,
    private _salas: SalasStoreService) { }

  ngOnInit() {
    this.cadastroForm = this.generateCadastroForm();
  }

  generateCadastroForm() {
    return this._formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
      role: null
    }, {
        validator: passwordRepeatValidator
      }
    );
  }

  getLoggedUser() {
    this.loggedUser = this._userService.getUser();
  }

  formSubmited() {
    if (this._userService.isLogged() && (this._userService.userIsModerator || this._userService.userIsAdmin)) {
      this.criarUsuarioComRole();
    } else if (!this._userService.isLogged()) {
      this.criarUsuarioSemRole();
    } else {
      this._router.navigate(['conciliador']);
    }
  }

  criarUsuarioSemRole() {
    this._userHttpService.createUserSemRole(this.cadastroForm.value).subscribe(
      () => {},
      err => {
        const message: Message = {
          strongText: '',
          messageText: 'Erro na hora do cadastro',
          messageType: AlertType.DANGER,
          isToShow: true
        };
        this._messageService.newMessage = message;
      }, () => {
        const message: Message = {
          strongText: '',
          messageText: 'Cadastro feito com sucesso!',
          messageType: AlertType.SUCCESS,
          isToShow: true
        };
        this._messageService.newMessage = message;
        this._router.navigate(['conciliador']);
      });
  }

  criarUsuarioComRole() {
    this._userHttpService.registerUser(
      this.cadastroForm.value).subscribe(user => {
      }, err => {
        const message: Message = {
          strongText: '',
          messageText: 'Erro na hora do cadastro',
          messageType: AlertType.DANGER,
          isToShow: true
        };
        this._messageService.newMessage = message;
      }, () => {
        const message: Message = {
          strongText: '',
          messageText: 'Cadastro feito com sucesso!',
          messageType: AlertType.SUCCESS,
          isToShow: true
        };
        this._messageService.newMessage = message;
        this._router.navigate(['conciliador']);
      });
  }
}
