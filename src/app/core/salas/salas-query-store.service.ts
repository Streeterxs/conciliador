import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SalasParams } from 'src/app/shared/interfaces/salasParams';

@Injectable({
  providedIn: 'root'
})
export class SalasQueryStoreService {
  private _salasQueries: BehaviorSubject<SalasParams> = new BehaviorSubject({is_finalizada: false, page: 0, size: 25});
  salasQueries$ = this._salasQueries.asObservable();

  constructor() { }

  get salasQueries(): SalasParams {
    return this._salasQueries.value;
  }

  set salasQueries(newSalasQueries) {
    this._salasQueries.next(newSalasQueries);
  }

  updateSalaQueryId(newId: number, salasParams: SalasParams): SalasParams {
    if (newId) {
      salasParams.id = newId;
    } else {
      delete salasParams.id;
    }
    return salasParams;
  }

  updateSalaQuerydataInicio(dataInicio: Date, salasParams: SalasParams): SalasParams {
    if (dataInicio) {
      salasParams.dataInicio = dataInicio.toISOString();
    } else {
      delete salasParams.dataInicio;
    }
    return salasParams;
  }

  updateSalaQuerydataFim(dataFim: Date, salasParams: SalasParams): SalasParams {
    if (dataFim) {
      salasParams.dataFim = dataFim.toISOString();
    } else {
      delete salasParams.dataFim;
    }
    return salasParams;
  }

  updateSalaQueryis_active(newIs_active: boolean) {
    this.salasQueries.is_active = newIs_active;
    delete this.salasQueries.is_finalizada;
    this.salasQueries = {...this.salasQueries};
  }

  updateSalaQueryis_finalizada(newIsFinalizada: boolean) {
    this.salasQueries.is_finalizada = newIsFinalizada;
    delete this.salasQueries.is_active;
    this.salasQueries = {...this.salasQueries};
  }

  removeSalaQueryIsActive() {
    delete this.salasQueries.is_active;
    this.salasQueries = {...this.salasQueries};
  }

  updateSalaQuerydescricao(newDesc: string, salasParams: SalasParams): SalasParams {
    if (newDesc) {
      salasParams.descricao = newDesc;
    } else {
      delete salasParams.descricao;
    }
    return salasParams;
  }

  updateSalaQuerypage(newPage: number, salasParams: SalasParams): SalasParams {
    if (newPage) {
      salasParams.page = newPage;
    }
    return salasParams;
  }

  updateSalaQuerysize(newSize: number, salasParams: SalasParams): SalasParams {
    if (newSize) {
      salasParams.size = newSize;
    }
    return salasParams;
  }

  updateAllParamsButPageAndSize(salasParams) {
    let salasParamsCopia = {...this.salasQueries};
    salasParamsCopia = this.updateSalaQueryId(salasParams.id, salasParamsCopia);
    salasParamsCopia = this.updateSalaQuerydataInicio(salasParams.dataInicio, salasParamsCopia);
    salasParamsCopia = this.updateSalaQuerydataFim(salasParams.dataFim, salasParamsCopia);
    salasParamsCopia = this.updateSalaQuerydescricao(salasParams.descricao, salasParamsCopia);
    this.salasQueries = salasParamsCopia;
  }

  updateSalasPaginacao(salasParams: SalasParams) {
    let salasParamsCopia = {...this.salasQueries};
    salasParamsCopia = this.updateSalaQuerypage(salasParams.page, salasParamsCopia);
    this.salasQueries = salasParamsCopia;
  }

  removerFiltragem() {
    this.salasQueries = {is_finalizada: false, page: 0, size: 25};
  }
}
