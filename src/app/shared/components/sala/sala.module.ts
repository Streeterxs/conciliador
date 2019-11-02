import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SalaComponent } from './sala.component';

@NgModule({
  declarations: [SalaComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    SalaComponent
  ]
})
export class SalaModule { }
