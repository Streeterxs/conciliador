import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalasComponent } from './salas.component';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { AdminOrModeratorOnlyGuard } from '../../../core/guards/admin-or-moderator-only.guard';
import { AuthGuard } from '../../../core/guards/auth.guard';
import { UserActiveGuard } from '../../../core/guards/user-active.guard';

const routes: Routes = [
  {path: '', component: SalasComponent, children: [
    {
      path: 'lista',
      component: ListaComponent,
      canActivate: [UserActiveGuard]
    },
    {
      path: 'criar',
      component: CriarComponent,
      canActivate: [AdminOrModeratorOnlyGuard]
    },
    {
      path: '',
      redirectTo: 'lista',
      canActivate: [UserActiveGuard]
    }
  ], data: {path: 'Salas'},
  canActivate: [UserActiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }
