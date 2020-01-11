import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AutenticacaoComponent } from './autenticacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { NonUserOnlyGuard } from '../../../core/guards/non-user-only.guard';
import { NonUserOrModeratorGuard } from '../../../core/guards/non-user-or-moderator.guard';

const routes: Routes = [
  {path: '', component: AutenticacaoComponent, children: [
    { path: 'login', component: LoginComponent, canActivate: [NonUserOnlyGuard]},
    { path: 'cadastro', component: CadastroComponent, canActivate: [NonUserOrModeratorGuard]},
  ], canActivate: [NonUserOrModeratorGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule { }
