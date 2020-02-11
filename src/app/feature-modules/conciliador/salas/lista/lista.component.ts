import { Component, OnInit, OnDestroy } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { SalasStoreService } from '../../../../core/salas/salas-store.service';
import { Sala } from 'src/app/shared/interfaces/sala';
import { SalasFacadeService } from 'src/app/core/salas/salas-facade.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  listaSalas: Observable<Sala[]>;
  faPlus = faPlus;

  constructor(
    private _salasFacadeService: SalasFacadeService,
    private _router: Router,
    private _activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.listaSalas = this._salasFacadeService.salasObservable;
  }

  ngOnDestroy(): void {
    this._salasFacadeService.removerFiltragem();
  }

  filtrarSalas(descricao) {
    this._salasFacadeService.atualizarFiltragemSalas(descricao);
    this._salasFacadeService.atualizarListagem();
  }

  filtrarTodas() {
    this._salasFacadeService.atualizarSalasParamsIsFinalizada(false);
    this._salasFacadeService.atualizarListagem();
  }

  filtrarAtivas() {
    this._salasFacadeService.atualizarSalasParamsAtivasOuInativas(true);
    this._salasFacadeService.atualizarListagem();
  }

  filtrarInativas() {
    this._salasFacadeService.atualizarSalasParamsAtivasOuInativas(false);
    this._salasFacadeService.atualizarListagem();
  }

  filtrarFinalizadas() {
    this._salasFacadeService.atualizarSalasParamsIsFinalizada(true);
    this._salasFacadeService.atualizarListagem();
  }

  navigateTo(siblingRoute) {
    this._router.navigate([`../${siblingRoute}`], {relativeTo: this._activateRouter});
  }

}
