import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModulesRoutingModule } from './feature-modules-routing.module';
import { TemplateModule } from '../shared/components/template/template.module';
import { FeatureModulesComponent } from './feature-modules.component';

@NgModule({
  declarations: [
    FeatureModulesComponent,
    
  ],
  imports: [
    CommonModule,
    FeatureModulesRoutingModule,
    TemplateModule
  ]
})
export class FeatureModulesModule { }
