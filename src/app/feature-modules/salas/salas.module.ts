import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbTimepickerModule, NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { SalasRoutingModule } from './salas-routing.module';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { SalasComponent } from './salas.component';
import { SalaCriacaoFormComponent } from './criar/sala-criacao-form/sala-criacao-form.component';
import { SalaModule } from 'src/app/shared/components/sala/sala.module';

@NgModule({
  declarations: [
    ListaComponent,
    CriarComponent,
    SalasComponent,
    SalaCriacaoFormComponent
  ],
  imports: [
    CommonModule,
    SalasRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbTypeaheadModule,
    FontAwesomeModule,
    NgMultiSelectDropDownModule,
    SalaModule
  ]
})
export class SalasModule { }
