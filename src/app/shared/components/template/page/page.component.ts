import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../core/user/user.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  userIsLogged = true;
  userName;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userIsLogged = this._userService.isLogged();
    if(this.userIsLogged){
      this._userService.getUser().subscribe(user => {
        if(user){
          this.userName = user.nome;
        }
      })
    }
  }

}
