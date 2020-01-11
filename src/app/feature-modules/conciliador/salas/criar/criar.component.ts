import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { User } from '../../../../core/user/user';
import { UserService } from '../../../../core/user/user.service';
import { SalasStoreService } from '../../../../core/salas/salas-store.service';



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
    private _salasStoreService: SalasStoreService) { }

  ngOnInit() {
    this.salaCriacaoForm = this._formBuilder.group({
      descricao: ['', Validators.required],
      data: [Date, Validators.required],
      hora: ['', Validators.required],
      users: ''
    });
    this._userService.returnAllRegisteredUsers().subscribe(allUsers => {
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
    this._salasStoreService.addSala(this.salaCriacaoForm.value);
  }

  updateDropdownList(user: User) {
    if (!user.is_admin && !user.is_moderator && user.is_active) {
      this.drowpdown = this.drowpdown.concat({
        item_id: user.id,
        item_text: `${user.cpf} - ${user.nome}`
      });
    }
  }
}
