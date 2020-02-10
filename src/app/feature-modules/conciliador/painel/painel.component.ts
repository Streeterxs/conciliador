import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { User } from '../../../core/user/user';
import { UserService } from '../../../core/user/user.service';
import { SalasStoreService } from '../../../core/salas/salas-store.service';
import { Role } from 'src/app/core/user/role.enum';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {
  loggedUser: User;

  userIsAdminOrModerator: boolean;
  isUserActive: boolean;
  userSubscription: Subscription;

  constructor(
    private _userService: UserService,
    private _salasStoreService: SalasStoreService
    ) { }

  ngOnInit() {
    this.userSubscription = this._userService.userSubject$.subscribe(user => {
      console.log(user);
      if (user) {
        this.loggedUser = user;
        if (!this.loggedUser.roles.includes(Role[Role.ROLE_ADMIN]) || !this.loggedUser.roles.includes(Role[Role.ROLE_MODERATOR])) {
          this._salasStoreService.getAllSalasToList();
        }
      }
    });
    this.userIsAdminOrModerator = this._userService.userIsAdmin() || this._userService.userIsModerator();
    this.isUserActive = this._userService.isUserActive();
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
