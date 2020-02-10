import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Sala } from '../../interfaces/sala';
import { UserService } from '../../../core/user/user.service';
import { User } from '../../../core/user/user';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.scss']
})
export class SalaComponent implements OnInit, OnDestroy {
  @Input() sala: Sala;
  @Input() firstCard: boolean = false;

  loggedUser: User;

  userSubscription: Subscription;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this._userService.userSubject$.subscribe(user => {
      this.loggedUser = user;
    });
  }
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
