import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { SalasStoreService } from '../../../../core/salas/salas-store.service';
import { Sala } from 'src/app/shared/interfaces/sala';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  faPlus = faPlus;

  constructor(private _salasStoreService: SalasStoreService) { }

  ngOnInit() {
    this._salasStoreService.getAllSalasToList();
  }

  filtrarSalas(descricao) {
    console.log(descricao);
  }

}
