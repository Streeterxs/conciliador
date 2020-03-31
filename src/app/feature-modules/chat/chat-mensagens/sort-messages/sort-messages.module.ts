import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortMessagesPipe } from './sort-messages.pipe';

@NgModule({
  declarations: [
    SortMessagesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortMessagesPipe
  ]
})
export class SortMessagesModule { }
