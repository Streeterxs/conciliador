import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordRepeatValidator } from '../password-repeat.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) { }

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
    alert("Cadastro enviado!");
    this._router.navigate(["conciliador", "login"])
  }
}
