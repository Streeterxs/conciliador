import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _formBuider: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._formBuider.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

}
