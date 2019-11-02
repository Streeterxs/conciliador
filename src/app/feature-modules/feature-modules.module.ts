import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModulesRoutingModule } from './feature-modules-routing.module';
import { TemplateModule } from '../shared/components/template/template.module';
import { FeatureModulesComponent } from './feature-modules.component';
import { MessageModule } from '../shared/components/message/message.module';
import { PainelComponent } from './painel/painel.component';
import { SalaModule } from '../shared/components/sala/sala.module';

@NgModule({
  declarations: [
    FeatureModulesComponent,
    PainelComponent,
  ],
  imports: [
    CommonModule,
    FeatureModulesRoutingModule,
    TemplateModule,
    MessageModule,
    SalaModule
  ]
})
export class FeatureModulesModule { }
