import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'conciliador', loadChildren: './feature-modules/feature-modules.module#FeatureModulesModule'},
  { path: 'chat', loadChildren: './chat/chat.module#ChatModule', canActivate: [AuthGuard]},
  { path: '', redirectTo: 'conciliador', pathMatch: 'full'},
  { path: '**', redirectTo: 'conciliador'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
