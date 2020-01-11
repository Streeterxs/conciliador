import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConciliadorComponent } from './conciliador.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  {path: '', component: ConciliadorComponent, children: [
    {
      path: '',
      redirectTo: 'painel'
    },
    {
      path: 'salas',
      loadChildren: './salas/salas.module#SalasModule',
      data: {path: 'Salas'},
      //canActivate: [AdminOrModeratorOnlyGuard]
    },
    {
      path: 'autenticacao',
      loadChildren: './autenticacao/autenticacao.module#AutenticacaoModule',
      data: {path: 'Autenticacao'},
      //canActivate: [NonUserOrModeratorGuard]
    },
    {
      path: 'painel',
      component: PainelComponent,
      data: {path: 'Painel'},
      //canActivate: [AuthGuard]
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliadorRoutingModule { }
