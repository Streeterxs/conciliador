import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceButtonDirective } from './debounceButton/debounce-button.directive';

@NgModule({
  declarations: [
    DebounceButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DebounceButtonDirective
  ]
})
export class DirectivesModule { }
