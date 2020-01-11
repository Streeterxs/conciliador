import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { AdminOrModeratorOnlyGuard } from '../core/guards/admin-or-moderator-only.guard';
import { FeatureModulesComponent } from './feature-modules.component';
import { NonUserOrModeratorGuard } from '../core/guards/non-user-or-moderator.guard';

const routes: Routes = [
  {path: '', component: FeatureModulesComponent, children: [
    {
      path: '',
      redirectTo: 'conciliador'
    },
    {
      path: 'conciliador',
      loadChildren: './conciliador/conciliador.module#ConciliadorModule',
      //canActivate: [AdminOrModeratorOnlyGuard]
    },
    {
      path: 'chat/:id',
      loadChildren: './chat/chat.module#ChatModule'
    }
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModulesRoutingModule { }
