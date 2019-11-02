import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from '../../core/user/user.service';
import { User } from '../../core/user/user';
import { SalasStoreService } from '../../core/salas/salas-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {
  loggedUser: User;

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
        if (!this.loggedUser.is_admin || !this.loggedUser.is_moderator) {
          this._salasStoreService.receberTodasAsSalasDeUmUsuario(this.loggedUser);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
