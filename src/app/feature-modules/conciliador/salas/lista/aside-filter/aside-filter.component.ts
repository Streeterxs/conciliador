import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { SalasFacadeService } from 'src/app/core/salas/salas-facade.service';

@Component({
  selector: 'app-aside-filter',
  templateUrl: './aside-filter.component.html',
  styleUrls: ['./aside-filter.component.scss']
})
export class AsideFilterComponent implements OnInit {

  totalAtivas: Observable<number>;
  totalInativas: Observable<number>;
  totalFinalizadas: Observable<number>;
  totalSalas: Observable<number>;

  @Output() clickTodas: EventEmitter<any> = new EventEmitter();
  @Output() clickAtivas: EventEmitter<any> = new EventEmitter();
  @Output() clickInativas: EventEmitter<any> = new EventEmitter();
  @Output() clickFinalizadas: EventEmitter<any> = new EventEmitter();
  constructor(private _salasFacadeService: SalasFacadeService) { }

  ngOnInit() {
    this.totalAtivas = this._salasFacadeService.totalAtivasObservable;
    this.totalInativas = this._salasFacadeService.totalInativasObservable;
    this.totalFinalizadas = this._salasFacadeService.totalFinalizadasObservable;
    this.totalSalas = this._salasFacadeService.totalSalasObservable;
  }

}
