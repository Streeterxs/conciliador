import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DescFilterComponent } from './desc-filter.component';

@NgModule({
  declarations: [
    DescFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DescFilterComponent
  ]
})
export class DescFilterModule { }
