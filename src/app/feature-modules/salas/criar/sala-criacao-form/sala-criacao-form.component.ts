import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from '../../../../core/user/user';


@Component({
  selector: 'fa-sala-criacao-form',
  templateUrl: './sala-criacao-form.component.html',
  styleUrls: ['./sala-criacao-form.component.scss']
})
export class SalaCriacaoFormComponent implements OnInit {
  @Input() salaCriacaoForm?: FormGroup;
  @Input() allUsers?: User[];
  @Input() drowpdown? = [];

  faCalendarAlt = faCalendarAlt;

  selectedItems = [];
  usersSelected: User[] = [];
  dropdownSettings: IDropdownSettings = {};

  time;
  user;
  model;

  @Output() emitFormSubmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      enableCheckAll: false
    };
  }

  formSubmit() {
    this.salaCriacaoForm.controls.integrantes.setValue(this.usersSelected);
    this.selectedItems = [];
    this.emitFormSubmit.emit();
  }

  testModel(event) {
    console.log(event);
  }

  onItemSelect() {
    this.usersSelected = this.returnSelectedItemsConvertedToUserObjArray();
  }

  returnSelectedItemsConvertedToUserObjArray() {
    return this.selectedItems.map(item => {
      return item.item_id;
    });
  }

  onDeSelect() {
    this.usersSelected = this.returnSelectedItemsConvertedToUserObjArray();
  }

}
