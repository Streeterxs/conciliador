import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureModulesComponent } from './feature-modules.component';

const routes: Routes = [
  {path:'', component: FeatureModulesComponent, children: [
    { path: 'salas', loadChildren:'./salas/salas.module#SalasModule', data:{path:'Salas'}},
    { path: 'autenticacao', loadChildren:'./autenticacao/autenticacao.module#AutenticacaoModule', data:{path:'Autenticacao'}}
  ]},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModulesRoutingModule { }
