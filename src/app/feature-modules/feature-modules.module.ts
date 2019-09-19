import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModulesRoutingModule } from './feature-modules-routing.module';
import { TemplateModule } from '../shared/components/template/template.module';
import { FeatureModulesComponent } from './feature-modules.component';
import { SalasComponent } from './salas/salas.component';

@NgModule({
  declarations: [
    FeatureModulesComponent,
    SalasComponent
  ],
  imports: [
    CommonModule,
    FeatureModulesRoutingModule,
    TemplateModule
  ]
})
export class FeatureModulesModule { }
