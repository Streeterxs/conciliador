import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalasComponent } from './salas.component';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';

const routes: Routes = [
  {path:'', component: SalasComponent, children:[
    { path: 'lista', component: ListaComponent },
    { path: 'criar', component: CriarComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }
