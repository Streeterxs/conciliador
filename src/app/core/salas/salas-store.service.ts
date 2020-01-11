import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Sala } from '../../shared/interfaces/sala';
import { SalasHttpService } from './salas-http.service';
import { User } from '../user/user';
import { SalasWebsocketService } from './salas-websocket.service';

@Injectable({
  providedIn: 'root'
})
export class SalasStoreService {

  private salas: BehaviorSubject<Sala[]> = new BehaviorSubject([]);
  salas$ = this.salas.asObservable();
  constructor(
    private _salasHttpService: SalasHttpService,
    private _salasWebsocketService: SalasWebsocketService
    ) {
   }

  addSala(newSala) {
    this._salasHttpService.criarSala(newSala).subscribe(sala => {
      this.salas.next([sala].concat(this.salas.value));
    }, err => {
      console.log(err);
    });
  }
  getAllSalasToList() {
    this._salasHttpService.getAllSalas().subscribe(salas => {
      this.salas.next(salas);
    });
  }
  removeSala() {}
  updateSala() {}

  enviarAtivacaoDeSala(sala: Sala) {
    return this._salasHttpService.ativarSala(sala.id);
  }

  receberTodasAsSalasDeUmUsuario(user: User) {
    this._salasHttpService.receberTodasAsSalasDeUmIntegrante(user.id).subscribe(salas => {
      if (salas) {
        console.log(salas);
        this.salas.next(salas);
      }
    });
  }

  conectarWebsocketDaSala(idSala: number) {
  }

  getSala(id: number): Observable<Sala> {
    return this._salasHttpService.getSalaById(id);
  }
}
