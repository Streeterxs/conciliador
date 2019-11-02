import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutenticacaoComponent } from './autenticacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { NonUserOnlyGuard } from '../../core/guards/non-user-only.guard';

const routes: Routes = [
  {path: '', component: AutenticacaoComponent, children: [
    { path: 'login', component: LoginComponent, canActivate: [NonUserOnlyGuard]},
    { path: 'cadastro', component: CadastroComponent, canActivate: [NonUserOnlyGuard]},
  ], canActivate: [NonUserOnlyGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule { }
