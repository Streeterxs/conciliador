import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { User } from '../../../../core/user/user';
import { UserService } from '../../../../core/user/user.service';
import { SalasStoreService } from '../../../../core/salas/salas-store.service';
import { Role } from 'src/app/core/user/role.enum';
import { SalasFacadeService } from 'src/app/core/salas/salas-facade.service';



@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.scss']
})
export class CriarComponent implements OnInit {
  salaCriacaoForm: FormGroup;

  allUsers: User[];
  drowpdown = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _salasFacadeService: SalasFacadeService) { }

  ngOnInit() {
    this.salaCriacaoForm = this._formBuilder.group({
      descricao: ['', Validators.required],
      data: [Date, Validators.required],
      hora: ['', Validators.required],
      userIdList: ''
    });
    this._userService.getAllUsers().subscribe(allUsers => {
      this.allUsers = allUsers;
    }, err => {}, () => {
      this.allUsers.forEach(user => {
        this.updateDropdownList(user);
      });
    });
  }

  formSubmit() {
    const pipe = new DatePipe('en-US');
    const dateTimeToSubmit = new Date(
      this.salaCriacaoForm.controls.data.value.year,
      this.salaCriacaoForm.controls.data.value.month - 1,
      this.salaCriacaoForm.controls.data.value.day
    );
    dateTimeToSubmit.setHours(this.salaCriacaoForm.controls.hora.value.hour);
    dateTimeToSubmit.setMinutes(this.salaCriacaoForm.controls.hora.value.minute);
    this.salaCriacaoForm.controls.data.setValue(dateTimeToSubmit);
    delete this.salaCriacaoForm.value.hora;
    this._salasFacadeService.adicionarSala(this.salaCriacaoForm.value);
  }

  updateDropdownList(user: User) {
    if (!user.roles.includes(Role[Role.ROLE_ADMIN]) &&
    !user.roles.includes(Role[Role.ROLE_MODERATOR]) /* && user. */) { // TODO esperando dto user active
      this.drowpdown = this.drowpdown.concat({
        item_id: user.id,
        item_text: `${user.cpf} - ${user.nome}`
      });
    }
  }
}
