import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { Subscription } from 'rxjs';

import { MessageService } from '../core/message/message.service';
import { Message } from '../core/message/message';


@Component({
  selector: 'app-feature-modules',
  templateUrl: './feature-modules.component.html',
  styleUrls: ['./feature-modules.component.scss'],
  animations: [
    trigger(
      'messageAnimation',
      [
        transition(
          ':leave', [
            style({transform: 'translateY(0)', 'opacity': 1}),
            animate('0.3s ease-out', style({transform: 'translateY(-20%)', 'opacity': 0})),
            
          ]
        ),
        transition(
          ':enter', [
            style({transform: 'translateY(-20%)', 'opacity': 0}),
            animate('0.3s ease-in', style({transform: 'translateY(0)', 'opacity': 1}))
          ]
        )        
      ]
    )]
  })
export class FeatureModulesComponent implements OnInit {
  messageObj: Message;

  messageSubscription: Subscription

  constructor(private _messageService: MessageService) { }

  ngOnInit() {
    this.messageSubscription = this._messageService.messageObservable.subscribe(message => {
      this.messageObj = {...message}
      setTimeout(()=>{
        this._messageService.clearMessage();
      }, 4000)
    })
  }


}
