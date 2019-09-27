import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/auth/authentication.service';
import { MessageService } from '../../../core/message/message.service';
import { Message } from '../../../core/message/message';
import { AlertType } from '../../../shared/enum/alert-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuider: FormBuilder, 
    private _router: Router, 
    private _authenticationService: AuthenticationService,
    private _messageService: MessageService) { }

  ngOnInit() {
    this.loginForm = this._formBuider.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  loginSubmit(){
    this._authenticationService.authenticate(this.loginForm.controls.cpf.value, this.loginForm.controls.senha.value).subscribe(() => {}, err => {}, ()=> {
      const message: Message = {
        strongText: "",
        messageText: "Login feito com sucesso!",
        messageType: AlertType.SUCCESS,
        isToShow: true
      }
      this._messageService.newMessage = message
    })
  }
}
