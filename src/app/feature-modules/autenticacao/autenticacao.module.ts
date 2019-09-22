import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AutenticacaoComponent } from './autenticacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroFormComponent } from './cadastro/cadastro-form/cadastro-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    AutenticacaoComponent,
    CadastroComponent,
    CadastroFormComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    ReactiveFormsModule
  ]
})
export class AutenticacaoModule { }
