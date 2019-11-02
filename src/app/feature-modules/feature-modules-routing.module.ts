import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { AdminOrModeratorOnlyGuard } from '../core/guards/admin-or-moderator-only.guard';
import { NonUserOnlyGuard } from '../core/guards/non-user-only.guard';
import { FeatureModulesComponent } from './feature-modules.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  {path: '', component: FeatureModulesComponent, children: [
    {
      path: '',
      redirectTo: 'painel'
    },
    {
      path: 'salas',
      loadChildren: './salas/salas.module#SalasModule',
      data: {path: 'Salas'},
      canActivate: [AdminOrModeratorOnlyGuard]
    },
    {
      path: 'autenticacao',
      loadChildren: './autenticacao/autenticacao.module#AutenticacaoModule',
      data: {path: 'Autenticacao'},
      canActivate: [NonUserOnlyGuard]
    },
    {
      path: 'painel',
      component: PainelComponent,
      data: {path: 'Painel'},
      canActivate: [AuthGuard]
    },
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModulesRoutingModule { }
