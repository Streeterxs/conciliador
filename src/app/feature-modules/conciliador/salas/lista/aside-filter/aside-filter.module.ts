import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideFilterComponent } from './aside-filter.component';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [
    AsideFilterComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    AsideFilterComponent
  ]
})
export class AsideFilterModule { }
