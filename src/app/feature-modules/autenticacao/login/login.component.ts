import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _formBuider: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.loginForm = this._formBuider.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  loginSubmit(){
    alert("logou!");
    this._router.navigate(["conciliador"]);
  }
}
