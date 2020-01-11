import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConciliadorRoutingModule } from './conciliador-routing.module';
import { ConciliadorComponent } from './conciliador.component';
import { TemplateModule } from '../../core/template/template.module';
import { PainelModule } from './painel/painel.module';

@NgModule({
  declarations: [ConciliadorComponent],
  imports: [
    CommonModule,
    ConciliadorRoutingModule,
    RouterModule,
    PainelModule,
    TemplateModule
  ]
})
export class ConciliadorModule { }
