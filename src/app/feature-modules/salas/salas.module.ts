import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbTimepickerModule, NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { SalasRoutingModule } from './salas-routing.module';
import { ListaComponent } from './lista/lista.component';
import { CriarComponent } from './criar/criar.component';
import { SalaComponent } from './lista/sala/sala.component';
import { SalasComponent } from './salas.component';
import { SalaCriacaoFormComponent } from './criar/sala-criacao-form/sala-criacao-form.component';

@NgModule({
  declarations: [
    ListaComponent,
    CriarComponent,
    SalaComponent,
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
    NgMultiSelectDropDownModule
  ]
})
export class SalasModule { }
