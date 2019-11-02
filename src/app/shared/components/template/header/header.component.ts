import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutingService } from '../../../../core/routing/routing.service';
import { User } from '../../../../core/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userIsLogged? = false;
  @Input() loggedUser?: User;

  active = null;

  @Output() logoutEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private _routingService: RoutingService) { }

  ngOnInit() {
    this._routingService.currentComponent.subscribe(currentComponent => {
      this.active = currentComponent;
      console.log('[Header Component]', currentComponent);
    });
    console.log('[Header Component]', this.userIsLogged);
  }

  logoutEmit() {
    this.logoutEmitter.emit();
  }
}
