import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Sala } from '../../shared/interfaces/sala';
import { SalasHttpService } from './salas-http.service';

@Injectable({
  providedIn: 'root'
})
export class SalasStoreService {

  private salas: BehaviorSubject<Sala[]> = new BehaviorSubject([]);
  salas$ = this.salas.asObservable();
  constructor(private _salasHttpService: SalasHttpService) {
   }

  addSala(newSala) {
    this._salasHttpService.criarSala(newSala).subscribe(sala => {
      this.salas.next([sala].concat(this.salas.value));
    });
  }
  getAllSalasToList() {
    this._salasHttpService.getAllSalas().subscribe(salas => {
      console.log(salas);
      this.salas.next(salas);
    });
  }
  removeSala() {}
  updateSala() {}
  getSala(id: number): Observable<Sala> {
    return this._salasHttpService.getSalaById(id);
  }
}
