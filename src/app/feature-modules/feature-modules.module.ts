import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModulesRoutingModule } from './feature-modules-routing.module';
import { FeatureModulesComponent } from './feature-modules.component';
import { MessageModule } from '../shared/components/message/message.module';

@NgModule({
  declarations: [
    FeatureModulesComponent,
  ],
  imports: [
    CommonModule,
    FeatureModulesRoutingModule,
    MessageModule
  ]
})
export class FeatureModulesModule { }
