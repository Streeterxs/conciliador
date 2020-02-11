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

  private _salas: BehaviorSubject<Sala[]> = new BehaviorSubject(null);
  salas$ = this._salas.asObservable();

  private _totalSalas: BehaviorSubject<number> = new BehaviorSubject(0);
  totalSalas$ = this._totalSalas.asObservable();

  private _totalAtivas: BehaviorSubject<number> = new BehaviorSubject(0);
  totalAtivas$ = this._totalAtivas.asObservable();

  private _totalInativas: BehaviorSubject<number> = new BehaviorSubject(0);
  totalInativas$ = this._totalInativas.asObservable();

  private _totalFinalizadas: BehaviorSubject<number> = new BehaviorSubject(0);
  totalFinalizadas$ = this._totalFinalizadas.asObservable();

  private _totalPages: BehaviorSubject<number> = new BehaviorSubject(0);
  totalPages$ = this._totalPages.asObservable();

  constructor(
    private _salasWebsocketService: SalasWebsocketService
    ) {
   }

   get salas(): Sala[] {
     return this._salas.value;
   }

   set salas(newSalaList: Sala[]) {
     this._salas.next(newSalaList);
   }

   get totalSalas(): number {
     return this._totalSalas.value;
   }

   set totalSalas(newTotalSalas: number) {
     this._totalSalas.next(newTotalSalas);
   }

   get totalAtivas(): number {
     return this._totalAtivas.value;
   }

   set totalAtivas(newTotalAtivas: number) {
     this._totalAtivas.next(newTotalAtivas);
   }

   get totalInativas(): number {
     return this._totalInativas.value;
   }

   set totalInativas(newTotalInativas: number) {
     this._totalInativas.next(newTotalInativas);
   }

   get totalFinalizadas(): number {
     return this._totalFinalizadas.value;
   }

   set totalFinalizadas(newTotalFinalizadas: number) {
     this._totalFinalizadas.next(newTotalFinalizadas);
   }

   get totalPages(): number {
     return this._totalPages.value;
   }

   set totalPages(newTotalPages: number) {
     this._totalPages.next(newTotalPages);
   }

   updateSala(salaToUpdate: Sala) {
     const index = this.salas.findIndex(sala => sala.id === salaToUpdate.id);
     if (index > 0) {
       this.salas[index] = salaToUpdate;
       this.salas = [...this.salas];
     }
   }

   addSala(newSala: Sala) {
     this.salas = [newSala].concat(this.salas);
   }

   removeSala(salaToRemove: Sala) {
     this.salas = this.salas.filter(sala => JSON.stringify(sala) !== JSON.stringify(salaToRemove));
   }
  /* addSala(newSala) {
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

  conectarWebsocketDaSala(idSala: number) {
  }

  getSala(id: number): Observable<Sala> {
    return this._salasHttpService.getSalaById(id);
  } */
}
