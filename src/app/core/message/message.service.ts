import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {Message} from './message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _haveMessageOcurring = false;
  private _messageBehaviorSubject: BehaviorSubject<Message> = new BehaviorSubject({
    strongText: '',
    messageText: '',
    messageType: '',
    isToShow: false
  });

  messageObservable$ = this._messageBehaviorSubject.asObservable();
  constructor() { }

  get messageObservable(): Observable<Message>{
    return this.messageObservable$;
  }  

  set newMessage(value: Message){
    if(!this._haveMessageOcurring){
      this._messageBehaviorSubject.next(value);
      this.changeMessageOcurringState(true);
    }    
  }

  clearMessage(){
    if(this._haveMessageOcurring){
      this._messageBehaviorSubject.next({
        strongText: '',
        messageText: '',
        messageType: '',
        isToShow: false
      });
      this.changeMessageOcurringState(false);
    }        
  }

  private changeMessageOcurringState(value){
    this._haveMessageOcurring = value;
  }
}

