import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalasComponent } from './salas.component';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { AdminOrModeratorOnlyGuard } from '../../core/guards/admin-or-moderator-only.guard';

const routes: Routes = [
  {path: '', component: SalasComponent, children: [
    { path: 'lista', component: ListaComponent, canActivate: [AdminOrModeratorOnlyGuard]},
    { path: 'criar', component: CriarComponent, canActivate: [AdminOrModeratorOnlyGuard]}
  ], data: {path: 'Salas'}, canActivate: [AdminOrModeratorOnlyGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }
