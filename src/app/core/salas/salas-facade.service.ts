import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { SalasHttpService } from './salas-http.service';
import { SalasStoreService } from './salas-store.service';
import { SalasQueryStoreService } from './salas-query-store.service';
import { Sala } from 'src/app/shared/interfaces/sala';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message';
import { AlertType } from 'src/app/shared/enum/alert-type.enum';
import { SalasParams } from 'src/app/shared/interfaces/salasParams';

@Injectable({
  providedIn: 'root'
})
export class SalasFacadeService {

  constructor(
    private _salasHttpService: SalasHttpService,
    private _salasStoreService: SalasStoreService,
    private _messageService: MessageService,
    private _salasQueryStoreService: SalasQueryStoreService) { }

  get salas(): Sala[] {
    console.log('entrou salas');
    if (!this._salasStoreService.salas) {
      this.atualizarListagem();
    }
    return this._salasStoreService.salas;
  }

  get totalAtivasObservable(): Observable<number> {
    return this._salasStoreService.totalAtivas$;
  }

  get totalInativasObservable(): Observable<number> {
    return this._salasStoreService.totalInativas$;
  }

  get totalFinalizadasObservable(): Observable<number> {
    return this._salasStoreService.totalFinalizadas$;
  }

  get totalSalasObservable(): Observable<number> {
    return this._salasStoreService.totalSalas$;
  }

  get salasObservable(): Observable<Sala[]> {
    console.log('entrou salas');
    if (!this._salasStoreService.salas) {
      this.atualizarListagem();
    }
    return this._salasStoreService.salas$;
  }

  getSalaById(id: number) {
    return this._salasHttpService.getSalaById(id);
  }

  ativarSala(sala: Sala) {
    sala.is_active = true;
    const salaAntiga = this.salas.find(salaEncontrada => salaEncontrada.id === sala.id);
    this._salasStoreService.updateSala(sala);
    this._salasHttpService.ativarSala(sala).subscribe(sala => {
      this._salasStoreService.updateSala(sala);
    }, err => {
      const message: Message = {
        strongText: 'Error! ',
        messageText: 'Não foi possível ativar esta sala.',
        messageType: AlertType.DANGER,
        isToShow: true
      };
      this._messageService.newMessage = message;
      this._salasStoreService.updateSala(salaAntiga);
    }, () => {
      const message: Message = {
        strongText: '',
        messageText: 'Sala foi ativada.',
        messageType: AlertType.SUCCESS,
        isToShow: true
      };
      this._messageService.newMessage = message;
    });
  }

  adicionarSala(newSala: Sala) {
    this._salasStoreService.addSala(newSala);
    this._salasHttpService.criarSala(newSala).subscribe(sala => {
      this._salasStoreService.removeSala(newSala);
      this._salasStoreService.addSala(sala);
    }, err => {
      const message: Message = {
        strongText: 'Error! ',
        messageText: 'Não foi possível criar sala.',
        messageType: AlertType.DANGER,
        isToShow: true
      };
      this._messageService.newMessage = message;
      this._salasStoreService.removeSala(newSala);
    }, () => {
      const message: Message = {
        strongText: '',
        messageText: 'Sala foi criada.',
        messageType: AlertType.SUCCESS,
        isToShow: true
      };
      this._messageService.newMessage = message;
    });
  }

  atualizarSalasParamsAtivasOuInativas(isActive: boolean) {
    this._salasQueryStoreService.updateSalaQueryis_active(isActive);
  }

  atualizarSalasParamsIsFinalizada(isFinalizada: boolean) {
    this._salasQueryStoreService.updateSalaQueryis_finalizada(isFinalizada);
  }

  removerSalasParamsIsActive() {
    this._salasQueryStoreService.removeSalaQueryIsActive();
  }

  atualizarListagem() {
    this._salasHttpService.getAllSalasComFiltro().subscribe(novaListagemDeSalas => {
      this._salasStoreService.totalAtivas = +novaListagemDeSalas.headers.get('totalAtivas');
      this._salasStoreService.totalFinalizadas = +novaListagemDeSalas.headers.get('totalFinalizadas');
      this._salasStoreService.totalSalas = +novaListagemDeSalas.headers.get('totalNaoFinalizadas');
      this._salasStoreService.totalInativas = +novaListagemDeSalas.headers.get('totalInativas');
      this._salasStoreService.totalPages = +novaListagemDeSalas.headers.get('totalPages');
      this._salasStoreService.salas = novaListagemDeSalas.body;
    });
  }

  atualizarFiltragemSalas(salasParams: SalasParams) {
    this._salasQueryStoreService.updateAllParamsButPageAndSize(salasParams);
  }

  removerFiltragem() {
    this._salasQueryStoreService.removerFiltragem();
    this.atualizarListagem();
  }

}
