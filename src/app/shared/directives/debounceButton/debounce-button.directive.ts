import { Directive, HostListener, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[faDebounceButton]'
})
export class DebounceButtonDirective implements OnInit, OnDestroy {

  @Input() debounceTime = 500;

  debounceButtonSubject = new Subject();
  debounceButtonSubscription: Subscription;

  @Output() debouncedClick = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
    this.debounceButtonSubscription = this.debounceButtonSubject.pipe(debounceTime(this.debounceTime)).subscribe(event => {
      this.debouncedClick.emit(event);
    })
  }

  ngOnDestroy(): void {
    if (this.debounceButtonSubscription) {
      this.debounceButtonSubscription.unsubscribe();
    }
  }
  @HostListener('click', ['$event'])
  clickEvent(event){
    event.preventDefault();
    event.stopPropagation();
    this.debounceButtonSubject.next(event);
  }
}
