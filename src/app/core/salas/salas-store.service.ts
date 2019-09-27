import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Sala } from '../../shared/interfaces/sala';
import { SalasHttpService } from './salas-http.service';

@Injectable({
  providedIn: 'root'
})
export class SalasStoreService {

  private salas: BehaviorSubject<Sala[]> = new BehaviorSubject([])
  sala$ = this.salas.asObservable();
  constructor(private _salasHttpService: SalasHttpService) {
    this._salasHttpService.getAllSalas().subscribe(salas => {
      this.salas.next(salas);
    })
   }

  addSala(){}
  removeSala(){}
  updateSala(){}
}
