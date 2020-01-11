import { Component, OnInit } from '@angular/core';

import { SalasStoreService } from '../../../../core/salas/salas-store.service';
import { Sala } from 'src/app/shared/interfaces/sala';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  constructor(private _salasStoreService: SalasStoreService) { }

  ngOnInit() {
    this._salasStoreService.getAllSalasToList();
  }

}
