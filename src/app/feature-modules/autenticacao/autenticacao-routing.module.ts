import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutenticacaoComponent } from './autenticacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path:'', component: AutenticacaoComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
  ]},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule { }
