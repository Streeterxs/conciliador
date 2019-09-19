import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';

@NgModule({
  declarations: [ListaComponent, CriarComponent],
  imports: [
    CommonModule,
    SalasRoutingModule
  ]
})
export class SalasModule { }
