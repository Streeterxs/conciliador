import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordRepeatValidator } from '../password-repeat.directive';
import { Router } from '@angular/router';
import { UserHttpService } from '../../../core/user/user-http.service';
import { MessageService } from '../../../core/message/message.service';
import { Message } from '../../../core/message/message';
import { AlertType } from '../../../shared/enum/alert-type.enum';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _userHttpService: UserHttpService, private _messageService: MessageService) { }

  ngOnInit() {
    this.cadastroForm = this._formBuilder.group({
      nome: ['', [Validators.required]],
      cpf:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(8)]]

    }, {
        validator: passwordRepeatValidator
      }
    )
  }
  formSubmited(){
    console.log("entrou aqui");
    
    alert("Cadastro enviado!");
    this._userHttpService.registerUser(
      this.cadastroForm.controls.cpf.value, 
      this.cadastroForm.controls.nome.value, 
      this.cadastroForm.controls.email.value, 
      this.cadastroForm.controls.password.value).subscribe(user=>{
        console.log(user);        
      }, err => {
        const message: Message = {
          strongText: "",
          messageText: "Erro na hora do cadastro",
          messageType: AlertType.DANGER,
          isToShow: true
        }
        this._messageService.newMessage = message;
      }, ()=>{
        const message: Message = {
          strongText: "",
          messageText: "Cadastro feito com sucesso!",
          messageType: AlertType.SUCCESS,
          isToShow: true
        }
        this._messageService.newMessage = message;
        this._router.navigate(["conciliador"]);
      })
  }
}
