import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private activatedComponent: BehaviorSubject<string> = new BehaviorSubject('');
  private activatedComponent$ = this.activatedComponent.asObservable();
  constructor() {}

  updateCurrentComponent(newActivatedComponent){
    this.activatedComponent.next(newActivatedComponent)
  }

  get currentComponent(): Observable<string>{
    return this.activatedComponent$;
  }
}
