import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { SalaComponent } from './lista/sala/sala.component';
import { SalasComponent } from './salas.component';

@NgModule({
  declarations: [ListaComponent, CriarComponent, SalaComponent, SalasComponent],
  imports: [
    CommonModule,
    SalasRoutingModule
  ]
})
export class SalasModule { }
