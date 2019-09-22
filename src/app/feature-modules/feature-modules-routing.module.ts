import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureModulesComponent } from './feature-modules.component';

const routes: Routes = [
  {path:'', component: FeatureModulesComponent, children: [
    { path: 'salas', loadChildren:'./salas/salas.module#SalasModule'},
    { path: 'autenticacao', loadChildren:'./autenticacao/autenticacao.module#AutenticacaoModule'}
  ]},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModulesRoutingModule { }
